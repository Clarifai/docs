curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/detection-test/versions" \
-H "Authorization: Key YOUR_PAT_HERE" \
-H "Content-Type: application/json" \
-d '{
"model_versions": [{
    "train_info": {
        "params": {
            "template": "MMDetection_SSD",
            "num_epochs": 1
        },
        "resume_from_model": {
            "id": "detection-test",
            "model_version": {
                "id": "5af1bd0fb79d47289ab82d5bb2325c81"
            }
        }
    },
    "output_info": {
        "data": {
            "concepts": [
                {
                    "id": "face"
                }
            ]
        }
    }
}] 
}'
