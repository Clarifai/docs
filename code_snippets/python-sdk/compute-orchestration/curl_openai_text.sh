curl -X POST "https://api.clarifai.com/v2/ext/openai/v1/chat/completions" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "https://clarifai.com/openai/chat-completion/models/gpt-oss-120b/versions/ba43503e5628487686d31f223e71b033",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Who are you?"
      }
    ]
  }'
