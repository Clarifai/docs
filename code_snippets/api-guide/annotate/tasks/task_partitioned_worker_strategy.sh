curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/tasks" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "tasks": [
            {
                "type": "CONCEPTS_CLASSIFICATION",
                "name": "Annotate CONCEPT_ID_HERE",
                "worker": {
                    "strategy": "PARTITIONED",
                    "users": [
                        {"id": "USER_ID_1_HERE"},
                        {"id": "USER_ID_2_HERE"}
                    ],
                    "partitioned_strategy_info": {
                        "type": "WEIGHTED",
                        "workers_per_input": 1,
                        "weights": {
                            "USER_ID_1_HERE": 90,
                            "USER_ID_2_HERE": 10
                        }
                    }
                },
                "concept_ids": [
                    "CONCEPT_ID_HERE"
                ],
                "input_source": {
                    "type": "ALL_INPUTS"
                },
                "sample_ms": 1000,
                "review": {
                    "strategy": "NONE"
                }
            }
        ]
    }'
  