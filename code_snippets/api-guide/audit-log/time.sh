curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/audit_log/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "query": {
      "timestamp_from": "2024-05-01T00:00:00Z",
      "timestamp_to": "2024-05-31T23:59:59Z"
    }
  }'
