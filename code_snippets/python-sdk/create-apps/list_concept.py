from clarifai.client.app import App

app = App(app_id="test_app", user_id="user_id", pat="YOUR_PAT")
# the list_concepts method allows pagination
all_concepts = list(app.list_concepts(page_no=1,per_page=1))
