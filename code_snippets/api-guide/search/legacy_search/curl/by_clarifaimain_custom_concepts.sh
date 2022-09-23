# Here we search for images which we labeled with "ai_fvlBqXZR" and for which the General prediction model
# does not find a "people" concept.

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
  "query": {
    "ands": [
      {
        "input": {
          "data": {
            "concepts": [
              {
                "name": "ai_fvlBqXZR",
                "value": 1
              }
            ]
          }
        }
      },
      {
        "output": {
          "data": {
            "concepts": [
              {
                "name": "people",
                "value": 0
              }
            ]
          }
        }
      }
    ]
  }
}'
