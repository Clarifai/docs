curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/general-image-recognition/outputs" \
  -H "authorization: Key YOUR_PAT_HERE" \
  -H "content-Type: application/json" \
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
  "model": {
    "output_info": {
      "output_config": {
        "select_concepts": [
          {"name": "train"},
          {"id": "ai_6kTjGfF6"}
        ]
      }
    }
  }
}'

