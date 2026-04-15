import os
from agno.agent import Agent
from agno.models.openai.like import OpenAILike

agent = Agent(
    model=OpenAILike(
        id="openai/chat-completion/models/gpt-oss-120b",
        api_key=os.environ["CLARIFAI_PAT"],
        base_url="https://api.clarifai.com/v2/ext/openai/v1",
        max_tokens=4096
    ),
    description="AI assistant powered by Clarifai",
    markdown=True
)

agent.print_response("What are the key trends in AI for 2026?", stream=True)
