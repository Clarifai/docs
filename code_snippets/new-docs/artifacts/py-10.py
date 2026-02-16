from clarifai.client.artifact import Artifact

artifact_client = Artifact()

for artifact_pb in artifact_client.list(user_id="user-id", app_id="app-id"):
    print(f"Artifact ID: {artifact_pb.id}")

    # Uncomment the line below to print the full artifact protobuf details
    # print(artifact_pb)
