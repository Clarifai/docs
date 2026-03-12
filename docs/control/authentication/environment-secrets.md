---
description: Create, store, and manage environment variables and secrets
sidebar_position: 2.1
toc_max_heading_level: 4
---

# Environment Secrets

**Create, store, and manage environment variables and secrets**
<hr />

Environment secrets are securely encrypted values that function as environment variables within your workflows. 

They enable you to store and manage sensitive configuration data, such as third-party API keys, without hardcoding them into your scripts.

## Via the UI

The Clarifai platform offers an intuitive interface for creating, managing, and securing your environment secrets.

To create a secret, [log in](https://clarifai.com/login) to the Clarifai platform. Then, in the collapsible left sidebar, select **Settings** and choose **Secrets** from the dropdown list.

![](/img/others/third_party_key_1.png)

On the ensuing **Secrets** page, click the **Create Environment Secrets** button.  

Next, on the form that pops up, enter a required name for your secret, an optional short description, and the required value. 

Lastly, click the **Create Environment Secret** button.

![](/img/others/third_party_key_2.png)

The new secret will be listed in the **Environment Secrets** section, where you can copy, view, edit, or delete it.

![listed pat](/img/others/third_party_key_3.png)

:::tip note

- Environment secrets do not expire. In case your secret gets compromised, you should delete it, and create a new one.
- We recommend that you do **not** share your secrets with other users.

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

You can create a new environment secret by providing its ID and value. 

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

You can get an existing environment secret by providing its ID. 

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

You can list all the environment secrets you have.  

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

You can update an existing environment secret by providing its ID. 

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

You can delete an existing environment secret by providing its ID. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PySecretsDelete}</CodeBlock>
</TabItem>


</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OutputSecretsDelete}</CodeBlock>
</details>

## Use Case Examples

### Custom Models

The `config.yaml` file defines the build, deployment, and runtime configuration for a custom model on the Clarifai platform. 

You can also use this file to reference sensitive configuration values without hardcoding them into your application code.

The following example shows how to define a secret when deploying the [GitHub MCP server](https://github.com/Clarifai/runners-examples/blob/main/mcp/github-mcp-server/README.md#2-configure-secrets-optional) to the Clarifai platform:

```yaml
model:
  id: github-mcp-server
  model_type_id: mcp

build_info:
  python_version: "3.11"
  node_version: "20.11.1"

compute:
  instance: t3a.2xlarge

secrets:
  - id: "github_personal_access_token"
    type: "env"
    env_var: "GITHUB_PERSONAL_ACCESS_TOKEN"
    description: "GitHub personal access token"

mcp_server:
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-github"]
```

In this configuration:

* `id` specifies the secret identifier stored in Clarifai’s secret manager.
* `env_var` defines the environment variable name that will be available inside the runtime environment.
* The secret value is injected securely during deployment and never stored directly in the project files.

Your application can then read the secret using a standard environment variable:

```python
import os

github_token = os.environ["GITHUB_PERSONAL_ACCESS_TOKEN"]
```

### Pipelines

Clarifai Pipelines allow you to design and run asynchronous, multi-step AI workflows on the platform.

The root `config.yaml` file defines the pipeline’s identity, structure, and orchestration logic. It specifies which steps the pipeline contains and how they are executed.

You can also use this configuration to securely inject secrets into specific pipeline steps.

Below is an example showing how to reference secrets in the [root `config.yaml` file](https://docs.clarifai.com/compute/pipelines/create-api#optional-secrets-configuration) of a pipeline project:

```yaml
pipeline:
  id: "hello-world-pipeline"
  user_id: "user-id"
  app_id: "app-id"
  step_directories:
    - stepA
    - stepB
  orchestration_spec:
    argo_orchestration_spec: |
      apiVersion: argoproj.io/v1alpha1
      kind: Workflow
      spec:
        entrypoint: sequence
        arguments:
          parameters:
            - name: input_text
              value: "Input Text Here"
        templates:
        - name: sequence
          steps:
          - - name: step-0
              templateRef:
                name: users/user-id/apps/app-id/pipeline_steps/stepA
                template: users/user-id/apps/app-id/pipeline_steps/stepA
              arguments:
                parameters:
                  - name: input_text
                    value: "{{workflow.parameters.input_text}}"
          - - name: step-1
              templateRef:
                name: users/user-id/apps/app-id/pipeline_steps/stepB
                template: users/user-id/apps/app-id/pipeline_steps/stepB
              arguments:
                parameters:
                  - name: input_text
                    value: "{{workflow.parameters.input_text}}"

  config:
    step_version_secrets:
      step-0:
        API_KEY: users/user-id/apps/secrets/my-api-key
        DB_PASSWORD: users/user-id/apps/secrets/db-secret
      step-1:
        EMAIL_TOKEN: users/user-id/apps/secrets/email-token
```

In this configuration:

* Each key (for example, `API_KEY` or `DB_PASSWORD`) becomes an environment variable within the corresponding pipeline step.
* The values reference secrets stored in the Clarifai secrets manager, ensuring they remain encrypted and access-controlled.

Once the pipeline runs, the secrets are available in your step code through standard environment variables.

Example (`pipeline_step.py`):

```python
import os

api_key = os.environ["API_KEY"]
```

At runtime, the platform securely injects the secret value into the environment, allowing your code to use it without exposing sensitive information in your project files.
