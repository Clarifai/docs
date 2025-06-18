---
description: Run inferences on Clarifai models using Vercel 
sidebar_position: 3
toc_max_heading_level: 4
---

# Vercel

**Run inferences on Clarifai models using Vercel**
<hr />

Vercel offers a TypeScript toolkit called the [AI SDK](https://vercel.com/docs/ai-sdk), which streamlines integration with language models in modern web applications.

The SDK supports the [OpenAI Compatible Provider](https://ai-sdk.dev/providers/openai-compatible-providers) package that enables seamless interaction with any OpenAI-compatible API — including Clarifai’s OpenAI-compatible endpoint.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import VercelExample1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/vercel_1.ts";
import Output1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/vercel_output_1.txt";
import VercelExample2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/vercel_2.ts";
import VercelExample3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/vercel_3.ts";

## Prerequisites

### Install Packages

Install the Vercel AI SDK (`ai`) and the OpenAI Provider package for the SDK (`@ai-sdk/openai-compatible`). 

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">  npm install ai @ai-sdk/openai-compatible  </CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

You need a [PAT](https://docs.clarifai.com/control/authentication/pat) (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

You can then set the PAT as an environment variable using `CLARIFAI_PAT`:

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>


### Get a Clarifai Model

Go to the Clarifai [Community](https://clarifai.com/explore) platform and select the model you want to use for making predictions.

<details>
    <summary>Some Clarifai models that support Vercel AI SDK, and their capabilities</summary>
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

## Generating Text

Here's an example of how you can generate text using the Vercel AI SDK with a Clarifai-hosted model. 

<Tabs>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{VercelExample1}</CodeBlock>
</TabItem>
</Tabs>

<details>
    <summary>Example Output</summary>
        <CodeBlock className="language-text">{Output1}</CodeBlock>
</details>

## Streaming

You can use the Vercel AI SDK to stream responses. 

<Tabs>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{VercelExample2}</CodeBlock>
</TabItem>
</Tabs>

## Tool Calling

The Vercel AI SDK supports [tool calling](https://docs.clarifai.com/compute/models/inference/api#tool-calling). 

> **Note:** To run this example, install the Zod validation library: `npm install zod`.

<Tabs>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{VercelExample3}</CodeBlock>
</TabItem>
</Tabs>