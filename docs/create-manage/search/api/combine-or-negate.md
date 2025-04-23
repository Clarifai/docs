---
description: Group or separate items in your dataset
pagination_next: null
sidebar_position: 5
---

# Combine or Negate

**Group or separate items in your dataset**
<hr />

You can add together multiple search parameters to expand your search. You can even combine negated search terms for more advanced tasks.

In annotation search, `Filter` and `Rank` is a list of `Annotation` objects. Filtered annotations will be ANDed. 

:::info

The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

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

## Combine Filter and Rank 

When you combine both `Filter` and `Rank`, filter will be applied before ranking annotations. This is important because limiting the results set on large applications can speed up the overall query drastically when doing a ranking.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCombineNegate}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCombineNegate}</CodeBlock>
</TabItem>

</Tabs>

## Combine Filter by Metadata and Rank 

You can also [search over custom metadata](https://docs.clarifai.com/api-guide/search/filter#by-custom-metadata) and easily rank the results. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCombineNegate_3}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCombineNegate_3}</CodeBlock>
</TabItem>

</Tabs>

## Negate Search Criteria

You can find all the data that is NOT similar to a given criteria. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCombineNegate_2}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCombineNegate_2}</CodeBlock>
</TabItem>

</Tabs>