# Value of 1 means true, this concept is present
# Value of 0 means false, this concept is not present

curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "annotations": [
      {
        "input_id": "YOUR_INPUT_ID_HERE",
        "id": "YOUR_ANNOTATION_ID_HERE",
        "data": {
          "concepts": [
            {
              "id": "apple",
              "value": 1
            }
          ]
        }
      }
    ],
    "action":"merge"
}'