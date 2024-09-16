# Import the RAG module from Clarifai for conversational AI tasks
from clarifai.rag import RAG

# Set the user ID for authentication (For creating a new App)
USER_ID = 'USER_ID'

# Alternatively, initialize RAG system using an existing app's URL
APP_URL = 'APP_URL'

# Define the URL of the Mistral-7B language model
LLM_URL = 'https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct'

# Define a template string for generating prompts during inference
RAG_PROMPT_TEMPLATE = "<s>[INST] Context information is below:\n{data.hits}\nGiven the context information and not prior knowledge, answer the query.\nQuery: {data.text.raw}\nAnswer:  [/INST]"

# Setup a RAG object with specified parameters such as user ID, model URL, minimum score threshold, and prompt template

# Option 1: Setup a RAG object with specified parameters using the user_id to create a new app
rag_object_user = RAG.setup(
    user_id=USER_ID,
    pat=PAT,
    llm_url=LLM_URL,
    min_score=0.5,
    max_results=2,
    prompt_template=RAG_PROMPT_TEMPLATE
)

# Option 2: Alternatively, setup a RAG object using an existing app's URL
rag_object_app = RAG.setup(
    app_url=APP_URL,
    pat=PAT,
    llm_url=LLM_URL,
    min_score=0.5,
    max_results=2,
    prompt_template=RAG_PROMPT_TEMPLATE
)
# Choose which initialization method to use based on your setup:
# For new app creation:
print(rag_object_user.prompt_workflow)

# For existing app initialization:
print(rag_object_app.prompt_workflow)