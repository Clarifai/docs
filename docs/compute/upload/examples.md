---
description: Learn how to upload and customize your own models on the Clarifai platform
sidebar_position: 5
---

# Model Upload Examples

**Learn how to upload and customize your own models on the Clarifai platform**

<hr />

This section provides examples that guide you through uploading custom models to Clarifai. You’ll learn how to adapt pre-built examples, configure model settings, and prepare your project for deployment on the platform.

:::tip

All the examples here are available in the Clarifai Runners Examples [GitHub repository](https://github.com/Clarifai/runners-examples). You can use the Clarifai CLI to [download a model template](https://docs.clarifai.com/resources/api-overview/cli#initialize-with-github-template). For example:

```bash
clarifai model init --github-url https://github.com/Clarifai/runners-examples/tree/main/local-runners/ollama-model-upload
```
:::

To use these examples, create a project directory and organize your files as shown below. This structure is required for successfully uploading models to the Clarifai platform:

```
your_model_directory/
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
```

* **`your_model_directory/`** – Root directory containing all files related to your custom model.
  * **`1/`** – A subdirectory (named `1`) that contains the main model file.
* **`model.py`** – Defines your model logic, including loading the model and handling inference.
* **`requirements.txt`** – Lists all Python dependencies required to run your model.
* **`config.yaml`** – Includes metadata and configuration details for building the model, such as compute resources and environment settings.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import HelloWorldPy from "!!raw-loader!../../../code_snippets/runners-examples/hello_world.py";
import HelloWorldTxt from "!!raw-loader!../../../code_snippets/runners-examples/hello_world_requirements.txt";
import HelloWorldConfig from "!!raw-loader!../../../code_snippets/runners-examples/hello_world_config.yaml";

import NSFWImageClassifierPy from "!!raw-loader!../../../code_snippets/runners-examples/nsfw-image-classifier.py";
import NSFWImageClassifierTxt from "!!raw-loader!../../../code_snippets/runners-examples/nsfw-image-classifier.txt";
import NSFWImageClassifierConfig from "!!raw-loader!../../../code_snippets/runners-examples/nsfw-image-classifier.yaml";

import DetrresnetimagedetectionPy from "!!raw-loader!../../../code_snippets/runners-examples/detr-resnet-image-detection.py";
import DetrresnetimagedetectionTxt from "!!raw-loader!../../../code_snippets/runners-examples/detr-resnet-image-detection_requirements.txt";
import DetrresnetimagedetectionConfig from "!!raw-loader!../../../code_snippets/runners-examples/detr-resnet-image-detection_config.yaml";

import mask2formeradePy from "!!raw-loader!../../../code_snippets/runners-examples/mask2former-ade.py";
import mask2formeradeTxt from "!!raw-loader!../../../code_snippets/runners-examples/mask2former-ade.txt";
import mask2formeradeConfig from "!!raw-loader!../../../code_snippets/runners-examples/mask2former-ade.yaml";

import stablediffusion2depthPy from "!!raw-loader!../../../code_snippets/runners-examples/stable-diffusion-2-depth.py";
import stablediffusion2depthTxt from "!!raw-loader!../../../code_snippets/runners-examples/stable-diffusion-2-depth.txt";
import stablediffusion2depthConfig from "!!raw-loader!../../../code_snippets/runners-examples/stable-diffusion-2-depth.yaml";

import SglangSmolLM217BInstructPy from "!!raw-loader!../../../code_snippets/runners-examples/Sglang-SmolLM2-1_7B-Instruct.py";
import SglangOpenaiServer from "!!raw-loader!../../../code_snippets/runners-examples/Sglang-openai_server_starter.py";
import SglangSmolLM217BInstructTxt from "!!raw-loader!../../../code_snippets/runners-examples/Sglang-SmolLM2-1_7B-Instruct.txt";
import SglangSmolLM217BInstructConfig from "!!raw-loader!../../../code_snippets/runners-examples/Sglang-SmolLM2-1_7B-Instruct.yaml";

import hfllama321binstructPy from "!!raw-loader!../../../code_snippets/runners-examples/hf-llama-3_2-1b-instruct.py";
import hfllama321binstructTxt from "!!raw-loader!../../../code_snippets/runners-examples/hf-llama-3_2-1b-instruct_requirements.txt";
import hfllama321binstructConfig from "!!raw-loader!../../../code_snippets/runners-examples/hf-llama-3_2-1b-instruct_config.yaml";

import lmdeployLlama323BInstructPy from "!!raw-loader!../../../code_snippets/runners-examples/lmdeploy-Llama-3_2-3B-Instruct.py";
import lmdeployLlama323BInstructTxt from "!!raw-loader!../../../code_snippets/runners-examples/lmdeploy-Llama-3_2-3B-Instruct_requirements.txt";
import lmdeployLlama323BInstructConfig from "!!raw-loader!../../../code_snippets/runners-examples/lmdeploy-Llama-3_2-3B-Instruct_config.yaml";

import vllmgemma31bitPy from "!!raw-loader!../../../code_snippets/runners-examples/vllm-gemma-3-1b-it.py";
import vllmgemma31bitTxt from "!!raw-loader!../../../code_snippets/runners-examples/vllm-gemma-3-1b-it_requirements.txt";
import vllmgemma31bitConfig from "!!raw-loader!../../../code_snippets/runners-examples/vllm-gemma-3-1b-it_config.yaml";

import vllmtoolcallingllama318bPy from "!!raw-loader!../../../code_snippets/runners-examples/vllm-tool-calling-llama-3.1-8b.py";
import vllmtoolcallingllama318bTxt from "!!raw-loader!../../../code_snippets/runners-examples/vllm-tool-calling-llama-3.1-8b_requirements.txt";
import vllmtoolcallingllama318bConfig from "!!raw-loader!../../../code_snippets/runners-examples/vllm-tool-calling-llama-3.1-8b_config.yaml";

import ollamamodeluploadPy from "!!raw-loader!../../../code_snippets/runners-examples/ollama-model-upload.py";
import ollamamodeluploadTxt from "!!raw-loader!../../../code_snippets/runners-examples/ollama-model-upload_requirements.txt";
import ollamamodeluploadConfig from "!!raw-loader!../../../code_snippets/runners-examples/ollama-model-upload_config.yaml";

import browsertoolsPy from "!!raw-loader!../../../code_snippets/runners-examples/browser-tools.py";
import browsertoolsClient from "!!raw-loader!../../../code_snippets/runners-examples/browser-tools-client.py";
import browsertoolsTxt from "!!raw-loader!../../../code_snippets/runners-examples/browser-tools_requirements.txt";
import browsertoolsConfig from "!!raw-loader!../../../code_snippets/runners-examples/browser-tools_config.yaml";

import codeexecutiondockerversionPy from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-docker-version.py";
import codeexecutiondockerversionClient from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-docker-version-client.py";
import codeexecutiondockerversionTxt from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-docker-version_requirements.txt";
import codeexecutiondockerversionConfig from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-docker-version_config.yaml";

import codeexecutionwithoutdockerversionPy from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-without-docker-version.py";
import codeexecutionwithoutdockerversionClient from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-without-docker-version-client.py";
import codeexecutionwithoutdockerversionTxt from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-without-docker-version_requirements.txt";
import codeexecutionwithoutdockerversionConfig from "!!raw-loader!../../../code_snippets/runners-examples/code-execution-without-docker-version_config.yaml";

import googledrivePy from "!!raw-loader!../../../code_snippets/runners-examples/google-drive.py";
import googledriveClient from "!!raw-loader!../../../code_snippets/runners-examples/google-drive-client.py";
import googledriveTxt from "!!raw-loader!../../../code_snippets/runners-examples/google-drive.txt";
import googledriveConfig from "!!raw-loader!../../../code_snippets/runners-examples/google-drive.yaml";

import mathPy from "!!raw-loader!../../../code_snippets/runners-examples/math.py";
import mathClient from "!!raw-loader!../../../code_snippets/runners-examples/math-client.py";
import mathTxt from "!!raw-loader!../../../code_snippets/runners-examples/math_requirements.txt";
import mathConfig from "!!raw-loader!../../../code_snippets/runners-examples/math_config.yaml";

import postgresPy from "!!raw-loader!../../../code_snippets/runners-examples/postgres.py";
import postgresClient from "!!raw-loader!../../../code_snippets/runners-examples/postgres-client.py";
import postgresTxt from "!!raw-loader!../../../code_snippets/runners-examples/postgres_requirements.txt";
import postgresConfig from "!!raw-loader!../../../code_snippets/runners-examples/postgres_config.yaml";

import websearchPy from "!!raw-loader!../../../code_snippets/runners-examples/web-search.py";
import websearchClient from "!!raw-loader!../../../code_snippets/runners-examples/web-search-client.py";
import websearchTxt from "!!raw-loader!../../../code_snippets/runners-examples/web-search_requirements.txt";
import websearchConfig from "!!raw-loader!../../../code_snippets/runners-examples/web-search_config.yaml";

import Qwen25VL3BInstructpythonicvllmPy from "!!raw-loader!../../../code_snippets/runners-examples/Qwen2_5-VL-3B-Instruct-pythonic-vllm.py";
import Qwen25VL3BIopenaiserverstarterPy from "!!raw-loader!../../../code_snippets/runners-examples/Qwen-openai_server_starter.py";
import Qwen25VL3BInstructpythonicvllmTxt from "!!raw-loader!../../../code_snippets/runners-examples/Qwen2_5-VL-3B-Instruct-pythonic-vllm_requirements.txt";
import Qwen25VL3BInstructpythonicvllmConfig from "!!raw-loader!../../../code_snippets/runners-examples/Qwen2_5-VL-3B-Instruct-pythonic-vllm_config.yaml";

import nanonetsocrsPy from "!!raw-loader!../../../code_snippets/runners-examples/nanonets-ocr-s.py";
import nanonetsocrsTxt from "!!raw-loader!../../../code_snippets/runners-examples/nanonets-ocr-s_requirements.txt";
import nanonetsocrsConfig from "!!raw-loader!../../../code_snippets/runners-examples/nanonets-ocr-s_config.yaml";

import jinaembeddingsv3Py from "!!raw-loader!../../../code_snippets/runners-examples/jina-embeddings-v3.py";
import jinaembeddingsv3xt from "!!raw-loader!../../../code_snippets/runners-examples/jina-embeddings-v3_requirements.txt";
import jinaembeddingsv3Config from "!!raw-loader!../../../code_snippets/runners-examples/jina-embeddings-v3_config.yaml";

import fluxschnellPy from "!!raw-loader!../../../code_snippets/runners-examples/flux-schnell.py";
import fluxschnellTxt from "!!raw-loader!../../../code_snippets/runners-examples/flux-schnell_requirements.txt";
import fluxschnellConfig from "!!raw-loader!../../../code_snippets/runners-examples/flux-schnell_config.yaml";


## Hello World

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{HelloWorldPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{HelloWorldTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{HelloWorldConfig}</CodeBlock>
</details>

## NSFW Image Classifier

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{NSFWImageClassifierPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{NSFWImageClassifierTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{NSFWImageClassifierConfig}</CodeBlock>
</details>

## DETR ResNet Image Detector 

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{DetrresnetimagedetectionPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{DetrresnetimagedetectionTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{DetrresnetimagedetectionConfig}</CodeBlock>
</details>

## Image Segmenter

### Mask2Former ADE

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{mask2formeradePy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{mask2formeradeTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{mask2formeradeConfig}</CodeBlock>
</details>

## Image-Text-to-Image

### Stable Diffusion 2 Depth

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{stablediffusion2depthPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{stablediffusion2depthTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{stablediffusion2depthConfig}</CodeBlock>
</details>

## LLM

### SmolLM2 1.7B Instruct (SGLang)

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{SglangSmolLM217BInstructPy}</CodeBlock>
</details>

<details>
  <summary>`1/openai_server_starter.py`</summary>
    <CodeBlock className="language-text">{SglangOpenaiServer}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{SglangSmolLM217BInstructTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{SglangSmolLM217BInstructConfig}</CodeBlock>
</details>

### LLaMA 3.2 1B Instruct (Hugging Face)

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{hfllama321binstructPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{hfllama321binstructTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{hfllama321binstructConfig}</CodeBlock>
</details>

### LLaMA 3.2 3B Instruct (LMDeploy)

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{lmdeployLlama323BInstructPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{lmdeployLlama323BInstructTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{lmdeployLlama323BInstructConfig}</CodeBlock>
</details>

### Gemma 3 1B Instruct (vLLM)

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{vllmgemma31bitPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{vllmgemma31bitTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{vllmgemma31bitConfig}</CodeBlock>
</details>

### LLaMA 3.1 8B Tool Calling (vLLM)

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{vllmtoolcallingllama318bPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{vllmtoolcallingllama318bTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{vllmtoolcallingllama318bConfig}</CodeBlock>
</details>

## Local Runners

### Ollama

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{ollamamodeluploadPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{ollamamodeluploadTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{ollamamodeluploadConfig}</CodeBlock>
</details>

## MCP

### Browser Tools

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{browsertoolsPy}</CodeBlock>
</details>

<details>
  <summary>`client.py`</summary>
    <CodeBlock className="language-text">{browsertoolsClient }</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{browsertoolsTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{browsertoolsConfig}</CodeBlock>
</details>

### Code Execution

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{codeexecutiondockerversionPy}</CodeBlock>
</details>

<details>
  <summary>`client.py`</summary>
    <CodeBlock className="language-text">{codeexecutiondockerversionClient}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{codeexecutiondockerversionTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{codeexecutiondockerversionConfig}</CodeBlock>
</details>

### Code Execution Without Docker Version

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{codeexecutionwithoutdockerversionPy}</CodeBlock>
</details>

<details>
  <summary>`client.py`</summary>
    <CodeBlock className="language-text">{codeexecutionwithoutdockerversionClient}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{codeexecutionwithoutdockerversionTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{codeexecutionwithoutdockerversionConfig}</CodeBlock>
</details>

### Google Drive

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{googledrivePy}</CodeBlock>
</details>

<details>
  <summary>`client.py`</summary>
    <CodeBlock className="language-text">{googledriveClient}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{googledriveTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{googledriveConfig}</CodeBlock>
</details>

### Math

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{mathPy}</CodeBlock>
</details>

<details>
  <summary>`client.py`</summary>
    <CodeBlock className="language-text">{mathClient}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{mathTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{mathConfig}</CodeBlock>
</details>

### Postgres

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{postgresPy}</CodeBlock>
</details>

<details>
  <summary>`client.py`</summary>
    <CodeBlock className="language-text">{postgresClient}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{postgresTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{postgresConfig}</CodeBlock>
</details>

### Web Search

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{websearchPy}</CodeBlock>
</details>

<details>
  <summary>`client.py`</summary>
    <CodeBlock className="language-text">{websearchClient}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{websearchTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{websearchConfig}</CodeBlock>
</details>

## Multimodal Models

### Qwen2.5 VL 3B Instruct

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{Qwen25VL3BInstructpythonicvllmPy}</CodeBlock>
</details>

<details>
  <summary>`1/openai_server_starter.py`</summary>
    <CodeBlock className="language-text">{Qwen25VL3BIopenaiserverstarterPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{Qwen25VL3BInstructpythonicvllmTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{Qwen25VL3BInstructpythonicvllmConfig}</CodeBlock>
</details>

## OCR

### NanoNets OCR Small

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{nanonetsocrsPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{nanonetsocrsTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{nanonetsocrsConfig}</CodeBlock>
</details>

## Text Embedder

### Jina Embeddings v3

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{jinaembeddingsv3Py}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{jinaembeddingsv3xt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{jinaembeddingsv3Config}</CodeBlock>
</details>

## Text-to-Image


### FLUX Schnell

<details>
  <summary>`1/model.py`</summary>
    <CodeBlock className="language-text">{fluxschnellPy}</CodeBlock>
</details>

<details>
  <summary>`requirements.txt`</summary>
    <CodeBlock className="language-text">{fluxschnellTxt}</CodeBlock>
</details>

<details>
  <summary>`config.yaml`</summary>
    <CodeBlock className="language-text">{fluxschnellConfig}</CodeBlock>
</details>