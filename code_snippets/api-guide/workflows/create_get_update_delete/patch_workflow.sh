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
                        "id": "audio-to-text",
                        "model": {
                            "id": "asr-wav2vec2-base-960h-english",
                            "model_version": {
                                "id": "f4deae70a473492a8e2f9b7bb1dbee85"
                            }
                        }
                    },
                    {
                        "id": "text-summarization",
                        "model": {
                            "id": "text-summarization-english-distilbart-cnn-12-6",
                            "model_version": {
                                "id": "8279cec2221a4b1d9db774470940aebd"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "audio-to-text"
                            }
                        ]                        
                    },
                    {
                        "id": "english-to-french",
                        "model": {
                            "id": "translation-english-to-french-text",
                            "model_version": {
                                "id": "c65a4a51c2b646fca5f0e4bf1ff200d7"
                            }
                        },
                        "node_inputs": [
                            {
                                "node_id": "text-summarization"
                            }
                        ] 
                    }
                ]
            }
        ]
    }'