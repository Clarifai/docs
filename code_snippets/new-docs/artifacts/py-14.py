from clarifai.client.artifact import Artifact

artifact = Artifact(
    artifact_id="my-artifact",
    user_id="user-id",
    app_id="app-id"
)
artifact.delete()