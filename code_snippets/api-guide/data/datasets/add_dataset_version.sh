curl --location -g --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/versions" \
--header "Authorization: Key YOUR_PAT_HERE" \
--header "Content-Type: application/json" \
--data-raw '{
    "dataset_versions": [
        {
            "id": "dataset-version-1633032673",            
            "dataset_filter": {
                "id": "YOUR_DATASET_FILTER_ID_HERE"
            }
        }
    ]
}'