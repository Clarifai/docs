curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/concepts/YOUR_CONCEPT_ID_HERE/languages" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "concept_languages": [
      {
        "id": "LANGUAGE_ID_HERE",
        "name": "LANGUAGE_NAME_HERE"
      }
      ]
  }' 