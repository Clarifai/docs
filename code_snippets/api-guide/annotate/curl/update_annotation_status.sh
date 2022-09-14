curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "annotations": [
      {
        "input_id": "YOUR_INPUT_ID_HERE",
        "id": "YOUR_ANNOTATION_ID_HERE",
        "status": {
          "code": "ANNOTATION_SUCCESS"
        }
      }
    ],
    "action":"merge"
}'