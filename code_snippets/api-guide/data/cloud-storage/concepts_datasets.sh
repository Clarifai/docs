curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/inputs/data_sources/" \
-H "Authorization: Key YOUR_PAT_HERE" \
-H "Content-Type: application/json" \
-d '{
"app_pat": "YOUR_PAT_HERE",
    "data_sources": [
        {
            "inputs_add_job_id": "",
            "url": {
                "url": "s3://samples.clarifai.com/storage/"
            },
            "input_template": {
                "dataset_ids": ["dataset-1"],
                "data": {
                    "metadata": { "id": "id001" },
                    "concepts": [
                        {
                            "id": "lamborghini23_A",
                            "value": 1
                        },
                        {
                            "id": "spiderman_a",
                            "value": 1
                        }
                    ]
                }
            }
        }
    ]
  }'