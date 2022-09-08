curl -X DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/concepts/YOUR_OBJECT_CONCEPT_ID_HERE/relations" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "ids": [
            "CONCEPT_RELATION_ID_1", "CONCEPT_RELATION_ID_2"
        ]
    }'