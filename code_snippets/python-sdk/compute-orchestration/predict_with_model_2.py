from clarifai.client.model import Model

model_url = "https://clarifai.com/meta/Llama-3/models/llama-3_2-3b-instruct"

# URL of the prompt text
text_url = "https://samples.clarifai.com/featured-models/falcon-instruction-guidance.txt"

# Initialize the model 
model = Model(
    url=model_url, 
    pat="YOUR_PAT_HERE" 
)

# Perform unary-stream prediction with the specified compute cluster and nodepool
stream_response = model.generate_by_url(
    text_url, 
    input_type="text",
    deployment_id="test-deployment"
)

# Handle the stream of responses
list_stream_response = [response for response in stream_response]
