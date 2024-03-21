from clarifai.client.app import App

# Your PAT (Personal Access Token) can be found in the Account's Security section
app = App(app_id="APP_ID", user_id="USER_ID", pat="YOUR_PAT")
# Delete the workflow within an application
app.delete_workflow(workflow_id="workflow-id")