from clarifai.client.input import Inputs

url = "https://samples.clarifai.com/featured-models/Llama2_Conversational-agent.txt"
concepts = ["mobile","camera"]
#replace your "user_id", "app_id", "dataset_id".
input_object = Inputs(user_id="user_id", app_id="test_app",pat=”YOUR_PAT”)
#Upload data from url with annotation
input_object.upload_from_url(input_id="text1",text_url=url, labels=concepts)
