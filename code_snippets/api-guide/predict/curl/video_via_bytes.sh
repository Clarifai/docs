# Model version ID is optional. It defaults to the latest model version, if omitted

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": [
        {
          "data": {
            "video": {
              "base64": "YOUR_BYTES_STRING_HERE"
            }
          }
        }
      ]
    }'
   