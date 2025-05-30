---
description: Generate predictions using your deployed models
sidebar_position: 1.1
toc_max_heading_level: 4
---

# OpenAI Inferences

**Make inferences with Clarifai using an OpenAI-compatible format**
<hr />

Clarifai provides an OpenAI-compatible API endpoint, which allows you to leverage your existing OpenAI API code and workflows to make inferences with Clarifai models, including those that integrate or wrap OpenAI models.

The built-in compatibility layer converts your OpenAI calls directly into Clarifai API requests, letting you harness Clarifai's diverse models as custom tools in your OpenAI projects.

This simplifies the integration process, as you don't need to rewrite your code specifically for Clarifai's native API structure if you're already familiar with OpenAI's.

> **Note** Usage-based billing is handled directly through Clarifai — not through OpenAI or any other external tool. Also, while most OpenAI parameters are supported, certain advanced features may be unavailable depending on the specific model or endpoint.



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Example1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_1.py";
import TSExample1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_1.ts";
import Example2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_2.py";
import TSExample2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_2.ts";
import Example3 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_3.py";
import Example4 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_4.txt";

import Example5 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/litellm_1.py";
import Example6 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/litellm_2.py";

## OpenAI

### Prerequisites

### Install Clarifai Package

Install the latest version of the Clarifai [Python](https://github.com/Clarifai/clarifai-python/) SDK package:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

#### Get a PAT Key

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

#### Install Openai Package

Install the `openai` package:

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-bash"> pip install openai </CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js">
    <CodeBlock className="language-bash"> npm install openai </CodeBlock>
</TabItem>
</Tabs>

### Example

Here is an example that uses the OpenAI Python client library to interact with a Clarifai model via Clarifai's OpenAI-compatible API endpoint.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example1}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{TSExample1}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">Assistant's Response:
I'm Claude, an AI assistant created by Anthropic. I'm here to help with a wide variety of tasks like answering questions, helping with analysis and research, creative projects, math and coding, and having conversations. Is there something specific I can help you with today?</CodeBlock>
</details>

### Tool Calling

Tool calling (formerly known as function calling) enables large language models (LLMs) to autonomously decide when and how to invoke external tools — such as APIs or custom functions — based on user input.

With Clarifai’s support for OpenAI-compatible APIs, you can seamlessly integrate tool-calling capabilities using your existing OpenAI workflows, while leveraging Clarifai-hosted or custom models.

Here is an example code that sets up a basic tool-calling interaction. It simulates a weather API and shows how the LLM would "call" that tool when asked about the weather.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example2}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{TSExample2}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Tool Calling Implementation Example</summary>
    <CodeBlock className="language-python">{Example3}</CodeBlock>
    <CodeBlock className="language-text">{Example4}</CodeBlock>
</details>

## LiteLLM

You can use the [LiteLLM Python SDK](https://github.com/BerriAI/litellm) to directly route inference requests to their Clarifai-hosted models. This provides a lightweight, OpenAI-compatible interface for interacting with Clarifai's powerful LLMs using a single, unified API.

To use Clarifai models via LiteLLM, you'll need to:

- Install the Clarifai package and get a PAT key as mentioned earlier.
- Install LiteLLM by running `pip install litellm`.
- Specify Clarifai models by using the model path prefixed with `openai/` followed by the Clarifai model URL (e.g., `openai/https://clarifai.com/...`).

### Example

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example5}</CodeBlock>
</TabItem>
</Tabs>

### Tool Calling

Clarifai models accessed via LiteLLM also support tool calling.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example6}</CodeBlock>
</TabItem>
</Tabs>
