curl -X DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/compute_clusters/YOUR_COMPUTE_CLUSTER_ID_HERE/nodepools/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "ids": ["YOUR_NODEPOOL_ID_HERE"]
  }'
