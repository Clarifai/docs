---
description: Run inferences on Clarifai models using OpenAI 
sidebar_position: 2
toc_max_heading_level: 4
---

# OpenAI

**Run inferences on Clarifai models using OpenAI**
<hr />

You can run inferences on Clarifai-hosted models using the OpenAI client library by leveraging the Clarifai’s [OpenAI-compatible API endpoint](README.mdx#predict-with-openai-compatible-format).

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
import PyEmbeddings from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_embeddings.py";
import PyResponses from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_responses.py";
import PyMultimodal from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_multimodal.py";
import PyResponsesMultimodal from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_responses_multimodal.py";
import PyResponsesStreaming from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_responses_streaming.py";
import PyResponsesToolCalling from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_ai_responses_tool_calling.py";
import ResponsesToolCallingExample from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/responses_tool_calling_1.py";
import ToolCallingOutput1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/tool_calling_output_1.txt";
import CurlOpenAIText from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/curl_openai_text.sh";
import PyStandardJSON from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/py_standard_json.py";
import PyPydanticIntegrated from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/py_pydantic_integrated.py";

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

You need a [Personal Access Token (PAT)](https://docs.clarifai.com/control/authentication/pat) key to authenticate your connection to the Clarifai platform. You can get one by navigating to **Settings** in the collapsible left sidebar, selecting **Secrets**, and creating or copying an existing token from there.

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
    <CodeBlock className="language-python">https://clarifai.com/openai/chat-completion/models/gpt-oss-120b
https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-0528-Qwen3-8B
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

## Responses API

The [OpenAI Responses](https://platform.openai.com/docs/api-reference/responses) API endpoint provides a powerful interface for generating model responses, allowing you to leverage OpenAI's most advanced capabilities.

It’s highly versatile, supporting both text and image inputs and producing text outputs, as well as advanced features like streaming and tool calling.

### Text Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyResponses}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">Under a silver‑shimmering moon, a gentle unicorn named Lira tiptoed into the sleepy meadow, her horn casting soft, glittering lullabies over the swaying wildflowers. As the night wind whispered sweet dreams, she gathered a handful of moon‑kissed dew and sprinkled it over the slumbering forest creatures, coax</CodeBlock>
</details>

<!--
### Multimodal Inputs

The OpenAI Responses API supports multimodal inputs, letting you combine text and images in a single request to get more advanced responses.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyResponsesMultimodal}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text"></CodeBlock>
</details>

### Streaming

The OpenAI Responses API supports supports streaming, which means you get the response one token at a time instead of waiting for the full completion. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyResponsesStreaming}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text"></CodeBlock>
</details>

### Tool Calling

The OpenAI Responses API supports supports tool calling (also known as function calling), allowing you to enable large language models (LLMs) to interact with external tools. 

Based on user input, the LLM can autonomously decide when and how to invoke functions — such as fetching real-time data from an API or running custom code.

The following example demonstrates a simple tool-calling interaction. It simulates a weather API and shows how the model automatically “calls” that tool when asked about the weather.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyResponsesToolCalling}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text"></CodeBlock>
</details>

<details>
  <summary>Tool Calling Implementation Example</summary>
    <CodeBlock className="language-python">{ResponsesToolCallingExample}</CodeBlock>
    <CodeBlock className="language-text"></CodeBlock>
</details>
-->

## Chat Completions API

The [OpenAI Chat Completions](https://platform.openai.com/docs/api-reference/chat) API endpoint enables you to generate a model response by providing a list of messages that constitute a conversation.

### Text Inputs

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyOpenAI}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{NodeOpenAI}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlOpenAIText}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">I’m ChatGPT, an AI language model created by OpenAI. I’ve been trained on a wide range of text so I can help answer questions, brainstorm ideas, explain concepts, and assist with many other tasks. Think of me as a virtual assistant you can chat with—</CodeBlock>
</details>

### Multimodal Inputs

The OpenAI Chat Completions API supports multimodal inputs.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyMultimodal}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">Response: The image shows a ginger tabby cat lying down on a stone surface. The cat has a striped pattern on its fur and is looking directly at the camera with alert, bright eyes. The background features a textured wall, and the lighting highlights the cat's features, giving a warm and cozy atmosphere.</CodeBlock>
</details>


### Streaming

The OpenAI Chat Completions API supports streaming. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyOpenAIStreaming}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">Assistant's Response:
I’m ChatGPT, an AI language model created by OpenAI. I’ve been trained on a wide range of text data so I can help answer questions, explain concepts, brainstorm ideas, draft writing, solve problems, and more. Think of me as a virtual assistant that can converse with you on many topics—</CodeBlock>
</details>

### Tool Calling

The OpenAI Chat Completions API supports tool calling (also known as function calling). 

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
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{ToolCallingOutput1}</CodeBlock>
</details>

