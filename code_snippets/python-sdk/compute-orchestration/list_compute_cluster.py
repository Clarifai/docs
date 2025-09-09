from clarifai.client.user import User

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows 

# Initialize the client
client = User(
    user_id="YOUR_USER_ID_HERE"
)

# Fetch all compute clusters
all_compute_clusters = client.list_compute_clusters()

# Print them as a list
print("Available Compute Clusters:")
for cluster in all_compute_clusters:
    print(f"- ID: {cluster.id}, Description: {cluster.description}, Region: {cluster.region}")
