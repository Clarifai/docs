curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/deployments/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "overwrite",
    "deployments": [
      {
        "id": "test-nodepool",
        "description": "some new random deployment",
        "user_id": "YOUR_USER_ID_HERE",
        "autoscale_config": {
          "min_replicas": 0,
          "max_replicas": 10,
          "traffic_history_seconds": 100,
          "scale_down_delay_seconds": 30,
          "scale_to_zero_delay_seconds": 30,
          "scale_up_delay_seconds": 30,
          "disable_packing": true
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
        "visibility": {
          "gettable": 10
        }
      }
    ]
  }'
