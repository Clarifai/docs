from clarifai.client.user import User

# Set your PAT as an environment variable before running this script:
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Replace your "user_id"
client = User(user_id="YOUR_USER_ID")
app = client.create_app(app_id="demo_train", base_workflow="Universal")