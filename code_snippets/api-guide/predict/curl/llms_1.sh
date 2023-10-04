curl -X POST "https://api.clarifai.com/v2/users/meta/apps/Llama-2/models/llama2-7b-chat/versions/e52af5d6bc22445aa7a6761f327f7129/outputs" \
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
   