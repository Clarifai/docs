from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "nlptownres"
#APP_ID = "text-classification"

# Text sentiment analysis with 3 classes positive, negative, neutral.
# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'sentiment-analysis-twitter-roberta-base'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id


# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

model_url = "https://clarifai.com/erfan/text-classification/models/sentiment-analysis-twitter-roberta-base"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.


# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="text")


# Example for prediction through URL:
# model_prediction = Model(model_url).predict_by_url(URL, input_type="text")


file_path = "datasets/upload/data/text_files/positive/0_9.txt"
model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_filepath(
    file_path, input_type="text"
)

# Get the output
for concept in model_prediction.outputs[0].data.concepts:
    print(f"concept: {concept.name:<20} confidence: {round(concept.value, 3)}")
