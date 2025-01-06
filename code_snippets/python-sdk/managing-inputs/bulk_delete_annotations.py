from clarifai.client.input import Inputs

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")
                      
# Bulk delete annotations
input_object.delete_annotations(input_ids=["input_id1", "input_id1", "input_id2"], annotation_ids=["annot_id11", "annot_id12", "annot_id21"])
