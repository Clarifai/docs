---
description: Label your data.
sidebar_position: 3
---

# Update Annotations

Changing annotation data is possible by PATCHing existing annotations. The application owner can change any user-created annotations. Collaborators are not allowed to change annotations made by other collaborators.

Generally speaking, you should send PATCH when you want to change the data you have posted; for example, changing the concept from positive to negative or adjusting the bounding box coordinates. 

If you want to add more tags, you can always POST new annotations. There is no limit on how many annotations an input can have.

Update supports `overwrite`, `merge`, and `remove` actions. You can update from 1 up to 128 annotations in a single API call.

### Update Annotation With Concepts

Below is an example of how to update an annotation of an image with a new concept, or  change a concept value from true to false \(or vice versa\).

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

</Tabs>

### Update Annotation With Concepts in a Region

When you update region data, you must nest this new data within `region.data`. Set the `region_id` to the current `region_id` if you do not want to change or remove this region.

Below is an example of how to update annotation with concepts in a region.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

</Tabs>

### Update Annotation Region Coordinates

You can update region bounding boxes coordinates. When changing the region, you should use `overwrite` action. With `overwrite` action, you need to provide the data you want to keep in this annotation.

Below is an example of how to do that.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

</Tabs>

### Update Annotation Status

Below is an example of how to update an annotation status.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateAnnotationStatus}</CodeBlock>
</TabItem>

</Tabs>



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonUpdateAnnotationConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/update_annotation_concepts.py";
import PythonUpdateAnnotationConceptsRegion from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/update_annotation_concepts_region.py";
import PythonUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/update_annotation_region_coordinates.py";
import PythonUpdateAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/update_annotation_status.py";

import JSUpdateAnnotationConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/update_annotation_concepts.html";
import JSUpdateAnnotationConceptsRegion from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/update_annotation_concepts_region.html";
import JSUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/update_annotation_region_coordinates.html";
import JSUpdateAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/update_annotation_status.html";

import NodeUpdateAnnotationConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/update_annotation_concepts.js";
import NodeUpdateAnnotationConceptsRegion from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/update_annotation_concepts_region.js";
import NodeUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/update_annotation_region_coordinates.js";
import NodeUpdateAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/update_annotation_status.js";

import JavaUpdateAnnotationConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/update_annotation_concepts.java";
import JavaUpdateAnnotationConceptsRegion from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/update_annotation_concepts_region.java";
import JavaUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/update_annotation_region_coordinates.java";
import JavaUpdateAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/update_annotation_status.java";

import PHPUpdateAnnotationConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/update_annotation_concepts.php";
import PHPUpdateAnnotationConceptsRegion from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/update_annotation_concepts_region.php";
import PHPUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/update_annotation_region_coordinates.php";
import PHPUpdateAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/update_annotation_status.php";

import CurlUpdateAnnotationConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/update_annotation_concepts.sh";
import CurlUpdateAnnotationConceptsRegion from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/update_annotation_concepts_region.sh";
import CurlUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/update_annotation_region_coordinates.sh";
import CurlUpdateAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/update_annotation_status.sh";

import PythonAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_mask.py";
import JavascriptAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_mask.html";
import NodeAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_mask.js";
import JavaAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_mask.java";
import PHPAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_mask.php";
import CURLAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_mask.sh";

