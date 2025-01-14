from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id') # no need to provide any actual values of `model_id`, `user_id` and `app_id`

image_url = "https://samples.clarifai.com/metro-north.jpg"

# Model Predict
model_prediction = model.predict_by_url(image_url,)