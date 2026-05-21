---
description: Start from a working pipeline template for common workflows
sidebar_position: 2
---

# Pipeline Templates

**Start from a working pipeline template for common workflows**
<hr />

Pipeline templates are starter projects for common AI/ML workflows — LoRA fine-tuning, image classification, object detection, model quantization, evaluation. They give you a working pipeline with sensible defaults that you can edit and run, instead of starting from a blank file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

## Available CLI-First Templates

These five templates are designed to be initialized and run from the Clarifai CLI. All have working defaults so the first run requires no edits.

| Template | What it does |
| :--- | :--- |
| [`lora-pipeline-unsloth-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/lora-pipeline-unsloth-quick-start) | Fine-tune an LLM with LoRA using [Unsloth](https://github.com/unslothai/unsloth). Defaults to `unsloth/Qwen3-0.6B` on `mlabonne/FineTome-100k`. |
| [`llmcompressor-pipeline-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/llmcompressor-pipeline-quick-start) | Quantize a model with [`llm-compressor`](https://github.com/vllm-project/llm-compressor) for reduced memory and compute footprint. |
| [`classifier-pipeline-resnet-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/classifier-pipeline-resnet-quick-start) | Train an image classifier (ResNet) on your dataset. |
| [`detector-pipeline-yolof-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/detector-pipeline-yolof-quick-start) | Train an object detector (YOLOF) on your dataset. |
| [`detector-pipeline-eval-yolof-quick-start`](https://github.com/Clarifai/pipeline-examples/tree/main/detector-pipeline-eval-yolof-quick-start) | Evaluate a YOLOF object detector against ground-truth labels. |

## Discover Templates From the CLI

Use `clarifai pipelinetemplate list` to see all registered templates:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinetemplate list</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>

```text
NAME                                       TYPE
classifier-pipeline-resnet                 classifier
classifier-pipeline-resnet-quick-start     classifier
detector-pipeline-dfine                    detector
detector-pipeline-eval-yolof-quick-start   detector
detector-pipeline-yolof                    detector
detector-pipeline-yolof-quick-start        detector
llmcompressor-pipeline-quick-start         llmcompressor
lora-pipeline-unsloth-quick-start          lora
Found 8 template(s) total
Available types: classifier, detector, llmcompressor, lora
```

</details>

> **Note:** The `ls` alias works the same as `list` — `clarifai pipelinetemplate ls` is equivalent to `clarifai pipelinetemplate list`.

You'll notice the CLI returns three additional templates that aren't in the table above (`classifier-pipeline-resnet`, `detector-pipeline-dfine`, `detector-pipeline-yolof`). Those are **UI-triggerable templates** — they're the back-end implementations of the model-training workflows in the Clarifai web app, not standalone CLI experiences. See [Model-type guides](#model-type-guides) below for those.

Templates are pulled from the [official Clarifai pipeline-examples repository](https://github.com/Clarifai/pipeline-examples). To point at a custom or private template repository, set `CLARIFAI_PIPELINE_TEMPLATES_GIT_REPO_URL` before running the command.

## Initialize a Project From a Template

Use `clarifai pipeline init --template <name>` to scaffold a working starter project:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline init --template lora-pipeline-unsloth-quick-start</CodeBlock>
</TabItem>
</Tabs>

The command creates a project in the current directory with all configuration and step files in place. You can then edit the generated files to point at your data and customize behavior, and upload with `clarifai pipeline upload`.

### Override Defaults at Initialization

Use `--set key=value` to override template parameters at init time. Each `--set` flag sets one parameter; you can pass it multiple times:

```bash
clarifai pipeline init --template lora-pipeline-unsloth-quick-start \
  --set base_model_name="unsloth/Llama-3.2-1B-Instruct" \
  --set num_epochs=3
```

This is the scriptable / agent-friendly entry point for scaffolding — no interactive prompts required.

### Specify User and App Context

By default, the scaffold uses your authenticated user (from `clarifai login`). You can override with `--user_id` and `--app_id` to scaffold for a different user or app:

```bash
clarifai pipeline init --template lora-pipeline-unsloth-quick-start \
  --user_id your_user_id \
  --app_id your_app_id
```

## What Gets Scaffolded

Templates today scaffold a YAML / config-based pipeline project — a directory containing a root `config.yaml`, per-step subdirectories, and a `pipeline_step.py` for each step. The full file structure is documented under [Advanced: YAML / config-based pipelines](create-api.md#step-3-modify-the-files).

> **Forward-looking note:** Clarifai is moving toward Python-first pipeline authoring via the [Pipeline DSL](dsl-reference.md). Templates are being migrated to scaffold DSL-based `.py` starters in addition to YAML scaffold directories. The CLI commands documented on this page will remain stable; what changes is the shape of the generated files.

## Use Templates Without `init`

You don't have to use the `init` command to use a template. Each template is just a project layout in the [pipeline-examples repository](https://github.com/Clarifai/pipeline-examples) — you can also clone or download templates directly, edit them in place, and `clarifai pipeline upload` them like any other pipeline.

For workflows where you'd rather author from scratch in Python without a starter, see the [Pipeline DSL reference](dsl-reference.md).

## Model-Type Guides

The CLI-first templates above have UI-triggerable counterparts (`classifier-pipeline-resnet`, `detector-pipeline-dfine`, `detector-pipeline-yolof`) that power the model-training workflows in the Clarifai web app. For an end-to-end walkthrough that uses those, see:

* [Train a Visual Classifier](https://docs.clarifai.com/create/models/visual-classifier)
* [Train a Visual Detector](https://docs.clarifai.com/create/models/visual-detector)
* [Training Models overview](https://docs.clarifai.com/create/models/) — index of model-type guides

The model-type guides take a "I want to train a specific kind of model from the UI" angle; this page is the canonical reference for the CLI-first template surface.
