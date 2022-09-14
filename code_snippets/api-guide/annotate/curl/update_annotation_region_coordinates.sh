curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "annotations": [
            {
                "data": {
                    "regions": [{
                        "region_info": {
                            "bounding_box": {
                                "top_row": 0,
                                "left_col": 0,
                                "bottom_row": 1,
                                "right_col": 1
                            }
                        },
                        "data": {
                            "concepts": [{
                                "id": "bike",
                                "value": 1
                            }]
                        }
                    }]
                },
                "input_id": "YOUR_INPUT_ID_HERE",
                "id": "YOUR_ANNOTATION_ID_HERE"
            }
        ],
    "action":"overwrite"
}'