# Here we search for images which we labeled with "cat" and for which the General prediction model does not find
# a "dog" concept.

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations/searches" \
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
                  "concepts": [
                    {
                      "id":"cat",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ],
          "ranks": [
            {
              "annotation": {
                "data": {
                  "concepts": [
                    {
                      "id":"dog",
                      "value": 0
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
