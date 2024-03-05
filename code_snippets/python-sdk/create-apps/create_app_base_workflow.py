from clarifai.client.user import User

client = User(user_id="user_id", pat="YOUR_PAT")
# You can set the base workflow as ["Empty","Universal","Language-Understanding","General"]
app = client.create_app(app_id="test_app_2", base_workflow="Universal")
