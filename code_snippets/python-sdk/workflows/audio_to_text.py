from clarifai.client.user import User


# Create a new app (replace USER_ID and APP_ID with your own)
app = User(user_id="user_id", pat="YOUR_PAT").create_app(
    app_id="APP_ID", base_workflow="Empty"
)
# Create ASR-Sentiment workflow
asr_sentiment_workflow = app.create_workflow(
    config_filepath="configs/asr_sentiment.yml"
)

audio_url = "https://s3.amazonaws.com/samples.clarifai.com/GreatPresentation2.wav"

# Infer workflow on an audio input
prediction = asr_sentiment_workflow.predict_by_url(
    audio_url,
    input_type="audio",
)

# Get workflow results
print(prediction.results[0].outputs[-1].data)
