curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Content-Type: application/json" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    --data-raw '{
      "workflows": [{
        "id": "my-custom-workflow",
        "nodes": [
          {
            "id": "optical-character-recognizer",
            "model": {
              "id": "ocr-scene-english-paddleocr",
              "model_version": {
                "id": "40dbb2c9cde44a27af226782e7157006"
              }
            }
          },
          {
            "id": "text-to-text",
            "model": {
              "id": "text-translation-english-spanish",
              "model_version": {
                "id": "643f30558de34013aff72b0e21f244f5"
              }
            },
              "node_inputs": [
                {
                  "node_id": "optical-character-recognizer"
                }
              ]
          }
        ]
      }]
    }'