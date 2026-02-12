from clarifai.client.artifact_version import ArtifactVersion
from google.protobuf.timestamp_pb2 import Timestamp
import datetime

expires_at = Timestamp()
expires_at.FromDatetime(datetime.datetime(2026, 12, 31, 23, 59, 59))

version = ArtifactVersion().upload(
    file_path="./model.pt",
    artifact_id="my-artifact",
    user_id="user-id",
    app_id="app-id",
    expires_at=expires_at
)