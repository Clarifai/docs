result=rag_object_from_url.chat(messages=[{"role":"human", "content":"What kind of product does Stark llc sell "}])

answer = result[0]["content"].split('\n')
print(answer)