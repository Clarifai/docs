from clarifai.client.nodepool import Nodepool

# Initialize the Nodepool instance
nodepool = Nodepool(
    user_id="YOUR_USER_ID_HERE",
    nodepool_id="test-nodepool",
    base_url="https://api.clarifai.com"
)

# Get all the deployments in the nodepool
all_deployments = list(nodepool.list_deployments())

# Extract deployment IDs for deletion
deployment_ids = [deployment.id for deployment in all_deployments]

# Delete a specific deployment by providing its deployment ID
# deployment_ids = ["test-deployment"]

# Delete the deployments
nodepool.delete_deployments(deployment_ids=deployment_ids)
