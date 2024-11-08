from clarifai.client.compute_cluster import ComputeCluster

# Initialize the ComputeCluster instance
compute_cluster = ComputeCluster(
    user_id="YOUR_USER_ID_HERE",           
    compute_cluster_id="test-compute-cluster",
    base_url="https://api.clarifai.com"
)

# Get all nodepools within the compute cluster
all_nodepools = list(compute_cluster.list_nodepools())

# Extract nodepool IDs for deletion
nodepool_ids = [nodepool.id for nodepool in all_nodepools]

# Delete a specific nodepool by providing its ID
# nodepool_ids = ["test-nodepool"]

# Delete the nodepools
compute_cluster.delete_nodepools(nodepool_ids=nodepool_ids)
