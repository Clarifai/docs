curl --location -g --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs" \
--header "Authorization: Key YOUR_PAT_HERE" \
--header "Content-Type: application/json" \
--data-raw '{
    "dataset_inputs": [
        {
            "input": {
                "id": "YOUR_INPUT_ID_HERE"
            }
        }
    ]
}'