##################################################################################################
# Change these strings to run your own example
##################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = "YOUR_PAT_HERE"
USER_ID = "YOUR_USER_ID_HERE"
PROMPTS = [
    "What is the future of AI?",
    "Explain quantum computing in simple terms.",
    "How does climate change affect global economies?"
]
MODEL_URL = "https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct"
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

# Prepare input iterator: each item is a bytes-encoded prompt
input_stream = (prompt.encode() for prompt in PROMPTS)

# Stream-stream prediction using bytes
response_stream = model.stream_by_bytes(
    input_stream,
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
# response_stream = Model(url=MODEL_URL, pat="YOUR_PAT_HERE").stream_by_bytes((prompt.encode() for prompt in PROMPTS), input_type="text", user_id="YOUR_USER_ID_HERE", compute_cluster_id="YOUR_CLUSTER_ID", nodepool_id="YOUR_NODEPOOL_ID")
# for response in response_stream:
#     print(response.outputs[0].data.text.raw)

# Example stream prediction via URL:
# response_stream = Model(url=MODEL_URL, pat="YOUR_PAT_HERE").stream_by_url(["INPUT_URL_1", "INPUT_URL_2"], input_type="text", user_id="YOUR_USER_ID_HERE", deployment_id="YOUR_DEPLOYMENT_ID_HERE")
# for response in response_stream:
#     print(response.outputs[0].data.text.raw)

# Example stream prediction via filepath:
# response_stream = Model(url=MODEL_URL, pat="YOUR_PAT_HERE").stream_by_filepath(["file1.txt", "file2.txt"], input_type="text", user_id="YOUR_USER_ID_HERE", deployment_id="YOUR_DEPLOYMENT_ID_HERE")
# for response in response_stream:
#     print(response.outputs[0].data.text.raw)
