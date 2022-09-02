curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/91ff804429654ce25e93e710beea82ea/versions/79fa197706da4212a6e74afcd919d5a5/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": [
        {
          "data": {
            "text": {
              "url": "https://samples.clarifai.com/negative_sentence_12.txt"
            }
          }
        }
      ]
    }'
   