# Value of 1 means true, this concept is present
# Value of 0 means false, this concept is not present
# Region ID should be the region ID returned from a list annotations call

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "annotations": [
      {
        "input_id": "YOUR_INPUT_ID_HERE",
        "data": {
          "regions": [
            {
              "id": "REGION_ID_1",
              "data": {
                "concepts": [
                  {
                    "id": "tree",
                    "value": 1
                  },
                  {
                    "id": "water",
                    "value": 0
                  }
                ]
              }
            }
          ]
        }        
      }, {
        "input_id": "YOUR_INPUT_ID_HERE",
        "data": {
          "regions": [
            {
              "id": "REGION_ID_2",
              "data": {
                "concepts": [
                  {
                    "id": "bike",
                    "value": 1
                  }
                ]
              }
            }
          ]
        }        
      }
    ]
}'