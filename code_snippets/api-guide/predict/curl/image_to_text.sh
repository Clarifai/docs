curl -X POST "https://api.clarifai.com/v2/users/salesforce/apps/blip/models/general-english-image-caption-blip/versions/cdb690f13e62470ea6723642044f95e4/outputs" \
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
   