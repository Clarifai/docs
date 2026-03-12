# Remove deployment by ID
clarifai model undeploy --deployment deploy-abc123

# Remove deployment by model reference
clarifai model undeploy user_id/app_id/models/model_id

# Remove deployment by model URL
clarifai model undeploy --model-url https://clarifai.com/user/app/models/my-model
