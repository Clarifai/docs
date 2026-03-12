# Check status by deployment ID
clarifai model status --deployment deploy-abc123

# Check all deployments for a model
clarifai model status user_id/app_id/models/model_id

# Check status by model URL
clarifai model status --model-url https://clarifai.com/user/app/models/my-model
