# Deploy with custom autoscaling (2 replicas minimum, up to 10)
clarifai model deploy ./my-model --instance g5.xlarge --min-replicas 2 --max-replicas 10
