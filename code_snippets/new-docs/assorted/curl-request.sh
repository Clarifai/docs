curl -X POST "https://api.clarifai.com/v2/users/meta/apps/Llama-3/models/Llama-3_2-3B-Instruct/versions/52528868e11d431fa0450f00b22af18c/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": [
        {
          "data": {
            "text": {
              "raw": "What is the future of AI?"
            }
          }
        }
      ]
    }'
   
