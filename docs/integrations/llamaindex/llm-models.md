---
description: Use LangChain to interact with Clarifai LLMs
sidebar_position: 1
---
# LLM Models

**Use LlamaIndex to interact with Clarifai LLMs**
<hr />

Let’s illustrate how you can use LlamaIndex to interact with Clarifai LLMs (large language models) and complete various tasks, such as text classification, sentiment analysis, text generation, text summarisation, question answering, and many more.  

## Prerequisites

- Python development environment
- Get a PAT (Personal Access Token) from the Clarifai’s portal under the [Settings/Security](https://clarifai.com/settings/security) section
- Get the URL of the model you want to use. Large language models can be found [here](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24)
- Alternatively, get the ID of the user owning the model you want to use, the ID of the app where the model is found, and the name of the model
- Install LlamaIndex and [Clarifai Python SDK](https://docs.clarifai.com/python-sdk/sdk-overview) by running `pip install llama-index-llms-clarifai`

:::info

You can learn how to authenticate with the Clarifai platform [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

:::

:::note

Clarifai models can be referenced either through their full URL or by using the combination of user ID, app ID, and model name. If the model version is not specified, the latest version will be used by default. 

:::

## Text Completion

Here is an example of how to use a Clarifai LLM and LlamaIndex for a text completion task. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import LlamaIndex1 from "!!raw-loader!../../../code_snippets/api-guide/integrations/llamaindex_1.py";
import LlamaIndex2 from "!!raw-loader!../../../code_snippets/api-guide/integrations/llamaindex_2.py";

import OutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/integrations/llamaindex_output_1.txt";
import OutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/integrations/llamaindex_output_2.txt";


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{LlamaIndex1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample1}</CodeBlock>
</details>

## Chat

Here is an example of how to use a Clarifai LLM and LlamaIndex for a chatting task. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{LlamaIndex2}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample2}</CodeBlock>
</details>

:::info

You can explore the [LlamaIndex documentation](https://docs.llamaindex.ai/en/stable/examples/llm/clarifai.html) to learn more on how to use the framework to interact with Clarifai’s LLMs.

:::

