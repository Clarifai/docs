from clarifai.runners.pipelines import (
    Pipeline,
    StepDefinition,
    ComputeInfo,
    step,
)

# Define compute info
compute = ComputeInfo(
    cpu_limit="500m",
    cpu_memory="500Mi",
    num_accelerators=0,
)

# Define steps using the @step decorator
@step(compute=compute, python_version="3.12", requirements=["clarifai"])
def step_a(input_text: str) -> str:
    return input_text

@step(compute=compute, python_version="3.12", requirements=["clarifai"])
def step_b(input_text: str) -> str:
    return input_text

# Define the pipeline using context manager
with Pipeline(
    id="hello-world-pipeline",
    user_id="user-id",
    app_id="app-id",
) as pipeline:
    node_a = pipeline.add_node(step_a, arguments={"input_text": "Input Text Here"}, name="stepA")
    node_b = pipeline.add_node(step_b, arguments={"input_text": "Input Text Here"}, name="stepB")
    pipeline.add_dependency(upstream=node_a, downstream=node_b)