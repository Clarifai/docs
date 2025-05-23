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


Once the configuration file is set up, you can authenticate your CLI session with Clarifai using the stored credentials. This ensures seamless access to the CLI's features and functionalities.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-text">
    clarifai login --config `<add-config-filepath-here>`
</CodeBlock>
</TabItem>
</Tabs>

