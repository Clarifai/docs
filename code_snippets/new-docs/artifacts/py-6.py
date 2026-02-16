from clarifai.client.artifact_version import ArtifactVersion

version = ArtifactVersion(
    artifact_id="my-artifact",
    version_id="v123",
    user_id="user-id",
    app_id="app-id"
)

saved_path = version.download()

print(f"Artifact downloaded to: {saved_path}")