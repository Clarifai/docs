import asyncio
import os
import json
from openai import AsyncOpenAI
from fastmcp import Client
from fastmcp.client.transports import StreamableHttpTransport
from clarifai.urls.helper import ClarifaiUrlHelper

API_KEY = os.getenv("CLARIFAI_PAT", "None")  # Set env var; avoid hardcoding secrets.

transport = StreamableHttpTransport(
    url=ClarifaiUrlHelper().mcp_api_url(),
    headers={"Authorization": f"Bearer {API_KEY}"},
)

openai_client = AsyncOpenAI(
    api_key=API_KEY,
    base_url="https://api.clarifai.com/v2/ext/openai/v1"
)

MODEL_ID = "https://clarifai.com/openai/chat-completion/models/gpt-oss-120b"

def format_tools_to_openai_function(tools):
    return [
        {
            "type": "function",
            "function": {
                "name": tool.name,
                "description": f"[{tool.name}] {tool.description}",
                "parameters": tool.inputSchema,
            },
        }
        for tool in tools
    ]

async def first_model_call(messages, tools):
    return await openai_client.chat.completions.create(
        model=MODEL_ID,
        messages=messages,
        temperature=0.4,
        tools=tools,
        tool_choice="auto",
        stream=False,
    )

async def final_model_call(messages):
    # Force answer without further tool use
    return await openai_client.chat.completions.create(
        model=MODEL_ID,
        messages=messages,
        temperature=0.4,
        tool_choice="none",
        stream=False,
    )

async def run_two_step_answer(user_prompt: str):
    # 1. Base messages
    messages = [
        {
            "role": "system",
            "content": (
                "You can call tools only in the FIRST response if needed to gather info. "
                "After tool results are provided, you MUST produce the final answer without more tool calls."
            ),
        },
        {"role": "user", "content": user_prompt},
    ]

    # Load tool definitions
    async with Client(transport) as client:
        tools_raw = await client.list_tools()
    tools = format_tools_to_openai_function(tools_raw)

    # 2. First model pass (may request tool calls)
    first_resp = await first_model_call(messages, tools)
    first_msg = first_resp.choices[0].message
    messages.append({
        "role": "assistant",
        "content": first_msg.content,
        "tool_calls": getattr(first_msg, "tool_calls", None)
    })

    # If no tool calls, just answer now
    if not first_msg.tool_calls:
        print("Assistant (no tools needed):", first_msg.content)
        return first_msg.content

    # 3. Execute ALL requested tool calls once
    async with Client(transport) as client:
        for tool_call in first_msg.tool_calls:
            tool_name = tool_call.function.name
            raw_args = tool_call.function.arguments or "{}"
            try:
                args = json.loads(raw_args)
            except json.JSONDecodeError:
                args = {}
            print(f"\n== Executing tool: {tool_name} | args: {raw_args}")
            try:
                result = await client.call_tool(tool_name, arguments=args)
                # Collect text parts
                if hasattr(result, "content"):
                    parts = [getattr(seg, "text", "") for seg in result.content if getattr(seg, "text", "")]
                    result_text = "\n".join(parts) if parts else str(result)
                else:
                    result_text = str(result)
            except Exception as e:
                result_text = f"Tool {tool_name} failed: {e}"
                print(result_text)

            if len(result_text) > 4000:
                result_text = result_text[:3500] + "\n...[truncated]..."
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": result_text
            })

    # 4. Final model call (NO more tools)
    messages.append({
        "role": "system",
        "content": "Use the tool outputs above to craft the final answer. Do not call tools again."
    })
    final_resp = await final_model_call(messages)
    final_msg = final_resp.choices[0].message.content
    print("\nFinal Answer:\n", final_msg)
    return final_msg

async def main():
    await run_two_step_answer("Who won the 2025 Ballon d'Or?")

if __name__ == "__main__":
    asyncio.run(main())