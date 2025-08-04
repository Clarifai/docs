import os
from clarifai.client import User

os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

user = User()

# Get all models of current user
user.list_models(show=True)

# Or, get models of a specific user_id such as openai
#user.list_models(show=True, user_id="openai") 