curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/tasks" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "tasks": [
            {
                "type": "CONCEPTS_CLASSIFICATION",
                "name": "Annotate CONCEPT_ID_HERE",
                "worker": {
                    "strategy": "FULL",
                    "users": [
                        {"id": "WORKER_USER_ID_HERE"}
                    ]
                },
                "concept_ids": [
                    "CONCEPT_ID_HERE"
                ],
                "input_source": {
                    "type": "ALL_INPUTS"
                },
                "sample_ms": 1000,
                "review": {
                    "strategy": "MANUAL",
                    "manual_strategy_info": {
                        "sample_percentage": 0.5
                    },
                    "users": [
                        {"id": "REVIEWER_USER_ID_HERE"}
                    ]
                }
            }
        ]
    }'