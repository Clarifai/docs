curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/compute_clusters/YOUR_COMPUTE_CLUSTER_ID_HERE/nodepools" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "overwrite",
    "nodepools": [
      {
        "id": "test-nodepool-6",
        "visibility": {
          "gettable": 10
        },
        "min_instances": 0,
        "node_capacity_type": {
          "capacity_types": [2]
        }
      }
    ]
  }'
