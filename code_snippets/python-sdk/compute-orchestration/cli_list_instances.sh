# List all available compute instances
clarifai list-instances

# Filter by cloud provider
clarifai list-instances --cloud aws

# Filter by GPU type
clarifai list-instances --gpu L40S

# Filter by minimum GPU count
clarifai list-instances --min-gpus 2

# Filter by minimum GPU memory
clarifai list-instances --min-gpu-mem 48Gi

# Combine multiple filters
clarifai list-instances --cloud aws --gpu L40S --region us-east-1
