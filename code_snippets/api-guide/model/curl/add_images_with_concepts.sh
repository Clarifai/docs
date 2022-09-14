curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/inputs" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/puppy.jpeg",
            "allow_duplicate_url": true
          },
          "concepts":[
            {
              "id": "charlie",
              "value": 1
            },
            {
              "id": "our_wedding",
              "value": 0
            }
          ]
        }
      },
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/wedding.jpg",
            "allow_duplicate_url": true
          },
          "concepts":[
            {
              "id": "our_wedding",
              "value": 1
            },
            {
              "id": "charlie",
              "value": 0
            },
            {
              "id": "cat",
              "value": 0
            }
          ]
        }
      }
    ]
  }'