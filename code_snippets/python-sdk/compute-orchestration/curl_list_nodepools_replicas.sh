curl -X GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/compute_clusters/YOUR_COMPUTE_CLUSTER_ID_HERE/nodepools/?min_runner_replicas=1" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json"
