curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annnotations/searches"  \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "searches": [
      {
        "query": {
          "filters": [
            {
            "annotation": {
                "data": {
                "geo": {
                    "geo_point": {
                    "longitude": -29.0,
                    "latitude": 40.0
                    },
                    "geo_limit": {
                    "type": "withinKilometers",
                    "value": 150
                    }
                }
              }
            }
          }
        ]
        }
      }
    ]
  }'