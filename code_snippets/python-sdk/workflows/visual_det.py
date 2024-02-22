# Create or load an app


from clarifai.client.user import User
from clarifai.client.app import App


# Create or load app (replace USER_ID and APP_ID with your own)
APP_ID = "APP_ID"
USER_ID="USER_ID"
try:
 app = User(user_id=USER_ID).create_app(app_id=APP_ID, base_workflow="Empty")
except Exception as e:
 app = App(app_id=APP_ID, user_id=USER_ID)


# # Create workflow from yaml file


"""bytetrack.yaml
workflow:
 id: demo-bytetrack
 nodes:
   - id: object-detection
     model:
       user_id: clarifai
       app_id: main
       model_id: person-vehicle-detection-yolov5
   - id: track
     model:
       model_id: "byte-tracker"
       model_type_id: "byte-tracker"
       output_info:
         params:
           min_visible_frames: 1
           max_disappeared: 30
           confidence_thresh:  0.1
     node_inputs:
       - node_id: object-detection
"""


workflow = app.create_workflow(config_filepath="./bytetrack.yaml")


result = workflow.predict_by_url("https://samples.clarifai.com/beer.mp4", input_type="video")
print(result.results[0].outputs[-1].data)
