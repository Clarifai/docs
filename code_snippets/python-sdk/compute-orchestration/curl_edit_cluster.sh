curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/compute_clusters/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "overwrite",
    "compute_clusters": [
      {
        "id": "test-aws-cluster",
        "description": "My new cluster description",
        "cloud_provider": {
          "id": "aws"
        },
        "region": "us-east-1",
        "visibility": {
          "gettable": 10
        },
        "managed_by": "clarifai",
        "cluster_type": "dedicated",
        "key": {
          "id": "YOUR_PAT_HERE"
        }
      }
    ]
  }'
