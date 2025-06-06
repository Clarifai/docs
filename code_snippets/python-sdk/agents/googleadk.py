import os
import asyncio
from google.adk.agents import Agent
from google.adk.models.lite_llm import LiteLlm
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

# Initialize Clarifai-hosted model using LiteLlm
clarifai_model = LiteLlm(
    model="openai/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B",
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure this environment variable is set
)

def get_weather(city: str) -> dict:
    """
    Mock tool that retrieves weather data for a city.
    """
    print(f"[Tool] get_weather called for: {city}")
    city_key = city.lower().replace(" ", "")

    mock_data = {
        "newyork": {"status": "success", "report": "Sunny, 25°C in New York."},
        "london": {"status": "success", "report": "Cloudy, 15°C in London."},
        "tokyo": {"status": "success", "report": "Light rain, 18°C in Tokyo."},
    }

    return mock_data.get(city_key, {
        "status": "error",
        "error_message": f"No weather data available for '{city}'."
    })

# Define the agent
agent = Agent(
    name="WeatherAssistant",
    description="Provides weather updates using Clarifai-hosted LLM and custom tools.",
    instruction="You are a helpful weather assistant. Use the `get_weather` tool to fetch city weather. "
                "Return detailed weather reports when available, or clear error messages if not.",
    model=clarifai_model,
    tools=[get_weather],
)

async def main():
    """
    Runs an interactive loop with the weather agent in the terminal.
    """
    app_name = "weather_agent_gpt"
    session_service = InMemorySessionService()

    await session_service.create_session(
        app_name=app_name,
        user_id="terminal_user",
        session_id="default_session"
    )

    runner = Runner(
        agent=agent,
        app_name=app_name,
        session_service=session_service
    )

    print("Ask about the weather (e.g., 'What's the weather in Tokyo?') or type 'exit' to quit.")

    while True:
        user_input = input("You: ")
        if user_input.strip().lower() == "exit":
            break

        response_events = runner.run(
            user_id="terminal_user",
            session_id="default_session",
            new_message=types.Content(role="user", parts=[types.Part(text=user_input)])
        )

        final_response = next(
            (
                event.content.parts[0].text
                for event in response_events
                if event.is_final_response() and event.content and event.content.parts
            ),
            "No response from agent."
        )

        print(f"Agent: {final_response}")

if __name__ == "__main__":
    asyncio.run(main())
