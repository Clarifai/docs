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

To begin, install the latest version of the `clarifai` Python SDK package.

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
  --version       Show the version and exit.
  --config TEXT   Path to config file
  --context TEXT  Context to use for this command
  --help          Show this message and exit.

Commands:
  app (a)                         Manage Apps: create, list, delete
  artifact (af)                   Manage Artifacts: create, upload, download,
                                  list, get, delete
  computecluster (cc)             Manage Compute Clusters: create, delete,
                                  list
  config                          Manage multiple configuration profiles
                                  (contexts)
  deployment (dp)                 Manage Deployments: create, delete, list,
                                  get (status), logs
  list-instances (li)             List available compute instances
  login                           Login command to set PAT and other
                                  configurations
  logout                          Log out by clearing saved credentials
  model                           Manage & Develop Models: init, upload,
                                  deploy, serve, predict, status, logs,
                                  undeploy, list
  nodepool (np)                   Manage Nodepools: create, delete, list
  pipeline (pl)                   Manage pipelines: upload, init, list, etc
  pipeline-step (pipelinestep, ps)
                                  Manage pipeline steps: upload, test, list,
                                  etc
  pipelinerun (pr)                Manage Pipeline Version Runs: pause, cancel,
                                  resume, monitor
  pipelinetemplate (pt)           Manage pipeline templates: list, discover,
                                  etc
  run                             Execute a script with the current context's
                                  environment
  shell-completion                Shell completion script
  whoami                          Display current user and context info
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
  --pat TEXT      Personal Access Token
  --user-id TEXT  User ID (or org ID)
  --name TEXT     Name for the context
  --help          Show this message and exit.
```

## Clarifai Login

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login [OPTIONS] [API_URL]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai login` command is used to authenticate and configure your connection to the Clarifai platform. This involves setting up a [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) (PAT) and user ID for making API requests.

> **Note:** To find your Clarifai user ID, open the collapsible left sidebar and click **Settings**, then select **Account** from the dropdown — your user ID is listed there.
> From the same **Settings** menu, select **Secrets** to generate a new PAT or copy an existing one.
 

:::note Authentication Precedence

