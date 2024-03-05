curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/inputs/data_sources/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "app_pat": "YOUR_PAT_HERE",
    "data_sources": [
        {
            "inputs_add_job_id": "",
            "url": {
                "url": "s3://samples.clarifai.com/storage/",
                "credentials": {
                    "s3_creds": {"id":"ADD_ACCESS_ID_HERE", "secret":"ADD_SECRET_HERE", "region":"ADD_AWS_REGION_HERE"},
                    // Or, you can use GCP credentials
                    "gcpCreds": "" // GCP uses service account key data (creds.json) as Byte array for authentication
                }
            }
        }
    ]
  }'
