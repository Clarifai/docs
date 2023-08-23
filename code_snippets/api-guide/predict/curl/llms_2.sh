curl -X POST "https://api.clarifai.com/v2/users/meta/apps/Llama-2/models/Llama2-7b-chat/versions/e52af5d6bc22445aa7a6761f327f7129/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": [
        {
          "data": {
            "text": {
              "raw": "YOUR_TEXT_FILE_BYTES_HERE"
            }
          }
        }
      ]
    }'
   