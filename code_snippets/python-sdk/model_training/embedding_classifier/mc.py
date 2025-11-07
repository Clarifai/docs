from clarifai.client.app import App

# Set PAT as an environment variable before running this script
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # Windows

# Initialize the App object
app = App(
    app_id="demo_train", 
    user_id="alfrick"
)

# List all the available trainable model types in the Clarifai platform
# print(app.list_trainable_model_types())

# Create a model by passing the model name and model type as parameter
model = app.create_model(
    model_id="model_text_embedder", 
    model_type_id="embedding-classifier"
)