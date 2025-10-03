curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/secrets" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "secrets": [
      {
        "id": "OPENAI_KEY_2025",        
        "value": "your_super_secret_api_key_here",
        "description": "My OpenAI key for experiments"  
      }
    ]
  }'
