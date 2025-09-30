from clarifai.client import Model

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize with model URL
model = Model(url="https://clarifai.com/alfrick/docs-demos/models/my-uploaded-model")

response = model.predict("Yes, I uploaded it!")

print(response)