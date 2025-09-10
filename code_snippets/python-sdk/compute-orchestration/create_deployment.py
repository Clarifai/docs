from clarifai.client.nodepool import Nodepool

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the Nodepool instance
nodepool = Nodepool(
    user_id="YOUR_USER_ID_HERE",            
    nodepool_id="test-nodepool"           
)

# Create a new deployment
deployment = nodepool.create_deployment(
    deployment_id="test-deployment", 
    config_filepath="./configs/deployment_config.yaml"
)