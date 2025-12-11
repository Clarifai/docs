curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/compute_clusters/" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "compute_clusters": [
      {
        "id": "test-aws-cluster",
        "description": "My AWS cluster",
        "cloud_provider": {
          "id": "aws"
        },
        "region": "us-east-1",
        "visibility": {
          "gettable": 50
        },
        "managed_by": "clarifai",
        "cluster_type": "dedicated",
        "key": {
          "id": "YOUR_PAT_HERE"
        }
      }
    ]
  }'
