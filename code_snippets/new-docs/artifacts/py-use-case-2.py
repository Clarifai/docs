from clarifai.client.artifact import Artifact
from clarifai.client.artifact_version import ArtifactVersion

# 1. List available model artifacts
artifact_client = Artifact()
print("Available models:")

for artifact_pb in artifact_client.list(
    user_id="user-id",
    app_id="app-id"
):
    print(f"- {artifact_pb.id}")

# 2. Access versions of a specific model
version_client = ArtifactVersion(
    artifact_id="image-classifier-v1",
    user_id="user-id",
    app_id="app-id"
)

versions = list(version_client.list())
latest_version = versions[0]  # Assumes versions are ordered by recency

# 3. Download the latest version for deployment
downloaded_path = version_client.download(
    output_path="./production_model.pt",
    version_id=latest_version.id,
    force=True
)

print(f"Downloaded model to: {downloaded_path}")