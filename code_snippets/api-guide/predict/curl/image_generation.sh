curl -X POST "https://api.clarifai.com/v2/users/stability-ai/apps/stable-diffusion-2/models/stable-diffusion-xl/versions/0c919cc1edfc455dbc96207753f178d7/outputs" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": [
        {
          "data": {
            "text": {
              "raw": "A penguin watching the sunset."
            }
          }
        }
      ]
    }'
   