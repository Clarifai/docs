from clarifai.client import Model

# Set PAT as an environment variable:
#   export CLARIFAI_PAT=YOUR_PAT_HERE   # macOS / Linux
#   set CLARIFAI_PAT=YOUR_PAT_HERE      # Windows

# Initialize the model
model = Model(
    url="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
)

# Stream both processed responses and raw protobuf metadata
for response, proto_response in model.generate(
    prompt="What is photosynthesis?",
    reasoning_effort="medium",
    with_proto=True
):
    # Processed chunk of streamed text
    print(f"Generated chunk: {response}")

    # Protobuf metadata for this streamed chunk
    print(f"Request ID for debugging: {proto_response.status.req_id}")
    print(f"Success or error status code: {proto_response.status.code}")
    print(f"Human-readable status description: {proto_response.status.description}")
    print(f"Additional status details: {proto_response.status.details}")
    print(f"Percent progress completed: {proto_response.status.percent_completed}")

    # Outputs (each streamed chunk may contain output data)
    print(f"Number of Outputs: {len(proto_response.outputs)}")

    if proto_response.outputs:
        output = proto_response.outputs[0]
        print(f"Output status code: {output.status.code}")
        print(f"Output status description: {output.status.description}")
        print(f"Raw output data: {output.data}")
    else:
        print("No outputs returned in this streamed chunk.")

    print("---")  # Separator for each streamed chunk
