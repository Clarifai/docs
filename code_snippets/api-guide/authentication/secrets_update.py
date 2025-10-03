from clarifai.client.user import User

# Initialize the client
client = User(user_id="YOUR_USER_ID")

# Update an existing secret's description or value
patched_secrets = client.patch_secrets(
    secrets=[
        {
            "id": "OPENAI_KEY_2025",
            "value": "new_secret_value",
            "description": "Updated Secret Description"
        }
    ],
    action="overwrite"  # Can also be "remove"
)

print("Patched Secrets:", patched_secrets)
