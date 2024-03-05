curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Content-Type: application/json" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    --data-raw '{
      "workflows": [{
        "id": "my-custom-prompter-workflow",
        "nodes": [
          {
            "id": "prompter-model",
            "model": {
              "id": "my-prompter-model",
              "user_id": "YOUR_USER_ID_HERE",
              "app_id": "my-custom-app",
              "model_version": {
                "id": "e851fb99a3b14df788ce11accee45c19"
              }
            }
          },
          {
            "id": "text-to-text",
            "model": {
              "id": "GPT-4",
              "user_id": "openai",
              "app_id": "chat-completion",
              "model_version": {
                "id": "5d7a50b44aec4a01a9c492c5a5fcf387"
              }
            },
              "node_inputs": [
                {
                  "node_id": "prompter-model"
                }
              ]
          }
        ]
      }]
    }'