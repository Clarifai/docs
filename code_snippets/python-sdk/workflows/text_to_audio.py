from clarifai.client.workflow import Workflow


workflow_url = "https://clarifai.com/clarifai/Text/workflows/text-to-audio"
# Creating thr workflow
text_to_audio_workflow = Workflow(
    url=workflow_url,
    pat="YOUR_PAT",
)

# Getting the predictions
result = text_to_audio_workflow.predict_by_bytes(
    b"I love your product very much", input_type="text"
)

# Save the audio file
with open("output_audio.wav", mode="bx") as f:
    f.write(result.results[0].outputs[0].data.audio.base64)