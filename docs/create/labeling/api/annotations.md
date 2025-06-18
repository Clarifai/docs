---
description: Label your data.
sidebar_position: 1
---


# Create Annotations

**Label your data**
<hr />

Annotations \(also known as labels\) describe your inputs. When you add inputs to your app, we will create an input level annotation for each input. This input level annotation contains any data you provided in `POST /inputs` call. Models in your default workflow can also write annotations.

Once your input is successfully indexed, you can add additional annotations, such as concepts and bounding boxes.




You can label your inputs by calling the `POST /annotations` endpoint. For example, you can add concept\(s\) to an image, draw a bounding box, or label concept\(s\) in a video frame.

When you add an annotation, the app's default workflow will be run by default. This means that any newly added annotations will be immediately available for AI based search and training.

:::tip
You can add from 1 up to 128 annotations in a single API call.
:::

Each annotation should contain at most one region. If it is a video, each annotation should contain 1 frame. If there are multiple regions in a frame you want to label, you can add multiple annotations for each region and each annotation will be contained within the same frame but in a different region.


### Annotate Images With Concepts

Below is an example of how to annotate a concept present anywhere in an image.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotateImagesConcepts}</CodeBlock>
</TabItem>

</Tabs>

### Annotate Images With Multiple Concepts

Below is an example of how to annotate an image with multiple concepts in a single API call. You can provide the concepts in a list and iterate through it.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotateImagesMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateImagesMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotateImagesMultipleConcepts}</CodeBlock>
</TabItem>

</Tabs>

### Annotate New Bounding Boxes in an Image

Below is an example of how to label a new rectangular bounding box for a region.

These are the bounding box coordinates you need to provide:

- **top_row**—The top left of the bounding box normalized to the data dimension to be within [0-1.0];
- **left_col**—The left column of the bounding box normalized to the data dimension to be within [0-1.0];
- **bottom_row**—The bottom row of the bounding box normalized to the data dimension to be within [0-1.0];
- **right_col**—The right col of the bounding box normalized to the data dimension to be within [0-1.0].

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

</Tabs>

### Annotate Polygons in an Image

Below is an example of how to provide annotations within any polygon-shaped region of an image.

These are the list of points that connect together to form a polygon:

- **row**—The row location of the point. This has a [0.0-1.0] range with 0.0 being top row and 1.0
  being the bottom row;
- **col**—The column location of the point. This has a [0.0-1.0] range with 0.0 being left col and 1.0
  being the right col;
- **z**—Depth, if applicable, of the point.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotatePolygonsImage}</CodeBlock>
</TabItem>

</Tabs>

### Annotate Existing Regions in an Image

When you add an input, detection models \(such as `Face Detection` or `General Detection`\) will detect regions in your image where there appear to be relevant objects. You can get the IDs of these detected regions by [listing model's annotations](https://docs.clarifai.com/api-guide/annotate/annotations#list-annotations).

Your labels should be contained within `Region.data`. Each annotation can only have 1 region. If you want to label multiple regions, it is possible to label multiple annotations in a single API call.

Below is an example of how to annotate existing regions in an image.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

</Tabs>

### Annotate Images With Mask

Below is an example of how to add a mask to an Image using a single API call. In this example, we provide an image mask as a `base64` string.

Click [here](https://docs.clarifai.com/portal-guide/annotate/label-types/#how-to-choose-a-label-type) to learn more about image mask annotations.
<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotateMask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavascriptAnnotateMask}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotateMask}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotateMask}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotateMask}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLAnnotateMask}</CodeBlock>
</TabItem>

</Tabs>

### Annotate Images With Different `user_id` and `status`

Each annotation is tied to a user or a model in your workflow. By default, when a user posts an annotation, this user is the owner of the annotation.

Sometimes, however, you might want to post an annotation as another user; for example, when assigning an image to another user. In such a case, you can create an annotation with another `user_id` \(and status `PENDING`\).

:::important note

Only the app owner can post an annotation with other user's `user_id`; collaborators cannot.

:::

Below is an example of how to annotate images with different `user_id` and `status`.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

</Tabs>



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonAnnotateExistingRegionsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_existing_regions_image.py";
import PythonAnnotateImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_images_concepts.py";
import PythonAnnotateImagesMultipleConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_images_multiple_concepts.py";
import PythonAnnotateImagesUserIdStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_images_user_id_status.py";
import PythonAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_new_bounding_boxes_image.py";
import PythonAnnotatePolygonsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_polygons_image.py";

import JSAnnotateExistingRegionsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_existing_regions_image.html";
import JSAnnotateImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_images_concepts.html";
import JSAnnotateImagesMultipleConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_images_multiple_concepts.html";
import JSAnnotateImagesUserIdStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_images_user_id_status.html";
import JSAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_new_bounding_boxes_image.html";
import JSAnnotatePolygonsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_polygons_image.html";

import NodeAnnotateExistingRegionsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_existing_regions_image.js";
import NodeAnnotateImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_images_concepts.js";
import NodeAnnotateImagesMultipleConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_images_multiple_concepts.js";
import NodeAnnotateImagesUserIdStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_images_user_id_status.js";
import NodeAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_new_bounding_boxes_image.js";
import NodeAnnotatePolygonsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_polygons_image.js";

import JavaAnnotateExistingRegionsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_existing_regions_image.java";
import JavaAnnotateImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_images_concepts.java";
import JavaAnnotateImagesUserIdStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_images_user_id_status.java";
import JavaAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_new_bounding_boxes_image.java";
import JavaAnnotatePolygonsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_polygons_image.java";

import PHPAnnotateExistingRegionsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_existing_regions_image.php";
import PHPAnnotateImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_images_concepts.php";
import PHPAnnotateImagesUserIdStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_images_user_id_status.php";
import PHPAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_new_bounding_boxes_image.php";
import PHPAnnotatePolygonsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_polygons_image.php";

import CurlAnnotateExistingRegionsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_existing_regions_image.sh";
import CurlAnnotateImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_images_concepts.sh";
import CurlAnnotateImagesUserIdStatus from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_images_user_id_status.sh";
import CurlAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_new_bounding_boxes_image.sh";
import CurlAnnotatePolygonsImage from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_polygons_image.sh";

import PythonAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_mask.py";
import JavascriptAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_mask.html";
import NodeAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_mask.js";
import JavaAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_mask.java";
import PHPAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_mask.php";
import CURLAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_mask.sh";

