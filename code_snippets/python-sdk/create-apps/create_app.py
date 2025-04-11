from clarifai.client.user import User

client = User(user_id="user_id", pat="YOUR_PAT")
# You can create an app by providing the app id
app = client.create_app(app_id="test_app")
