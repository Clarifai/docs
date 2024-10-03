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
          "workers": [
            {
              "user": {
                "id": "USER_ID_1_HERE"
              }
            },
            {
              "user": {
                "id": "USER_ID_2_HERE"
              }
            },
            {
              "user": {
                "id": "USER_ID_3_HERE"
              }
            }
          ],
          "partitioned_strategy_info": {
            "type": "WEIGHTED",
            "workers_per_input": 3,
            "weights": {
              "USER_ID_1_HERE": 1,
              "USER_ID_2_HERE": 1,
              "USER_ID_3_HERE": 1
            }
          }
        },
        "concepts": [
          {
            "concept": {
              "id": "CONCEPT_ID_HERE"
            }
          }
        ],
        "input_source": {
          "type": "ALL_INPUTS"
        },
        "sample_ms": 1000,
        "review": {
          "strategy": "CONSENSUS",
          "consensus_strategy_info": {
            "approval_threshold": 2
          },
          "users": [
            {
              "id": "USER_ID_4_HERE"
            }
          ]
        }
      }
    ]
  }'
