curl --location --request PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/" \
--header "Authorization: Key YOUR_PAT_HERE" \
--header "Content-Type: application/json" \
--data-raw '{
    "datasets": [
        {
            "id": "YOUR_DATASET_ID_HERE",            
            "description": "This is the new foo dataset",
            "metadata": {
                "foo": "bar"
            }
        }
    ],
    "action": "overwrite"
}'