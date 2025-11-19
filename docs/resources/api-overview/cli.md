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


## Installation

To begin, install the latest version of the `clarifai` Python package.

```text
pip install --upgrade clarifai
```

Once installed, you can confirm the version by running the following command:

```text
clarifai --version
```

## Basics

The CLI tool supports a broad range of use cases with intuitive commands and convenient aliases.

```text
Usage: clarifai [OPTIONS] COMMAND [ARGS]...

  Clarifai CLI

Options:
  --version      Show the version and exit.
  --config TEXT
  --help         Show this message and exit.

Commands:
  computecluster (cc)             Manage Compute Clusters: create, delete,
                                  list
  config                              Manage multiple configuration profiles
                                      (contexts).

                                      Authentication Precedence:

                                        1. Environment variables (e.g.,
                                        `CLARIFAI_PAT`) are used first if set.
                                        2. The settings from the active
                                        context are used if no environment
                                        variables are provided.

  deployment (dp)                 Manage Deployments: create, delete, list
  login                           Login command to set PAT and other
                                  configurations.
  model                           Manage & Develop Models: init, download-
                                  checkpoints, signatures, upload

                                      Run & Test Models Locally: local-runner,
                                      local-grpc, local-test

                                      Model Inference: list, predict
  nodepool (np)                   Manage Nodepools: create, delete, list
  pipeline (pl)                   Manage pipelines: upload, init, list, etc
  pipeline-step (pipelinestep, ps)
                                  Manage pipeline steps: upload, test, list,
                                  etc
  run                             Execute a script with the current context's
                                  environment
  shell-completion                Shell completion script
```

The `--help` option is particularly useful to quickly understand the available functionalities and how to use them.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai COMMAND --help</CodeBlock>
</TabItem>
</Tabs>

For example:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login --help</CodeBlock>
</TabItem>
</Tabs>

Produces this output:

```text
Usage: clarifai login [OPTIONS] [API_URL]

  Login command to set PAT and other configurations.

Options:
  --user_id TEXT  User ID
  --help          Show this message and exit.
```

## Clarifai Login

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login [OPTIONS] [API_URL]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai login` command is used to authenticate and configure your connection to the Clarifai platform. This involves setting up a [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) (PAT) and other necessary configurations for making API requests.

:::note Authentication Precedence

Authentication follows a defined order of precedence. If you set values (such as `CLARIFAI_PAT`) as environment variables in your terminal, these take priority and are used first. If no relevant environment variables are found, the CLI falls back to the credentials and settings defined in the [active context](#clarifai-config). **For security best practices, we recommend using environment variables instead of hardcoding credentials directly in your code.**

Here is an example of setting PAT as an environment variable: 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

:::

### Log in 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

The `clarifai login` command will prompt you to enter your Clarifai PAT and user ID. The PAT input field is hidden for security purposes — simply paste the value and press Enter.

After providing the credentials, they will be validated automatically, and you'll be notified if any errors occur.

> **Note:** To generate or copy your PAT, go to the **Security** section of your personal settings page. Your user ID is also available under the **Account** section on the same page.

:::tip What is a Context?

A context refers to the active environment settings that determine how your commands interact with the Clarifai platform. Think of a context as a saved set of credentials (such as a PAT key or a specific user ID) you want to work with.

:::

You’ll also be prompted to enter a context name — this can be a new name, an existing one, or simply `"default"`. The credentials will be saved to the specified context, which becomes the active context used for interacting with the Clarifai platform.

<details>
 <summary>Example</summary>
    ```text
    clarifai login
    To authenticate, you'll need a Personal Access Token (PAT).
    You can create one from your account settings: https://clarifai.com/settings/security
    Enter your Personal Access Token:
    Enter your Clarifai user ID: XXXX
    Verifying token...
    [INFO] 17:29:42.188183 Validating the Context Credentials... |  thread=5816
    [INFO] 17:29:43.832686 ✅ Context is valid |  thread=5816
    Let's save these credentials to a new context.
    You can have multiple contexts to easily switch between accounts or projects.
    Enter a name for this context [default]: my_new_context
    ✅ Success! You are now logged in.
    Credentials saved to the 'my_new_context' context.
    💡 To switch contexts later, use `clarifai config use-context <name>`.
    [INFO] 17:30:29.907399 Login successful for user 'XXXX' in context 'my_new_context' |  thread=5816
