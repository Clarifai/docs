curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
      "annotations": [
        {
          "input_id": "INPUT_ID_HERE",
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
          },
          "annotation_info": {
            "task_id": "TASK_ID_HERE"
          }
        }
      ]
    }'