import os
from clarifai.client.app import App

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

app = App(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE")

# A hyponym relation between "cat" and "animal", indicating that "cat" is a kind of "animal"
# A synonym relation between "cat" and "kitten", suggests that these two concepts are essentially the same
app.create_concept_relations("cat", ["animal", "kitten"], ["hyponym", "synonym"])
