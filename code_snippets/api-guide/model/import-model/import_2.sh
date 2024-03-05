curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/zero-shot-text-model/versions" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "model_versions": [{
            "import_info": {
                "params": {
                  "toolkit":"HuggingFace",
                  "pipeline_name":"zero-shot-classification",
                  "model_name":"facebook/bart-large-mnli",
                  "tokenizer_config":{},
                  "use_gpu": true
                }
            },
            "output_info": {
                "data": {
                    "concepts": [
                        {
                            "id": "happy"
                        },
                        {
                            "id": "sad"
                        }
                    ]
                }
            }
        }] 
  }'