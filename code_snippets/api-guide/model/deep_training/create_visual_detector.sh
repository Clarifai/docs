curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "model": {
            "id": "detection-test-1591638385",
            "model_type_id": "visual-detector",
            "train_info": {
                "params": {
                    "template": "Clarifai_InceptionV2",
                    "num_epochs": 2
                }
            },
            "output_info": {
                "data": {
                    "concepts": [
                        {"id":"ferrari23"},
                        {"id":"outdoors23"}
                    ]
                },
                "output_config": {
                  "closed_environment" : true
                }
            }
        }
    }'