curl -X POST "https://api.clarifai.com/v2/users/cohere/apps/embed/models/cohere-embed-english-v3_0/versions/e2dd848faf454fbda85c26cf89c4926e/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
    "inputs": [
        {
            "data": {
                "text": {
                    "raw": "Give me an exotic yet tasty recipe for some noodle dish"
                }
            }
        }
    ],
    "model": {
        "model_version": {
            "output_info": {
                "params": {
                    "input_type":"search_query"
                }
            }
        }
    }
}'
