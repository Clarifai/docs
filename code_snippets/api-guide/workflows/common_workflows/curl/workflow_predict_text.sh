curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/workflows/Language-Understanding/results" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-type: application/json" \
  -d '{
    "inputs": [
        {
          "data": {
            "text": {
              "raw": "This is a test text for testing"
          }
        }
      }
    ]
}'