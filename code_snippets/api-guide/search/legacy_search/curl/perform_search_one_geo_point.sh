curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "query": {
      "ands": [
        {
          "input": {
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
  }'