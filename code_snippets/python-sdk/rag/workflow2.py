#initialize  RAG using workflow ID
USER_ID = 'user_id'
LLM_URL = 'https://clarifai.com/openai/chat-completion/models/GPT-4'
RAG_PROMPT_TEMPLATE = "Context information is below:\n{data.hits}\nGiven the context information and not prior knowledge, answer the query.\nQuery: {data.text.raw}\nAnswer: "
rag_object_gpt = RAG.setup(user_id=USER_ID,llm_url=LLM_URL, min_score=0.5, prompt_template=RAG_PROMPT_TEMPLATE,workflow_id="workflow_id")