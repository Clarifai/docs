import os
from clarifai.client.app import App

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

app = App(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE")

concept_relations = list(app.search_concept_relations(concept_id="cat", predicate="synonym"))

for relation in concept_relations:
    print("Subject_concept:", relation.subject_concept.id)
    print('\t' "Object_concept:", relation.object_concept.id)
    print('\t' "Predicate:", relation.predicate, '\n')