from clarifai.client.user import User

# Set PAT as an environment variable before running this snippet:
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# # Initialize User client
client = User(user_id="YOUR_USER_ID")

# Create one or more secrets
secrets = [
    {
        "id": "OPENAI_KEY_2025",
        "value": "your_super_secret_api_key_here",
        "description": "My OpenAI key for experiments"
    }
]

created_secrets = client.create_secrets(secrets)
print("Created Secrets:", created_secrets)
