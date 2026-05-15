---
description: Start from a working pipeline template for common workflows
sidebar_position: 2
---

# Pipeline Templates

**Start from a working pipeline template for common workflows**
<hr />

Pipeline templates are starter projects for common AI/ML workflows — image classifiers, object detectors, LoRA fine-tunes, GPU benchmarks. They give you a working pipeline with sensible defaults that you can edit and run, instead of starting from a blank file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

## Discover Available Templates

Use `clarifai pipelinetemplate list` to see what's available:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinetemplate list</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>

```text
NAME                                       TYPE
benchmark-gpu-memory-pipeline              benchmark
classifier-pipeline-resnet                 classifier
classifier-pipeline-resnet-quick-start     classifier
detector-pipeline-yolof                    detector
detector-pipeline-yolof-quick-start        detector
lora-pipeline-unsloth                      lora
Found 6 template(s) total
Available types: benchmark, classifier, detector, lora
```

</details>

> **Note:** The `ls` alias works the same as `list` — `clarifai pipelinetemplate ls` is equivalent to `clarifai pipelinetemplate list`.

Templates are pulled from the [official Clarifai pipeline-examples repository](https://github.com/Clarifai/pipeline-examples). To point at a custom or private template repository, set `CLARIFAI_PIPELINE_TEMPLATES_GIT_REPO_URL` before running the command.

## Initialize a Project From a Template

Use `clarifai pipeline init --template <name>` to scaffold a working starter project from a template:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline init --template classifier-pipeline-resnet</CodeBlock>
</TabItem>
</Tabs>

The command creates a project in the current directory with all configuration and step files in place. You can then edit the generated files to point at your data and customize behavior, and upload with `clarifai pipeline upload`.

### Override Defaults at Initialization

Use `--set key=value` to override template parameters at init time. Each `--set` flag sets one parameter; you can pass it multiple times:

```bash
clarifai pipeline init --template classifier-pipeline-resnet \
  --set dataset_id=image_dataset \
  --set dataset_version_id=dataset_version_id \
  --set concepts='["beignets","hamburger","prime_rib","ramen"]'
```

This is the scriptable / agent-friendly entry point for scaffolding — no interactive prompts required.

### Specify User and App Context

By default, the scaffold uses your authenticated user. You can override with `--user_id` and `--app_id` to scaffold for a different user or app:

```bash
clarifai pipeline init --template classifier-pipeline-resnet \
  --user_id your_user_id \
  --app_id your_app_id
```

## What Gets Scaffolded

Templates today scaffold a YAML / config-based pipeline project — a directory containing a root `config.yaml`, per-step subdirectories, and a `pipeline_step.py` for each step. The full file structure is documented under [Advanced: YAML / config-based pipelines](create-api.md#step-3-modify-the-files).

> **Forward-looking note:** Clarifai is moving toward Python-first pipeline authoring via the [Pipeline DSL](dsl-reference.md). Over time, templates will evolve to scaffold DSL-based `.py` starters in addition to (or instead of) YAML scaffold directories. The CLI commands documented on this page will remain stable; what changes is the shape of the generated files.

## Use Templates Without `init`

You don't have to use the `init` command to use a template. Each template is just a project layout in the [pipeline-examples repository](https://github.com/Clarifai/pipeline-examples) — you can also clone or download templates directly, edit them in place, and `clarifai pipeline upload` them like any other pipeline.

For workflows where you'd rather author from scratch in Python without a starter, see the [Pipeline DSL reference](dsl-reference.md).

## Model-Type Walkthroughs

For end-to-end walkthroughs that use these templates in the context of training a specific kind of model, see:

* [Train a Visual Classifier](https://docs.clarifai.com/create/models/visual-classifier) — uses `classifier-pipeline-resnet`
* [Train a Visual Detector](https://docs.clarifai.com/create/models/visual-detector) — uses `detector-pipeline-yolof`
* [Training Models overview](https://docs.clarifai.com/create/models/) — index of model-type guides

These guides take a "I want to train a specific kind of model" angle; this page is the canonical reference for the template surface itself.
