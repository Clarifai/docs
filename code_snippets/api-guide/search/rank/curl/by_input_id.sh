curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "searches": [
      {
        "query": {
          "ranks": [
            {
              "annotation": {
                     "input_id": "c29f81469db34e04b36d22b9a4aba1fa"              
              }
            }
          ]
        }
      }
    ]
  }'