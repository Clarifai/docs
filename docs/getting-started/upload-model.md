---
description: Build and deploy your first custom model to the Clarifai platform
sidebar_position: 5
---

# Build and Deploy a Model

**Quickly build and deploy your first custom model to the Clarifai platform**
<hr />

The Clarifai platform lets you deploy custom models to production in just a few commands. This guide walks you through the complete workflow — from scaffolding a model to running predictions against it in the cloud.

:::note tip

To learn more about how to upload different types of models, check out [this comprehensive guide](https://docs.clarifai.com/compute/models/upload/).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import ModelPyFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.py";
import ConfigFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.yaml";
import RequirementsFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.txt";
import PythonSDKRequest from "!!raw-loader!../../code_snippets/python-sdk/model-upload/predict-first-model.py";

## Step 1: Perform Prerequisites

### Sign Up or Log In

To get started, [log in to](https://clarifai.com/login) your existing Clarifai account or [sign up](https://clarifai.com/signup) for a new one.

### Install Clarifai Package

Install the latest version of the `clarifai` Python SDK, which also installs the [Command Line Interface (CLI)](https://docs.clarifai.com/resources/api-overview/cli).

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

### Log In

Authenticate with the Clarifai platform. You'll need your [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat), which you can create from **Settings** > **Secrets** in the collapsible left sidebar.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

The CLI will prompt for your PAT, validate it, detect your user ID, and save credentials to a local context. You can also log in non-interactively:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login --pat YOUR_PAT_HERE</CodeBlock>
</TabItem>
</Tabs>

Verify you're logged in:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai whoami</CodeBlock>
</TabItem>
</Tabs>

## Step 2: Scaffold Your Model

Use `clarifai model init` to generate a ready-to-deploy model project. For this quick start, we'll create a simple text model:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init my-first-model</CodeBlock>
</TabItem>
</Tabs>

This creates a `my-first-model/` directory with three files:

```text
my-first-model/
├── 1/
│   └── model.py         # Your model logic
├── requirements.txt     # Python dependencies
└── config.yaml          # Model configuration
```

Edit the generated files with your model logic. Here are example files for a simple streaming "Hello World" model:

### `model.py`

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

### `requirements.txt`

<Tabs groupId="code">
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{RequirementsFile}</CodeBlock>
</TabItem>
</Tabs>

### `config.yaml`

The config is minimal — `user_id` and `app_id` are auto-filled from your CLI context:

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ConfigFile}</CodeBlock>
</TabItem>
</Tabs>

:::tip Using a Toolkit

For LLM models, use `--toolkit` to get a fully configured project with the right inference engine:

```bash
clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B
```

This auto-selects the optimal GPU instance based on model size. See [Toolkits](https://docs.clarifai.com/compute/toolkits) for all options.

:::


## Step 3: Test Locally (Optional)

Before deploying, you can run your model locally to verify it works:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model serve ./my-first-model</CodeBlock>
</TabItem>
</Tabs>

This starts the model and makes it available through a Clarifai-managed API endpoint for testing. Press Ctrl+C to stop.

For offline development without a Clarifai login:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model serve ./my-first-model --grpc</CodeBlock>
</TabItem>
</Tabs>

Learn more about [local testing options](https://docs.clarifai.com/compute/local-runners/).

## Step 4: Deploy to Cloud

Deploy your model to Clarifai's cloud compute with a single command. All infrastructure (compute cluster, nodepool, deployment) is created automatically — no manual setup required.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model deploy ./my-first-model</CodeBlock>
</TabItem>
</Tabs>

For models that need a GPU, specify an instance type:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model deploy ./my-first-model --instance g5.xlarge</CodeBlock>
</TabItem>
</Tabs>

Browse available instances with `clarifai model deploy --instance-info`.

The CLI will progress through validation, upload, deployment, and monitoring phases. Once complete, you'll see the model URL and next-step commands.

<details>
<summary>Example Output</summary>

```text
── Ready ──────────────────────────────────────────────
  Model deployed successfully!

  Model:           https://clarifai.com/your-user/main/models/my-first-model
  Version:         abc12345
  Deployment:      deploy-my-first-model-abc123
  Instance:        t3a.2xlarge
  Cloud:           AWS / us-east-1

── Next Steps ─────────────────────────────────────────
  Predict:         clarifai model predict your-user/main/models/my-first-model "Hello"
  Logs:            clarifai model logs --deployment "deploy-my-first-model-abc123"
  Status:          clarifai model status --deployment "deploy-my-first-model-abc123"
  Undeploy:        clarifai model undeploy --deployment "deploy-my-first-model-abc123"
```

</details>

:::tip

If you prefer to upload and deploy as separate steps, use `clarifai model upload` first, then [deploy via the UI or API](https://docs.clarifai.com/compute/deployments/deploy-model).

:::

## Step 5: Predict With Model

Once your model is deployed, run predictions using the CLI:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model predict your-user/main/models/my-first-model "Yes, I uploaded it! "</CodeBlock>
</TabItem>
</Tabs>

Or programmatically using the Python SDK:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSDKRequest}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">Yes, I uploaded it!  Hello World 0
Yes, I uploaded it!  Hello World 1
Yes, I uploaded it!  Hello World 2
Yes, I uploaded it!  Hello World 3
Yes, I uploaded it!  Hello World 4</CodeBlock>
</details>

You can also test it directly in the [Playground](https://docs.clarifai.com/getting-started/quickstart-playground).

## Lifecycle Management

After deployment, use these commands to manage your model:

```bash
# Check deployment status
clarifai model status --deployment <deployment-id>

# Stream live logs
clarifai model logs --deployment <deployment-id>

# Remove deployment when done
clarifai model undeploy --deployment <deployment-id>
```

Learn more about all available CLI commands in the [CLI Reference](https://docs.clarifai.com/resources/api-overview/cli).

**Congratulations!**

You've successfully deployed your first model to the Clarifai platform and run inference with it!

