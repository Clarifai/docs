curl -X POST "https://api.clarifai.com/v2/users/facebook/apps/asr/models/asr-wav2vec2-base-960h-english/outputs" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-type: application/json" \
  -d '{
    "inputs": [
        {
          "data": {
            "audio": {
              "base64": "YOUR_BYTES_STRING_HERE"
          }
        }
      }
    ]
}'