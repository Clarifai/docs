from clarifai.client.user import User

# Set PAT as an environment variable before running this snippet:
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize User client
client = User(user_id="YOUR_USER_ID")

# Retrieve a specific secret by its ID
secret_info = client.get_secret(secret_id="OPENAI_KEY_2025")
print("Secret Info:", secret_info)
