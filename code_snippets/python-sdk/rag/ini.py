# Import the RAG module from Clarifai for conversational AI tasks
from clarifai.rag import RAG

# Set the user ID for authentication
USER_ID = 'USER_ID'

# Define the URL of the Mistral-7B language model
LLM_URL = 'https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct'

# Define a template string for generating prompts during inference
RAG_PROMPT_TEMPLATE = "<s>[INST] Context information is below:\n{data.hits}\nGiven the context information and not prior knowledge, answer the query.\nQuery: {data.text.raw}\nAnswer:  [/INST]"

# Setup a RAG object with specified parameters such as user ID, model URL,
# minimum score threshold, and prompt template
rag_object = RAG.setup(user_id=USER_ID, llm_url=LLM_URL, min_score=0.5, max_results = 2, prompt_template=RAG_PROMPT_TEMPLATE)