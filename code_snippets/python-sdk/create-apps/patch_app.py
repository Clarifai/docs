from clarifai.client.user import User

# Initialize the Clarifai client with the specified user ID
client = User(user_id='YOUR_USER_ID_HERE', pat='YOUR_PAT')

# Update the app by overwriting the base workflow with a new one, e.g., 'Empty'
client.patch_app(app_id='YOUR_APP_ID_HERE', action='overwrite', base_workflow='Empty')

# Update the app to make it an app template
client.patch_app(app_id='YOUR_APP_ID_HERE', action='overwrite', is_template=True)

# Overwrite the app's description, notes, and default language
client.patch_app(app_id='YOUR_APP_ID_HERE', action='overwrite', default_language='fr', description='Demo testing', notes="Hi Guys! This note is for Demo")

# Overwrite the app's image URL with a new one
client.patch_app(app_id='YOUR_APP_ID_HERE', action='overwrite', image_url='https://samples.clarifai.com/metro-north.jpg')

# Remove the app's image by specifying the 'remove' action
client.patch_app(app_id='YOUR_APP_ID_HERE', image_url='https://samples.clarifai.com/metro-north.jpg', action='remove')