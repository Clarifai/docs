curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/models/image-general-segmentation/versions/1581820110264581908ce024b12b4bfb/outputs" \
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
   