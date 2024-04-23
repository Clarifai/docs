# Import necessary libraries
import os
from clarifai.client.model import Model

# Set the Clarifai API key as an environment variable (replace with your actual key)
os.environ['CLARIFAI_PAT'] = "YOUR_PAT" 

# Create a Model object using the model URL from the Clarifai portal
model = Model("Model URL From Portal")

# Set the model version ID (replace with the ID from the Clarifai portal)
model.model_version.id = "Model Version ID From Portal" 

# Export the model to the specified path
model.export("path to save .tar file")