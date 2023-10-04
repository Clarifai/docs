curl -X POST "https://api.clarifai.com/v2/users/meta/apps/Llama-2/models/llama2-7b-chat/versions/e52af5d6bc22445aa7a6761f327f7129/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
    "inputs": [
        {
            "data": {
                "text": {
                    "raw": "I love your product very much"
                }
            }
        }
    ],
    "model": {
        "model_version": {
            "output_info": {
                "params": {
                    "temperature":"0.5",
                    "max_tokens":2048,
                    "top_k":"0.95"
                }
            }
        }
    }
}'