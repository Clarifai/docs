curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/workflows/asr-sentiment/results" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-type: application/json" \
  -d '{
    "inputs": [
        {
          "data": {
            "audio": {
              "url": "https://samples.clarifai.com/negative_sentence_1.wav"
          }
        }
      }
    ]
}'