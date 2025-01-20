curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/audit_log/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "query": {
      "source_ips": ["127.0.0.0", "127.0.0.1"]
    }
  }'
