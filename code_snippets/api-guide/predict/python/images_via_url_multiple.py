post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        ...
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=IMAGE_URL
                    )
                )
            ),
            resources_pb2.Input(
                data=resources_pb2.Data(
                    image=resources_pb2.Image(
                        url=IMAGE_URL
                    )
                )
            ),
            # and so on...
        ]
    ),
    ...
)