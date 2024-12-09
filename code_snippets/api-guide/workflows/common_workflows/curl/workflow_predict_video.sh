curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows/YOUR_WORKFLOW_ID_HERE/results" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-type: application/json" \
  -d '{
    "inputs": [
        {
          "data": {
            "video": {
              "url": "https://samples.clarifai.com/beer.mp4"
          }
        }
      }
    ],
    "output_config": {
        "sample_ms": 500
    }
}'