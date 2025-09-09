from clarifai.client.nodepool import Nodepool

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the Nodepool instance
nodepool = Nodepool(
    user_id="YOUR_USER_ID_HERE",
    nodepool_id="test-nodepool"
)

# Get all the deployments in the nodepool
all_deployments = list(nodepool.list_deployments())

# Extract deployment IDs for deletion
deployment_ids = [deployment.id for deployment in all_deployments]

# Delete a specific deployment by providing its deployment ID
# deployment_ids = ["test-deployment"]

# Delete the deployments
nodepool.delete_deployments(deployment_ids=deployment_ids)
