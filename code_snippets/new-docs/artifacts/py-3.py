from clarifai.client.artifact_version import ArtifactVersion

version = ArtifactVersion().upload(
    file_path="./model.pt",
    artifact_id="my-artifact",
    user_id="user-id",
    app_id="app-id",
    description="Production model v2.0",
    visibility="public",  # Options: "private", "public", "org"
)