curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "model": {
      "id": "text-generation-model",
      "model_type_id": "text-to-text",
      "notes": "text generation notes"
    }
  }'