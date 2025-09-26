from clarifai.client.input import Inputs

# Set PAT as an environment variable before running this script
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # Windows

# Initialize the Inputs client
input_client = Inputs(
    user_id="YOUR_USER_ID",
    app_id="YOUR_APP_ID",
)

# Define input details
input_id = "text_example"
concepts = ["mobile", "camera"]

# Upload data from URL and annotate with concepts
input_client.upload_from_url(
    input_id=input_id,
    dataset_id="YOUR_DATASET_ID",  # Optional: specify dataset ID to add the input to a dataset
    text_url="https://samples.clarifai.com/featured-models/Llama2_Conversational-agent.txt",
    labels=concepts
)
