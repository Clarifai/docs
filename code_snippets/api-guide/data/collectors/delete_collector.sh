curl -X DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/collectors" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  --data-raw '{
    "ids": ["YOUR_COLLECTOR_ID_HERE", "YOUR_COLLECTOR_ID_HERE"]
}'
