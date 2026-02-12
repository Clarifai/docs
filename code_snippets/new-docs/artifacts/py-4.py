from clarifai.client.artifact_version import ArtifactVersion

version = ArtifactVersion().upload(
    file_path="./model.pt",
    artifact_id="my-artifact",
    user_id="user-id",
    app_id="app-id",
    version_id="v123"
)