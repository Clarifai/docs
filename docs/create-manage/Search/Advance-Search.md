---
description: Learn how to perform Advanced Search
sidebar_position: 3
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeCC from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/cc.py";
import CodeCCTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/customConcepts.ts";

import CodeOR from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/or.py";
import CodeORTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/or.ts";

import CodeAND from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/and.py";
import CodeANDTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/and.ts";

import CodePG from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/pagination.py";
import CodePGTS from "!!raw-loader!../../../code_snippets/python-sdk/Search/as/pagination.ts";



import CodeOutputCC from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/as/cc.txt";
import CodeOutputOR from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/as/or.txt";
import CodeOutputAND from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/as/and.txt";
import CodeOutputPG from "!!raw-loader!../../../code_snippets/python-sdk/Search/outputs/as/pagination.txt";


# Advance Search Operations

**Learn how to perform advance search operations using Clarifai SDKs**
<hr />

In this section we are showcasing Clarifai’s  powerful capabilities for refining search results based on complex criteria. The use of AND and OR operations allows users to perform more nuanced searches, combining multiple conditions to precisely filter content. With AND, users can narrow down results to items that meet all specified criteria simultaneously, while OR expands the search scope to include items that meet any of the provided conditions. Additionally, leveraging custom concepts enables users to define their own labels or categories, further enhancing search flexibility.


## Custom Concepts

Searching with custom concepts in Clarifai involves associating user-defined labels or concepts with data, enabling more targeted searches. By specifying custom concepts like "dog," users can retrieve relevant results efficiently. This approach streamlines tasks such as content organization and classification, enhancing applications like image recognition and content moderation.

Click [here](https://docs.clarifai.com/api-guide/search/rank) to know more about Custom Concept search.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCC}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCC}</CodeBlock>
    <img src="/img/python-sdk/as_cc.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeCCTS}</CodeBlock>
</TabItem>
</Tabs>






## OR

In Clarifai, the OR search operation provides users with a flexible means to retrieve search results that satisfy one or more specified criteria. By employing the OR filter, users can broaden their search scope to include items that meet any of the provided conditions.

Click [here](https://docs.clarifai.com/api-guide/search/legacy-search/) to know more about OR search.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeOR}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputOR}</CodeBlock>
    <img src="/img/python-sdk/as_or.png" />
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeORTS}</CodeBlock>
</TabItem>
</Tabs>






## AND

In Clarifai, the AND operation allows users to refine search results by specifying multiple criteria that must all be met simultaneously. For example, if a user searches for images containing both "dog" and "deer" concepts, only images that are labeled as both dogs and deers will be returned.

Click [here](https://docs.clarifai.com/api-guide/search/legacy-search/) to know more about AND search.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAND}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAND}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeANDTS}</CodeBlock>
</TabItem>
</Tabs>




## Pagination

In Clarifai SDKs, users can set the pagination parameters like `per_page` and `page_no` for displaying the search results.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePG}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputPG}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodePGTS}</CodeBlock>
</TabItem>
</Tabs>
