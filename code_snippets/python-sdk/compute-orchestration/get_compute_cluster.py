from clarifai.client.user import User
import os

# Set the PAT key
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"  

# Initialize the client
client = User(
    user_id="YOUR_USER_ID_HERE",
    base_url="https://api.clarifai.com"
)

# Get and print the compute cluster
compute_cluster = client.compute_cluster(
    compute_cluster_id="test-compute-cluster"
)
print(compute_cluster)
