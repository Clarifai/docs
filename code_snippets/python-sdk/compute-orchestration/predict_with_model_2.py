##################################################################################################
# Change these strings to run your own example
##################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
USER_ID = "YOUR_USER_ID_HERE"
PROMPT = "What is the future of AI?"
MODEL_URL = "https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct"
DEPLOYMENT_ID = "YOUR_DEPLOYMENT_ID_HERE"

##################################################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##################################################################################################

from clarifai.client.model import Model

# Initialize the model
model = Model(
    url=MODEL_URL,  # Or, use model_id="YOUR_MODEL_ID_HERE"
    pat=PAT
)

# Make a unary-stream prediction using the prompt as bytes
response_stream = model.generate_by_bytes(
    PROMPT.encode(),
    input_type="text",
    user_id=USER_ID,
    deployment_id=DEPLOYMENT_ID
)

# Iterate through streamed responses and print them
for response in response_stream:
    if response.outputs and response.outputs[0].data.text:
        print(response.outputs[0].data.text.raw)

# Print a newline at the end for better formatting
print()

##################################################################################################
# ADDITIONAL EXAMPLES
##################################################################################################

# Example stream prediction using a cluster and nodepool (no deployment ID needed):
# for response in Model(url=MODEL_URL, pat="YOUR_PAT_HERE").generate_by_bytes("YOUR_PROMPT_HERE".encode(), input_type="text", user_id="YOUR_USER_ID_HERE", compute_cluster_id="YOUR_CLUSTER_ID", nodepool_id="YOUR_NODEPOOL_ID"):
#     print(response.outputs[0].data.text.raw)

# Example unary-stream prediction via URL:
# for response in Model(url=MODEL_URL, pat="YOUR_PAT_HERE").generate_by_url("INPUT_URL_HERE", input_type="text", user_id="YOUR_USER_ID_HERE", deployment_id="YOUR_DEPLOYMENT_ID_HERE"):
#     print(response.outputs[0].data.text.raw)

# Example unary-stream prediction via filepath:
# for response in Model(url=MODEL_URL, pat="YOUR_PAT_HERE").generate_by_filepath("INPUT_FILEPATH_HERE", input_type="text", user_id="YOUR_USER_ID_HERE", deployment_id="YOUR_DEPLOYMENT_ID_HERE"):
#     print(response.outputs[0].data.text.raw)
