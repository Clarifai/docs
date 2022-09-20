curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "workflows": [
            {
                "id": "visual-text-recognition-id",
                "nodes": [
                    {
                        "id": "detect-concept",
                        "model": {
                            "id": "2419e2eae04d04f820e5cf3aba42d0c7",
                            "model_version": {
                                "id": "75a5b92a0dec436a891b5ad224ac9170"
                            }
                        }
                    },
                    {
                        "id": "image-crop",
                        "model": {
                            "id": "ce3f5832af7a4e56ae310d696cbbefd8",
                            "model_version": {
                                "id": "a78efb13f7774433aa2fd4864f41f0e6"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "general-concept"
                            }
                        ]
                    },
                    {
                        "id": "image-to-text",
                        "model": {
                            "id": "9fe78b4150a52794f86f237770141b33",
                            "model_version": {
                                "id": "d94413e582f341f68884cac72dbd2c7b"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "image-crop"
                            }
                        ]
                    }
                ]
            }
        ]
    }'