import os
import asyncio
from agents import Agent, Runner, function_tool
from agents.extensions.models.litellm_model import LitellmModel

# Define the Clarifai-hosted LLM using the OpenAI-compatible API
clarifai_model = LitellmModel(
    model="openai/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B",
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure CLARIFAI_PAT is set as an environment variable
)

# Define a tool the agent can use
@function_tool
def get_weather(city: str):
    print(f"[debug] getting weather for {city}")
    return f"The weather in {city} is sunny."

# Define the AI agent
agent = Agent(
    name="Assistant",
    instructions="You only respond in haikus.",
    model=clarifai_model,
    tools=[get_weather],
)

# Run the agent with an example prompt
async def run_agent():
    result = await Runner.run(agent, "What's the weather in Tokyo?")
    print(result.final_output)

if __name__ == "__main__":
    asyncio.run(run_agent())
