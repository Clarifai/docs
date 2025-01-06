from clarifai.client.input import Inputs

url = "https://samples.clarifai.com/featured-models/Llama2_Conversational-agent.txt"

# Change this depending on the type of input you want to annotate
concepts = ["mobile","camera"]

# Initialize the Inputs object with user and app IDs
input_object = Inputs(user_id="YOUR_USER_ID_HERE", app_id="YOUR_APP_ID_HERE", pat="YOUR_PAT_HERE")
                      
# Upload text data with concepts
input_object.upload_from_url(input_id="text1", text_url=url, labels=concepts)

# Upload image data with concepts
#input_object.upload_from_url(input_id="image1", image_url="ADD_URL_HERE", labels=concepts)

# Upload video data with concepts
#input_object.upload_from_url(input_id="video1", video_url="ADD_URL_HERE", labels=concepts)

# Upload audio data with concepts
#input_object.upload_from_url(input_id="audio1", audio_url="ADD_URL_HERE", labels=concepts)