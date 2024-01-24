curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/text-generation-model/versions" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
        "model_versions": [{
            "import_info": {
                "params": {
                  "toolkit":"HuggingFace",
                  "pipeline_name":"text-generation",
                  "model_name":"hf-internal-testing/tiny-xlm-roberta"
                }
            }
        }] 
  }'