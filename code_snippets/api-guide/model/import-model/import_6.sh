curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/embedding-model/versions" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
       "model_versions": [{
            "pretrained_model_config": {
                "model_zip_url": "s3://clarifai-testing-persistent-data/test_triton_upload/jina-embeddings-v2-base-en.zip",
                "input_fields_map": {
                    "text": "text"
                },
                "output_fields_map": {
                    "embeddings": "embeddings"
                }
            }            
        }]
     }'