# Value of 1 means true, this concept is present
# Region ID should be the region ID of this annotation before patch

curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "annotations": [
      {
        "input_id": "YOUR_INPUT_ID_HERE",
        "id": "YOUR_ANNOTATION_ID_HERE",
        "data": {
          "regions": [
            {
              "id": "REGION_ID_HERE",
              "data": {
                "concepts": [
                  {
                    "id": "apple",
                    "value": 1
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "action":"merge"
}'