from clarifai.client.input import Inputs

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")

# This example changes the existing concept label "id-face" to "obama_face"
input_object.patch_concepts(
    concept_ids=["id-face"],  # The ID of the concept you want to update
    labels=["obama_face"],    # The new label name to overwrite the existing one
    values=[],                
    action='overwrite'        # Currently, only the `overwrite` action is supported
)
