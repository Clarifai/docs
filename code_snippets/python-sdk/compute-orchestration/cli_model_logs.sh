# Stream model stdout/stderr logs (follows by default)
clarifai model logs --deployment deploy-abc123

# View Kubernetes scheduling and scaling events
clarifai model logs --deployment deploy-abc123 --log-type events

# Print current logs and exit (no follow)
clarifai model logs --deployment deploy-abc123 --no-follow

# Stream logs for 60 seconds then stop
clarifai model logs --deployment deploy-abc123 --duration 60

# Logs by model URL instead of deployment ID
clarifai model logs --model-url https://clarifai.com/user/app/models/my-model
