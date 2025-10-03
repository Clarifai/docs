from clarifai.client.user import User

client = User(user_id="YOUR_USER_ID")

# Delete one or more secrets
client.delete_secrets(secret_ids=["OPENAI_KEY_2025"])