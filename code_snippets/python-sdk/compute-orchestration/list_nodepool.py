from clarifai.client.compute_cluster import ComputeCluster

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the ComputeCluster instance
compute_cluster = ComputeCluster(
    user_id="YOUR_USER_ID_HERE",
    compute_cluster_id="test-compute-cluster"
)

# Fetch all nodepools
all_nodepools = compute_cluster.list_nodepools()

# Print them as a list
print("Available Nodepools:")
for nodepool in all_nodepools:
    print(f"- ID: {nodepool.id}, Description: {nodepool.description}, "
          f"Min Instances: {nodepool.min_instances}, Max Instances: {nodepool.max_instances}")
