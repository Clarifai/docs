curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/tasks" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
      "tasks": [
          {
              "type": "CONCEPTS_CLASSIFICATION",
              "name": "Annotate CONCEPT_ID_HERE",
              "worker": {
                  "strategy": "DYNAMIC",
                  "workers": [
                      {
                          "user": {
                              "id": "WORKER_USER_ID_HERE"
                          }
                      }
                  ]
              },
              "concepts": [
                  {
                      "concept": {
                          "id": "CONCEPT_ID_HERE"
                      }
                  }
              ],
              "input_source": {
                  "type": "DATASET",
                  "id": "DATASET_ID_HERE"
              },
              "sample_ms": 1000,
              "review": {
                  "strategy": "MANUAL",
                  "manual_strategy_info": {
                      "sample_percentage": 0.5
                  },
                  "users": [
                      {
                          "id": "REVIEWER_USER_ID_HERE"
                      }
                  ]
              }
          }
      ]
  }'
