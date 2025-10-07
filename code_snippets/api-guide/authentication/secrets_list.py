from clarifai.client.user import User

# Set PAT as an environment variable before running this snippet:
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize User client
client = User(user_id="YOUR_USER_ID")

# List all secrets
all_secrets = list(client.list_secrets(page_no=1))

print("Secrets:")
for secret in all_secrets:
    print(secret)