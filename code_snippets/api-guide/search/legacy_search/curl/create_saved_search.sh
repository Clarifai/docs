curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \
--header "Content-Type: application/json" \
--header "Authorization: Key YOUR_PAT_HERE" \
--data-raw '{
    "searches": [{
        "query": {
            "ands": [{
                "annotation":{
                    "annotation_info": {
                        "asset_set": ["set1", "set2"]
                    }
                }
            }]
        },
        "save": true,
        "id": "dataset-1589318146",
        "name": "Dataset #1589318146"
    }]
}'