from clarifai.client.compute_cluster import ComputeCluster

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the ComputeCluster instance
compute_cluster = ComputeCluster(
    user_id="YOUR_USER_ID_HERE",           
    compute_cluster_id="test-compute-cluster"
)

# Get all nodepools within the compute cluster
all_nodepools = list(compute_cluster.list_nodepools())

# Extract nodepool IDs for deletion
nodepool_ids = [nodepool.id for nodepool in all_nodepools]

# Delete a specific nodepool by providing its ID
# nodepool_ids = ["test-nodepool"]

# Delete the nodepools
compute_cluster.delete_nodepools(nodepool_ids=nodepool_ids)
