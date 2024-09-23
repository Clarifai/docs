from clarifai.client.app import App

app = App(app_id="YOUR_APP_ID_HERE", user_id="YOUR_USER_ID_HERE", pat="YOUR_PAT_HERE")

# Update the details of the model
app.patch_model(model_id="model_clusterer", action="merge", description="description", notes="notes", toolkits=["OpenAI"], use_cases=["llm"], languages=["en"], image_url="https://samples.clarifai.com/metro-north.jpg")

# Update the model's image by specifying the 'remove' action
app.patch_model(model_id='model_clusterer', action='remove', image_url='https://samples.clarifai.com/metro-north.jpg')
