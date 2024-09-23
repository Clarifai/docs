from clarifai.client.app import App

app = App(app_id="YOUR_APP_ID_HERE", user_id="YOUR_USER_ID_HERE", pat="YOUR_PAT_HERE")

# Update an existing workflow to use a different yml configuration like "demographics" 
WORKFLOW_ID = general_workflow.kwargs['id']
app.patch_workflow(workflow_id=WORKFLOW_ID, action="merge", config_filepath="configs/demographics.yml")

# Update workflow details, such as description, notes, etc
app.patch_workflow(workflow_id=WORKFLOW_ID, action="merge", description="description", notes="notes", image_url="https://samples.clarifai.com/metro-north.jpg")

# Remove the workflow's image by specifying the 'remove' action
app.patch_workflow(workflow_id=WORKFLOW_ID, action="remove", image_url="https://samples.clarifai.com/metro-north.jpg")
