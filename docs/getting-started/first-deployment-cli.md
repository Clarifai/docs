---
description: Deploy a model to Clarifai cloud compute using the CLI
sidebar_position: 3
---

# Deploy Your First Model via CLI

**From zero to a running model in minutes**
<hr />

Clarifai's CLI gives you a fast, code-first path to deploy any HuggingFace model to cloud compute — with local testing built in before you spend a dollar on GPU time.

## Prerequisites

Install the Clarifai Python package and log in:

```sh
pip install clarifai
clarifai login
```

## Step 1: Initialize the model

Scaffold a model project using vLLM and a HuggingFace model name:

```sh
clarifai model init --toolkit vllm --model-name Qwen/Qwen3-4B
```

This creates a local directory (`./Qwen3-4B`) with a `config.yaml`, `requirements.txt`, and `1/model.py` pre-configured for vLLM.

## Step 2: Test locally

Run the model locally before deploying to cloud compute:

```sh
clarifai model serve ./Qwen3-4B --mode env
```

The `--mode env` flag creates an isolated virtual environment for the model's dependencies, avoiding conflicts with your existing Python packages.

:::note
`clarifai model serve` runs the model on your local machine. If your machine does not have a GPU, or doesn't meet the model's memory requirements, skip to [Step 3](#step-3-deploy-to-cloud) and deploy directly to a cloud GPU instead.
:::

:::tip
The first run downloads the model weights from HuggingFace (~7.7 GB for Qwen3-4B). Set `HF_TOKEN` in your environment for faster, authenticated downloads:
```sh
export HF_TOKEN=your_token_here
```
:::

When the model is ready, the CLI displays:
- The model URL on Clarifai
- A Playground link to test it in the browser
- The exact `clarifai model predict` command to run inference

Press `Ctrl+C` to stop the local server when you're done testing.

## Step 3: Deploy to cloud

Deploy the model to dedicated cloud compute:

```sh
clarifai model deploy ./Qwen3-4B --instance gpu-nvidia-a10g
```

To see all available instance types and pricing before choosing:

```sh
clarifai model deploy --instance-info
```

Clarifai automatically provisions a compute cluster and nodepool if one doesn't already exist.

## Step 4: Stream logs

Stream logs from the runner to confirm the model loaded successfully:

```sh
clarifai model logs --model-url YOUR_MODEL_URL
```

Replace `YOUR_MODEL_URL` with the model URL printed by the deploy command (e.g. `https://clarifai.com/YOUR_USER_ID/main/models/qwen3-4b`).

## Step 5: Run inference

Send a prediction to your deployed model:

```sh
clarifai model predict YOUR_MODEL_URL "Explain quantum computing in one sentence"
```

---

Prefer the UI? See [Deploy a Model](https://docs.clarifai.com/compute/deployments/deploy-model) for a step-by-step walkthrough using the Clarifai platform.
