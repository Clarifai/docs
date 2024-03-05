from clarifai.client.user import User
#replace your "user_id"
client = User(user_id="user_id")
app = client.create_app(app_id="demo_train", base_workflow="Universal")