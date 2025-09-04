from clarifai.client.user import User
import os

# Set PAT as an environment variable
# export CLARIFAI_PAT=YOUR_PAT_HERE 

# Initialize the client
client = User(
    user_id="YOUR_USER_ID_HERE",
    base_url="https://api.clarifai.com"
)

# Create a new compute cluster
compute_cluster = client.create_compute_cluster(
    compute_cluster_id="test-compute-cluster",
    config_filepath="./configs/compute_cluster_config.yaml"
)
