curl -X POST "https://api.clarifai.com/v2/users/openai/apps/chat-completion/models/openai-gpt-4-vision/versions/266df29bc09843e0aee9b7bf723c03c2/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
    "inputs": [
        {
            "data": {
                "text": {
                    "raw": "Write a caption for the image"
                },
                "image": {
                    "url": "https://samples.clarifai.com/metro-north.jpg"
                }
            }
        }
    ],
    "model": {
        "model_version": {
            "output_info": {
                "params": {
                    "temperature": 0.5,
                    "max_tokens": 2048,
                    "top_p": 0.95,
                    "api_key": "ADD_THIRD_PARTY_KEY_HERE"
                }
            }
        }
    }
}'
