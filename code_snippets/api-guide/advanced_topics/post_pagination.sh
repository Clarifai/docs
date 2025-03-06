curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "searches": [{
      "query": {
        "filters": [
          {
            "annotation": {
              "data": {
                "concepts": [
                  {
                    "id":"people",
                    "value": 1
                  }
                ]
              }
            }
          }
        ]
      }
    }],
    "pagination": {
        "page": 2,
        "per_page": 20
      }
  }'