```
</details>

### Log in With a User ID

You can log in using your user ID.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login --user_id your_user_id_here</CodeBlock>
</TabItem>
</Tabs>

<details>
 <summary>Example</summary>
    ```text
    clarifai login --user_id XXXX
    To authenticate, you'll need a Personal Access Token (PAT).
    You can create one from your account settings: https://clarifai.com/settings/security
    Enter your Personal Access Token:
    Verifying token...
    [INFO] 18:08:00.158062 Validating the Context Credentials... |  thread=11532
    [INFO] 18:08:06.153526 ✅ Context is valid |  thread=11532
    Let's save these credentials to a new context.
    You can have multiple contexts to easily switch between accounts or projects.
    Enter a name for this context [default]: my_new_context
    ✅ Success! You are now logged in.
    Credentials saved to the 'my_new_context' context.
    💡 To switch contexts later, use `clarifai config use-context <name>`.
    [INFO] 18:08:21.163966 Login successful for user 'XXXX' in context 'my_new_context' |  thread=11532
    ```
</details>

### Log in With a Custom API URL

You can optionally specify a custom API URL if you are connecting to a Clarifai instance other than the default. 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login your_custom_url_here</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>
    ```text
    clarifai login https://api-dev.clarifai.com/
    To authenticate, you'll need a Personal Access Token (PAT).
    You can create one from your account settings: https://clarifai.com/settings/security
    Enter your Personal Access Token: 
    Enter your Clarifai user ID: XXXX
    Verifying token...
    [INFO] 17:04:30.321616 Validating the Context Credentials... |  thread=23096
```
</details>

##  Clarifai Config

The `clarifai config` command lets you create and manage various aspects of your Clarifai configuration profiles — known as _contexts_ — which represent different interaction environments or setups, as explained earlier.

Each context can store specific authentication details (such as PATs), API URLs, and other configuration settings relevant to a particular Clarifai project or environment.

This command includes subcommands for creating, deleting, and switching between named Clarifai contexts, among other actions.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```text
Usage: clarifai config [OPTIONS] COMMAND [ARGS]...

  Manage multiple configuration profiles (contexts).

  Authentication Precedence:

    1. Environment variables (e.g., `CLARIFAI_PAT`) are used first if set.
    2. The settings from the active context are used if no environment
    variables are provided.

Options:
  --help  Show this message and exit.

Commands:
  create-context (create)         Create a new context.
  current-context (current)       Show the current context's details.
  delete-context (delete)         Delete a context.
  edit (e)                        Open the configuration file for editing.
  env (get-env)                   Print env vars for the active context.
  get-contexts (list-contexts, ls)
                                  List all available contexts.
  use-context (use)               Set the current context.
  view (show)                     Display the current configuration.
```

</TabItem>
</Tabs>


### Create Context

The `create-context` (or `create`) subcommand creates a new Clarifai context. Note that you'll be prompted to configure the context by providing the necessary details for that context — such as user ID, API URL, and PAT.

:::note

If you'd like to use the default values (such as the `base-url`), simply press Enter.

:::

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
Usage: clarifai config create-context [OPTIONS] NAME

  Create a new context.

Options:
  --user-id TEXT   User ID
  --base-url TEXT  Base URL
  --pat TEXT       Personal access token
</CodeBlock>
</TabItem>
</Tabs>

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">
Usage: clarifai config create [OPTIONS] NAME

  Create a new context.

Options:
  --user-id TEXT   User ID
  --base-url TEXT  Base URL
  --pat TEXT       Personal access token
</CodeBlock>
</TabItem>
</Tabs>

Here is how you can create a new context by providing a unique name for it:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config create-context your_context_name_here</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>
    ```text
