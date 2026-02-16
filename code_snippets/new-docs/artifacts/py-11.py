from clarifai.client.artifact_version import ArtifactVersion

artifact_versions = ArtifactVersion(
    artifact_id="my-artifact",
    user_id="user-id",
    app_id="app-id"
)

for version_pb in artifact_versions.list():
    print(f"Version ID: {version_pb.id}")
    print(f"Description: {version_pb.description}")
    print(f"Visibility: {version_pb.visibility.gettable}")
    print("-" * 40)
