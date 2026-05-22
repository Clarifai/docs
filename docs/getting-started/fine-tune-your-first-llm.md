---
description: Fine-tune an LLM with LoRA in three commands using a pipeline template
sidebar_position: 5
---

# Fine-Tune Your First LLM

**Fine-tune an LLM with LoRA in three commands using a pipeline template**
<hr />

The fastest way to fine-tune an LLM on Clarifai is to scaffold a project from the [`lora-pipeline-unsloth-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/lora-pipeline-unsloth-quick-start) pipeline template, then upload and run it. The template uses public data, sensible defaults, and auto-provisions compute — no dataset setup or hyperparameter tuning required for the first run.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

## Prerequisites

Install the Clarifai CLI and authenticate:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{`pip install --upgrade clarifai
clarifai login`}</CodeBlock>
</TabItem>
</Tabs>

`clarifai login` auto-detects your user ID and saves your [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat) locally.

## Fine-Tune the Model

Scaffold a project from the LoRA quick-start template, then upload and run it:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{`clarifai pipeline init --template lora-pipeline-unsloth-quick-start
cd lora-pipeline-unsloth-quick-start
clarifai pipeline upload
clarifai pipeline run --instance=g5.xlarge`}</CodeBlock>
</TabItem>
</Tabs>

This trains a LoRA fine-tune of [`unsloth/Qwen3-0.6B`](https://huggingface.co/unsloth/Qwen3-0.6B) on the [`mlabonne/FineTome-100k`](https://huggingface.co/datasets/mlabonne/FineTome-100k) dataset using [Unsloth](https://github.com/unslothai/unsloth). `--instance=g5.xlarge` auto-provisions a compute cluster and nodepool — no separate cluster setup required, and the same nodepool can later serve inference on the fine-tuned model.

When training completes, the fine-tuned model is registered in your Clarifai model registry, ready to serve, evaluate, or refine further.

## Customize Before Running

To override defaults at init time — a different base model, more epochs, custom LoRA rank — pass `--set key=value` flags. For example, to fine-tune Llama 3.2 1B for three epochs:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{`clarifai pipeline init --template lora-pipeline-unsloth-quick-start \\
  --set base_model_name="unsloth/Llama-3.2-1B-Instruct" \\
  --set num_epochs=3`}</CodeBlock>
</TabItem>
</Tabs>

See the [Pipeline Templates reference](https://docs.clarifai.com/compute/pipelines/templates) for all customizable parameters.

## What to Explore Next

- **[Train a Visual Classifier](https://docs.clarifai.com/create/models/visual-classifier)** — Train an image classifier (ResNet) using a different pipeline template.
- **[Train a Visual Detector](https://docs.clarifai.com/create/models/visual-detector)** — Train an object detector (YOLOF) using a different pipeline template.
- **[Clarifai Pipelines](https://docs.clarifai.com/compute/pipelines/)** — The Pythonic-first pipeline authoring story, including the DSL for custom workflows.
- **[Run inference on the fine-tuned model](https://docs.clarifai.com/compute/inference/)** — Use the trained LLM for predictions.
