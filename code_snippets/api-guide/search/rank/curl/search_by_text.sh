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
                "data": {
                "text": {
                    "raw": "black dress with white polka dots"
                }
                }
            }
            }
        ]
        }
      }
    ]
  }'