curl -X POST "https://api.clarifai.com/v2/users/eleven-labs/apps/audio-generation/models/speech-synthesis/versions/f588d92c044d4487a38c8f3d7a3b0eb2/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
    "inputs": [
        {
            "data": {
                "text": {
                    "raw": "I love your product very much!"
                }
            }
        }
    ],
    "model": {
        "model_version": {
            "output_info": {
                "params": {
                    "model_id": "eleven_multilingual_v1",
                    "voice_id": "EXAVITQu4vr4xnSDxMaL",
                    "similarity_boost": 0,
                    "stability": 0.5
                }
            }
        }
    }
}'

