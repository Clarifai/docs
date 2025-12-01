curl --location 'http://0.0.0.0:4000/chat/completions' \
--header 'Content-Type: application/json' \
--data '{
  "model": "clarifai-model",
  "messages": [
    {"role": "user", "content": "what llm are you"}
  ]
}'