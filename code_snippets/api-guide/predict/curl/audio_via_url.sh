curl -X POST "https://api.clarifai.com/v2/users/facebook/apps/asr/models/asr-wav2vec2-base-960h-english/outputs" \
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