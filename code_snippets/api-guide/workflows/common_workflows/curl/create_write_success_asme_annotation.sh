curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "model": {
            "id": "write-success-as-me",
            "model_type_id": "annotation-writer",
            "output_info": {
                "params": {
                    "annotation_status": 24150,
                    "annotation_user_id": "ANNOTATION_USER_ID_HERE"
                }
            }
        }
    }'