clarifai config create-context my_new_context
user id: XXXX
base url (default: https://api.clarifai.com):
personal access token value (default: "ENVVAR" to get our of env var rather than config): XXXX
[INFO] 20:05:52.602933 Validating the Context Credentials... |  thread=21200
[INFO] 20:05:59.957903 ✅ Context is valid |  thread=21200
[INFO] 20:05:59.970741 Context 'my_new_context' created successfully |  thread=21200
```
</details>

Here is how you can create a new context with all values specified inline: 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```text
    clarifai config create-context your_context_name_here --user-id your_user_id_here --pat your_pat_here --base-url https://api.clarifai.com
   ```
</TabItem>
</Tabs>

<details>
<summary>Example</summary>
    ```text
[INFO] 21:00:58.015800 Validating the Context Credentials... |  thread=20976
[INFO] 21:00:59.414716 ✅ Context is valid |  thread=20976
[INFO] 21:00:59.424841 Context 'my_new_context' created successfully |  thread=20976
```
</details>

### Display Current Context

The `current-context` (or `current`) subcommand displays the details of the currently active Clarifai context. It helps you verify which context is in use and view its associated configuration, such as the user ID, PAT, and base URL. 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```text
Usage: clarifai config current-context [OPTIONS]

  Show the current context's details.

Options:
  -o, --output-format [name|json|yaml]
```
</TabItem>
</Tabs>

> **Note:** The `-o` flag is the short form of the `--output-format` flag. 

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```text
Usage: clarifai config current [OPTIONS]

  Show the current context's details.

Options:
  -o, --output-format [name|json|yaml]
```
</TabItem>
</Tabs>

Here is how you can show the currently active context:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config current-context</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config current-context
my_new_context
```
</details>

Here is how you can show only the name of the current context:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config current-context --output-format name</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config current-context --output-format name
my_new_context
```
</details>

Here is how you can show context details in JSON format:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config current-context -o json</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config current-context -o json
{"CLARIFAI_API_BASE": "https://api.clarifai.com", "CLARIFAI_PAT": "XXXX", "CLARIFAI_USER_ID": "XXXX"}
```
</details>

Here is how you can show context details in YAML format:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config current-context -o yaml</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config current-context -o yaml
CLARIFAI_API_BASE: https://api.clarifai.com
CLARIFAI_PAT: XXXX
CLARIFAI_USER_ID: XXXX
```
</details>

### Delete Context

The `delete-context` or (`delete`) subcommand deletes an existing Clarifai context.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```text
Usage: clarifai config delete-context [OPTIONS] NAME

  Delete a context.
```
</TabItem>
</Tabs>

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```text
Usage: clarifai config delete [OPTIONS] NAME

  Delete a context.
```
</TabItem>
</Tabs>

Here is how you can delete a context by specifying its name:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config delete-context your_context_name_here</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config delete-context my_new_context
my_new_context deleted
```
</details>

### Edit Configuration File

The `edit` (alias `e`) subcommand opens the CLI configuration file for the current context in your default text editor. This allows you to manually add, modify, or remove contexts and their settings — such as PATs, application IDs, or base URLs.

This is a useful way to set up or manage multiple contexts directly.

> **Note:** Remember to save the file after making changes.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```text
Usage: clarifai config edit [OPTIONS]

  Open the configuration file for editing.
```
</TabItem>
</Tabs>

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```text
Usage: clarifai config e [OPTIONS]

  Open the configuration file for editing.
```
</TabItem>
</Tabs>

Here is how you can open the configuration file of your current context for editing:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config edit</CodeBlock>
</TabItem>
</Tabs>


### Display Environment Variables

The `env` (or `get-env`) subcommand prints the environment variables that correspond to your active Clarifai context. It’s useful if you want to export these variables for use in other tools, scripts, or terminals.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
   
```text
Usage: clarifai config env [OPTIONS]

  Print env vars for the active context.
```

</TabItem>
</Tabs>

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">

```text
Usage: clarifai config get-env [OPTIONS]

  Print env vars for the active context.
```

</CodeBlock>
</TabItem>
</Tabs>

Here is how you can display the environment variables of your current context:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config env</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config env
export CLARIFAI_API_BASE="https://api.clarifai.com"
export CLARIFAI_PAT="XXXX"
export CLARIFAI_USER_ID="XXXX"
```
</details>


> **Note:** For Unix-like systems, running `eval "$(clarifai config env)"` configures your current shell session by loading Clarifai-related environment variables directly from your active CLI configuration. This automatically sets up authentication for subsequent Clarifai commands or scripts run within that same session, eliminating the need to manually enter credentials. It's particularly useful for scripting where environment variables are preferred for authentication and for quickly setting up a terminal session with the correct Clarifai credentials. For Windows, you'd typically need to run `clarifai config env` first, copy the output, and then manually run the `set` commands it generates.


### Get All Contexts

The `get-contexts` (or `list-contexts`, or `ls`) subcommand lists all Clarifai contexts defined in your configuration file, displayed in a table format. The currently active context is marked with an asterisk (`*`).

This provides an overview of the different Clarifai setups you can switch between.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">   

```text
Usage: clarifai config get-contexts [OPTIONS]

  List all available contexts.

Options:
  -o, --output-format [wide|name|json|yaml]
```

</TabItem>
</Tabs>

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    
```text
Usage: clarifai config list-contexts [OPTIONS]

  List all available contexts.

Options:
  -o, --output-format [wide|name|json|yaml]
```

</TabItem>
</Tabs>

> **Note:** The `-o` flag is the short form of the `--output-format` flag. 

&nbsp;

Here’s how you can list all contexts in a table. By default, the `wide` output format is used, which displays a detailed table with information for each context.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config get-contexts</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config get-contexts
    NAME                    USER_ID    API_BASE                  PAT
    default                 XXXX      https://api.clarifai.com  c1eaa****
*   my_new_context          XXXX      https://api.clarifai.com  c1eaa****
    test_context            XXXX      https://api.clarifai.com  c1eaa****
```
</details>

Here is how you can list only the names of the contexts:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config get-contexts -o name</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config get-contexts -o name
default
my_new_context
test_context
```
</details>

Here is how you can output context data as JSON:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config get-contexts --output-format json</CodeBlock>
</TabItem>
</Tabs>

Here is how you can output context data as YAML:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config get-contexts -o yaml</CodeBlock>
</TabItem>
</Tabs>


### Switch Contexts

The `use-context` (or `use`) subcommand sets a different Clarifai context as the active one. This is useful when you need to switch between environments or credentials without manually updating your configuration each time.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    
```text
Usage: clarifai config use-context [OPTIONS] NAME

  Set the current context.
```
</TabItem>
</Tabs>

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    
```text
Usage: clarifai config use [OPTIONS] NAME

  Set the current context.
```
</TabItem>
</Tabs>

Here’s how you can switch to a different context by specifying its name:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config use-context your_context_name_here</CodeBlock>
</TabItem>
</Tabs>

The Clarifai CLI will now use the new specified context for all subsequent operations.

<details>
<summary>Example</summary>

```text
clarifai config use-context test_context
Set test_context as the current context
```
</details>

### Display Current Configuration

The `view` (or `show`) subcommand displays the full configuration file, including all defined contexts and their associated details. The currently active context is also indicated in the output.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">   

```text
Usage: clarifai config view [OPTIONS]

  Display the current configuration.

Options:
  -o, --output-format [json|yaml]
```

</TabItem>
</Tabs>

Or:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    
```text
Usage: clarifai config show [OPTIONS]

  Display the current configuration.

Options:
  -o, --output-format [json|yaml]
```

</TabItem>
</Tabs>

> **Note:** The `-o` flag is the short form of the `--output-format` flag. 

&nbsp;

Here’s how to display the current configuration. By default, the output is shown in YAML format.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config show</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config show
contexts:
  default:
    CLARIFAI_USER_ID: alfrick
  my_new_context:
    CLARIFAI_API_BASE: https://api.clarifai.com
    CLARIFAI_PAT: XXXX
    CLARIFAI_USER_ID: XXXX
  test_context:
    CLARIFAI_API_BASE: https://api.clarifai.com
    CLARIFAI_PAT: XXXX
    CLARIFAI_USER_ID: XXXX
current-context: test_context
```
</details>

Here is how you can display the current configuration in JSON format:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai config show --output-format json</CodeBlock>
</TabItem>
</Tabs>

<details>
<summary>Example</summary>

```text
clarifai config show --output-format json
{
  "current-context": "test_context",
  "contexts": {
    "default": {
      "CLARIFAI_USER_ID": "alfrick"
    },
    "my_new_context": {
      "CLARIFAI_API_BASE": "https://api.clarifai.com",
      "CLARIFAI_PAT": "XXXX",
      "CLARIFAI_USER_ID": "XXXX"
    },
    "test_context": {
      "CLARIFAI_API_BASE": "https://api.clarifai.com",
      "CLARIFAI_PAT": "XXXX",
      "CLARIFAI_USER_ID": "XXXX"
    }
  }
}
```
</details>


## Clarifai Model Init

The `clarifai model init` command initializes a new Clarifai model directory structure. This command helps you set up the necessary files and folders to begin building a [custom model](https://docs.clarifai.com/compute/models/upload/) suitable for the Clarifai platform.

<Tabs groupId="code">
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


### Basic Initialization

If no option value is provided, the command defaults to initializing the standard `ModelClass`.

Here is how to initialize a model in the current directory with the default model class:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init</CodeBlock>
</TabItem>
</Tabs>

Here is how to initialize a model in a new directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init my_custom_model</CodeBlock>
</TabItem>
</Tabs>

This will create a directory `my_custom_model` with the standard model structure inside it.

:::note

The `--model-type-id` option specifies the type of model class to initialize. This ensures that the generated files are tailored to the chosen model type. 

:::

### Initialize `mcp` Model Type

Providing the `mcp` option initializes the model structure using `MCPModelClass`, which is used for models that will run on Clarifai using the [Model Context Protocol (MCP)](https://docs.clarifai.com/compute/agents/mcp).

Here is how to initialize an MCP model in the current directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --model-type-id mcp</CodeBlock>
</TabItem>
</Tabs>

Here is how to initialize an MCP model in a specific path:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init /home/username/Projects/MyMCPModel --model-type-id mcp</CodeBlock>
</TabItem>
</Tabs>

### Initialize `openai` Model Type

Providing the `openai` option initializes the model structure using `OpenAIModelClass`, intended for models that integrate with [OpenAI's APIs](https://docs.clarifai.com/compute/inference/open-ai).

Here is how to initialize an OpenAI-compatible model in the current directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --model-type-id openai</CodeBlock>
</TabItem>
</Tabs>

Here is how to initialize an OpenAI-compatible model in a specific path:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init /home/username/Projects/MyOpenAIModel --model-type-id openai</CodeBlock>
</TabItem>
</Tabs>

### Initialize With GitHub Template

You can initialize your model using a custom template from a GitHub repository using the `--github-url` option and providing the full repository URL.

Here is how to clone a public GitHub repository in the current directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai model init --github-url https://github.com/Clarifai/runners-examples/tree/main/local-runners/ollama-model-upload
    ```
</TabItem>
</Tabs>

Here is how to clone a specific branch of a GitHub repository by including the branch reference directly in the URL:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai model init --github-url https://github.com/Clarifai/runners-examples/tree/vllm-tool-calling
    ```
</TabItem>
</Tabs>

Here is how to clone a private GitHub repository using a GitHub Personal Access Token:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai model init --github-url https://github.com/your-username/my-private-model --github-pat YOUR_GITHUB_PAT_TOKEN
    ```
</TabItem>
</Tabs>

> **Note:** Replace `https://github.com/your-username/my-private-model` and `YOUR_GITHUB_PAT_TOKEN` with your actual values.

### Initialize With Toolkit

You can initialize a new Clarifai model directory structure from a toolkit using the `--toolkit` option. Toolkits allow you to run large language models (LLMs) and other generative AI models locally on your own machine.

For example, here is how you can initialize a default model using the [Ollama toolkit](https://ollama.com/search) in the current directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --toolkit ollama</CodeBlock>
</TabItem>
</Tabs>

You can learn more about using toolkits [here](https://docs.clarifai.com/compute/toolkits). 
