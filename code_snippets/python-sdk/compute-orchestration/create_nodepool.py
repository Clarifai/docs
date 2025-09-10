from clarifai.client.compute_cluster import ComputeCluster

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the ComputeCluster instance
compute_cluster = ComputeCluster(
    user_id="YOUR_USER_ID_HERE",
    compute_cluster_id="test-compute-cluster"    
)

# Create a new nodepool 
nodepool = compute_cluster.create_nodepool(
    nodepool_id="test-nodepool",
    config_filepath="./configs/nodepool_config.yaml"
)
