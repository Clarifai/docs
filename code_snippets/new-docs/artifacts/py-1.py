from clarifai.client.artifact import Artifact

# Initialize and create artifact
artifact = Artifact().create(
    artifact_id="my-artifact",
    user_id="user-id",
    app_id="app-id",
)

# --- Alternative initialization ---
# artifact = Artifact(
#     artifact_id="my-artifact",
#     user_id="user-id",
#     app_id="app-id",
# )
#
# created_artifact = artifact.create()
