curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/compute_clusters/YOUR_CLUSTER_ID_HERE/nodepools" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "nodepools": [
      {
        "id": "test-nodepool-6",
        "description": "testing nodepool",
        "metadata": {
          "date": "03-04-2026"
        },
        "instance_types": [
          {
            "id": "g5.2xlarge",
            "compute_info": {
              "cpu_limit": "8",
              "cpu_memory": "28Gi",
              "accelerator_type": ["a10"],
              "num_accelerators": 1,
              "accelerator_memory": "40Gi"
            }
          }
        ],
        "node_capacity_type": {
          "capacity_types": [1]
        },
        "visibility": {
          "gettable": 10
        },
        "min_instances": 1,
        "max_instances": 5
      }
    ]
  }'
