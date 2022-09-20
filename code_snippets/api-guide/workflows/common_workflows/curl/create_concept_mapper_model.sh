curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "model": {
            "id": "synonym-model-id",
            "model_type_id": "concept-synonym-mapper",
            "output_info": {
                "params": {
                    "knowledge_graph_id": ""
                }
            }
        }
    }'