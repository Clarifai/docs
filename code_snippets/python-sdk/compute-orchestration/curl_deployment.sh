curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/deployments/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "deployments": [
      {
        "id": "test-deployment",
        "description": "test deployment",
        "user_id": "YOUR_USER_ID_HERE",
        "autoscale_config": {
          "min_replicas": 1,
          "max_replicas": 20,
          "traffic_history_seconds": 100,
          "scale_down_delay_seconds": 30,
          "scale_to_zero_delay_seconds": 30,
          "scale_up_delay_seconds": 30,
          "disable_packing": false
        },
        "worker": {
          "model": {
            "id": "Llama-3_2-3B-Instruct",
            "model_version": {
              "id": "fe271b43266a45a5b068766b6437687f"
            },
            "user_id": "meta",
            "app_id": "Llama-3"
          }
        },
        "scheduling_choice": 4,
        "nodepools": [
          {
            "id": "test-nodepool",
            "compute_cluster": {
              "id": "test-compute-cluster",
              "user_id": "YOUR_USER_ID"
            }
          }
        ],
        "visibility": {
          "gettable": 10
        }
      }
    ]
  }'
