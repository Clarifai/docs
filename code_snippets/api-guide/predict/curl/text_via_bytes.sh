# Smaller files (195 KB or less)

curl -X POST "https://api.clarifai.com/v2/users/nlptownres/apps/text-classification/models/multilingual-uncased-sentiment/versions/29d5fef0229a4936a607380d7ef775dd/outputs" \
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
   