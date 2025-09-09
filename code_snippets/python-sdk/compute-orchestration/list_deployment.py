from clarifai.client.nodepool import Nodepool

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the Nodepool instance
nodepool = Nodepool(
    user_id="YOUR_USER_ID_HERE",            
    nodepool_id="test-nodepool"           
)

# Fetch all deployments
all_deployments = nodepool.list_deployments()

# Print them as a list
print("Available Deployments:")
for deployment in all_deployments:
    print(f"- ID: {deployment.id}, Description: {deployment.description}, "
          f"Min Replicas: {deployment.autoscale_config.min_replicas}, "
          f"Max Replicas: {deployment.autoscale_config.max_replicas}")
