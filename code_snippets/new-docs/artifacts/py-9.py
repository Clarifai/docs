from clarifai.client.artifact_version import ArtifactVersion

version = ArtifactVersion(
    artifact_id="my-artifact",
    version_id="v123",
    user_id="user-id",
    app_id="app-id"
)

# The directory must already exist
saved_path = version.download(
    output_path="./downloads/"
)

print(f"Artifact downloaded to: {saved_path}")
