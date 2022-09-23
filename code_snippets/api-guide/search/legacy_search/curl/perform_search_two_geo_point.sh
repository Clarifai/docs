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
                "geo_box": [
                  {
                    "geo_point": {
                      "latitude": 42,
                      "longitude": -31
                    }
                  },
                  {
                    "geo_point": {
                      "latitude": 39,
                      "longitude": -29
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }'