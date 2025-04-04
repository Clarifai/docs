##################################################################################################
# Change these strings to run your own example
##################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
USER_ID = "YOUR_USER_ID_HERE"
IMAGE_URL = "https://samples.clarifai.com/birds.jpg"
MODEL_URL = "https://clarifai.com/qwen/qwen-VL/models/Qwen2_5-VL-7B-Instruct"
DEPLOYMENT_ID = "YOUR_DEPLOYMENT_ID_HERE"

##################################################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##################################################################################################

from clarifai.client.model import Model

# Initialize the model
model = Model(
    url=MODEL_URL, # Or, use model_id="YOUR_MODEL_ID_HERE"
    pat=PAT
)

# Make a unary-unary prediction using the image URL
model_prediction = model.predict_by_url(
    IMAGE_URL,
    input_type="image",
    user_id=USER_ID,
    deployment_id=DEPLOYMENT_ID
)

# Output the model's response
print(model_prediction.outputs[0].data.text.raw)

##################################################################################################
# ADDITIONAL EXAMPLES
##################################################################################################

# Example prediction using a cluster and nodepool (no deployment ID needed):
# model_prediction = Model(url=MODEL_URL, pat="YOUR_PAT_HERE").predict_by_url("INPUT_URL_HERE", input_type="image", user_id="YOUR_USER_ID_HERE", compute_cluster_id="YOUR_CLUSTER_ID_HERE", nodepool_id="YOUR_NODEPOOL_ID_HERE")

# Example prediction via bytes:
# model_prediction = Model(url=MODEL_URL, pat="YOUR_PAT_HERE").predict_by_bytes("INPUT_TEXT_HERE".encode(), input_type="text", user_id="YOUR_USER_ID_HERE", deployment_id="YOUR_DEPLOYMENT_ID_HERE")

# Example prediction via filepath:
# model_prediction = Model(url=MODEL_URL, pat="YOUR_PAT_HERE").predict_by_filepath("INPUT_FILEPATH_HERE", input_type="text", user_id="YOUR_USER_ID_HERE", deployment_id="YOUR_DEPLOYMENT_ID_HERE")
