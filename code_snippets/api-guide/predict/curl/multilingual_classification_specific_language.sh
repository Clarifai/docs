curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/models/general-image-recognition/outputs" \
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
  ],
  "model":{
    "output_info":{
      "output_config":{
        "language":"zh"
      }
    }
  }
}'
