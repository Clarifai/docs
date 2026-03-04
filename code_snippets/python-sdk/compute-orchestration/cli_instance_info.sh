# Browse all available instance types
clarifai model deploy --instance-info

# Filter by cloud provider
clarifai model deploy --instance-info --cloud aws

# Filter by cloud and region
clarifai model deploy --instance-info --cloud aws --region us-east-1
