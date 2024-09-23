from clarifai.client.app import App

app = App(app_id="YOUR_APP_ID_HERE", user_id="YOUR_USER_ID_HERE", pat="YOUR_PAT_HERE")

# Update the dataset by merging the new description and notes
app.patch_dataset(dataset_id='YOUR_DATASET_ID_HERE', action='merge', description='Demo testing', notes="Hi Guys! This note is for Demo")

# Update the dataset's image URL with a new one
app.patch_dataset(dataset_id='YOUR_DATASET_ID_HERE', action='merge', image_url='https://samples.clarifai.com/metro-north.jpg')

# Remove the dataset's image by specifying the 'remove' action
app.patch_dataset(dataset_id='YOUR_DATASET_ID_HERE', action='remove', image_url='https://samples.clarifai.com/metro-north.jpg')