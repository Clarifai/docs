# Draw two bounding boxes in the same region
# Value of 1 means true, this concept is present
# Value of 0 means false, this concept is not present

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
              "region_info": {
                  "bounding_box": {
                      "top_row": 0,
                      "left_col": 0,
                      "bottom_row": 0.5,
                      "right_col": 0.5
                  }
              },
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
              "region_info": {
                  "bounding_box": {
                      "top_row": 0.6,
                      "left_col": 0.6,
                      "bottom_row": 0.8,
                      "right_col": 0.8
                  }
              },
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