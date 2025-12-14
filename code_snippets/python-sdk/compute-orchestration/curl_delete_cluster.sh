curl -X DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/compute_clusters/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "ids": ["COMPUTE_CLUSTER_ID_HERE"]
  }'
