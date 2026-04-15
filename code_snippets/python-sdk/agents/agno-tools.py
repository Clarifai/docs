import os
from agno.agent import Agent
from agno.models.openai.like import OpenAILike
from agno.tools.duckduckgo import DuckDuckGoTools

agent = Agent(
    model=OpenAILike(
        id="openai/chat-completion/models/gpt-oss-120b",
        api_key=os.environ["CLARIFAI_PAT"],
        base_url="https://api.clarifai.com/v2/ext/openai/v1",
        max_tokens=4096
    ),
    tools=[DuckDuckGoTools()],
    description="Research assistant with web search",
    markdown=True
)

agent.print_response("Search for the latest news on speculative decoding", stream=True)
