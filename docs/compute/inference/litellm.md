---
description: Run inferences on Clarifai models using LiteLLM  
sidebar_position: 3
toc_max_heading_level: 4
---

# LiteLLM 

**Run inferences on Clarifai models using LiteLLM**
<hr />

LiteLLM provides a universal interface that simplifies working with LLMs across multiple providers. It offers a single, consistent API for making inferences, allowing you to interact with a wide range of models using the same method, regardless of the underlying provider.

LiteLLM natively supports OpenAI-compatible APIs, making it easy to run inferences on [Clarifai-hosted](https://docs.litellm.ai/docs/providers/clarifai) models with minimal setup.

:::tip

[Click here](https://github.com/Clarifai/examples/tree/main/models/model_predict) for additional examples on how to perform model predictions using various SDKs — such as the Clarifai SDK, OpenAI client, and LiteLLM. The examples demonstrate various model types and include both streaming and non-streaming modes, as well as tool calling capabilities.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import Example5 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/litellm_1.py";
import Example6 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/litellm_2.py";
import Example7 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/litellm_3.py";
import Example8 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/litellm_4.py";
import TestOpenai from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/litellm_5.py";
import TestCurl from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/litellm_6.sh";

## Prerequisites

### Install LiteLLM 

Install the `litellm` package.

<Tabs groupId="code">
<TabItem value="bash" label="Python">
    <CodeBlock className="language-bash">pip install litellm</CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

You need a [PAT](https://docs.clarifai.com/control/authentication/pat) key to authenticate your connection to the Clarifai platform. You can get one by navigating to **Settings** in the collapsible left sidebar, selecting **Secrets**, and creating or copying an existing token from there.

You can then set the PAT as an environment variable using `CLARIFAI_PAT`:

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash">export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash">set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE</CodeBlock>
</TabItem>
</Tabs>


### Get a Clarifai Model

Go to the Clarifai [Community](https://clarifai.com/explore) platform and select the model you want to use for predictions. LiteLLM supports all models in the Clarifai community.

:::note

When using a Clarifai model with LiteLLM, reference it using the `clarifai/`-prefixed model ID in the following format: `clarifai/<user_id>.<app_id>.<model_id>`. For example: `clarifai/openai.chat-completion.gpt-oss-20b`.

:::



## Chat Completions

In LiteLLM, the [`completion()`](https://docs.litellm.ai/docs/completion) function is the primary method for interacting with language models that follow the OpenAI Chat API format. It supports both traditional completions and chat-based interactions by accepting a list of messages — similar to OpenAI’s [`chat.completions.create()`](https://docs.clarifai.com/compute/inference/open-ai/#chat-completions-api).

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example5}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">Hey there! I'm doing great—thanks for asking. How about you? Anything fun or interesting on your mind today?</CodeBlock>
</details>

## Streaming

When [streaming](https://docs.litellm.ai/docs/completion/stream) is enabled by setting `stream=True`, the `completion` method returns an iterator that yields partial responses in real time as the model generates them, instead of a single complete dictionary.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example7}</CodeBlock>
</TabItem>
</Tabs>

## Tool Calling

Clarifai models accessed via LiteLLM fully support [tool calling](https://docs.clarifai.com/compute/inference/open-ai/#tool-calling), enabling advanced interactions such as function execution during a conversation.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example6}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary> Tool Calling Implementation Example</summary>
    <CodeBlock className="language-python">{Example8} </CodeBlock>
</details>


## Usage with LiteLLM Proxy

Here’s how to call Clarifai models through the LiteLLM Proxy Server.

### Install LiteLLM with Proxy Support

<Tabs groupId="code">
<TabItem value="bash" label="Python">
    <CodeBlock className="language-bash">pip install 'litellm[proxy]'</CodeBlock>
</TabItem>
</Tabs>

### Set Key

Set your Clarifai PAT as an environment variable, as illustrated [above](#get-a-pat-key).


### Start the Proxy

Create a `config.yaml`.

```yaml
model_list:
  - model_name: clarifai-model
    litellm_params:
      model: clarifai/openai.chat-completion.gpt-oss-20b
      api_key: ${CLARIFAI_PAT}
```

Then, start the LiteLLM proxy:

```bash
litellm --config /path/to/config.yaml
```

The server will run at:

```
http://0.0.0.0:4000
```

### Test the Proxy

<Tabs groupId="code">
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-python">{TestCurl}</CodeBlock>
</TabItem>

<TabItem value="openai" label="Python (OpenAI)">
    <CodeBlock className="language-php"> {TestOpenai} </CodeBlock>
</TabItem>

</Tabs>



