---
description: Group or separate items in your search
sidebar_position: 3
---

# Combine or Negate

**Group or separate items in your search**
<hr />

You can add together multiple search parameters to expand your search. You can even combine negated search terms for more advanced tasks.

In annotation search, `Filter` and `Rank` is a list of `Annotation` objects. Filtered annotations will be ANDed. 

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCombineNegate from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate.py";
import NodeCombineNegate from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate.js";
import JSCombineNegate from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate.html";
import JavaCombineNegate from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate.java";
import PHPCombineNegate from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate.php";
import CurlCombineNegate from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate.sh";

import PythonCombineNegate_2 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_2.py";
import NodeCombineNegate_2 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_2.js";
import JSCombineNegate_2 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_2.html";
import JavaCombineNegate_2 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_2.java";
import PHPCombineNegate_2 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_2.php";
import CurlCombineNegate_2 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_2.sh";

import PythonCombineNegate_3 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_3.py";
import NodeCombineNegate_3 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_3.js";
import JSCombineNegate_3 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_3.html";
import JavaCombineNegate_3 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_3.java";
import PHPCombineNegate_3 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_3.php";
import CurlCombineNegate_3 from "!!raw-loader!../../../../code_snippets/api-guide/search/combine_or_negate_3.sh";

import curlDatasetSearches from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/dataset_searches.sh";

import CodeCC from "!!raw-loader!../../../../code_snippets/python-sdk/Search/as/cc.py";
import CodeCCTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/as/customConcepts.ts";

import CodeOR from "!!raw-loader!../../../../code_snippets/python-sdk/Search/as/or.py";
import CodeORTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/as/or.ts";

import CodeAND from "!!raw-loader!../../../../code_snippets/python-sdk/Search/as/and.py";
import CodeANDTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/as/and.ts";



## OR Search Operation

The **OR** filter lets you expand your search to include results that match any of the specified conditions, rather than requiring all of them to be met.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeOR}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeORTS}</CodeBlock>
</TabItem>
</Tabs>

## AND Search Operation

The **AND** operation enables you to refine search results by specifying multiple conditions that must all be satisfied at the same time. 

For example, if a user searches for images containing both the concepts "dog" and "deer," only those images labeled with both concepts will be returned.


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAND}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeANDTS}</CodeBlock>
</TabItem>
</Tabs>



## Combine Filter and Rank 

When you combine both `Filter` and `Rank`, filter will be applied before ranking annotations. This is important because limiting the results set on large applications can speed up the overall query drastically when doing a ranking.

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCC}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeCCTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCombineNegate}</CodeBlock>
</TabItem>

</Tabs>

## Combine Filter by Metadata and Rank 

You can also [search over custom metadata](https://docs.clarifai.com/api-guide/search/filter#by-custom-metadata) and easily rank the results. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCombineNegate_3}</CodeBlock>
</TabItem>

</Tabs>

## Negate Search Criteria

You can find all the data that is NOT similar to a given criteria. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCombineNegate_2}</CodeBlock>
</TabItem>

</Tabs>

## Find Duplicate Images in Dataset

Here's how you can use the `PostInputsSearches` endpoint to identify near-duplicate images within a given [dataset](https://docs.clarifai.com/create-manage/datasets/). 

You can also use the  `min_value` threshold parameter to refine the search results, ensuring that only images surpassing a specified minimum probability resemblance score are included in the output. . 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDatasetSearches}</CodeBlock>
</TabItem>

</Tabs>
