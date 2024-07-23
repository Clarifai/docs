import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeCP from "!!raw-loader!../../../code_snippets/python-sdk/litellm/completion.py";
import CodeCP2 from "!!raw-loader!../../../code_snippets/python-sdk/litellm/completion2.py";
import CodeST from "!!raw-loader!../../../code_snippets/python-sdk/litellm/streaming.py";
import CodeAC from "!!raw-loader!../../../code_snippets/python-sdk/litellm/ac.py";
import CodeAS from "!!raw-loader!../../../code_snippets/python-sdk/litellm/as.py";


import CodeOutputCP from "!!raw-loader!../../../code_snippets/python-sdk/litellm/outputs/completion.txt";
import CodeOutputCP2 from "!!raw-loader!../../../code_snippets/python-sdk/litellm/outputs/completion2.txt";
import CodeOutputST from "!!raw-loader!../../../code_snippets/python-sdk/litellm/outputs/streaming.txt";
import CodeOutputAC from "!!raw-loader!../../../code_snippets/python-sdk/litellm/outputs/ac.txt";
import CodeOutputAS from "!!raw-loader!../../../code_snippets/python-sdk/litellm/outputs/as.txt";


# Using Clarifai Models In LiteLLM
**Learn how to use Clarifai Models in LiteLLM**
<hr />

[LiteLLM](https://www.litellm.ai/) allows you to interact with LLM models from different providers. One such provider is Clarifai. Using LiteLLM users can easily use hosted LLM models in the Clarifai platform. Now let’s look at how you can use Clarifai LLMs through LiteLLM.

## Prerequisites

* Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token [here](https://docs.clarifai.com/python-sdk/sdk-overview/).

:::note
Guide to get your [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)
:::
```python
import os
#Replace your PAT
os.environ['CLARIFAI_PAT'] ="YOUR_PAT"
```
* Install the required packages.
```
!pip install litellm
!pip install clarifai
```
## Completion
The `completion` method is the core functionality of LiteLLM for interacting with large language models (LLMs) and generating text. It provides a standardized way to send prompts to various LLMs and retrieve the generated responses. You can set the `model` field as a model URL from the Clarifai platform.

Click [here](https://litellm.vercel.app/docs/completion) to learn more about completion in LiteLLM.

In the example given below, we are going to chat with the `Mistral-Large` model from Clarifai.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputCP}</CodeBlock>
</details>

Now let’s ask the same question to `Claude-2.1` model.  Claude models require special tokens as input. Therefore by using LiteLLM we are standardizing the inputs for LLM applications.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCP2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputCP2}</CodeBlock>
</details>

If you observe the above outputs, the response format from both the models is the same even though they are different LLMs. This is one of the advantages of LiteLLM.

## Streaming

When using streaming, the completion method no longer returns a single dictionary with all the responses. Instead, it returns an iterator that yields dictionaries containing partial information as the LLM generates the response.

Click [here](https://litellm.vercel.app/docs/completion/stream#streaming-responses) to learn more about streaming in LiteLLM.

:::info
Set stream=True as an argument to the completion function.
:::
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeST}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputST}</CodeBlock>
</details>


## Async Completion

Async completion in LiteLLM uses asynchronous capabilities to handle language model completions efficiently. By using async function, LiteLLM can perform non-blocking I/O operations, making it well-suited for applications that require responsive and scalable interactions with language models.

Click [here](https://litellm.vercel.app/docs/completion/stream#async-completion) to learn more about async completion in LiteLLM.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAC}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputAC}</CodeBlock>
</details>

## Async Streaming

Async streaming in LiteLLM refers to the process of handling real-time data streams asynchronously when interacting with language models. This is particularly useful for applications that need to process data as it arrives without waiting for the entire response, such as chatbots, real-time data processing systems, or live user interactions.

Click [here](https://litellm.vercel.app/docs/completion/stream#async-streaming) to learn more about async streaming in LiteLLM.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputAS}</CodeBlock>
</details>