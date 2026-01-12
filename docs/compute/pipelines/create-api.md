---
description: Create, upload, and run pipelines via our API effortlessly
sidebar_position: 1
toc_max_heading_level: 5
---

# Create and Run Pipelines [API]

**Create, upload, and run pipelines via our API effortlessly**
<hr />

Clarifai Pipelines let you design and launch asynchronous, multi-step AI workflows on our platform. You can effortlessly automate complex processes, orchestrate AI agents, and run long-running jobs at scale.

Let’s walk through how you can create, upload, and run pipelines via our API.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PipelineInit from "!!raw-loader!../../../code_snippets/new-docs/pipelines/pipeline-init.txt";
import ConfigYamlRoot from "!!raw-loader!../../../code_snippets/new-docs/pipelines/config-yaml-root.yaml";
import ConfigYamlStep from "!!raw-loader!../../../code_snippets/new-docs/pipelines/config-yaml-step.yaml";
import RequirementsTXT from "!!raw-loader!../../../code_snippets/new-docs/pipelines/requirements-txt.txt";
import PipelineStep from "!!raw-loader!../../../code_snippets/new-docs/pipelines/pipeline-step.py";
import UploadPipeline from "!!raw-loader!../../../code_snippets/new-docs/pipelines/upload-pipeline.txt";
import RunPipeline from "!!raw-loader!../../../code_snippets/new-docs/pipelines/run-pipeline.txt";
import DockerfileExample from "!!raw-loader!../../../code_snippets/new-docs/pipelines/dockerfile-example.py";
import LockfileExample from "!!raw-loader!../../../code_snippets/new-docs/pipelines/lockfile-example.yaml";
import RootLockfileExample from "!!raw-loader!../../../code_snippets/new-docs/pipelines/root-lockfile-example.yaml";

## Step 1: Perform Prerequisites

### Sign Up or Log In

