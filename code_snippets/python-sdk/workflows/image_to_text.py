from clarifai.client.workflow import Workflow
from clarifai.client.user import User

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = "user_id"
APP_ID = "app_id"

app = User(user_id=USER_ID, pat="YOUR_PAT").create_app(
    app_id=APP_ID, base_workflow="Empty"
)
image_url =  "https://s3.amazonaws.com/samples.clarifai.com/ocr_img_00417302.jpg"
# create a yaml file specifying the workflow structure
# eg:
"""language_aware_ocr.yml
workflow:
  id: wf-ocr
  nodes:
    - id: ocr-workflow
      model:
          model_id: language-aware-multilingual-ocr-multiplex

    - id: text-aggregator
      model:
          model_id: text-aggregation
          model_type_id: text-aggregation-operator
          output_info:
            params:
              avg_word_width_window_factor: 2.0
              avg_word_height_window_factor: 1.0

      node_inputs:
        - node_id: ocr-workflow

    - id: language-id-operator
      model:
          model_id: language-id
          model_type_id: language-id-operator
          output_info:
            params:
              library: "fasttext"
              topk: 1
              threshold:  0.1
              lowercase: true

      node_inputs:
        - node_id: text-aggregator


"""


ocr_workflow = app.create_workflow(config_filepath="configs/language_aware_ocr.yml")
prediction = ocr_workflow.predict_by_url(
   image_url ,
    input_type="image",
)

# Get workflow results
print(prediction.results[0].outputs[-1].data)
