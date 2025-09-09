from clarifai.client.user import User

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows  

# Initialize the client
client = User(
    user_id="YOUR_USER_ID_HERE"
)

# Get and print the compute cluster by providing its ID
compute_cluster = client.compute_cluster(
    compute_cluster_id="test-compute-cluster"
)
print(compute_cluster)
