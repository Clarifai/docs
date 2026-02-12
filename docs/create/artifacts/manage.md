---
description: Create, upload, download, list, get, and delete
sidebar_position: 1
unlisted: true
---

# Artifacts Management

**Create, upload, download, list, get, and delete**
<hr />

[Clarifai artifacts](README.mdx) are binary, file-based assets associated with your apps — such as model weights, checkpoints, configuration files, or other supporting resources.

You can create, upload, download, list, inspect, and delete artifacts and their versions directly from the command line or using our Python SDK.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PyCreate1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-1.py";
import PyUpload1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-2.py";
import PyUpload2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-3.py";
import PyUpload3 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-4.py";
import PyUpload4 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-5.py";
import Py6 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-6.py";
import Py7 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-7.py";
import Py8 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-8.py";
import Py9 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-9.py";
import Py10 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-10.py";
import Py11 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-11.py";
import Py12 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-12.py";
import Py13 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-13.py";
import Py14 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-14.py";
import Py15 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-15.py";

import CLI1Upload1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-1.sh";
import CLIUpload2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-2.sh";
import CLIUpload3 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-3.sh";
import CLIUpload4 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-4.sh";
import CLIUpload5 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-5.sh";
import Download1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-6.sh";
import Download2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-7.sh";
import Download3 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-8.sh";
import Download4 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-9.sh";
import Download5 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-10.sh";
import Download6 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-11.sh";
import List1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-12.sh";
import List2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-13.sh";
import Get1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-14.sh";
import Get2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-15.sh";
import Delete1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-16.sh";
import Delete2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-17.sh";
import Delete3 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/cli-18.sh";
import ModelPt from "!!raw-loader!../../../code_snippets/new-docs/artifacts/model-pt.py";
import Output1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-1.txt";
import Output2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-2.txt";
import Output3 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-3.txt";
import Output4 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-4.txt";
import Output5 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-5.txt";
import Output6 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-6.txt";
import Output7 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-7.txt";
import Output8 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/output-8.txt";

## Prerequisites

### Install Clarifai Package

Install the latest version of the `clarifai` Python package. This also installs the Clarifai Command Line Interface (CLI), which we'll use for running artifact commands.

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>
</Tabs>

### Get User ID and PAT

You’ll need the following credentials from the [Clarifai platform](https://clarifai.com/explore) for managing artifacts:

- **User ID** – In the collapsible left sidebar, select **Settings** and choose **Account** from the dropdown list. Then, locate your user ID.

- **Personal Access Token (PAT)** – From the same **Settings** option, choose **Secrets** to generate or copy your [PAT](https://docs.clarifai.com/control/authentication/pat). This token is used to authenticate your connection with the Clarifai platform.

You can then set the PAT as an environment variable using `CLARIFAI_PAT`. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>

### Create an App

In the Clarifai platform, [create an app](https://docs.clarifai.com/create/applications/create) where your artifact will be stored. After creating the app, make note of the app ID, as it is required when referencing [artifact paths](README.mdx#artifact-resource-paths) in the CLI or SDK.


:::note CLI commands

When using the Clarifai CLI, run `clarifai artifact --help` to view the complete list of available commands and their descriptions. 

> **Note:** You can use **`af`** as a shorthand alias for the `artifact` command. Example: `clarifai af --help`.

> These are the available commands:
    > - `cp` – Upload or download artifact files
    > - `list` (`ls`) – List artifacts or artifact versions
    > - `get` – Retrieve artifact or version details
    > - `delete` (`rm`) – Delete artifacts or artifact versions

:::

## Create an Artifact

With the Python SDK, you can create an artifact object under your user and app by specifying an artifact ID; once created, it enables you to store files as versioned assets and easily upload, track, and manage changes over time.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyCreate1}</CodeBlock>
</TabItem>

</Tabs>

## Upload Artifacts

You can upload an artifact file by specifying an artifact ID; this automatically creates a new artifact version.

> **Note:** If the artifact does not already exist, it will be created automatically before the upload.

<details>
  <summary>Example Artifact: model.pt</summary>
    <CodeBlock className="language-python">{ModelPt}</CodeBlock>
</details>

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyUpload1}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLI1Upload1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output1}</CodeBlock>
</details>

You can upload with a description and visibility. 

> **Note:** These are the visibility options you can set: `private` (default) restricts access to you, `org` allows access within your organization, and `public` makes the artifact accessible to anyone.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyUpload2}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIUpload2}</CodeBlock>
</TabItem>

</Tabs>

You can upload directly to a specific artifact version by providing a version ID.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyUpload3}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIUpload3}</CodeBlock>
</TabItem>

</Tabs>

You can specify an expiration time using [RFC3339](https://www.rfc-editor.org/rfc/rfc3339) format (e.g., `2026-12-31T23:59:59.999Z`)

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PyUpload4}</CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIUpload4}</CodeBlock>
</TabItem>

</Tabs>

With the CLI, you can use `--force` or `-f` to overwrite existing files.

<Tabs groupId="code">

<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{CLIUpload5}</CodeBlock>
</TabItem>

</Tabs>

## Download Artifacts

You can download the latest artifact version by specifying an already existing local destination directory. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Download1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output2}</CodeBlock>
</details>

You can download the latest artifact version to the current directory.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Download3}</CodeBlock>
</TabItem>

</Tabs>

You can download the artifact directly to the current directory using a specific filename.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Download2}</CodeBlock>
</TabItem>

</Tabs>

You can download a specific artifact version and save it as a named file in the current directory.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Download4}</CodeBlock>
</TabItem>

</Tabs>

You can download a specific artifact version and save it into an existing local directory.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Download5}</CodeBlock>
</TabItem>

</Tabs>

You can use `--force` or `-f` to overwrite existing local files.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Download6}</CodeBlock>
</TabItem>

</Tabs>

## List Artifacts

> **Note:** When using the CLI, you can use `ls` as a shorthand alias for the `list` command.

You can list all artifacts within an app.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{List1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output3}</CodeBlock>
</details>

You can list all versions of a specific artifact. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{List2}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output4}</CodeBlock>
</details>

## Get Artifact Details

You can get the details of a specific artifact.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Get1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output5}</CodeBlock>
</details>

You can get the details of a specific artifact version. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Get2}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output6}</CodeBlock>
</details>

## Delete Artifacts

> **Note:** When using the CLI, you can use `rm` as a shorthand alias for the `delete` command.

You can delete an artifact (including all versions) by specifying its `artifact_id`. 


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Delete1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output7}</CodeBlock>
</details>

You can delete a specific artifact version by including its version ID in the path.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Delete2}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-python">{Output8}</CodeBlock>
</details>

You can use `--force` or `-f` to delete without a confirmation prompt.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python"></CodeBlock>
</TabItem>
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">{Delete3}</CodeBlock>
</TabItem>

</Tabs>