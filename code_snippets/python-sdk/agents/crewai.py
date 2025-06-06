import os
from crewai import Agent, Task, Crew, Process, LLM

# Configure Clarifai LLM
clarifai_llm = LLM(
    model="openai/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B",   
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ["CLARIFAI_PAT"]  # Ensure this environment variable is set
)

# Define the Researcher Agent
researcher = Agent(
    role="Senior Research Analyst",
    goal="Uncover cutting-edge developments and facts on a given topic",
    backstory="""You are a meticulous and insightful research analyst at a tech think tank.
    You specialize in identifying trends, gathering verified information,
    and presenting concise insights.""",    
    verbose=True, # Set to False to disable verbose output 
    allow_delegation=False,
    llm=clarifai_llm
)

def create_research_task(topic):
    return Task(
        description=f"""Conduct a comprehensive analysis of '{topic}'.
        Identify key trends, breakthrough technologies, important figures, and potential industry impacts.
        Focus on factual and verifiable information.""",
        expected_output="A detailed analysis report in bullet points, including sources if possible.",
        agent=researcher
    )

def run_research(topic):
    task = create_research_task(topic)

    crew = Crew(
        agents=[researcher],
        tasks=[task],
        process=Process.sequential,
        verbose=True
    )

    return crew.kickoff() # Starts the execution of the crew

if __name__ == "__main__":
    topic = input("Enter the topic to research: ").strip()
    if topic:
        print(f"\n Researching '{topic}'...\n")
        result = run_research(topic)
        print("\n Research Completed:\n")
        print(result)
    else:
        print("No topic entered.")
