curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "workflows": [
            {
                "id": "my-new-workflow-id",
                "nodes": [
                    {
                        "id": "embed",
                        "model": {
                            "id": "YOUR_EMBED_MODEL_ID_HERE",
                            "model_version": {
                                "id": "YOUR_EMBED_MODEL_VERSION_ID_HERE"
                            }
                        }
                    },
                    {
                        "id": "my-custom-model",
                        "model": {
                            "id": "YOUR_CUSTOM_MODEL_ID_HERE",
                            "model_version": {
                                "id": "YOUR_CUSTOM_MODEL_VERSION_ID_HERE"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "embed"
                            }
                        ]
                    }
                ]
            }
        ]
    }'