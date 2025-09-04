from clarifai.client.compute_cluster import ComputeCluster
import os

# Set PAT as an environment variable
# export CLARIFAI_PAT=YOUR_PAT_HERE 

# Initialize the ComputeCluster instance
compute_cluster = ComputeCluster(
    user_id="YOUR_USER_ID_HERE",
    compute_cluster_id="test-compute-cluster",
    base_url="https://api.clarifai.com"
)

# Create a new nodepool 
nodepool = compute_cluster.create_nodepool(
    nodepool_id="test-nodepool",
    config_filepath="./configs/nodepool_config.yaml"
)
