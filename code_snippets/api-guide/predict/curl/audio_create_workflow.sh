curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \
    -H "Content-Type: application/json" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    --data-raw '{
      "workflows": [{
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
            "id": "sentiment-analysis",
            "model": {
              "id": "sentiment-analysis-distilbert-english",
              "model_version": {
                "id": "c0b09e606db94d9bae7eb40c626192fc"
              }
            },
              "node_inputs": [
                {
                  "node_id": "audio-to-text"
                }
              ]
          }
        ]
      }]
    }'