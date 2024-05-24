---
sidebar_position: 1
description: Learn how to perform Rank Search 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeRKTXT from "!!raw-loader!../../../code_snippets/python-sdk/Search/ranks/rk_text.py";
import CodeRKTXTTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/ranks/rankWithText.ts";

import CodeIMURL from "!!raw-loader!../../../code_snippets/python-sdk/Search/ranks/rk_imurl.py";
import CodeIMURLTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/ranks/rankWithImageUrl.ts";


import CodeOutputRKTXT from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/ranks/rk_text.txt";
import CodeOutputIMURL from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/ranks/rk_imurl.txt";




# Ranks

**Learn how to perform search with ranks using Clarifai Python SDK**
<hr />

The rank feature in Clarifai allows users to specify criteria for prioritizing search results based on relevance or similarity to a reference. In the provided example, it conducts a vector search over inputs, comparing their features to those of a reference image specified by its URL. The search results are then ranked based on their similarity to the reference using the cosine metric.

Click [here](https://docs.clarifai.com/api-guide/search/rank) to know more about Rank search.


## Rank with Text

By incorporating text-based ranking, users can enhance the relevance and specificity of search results, ensuring that items closely aligned with specified textual criteria appear higher in the ranked list. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeRKTXT}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputRKTXT}</CodeBlock>
    <img src="/img/python-sdk/rk_text.png" width="700" height="700" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeRKTXTTS}</CodeBlock>
</TabItem>
</Tabs>


## Rank with Image URL

Ranking with image URL in Clarifai allows users to prioritize search results based on the similarity or relevance of images specified by their URLs.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMURL}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIMURL}</CodeBlock>
    <img src="/img/python-sdk/rk_imurl.png" width="700" height="700" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeIMURLTS}</CodeBlock>
</TabItem>
</Tabs>


