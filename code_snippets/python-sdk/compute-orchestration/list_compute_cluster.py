from clarifai.client.user import User
import os

# Set the PAT key
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"  

# Initialize the client
client = User(
    user_id="YOUR_USER_ID_HERE",
    base_url="https://api.clarifai.com"
)

# Get and print all the compute clusters
all_compute_clusters = list(
    client.list_compute_clusters()
)
print(all_compute_clusters)