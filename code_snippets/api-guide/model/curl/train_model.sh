curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/YOUR_MODEL_ID_HERE/versions" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "model_versions":[{
        "output_info": {
            "data":{
                "concepts":[
                        {
                          "id": "charlie",
                          "value": 1
                        },
                        {
                          "id": "our_wedding",
                          "value": 1
                        }
                    ]
                }
            }
        }]  
  }'