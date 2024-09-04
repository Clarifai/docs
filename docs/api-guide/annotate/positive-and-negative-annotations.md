---
description: Learn how to make positive and negative annotations
sidebar_position: 3
---

# Positive and Negative Annotations

**Learn how to make positive and negative annotations**

<hr />

Positive and negative annotations play a critical role in training machine learning models.

Positive annotations help the model identify and learn the features associated with a particular input. Negative annotations, on the other hand, help the model distinguish between similar inputs by highlighting what the input is not.

Some inputs may also have overlapping features, especially in complex datasets. Providing both positive and negative annotations reduces the risk of the model misclassifying similar but distinct inputs, leading to more precise predictions.

By annotating your data with both positive and negative labels, you provide your model with the comprehensive information it needs to learn effectively, which results in better performance and more reliable outcomes.

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions)

:::

:::warning value

- The `value` parameter is used to specify the presence of a concept in a request. A `value` of 1.0 indicates that the concept is present (true), while a `value` of 0.0 indicates that the concept is not present (false).

- When making HTTP requests, if the `value` parameter is omitted, it defaults to a positive annotation. In contrast, for gRPC requests, a missing `value` is interpreted as a negative annotation. To avoid unintended behavior, it's recommended to always explicitly set the `value` parameter in your requests.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonPositive from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/positive_negative_1.py";
import JSPositive from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/positive_negative_1.html";
import NodePositive from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/positive_negative_1.js";
import JavaPositive from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/positive_negative_1.java";
import PHPPositive from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/positive_negative_1.php";
import CurlPositive from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/positive_negative_1.sh";

import PythonNegative from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/positive_negative_2.py";
import JSNegative from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/positive_negative_2.html";
import NodeNegative from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/positive_negative_2.js";
import JavaNegative from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/positive_negative_2.java";
import PHPNegative from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/positive_negative_2.php";
import CurlNegative from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/positive_negative_2.sh";

## Positive Annotation

If an input is tagged with a positive annotation, it is considered a positive label for it. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonPositive}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPositive}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodePositive}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaPositive}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPPositive}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPositive}</CodeBlock>
</TabItem>

</Tabs>

## Negative Annotation

If an input is tagged with a negative annotation, it is treated as a negative label for that concept. It emphasizes that the input does not belong to that concept.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonNegative}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSNegative}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeNegative}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaNegative}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPNegative}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlNegative}</CodeBlock>
</TabItem>

</Tabs>