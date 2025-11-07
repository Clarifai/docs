from clarifai.client.model import Model

# Set your Personal Access Token (PAT) as an environment variable before running this script:
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # For Unix-like systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # For Windows

model = Model(
    user_id="YOUR_USER_ID",
    app_id="demo_train",
    model_id="model_text_embedder"
)

# Get the predictions
TEXT = b"This is a great place to work"
model_prediction = model.predict_by_bytes(TEXT, input_type="text")

# Get the output
print('Input: ',TEXT)
for concept in model_prediction.outputs[0].data.concepts:
    print(concept.id,':',round(concept.value,2))