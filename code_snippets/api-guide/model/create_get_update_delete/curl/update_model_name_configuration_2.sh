curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/YOUR_MODEL_ID_HERE/versions" \
-H "Authorization: Key YOUR_PAT_HERE" \
-H "Content-Type: application/json" \
-d '{
  "model_versions": [
    {
      "id": "YOUR_MODEL_VERSION_ID_HERE",
      "output_info": {
        "output_config": {
          "concepts_mutually_exclusive": true
        }
      }
    }
  ],
  "action": "overwrite"
}'