Authentication follows a defined order of precedence. If you set values (such as `CLARIFAI_PAT`) as environment variables in your terminal, these take priority and are used first. If no relevant environment variables are found, the CLI falls back to the credentials and settings defined in the [active context](#clarifai-config). **For security best practices, we recommend using environment variables instead of hardcoding credentials directly in your code.**

Here is an example of setting PAT as an environment variable: 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>

:::

### Log in 

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login</CodeBlock>
</TabItem>
</Tabs>

The `clarifai login` command will prompt you to enter your Clarifai user ID and PAT. The PAT input field is masked for security purposes — simply paste the value and press Enter. 

> **Note:** The masked field supports **Backspace** (delete one character), **Ctrl+U** (clear the entire line), **Ctrl+W** (delete the last word), and **Ctrl+C** (cancel input).

After you provide your credentials, they’re validated automatically, and you’ll be notified immediately if there are any errors. A default context (`default`) is also created for you automatically.

<details>

 <summary>Example</summary>

```text
clarifai login
Enter your Clarifai user ID: alfrick

> To authenticate, you'll need a Personal Access Token (PAT).
> Create one at: https://clarifai.com/alfrick/settings/secrets
> Tip: Set CLARIFAI_PAT environment variable to skip this prompt.

Enter your Personal Access Token (PAT): ********************************

> Verifying token...
✅ Success! You're logged in as alfrick
💡 Tip: Use `clarifai config` to manage multiple accounts or environments
[INFO] 10:39:07.660424 Login successful for user 'alfrick' in context 'default' |  thread=8480497856 
```
</details>

:::tip What is a Context?

A context refers to the active environment settings that determine how your commands interact with the Clarifai platform. Think of a context as a saved set of credentials (such as a PAT key or a specific user ID) you want to work with.

:::

### Non-Interactive Login

You can log in non-interactively by providing your PAT directly. This is useful for CI/CD pipelines and scripting.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login --pat YOUR_PAT_HERE</CodeBlock>
</TabItem>
</Tabs>

The CLI will validate your PAT, auto-detect your user ID, and list your organizations for selection. If you want to skip org selection, provide a user ID:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai login --pat YOUR_PAT_HERE --user-id your_user_id</CodeBlock>
</TabItem>
</Tabs>

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
  clarifai login --user_id alfrick

> To authenticate, you'll need a Personal Access Token (PAT).
> Create one at: https://clarifai.com/alfrick/settings/secrets
> Tip: Set CLARIFAI_PAT environment variable to skip this prompt.

Enter your Personal Access Token (PAT): ********************************

> Verifying token...
✅ Success! You're logged in as alfrick
💡 Tip: Use `clarifai config` to manage multiple accounts or environments
[INFO] 11:59:31.377843 Login successful for user 'alfrick' in context 'default' |  thread=8480497856 
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
Enter your Clarifai user ID: alfrick

> To authenticate, you'll need a Personal Access Token (PAT).
> Create one at: https://clarifai.com/alfrick/settings/secrets
> Tip: Set CLARIFAI_PAT environment variable to skip this prompt.

Enter your Personal Access Token (PAT): ********************************

> Verifying token...
```
</details>

## Clarifai Logout

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai logout [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai logout` command is used to securely remove saved PATs and credentials from your local environment. By default, the command launches an interactive menu. You can also use flags for non-interactive or scripted workflows.

This is useful when rotating credentials, switching accounts, or cleaning up unused contexts.

### Interactive Logout

When run without any flags, the command shows the currently active context and launches an interactive, numbered menu for you to select an action.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai logout</CodeBlock>
</TabItem>
</Tabs>

These are the menu menu options:

**1. Switch to another context** — Lists all other available contexts along with their associated user IDs and allows you to select one. No credentials are cleared.
If only a single context exists, the CLI informs you that there are no other contexts to switch to.

**2. Log out of current context (clear credentials)** — Clears the PAT from the active context’s configuration. The context itself (including `user_id` and `api_base`) is preserved, allowing you to re-authenticate later using `clarifai login` without re-entering all details.

**3. Log out and delete current context**  — Removes the entire context entry, including credentials and metadata.
If the current context is the only one available, the CLI clears the PAT but retains the context (at least one context must always exist).
If other contexts are available, the CLI automatically switches the active context to the next available one.

**4. Log out of all contexts** — Clears the PAT from every configured context in the local config file.
This option is useful on shared machines or in security-sensitive environments.

**5. Cancel** — Exits the menu without making any changes.

<details>

<summary>Example</summary>

```text
clarifai logout

Current context is configured for user 'alfrick' (context: 'default', api: https://api.clarifai.com)

  1. Switch to another context
  2. Log out of current context (clear credentials)
  3. Log out and delete current context
  4. Log out of all contexts
  5. Cancel

Enter choice: 
```
</details>

### Clear Current Session

You can log out of the context you are currently using without deleting the context settings.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai logout --current</CodeBlock>
</TabItem>
</Tabs>

<details>

<summary>Example</summary>

```text
clarifai logout --current
Logged out of context 'default'.
```
</details>

To also remove the context entry itself, use the `--delete` flag.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai logout --current --delete</CodeBlock>
</TabItem>
</Tabs>

> **Caution:** Use the `--delete` flag with caution. Clearing a PAT only requires you to log in again, but deleting a context removes the named reference entirely, requiring you to recreate it manually if needed later.

### Targeted Context Logout

You can log out of a specific named context without deleting the context settings.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai logout --context context-name</CodeBlock>
</TabItem>
</Tabs>

<details>

<summary>Example</summary>

```text
clarifai logout --context default     
Logged out of context 'default'.
```
</details>

To also remove the context entry itself, use the `--delete` flag.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai logout --context context-name --delete</CodeBlock>
</TabItem>
</Tabs>


### Total Reset

You can clear all saved credentials across every configured context at once. This is useful for security auditing or starting fresh.


<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai logout --all</CodeBlock>
</TabItem>
</Tabs>



:::note Environment Variable Warning

After any logout action, if the `CLARIFAI_PAT` environment variable is still set, the CLI displays a warning:

```
Warning: CLARIFAI_PAT environment variable is still set. Run `unset CLARIFAI_PAT` (Linux/macOS) or `$env:CLARIFAI_PAT = ''` (PowerShell) to fully log out.
```

This warning is important because environment variables take precedence over values stored in the config file. As a result, clearing credentials from the config alone does not fully log you out if `CLARIFAI_PAT` is still defined.

:::




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

The context stores the following variables:

| Variable | Description |
|----------|-------------|
| `CLARIFAI_API_BASE` | Base API URL (default: `https://api.clarifai.com`) |
| `CLARIFAI_PAT` | Personal Access Token for authentication |
| `CLARIFAI_USER_ID` | Your Clarifai user ID |
| `CLARIFAI_HF_TOKEN` | Hugging Face access token for downloading gated or private model checkpoints |

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
export CLARIFAI_HF_TOKEN="XXXX"
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


## Context Override (`--context`)

Any command can override the active context for a single invocation using the global `--context` flag. This lets you target different environments or accounts without switching your default context.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai --context staging model list</CodeBlock>
</TabItem>
</Tabs>

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai --context prod-openai model predict openai/chat-completion/models/GPT-4 "Hello"</CodeBlock>
</TabItem>
</Tabs>

This is useful when you need to work with multiple accounts or environments in a single terminal session.


## Clarifai Whoami

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai whoami [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai whoami` command displays information about the currently authenticated user and active context. It reads from the local config file without making an API call by default.

### Basic Usage

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai whoami</CodeBlock>
</TabItem>
</Tabs>

### Include Organizations

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai whoami --orgs</CodeBlock>
</TabItem>
</Tabs>

### Full Profile

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai whoami --all</CodeBlock>
</TabItem>
</Tabs>

### JSON Output (for Scripting)

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai whoami -o json</CodeBlock>
</TabItem>
</Tabs>



## Clarifai App

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai app [COMMAND] [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai app` command provides CRUD operations for Clarifai apps. Alias: `a`.

> **Note:** See the [applications documentation](/create/applications/create) for a full guide on creating and managing apps.

### Create an App

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai app create my-app</CodeBlock>
</TabItem>
</Tabs>

You can specify a base workflow:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai app create my-app --base-workflow Universal</CodeBlock>
</TabItem>
</Tabs>

### List Apps

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai app list</CodeBlock>
</TabItem>
</Tabs>

### Delete an App

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai app delete my-app</CodeBlock>
</TabItem>
</Tabs>

Aliases: `c` (create), `ls` (list), `rm` (delete).


## Clarifai Model Init

The `clarifai model init` command scaffolds a new Clarifai model project. The recommended workflow uses `--toolkit` and `--model-name` to automatically generate all required files with the correct configuration for your model.

> **Note:** See the [model upload documentation](/compute/upload) for a full guide on building and uploading models.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

If `MODEL_PATH` is not provided, the current directory is used. When `--model-name` is provided, a directory is automatically created using the model name.

> **Note:** Running `clarifai model init` inside an existing model directory updates the files in place rather than creating a new subdirectory. This means you can safely re-run the command to refresh generated files without duplicating your project structure.

### Initialize With Toolkit (Recommended)

The `--toolkit` flag selects a pre-configured inference framework. Combined with `--model-name`, this is the fastest way to get a model ready for local serving or cloud deployment.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B</CodeBlock>
</TabItem>
</Tabs>

This creates a `Qwen3-0.6B/` directory with all required files:

```
Qwen3-0.6B/
├── 1/
│   └── model.py         # Model implementation
├── requirements.txt     # Dependencies
└── config.yaml          # Simplified config (auto-filled)
```

The generated `config.yaml` is minimal — no TODOs or placeholders:

```yaml
model:
  id: "Qwen3-0.6B"

build_info:
  python_version: "3.11"

compute:
  instance: g5.xlarge

checkpoints:
  repo_id: Qwen/Qwen3-0.6B
  type: huggingface
  when: runtime
```

Fields like `user_id`, `app_id`, and `model_type_id` are resolved automatically from your CLI context at serve/deploy time.

**Available toolkits:**

| Toolkit | Category | Description |
|---------|----------|-------------|
| `vllm` | GPU | High-throughput LLM serving with [vLLM](https://docs.clarifai.com/compute/toolkits/vllm) |
| `sglang` | GPU | Fast LLM serving with [SGLang](https://docs.clarifai.com/compute/toolkits/sglang) |
| `huggingface` | GPU | [HuggingFace](https://docs.clarifai.com/compute/toolkits/hf) Transformers (direct inference) |
| `ollama` | Local | [Ollama](https://docs.clarifai.com/compute/toolkits/ollama) local LLM server |
| `lmstudio` | Local | [LM Studio](https://docs.clarifai.com/compute/toolkits/lmstudio) local LLM server |
| `python` | Other | Blank Python model (default if `--toolkit` omitted) |
| `mcp` | Other | [MCP](https://docs.clarifai.com/compute/agents/mcp) tool server (FastMCP) |
| `openai` | Other | [OpenAI-compatible](https://docs.clarifai.com/compute/inference/open-ai) API wrapper |

More toolkit examples:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# GPU toolkits with HuggingFace models
clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B
clarifai model init --toolkit sglang --model-name Qwen/Qwen2-7B
clarifai model init --toolkit huggingface --model-name google/gemma-2b

# Local server toolkits
clarifai model init --toolkit ollama --model-name llama3.1
clarifai model init --toolkit lmstudio --model-name qwen/qwen3-4b

# Other toolkits
clarifai model init --toolkit mcp my-mcp-server
clarifai model init --toolkit openai my-wrapper
```

</TabItem>
</Tabs>

#### Smart Instance Selection

When you use `--toolkit` with a GPU toolkit (vLLM, SGLang, HuggingFace) and `--model-name`, the CLI automatically estimates VRAM requirements and selects the optimal GPU instance.

For **vLLM and SGLang** models, the CLI fetches the model's `config.json` from HuggingFace to calculate the **exact KV cache** based on the model's architecture (layer count, KV heads, head dimension, context length). This prevents out-of-memory errors that occur when a model's context window requires more KV cache than a simple heuristic predicts.

The estimation includes:
- **Model weights** — dtype-aware and quantization-aware sizing
- **KV cache** — exact calculation from model architecture for the full context window
- **Framework overhead** — 2 GiB fixed + 10% of model weights (CUDA context, PyTorch runtime, activations)
- **GPU utilization headroom** — 90% utilization factor (matching vLLM/SGLang default `gpu_memory_utilization=0.9`)

```text
$ clarifai model init --toolkit vllm --model-name Qwen/Qwen3-4B
  Instance: g5.xlarge (Estimated 15.9 GiB VRAM (7.5 GiB weights + 5.6 GiB KV cache for 40960 ctx), fits g5.xlarge (22 GiB))
```

For SGLang models, pre-Ampere GPUs (T4, V100) are automatically excluded since SGLang requires compute capability >= 8.0.

Instance recommendations are restricted to **AWS, GCP, and Vultr** cloud providers.

> **Note:** See [available cloud instances](/compute/cloud-instances) for the full list.

### Basic Initialization

If no `--toolkit` is provided, the command initializes a blank Python model using `ModelClass`:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init</CodeBlock>
</TabItem>
</Tabs>

Initialize in a new directory:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init my_custom_model</CodeBlock>
</TabItem>
</Tabs>

### Initialize With GitHub Template

You can initialize your model using a template from a GitHub repository:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# Clone a public GitHub repository
clarifai model init --github-url https://github.com/Clarifai/runners-examples/tree/main/local-runners/ollama-model-upload

# Clone a specific branch
clarifai model init --github-url https://github.com/Clarifai/runners-examples/tree/vllm-tool-calling

# Clone a private repository with a GitHub PAT
clarifai model init --github-url https://github.com/your-username/my-private-model --github-pat YOUR_GITHUB_PAT_TOKEN
```

</TabItem>
</Tabs>

### Initialize for Streaming Video

Use the `--streaming-video` flag to scaffold a model project pre-configured for video livestreaming workflows, including polygon filtering support:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init --streaming-video</CodeBlock>
</TabItem>
</Tabs>

This flag enables a streaming video consumer and adds `ffmpeg`/`av` to the generated Dockerfile.

## Clarifai Model Serve

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model serve [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai model serve` command runs a model locally for development and testing. It replaces the older `local-runner` command (which still works as an alias).

> **Note:** See the [local runners documentation](/compute/local-runners) for a full guide.

### Basic Usage

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# Run in current Python environment (fastest)
clarifai model serve ./my-model

# Auto-create virtualenv and install dependencies
clarifai model serve ./my-model --mode env

# Build and run inside Docker
clarifai model serve ./my-model --mode container
```

</TabItem>
</Tabs>

### Standalone gRPC Mode

For offline development without a Clarifai login:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# Start a standalone gRPC server (no login required)
clarifai model serve ./my-model --grpc

# Custom port
clarifai model serve ./my-model --grpc --port 9000
```

</TabItem>
</Tabs>

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `MODEL_PATH` | `.` | Model directory containing `config.yaml` |
| `--mode` | `none` | `none` (current env), `env` (auto-venv), `container` (Docker) |
| `--grpc` | off | Standalone gRPC server — no API connection needed |
| `--port` | 8000 | Server port (with `--grpc`) |
| `--concurrency` | 32 | Max concurrent requests |
| `--keep-image` | off | Keep Docker image after exit (container mode) |
| `--health-check-port` | auto | Port for the health check HTTP server |
| `--disable-health-check` | off | Disable the health check server entirely |
| `--auto-find-health-check-port` | off | Automatically find an available port if the default is in use |
| `-v, --verbose` | off | Show detailed logs |

### How It Works

**API-connected mode (default):**

1. Validates `config.yaml` and resolves credentials from your CLI context
2. Auto-creates infrastructure ([compute cluster, nodepool](/compute/deployments/clusters-nodepools), app, model, version, runner, deployment)
3. Starts the model server
4. Displays a code snippet, Playground URL, and predict command
5. Cleans up ephemeral resources (version, runner, deployment) on Ctrl+C

**Standalone gRPC mode (`--grpc`):**

Starts a standalone gRPC server with no Clarifai API connection. No login required. Useful for offline development.


## Clarifai Model Upload

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model upload [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

Upload a model to Clarifai without deploying it. Useful when you want to separate the upload and deploy steps.

> **Note:** See the [model upload documentation](/compute/upload) for a full guide.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
clarifai model upload ./my-model
clarifai model upload ./my-model --platform linux/amd64
clarifai model upload ./my-model -v    # verbose
```

</TabItem>
</Tabs>

After upload, the output includes a clickable model URL, a code snippet for predictions, and suggested next steps (deploy, predict).


## Clarifai Model Deploy

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model deploy [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai model deploy` command uploads, builds, and deploys a model to Clarifai cloud compute in one step. All infrastructure ([compute cluster, nodepool](/compute/deployments/clusters-nodepools), [deployment](/compute/deployments/deploy-model)) is **auto-created** — no manual setup required.

### Basic Examples

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# Deploy from a local directory (uses instance from config.yaml)
clarifai model deploy ./my-model

# Explicit instance selection
clarifai model deploy ./my-model --instance g5.xlarge

# GPU shorthands also work
clarifai model deploy ./my-model --instance a10g

# Deploy an already-uploaded model by URL
clarifai model deploy --model-url https://clarifai.com/user/app/models/id --instance g5.xlarge
```

</TabItem>
</Tabs>

### Browse Available Instances

Use `--instance-info` or the standalone [`clarifai list-instances`](#clarifai-list-instances) command to see all available hardware across cloud providers:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
clarifai model deploy --instance-info
clarifai model deploy --instance-info --cloud gcp
clarifai model deploy --instance-info --cloud aws --region us-east-1
```

</TabItem>
</Tabs>

<details>
<summary>Example Output</summary>

```text
Available instance types (use the ID with --instance flag):
--instance value    Cloud    Region       GPUs  Accelerator    GPU Memory    CPU      CPU Memory
------------------  -------  ---------  ------  -------------  ------------  -------  ------------
g4dn.xlarge         aws      us-east-1       1  NVIDIA-T4      15360Mi       3535m    14197Mi
g5.xlarge           aws      us-east-1       1  NVIDIA-A10G    23028Mi       3535m    13878Mi
g6e.xlarge          aws      us-east-1       1  NVIDIA-L40S    46068Mi       3535m    29033Mi
g6e.2xlarge         aws      us-east-1       1  NVIDIA-L40S    46068Mi       7525m    59343Mi
t3a.2xlarge         aws      us-east-1       0  -              -             7525m    29033Mi
...
```

</details>

### Advanced Options

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# Specific cloud/region
clarifai model deploy ./my-model --instance g5.xlarge --cloud aws --region us-west-2

# Autoscaling
clarifai model deploy ./my-model --instance g5.xlarge --min-replicas 2 --max-replicas 10

# Use existing infrastructure
clarifai model deploy ./my-model --instance g5.xlarge --compute-cluster-id my-cc --nodepool-id my-np
```

</TabItem>
</Tabs>

### Options Reference

| Option | Default | Description |
|--------|---------|-------------|
| `MODEL_PATH` | `.` | Local model directory to upload and deploy |
| `--instance` | auto | Hardware instance type (e.g., `g5.xlarge`, `a10g`) |
| `--instance-info` | — | Show available instances table, then exit |
| `--model-url` | — | Deploy an already-uploaded model (skip upload) |
| `--model-version-id` | latest | Specific version to deploy |
| `--min-replicas` | 1 | Minimum running replicas |
| `--max-replicas` | 5 | Maximum replicas for autoscaling |
| `--cloud` | auto | Cloud provider (`aws`, `gcp`, `vultr`) |
| `--region` | auto | Cloud region (e.g., `us-east-1`) |
| `--compute-cluster-id` | auto | Use existing compute cluster |
| `--nodepool-id` | auto | Use existing nodepool |
| `-v, --verbose` | off | Show detailed logs |

### Instance Name Resolution

The `--instance` flag accepts multiple naming formats, all resolved against the live API catalog:

| Input Format | Example | Resolved To |
|-------------|---------|-------------|
| API instance ID | `g5.xlarge` | `g5.xlarge` |
| GPU shorthand | `a10g` | `g5.xlarge` (via accelerator match) |
| Legacy nodepool name | `gpu-nvidia-a10g` | `g5.xlarge` (strips `gpu-nvidia-` prefix) |

### Deploy Phases

When you run `clarifai model deploy`, it progresses through these phases:

```text
── Validate ──  Config validation, HuggingFace repo access check
── Upload ────  Build and push model image
── Deploy ────  Create compute cluster, nodepool, deployment
── Monitor ───  Stream pod events until ready
── Ready ─────  Show model URL, predict command, log/status commands
```

<details>
<summary>Example Output</summary>

```text
── Ready ──────────────────────────────────────────────
  Model deployed successfully!

  Model:           https://clarifai.com/user/app/models/my-model
  Version:         abc12345
  Deployment:      deploy-my-model-abc123
  Instance:        g5.xlarge
  Cloud:           AWS / us-east-1

── Next Steps ─────────────────────────────────────────
  Predict:         clarifai model predict user/app/models/my-model "Hello"
  Logs:            clarifai model logs --deployment "deploy-my-model-abc123"
  Status:          clarifai model status --deployment "deploy-my-model-abc123"
  Undeploy:        clarifai model undeploy --deployment "deploy-my-model-abc123"
```

</details>


## Clarifai List Instances

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai list-instances [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

Browse all available compute instances across cloud providers. Alias: `li`.

> **Note:** See the [cloud instances reference](/compute/cloud-instances) for the full list of available hardware.

### Basic Usage

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# List all available instances
clarifai list-instances

# Filter by cloud provider
clarifai li --cloud aws

# Filter by GPU type
clarifai li --gpu H100

# Multi-GPU instances only
clarifai li --min-gpus 2

# Minimum GPU memory
clarifai li --min-gpu-mem 48Gi

# Combined filters
clarifai li --cloud aws --gpu L40S
```

</TabItem>
</Tabs>

### Options Reference

| Option | Description |
|--------|-------------|
| `--cloud` | Filter by cloud provider (`aws`, `gcp`, `vultr`, `azure`) |
| `--region` | Filter by region (e.g., `us-east-1`, `us-central1`) |
| `--gpu` | Filter by GPU name (e.g., `A10G`, `H100`, `L40S`) |
| `--min-gpus` | Minimum GPU count |
| `--min-gpu-mem` | Minimum GPU memory (e.g., `48Gi`, `80Gi`) |


## Clarifai Model Predict

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model predict [OPTIONS] [MODEL] [INPUT]</CodeBlock>
</TabItem>
</Tabs>

Run predictions against any Clarifai model directly from the CLI.

> **Note:** See the [inference documentation](/compute/inference/clarifai/api) for a full guide, or the [OpenAI-compatible API](/compute/inference/open-ai) for chat-style usage.

### Input Modes

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# Text input
clarifai model predict openai/chat-completion/models/GPT-4 "Hello world"

# Pipe from stdin
echo "Explain quantum computing" | clarifai model predict openai/chat-completion/models/GPT-4

# Image/video/audio file
clarifai model predict my/app/models/detector --file photo.jpg

# Media URL
clarifai model predict my/app/models/detector --url https://example.com/img.jpg

# Named parameters
clarifai model predict my/app/models/llm -i prompt="Hello" -i max_tokens=200

# OpenAI chat mode
clarifai model predict openai/chat-completion/models/GPT-4 --chat "What is AI?"

# JSON output
clarifai model predict openai/chat-completion/models/GPT-4 "Hello" -o json

# Inspect available methods
clarifai model predict openai/chat-completion/models/GPT-4 --info
```

</TabItem>
</Tabs>

### Options

| Option | Description |
|--------|-------------|
| `MODEL` | Model as `user/app/models/id` or full URL (positional) |
| `INPUT` | Text input (positional) |
| `--file PATH` | Local file (image, audio, video) |
| `--url URL` | Remote media URL |
| `-i KEY=VALUE` | Named parameter (repeatable) |
| `--inputs JSON` | All parameters as JSON string |
| `--chat TEXT` | OpenAI chat mode |
| `--method NAME` | Explicit method override |
| `--info` | Show available methods, then exit |
| `-o text\|json` | Output format (default: `text`) |
| `--deployment ID` | Route to specific deployment |
| `--model-url URL` | Full model URL (alternative to positional) |

### Auto-Detection

- Streaming methods are detected automatically and yield chunks in real-time
- Method selection: `--chat` uses OpenAI chat, text input prefers streaming/generate, media uses predict
- `--info` shows all available methods with their parameter signatures


## Clarifai Model Status

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model status [OPTIONS] [MODEL_REF]</CodeBlock>
</TabItem>
</Tabs>

Check deployment status for a model or a specific deployment.

> **Note:** See [managing deployments](/compute/deployments/manage-compute) for a full guide.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# By deployment ID
clarifai model status --deployment deploy-abc123

# By model reference (lists all deployments for the model)
clarifai model status user/app/models/my-model

# By model URL
clarifai model status --model-url https://clarifai.com/user/app/models/my-model
```

</TabItem>
</Tabs>

<details>
<summary>Example Output</summary>

```text
── Deployment: deploy-my-model-dd8481 ──────────────────
  Model:            user/app/models/my-model
  Version:          720aa2682d9f
  Min replicas:     1
  Max replicas:     5
  Nodepool:         deploy-np-g5-xlarge
  Compute cluster:  deploy-cc-aws-us-east-1
  Created:          2026-03-01 11:47:45
```

</details>

| Option | Description |
|--------|-------------|
| `MODEL_REF` | Model as `user/app/models/id` (positional) |
| `--model-url URL` | Full model URL |
| `--deployment ID` | Show a specific deployment |


## Clarifai Model Logs

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model logs [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

Stream logs from a deployed model's runner.

> **Note:** See [managing deployments](/compute/deployments/manage-compute) for more on monitoring and observability.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# By deployment ID (recommended)
clarifai model logs --deployment deploy-abc123

# By model URL
clarifai model logs --model-url https://clarifai.com/user/app/models/id

# Kubernetes scheduling/scaling events
clarifai model logs --deployment deploy-abc123 --log-type events

# Print current logs and exit
clarifai model logs --deployment deploy-abc123 --no-follow

# Stop after 60 seconds
clarifai model logs --deployment deploy-abc123 --duration 60
```

</TabItem>
</Tabs>

| Option | Default | Description |
|--------|---------|-------------|
| `--deployment ID` | — | Deployment ID (auto-resolves model/nodepool) |
| `--model-url URL` | — | Clarifai model URL |
| `--log-type` | `model` | `model` (stdout/stderr) or `events` (k8s scheduling/scaling) |
| `--follow/--no-follow` | follow | Continuously tail or print and exit |
| `--duration N` | unlimited | Stop after N seconds |

---

## Clarifai Model Undeploy

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model undeploy [OPTIONS] [MODEL_REF]</CodeBlock>
</TabItem>
</Tabs>

Permanently remove a deployment.

> **Note:** See [managing deployments](/compute/deployments/manage-compute) for a full guide.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
# By deployment ID
clarifai model undeploy --deployment deploy-abc123

# By model reference (auto-selects if exactly 1 deployment)
clarifai model undeploy user/app/models/my-model

# By model URL
clarifai model undeploy --model-url https://clarifai.com/user/app/models/my-model
```

</TabItem>
</Tabs>

| Option | Description |
|--------|-------------|
| `MODEL_REF` | Model as `user/app/models/id` (positional) |
| `--model-url URL` | Full model URL |
| `--deployment ID` | Target a specific deployment |

---

## Clarifai Model List

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model list [OPTIONS] [USER_ID]</CodeBlock>
</TabItem>
</Tabs>

List models for a user or across the platform.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
clarifai model list                    # List your models
clarifai model list <user_id>          # List another user's models
clarifai model list -a <app_id>        # Filter by app
```

</TabItem>
</Tabs>


## Clarifai Deployment

The `clarifai deployment` command provides direct management of deployments by ID. Alias: `dp`.

> **Note:** See [managing deployments](/compute/deployments/manage-compute) and [clusters and nodepools](/compute/deployments/clusters-nodepools) for full guides.

### Get Deployment Details

Show details for a single deployment:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
clarifai deployment get deploy-abc123
clarifai deployment status deploy-abc123   # alias
```

</TabItem>
</Tabs>

### List Deployments

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
clarifai deployment ls                    # All deployments
clarifai deployment ls <nodepool_id>      # Filter by nodepool
```

</TabItem>
</Tabs>

### Stream Deployment Logs

<Tabs groupId="code">
<TabItem value="bash" label="CLI">

```bash
clarifai deployment logs deploy-abc123
clarifai deployment logs deploy-abc123 --log-type events
clarifai deployment logs deploy-abc123 --no-follow
clarifai deployment logs deploy-abc123 --duration 60
```

</TabItem>
</Tabs>

| Option | Default | Description |
|--------|---------|-------------|
| `DEPLOYMENT_ID` | — | Deployment ID (positional, required) |
| `--log-type` | `model` | `model` (stdout/stderr) or `events` (k8s scheduling/scaling) |
| `--follow/--no-follow` | follow | Continuously tail or print and exit |
| `--duration N` | unlimited | Stop after N seconds |

### Delete a Deployment

Delete a deployment by ID (no nodepool argument required):

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai deployment rm deploy-abc123</CodeBlock>
</TabItem>
</Tabs>

### Create a Deployment

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai deployment create &lt;nodepool_id&gt; &lt;deployment_id&gt; --config deployment.yaml</CodeBlock>
</TabItem>
</Tabs>


## Clarifai Pipeline

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline [COMMAND] [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai pipeline` command lets you create and manage [pipelines](/compute/pipelines) on the Clarifai platform. Alias: `pl`.

> **Note:** See the [Create and Run Pipelines](/compute/pipelines/create-api) guide for a full end-to-end walkthrough.

### Compile

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline compile [OPTIONS] PATH</CodeBlock>
</TabItem>
</Tabs>

Compile YAML/config-based pipeline assets from a Python pipeline definition. The `PATH` argument is the path to the Python file containing your pipeline definition.

| Option | Description |
|--------|-------------|
| `PATH` | Path to the Python pipeline definition file (positional, required) |
| `--output-dir PATH` | Directory to write the compiled `config.yaml` and step folders (required) |

```bash
clarifai pipeline compile pipeline_definition.py --output-dir ./my-pipeline
```

### Init

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline init [OPTIONS] [PIPELINE_PATH]</CodeBlock>
</TabItem>
</Tabs>

Initialize a new pipeline project structure, either from a predefined template or interactively. When `PIPELINE_PATH` is not specified, the current directory is used.

| Option | Description |
|--------|-------------|
| `PIPELINE_PATH` | Path where the pipeline project structure will be created (positional, optional) |
| `--template TEXT` | Initialize from a named template. Run `clarifai pipelinetemplate ls` to list available templates (e.g., `classifier-pipeline-resnet-quick-start`) |
| `--set TEXT` | Override template parameters inline. Format: `--set key=value`, repeatable. Use `--set id=<pipeline_id>` to rename the pipeline or `--set num_epochs=20` to override a model parameter default |
| `--user_id TEXT` | User ID for generated configs. Overrides the user ID from your login context |
| `--app_id TEXT` | App ID for generated configs. Overrides the app ID from your login context |

```bash
# Interactive initialization in the current directory
clarifai pipeline init

# Initialize in a named directory
clarifai pipeline init my-pipeline

# Initialize from a template
clarifai pipeline init --template classifier-pipeline-resnet-quick-start

# Initialize from a template with parameter overrides
clarifai pipeline init --template classifier-pipeline-resnet-quick-start --set id=my-pipeline --set num_epochs=20
```

### List

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline list [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

List all pipelines for the user. Alias: `ls`.

| Option | Description |
|--------|-------------|
| `--app_id TEXT` | App ID to list pipelines from (required) |
| `--user_id TEXT` | User ID to list pipelines from. Defaults to the current user if not provided |
| `--page_no INTEGER` | Page number to list |
| `--per_page INTEGER` | Number of items per page |

```bash
clarifai pipeline list --app_id my-app
clarifai pipeline ls --app_id my-app --user_id my-user-id
```

### Run

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline run [OPTIONS] [PATH]</CodeBlock>
</TabItem>
</Tabs>

Run a pipeline and monitor its progress. `PATH` is an optional path to a pipeline directory or config file (defaults to `.`). When provided, config precedence is `config-lock.yaml` > `config.yaml`.

| Option | Type | Description |
|--------|------|-------------|
| `PATH` | `PATH` | Path to a pipeline directory or config file. Defaults to current directory |
| `--pipeline_id` | `TEXT` | Pipeline ID to run |
| `--pipeline_version_id` | `TEXT` | Pipeline version ID to run |
| `--pipeline_version_run_id` | `TEXT` | Pipeline version run ID. A UUID is generated if not provided |
| `--user_id` | `TEXT` | User ID of the pipeline |
| `--app_id` | `TEXT` | App ID that contains the pipeline |
| `--pipeline_url` | `TEXT` | Full pipeline URL to run |
| `--instance` | `TEXT` | Hardware instance type (e.g., `g5.xlarge`, `A10G`). Auto-creates compute cluster and nodepool |
| `--cloud` | `TEXT` | Cloud provider (e.g., `aws`, `gcp`). Auto-detected from `--instance` if omitted |
| `--region` | `TEXT` | Cloud region (e.g., `us-east-1`). Auto-detected from `--instance` if omitted |
| `--nodepool_id` | `TEXT` | **[Advanced]** Existing nodepool ID (skips auto-creation) |
| `--compute_cluster_id` | `TEXT` | **[Advanced]** Existing compute cluster ID (skips auto-creation) |
| `--timeout` | `INTEGER` | Maximum time to wait for completion in seconds. Default: `3600` (1 hour) |
| `--monitor_interval` | `INTEGER` | Interval between status checks in seconds. Default: `10` |
| `--log_file` | `PATH` | File path to write logs to. Logs are displayed on the console if omitted |
| `--monitor` | `FLAG` | Monitor an existing pipeline run instead of starting a new one. Requires `--pipeline_version_run_id` |
| `--set` | `TEXT` | Override parameter values inline. Format: `--set key=value`. Repeatable |
| `--overrides-file` | `PATH` | Path to a JSON/YAML file containing parameter overrides |
| `--dev` | `FLAG` | Upload local code to an ephemeral dev pipeline before running. Only changed steps are re-uploaded |

```bash
# Run on on-demand instance compute
clarifai pipeline run --instance g5.xlarge

# Run on an existing cluster and nodepool
clarifai pipeline run --compute_cluster_id my-cluster --nodepool_id my-nodepool

# Override parameters at runtime
clarifai pipeline run --instance g5.xlarge --set num_epochs=20 --set batch_size=32

# Monitor an existing run
clarifai pipeline run --monitor --pipeline_version_run_id <run-id>

# Run with dev mode (re-upload only changed steps)
clarifai pipeline run --instance g5.xlarge --dev
```

### Upload

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline upload [OPTIONS] [PATH]</CodeBlock>
</TabItem>
</Tabs>

Upload a pipeline and its associated pipeline steps to Clarifai. `PATH` is the path to the pipeline configuration file or directory containing `config.yaml`. Defaults to the current directory if not specified.

| Option | Description |
|--------|-------------|
| `PATH` | Path to the pipeline config file or directory (positional, optional) |
| `--no-lockfile` | Skip generating a `config-lock.yaml` file |

```bash
# Upload from current directory
clarifai pipeline upload

# Upload from a specific path
clarifai pipeline upload ./my-pipeline

# Upload without generating a lock file
clarifai pipeline upload --no-lockfile
```

### Validate Lock

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipeline validate-lock [OPTIONS] [LOCKFILE_PATH]</CodeBlock>
</TabItem>
</Tabs>

Validate a `config-lock.yaml` file for schema correctness and reference consistency. If `LOCKFILE_PATH` is not provided, the command looks for `config-lock.yaml` in the current directory.

```bash
# Validate in current directory
clarifai pipeline validate-lock

# Validate a specific lock file
clarifai pipeline validate-lock ./my-pipeline/config-lock.yaml
```


## Clarifai Pipeline Step

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinestep [COMMAND] [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai pipelinestep` command lets you manage individual pipeline steps independently of a full pipeline. Aliases: `pipeline-step`, `ps`.

> **Note:** See [pipeline steps](/compute/pipelines/create-api#pipeline-steps) for a full guide.

### Init

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinestep init [OPTIONS] [PIPELINE_STEP_PATH]</CodeBlock>
</TabItem>
</Tabs>

Initialize a new pipeline step directory structure. If `PIPELINE_STEP_PATH` is not specified, the current directory is used.

The command creates the following structure:

```text
├── 1/
│   └── pipeline_step.py   # Step implementation logic
├── requirements.txt        # Step dependencies
└── config.yaml             # Step configuration
```

```bash
# Initialize in the current directory
clarifai pipelinestep init

# Initialize in a named directory
clarifai pipelinestep init my-step
```

### List

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinestep list [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

List all pipeline steps for the user. Alias: `ls`.

| Option | Description |
|--------|-------------|
| `--app_id TEXT` | App ID to list pipeline steps from (required) |
| `--user_id TEXT` | User ID to list pipeline steps from. Defaults to the current user if not provided |
| `--pipeline_id TEXT` | Filter pipeline steps by pipeline ID |
| `--page_no INTEGER` | Page number to list |
| `--per_page INTEGER` | Number of items per page |

```bash
clarifai pipelinestep list --app_id my-app
clarifai pipelinestep ls --app_id my-app --pipeline_id my-pipeline
```

### Local Run

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinestep local-run [OPTIONS] [PIPELINE_STEP_PATH]</CodeBlock>
</TabItem>
</Tabs>

Run a pipeline step locally in a Docker container, without uploading it to Clarifai. This is useful for validating your step's logic and dependencies during development before deploying.

`PIPELINE_STEP_PATH` is the path to the pipeline step directory (containing `config.yaml`, `requirements.txt`, and `1/pipeline_step.py`). Defaults to the current directory.

The command reuses the same Docker build infrastructure as `clarifai model serve --mode container`, but executes `pipeline_step.py` once and exits.

| Option | Description |
|--------|-------------|
| `PIPELINE_STEP_PATH` | Path to the pipeline step directory (positional, optional) |
| `--mode [container]` | Execution mode. Currently only `container` is supported |
| `--step-args TEXT` | Arguments to pass to `pipeline_step.py` (e.g., `"--param_a hello --param_b world"`) |
| `--keep-image` | Keep the Docker image after the step finishes |

```bash
# Run in the current directory
clarifai pipelinestep local-run

# Run a step in a specific directory
clarifai pipelinestep local-run ./my-step

# Pass arguments to the step script
clarifai pipelinestep local-run ./my-step --step-args "--input_text hello"

# Keep the Docker image after execution
clarifai pipelinestep local-run ./my-step --keep-image
```

### Upload

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai pipelinestep upload [OPTIONS] [PIPELINE_STEP_PATH]</CodeBlock>
</TabItem>
</Tabs>

Upload a pipeline step to Clarifai. `PIPELINE_STEP_PATH` is the path to the pipeline step directory. Defaults to the current directory if not specified.

By default, a `Dockerfile` is automatically generated during upload. Use `--skip_dockerfile` if you want to use an existing one you've already edited.

| Option | Description |
|--------|-------------|
| `PIPELINE_STEP_PATH` | Path to the pipeline step directory (positional, optional) |
| `--skip_dockerfile` | Skip auto-generating a Dockerfile, so an existing one is used instead |

```bash
# Upload from current directory
clarifai pipelinestep upload

# Upload from a specific path
clarifai pipelinestep upload ./my-step

# Upload using an existing Dockerfile
clarifai pipelinestep upload ./my-step --skip_dockerfile
```
