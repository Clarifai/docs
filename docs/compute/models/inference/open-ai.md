---
description: Generate predictions using your deployed models
sidebar_position: 1.1
---

# OpenAI Inferences 

**Make inferences with Clarifai using an OpenAI-compatible format**
<hr />

Clarifai provides an OpenAI-compatible API endpoint, which allows you to leverage your existing OpenAI API code and workflows to make inferences with Clarifai models, including those that integrate or wrap OpenAI models. 

The built-in compatibility layer converts your OpenAI calls directly into Clarifai API requests, letting you harness Clarifai's diverse models as custom tools in your OpenAI projects.

This simplifies the integration process, as you don't need to rewrite your code specifically for Clarifai's native API structure if you're already familiar with OpenAI's. 



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Example1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_1.py";
import Example2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_2.py";
import Example3 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_3.py";
import Example4 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/openai_4.txt";

## Prerequisites

### Install Clarifai Package

Install the latest version of the Clarifai [Python](https://github.com/Clarifai/clarifai-python/) SDK package:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security). 

### Install Openai Package

Install the `openai` package:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install openai </CodeBlock>
</TabItem>
</Tabs>

## Example

Here is an example that uses the OpenAI Python client library to interact with a Clarifai model via Clarifai's OpenAI-compatible API endpoint.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example1}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">Assistant's Response:
I'm Claude, an AI assistant created by Anthropic. I'm here to help with a wide variety of tasks like answering questions, helping with analysis and research, creative projects, math and coding, and having conversations. Is there something specific I can help you with today?</CodeBlock>
</details>

## Tool Calling

Tool calling (formerly known as function calling) enables large language models (LLMs) to autonomously decide when and how to invoke external tools — such as APIs or custom functions — based on user input. 

With Clarifai’s support for OpenAI-compatible APIs, you can seamlessly integrate tool-calling capabilities using your existing OpenAI workflows, while leveraging Clarifai-hosted or custom models. 

Here is an example code that sets up a basic tool-calling interaction. It simulates a weather API and shows how the LLM would "call" that tool when asked about the weather.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example2}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Tool Calling Implementation Example</summary>
    <CodeBlock className="language-python">{Example3}</CodeBlock>
    <CodeBlock className="language-text">{Example4}</CodeBlock>
</details>