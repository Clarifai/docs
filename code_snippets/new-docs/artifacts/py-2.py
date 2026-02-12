from clarifai.client.artifact_version import ArtifactVersion

# Upload using direct initialization
version = ArtifactVersion().upload(
    file_path="./model.pt",
    artifact_id="my-artifact",
    user_id="user-id",
    app_id="app-id"
)

# Upload using pre-initialized client
#
# artifact_version = ArtifactVersion(
#     artifact_id="my-artifact",
#     user_id="user-id",
#     app_id="app-id"
# )
#
# version = artifact_version.upload(
#     file_path="./model.pt",
#     description="Latest version"
# )