<details>
  <summary>Tool Calling Implementation Example</summary>
    <CodeBlock className="language-python">{Example3}</CodeBlock>
    <CodeBlock className="language-text">{Example4}</CodeBlock>
</details>

### Structured Outputs

The Chat Completions API supports generating structured JSON outputs from any [supported](#get-a-clarifai-model) OpenAI-compatible large language model.

This feature lets you go beyond plain text generation by enforcing that the model’s output follows a strict, predictable data structure. Structured responses make it easier to integrate model outputs into downstream applications with greater safety, consistency, and reliability.

To define, validate, and serialize these structured responses, [Pydantic](https://docs.pydantic.dev/latest/) is used — a powerful data modeling library for Python. 

You can install Pydantic with:

```bash
pip install pydantic
```

We support two main ways of generating the structured JSON responses: 

- Standard JSON schema extraction 

- Pydantic-integrated extraction.

#### Standard JSON Schema Extraction

This technique calls the chat completion endpoint and explicitly requests the model to return its response in a [JSON](https://json-schema.org/) format that conforms to a specified Pydantic schema.


<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyStandardJSON}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    ```text
 {"age": 29, "email": "john.miller@example.com", "name": "John Miller"}
```
</details>

#### Pydantic-Integrated Extraction

This technique uses a convenience method (`client.chat.completions.parse`) that handles the structured output request and attempts to automatically parse the JSON response into a Pydantic object, simplifying the extraction process.


<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyPydanticIntegrated}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
```text
name='John Miller' age=29 email='john.miller@example.com'
```
</details>


## Images Generate API 

The [OpenAI Images Generate](https://platform.openai.com/docs/api-reference/images) API endpoint enables you to generate an image by providing a prompt. 

Here is an example of how to generate an image using a model that supports Clarifai's OpenAI-compatible API endpoint.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyImageGeneration}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    ```text
    ImagesResponse(created=None, data=[Image(b64_json=None, revised_prompt='A high-resolution photograph of a cat perched on a branch in a lush, green tree during the daytime. The cat, possibly a tabby, is the central focus of the image, looking slightly to the side with its fur naturally positioned. The background features a soft, slightly blurred forest setting with sunlight filtering through the leaves, creating a serene and natural environment. The composition avoids any distracting elements, ensuring the cat remains the primary subject in a peaceful outdoor scene.', url='https://imgen.x.ai/xai-imgen/xai-tmp-imgen-41202340-c0e1-4669-bed5-e70f7b491176.jpeg')], usage=None)
    ``` 
</details>



## Embeddings API

The [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings) API allows you to convert text into numerical vector representations (embeddings) that capture semantic meaning. These embeddings can then be used to measure the similarity or relatedness between different pieces of text.

Here’s an example of how to generate embeddings using a model that supports Clarifai’s OpenAI-compatible API endpoint.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyEmbeddings}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    ```text
    [0.007715723942965269, -0.005610561463981867, 0.0038386366795748472, -0.023672660812735558, -0.0028357207775115967, 0.0058668977580964565, 0.005136339459568262, -0.029632480815052986, 0.009997117333114147, -0.027863759547472, 0.016123555600643158, 0.010894294828176498, -0.0065814354456961155, -0.03468230739235878, -0.019545646384358406, 0.003260277910158038, 0.032759785652160645, -0.006728828884661198, 0.00939472671598196, -0.020865777507424355, -0.02409561537206173, 0.01959691382944584, 0.0123361861333251, -0.003186581190675497, -0.007440162356942892, 0.016213273629546165, 0.0012400270206853747, -0.017956361174583435, 0.009266559034585953, 0.017943544313311577, 0.0027379924431443214, -0.005963024217635393, -0.03734820336103439, 0.001370598329231143, -0.014213849790394306, -0.017328336834907532, -0.019648181274533272, 0.005863693542778492, 0.003191387513652444, 0.004690954927355051, 0.003135313745588064, -0.014265117235481739, 0.012977027334272861, 0.008625717833638191, -0.04129578545689583, 0.012047807686030865, 0.007613189052790403, 0.0061424593441188335, -0.01573905162513256, -0.019276492297649384, 0.011778654530644417, -0.01596975326538086, -0.011560768820345402, -0.013201321475207806, 0.0214809849858284, 0.017174534499645233, -0.007286360487341881, -0.009708738885819912, 0.02837643213570118, -0.015290462411940098, -0.009221700020134449, 0.02190393954515457, -0.021827038377523422, -0.018379315733909607, -0.019789164885878563, -0.01197731588035822, -0.012836041860282421, 0.00048784009413793683, 0.0025665676221251488, 0.0067160120233893394, 0.0037296938244253397, 0.011150631122291088, 0.012803999707102776, -0.01639270968735218, 0.018968889489769936, -0.012880900874733925, -0.008503957651555538, 0.00356307509355247, -0.004127014894038439, . . .]
    ``` 
</details>
