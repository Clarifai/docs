curl --location -g --request PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/filters" \
--header "Authorization: Key YOUR_PAT_HERE" \
--header "Content-Type: application/json" \
--data-raw '{
    "dataset_filters": [
        {
            "id": "YOUR_DATASET_FILTER_ID_HERE",            
            "saved_search_id": "YOUR_SEARCH_ID_HERE"
        }
    ],
    "action": "overwrite"
}'
