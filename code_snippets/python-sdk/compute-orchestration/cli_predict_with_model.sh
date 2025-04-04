# Use the CLI to log in to the Clarifai platform first: https://docs.clarifai.com/additional-resources/api-overview/cli#login

clarifai model predict --model_url https://clarifai.com/qwen/qwen-VL/models/Qwen2_5-VL-7B-Instruct --url https://samples.clarifai.com/birds.jpg --input_type image --deployment_id "YOUR_DEPLOYMENT_ID_HERE"
