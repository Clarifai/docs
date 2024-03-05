curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/inputs/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "searches": [
      {
        "query": {
          "filters": [
            {
              "input": {
				"dataset_ids" : ["YOUR_DATASET_ID_HERE"]
              }
            }
          ],
          "ranks": [
            {
              "annotation": {
                "data": {
                  "image": {
                      "url":"https://samples.clarifai.com/metro-north.jpg"
                    }                  
                }
              }
            }
          ]
        },
		"min_value": 0.95		
      }
    ]
  }'