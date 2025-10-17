---
description: Learn about secrets for the Clarifai platform
sidebar_position: 2.1
unlisted: true
toc_max_heading_level: 4
---

# Environment Secrets

**Securely connect external services with secrets**
<hr />

Third-Party API Keys are a type of secret used to authenticate and authorize external applications or services, enabling them to securely interact with your Clarifai data without exposing your primary credentials, such as your [Personal Access Token](pat.md ) (PAT).

## Via the UI

The Clarifai platform offers an intuitive interface for creating, managing, and securing your third-party API keys.

To create a third-party API key, [log in](https://clarifai.com/login) to the Clarifai platform. Then, in the collapsible left sidebar, select **Settings** and choose **Secrets** from the dropdown list.

![](/img/others/third_party_key_1.png)

On the ensuing **Secrets** page, click the **Create Third-Party API Key** button.  

Next, on the form that pops up, enter a required name for your API key, an optional short description, and the required API key from your third-party provider. 

Lastly, click the **Create Third-Party API Key** button.

![](/img/others/third_party_key_2.png)

The new PAT will be listed in the **Third-Party API Keys** section, where you can copy, view, edit, or delete it.

![listed pat](/img/others/third_party_key_3.png)

:::tip note

- Third-Party API keys do not expire. In case your key gets compromised, you should delete it, and create a new one.
- We recommend that you do **not** share your keys with other users.

:::

## Via the API

### Prerequisites

#### Install Python SDK

Install the latest version of the Clarifai [Python](https://github.com/Clarifai/clarifai-python/) SDK package. 

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

#### Get Credentials

Go to your Clarifai account and retrieve the following credentials:

- **User ID** – In the collapsible left sidebar, select **Settings** and choose **Account** from the dropdown list. Then, locate your user ID. 
- **PAT** – From the same **Settings** option, choose **Secrets** to generate or copy your [Personal Access Token](pat.md) (PAT). This token is used to authenticate your connection with the Clarifai platform.

You can then set the PAT as an environment variable using `CLARIFAI_PAT`. 

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CurlSecretsCreate from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_create.sh";
import OutputCurlSecretsCreate from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_create_output.txt";
import CurlSecretsGet from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_get.sh";
import OutputSecretsGet from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_get_output.txt";
import PySecretsCreate from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_create.py";
import PySecretsUpdate from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_update.py";
import PySecretsGet from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_get.py";
import PySecretsDelete from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_delete.py";
import PySecretsList from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_list.py";
import CurlSecretsList from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_list.sh";
import OutputSecretsList from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_list_output.txt";
import OutputSecretsPatch from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_patch_output.txt";
import OutputSecretsDelete from "!!raw-loader!../../../code_snippets/api-guide/authentication/secrets_delete_output.txt";

### Create 

You can create a new a third-party API key by providing its ID and value. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PySecretsCreate}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
 <CodeBlock className="language-bash">{CurlSecretsCreate}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputCurlSecretsCreate}</CodeBlock>
</details>

### Get

You can get an existing third-party API key by providing its ID. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PySecretsGet}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
 <CodeBlock className="language-bash">{CurlSecretsGet}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputSecretsGet}</CodeBlock>
</details>

### List

You can list all the third-party API keys you have.  

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PySecretsList}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
 <CodeBlock className="language-bash">{CurlSecretsList}</CodeBlock>
</TabItem>

</Tabs>

> **Note:** If you specify `page_no` but not `per_page`, [pagination](https://docs.clarifai.com/resources/api-overview/pagination/) defaults to 16 items per page. If both `page_no` and `per_page` are left as `None`, all resources are listed without pagination.

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputSecretsList}</CodeBlock>
</details>


### Update

You can update an existing third-party API key by providing its ID. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PySecretsUpdate}</CodeBlock>
</TabItem>


</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputSecretsPatch}</CodeBlock>
</details>

### Delete 

You can delete an existing third-party API key by providing its ID. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PySecretsDelete}</CodeBlock>
</TabItem>


</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputSecretsDelete}</CodeBlock>
</details>