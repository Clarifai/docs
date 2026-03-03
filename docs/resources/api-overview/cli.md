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
                                  get, logs
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

---

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

---

## Clarifai App

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai app [COMMAND] [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai app` command provides CRUD operations for Clarifai apps. Alias: `a`.

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

---

## Clarifai Model Init

The `clarifai model init` command scaffolds a new Clarifai model project. The recommended workflow uses `--toolkit` and `--model-name` to automatically generate all required files with the correct configuration for your model.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model init [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

If `MODEL_PATH` is not provided, the current directory is used. When `--model-name` is provided, a directory is automatically created using the model name.

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
| `huggingface` | GPU | HuggingFace Transformers (direct inference) |
| `ollama` | Local | [Ollama](https://docs.clarifai.com/compute/toolkits/ollama) local LLM server |
| `lmstudio` | Local | [LM Studio](https://docs.clarifai.com/compute/toolkits/lm-studio) local LLM server |
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

When you use `--toolkit` with a GPU toolkit and `--model-name`, the CLI queries the HuggingFace API for model metadata (parameter count, quantization, dtype) and estimates VRAM requirements to auto-select the optimal GPU instance:

```text
$ clarifai model init --toolkit vllm --model-name Qwen/Qwen3-4B
  Instance: g5.xlarge (Estimated 12.2 GiB VRAM, fits g5.xlarge (24 GiB))
```

For SGLang models, pre-Ampere GPUs (T4, V100) are automatically excluded since SGLang requires compute capability >= 8.0.

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

Learn more about using toolkits [here](https://docs.clarifai.com/compute/toolkits).

---

## Clarifai Model Serve

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model serve [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai model serve` command runs a model locally for development and testing. It replaces the older `local-runner` command (which still works as an alias).

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
| `-v, --verbose` | off | Show detailed logs |

### How It Works

**API-connected mode (default):**

1. Validates `config.yaml` and resolves credentials from your CLI context
2. Auto-creates infrastructure (compute cluster, nodepool, app, model, version, runner, deployment)
3. Starts the model server
4. Displays a code snippet, Playground URL, and predict command
5. Cleans up ephemeral resources (version, runner, deployment) on Ctrl+C

**Standalone gRPC mode (`--grpc`):**

Starts a standalone gRPC server with no Clarifai API connection. No login required. Useful for offline development.

---

## Clarifai Model Upload

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model upload [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

Upload a model to Clarifai without deploying it. Useful when you want to separate the upload and deploy steps.

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

---

## Clarifai Model Deploy

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model deploy [OPTIONS] [MODEL_PATH]</CodeBlock>
</TabItem>
</Tabs>

The `clarifai model deploy` command uploads, builds, and deploys a model to Clarifai cloud compute in one step. All infrastructure (compute cluster, nodepool, deployment) is **auto-created** — no manual setup required.

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

Use `--instance-info` to see all available hardware across cloud providers:

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
  Instance          Cloud   Region       GPUs  Accelerator  GPU Mem  CPU  CPU Mem
  ──────────────────────────────────────────────────────────────────────────────
  g5.xlarge         AWS     us-east-1    1     NVIDIA-A10G  24 GiB   4    16 GiB
  g6e.2xlarge       AWS     us-east-1    1     NVIDIA-L40S  48 GiB   8    64 GiB
  t3a.2xlarge       AWS     us-east-1    0     CPU          -        8    32 GiB
  n1-standard-4-t4  GCP     us-central1  1     NVIDIA-T4    16 GiB   4    15 GiB
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

---

## Clarifai Model Predict

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model predict [OPTIONS] [MODEL] [INPUT]</CodeBlock>
</TabItem>
</Tabs>

Run predictions against any Clarifai model directly from the CLI.

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

---

## Clarifai Model Status

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model status [OPTIONS] [MODEL_REF]</CodeBlock>
</TabItem>
</Tabs>

Check deployment status for a model or a specific deployment.

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

---

## Clarifai Model Logs

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">clarifai model logs [OPTIONS]</CodeBlock>
</TabItem>
</Tabs>

Stream logs from a deployed model's runner.

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

---

## Clarifai Deployment

The `clarifai deployment` command provides direct management of deployments by ID. Alias: `dp`.

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
