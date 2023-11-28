curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/models/general-image-detection/versions/1580bb1932594c93b7e2e04456af7c6f/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
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
   