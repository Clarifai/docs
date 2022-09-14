curl -X DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/" \
    -H "Authorization: Key YOUR_PAT_HERE" \
    -d '{
        "delete_all": true
    }'