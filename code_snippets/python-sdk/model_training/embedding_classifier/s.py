from clarifai.client.app import App
from clarifai.client.model import Model

# Set your Personal Access Token (PAT) as an environment variable before running this script:
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # For Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # For Windows

# Initialize the App object
app = App(
    user_id="YOUR_USER_ID",
    app_id="demo_train"
)

# Initialize the Model object
model = Model(
    user_id="YOUR_USER_ID",
    app_id="demo_train",
    model_id="model_text_embedder"
)

# List all concepts in the app to verify their existence
concepts = [concept.id for concept in app.list_concepts()]
print(f"Available concepts: {concepts}")

# (Optional) Retrieve the current model parameters for inspection
model_params = model.get_params()
print(f"Current model parameters: {model_params}")

# Update the model parameters to link the dataset and target concepts
model.update_params(
    dataset_id="text_dataset",
    concepts=["pos", "neg"]  # Ensure these match the exact concept IDs in your app
)

print("Model parameters updated successfully")
