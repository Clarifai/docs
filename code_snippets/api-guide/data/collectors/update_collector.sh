curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/collectors" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  --data-raw '{
    "action": "overwrite",
    "collectors": [
        {
            "id": "YOUR_COLLECTOR_ID_HERE",
            "description": "YOUR_NEW_COLLECTOR_DESCRIPTION_HERE",
            "pre_queue_workflow_id": "YOUR_NEW_PRE_WORKFLOW_ID_HERE",
            "post_queue_workflow_id": "YOUR_NEW_POST_WORKFLOW_ID_HERE",
            "collector_source": {
                "api_post_model_outputs_collector_source": {
                    "model_user_id": "YOUR_USER_ID_HERE",
                    "model_app_id": "YOUR_APP_ID_HERE",
                    "model_id": "YOUR_NEW_MODEL_ID_HERE",
                    "model_version_id": "YOUR_NEW_MODEL_VERSION_ID_HERE",
                    "post_inputs_key_id": "YOUR_API_KEY_HERE",
                    "caller_user_id": "CALLER_USER_ID_HERE"
                }
            }			
       }
    ]
}'