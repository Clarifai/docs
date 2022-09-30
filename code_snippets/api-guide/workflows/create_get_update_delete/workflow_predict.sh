curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows/YOUR_WORKFLOW_ID_HERE/results" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-type: application/json" \
  -d '{
    "inputs": [
        {
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg"
          }
        }
      }
    ]
}'