curl -X POST "https://api.clarifai.com/v2/users/openai/apps/dall-e/models/dall-e-3/versions/dc9dcb6ee67543cebc0b9a025861b868/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
    "inputs": [
        {
            "data": {
                "text": {
                    "raw": "An expressive oil painting of a basketball player dunking, depicted as an explosion of a nebula"
                }
            }
        }
    ],
    "model": {
        "model_version": {
            "output_info": {
                "params": {
                    "size":"1024x1024",
                    "quality":"hd",
                    "api_key":"ADD_THIRD_PARTY_KEY_HERE"
                }
            }
        }
    }
}'