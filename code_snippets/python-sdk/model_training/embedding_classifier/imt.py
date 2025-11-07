import time
from clarifai.client.model import Model

# Set your Personal Access Token (PAT) as an environment variable before running this script:
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # For Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # For Windows

# Initialize the Model object
model = Model(
    user_id="YOUR_USER_ID",
    app_id="demo_train",
    model_id="model_text_embedder"
)

# Retrieve the current model parameters for inspection
model_params = model.get_params()

# Update the model parameters to link the dataset and target concepts
model.update_params(
    dataset_id="text_dataset",
    concepts=["pos", "neg"]  # Ensure these match the exact concept IDs in your app
)

# Starting the training
model_version_id = model.train()

# Monitor training progress
while True:
    status = model.training_status(
        version_id=model_version_id,
        training_logs=False
    )
    if status.code == 21106: # MODEL_TRAINING_FAILED
        print(status)
        break
    elif status.code == 21100: # MODEL_TRAINED
        print(status)
        break
    else:
        print("Current Status:",status)
        print("Waiting---")
        time.sleep(120)