curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/YOUR_MODEL_ID_HERE/versions/time_estimate/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "model_versions": [{
            "train_info": {
                "params": {
                    "template": "MMDetection_FasterRCNN"                    
                }
            }
        }],
        "estimated_input_count": 100
  }'