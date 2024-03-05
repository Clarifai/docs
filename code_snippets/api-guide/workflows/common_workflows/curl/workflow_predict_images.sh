curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/workflows/Face-Sentiment/results" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-type: application/json" \
  -d '{
    "inputs": [
        {
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/celebrity.jpeg"
          }
        }
      }
    ]
}'