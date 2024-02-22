from clarifai.client.user import User

# Provide the app id as parameter to delete_app function
user = User("user_id", pat="YOUR_PAT").delete_app("test_app_2")
