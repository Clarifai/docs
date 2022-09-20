curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/concepts" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -H "Content-Type: application/json" \
    --data-raw '{
        "concepts": [
            {
                "id": "peopleID",
                "name": "people"
            },
            {
                "id": "manID",
                "name": "man"
            },
            {
                "id": "adultID",
                "name": "adult"
            }
        ]
    }'