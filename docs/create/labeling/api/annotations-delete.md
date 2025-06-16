---
description: Label your data.
sidebar_position: 4
---

# Delete Annotations

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::


### Delete Annotation by Input ID and Annotation ID

Below is an example of how to delete a single annotation by input ID and annotation ID.


<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

</Tabs>

### Bulk Delete Annotations by Input IDs and Annotation IDs

You can delete multiple annotations in one API call. You need to provide a list of input IDs and a list of annotation IDs. The number of input IDs has to match the number of annotation IDs.

Below is an example of how to do that. 

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodebulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavabulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

</Tabs>

### Bulk Delete All Annotations by Input IDs

To delete all annotations of a given input, you just need to set their input ID\(s\). This will delete all annotations for these input\(s\), EXCEPT the input level annotations, which only get deleted if you delete the inputs themselves.

Below is an example of how to do that. 

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

</Tabs>



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/bulk_delete_annotations_input_annotation_ids.py";
import PythonBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/bulk_delete_annotations_input_ids.py";
import PythonDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/delete_annotation_input_annotation_ids.py";

import JSbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/bulk_delete_annotations_input_annotation_ids.html";
import JSBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/bulk_delete_annotations_input_ids.html";
import JSDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/delete_annotation_input_annotation_ids.html";

import NodebulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/bulk_delete_annotations_input_annotation_ids.js";
import NodeBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/bulk_delete_annotations_input_ids.js";
import NodeDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/delete_annotation_input_annotation_ids.js";

import JavabulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/bulk_delete_annotations_input_annotation_ids.java";
import JavaBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/bulk_delete_annotations_input_ids.java";
import JavaDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/delete_annotation_input_annotation_ids.java";

import PHPbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/bulk_delete_annotations_input_annotation_ids.php";
import PHPBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/bulk_delete_annotations_input_ids.php";
import PHPDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/delete_annotation_input_annotation_ids.php";

import CurlbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/bulk_delete_annotations_input_annotation_ids.sh";
import CurlBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/bulk_delete_annotations_input_ids.sh";
import CurlDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/delete_annotation_input_annotation_ids.sh";

import PythonAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_mask.py";
import JavascriptAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_mask.html";
import NodeAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_mask.js";
import JavaAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_mask.java";
import PHPAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_mask.php";
import CURLAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_mask.sh";

