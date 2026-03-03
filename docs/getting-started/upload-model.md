---
description: Build and deploy your first custom model to the Clarifai platform
sidebar_position: 5
---

# Build and Deploy a Model

**Quickly build and deploy your first custom model to the Clarifai platform**
<hr />

The Clarifai platform lets you deploy models to production in just three commands. This guide walks you through the complete workflow — from scaffolding to running predictions in the cloud.

We'll show two paths:
- **Path A** (recommended): Deploy a pre-trained LLM from HuggingFace using a toolkit
- **Path B**: Deploy a custom Python model you write from scratch

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import ModelPyFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.py";
import ConfigFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.yaml";
import RequirementsFile from "!!raw-loader!../../code_snippets/python-sdk/model-upload/upload-first-model.txt";
import PythonSDKRequest from "!!raw-loader!../../code_snippets/python-sdk/model-upload/predict-first-model.py";

## Step 1: Install and Log In

### Install Clarifai

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

This installs both the Python SDK and the [CLI](https://docs.clarifai.com/resources/api-overview/cli).

### Log In

You need a Clarifai account and a Personal Access Token (PAT). If you don't have one:
1. [Sign up](https://clarifai.com/signup) or [log in](https://clarifai.com/login)
2. Go to **Settings** > **Secrets** in the left sidebar
3. Create a new PAT and copy it

Then authenticate:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

The CLI will prompt for your PAT, validate it, auto-detect your user ID, and save everything locally. Verify it worked:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai whoami</CodeBlock>
</TabItem>
</Tabs>

You should see your user ID and the active context name.

## Path A: Deploy a Pre-Trained LLM (Recommended) {#path-a}

This is the fastest way to get a model running on Clarifai. We'll use [Qwen3-0.6B](https://huggingface.co/Qwen/Qwen3-0.6B) — a small, ungated model that doesn't require a HuggingFace token.

### Step 2A: Scaffold

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

This creates a `Qwen3-0.6B/` directory with everything pre-configured:

```text
Qwen3-0.6B/
├── 1/
│   └── model.py         # vLLM inference logic (ready to use)
├── requirements.txt     # Dependencies (vllm, clarifai)
└── config.yaml          # Config with auto-selected GPU instance
```

The generated `config.yaml` is minimal — no placeholders to fill in:

```yaml
model:
  id: "Qwen3-0.6B"

build_info:
  python_version: "3.11"

compute:
  instance: g5.xlarge       # Auto-selected based on model VRAM needs

checkpoints:
  repo_id: Qwen/Qwen3-0.6B
  type: huggingface
  when: runtime              # Downloads weights at startup, not during build
```

> `user_id` and `app_id` are auto-filled from your login context. `compute.instance` is auto-selected based on the model's estimated VRAM requirements (the CLI queries HuggingFace for model metadata to determine this).

### Step 3A: Deploy

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model deploy ./Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

That's it. The CLI will:

1. **Validate** — check `config.yaml` and verify the HuggingFace repo is accessible
2. **Upload** — build a Docker image and push it to Clarifai
3. **Deploy** — auto-create a compute cluster (a group of machines), a nodepool (the specific GPU instance), and a deployment (your model running on that hardware)
4. **Monitor** — stream pod events until the model is ready

When it finishes, you'll see output like this:

```text
── Ready ──────────────────────────────────────────────
  Model deployed successfully!

  Model:           https://clarifai.com/your-user/main/models/Qwen3-0.6B
  Version:         abc12345
  Deployment:      deploy-Qwen3-0.6B-dd8481
  Instance:        g5.xlarge (NVIDIA A10G, 24 GiB)
  Cloud:           AWS / us-east-1

── Next Steps ─────────────────────────────────────────
  Predict:         clarifai model predict your-user/main/models/Qwen3-0.6B "Hello"
  Logs:            clarifai model logs --deployment "deploy-Qwen3-0.6B-dd8481"
  Status:          clarifai model status --deployment "deploy-Qwen3-0.6B-dd8481"
  Undeploy:        clarifai model undeploy --deployment "deploy-Qwen3-0.6B-dd8481"
```

> **Copy the predict command from the output** — it contains your actual user ID and deployment ID, so you can paste it directly.

### Step 4A: Predict

Copy the predict command from the deploy output, or construct it using your user ID:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model predict your-user/main/models/Qwen3-0.6B "Explain quantum computing in one sentence"</CodeBlock>
</TabItem>
</Tabs>

> Replace `your-user` with your actual Clarifai user ID (the one shown by `clarifai whoami`). The `main` is the default app that's auto-created for you.

The response streams in real-time. You can also test in the [Playground](https://docs.clarifai.com/getting-started/quickstart-playground) by clicking the model URL from the deploy output.

### Step 5A: Manage

```bash
# Check deployment status
clarifai model status --deployment <deployment-id>

# Stream live logs (useful for debugging startup issues)
clarifai model logs --deployment <deployment-id>

# View Kubernetes scheduling events (useful if pod won't start)
clarifai model logs --deployment <deployment-id> --log-type events

# Remove deployment when done (stops billing)
clarifai model undeploy --deployment <deployment-id>
```

> Replace `<deployment-id>` with the ID from the deploy output (e.g., `deploy-Qwen3-0.6B-dd8481`).

---

## Path B: Deploy a Custom Python Model {#path-b}

Use this path when you're writing your own model logic (not wrapping a pre-trained model).

### Step 2B: Scaffold

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init my-first-model</CodeBlock>
</TabItem>
</Tabs>

This creates a blank model project. Replace the generated files with your model logic:

#### `1/model.py`

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ModelPyFile}</CodeBlock>
</TabItem>
</Tabs>

#### `requirements.txt`

<Tabs groupId="code">
<TabItem value="text" label="Text">
    <CodeBlock className="language-text">{RequirementsFile}</CodeBlock>
</TabItem>
</Tabs>

#### `config.yaml`

<Tabs groupId="code">
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{ConfigFile}</CodeBlock>
</TabItem>
</Tabs>

> `user_id` and `app_id` are auto-filled from your CLI context at deploy time. You don't need to add them.

### Step 3B: Test Locally (Optional)

Before deploying, verify your model works locally:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model serve ./my-first-model</CodeBlock>
</TabItem>
</Tabs>

This starts the model and connects it through a Clarifai-managed API endpoint for testing. Press Ctrl+C to stop.

For offline development without a Clarifai login:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model serve ./my-first-model --grpc</CodeBlock>
</TabItem>
</Tabs>

### Step 4B: Deploy

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model deploy ./my-first-model</CodeBlock>
</TabItem>
</Tabs>

This CPU-only model doesn't need `--instance` — the CLI uses the `inference_compute_info` from `config.yaml`. For GPU models, you'd add `--instance g5.xlarge` (run `clarifai model deploy --instance-info` to see all options).

### Step 5B: Predict

Copy the predict command from the deploy output, or construct it:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model predict your-user/main/models/my-first-model "Yes, I uploaded it! "</CodeBlock>
</TabItem>
</Tabs>

> Replace `your-user` with your Clarifai user ID (shown by `clarifai whoami`).

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">Yes, I uploaded it!  Hello World 0
Yes, I uploaded it!  Hello World 1
Yes, I uploaded it!  Hello World 2
Yes, I uploaded it!  Hello World 3
Yes, I uploaded it!  Hello World 4</CodeBlock>
</details>

Or use the Python SDK:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSDKRequest}</CodeBlock>
</TabItem>
</Tabs>

---

## Troubleshooting

### Deploy is stuck on "Monitor" phase

The model pod is starting up. For large LLMs, this can take 5–10 minutes as weights download at runtime. Check progress with:

```bash
clarifai model logs --deployment <deployment-id>
```

If the pod is failing to schedule, check Kubernetes events:

```bash
clarifai model logs --deployment <deployment-id> --log-type events
```

### HuggingFace token error

Some models (Llama, Gemma, etc.) are **gated** and require a HuggingFace access token. The CLI catches this early during the Validate phase:

```text
UserError: HuggingFace repo 'meta-llama/Llama-3.1-8B-Instruct' requires authentication.
  Set HF_TOKEN in your environment:
    export HF_TOKEN=hf_...
```

To fix: [create a HuggingFace token](https://huggingface.co/docs/hub/en/security-tokens), request access to the model, then set the token:

```bash
export HF_TOKEN=hf_your_token_here
```

The CLI will automatically include it in the build.

### Model predict returns an error

Make sure the deployment is fully ready before predicting:

```bash
clarifai model status --deployment <deployment-id>
```

Wait until the status shows the deployment is active. Runtime checkpoint downloads can take several minutes for large models.

---

## What's Next?

- Browse all [available GPU instances](https://docs.clarifai.com/resources/api-overview/cli#browse-available-instances) for deployment
- Learn about [toolkits](https://docs.clarifai.com/compute/toolkits) (vLLM, SGLang, Ollama, and more)
- Explore the full [CLI reference](https://docs.clarifai.com/resources/api-overview/cli)
- Set up [autoscaling](https://docs.clarifai.com/compute/deployments/deploy-model#set-autoscaling) for production workloads

**Congratulations!** You've successfully deployed a model to the Clarifai platform and run inference with it.

