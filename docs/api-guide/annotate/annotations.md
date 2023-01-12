---
description: Label your data.
sidebar_position: 1
---

# Annotations

**Label your data**
<hr />

Annotations \(also known as labels\) describe your inputs. When you add inputs to your app, we will create an input level annotation for each input. This input level annotation contains any data you provided in `POST /inputs` call. Models in your default workflow can also write annotations.

Once your input is successfully indexed, you can add additional annotations, such as concepts and bounding boxes.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonAnnotateExistingRegionsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/annotate_existing_regions_image.py";
import PythonAnnotateImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/annotate_images_concepts.py";
import PythonAnnotateImagesMultipleConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/annotate_images_multiple_concepts.py";
import PythonAnnotateImagesUserIdStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/annotate_images_user_id_status.py";
import PythonAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/annotate_new_bounding_boxes_image.py";
import PythonAnnotatePolygonsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/annotate_polygons_image.py";
import PythonbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/bulk_delete_annotations_input_annotation_ids.py";
import PythonBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/bulk_delete_annotations_input_ids.py";
import PythonDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/delete_annotation_input_annotation_ids.py";
import PythonListAllAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/list_all_annotations_app.py";
import PythonListAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/list_annotations_input_annotation_ids.py";
import PythonListAnnotationsModelVersionIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/list_annotations_model_version_ids.py";
import PythonListAnnotationsUserIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/list_annotations_user_ids.py";
import PythonlistUserCreatedAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/list_user_created_annotations_app.py";
import PythonListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/list_user_created_annotations_input_ids.py";
import PythonUpdateAnnotationConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/update_annotation_concepts.py";
import PythonUpdateAnnotationConceptsRegion from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/update_annotation_concepts_region.py";
import PythonUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/update_annotation_region_coordinates.py";
import PythonUpdateAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/py/update_annotation_status.py";

import JSAnnotateExistingRegionsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/annotate_existing_regions_image.html";
import JSAnnotateImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/annotate_images_concepts.html";
import JSAnnotateImagesMultipleConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/annotate_images_multiple_concepts.html";
import JSAnnotateImagesUserIdStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/annotate_images_user_id_status.html";
import JSAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/annotate_new_bounding_boxes_image.html";
import JSAnnotatePolygonsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/annotate_polygons_image.html";
import JSbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/bulk_delete_annotations_input_annotation_ids.html";
import JSBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/bulk_delete_annotations_input_ids.html";
import JSDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/delete_annotation_input_annotation_ids.html";
import JSListAllAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/list_all_annotations_app.html";
import JSListAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/list_annotations_input_annotation_ids.html";
import JSListAnnotationsModelVersionIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/list_annotations_model_version_ids.html";
import JSListAnnotationsUserIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/list_annotations_user_ids.html";
import JSlistUserCreatedAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/list_user_created_annotations_app.html";
import JSListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/list_user_created_annotations_input_ids.html";
import JSUpdateAnnotationConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/update_annotation_concepts.html";
import JSUpdateAnnotationConceptsRegion from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/update_annotation_concepts_region.html";
import JSUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/update_annotation_region_coordinates.html";
import JSUpdateAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/js/update_annotation_status.html";

import NodeAnnotateExistingRegionsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/annotate_existing_regions_image.js";
import NodeAnnotateImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/annotate_images_concepts.js";
import NodeAnnotateImagesMultipleConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/annotate_images_multiple_concepts.js";
import NodeAnnotateImagesUserIdStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/annotate_images_user_id_status.js";
import NodeAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/annotate_new_bounding_boxes_image.js";
import NodeAnnotatePolygonsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/annotate_polygons_image.js";
import NodebulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/bulk_delete_annotations_input_annotation_ids.js";
import NodeBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/bulk_delete_annotations_input_ids.js";
import NodeDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/delete_annotation_input_annotation_ids.js";
import NodeListAllAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/list_all_annotations_app.js";
import NodeListAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/list_annotations_input_annotation_ids.js";
import NodeListAnnotationsModelVersionIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/list_annotations_model_version_ids.js";
import NodeListAnnotationsUserIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/list_annotations_user_ids.js";
import NodelistUserCreatedAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/list_user_created_annotations_app.js";
import NodeListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/list_user_created_annotations_input_ids.js";
import NodeUpdateAnnotationConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/update_annotation_concepts.js";
import NodeUpdateAnnotationConceptsRegion from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/update_annotation_concepts_region.js";
import NodeUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/update_annotation_region_coordinates.js";
import NodeUpdateAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/node/update_annotation_status.js";

import JavaAnnotateExistingRegionsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/annotate_existing_regions_image.java";
import JavaAnnotateImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/annotate_images_concepts.java";
import JavaAnnotateImagesUserIdStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/annotate_images_user_id_status.java";
import JavaAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/annotate_new_bounding_boxes_image.java";
import JavaAnnotatePolygonsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/annotate_polygons_image.java";
import JavabulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/bulk_delete_annotations_input_annotation_ids.java";
import JavaBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/bulk_delete_annotations_input_ids.java";
import JavaDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/delete_annotation_input_annotation_ids.java";
import JavaListAllAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/list_all_annotations_app.java";
import JavaListAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/list_annotations_input_annotation_ids.java";
import JavaListAnnotationsModelVersionIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/list_annotations_model_version_ids.java";
import JavaListAnnotationsUserIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/list_annotations_user_ids.java";
import JavalistUserCreatedAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/list_user_created_annotations_app.java";
import JavaListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/list_user_created_annotations_input_ids.java";
import JavaUpdateAnnotationConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/update_annotation_concepts.java";
import JavaUpdateAnnotationConceptsRegion from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/update_annotation_concepts_region.java";
import JavaUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/update_annotation_region_coordinates.java";
import JavaUpdateAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/java/update_annotation_status.java";

import PHPAnnotateExistingRegionsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/annotate_existing_regions_image.php";
import PHPAnnotateImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/annotate_images_concepts.php";
import PHPAnnotateImagesUserIdStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/annotate_images_user_id_status.php";
import PHPAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/annotate_new_bounding_boxes_image.php";
import PHPAnnotatePolygonsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/annotate_polygons_image.php";
import PHPbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/bulk_delete_annotations_input_annotation_ids.php";
import PHPBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/bulk_delete_annotations_input_ids.php";
import PHPDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/delete_annotation_input_annotation_ids.php";
import PHPListAllAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/list_all_annotations_app.php";
import PHPListAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/list_annotations_input_annotation_ids.php";
import PHPListAnnotationsModelVersionIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/list_annotations_model_version_ids.php";
import PHPListAnnotationsUserIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/list_annotations_user_ids.php";
import PHPlistUserCreatedAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/list_user_created_annotations_app.php";
import PHPListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/list_user_created_annotations_input_ids.php";
import PHPUpdateAnnotationConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/update_annotation_concepts.php";
import PHPUpdateAnnotationConceptsRegion from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/update_annotation_concepts_region.php";
import PHPUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/update_annotation_region_coordinates.php";
import PHPUpdateAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/php/update_annotation_status.php";

import CurlAnnotateExistingRegionsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/annotate_existing_regions_image.sh";
import CurlAnnotateImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/annotate_images_concepts.sh";
import CurlAnnotateImagesUserIdStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/annotate_images_user_id_status.sh";
import CurlAnnotateNewBoundingBoxesImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/annotate_new_bounding_boxes_image.sh";
import CurlAnnotatePolygonsImage from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/annotate_polygons_image.sh";
import CurlbulkDeleteAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/bulk_delete_annotations_input_annotation_ids.sh";
import CurlBulkDeleteAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/bulk_delete_annotations_input_ids.sh";
import CurlDeleteAnnotationInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/delete_annotation_input_annotation_ids.sh";
import CurlListAllAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/list_all_annotations_app.sh";
import CurlListAnnotationsInputAnnotationIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/list_annotations_input_annotation_ids.sh";
import CurlListAnnotationsModelVersionIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/list_annotations_model_version_ids.sh";
import CurlListAnnotationsUserIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/list_annotations_user_ids.sh";
import CurllistUserCreatedAnnotationsApp from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/list_user_created_annotations_app.sh";
import CurlListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/list_user_created_annotations_input_ids.sh";
import CurlUpdateAnnotationConcepts from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/update_annotation_concepts.sh";
import CurlUpdateAnnotationConceptsRegion from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/update_annotation_concepts_region.sh";
import CurlUpdateAnnotationRegionCoordinates from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/update_annotation_region_coordinates.sh";
import CurlUpdateAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/annotate/curl/update_annotation_status.sh";

## Add Annotations

You can label your inputs by calling the `POST /annotations` endpoint. For example, you can add concept\(s\) to an image, draw a bounding box, or label concept\(s\) in a video frame.

When you add an annotation, the app's default workflow will be run by default. This means that any newly added annotations will be immediately available for AI based search and training.

:::tip
You can add from 1 up to 128 annotations in a single API call.
:::

Each annotation should contain at most one region. If it is a video, each annotation should contain 1 frame. If there are multiple regions in a frame you want to label, you can add multiple annotations for each region and each annotation will be contained within the same frame but in a different region.

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions)

:::

### Annotate Images With Concepts

Below is an example of how to annotate a concept present anywhere in an image.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAnnotateImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotateImagesConcepts}</CodeBlock>
</TabItem>

</Tabs>

### Annotate Images With Multiple Concepts

Below is an example of how to annotate an image with multiple concepts in a single API call. You can provide the concepts in a list and iterate through it.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateImagesMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateImagesMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAnnotateNewBoundingBoxesImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAnnotatePolygonsImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotateExistingRegionsImage}</CodeBlock>
</TabItem>

