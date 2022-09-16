curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "action": "overwrite",
        "apps": [
            {
                "id": "YOUR_APP_ID_HERE",
                "default_workflow_id": "auto-annotation-workflow-ID"
            }
        ]
    }'