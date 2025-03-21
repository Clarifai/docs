---
description: Learn how to use the Clarifai Command Line Interface (CLI)
sidebar_position: 3
---

# Clarifai CLI

**Learn how to use the Clarifai Command Line Interface (CLI)**
<hr />

Clarifai’s Command Line Interface (CLI) is a powerful, user-friendly tool designed to simplify and enhance your experience with our AI platform. By offering a streamlined way to execute tasks directly from the terminal, the CLI eliminates the need for extensive coding or constant reliance on the web interface. 

[The Clarifai CLI](https://github.com/Clarifai/examples/tree/main/CLI) supports a broad range of functionalities, from making model predictions to leveraging advanced Compute Orchestration capabilities, making it an essential tool for for a wide range of use cases.

Bundled within our Python SDK package, the CLI empowers both technical and non-technical users to efficiently manage tasks and boost productivity on the Clarifai platform. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Login from "!!raw-loader!../../../code_snippets/python-sdk/cli/login.yaml";
import PredictOptions from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_options.txt";
import PredictByIds from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_ids.sh";
import PredictByIdsOutput from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_ids_output.txt";
import PredictByFilePath from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_file_path.sh";
import PredictByURL from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_url.sh";
import PredictByModelURL from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_model_url.sh";
import PredictByInputID from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_input_id.sh";
import PredictByYAML from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_yaml.yaml";
import PredictByYAMLBash from "!!raw-loader!../../../code_snippets/python-sdk/cli/predict_by_yaml_bash.sh";
import InferenceParameters from "!!raw-loader!../../../code_snippets/python-sdk/cli/inference_parameters.sh";
import OutputConfig from "!!raw-loader!../../../code_snippets/python-sdk/cli/output_config.sh";

## Installation

To begin, install the latest version of the `clarifai` Python package.

```text
pip install --upgrade clarifai
```

## Basics

The CLI tool is designed to help users manage various aspects of their compute resources, deployments, and models through a series of intuitive commands and aliases. 

```text
Usage: clarifai [OPTIONS] COMMAND [ARGS]...

  Clarifai CLI

Options:
  --help  Show this message and exit.

Commands:
  cc              Alias for 'computecluster'
  computecluster  Manage Compute Clusters: create, delete, list
  deployment      Manage Deployments: create, delete, list
  dpl             Alias for 'deployment'
  login           Login command to set PAT and other configurations.
  model           Manage models: upload, test locally, run_locally, predict
  nodepool        Manage Nodepools: create, delete, list
  np              Alias for 'nodepool'

```

The `--help` option is particularly useful to quickly understand the available functionalities and how to use them.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">
    clarifai COMMAND --help
</CodeBlock>
</TabItem>
</Tabs>

For example:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-yaml">
    clarifai model --help
</CodeBlock>
</TabItem>
</Tabs>

Produces this output:

```text
Usage: clarifai model [OPTIONS] COMMAND [ARGS]...

  Manage models: upload, test locally, run_locally, predict

Options:
  --help  Show this message and exit.

Commands:
  predict       Predict using the given model
  run-locally   Run the model locally and start a gRPC server to serve...
  test-locally  Test model locally.
  upload        Upload a model to Clarifai.

```

:::tip

You can learn how to use the `run-locally`, `test-locally`, and `upload` commands [here](https://docs.clarifai.com/sdk/compute-orchestration/model-upload#step-4-test-the-model-locally). 

:::

## Login 

To use the CLI tool to interact with the Clarifai platform, you must first log in using a [Personal Access Token](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) (PAT). This requires creating a YAML login configuration file to securely store your credentials.

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{Login}</CodeBlock>
</TabItem>
</Tabs>

Once the configuration file is set up, you can authenticate your CLI session with Clarifai using the stored credentials. This ensures seamless access to the CLI's features and functionalities.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-text">
    clarifai login --config `<add-config-filepath-here>`
</CodeBlock>
</TabItem>
</Tabs>

## Compute Orchestration

The Clarifai CLI simplifies Compute Orchestration tasks. With the CLI, you can easily manage the infrastructure required for deploying and scaling machine learning models, even without extensive technical expertise. 

You can learn how to use the CLI for Compute Orchestration [here](https://docs.clarifai.com/sdk/compute-orchestration). 

## Model Operations

You can perform model predictions using the Clarifai CLI in the following ways:  

- By specifying `user_id`, `app_id`, and `model_id`
- By providing the model URL
- By using a YAML configuration file


<details>
  <summary>CLI Predict Options</summary>
    <CodeBlock className="language-text">{PredictOptions}</CodeBlock>
</details>

### Predict by IDs

You can use the `--bytes` argument along with specifying `user_id`, `app_id`, and `model_id`.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{PredictByIds}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{PredictByIdsOutput}</CodeBlock>
</details>

> You can also use the `--file_path` argument, which specifies the local path to the file that contains the instructions for the model to generate predictions.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{PredictByFilePath}</CodeBlock>
</TabItem>
</Tabs>

> You can also use the `--url` argument, which specifies the URL of the file that contains the instructions for the model to generate predictions.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{PredictByURL}</CodeBlock>
</TabItem>
</Tabs>

<!--
> You can also use the `--input_id` argument, which specifies an existing input ID in the app for the model to predict.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{PredictByInputID}</CodeBlock>
</TabItem>
</Tabs>

-->

### Predict by Model URL

You can make predictions by using the `--model_url` argument, which specifies the URL of the model to be used for generating predictions.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{PredictByModelURL}</CodeBlock>
</TabItem>
</Tabs>

### Predict by a YAML file

You can provide the instructions for generating predictions in a YAML configuration file. 

Here is an example:

<Tabs>
<TabItem value="yaml" label="YAML">
    <CodeBlock className="language-yaml">{PredictByYAML}</CodeBlock>
</TabItem>
</Tabs>

Then, you need to specify the path to that file. 

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{PredictByYAMLBash}</CodeBlock>
</TabItem>
</Tabs>

### Specify Prediction Parameters

You can specify prediction parameters to influence the output of some models. These settings allow you to control the model's behavior during prediction, influencing attributes such as creativity, coherence, and diversity in the results.

You can get a description of the prediction parameters [here](https://docs.clarifai.com/sdk/Inference-from-AI-Models/Advance-Inference-Options/#prediction-paramaters). 

Here is how you can specify various inference parameters :

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{InferenceParameters}</CodeBlock>
</TabItem>
</Tabs>

Here is how you can specify output configuration parameters:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{OutputConfig}</CodeBlock>
</TabItem>
</Tabs>
