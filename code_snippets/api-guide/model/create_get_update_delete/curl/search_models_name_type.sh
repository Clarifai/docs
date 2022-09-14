# "gen*" supports wild card queries like "gen*" to match "general" as an example

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "model_query": {
      "name": "gen*",
      "model_type_id": "concept"
    }
  }'