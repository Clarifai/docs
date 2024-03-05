curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/YOUR_MODEL_ID_HERE/versions/YOUR_MODEL_VERSION_ID_HERE/evaluations" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "eval_metrics": [
            {
                "eval_info": { 
                    "params": {
                        "dataset_id": "YOUR_DATASET_ID_HERE"
                    }
                }

            }
        ]  
  
  }'
  