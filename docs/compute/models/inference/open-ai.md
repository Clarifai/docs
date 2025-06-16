---
description: Generate predictions using your deployed models
sidebar_position: 1.1
toc_max_heading_level: 4
---

# OpenAI Inferences

**Make inferences with Clarifai using an OpenAI-compatible format**
<hr />

Clarifai provides an OpenAI-compatible API endpoint, which allows you to apply the widely adopted OpenAI standard to interact with Clarifai models. Any OpenAI-compatible library can use this endpoint to send requests to Clarifai.

With this integration capability, your existing OpenAI-compatible libraries can seamlessly connect with Clarifai's models, requiring minimal code changes.

:::info

Base URL for Clarifai's OpenAI endpoint: `https://api.clarifai.com/v2/ext/openai/v1`.

:::

This endpoint offers several advantages, including:

- **Access to diverse models** — Harness Clarifai's rich array of models directly within your OpenAI projects, expanding your AI capabilities.
- **Standardized interaction** — Interact with Clarifai-hosted models using familiar OpenAI API patterns and interfaces, reducing the learning curve and streamlining development.
- **Enhanced flexibility** — Leverage the power of Clarifai's platform while maintaining the flexibility of your chosen OpenAI development environment.

> **Note** Usage-based billing is handled directly through Clarifai — not through OpenAI or any other external tool. Also, while most OpenAI parameters are supported, certain advanced features may be unavailable depending on the specific model or endpoint.

<!--
Add Streaming heading
-->

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

import VercelExample1 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/vercel_1.ts";
import VercelExample2 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/vercel_2.ts";
import VercelExample3 from "!!raw-loader!../../../../code_snippets/python-sdk/compute-orchestration/vercel_3.ts";

## OpenAI

### Prerequisites

### Install Clarifai Package

