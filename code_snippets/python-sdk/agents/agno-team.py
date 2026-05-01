import os
from agno.agent import Agent
from agno.models.openai.like import OpenAILike
from agno.team import Team
from agno.tools.duckduckgo import DuckDuckGoTools
from agno.tools.yfinance import YFinanceTools

def clarifai_model(model_id="openai/chat-completion/models/gpt-oss-120b"):
    return OpenAILike(
        id=model_id,
        api_key=os.environ["CLARIFAI_PAT"],
        base_url="https://api.clarifai.com/v2/ext/openai/v1",
        max_tokens=4096,
    )

web_agent = Agent(
    name="Web Research Agent",
    model=clarifai_model(),
    tools=[DuckDuckGoTools()],
)

finance_agent = Agent(
    name="Financial Analysis Agent",
    model=clarifai_model(),
    tools=[YFinanceTools()],
)

team = Team(
    members=[web_agent, finance_agent],
    model=clarifai_model(),
)

team.print_response("Analyze the current state of the AI chip market", stream=True)
