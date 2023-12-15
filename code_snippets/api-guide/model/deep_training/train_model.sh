curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/YOUR_MODEL_ID_HERE/versions" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "model_versions": [{
            "train_info": {
                "params": {
                    "template": "MMClassification_ResNet_50_RSB_A1",
                    "num_epochs": 2
                }
            },
            "output_info": {
                "data": {
                    "concepts": [
                        {
                            "id": "ferrari23"
                        },
                        {
                            "id": "outdoors23"
                        }
                    ]
                }
            }
        }] 
  }'