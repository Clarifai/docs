# Value of 0 will search for images that don't have the concept.
# Instead of "name", you can search by "id" as well.

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
                "concepts": [
                    {
                    "name":"犬",
                    "language": "ja",
                    "value": 1
                    }
                ]
               }
            }
           }
        ]
        }
      }
    ]
  }'