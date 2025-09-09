from clarifai.client.user import User

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize the User client
client = User(
    user_id="YOUR_USER_ID_HERE"
)

# Get all compute clusters associated with the user
all_compute_clusters = list(client.list_compute_clusters())

# Extract compute cluster IDs for deletion
compute_cluster_ids = [compute_cluster.id for compute_cluster in all_compute_clusters]

# Delete a specific cluster by providing its ID
# compute_cluster_ids = ["test-compute-cluster"]

# Delete the compute clusters
client.delete_compute_clusters(compute_cluster_ids=compute_cluster_ids)
