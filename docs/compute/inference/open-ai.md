---
description: Run inferences on Clarifai models using OpenAI 
sidebar_position: 2
toc_max_heading_level: 4
---

# OpenAI

**Run inferences on Clarifai models using OpenAI**
<hr />

You can run inferences on Clarifai-hosted models using the OpenAI client library by leveraging the Clarifai’s OpenAI-compatible API endpoint.

This allows you to use the same code and tools you would with OpenAI, in either Python or JavaScript, by simply configuring the client to point to Clarifai and providing your PAT (Personal Access Token) key.

:::tip

[Click here](https://github.com/Clarifai/examples/tree/main/models/model_predict) for additional examples on how to perform model predictions using various SDKs — such as the Clarifai SDK, OpenAI client, and LiteLLM. The examples demonstrate various model types and include both streaming and non-streaming modes, as well as tool calling capabilities.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PyOpenAI from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/openai_1.py";
import NodeOpenAI from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/openai_1.ts";
import PyOpenAIStreaming from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_streaming.py";
import Example2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/openai_2.py";
import TSExample2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/openai_2.ts";
import Example3 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/openai_3.py";
import Example4 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/openai_4.txt";
import PyImageGeneration from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_image_generation.py";
import PyResponses from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_responses.py";

## Prerequisites

### Install OpenAI Package

Install the `openai` package.

<Tabs groupId="code">
<TabItem value="bash" label="Python">
    <CodeBlock className="language-bash"> pip install openai </CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js">
    <CodeBlock className="language-bash"> npm install openai </CodeBlock>
</TabItem>
</Tabs>

### Get a PAT Key

You need a [PAT](https://docs.clarifai.com/control/authentication/pat) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

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
  <summary>Some Clarifai models that support OpenAI</summary>
    <CodeBlock className="language-python">https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-0528-Qwen3-8B
https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct
https://clarifai.com/anthropic/completion/models/claude-sonnet-4
https://clarifai.com/qwen/qwenLM/models/Qwen3-14B
https://clarifai.com/mistralai/completion/models/Devstral-Small-2505_gguf-4bit
https://clarifai.com/clarifai/main/models/general-image-recognition
https://clarifai.com/xai/chat-completion/models/grok-3
https://clarifai.com/openai/chat-completion/models/gpt-4o
https://clarifai.com/openai/chat-completion/models/gpt-4_1
https://clarifai.com/gcp/generate/models/gemini-2_5-flash
https://clarifai.com/anthropic/completion/models/claude-3_5-haiku
https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-GGUF
https://clarifai.com/gcp/generate/models/gemini-2_0-flash
https://clarifai.com/gcp/generate/models/gemma-3-12b-it
https://clarifai.com/microsoft/text-generation/models/Phi-4-reasoning-plus
https://clarifai.com/openbmb/miniCPM/models/MiniCPM3-4B
https://clarifai.com/microsoft/text-generation/models/phi-4-mini-instruct
https://clarifai.com/qwen/qwen-VL/models/Qwen2_5-VL-7B-Instruct
https://clarifai.com/microsoft/text-generation/models/phi-4
https://clarifai.com/xai/chat-completion/models/grok-2-vision-1212
https://clarifai.com/xai/image-generation/models/grok-2-image-1212
https://clarifai.com/xai/chat-completion/models/grok-2-1212
https://clarifai.com/qwen/qwenLM/models/QwQ-32B-AWQ
https://clarifai.com/gcp/generate/models/gemini-2_0-flash-lite
https://clarifai.com/anthropic/completion/models/claude-opus-4
https://clarifai.com/openai/chat-completion/models/o4-mini
https://clarifai.com/openai/chat-completion/models/o3
https://clarifai.com/openbmb/miniCPM/models/MiniCPM-o-2_6-language
https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B
https://clarifai.com/qwen/qwenCoder/models/Qwen2_5-Coder-7B-Instruct</CodeBlock>    
</details>

## Chat Completions

The OpenAI [Chat Completions](https://platform.openai.com/docs/api-reference/chat) API endpoint enables you to generate a model response by providing a list of messages that constitute a conversation.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyOpenAI}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{NodeOpenAI}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">I'm Claude, an AI assistant created by Anthropic. I'm here to help with a wide variety of tasks like answering questions, helping with analysis and research, creative writing, math and coding problems, and having conversations. Is there something specific I can help you with today?</CodeBlock>
</details>

<!--
## Responses

The OpenAI [Responses](https://platform.openai.com/docs/api-reference/responses) API endpoint enables you to take advantage of the latest OpenAI platform features. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyResponses}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text"> </CodeBlock>
</details>

-->

## Streaming

Clarifai offers support for streaming — the response is streamed back token by token, rather than waiting for the entire completion to be generated before returning. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyOpenAIStreaming}</CodeBlock>
</TabItem>
</Tabs>

## Tool Calling

Tool calling (also known as function calling) enables LLMs to autonomously decide when and how to invoke external tools — such as APIs or custom functions — based on user input.

Here is an example code that sets up a basic tool-calling interaction. It simulates a weather API and shows how the LLM would "call" that tool when asked about the weather.

<Tabs groupId="code">
<TabItem value="python" label="Python">
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

## Image Generation

Here is an example of how to generate an image using a model that supports Clarifai's OpenAI-compatible API endpoint.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyImageGeneration}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">ImagesResponse(created=None, data=[Image(b64_json=None, revised_prompt='A high-resolution photograph of a cat perched on a branch in a lush, green tree during the daytime. The cat, possibly a tabby, is the central focus of the image, looking slightly to the side with its fur naturally positioned. The background features a soft, slightly blurred forest setting with sunlight filtering through the leaves, creating a serene and natural environment. The composition avoids any distracting elements, ensuring the cat remains the primary subject in a peaceful outdoor scene.', url='https://imgen.x.ai/xai-imgen/xai-tmp-imgen-41202340-c0e1-4669-bed5-e70f7b491176.jpeg')], usage=None)</CodeBlock>
</details>

