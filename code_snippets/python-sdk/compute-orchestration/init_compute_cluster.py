from clarifai.client.compute_cluster import ComputeCluster

# Initialize the ComputeCluster instance
compute_cluster = ComputeCluster(
    user_id="YOUR_USER_ID_HERE",           
    compute_cluster_id="test-compute-cluster",
    base_url="https://api.clarifai.com"          
)
