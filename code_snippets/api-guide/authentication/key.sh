curl -X POST "https://api.clarifai.com/v2/models/YOUR_MODEL_ID_HERE/versions/YOUR_MODEL_VERSION_HERE/outputs" \
    -H "Authorization: Key YOUR_API_KEY_HERE" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": [
        {
          "data": {
            "image": {
              "url": "https://samples.clarifai.com/metro-north.jpg"
            }
          }
        }
      ]
    }'
   