</Tabs>

### Annotate Images With Different `user_id` and `status`

Each annotation is tied to a user or a model in your workflow. By default, when a user posts an annotation, this user is the owner of the annotation. 

Sometimes, however, you might want to post an annotation as another user; for example, when assigning an image to another user. In such a case, you can create an annotation with another `user_id` \(and status `PENDING`\).

:::important note

Only the app owner can post an annotation with other user's `user_id`; collaborators cannot.

:::

Below is an example of how to annotate images with different `user_id` and `status`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotateImagesUserIdStatus}</CodeBlock>
</TabItem>

</Tabs>

## List Annotations

You can get a list of annotations within your app with a GET call. Annotations will be returned from oldest to newest.

These requests are [paginated](https://docs.clarifai.com/api-guide/advanced-topics/pagination). By default each page will return 20 annotations.

### List All User Created Annotations in Your App

Below is an example of how to list all your user labelled annotations.

:::important note

This will not show annotations by models in your workflow. To include model created annotations, you need to set `list_all_annotations` to `True`.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonlistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSlistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodelistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavalistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPlistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurllistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

</Tabs>

### List All Annotations in Your App

Below is an example of how to list all annotations, including those created by models.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAllAnnotationsApp}</CodeBlock>
</TabItem>

</Tabs>

### List User Created Annotations by Input IDs

Below is an example of how to list all user created annotations for certain input \(one or several\) by providing a list of input IDs.

:::important note

This will not show annotations by models in your workflow. To include model created annotations, you need to set `list_all_annotations` to `True`.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

</Tabs>

### List Annotations by Input IDs and Annotation IDs

You can list annotations by input IDs and their corresponding annotation IDs. Number of input IDs and annotation IDs should be the same. Since we are finding annotation by IDs, this will match any user or model created annotations.

Below is an example of how to do that.

:::tip

- When listing annotations, both input IDs and annotation IDs are optional. If you do not provide any input ID or annotation ID, we will return all annotations based on the creation time of each input. 

- You can also list annotations by providing input IDs only. 

- However, if you want to list annotations by providing annotation IDs, then input IDs are also required so that we know the inputs that correspond to the annotation IDs provided in the request. In this case, the number of input IDs should be equal to the number of annotation IDs. 

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

</Tabs>

### List Annotations by User IDs

An annotation is created by either a user or a model. You can list annotations created by specific user\(s\) by providing their user IDs.

Below is an example of how to do that.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAnnotationsUserIds}</CodeBlock>
</TabItem>

</Tabs>

### List Annotations by Model Version IDs

An annotation is created by either a user or a model. For example, if your workflow has a detection model, when you add an input, the model will detect objects in your input. You can see these detected objects by listing the annotations created in the detection model. 

You can also label these regions by using `Post annotation` with the region ID returned from this call.

Below is an example of how to list annotations by model version IDs.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

</Tabs>

## Update Annotations

Changing annotation data is possible by PATCHing existing annotations. The application owner can change any user-created annotations. Collaborators are not allowed to change annotations made by other collaborators.

Generally speaking, you should send PATCH when you want to change the data you have posted; for example, changing the concept from positive to negative or adjusting the bounding box coordinates. 

If you want to add more tags, you can always POST new annotations. There is no limit on how many annotations an input can have.

Update supports `overwrite`, `merge`, and `remove` actions. You can update from 1 up to 128 annotations in a single API call.

### Update Annotation With Concepts

Below is an example of how to update an annotation of an image with a new concept, or  change a concept value from true to false \(or vice versa\).

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateAnnotationConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateAnnotationConceptsRegion}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateAnnotationRegionCoordinates}</CodeBlock>
</TabItem>

</Tabs>

### Update Annotation Status

Below is an example of how to update an annotation status.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPUpdateAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateAnnotationStatus}</CodeBlock>
</TabItem>

</Tabs>

## Delete Annotations

### Delete Annotation by Input ID and Annotation ID

Below is an example of how to delete a single annotation by input ID and annotation ID.


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteAnnotationInputAnnotationIds}</CodeBlock>
</TabItem>

</Tabs>

### Bulk Delete Annotations by Input IDs and Annotation IDs

You can delete multiple annotations in one API call. You need to provide a list of input IDs and a list of annotation IDs. The number of input IDs has to match the number of annotation IDs.

Below is an example of how to do that. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodebulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavabulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlbulkDeleteAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

</Tabs>

### Bulk Delete All Annotations by Input IDs

To delete all annotations of a given input, you just need to set their input ID\(s\). This will delete all annotations for these input\(s\), EXCEPT the input level annotations, which only get deleted if you delete the inputs themselves.

Below is an example of how to do that. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlBulkDeleteAnnotationsInputIds}</CodeBlock>
</TabItem>

</Tabs>