curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows/" \
    -H "Content-Type: application/json" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    --data-raw '{
        "action": "overwrite",
        "workflows": [
            {
                "id": "my-custom-workflow",
                "nodes": [
                    {
                        "id": "travel-concepts",
                        "model": {
                            "id": "ccc28c313d69466f836ab83287a54ed9",
                            "model_version": {
                                "id": "cce28c313d69466f836ab83287a54ed9"
                            }
                        }
                    },
                    {
                        "id": "nsfw-concepts",
                        "model": {
                            "id": "ccc76d86d2004ed1a38ba0cf39ecb4b1",
                            "model_version": {
                                "id": "cc76a92beaeb4d8495a58ba197998158"
                            }
                        }
                    },
                    {
                        "id": "wedding-concepts",
                        "model": {
                            "id": "c386b7a870114f4a87477c0824499348",
                            "model_version": {
                                "id": "787cc9a002164250800598d36b072384"
                            }
                        }
                    }
                ]
            }
        ]
    }'