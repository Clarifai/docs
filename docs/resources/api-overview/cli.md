---
description: Learn how to use the Clarifai Command Line Interface (CLI)
sidebar_position: 3
---

# Clarifai CLI

**Learn how to use the Clarifai Command Line Interface (CLI)**
<hr />

Clarifai’s Command Line Interface (CLI) is a powerful, user-friendly tool designed to simplify and enhance your experience with our AI platform. 

By offering a streamlined way to execute tasks directly from the terminal, the CLI eliminates the need for extensive coding or constant reliance on the web interface. 

Bundled within our [Python SDK package](https://docs.clarifai.com/resources/api-overview/python-sdk), the CLI empowers both technical and non-technical users to efficiently execute a wide range of tasks and boost productivity on the Clarifai platform. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import ConfigFile from "!!raw-loader!../../../code_snippets/python-sdk/cli/config-file.txt"
import GetContexts from "!!raw-loader!../../../code_snippets/python-sdk/cli/get-contexts.txt"

## Installation

To begin, install the latest version of the `clarifai` Python package.

```text
pip install --upgrade clarifai
```

### Set a PAT Key

You need to set the `CLARIFAI_PAT` (Personal Access Token) as an environment variable before using the CLI tool. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

This token is essential for authenticating your connection to the Clarifai platform. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

:::note tip

On Windows, the Clarifai Python SDK expects a `HOME` environment variable, which isn’t set by default. To ensure compatibility with file paths used by the SDK, set `HOME` to the value of your `USERPROFILE`. You can set it in your Command Prompt this way: `set HOME=%USERPROFILE%`.

:::


### Basics

The CLI tool supports a broad range of use cases with intuitive commands and convenient aliases.

```text
Usage: clarifai [OPTIONS] COMMAND [ARGS]...

  Clarifai CLI

Options:
  --config TEXT
  --help         Show this message and exit.

Commands:
  computecluster (cc)  Manage Compute Clusters: create, delete, list
  config (cfg)         Manage CLI configuration
  context              Manage contexts
  deployment (dp)      Manage Deployments: create, delete, list
  login                Login command to set PAT and other configurations.
  model                Manage models: upload, test, local dev, predict, etc
  nodepool (np)        Manage Nodepools: create, delete, list
  run                  Execute a script with the current context's environment
  shell-completion     Shell completion script
```

The `--help` option is particularly useful to quickly understand the available functionalities and how to use them.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai COMMAND --help
</CodeBlock>
</TabItem>
</Tabs>

For example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai config --help
</CodeBlock>
</TabItem>
</Tabs>

Produces this output:

```text
Usage: clarifai config [OPTIONS] COMMAND [ARGS]...

  Manage CLI configuration

Options:
  --help  Show this message and exit.

Commands:
  current-context (current)  Get the current context
  dump (cat)                 Dump the configuration to stdout
  edit (e)                   Edit the configuration file
  env (cat)                  Print env vars. Use: eval "$(clarifai config env)"
  get-contexts (list, ls)    Get all contexts
  use-context (use)          Set the current context
```

:::info Context

A context refers to the active environment settings that determine how your commands interact with the Clarifai platform. Think of a context as a saved set of credentials (such as a PAT key or a specific application ID) you want to work with.


:::

## Clarifai Context

The `clarifai context` command allows you to manage different Clarifai configurations or environments, referred to as "contexts."

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai context [OPTIONS] COMMAND [ARGS]...
</CodeBlock>
</TabItem>
</Tabs>

This command provides subcommands to create, delete, and switch between different named Clarifai contexts. Each context can encapsulate specific authentication details (like PATs), API URLs, or other configurations relevant to a particular Clarifai project or user.

### Create Context

The `create` subcommand creates a new Clarifai context.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai context create CONTEXT_NAME_HERE
</CodeBlock>
</TabItem>
</Tabs>

Here is an example of creating a context called `my_new_context`. Note that you'll be prompted to configure the context by providing the necessary details for that context — user ID, API URL, and PAT.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    C:\#############>clarifai context create my_new_context
    user id: alfrick
    base url (default: https://api.clarifai.com):
    personal access token value (default: "ENVVAR" to get out of env var rather than config): xxxxxxxxxxxx
</CodeBlock>
</TabItem>
</Tabs>

### Delete Context

The `delete` (alias `rm`) subcommand deletes an existing Clarifai context.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai context delete CONTEXT_NAME_HERE
    // or
    clarifai context rm CONTEXT_NAME_HERE
</CodeBlock>
</TabItem>
</Tabs>

Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai context delete old_project_context
</CodeBlock>
</TabItem>
</Tabs>


### Switch Contexts

The `use` subcommand sets a specified context as the currently active context. All subsequent Clarifai CLI commands will operate within the configurations defined by this context.

This is useful when you need to switch between different Clarifai applications, user accounts, or API settings without repeatedly re-authenticating or reconfiguring.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai context use CONTEXT_NAME_HERE
</CodeBlock>
</TabItem>
</Tabs>

Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai context use my_other_project
</CodeBlock>
</TabItem>
</Tabs>


## Clarifai Login

The `clarifai login` command is used to authenticate and configure your access to the Clarifai platform. This involves setting up a Personal Access Token (PAT) and other necessary configurations for making API requests.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai login [OPTIONS] [API_URL]
</CodeBlock>
</TabItem>
</Tabs>

Here is an example of the standard way to use the command. You'll be prompted to enter a context name (a new, existing, or the default name), user ID, and PAT interactively.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    C:#############>clarifai login
    context name (default: "default"): my_new_context
    user id: alfrick
    personal access token value (default: "ENVVAR" to get out of env var rather than config): XXXXXXXXXXXX
</CodeBlock>
</TabItem>
</Tabs>

You can also log in with a user ID:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    C:#############>clarifai login --user_id alfrick
    context name (default: "default"): my_new_context
    personal access token value (default: "ENVVAR" to get out of env var rather than config): XXXXXXXXXX
</CodeBlock>
</TabItem>
</Tabs>

 You can optionally specify a custom API URL if you are connecting to a Clarifai instance other than the default. Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    C:#############>clarifai login https://api-dev.clarifai.com/
    context name (default: "default"): my_new_context
    user id: alfrick
    personal access token value (default: "ENVVAR" to get out of env var rather than config): XXXXXXXXXXXX
</CodeBlock>
</TabItem>
</Tabs>

##  Clarifai Config

The `clarifai config` commands help you manage your CLI configuration, including the different contexts used to interact with the Clarifai API.

This command provides subcommands to manage various aspects of your CLI configuration settings. 

### Display Current Context

The `current-context` (alias `current`) subcommand displays the currently active CLI context. This is useful when you have multiple contexts with different configurations and you want to ensure you're operating under the correct one. 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai config current-context
    // or
    clarifai config current
</CodeBlock>
</TabItem>
</Tabs>

Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    C:#############>clarifai config current-context
    my_new_context
</CodeBlock>
</TabItem>
</Tabs>

### Display Configuration File

The `dump` (alias `cat`) subcommand displays the entire CLI configuration file (in YAML format) to your console. This is helpful for inspecting all your defined contexts and their associated details.
 
<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai config dump
    // or
    clarifai config cat
</CodeBlock>
</TabItem>
</Tabs>

Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{ConfigFile}
</CodeBlock>
</TabItem>
</Tabs>

### Edit Configuration File

The `edit` (alias `e`) subcommand opens the CLI configuration file in your default text editor, allowing you to manually add, modify, or delete contexts. This is often how you'd initially set up new contexts with different settings, such as PAT keys or application IDs.

Remember to save the file after making changes.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai config edit
    // or
    clarifai config e
</CodeBlock>
</TabItem>
</Tabs>

### Output Environment Variables

The `env` (alias `cat`) subcommand outputs your currently active context in a format that can be directly sourced into your shell's environment.

It generates a string of shell commands that can be useful if you want to use these values in a script or another process that relies on environment variables rather than the Clarifai config file.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai config env
    // or
    clarifai config cat
</CodeBlock>
</TabItem>
</Tabs>

Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    C:#############>clarifai config env --help
    Usage: clarifai config env [OPTIONS]

        Print env vars. Use: eval "$(clarifai config env)"

    Options:
      --help  Show this message and exit.

    C:#############>clarifai config env
    export CLARIFAI_API_BASE="https://api.clarifai.com/"
    export CLARIFAI_PAT="XXXXXXXXXXXX"
    export CLARIFAI_USER_ID="alfrick"
</CodeBlock>
</TabItem>
</Tabs>

> **Note:** For Unix-like systems, running `eval "$(clarifai config env)"` configures your current shell session by loading Clarifai-related environment variables directly from your active CLI configuration. This automatically sets up authentication for subsequent Clarifai commands or scripts run within that same session, eliminating the need to manually enter credentials. It's particularly useful for scripting where environment variables are preferred for authentication and for quickly setting up a terminal session with the correct Clarifai credentials. For Windows, you'd typically need to run `clarifai config env` first, copy the output, and then manually run the `set` commands it generates.


### List All Contexts

The `get-contexts` (alias `list` or `ls`) subcommand lists all Clarifai contexts defined in your configuration file, displayed in a table format. This provides an overview of the different Clarifai setups you can switch between.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai config get-contexts
    // or
    clarifai config list
    // or
    clarifai config ls
</CodeBlock>
</TabItem>
</Tabs>

Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{GetContexts}</CodeBlock>
</TabItem>
</Tabs>

### Switch Contexts

The `use-context` (alias `use`) subcommand switches the active Clarifai context to a different one that you have defined.

This is crucial when you want to interact with a different Clarifai application or use a different API key without manually changing it every time.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    clarifai config use-context
    // or
    clarifai config use
</CodeBlock>
</TabItem>
</Tabs>

Here is an example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
    C:#############>clarifai config use-context my_other_project
    Set my_other_project as the current context
</CodeBlock>
</TabItem>
</Tabs>

The Clarifai CLI will now use the `my_other_project` context for all subsequent commands (such as uploading models and generating predictions) until you switch it again.


## Clarifai Model Init

The `clarifai model init` command initializes a new Clarifai model directory structure. This command helps you set up the necessary files and folders to begin building a [custom model](https://docs.clarifai.com/compute/models/upload/) suitable for the Clarifai platform.

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model init [OPTIONS] [MODEL_PATH] </CodeBlock>
</TabItem>
</Tabs>

The command creates a standardized directory structure in the specified `MODEL_PATH`. If `MODEL_PATH` is not provided, the command will use the current directory by default.

The generated structure includes:

```
├── 1/
│   └── model.py
├── requirements.txt
└── config.yaml
```

* **`1/`** — A directory that holds the model file (_Note that the folder is named as 1_)
    * **`model.py`** — This file will contain the Python code for your Clarifai model. You will define your model's logic and how it interacts with the Clarifai platform within this file.
* **`requirements.txt`** — This file is used to list any Python dependencies your model requires. When your model is deployed, Clarifai will install these dependencies.
* **`config.yaml`** — This YAML file is used for model configuration, allowing you to define settings and parameters for your model.

### Options

The `--model-type-id` option specifies the type of model class to initialize. This ensures that the generated files are tailored to the chosen model type. 

The accepted values for this option are:

* `mcp` — Initializes the model structure using `MCPModelClass`, which is used for models that will run on Clarifai using the [Model Context Protocol (MCP)](https://docs.clarifai.com/compute/agents/mcp).
* `openai` — Initializes the model structure using `OpenAIModelClass`, intended for models that integrate with OpenAI's APIs.
* If no value is provided, the command defaults to initializing the standard `ModelClass`.


Here is how to initialize a model in the current directory with the default model class:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model init </CodeBlock>
</TabItem>
</Tabs>

Here is how to initialize a model named `my_custom_model` in a new directory:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model init my_custom_model </CodeBlock>
</TabItem>
</Tabs>

This will create a directory `my_custom_model` with the standard model structure inside it.

Here is how to initialize an MCP model in the current directory:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model init --model-type-id mcp </CodeBlock>
</TabItem>
</Tabs>

Here is how to initialize an OpenAI model in a specific path:

<Tabs>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash"> clarifai model init C:\Projects\MyOpenAIModel --model-type-id openai </CodeBlock>
</TabItem>
</Tabs>
