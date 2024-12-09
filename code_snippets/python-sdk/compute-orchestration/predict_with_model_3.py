from clarifai.client.model import Model

model_url = "https://clarifai.com/meta/Llama-3/models/llama-3_2-3b-instruct"

# URL of the prompt text
text_url = "https://samples.clarifai.com/featured-models/falcon-instruction-guidance.txt"

# Initialize the model 
model = Model(
    url=model_url, 
    pat="YOUR_PAT_HERE" 
)

# Perform stream-stream prediction with the specified compute cluster and nodepool
stream_response = model.stream_by_url(
    iter([text_url]), 
    input_type="text",
    compute_cluster_id="compute_cluster_id", 
    nodepool_id="nodepool_id"
)

# Handle the stream of responses
list_stream_response = [response for response in stream_response]
