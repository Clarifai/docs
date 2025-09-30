from clarifai.client import Model

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize with your model URL
model = Model(url="https://clarifai.com/alfrick/docs-demos/models/my-custom-model")

for response in model.generate("Yes, I uploaded it! "):
    print(response)