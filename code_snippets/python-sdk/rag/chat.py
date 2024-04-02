# Initiating a conversation with the RAG (Retrieval Augmented Generation) model object (`rag_object_gpt`).
# Sending a message containing the query "How to change brake fluid" to the model and awaiting a response.
result = rag_object.chat(messages=[{"role": "human", "content": "How to change brake fluid"}])

# Extracting the content of the response from the result.
answer = result[0]["content"]

# Printing out the response
print(answer)