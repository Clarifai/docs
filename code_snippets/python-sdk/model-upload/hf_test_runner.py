# Before running this script, set the environment variables:
#   CLARIFAI_DEPLOYMENT_ID  (optional – only required for dedicated deployments)
#   CLARIFAI_PAT            (your Personal Access Token)

from clarifai.client import Model

# Initialize the model
model = Model(
    "https://clarifai.com/<user-id>/local-runner-app/models/local-runner-model",
    # deployment_id="local-runner-deployment",  # Uncomment if using a deployed model
)

# Run a basic prediction
response = model.predict(
    prompt="What is the future of AI?",
    max_tokens=512,
    temperature=0.7,
    top_p=0.8,
)

print(response)

'''
--- Additional examples ---

# Using the generate method
response = model.generate(
    prompt="What is the future of AI?",
    max_tokens=512,
    temperature=0.7,
    top_p=0.8,
)
for res in response:
    print(res)

# Using the chat method
response = model.chat(
    max_tokens=512,
    temperature=0.7,
    top_p=0.8,
)
for res in response:
    print(res)
'''
