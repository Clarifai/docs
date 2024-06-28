from clarifai.rag import RAG

WORKFLOW_URL = 'rag_workflow_url'
# creating RAG object with prebuilt workflow
rag_object_from_url = RAG(workflow_url = WORKFLOW_URL)

result=rag_object_from_url.chat(messages=[{"role":"human", "content":"What is Central Public Procurement Portal"}])

# Extract the content of the response and split it by newline character ('\n') into a list 'ans'.
answer = result[0]["content"].split('\n')
print(answer)
