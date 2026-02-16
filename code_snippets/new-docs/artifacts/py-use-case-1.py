from clarifai.client.artifact import Artifact
from clarifai.client.artifact_version import ArtifactVersion

# 1. Create an artifact to store model files
artifact = Artifact().create(
    artifact_id="image-classifier-v1",
    user_id="user-id",
    app_id="app-id"
)

# 2. Upload the initial trained model
initial_version = ArtifactVersion().upload(
    file_path="./trained_model.pt",
    artifact_id="image-classifier-v1",
    user_id="user-id",
    app_id="app-id",
    description="Initial training run – 95% accuracy",
    visibility="org"
)

print(f"Uploaded version: {initial_version.id}")

# 3. Upload an improved model later
improved_version = ArtifactVersion().upload(
    file_path="./improved_model.pt",
    artifact_id="image-classifier-v1",
    user_id="user-id",
    app_id="app-id",
    version_id="v20",
    description="Improved model – 97.5% accuracy",
    visibility="public"
)