Install the latest version of the Clarifai [Python](https://github.com/Clarifai/clarifai-python/) SDK package:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install --upgrade clarifai </CodeBlock>
</TabItem>
</Tabs>

#### Get a PAT Key

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

#### Install Openai Package

Install the `openai` package:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-bash"> pip install openai </CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js">
    <CodeBlock className="language-bash"> npm install openai </CodeBlock>
</TabItem>
</Tabs>

### Example

Here is an example that uses the OpenAI Python client library to interact with a Clarifai model via Clarifai's OpenAI-compatible API endpoint.

<Tabs groupId="code">
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

<Tabs groupId="code">
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

## Vercel AI SDK

The [Vercel AI SDK](https://vercel.com/docs/ai-sdk) provides a convenient way to interact with Clarifai's OpenAI-compatible API. You can leverage the [@ai-sdk/openai-compatible](https://www.npmjs.com/package/@ai-sdk/openai-compatible) to interact with Clarifai models.

### Example
<Tabs groupId="code">
    <TabItem value="text-response" label="Text Response">
        <CodeBlock className="language-typescript">{VercelExample1}</CodeBlock>
    </TabItem>
    <TabItem value="streaming" label="Streaming">
        <CodeBlock className="language-typescript">{VercelExample2}</CodeBlock>
    </TabItem>
    <TabItem value="tool-calling" label="Tool Calling">
        <CodeBlock className="language-typescript">{VercelExample3}</CodeBlock>
    </TabItem>
</Tabs>

<details>
    <summary>Vercel AI SDK model capabilities list</summary>
    | Model | Image Input | Tool Usage | Tool Streaming |
    | --- | --- | --- | --- |
    | [DeepSeek R1 0528 Qwen3 8B](https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-0528-Qwen3-8B) | ✅ | ✅ | ✅ |
    | [Llama 3.2 3B Instruct](https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct) | ✅ | ✅ | ✅ |
    | [claude Sonnet 4](https://clarifai.com/anthropic/completion/models/claude-sonnet-4) | ✅ | ✅ | ✅ |
    | [Qwen3 14B](https://clarifai.com/qwen/qwenLM/models/Qwen3-14B) | ✅ | ✅ | ✅ |
    | [Devstral Small 2505.gguf 4bit](https://clarifai.com/mistralai/completion/models/Devstral-Small-2505_gguf-4bit) | ✅ | ✅ | ✅ |
    | [grok 3](https://clarifai.com/xai/chat-completion/models/grok-3) | ❌ | ✅ | ✅ |
    | [gpt 4o](https://clarifai.com/openai/chat-completion/models/gpt-4o) | ✅ | ✅ | ✅ |
    | [gpt 4.1](https://clarifai.com/openai/chat-completion/models/gpt-4_1) | ✅ | ✅ | ✅ |
    | [gemini 2.5 Flash](https://clarifai.com/gcp/generate/models/gemini-2_5-flash) | ✅ | ✅ | ✅ |
    | [claude 3.5 Haiku](https://clarifai.com/anthropic/completion/models/claude-3_5-haiku) | ✅ | ✅ | ✅ |
    | [Qwen3 30B A3B GGUF](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-GGUF) | ✅ | ✅ | ✅ |
    | [gemini 2.0 Flash](https://clarifai.com/gcp/generate/models/gemini-2_0-flash) | ✅ | ✅ | ✅ |
    | [gemma 3 12b It](https://clarifai.com/gcp/generate/models/gemma-3-12b-it) | ✅ | ✅ | ✅ |
    | [Phi 4 Reasoning Plus](https://clarifai.com/microsoft/text-generation/models/Phi-4-reasoning-plus) | ✅ | ✅ | ✅ |
    | [phi 4 Mini Instruct](https://clarifai.com/microsoft/text-generation/models/phi-4-mini-instruct) | ✅ | ✅ | ✅ |
    | [Qwen2.5 VL 7B Instruct](https://clarifai.com/qwen/qwen-VL/models/Qwen2_5-VL-7B-Instruct) | ✅ | ❌ | ❌ |
    | [phi 4](https://clarifai.com/microsoft/text-generation/models/phi-4) | ✅ | ✅ | ✅ |
    | [grok 2 Vision 1212](https://clarifai.com/xai/chat-completion/models/grok-2-vision-1212) | ✅ | ✅ | ✅ |
    | [grok 2 1212](https://clarifai.com/xai/chat-completion/models/grok-2-1212) | ❌ | ✅ | ✅ |
    | [QwQ 32B AWQ](https://clarifai.com/qwen/qwenLM/models/QwQ-32B-AWQ) | ✅ | ✅ | ✅ |
    | [gemini 2.0 Flash Lite](https://clarifai.com/gcp/generate/models/gemini-2_0-flash-lite) | ✅ | ✅ | ✅ |
    | [claude Opus 4](https://clarifai.com/anthropic/completion/models/claude-opus-4) | ✅ | ✅ | ✅ |
    | [o4 Mini](https://clarifai.com/openai/chat-completion/models/o4-mini) | ✅ | ✅ | ✅ |
    | [o3](https://clarifai.com/openai/chat-completion/models/o3) | ✅ | ✅ | ✅ |
    | [MiniCPM-o 2.6 Language](https://clarifai.com/openbmb/miniCPM/models/MiniCPM-o-2_6-language) | ✅ | ❌ | ❌ |
    | [DeepSeek R1 Distill Qwen 7B](https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B) | ✅ | ❌ | ❌ |
    | [Qwen2.5 Coder 7B Instruct](https://clarifai.com/qwen/qwenCoder/models/Qwen2_5-Coder-7B-Instruct) | ✅ | ✅ | ✅ |
</details>

## LiteLLM

You can use the [LiteLLM Python SDK](https://github.com/BerriAI/litellm) to directly route inference requests to their Clarifai-hosted models. This provides a lightweight, OpenAI-compatible interface for interacting with Clarifai's powerful LLMs using a single, unified API.

To use Clarifai models via [LiteLLM](https://docs.litellm.ai/docs/providers/clarifai), you'll need to:

- Install the Clarifai package and get a PAT key as mentioned earlier.
- Install LiteLLM by running `pip install litellm`.
- Specify Clarifai models by using the model path prefixed with `openai/` followed by the Clarifai model URL (e.g., `openai/https://clarifai.com/...`).

### Example

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example5}</CodeBlock>
</TabItem>
</Tabs>

### Tool Calling

Clarifai models accessed via LiteLLM also support tool calling.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{Example6}</CodeBlock>
</TabItem>
</Tabs>
