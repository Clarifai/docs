curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "model": {
            "id": "embed-test-1591638385",
            "model_type_id": "visual-embedder",
            "train_info": {
                "params": {
                    "template": "classification_basemodel_v1_embed",
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