To get started, [log in](https://clarifai.com/login) to your Clarifai account or [sign up](https://clarifai.com/signup) for a new one.
If you’re creating a new account, a default application will be automatically created for you.

Next, gather the following details — they’re needed to create and manage pipelines programmatically:

* **App ID** – Go to your application’s page and choose the [**Overview**](https://docs.clarifai.com/create/applications/manage#app-overview) option in the collapsible left sidebar. Get the app ID from there. 
* **User ID** – Go to **Settings** in the collapsible left sidebar and choose the **Account** option. Then, copy your user ID from that page. 
* **PAT (Personal Access Token)** – From the same **Settings** menu, navigate to the **Secrets** page to generate or copy your [PAT](https://docs.clarifai.com/control/authentication/pat). This token authenticates your requests to the Clarifai platform.

Set your PAT as an environment variable before continuing:

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>

### Install the Clarifai Python SDK

Install the latest version of the `clarifai` Python SDK. It includes the [Clarifai CLI](https://docs.clarifai.com/additional-resources/api-overview/cli), which you can use to interact with pipelines from the command line.

```bash
pip install --upgrade clarifai
```

### Create a Cluster and Nodepool

A compute cluster and nodepool define where your pipeline runs within Clarifai’s compute environment. They are required to allocate and manage the resources your pipeline needs for execution.

You need to [create](https://docs.clarifai.com/getting-started/set-up-compute) them and get their IDs. 


## Step 2: Initialize a Pipeline Project

Run the following command to create a new pipeline project in your current directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline init</CodeBlock>
</TabItem>
</Tabs>

> **Note:** 
> - You can initialize a project in a specific location by providing a `PIPELINE_PATH`. For example, running `clarifai pipeline init <pipeline-name>` creates a new directory named `<pipeline-name>` and populates it with all the required pipeline project files.
> - You can shorten `pipeline` to `pl` when running pipeline commands. For example: `clarifai pl init`.

After running the command, you’ll be prompted to provide the following details:

* `User ID` — Your Clarifai user ID.
* `App ID` — Your Clarifai application ID where the pipeline lives.
* `Pipeline ID` — The unique ID for your pipeline (or press **Enter** to use the default).
* `Number of steps` — How many steps your pipeline should have (or press **Enter** to use the default). You need to specify at least one step. 
* `Step names` — A name for each pipeline step (or press **Enter** to use the defaults).

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{PipelineInit}</CodeBlock>
</details>


:::note 

### Pipeline Steps

A step is a self-contained unit of execution in a Clarifai Pipeline. It represents one stage of your workflow and performs a specific task, then optionally passes its output to the next step.

For example, a step might preprocess input data, call an AI model, transform results, or interact with an external API.

In your pipeline project structure, each step is represented by its own folder. Steps are executed in sequence, parallel, or according to the definitions in the pipeline configuration.

Each step runs in an isolated, containerized environment with:

* Its own dependencies (`requirements.txt`)
* Its own configuration (`config.yaml`)
* Its own implementation logic (`/1/pipeline_step.py`)

This design makes steps modular, reusable, and independently versioned — allowing you to update or improve one step without impacting the rest of the pipeline.

> **Note:** You can also manage individual pipeline steps using the `pipelinestep` (or `ps`) command. This allows you to create, update, and reuse pipeline steps independently of the full pipeline. For example:
  > * `clarifai pipelinestep init` – Initialize a new pipeline step project structure.
  > * `clarifai pipelinestep upload` – Upload a pipeline step to the Clarifai platform.

:::

After running `clarifai pipeline init`, the CLI scaffolds a complete boilerplate project for you. Each file and folder represents a specific part of how your pipeline is configured, versioned, and executed.

Here is the structure of the generated project:

```text
├── config.yaml          # Pipeline configuration
├── stepA/               # First pipeline step
│   ├── config.yaml      # Step A configuration
│   ├── requirements.txt # Step A dependencies
│   └── 1/
│       └── pipeline_step.py  # Step A implementation logic
├── stepB/               # Second pipeline step
│   ├── config.yaml      # Step B configuration
│   ├── requirements.txt # Step B dependencies
│   └── 1/
│       └── pipeline_step.py  # Step B implementation logic
└── README.md            # Generated project documentation
```

## Step 3: Modify the Files

The Clarifai CLI generates a structured, multi-step pipeline project, where each step is independently configurable, versioned, and deployable. 

Next, you can customize the generated files to define your pipeline’s behavior.

Let’s walk through what each file does in the default project setup. 

### `config.yaml` (root)

<details>
  <summary>Example: config.yaml (root)</summary>
    <CodeBlock className="language-text">{ConfigYamlRoot}</CodeBlock>
</details>

The root `config.yaml` file defines your pipeline’s identity, structure, and execution logic. It tells Clarifai what the pipeline is, which steps it contains, and how those steps should be orchestrated at runtime.

:::tip Argo Workflows

Pipeline execution is powered by [Argo Workflows](https://argoproj.github.io/workflows/), an open-source, Kubernetes-native orchestration engine used to schedule and manage containerized jobs. Argo models multi-step workflows as a sequence of tasks and captures the dependencies between them using a directed acyclic graph (DAG). Clarifai leverages this under the hood to coordinate step execution, manage dependencies, and handle long-running workloads.

:::

Let’s break down the `config.yaml` file section by section.

#### Pipeline Metadata

```yaml
pipeline:
  id: "hello-world-pipeline"
  user_id: "user-id"
  app_id: "app-id"
```

These fields define your pipeline’s identity and location when uploaded to the Clarifai platform. They are automatically filled based on the values you provide during initialization. 

#### Step Directories

```yaml
step_directories:
  - stepA
  - stepB
```

This section tells Clarifai which folders in your project represent pipeline steps and how they should be ordered during execution.
The execution order is stipulated by the Argo Workflow Definition, as explained below.

Each listed directory corresponds to one pipeline step created during initialization. As mentioned [earlier](#pipeline-steps), each step contains its own `config.yaml`, `requirements.txt`, and executable logic, allowing steps to be configured and maintained independently.

#### Argo Workflow Definition

```yaml
orchestration_spec:
  argo_orchestration_spec: |
    apiVersion: argoproj.io/v1alpha1
    kind: Workflow
    spec:
      entrypoint: sequence
      arguments:
        parameters:
          - name: input_text
            value: "Input Text Here"
```

This section is the control center of your pipeline. It defines how Clarifai uses Argo Workflows to orchestrate and execute your multi-step workflow as a DAG.

Here’s what each part does:

* `apiVersion` — Specifies the version of the Argo Workflow API being used.
* `kind: Workflow` — Tells the system this is a multi-step Argo workflow.
* `entrypoint` — Defines the starting point of execution. In this case, the workflow begins at a [template](https://argo-workflows.readthedocs.io/en/release-3.5/workflow-concepts/) named `sequence`.
* Input parameters — These are runtime variables passed into your pipeline when you run it. Here, a parameter called `input_text` is defined. If no value is provided at runtime, it defaults to `"Input Text Here"`. This value can then be consumed by any pipeline step.

#### Step Execution Order

```yaml
templates:
- name: sequence
  steps:
  - - name: step-0
      templateRef:
        name: users/user-id/apps/app-id/pipeline_steps/stepA
        template: users/user-id/apps/app-id/pipeline_steps/stepA
      arguments:
        parameters:
          - name: input_text
            value: "{{workflow.parameters.input_text}}"

  - - name: step-1
      templateRef:
        name: users/user-id/apps/app-id/pipeline_steps/stepB
        template: users/user-id/apps/app-id/pipeline_steps/stepB
      arguments:
        parameters:
          - name: input_text
            value: "{{workflow.parameters.input_text}}"
```

The section defines how individual pipeline steps are connected and the exact order in which they run.

* `step-0` — Executes first. It references the deployed pipeline step `stepA` and receives the `input_text` parameter.
* `step-1` — Executes after `step-0` completes. It references `stepB` and also receives the same `input_text` parameter.

> **Note:** This structure defines a sequential workflow. Under the hood, Argo models this sequence as a DAG, ensuring that `stepB` only runs once its dependency (`stepA`) has successfully completed. The `templateRef` fields point to the deployed step implementations in your project directories (`stepA/` and `stepB/`). When deployed, Clarifai transforms these into executable Argo templates that power the pipeline.

> **Note:** You can also structure your pipeline as a [parallel workflow](https://argo-workflows.readthedocs.io/en/release-3.4/walk-through/steps/), where multiple steps run simultaneously instead of sequentially.

#### Optional: Secrets Configuration

```yaml
config:
  step_version_secrets:
    step-0:
      API_KEY: users/user-id/apps/secrets/my-api-key
      DB_PASSWORD: users/user-id/apps/secrets/db-secret
    step-1:
      EMAIL_TOKEN: users/user-id/apps/secrets/email-token
```

This section lets you securely inject [environment secrets](https://docs.clarifai.com/control/authentication/environment-secrets) into specific pipeline steps. It’s especially useful for handling sensitive data, like third-party API keys, without hardcoding them into your source code.

Each key (for example, `API_KEY` or `DB_PASSWORD`) becomes an environment variable inside the corresponding step’s runtime environment. The values reference secrets stored in the Clarifai secrets manager, which ensures they are encrypted, access-controlled, and never exposed directly in your project files.

> **Note:** Once the secrets are mounted, you can access them in your [`pipeline_step.py`](#1pipeline_steppy) file using standard environment variable calls, for example:

```python
import os

api_key = os.environ['API_KEY']
```

> The secret value is then available to your code at runtime.

### `step/config.yaml` 

<details>
  <summary>Example: step/config.yaml</summary>
    <CodeBlock className="language-text">{ConfigYamlStep}</CodeBlock>
</details>

Each pipeline step includes its own [`config.yaml`](https://docs.clarifai.com/compute/upload/#prepare-configyaml) file, which defines it as a self-contained, containerized unit of execution. These files usually share a common structure and similar resource settings, helping keep your pipeline consistent, predictable, and easy to manage.

Let’s break down the `step/config.yaml` file section by section.

#### Step Metadata

  ```yaml
  pipeline_step:
    id: "stepA"
    user_id: "user-id"
    app_id: "app-id"
  ```

This section defines how Clarifai identifies, scopes, and stores this pipeline step. These values are automatically filled with the information you provide when you [initialize](#step-2-initialize-a-pipeline-project) the pipeline project. 

> **Note:** Clarifai Pipelines support cross-application orchestration for reusing logic. To integrate a shared step into your pipeline, simply configure it with the corresponding `user_id`, `app_id`, or step `id` where the resource is hosted.

#### Input Interface

  ```yaml
  pipeline_step_input_params:
    - name: input_text
      description: "Text input for processing"
  ```

This defines the data this step expects when it runs. The description helps document what this input is used for and how it should be provided by upstream steps or users.

#### Runtime Environment

  ```yaml
  build_info:
    python_version: "3.12"
  ```

This specifies the environment used to run the step, ensuring [compatibility](https://docs.clarifai.com/resources/api-overview/python-sdk#python-requirements) with your code and dependencies.

#### Compute Resources Allocation

  ```yaml
  pipeline_step_compute_info:
    cpu_limit: "500m"
    cpu_memory: "500Mi"
    num_accelerators: 0
  ```

This section controls the resources allocated to the step during execution. It is the most critical part for performance and cost.

* `cpu_limit: "500m"` allocates half of one CPU core's processing power (500 millicores = 0.5 CPU cores). This indicates the step is a lightweight task (like text parsing), not a heavy calculation.
* `cpu_memory: "500Mi"` limits memory usage to 500 Mebibytes of RAM.
* `num_accelerators: 0` means no GPU or other [accelerators](https://docs.clarifai.com/compute/deployments/cloud-instances) are used. This keeps costs low, as you are running on standard CPU infrastructure.


### `step/requirements.txt` 

<details>
  <summary>Example: step/requirements.txt</summary>
    <CodeBlock className="language-text">{RequirementsTXT}</CodeBlock>
</details>

Each pipeline step has its own [`requirements.txt`](https://docs.clarifai.com/compute/upload/#prepare-requirementstxt) file, which specifies the Python packages required for that specific step to run. 

These dependencies are installed in an isolated, containerized environment, meaning one step can use a different set of libraries or versions without affecting other steps in the pipeline.

### `1/pipeline_step.py` 

<details>
  <summary>Example: 1/pipeline_step.py</summary>
    <CodeBlock className="language-text">{PipelineStep}</CodeBlock>
</details>

Each pipeline step has its own `pipeline_step.py` file, which contains the core implementation for that specific step. This is where you define all the logic the step executes — including data processing, API interactions, model inference, and output transformations.

When the pipeline runs, Clarifai spins up this step’s container and executes this script.

> **Note:** The `pipeline_step.py` file is nested inside the `step/1/` directory. The folder is named as **1** to fit Clarifai’s naming convention. 

Let’s break down the example of a `pipeline_step.py` file section by section.

#### Command-line Input Handling

```python
parser = argparse.ArgumentParser(description='stepA processing step.')
parser.add_argument('--input_text', type=str, required=True, help='Text input for processing')
args = parser.parse_args()
```

This section receives its inputs as command-line arguments when Clarifai runs it. The `--input_text` corresponds to the `pipeline_step_input_params` you defined in the step’s [`config.yaml`](#stepconfigyaml). 

Clarifai automatically maps pipeline parameters to these arguments when the step is executed.

#### Logging the Clarifai SDK Version

```python
logger.info(clarifai.__version__)
```

This section logs the version of the Clarifai Python SDK installed inside the step’s container. It’s useful for debugging and verifying that the correct environment is being used.

#### Step Logic Placeholder

```python
# TODO: Implement your pipeline step logic here
logger.info(f"stepA processed: {args.input_text}")
```

This section is where your step’s core logic lives. In this example, it simply logs the input it receives, but in a real pipeline, this is where you would implement the actual work of the step, such as preprocessing input data or calling LLM models. 

## Step 4: Upload the Pipeline

Run the following command in your current directory to upload the pipeline with associated pipeline steps to Clarifai.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline upload</CodeBlock>
</TabItem>
</Tabs>

> **Note:** You can specify a path to the pipeline configuration file or directory containing the root `config.yaml` file. If not specified, the current directory is used by default.


<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{UploadPipeline}</CodeBlock>
</details>


When you run the `upload` command, the CLI reads your pipeline configuration, uploads each step, and automatically builds a container image for every step using its code, configs, and dependencies. 

- **Dockerfile** — For each step, it auto-generates a `Dockerfile` behind the scenes, which defines how the container image for the step is built (base image, Python version, dependency installation, and entrypoint setup). You can also create your own customized Dockerfile. 

<details>
  <summary>Example: Dockerfile</summary>
    <CodeBlock className="language-text">{DockerfileExample}</CodeBlock>
</details>

- **Lock file** — If the CLI detects that no lock file is existing, it auto-creates a new `config-lock.yaml` to “freeze” the exact step configuration and build details for that version. 
This lock file captures the resolved configuration, including the Python runtime (`3.12`), compute resources, input parameters, and a unique version ID. The `step/config.yaml` file also stores an MD5 hash of the step contents, which is used to track changes and ensure reproducible builds.

> **Tip:** Use the `--no-lockfile` flag to disable generation of `config-lock.yaml`. Example: `clarifai pipeline upload --no-lockfile`.

<details>
  <summary>Example: config-lock.yaml (root)</summary>
    <CodeBlock className="language-text">{RootLockfileExample}</CodeBlock>
</details>

<details>
  <summary>Example: step/config-lock.yaml</summary>
    <CodeBlock className="language-text">{LockfileExample}</CodeBlock>
</details>

- **Container image** — Using the generated Dockerfile and the locked configuration, Clarifai then builds a multi-architecture container image on its infrastructure. This image becomes a versioned, immutable artifact that’s tightly coupled with the `config-lock.yaml`, ensuring every future pipeline execution runs with the exact same code, environment, and resource settings.

> **Note:** If you modify your pipeline and upload it again to the Clarifai platform, a new version is automatically created. Only the updated sections are uploaded, ensuring efficient version management.

## Step 5: Run the Pipeline

After successfully uploading your pipeline, you can execute it using the Clarifai CLI. 

Run the following command from your current project directory to start the pipeline and monitor its progress until completion or timeout.

> **Note:** You must specify both a compute [cluster ID and a nodepool ID](#create-a-cluster-and-nodepool). 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```text
    clarifai pipeline run --compute_cluster_id cluster_id_here --nodepool_id nodepool_id_here
    ```
</TabItem>
</Tabs>

> **Note:** The `clarifai pipeline run` command requires the user ID, app ID, pipeline version ID, and pipeline version run ID, which it reads directly from `config-lock.yaml`.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{RunPipeline}</CodeBlock>
</details>

### Run Command Options

The table below summarizes the available options you can use with the `clarifai pipeline run` command.

| Option | Type | Description | Defaults / Notes |
| :--- | :--- | :--- | :--- |
| **Targeting & Identity** | | | |
| `--pipeline_id` | `TEXT` | ID of the pipeline to execute | |
| `--user_id` | `TEXT` | User ID owning the pipeline | |
| `--app_id` | `TEXT` | App ID containing the pipeline | |
| `--pipeline_version_id` | `TEXT` | Specific version of the pipeline to run | |
| `--pipeline_url` | `TEXT` | Full URL to the pipeline resource | Alternative to providing IDs separately |
| **Execution Control** | | | |
| `--config` | `PATH` | Path to a local configuration file for the run | |
| `--pipeline_version_run_id`| `TEXT` | Custom ID for this specific execution run | A UUID is generated automatically if omitted |
| `--nodepool_id` | `TEXT` | Specific Nodepool to execute on | |
| `--compute_cluster_id` | `TEXT` | Specific Compute Cluster to execute on | |
| **Inputs & Parameters** | | | |
| `--set` | `TEXT` | Override parameter values inline | Format: `key=value`. Can be used multiple times. Example `--set prompt="hello"`, `--set temperature="0.7"`|
| `--overrides-file` | `PATH` | Path to JSON/YAML file for bulk parameter overrides| |
| **Monitoring & Logging** | | | |
| `--monitor` | `FLAG` | Watch an *existing* run instead of starting a new one| **Requires** `--pipeline_version_run_id` |
| `--monitor_interval` | `INTEGER`| Frequency of status checks | Default: **10 seconds**. |
| `--timeout` | `INTEGER`| Max time to wait for completion | Default: **3600 seconds** (1 hour) |
| `--log_file` | `PATH` | File path to save execution logs | If omitted, logs output to console |

That's it!