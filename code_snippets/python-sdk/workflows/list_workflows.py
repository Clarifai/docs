from clarifai.client.app import App

# Your PAT (Personal Access Token) can be found in the Account's Security section
app = App(app_id="APP_ID", user_id="USER_ID", pat="YOUR_PAT")

for workflow in app.list_workflows(page_no=1,per_page=7):
    print("Workflow ID: ", workflow.id)