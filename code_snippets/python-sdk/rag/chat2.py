result=rag_object.chat(messages=[{"role":"human", "content":"procedure after following the above steps"}])

answer=result[0]["content"]

print(answer)