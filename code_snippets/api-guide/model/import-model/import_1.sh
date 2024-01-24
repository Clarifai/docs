curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "model": {
      "id": "zero-shot-text-model",
      "model_type_id": "zero-shot-text-classifier",
      "notes": "zero shot text classifier"
    }
  }'