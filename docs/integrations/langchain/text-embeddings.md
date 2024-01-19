---
description: Use Clarifai and LangChain to create text embeddings
sidebar_position: 2
---

# Text Embeddings

**Use Clarifai and LangChain to create text embeddings**
<hr />

Embeddings create a vector representation of textual content. This is beneficial because it implies we can conceptualize text within a vector space, and facilitate tasks such as semantic search where we look for pieces of text that exhibit the highest similarity within that vector space. 

Let’s illustrate how you can use LangChain to interact with Clarifai models and create text embeddings. 

### Prerequisites

- Python development environment
- Get a PAT (Personal Access Token) from the Clarifai’s portal under the [Settings/Security](https://clarifai.com/settings/security) section
- Get the ID of the user owning the model you want to use
- Get the ID of the app where the model is found
- Get the ID of the model you want to use. Text embedding models can be found [here](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-embedder%22%5D%7D%5D)
- Install the [Clarifai Python SDK](https://docs.clarifai.com/python-sdk/sdk-overview) by running `pip install clarifai`
- Install LangChain by running `pip install langchain`

:::info

You can learn how to authenticate with the Clarifai platform [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

:::
  
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Langchain3 from "!!raw-loader!../../../code_snippets/api-guide/integrations/langchain_3.py";

import OutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/integrations/outputexample_3.txt";

Here is how you can create text embeddings.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Langchain3}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample3}</CodeBlock>
</details>

:::info

You can explore the [LangChain documentation](https://python.langchain.com/docs/integrations/text_embedding/clarifai) to learn more on how to use the framework with Clarifai for text embedding tasks.

:::
