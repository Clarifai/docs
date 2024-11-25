from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the Account's Security section
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "cohere"
#APP_ID = "embed"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'cohere-embed-english-v3_0'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

input_text = """In India Green Revolution commenced in the early 1960s that led to an increase in food grain production, especially in Punjab, Haryana, and Uttar Pradesh. Major milestones in this undertaking were the development of high-yielding varieties of wheat. The Green revolution is revolutionary in character due to the introduction of new technology, new ideas, the new application of inputs like HYV seeds, fertilizers, irrigation water, pesticides, etc. As all these were brought suddenly and spread quickly to attain dramatic results thus it is termed as a revolution in green agriculture.
"""
# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through URL:
# model_prediction = Model(model_url).predict_by_url(URL ,input_type="text")

# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="text")

model_url = "https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0"

# You can pass the new base url as paramater while initializing the Model object
model_prediction = Model(url=model_url, pat="YOUR_PAT",base_url="New Base URL").predict_by_bytes(
    input_text, "text"
)

embeddings = model_prediction.outputs[0].data.embeddings[0].vector

num_dimensions = model_prediction.outputs[0].data.embeddings[0].num_dimensions

print(embeddings[:10])
