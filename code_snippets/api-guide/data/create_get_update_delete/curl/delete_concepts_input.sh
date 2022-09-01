# We're removing the concept, so no need to specify the concept value
 
curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/inputs" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [
      {
        "id":"YOUR_INPUT_ID_HERE",
        "data": {
            "concepts":[
                {"id":"water"}
            ]
        }
      }
    ],
    "action":"remove"
  }'
  