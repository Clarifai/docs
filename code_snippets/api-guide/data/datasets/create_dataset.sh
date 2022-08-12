curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/" \
--header "Authorization: Key YOUR_PAT_HERE" \
--header "Content-Type: application/json" \
--data-raw '{
    "datasets": [
        {
            "id": "dataset-1633032323",
            "name": "foo",
            "description": "This is the foo dataset",
            "metadata": {
                "lol": "hey"
            }
        }
    ]
}'