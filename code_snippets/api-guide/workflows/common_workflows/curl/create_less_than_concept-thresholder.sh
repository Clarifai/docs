curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "model": {
            "id": "less-than-model-id",
            "model_type_id": "concept-thresholder",
            "output_info": {
                "data": {
                    "concepts": [
                        {
                            "id": "peopleID",
                            "value": 0.5
                        },
                        {
                            "id": "manID",
                            "value": 0.5
                        },
                        {
                            "id": "adultID",
                            "value": 0.95
                        }
                    ]
                },
                "params": {
                    "concept_threshold_type": "LESS_THAN"
                }
            }
        }
    }'