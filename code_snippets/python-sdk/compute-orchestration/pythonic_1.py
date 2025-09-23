from clarifai.client import Model

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize with model URL
model = Model(url="https://clarifai.com/openai/chat-completion/models/o4-mini")

model_methods = model.available_methods()

print(model_methods)