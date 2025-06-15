---
description: Use LangChain to interact with Clarifai LLMs
sidebar_position: 1
---

# LLM Models

**Use LangChain to interact with Clarifai LLMs**
<hr />

Let’s illustrate how you can use LangChain to interact with Clarifai LLMs (large language models) and complete various tasks, such as text classification, sentiment analysis, text generation, text summarisation, question answering, and many more.  

### Prerequisites

- Python development environment
- Get a PAT (Personal Access Token) from the Clarifai’s portal under the [Settings/Security](https://clarifai.com/settings/security) section
- Get the ID of the user owning the model you want to use
- Get the ID of the app where the model is found
- Get the ID of the model you want to use. Large language models can be found [here](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24)
- Install the [Clarifai Python SDK](https://docs.clarifai.com/python-sdk/sdk-overview) by running `pip install clarifai`
- Install LangChain by running `pip install langchain`

:::info

You can learn how to authenticate with the Clarifai platform [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Langchain1 from "!!raw-loader!../../../code_snippets/api-guide/integrations/langchain_1.py";
import Langchain2 from "!!raw-loader!../../../code_snippets/api-guide/integrations/langchain_2.py";

import OutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/integrations/outputexample_1.txt";
import OutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/integrations/outputexample_2.txt";

Here is an example of how to use a Clarifai model and LangChain for a question answering task.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Langchain1}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample1}</CodeBlock>
</details>

:::info

You can explore the [LangChain documentation](https://api.python.langchain.com/en/latest/llms/langchain.llms.clarifai.Clarifai.html#langchain.llms.clarifai.Clarifai) to learn more on how to use the framework to interact with Clarifai’s LLMs.

:::


## Prompt template

Prompt templates are pre-defined recipes for generating prompts for large language models. With a prompt template, you can provide instructions that guide a large language model in understanding the context of the input so that it can generate relevant and coherent output.

LangChain provides the necessary tooling that lets you create and work with [prompt templates](https://python.langchain.com/docs/modules/model_io/prompts/prompt_templates/).

Here is an example of how you can use a prompt template for a question answering task.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Langchain2}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample2}</CodeBlock>
</details>