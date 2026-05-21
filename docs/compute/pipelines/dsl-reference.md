---
description: Pythonic-first DSL for defining and uploading Clarifai pipelines
sidebar_position: 1
toc_max_heading_level: 4
---

# Pipeline DSL Reference

**Define pipelines in Python — steps, composition, compute, and upload — with no separate YAML to maintain**
<hr />

The Clarifai pipeline DSL lets you define entire pipelines in Python. Steps are decorated functions; pipelines are composed inside a `Pipeline` context; parameters come from function signatures. The DSL compiles to the same underlying pipeline bundle used by the YAML / scaffold-directory flow, but you never have to write or maintain the YAML yourself.

This page is the complete reference for the DSL. For a runnable end-to-end walkthrough, see the [Quick Start](README.mdx#quick-start). For a more elaborate example with mixed local and remote steps, see [`examples/pipeline_dsl_text_pipeline.py`](https://github.com/Clarifai/clarifai-python/blob/master/examples/pipeline_dsl_text_pipeline.py) in the `clarifai-python` repo.

## Public API

The DSL is exported from `clarifai.runners.pipelines`:

```python
from clarifai.runners.pipelines import (
    ComputeInfo,
    Pipeline,
    step,
    step_ref,
    load_pipeline_from_file,  # advanced: load a Pipeline instance from a .py path
)
```

## Defining Steps with `@step`

Use the `@step` decorator to turn a Python function into a pipeline step. The function signature becomes the step's input parameters; the return value becomes the step's output.

```python
from clarifai.runners.pipelines import ComputeInfo, step

@step(
    id="prepare-text",                                # optional; defaults to function name with _→-
    requirements=["transformers>=4.0"],               # optional; pip requirements for the step
    assets=["./text_utils.py"],                       # optional; files copied alongside step code
    compute=ComputeInfo(cpu_limit="500m", cpu_memory="500Mi"),  # optional; compute requirements
    python_version="3.12",                            # optional; defaults to "3.12"
    secrets={"OPENAI_API_KEY": "users/me/secrets/openai-key"},  # optional; step-level secrets
)
def prepare_text(input_text: str) -> str:
    """Normalize text before downstream processing."""
    return input_text.strip().lower()
```

### `@step` Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `str` | The step's identifier. Defaults to the function name with underscores converted to hyphens (e.g. `prepare_text` → `prepare-text`). Must be a valid Clarifai resource ID. |
| `requirements` | `list[str]` or `str` | Pip requirements for the step. Accepts a list of requirement strings, a single requirement string, or a path to a `requirements.txt` file. |
| `assets` | `list[str]` | Files or directories to bundle alongside the step's code. Paths are resolved relative to the source file containing the step. |
| `compute` | `ComputeInfo` | Compute resources for the step (CPU, memory, accelerators). See [Compute Requirements](#compute-requirements). |
| `python_version` | `str` | Python version to use inside the step's container. Defaults to `"3.12"`. |
| `secrets` | `dict[str, str]` | Environment variable name → secret resource path. Secrets are mounted as environment variables at step runtime. |

### Step Input Parameters

A step's input parameters are inferred from its function signature. Type annotations become parameter type hints; default values become parameter defaults.

```python
@step
def train(
    dataset_path: str,                              # required parameter
    base_model: str = "google/vit-base-patch16-224", # optional with default
    epochs: int = 10,
    learning_rate: float = 0.001,
) -> str:
    ...
```

No separate `pipeline_step_input_params` YAML block to maintain — the function signature is the source of truth.

### Calling a Step Function Directly

Step functions can be called directly outside of a `Pipeline` context. This is useful for local testing:

```python
result = prepare_text("Some Input")           # runs the underlying function locally
# or, equivalently:
result = prepare_text.test(input_text="Some Input")
```

Inside a `Pipeline` context, the same call adds a node to the DAG instead of executing the function.

## Compute Requirements

`ComputeInfo` declares the compute resources for a step:

```python
from clarifai.runners.pipelines import ComputeInfo

ComputeInfo(
    cpu_limit="500m",         # 500 millicores = 0.5 CPU cores
    cpu_memory="500Mi",       # 500 MiB of memory
    num_accelerators=0,       # number of GPUs/accelerators
    accelerator_type=["NVIDIA-A10G"],  # optional accelerator type constraints
)
```

`ComputeInfo` is the same proto type used in `config.yaml`'s `pipeline_step_compute_info` block — see the [Compute Resources](create-api.md#compute-resources-allocation) section of the advanced YAML reference for the full set of fields.

## Composing Pipelines with `Pipeline(...)`

A `Pipeline` instance is the container for your DAG. Use it as a context manager (`with Pipeline(...) as pipeline:`) so step calls register nodes against it:

```python
from clarifai.runners.pipelines import Pipeline

with Pipeline(id="my-pipeline") as pipeline:
    raw = pipeline.input("input_text", default="hello world")

    prepared = prepare_text(input_text=raw)
    summary  = summarize(input_text=prepared.output())

    prepared >> summary
```

After running `clarifai login`, `user_id` and `app_id` are read automatically from your CLI context — you don't need to pass them explicitly. To target a different user or app, pass them as kwargs:

```python
with Pipeline(id="my-pipeline", user_id="other-user", app_id="other-app") as pipeline:
    ...
```

### `Pipeline` Constructor

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `str` | The pipeline's identifier. Required. |
| `user_id` | `Optional[str]` | User ID owning the pipeline. Defaults to the user from your `clarifai login` context. |
| `app_id` | `Optional[str]` | App ID containing the pipeline. Defaults to the app from your `clarifai login` context. |
| `visibility` | `str` | Visibility setting; defaults to `"PRIVATE"`. |

If neither explicit args nor `clarifai login` context provide `user_id` and `app_id`, the constructor raises a `ValueError` pointing you to run `clarifai login` first.

When the `with` block exits, the pipeline is validated automatically — missing dependencies and DAG cycles raise a `ValueError` before upload.

### Workflow Inputs

`pipeline.input(name, default=None)` declares a workflow-level input parameter — a value provided at runtime when you `clarifai pipeline run`. The return value is a reference you can pass into step calls:

```python
with Pipeline(id="my-pipeline") as pipeline:
    raw = pipeline.input("input_text", default="hello")
    cleaned = prepare_text(input_text=raw)
```

### Connecting Steps

There are two ways to express dependencies between steps:

**1. Pass one step's output to another step's input.** This creates an implicit dependency:

```python
prepared = prepare_text(input_text=raw)
summary  = summarize(input_text=prepared.output())   # summary depends on prepared
```

`step_node.output(param_name="result")` returns a reference to a named output of an upstream step. The default name is `"result"`.

**2. Use the `>>` operator for explicit ordering.** This is useful when you need a dependency that isn't expressed by data flow, or for fan-in / fan-out:

```python
# Linear: a → b → c
a >> b >> c

# Fan-out: prepared feeds two parallel branches
prepared >> [summary, sentiment]

# Fan-in (diamond DAG): both branches feed the final report step
prepared >> [summary, sentiment] >> report
```

The `>>` operator returns its right-hand operand so chained expressions read naturally.

## Referencing Existing Remote Steps with `step_ref`

To compose pipelines that include already-uploaded pipeline steps (your own or shared from another app), use `step_ref`. The referenced step is pinned to a specific version and is not re-uploaded with the pipeline:

```python
from clarifai.runners.pipelines import step_ref

# By IDs:
classify_sentiment = step_ref(
    id="classify-sentiment",
    user_id="demo-user",
    app_id="shared-app",
    version_id="sentiment-v3",
)

# By URL:
summarize = step_ref.from_url(
    "https://api.clarifai.com/v2/users/demo-user/apps/shared-app/pipeline_steps/summarize/versions/summary-v1",
    secrets={"OPENAI_API_KEY": "users/demo-user/secrets/openai-key"},
)
```

You can mix locally-defined steps and `step_ref` steps freely in the same pipeline.

### `step_ref` Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `str` | The remote step's ID. |
| `version_id` | `str` | A specific version of the step. Required — referencing the "latest" version is intentionally not supported, to preserve reproducibility. |
| `user_id` | `str` | The step's owning user. Defaults to the pipeline's `user_id`. |
| `app_id` | `str` | The step's owning app. Defaults to the pipeline's `app_id`. |
| `secrets` | `dict[str, str]` | Step-level secrets, same shape as `@step`. |

### `step_ref.from_url(url, *, secrets=None)`

Convenience constructor that parses a versioned pipeline step URL or resource path of the form:

```
users/{user_id}/apps/{app_id}/pipeline_steps/{step_id}/versions/{version_id}
```

## Step-Level Secrets

Both `@step` and `step_ref` accept a `secrets` dictionary mapping environment variable names to [Clarifai secret](https://docs.clarifai.com/control/authentication/environment-secrets) resource paths:

```python
@step(
    id="call-openai",
    secrets={"OPENAI_API_KEY": "users/me/secrets/openai-key"},
)
def call_openai(prompt: str) -> str:
    import os
    api_key = os.environ["OPENAI_API_KEY"]
    ...
```

Secrets are injected as environment variables at step runtime. They are not visible in your pipeline source or in the generated bundle.

## Upload

Upload a pipeline directly from its `.py` file:

```bash
clarifai pipeline upload my_pipeline.py
```

The CLI loads the `Pipeline` instance from the file, generates the underlying step bundles into a temporary `generated-<pipeline-id>/` directory next to the file, and uploads. You can also upload programmatically:

```python
pipeline_version_id = pipeline.upload(no_lockfile=False)
```

The pipeline's source file must contain exactly one `Pipeline` instance. If you want multiple pipelines in the same project, put them in separate files.

## Generating the YAML Bundle (Codegen)

To produce the underlying scaffold-directory bundle without uploading — useful for inspection, version control, or handing off to the YAML/CLI flow — there are two options.

**From the CLI:**

```bash
clarifai pipeline compile my_pipeline.py --output-dir ./generated-bundle
```

`clarifai pipeline compile` takes any `.py` file containing a `Pipeline` instance and writes the corresponding scaffold-directory bundle to the directory you specify.

**From Python:**

```python
pipeline.generate("./generated-bundle")
```

The `pipeline.generate(output_dir)` method is what `clarifai pipeline compile` calls under the hood — use it directly if you want to expose codegen from your own script:

```python
# my_pipeline.py
import argparse
from clarifai.runners.pipelines import Pipeline, step

# ... step and pipeline definitions ...

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", default="./generated-pipeline")
    args = parser.parse_args()
    pipeline.generate(args.out)

if __name__ == "__main__":
    main()
```

The generated directory has the same shape as a scaffold-directory pipeline: a root `config.yaml`, per-step subdirectories with their own `config.yaml`, `requirements.txt`, and a `1/pipeline_step.py` containing an `argparse`-wrapped version of your `@step` function. You can upload it the same way as a scaffold-directory pipeline:

```bash
clarifai pipeline upload ./generated-bundle
```

## Programmatic Run

You can run a pipeline from Python without going through the CLI:

```python
result = pipeline.run(
    inputs={"input_text": "hello world"},
    timeout=3600,
    monitor_interval=10,
    nodepool_id="...",
    compute_cluster_id="...",
)
```

If the pipeline hasn't been uploaded yet, `run()` uploads first. See the [Manage Pipeline Runs](manage-run.md) page for monitoring, pausing, and cancelling runs after they're started.

## Validation

Pipelines are validated automatically when the `with Pipeline(...) as pipeline:` block exits. Validation checks for:

- **Missing dependencies** — any `>>` reference to a step not defined in the pipeline raises a `ValueError`.
- **DAG cycles** — circular dependencies between steps raise a `ValueError` with the offending node.

For explicit validation outside a `with` block, call `pipeline.validate()` directly.

## See Also

* **[Quick Start](README.mdx#quick-start)** — minimal end-to-end DSL example.
* **[Templates](templates.md)** — starter `.py` files for common workflows.
* **[Advanced: YAML / config-based pipelines](create-api.md)** — the scaffold-directory authoring flow the DSL compiles down to.
* **[Working example](https://github.com/Clarifai/clarifai-python/blob/master/examples/pipeline_dsl_text_pipeline.py)** — a complete DSL pipeline with helpers, remote `step_ref` steps, and a diamond DAG.
