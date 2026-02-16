from clarifai.client.artifact_version import ArtifactVersion
from clarifai.errors import UserError

try:
    # Upload with missing required parameters
    ArtifactVersion().upload(
        file_path="./model.pt"
        # Missing artifact_id, user_id, and app_id
    )
except UserError as e:
    print(f"Upload failed: {e}")

try:
    # Attempt to download a non-existent artifact version
    ArtifactVersion().download(
        output_path="./model.pt",
        artifact_id="non-existent",
        version_id="v999",
        user_id="user-id",
        app_id="app-id"
    )
except UserError as e:
    print(f"Download failed: {e}")