curl --location -g --request PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/versions" \
--header "Authorization: Key YOUR_PAT_HERE" \
--header "Content-Type: application/json" \
--data-raw '{
    "dataset_versions": [
        {
            "id": "YOUR_DATASET_VERSION_ID_HERE",
            "name": "dataset version updated name"
        }
    ],
    "action": "overwrite"
}'