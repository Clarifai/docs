curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/evaluations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "eval_metrics": [
            {
                "model": {
                    "app_id": "YOUR_MODEL_APP_ID_HERE",
                    "user_id": "YOUR_MODEL_USER_ID_HERE",
                    "id": "YOUR_MODEL_ID_HERE",
                    "model_version": {
                        "id": "YOUR_MODEL_VERSION_HERE"
                    }
                },
                "ground_truth_dataset": {
                    "user_id": "YOUR_DATASET_USER_ID_HERE",
                    "app_id": "YOUR_DATASET_APP_ID_HERE",
                    "id": "YOUR_DATASET_ID_HERE",
                    "version": {
                        "id": "YOUR_DATASET_VERSION_ID_HERE"
                    }
                }
            }
        ]  
  
  }'