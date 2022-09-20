curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/concepts/YOUR_MODEL_CONCEPT_ID_HERE/relations" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "concept_relations": [
            {
                "object_concept": {
                    "id": "GENERAL_MODEL_CONCEPT_ID_HERE",
                    "app_id": "main"
                },
                "predicate": "synonym"
            }
        ]
    }'