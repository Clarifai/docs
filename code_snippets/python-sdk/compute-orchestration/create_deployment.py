from clarifai.client.nodepool import Nodepool
import os

# Set the PAT key
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE" 

# Initialize the Nodepool instance
nodepool = Nodepool(
    user_id="YOUR_USER_ID_HERE",            
    nodepool_id="test-nodepool",   
    base_url="https://api.clarifai.com"            
)

# Create a new deployment
deployment = nodepool.create_deployment(
    deployment_id="test-deployment", 
    config_filepath="./configs/deployment_config.yaml"
)