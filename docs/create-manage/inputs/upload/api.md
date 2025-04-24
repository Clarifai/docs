---
description: Add data to the Clarifai platform via the API
sidebar_position: 1
---

# Upload via the API

**Add data to the Clarifai platform via the API**
<hr />

:::tip Data Utils 

The Clarifai's [Data Utils library](https://docs.clarifai.com/sdk/data-utils/) allows you to effortlessly extract, transform, and load unstructured data — such as images, videos, and text — into the Clarifai platform. 

:::

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::


Note that input uploads are processed asynchronously. Your files will be indexed in the background via your app's default base workflow, which may take some time depending on volume and file types.

To verify successful indexing, you can check the [input status](https://docs.clarifai.com/create-manage/inputs/manage#get-inputs-status) for code `30000` (`INPUT_IMAGE_DOWNLOAD_SUCCESS`). This confirms the input is fully processed and ready for use.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeImageData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/image_data.py";
import CodeImageDataTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/imageDataInputs.ts";

import CodeTextData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/text_data.py";
import CodeTextDataTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/textDataInputs.ts";

import CodeAudioData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/audio_data.py";
import CodeAudioDataTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/audioDataInputs.ts";

import CodeVideoData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/video_data.py";
import CodeVideoDataTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/videoDataInputs.ts";

import CodeMMData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/multimodal_data.py";
import CodeMMDataTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/multimodalDataInputs.ts";

import CodeImageM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/image_metadata.py";
import CodeImageMTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/imageWithMetadata.ts";

import CodeVideoM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/video_metadata.py";
import CodeVideoMTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/videoWithMetadata.ts";

import CodeTextM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/text_metadata.py";
import CodeTextMTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/textWithMetadata.ts";

import CodeAudioM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/audio_data_metadata.py";
import CodeAudioMTS from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/audioWithMetadata.ts";

import CodeGeoInfo from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/geo_info.py";
import BoundingBoxAnnotation from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/bounding_box_annotation.py";
import PolygonAnnotation from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/polygon_annotation.py";
import ConceptsAnnotation from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/concepts_annotation.py";

import CodeOutputImageData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/image_data.txt";
import CodeOutputTextData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/text_data.txt";

import RemoveUnicode from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/remove_unicode.py";
import CodeOutputAudioData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/audio_data.txt";
import CodeOutputVideoData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/video_data.txt";
import CodeOutputMMData from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/multimodal_data.txt";
import CodeOutputImageM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/image_metadata.txt";
import CodeOutputVideoM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/video_metadata.txt";
import CodeOutputTextM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/text_metadata.txt";
import CodeOutputAudioM from "!!raw-loader!../../../../code_snippets/python-sdk/managing-inputs/outputs/audio_data_metadata.txt";

import PythonAddInputsViaURL from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_via_url.py";
import PythonAddInputsViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_via_bytes.py";
import PythonAddMultipleInputsIds from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/py/add_multiple_inputs_with_ids.py";
import PythonAddInputsConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_with_concepts.py";
import PythonAddInputsMultipleConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_with_multiple_concepts.py";
import PythonAddInputsCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_custom_metadata.py";

import JSAddInputsViaURL from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_via_url.html";
import JSAddInputsViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_via_bytes.html";
import JSAddMultipleInputsIds from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/js/add_multiple_inputs_with_ids.html";
import JSAddInputsConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_with_concepts.html";
import JSAddInputsMultipleConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_with_multiple_concepts.html";
import JSAddInputsCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_custom_metadata.html";

import NodeAddInputsViaURL from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_via_url.js";
import NodeAddInputsViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_via_bytes.js";
import NodeAddMultipleInputsIds from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/node/add_multiple_inputs_with_ids.js";
import NodeAddInputsConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_with_concepts.js";
import NodeAddInputsMultipleConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_with_multiple_concepts.js";
import NodeAddInputsCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_custom_metadata.js";

import JavaAddInputsViaURL from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_via_url.java";
import JavaAddInputsViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_via_bytes.java";
import JavaAddMultipleInputsIds from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/java/add_multiple_inputs_with_ids.java";
import JavaAddInputsConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_with_concepts.java";
import JavaAddInputsCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_custom_metadata.java";

import CurlAddInputsViaURL from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_via_url.sh";
import CurlAddInputsViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_via_bytes.sh";
import CurlAddMultipleInputsIds from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_multiple_inputs_with_ids.sh";
import CurlAddInputsConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_with_concepts.sh";
import CurlAddInputsCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_custom_metadata.sh";

import PHPAddInputsViaURL from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_via_url.php";
import PHPAddInputsViaBytes from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_via_bytes.php";
import PHPAddMultipleInputsIds from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/php/add_multiple_inputs_with_ids.php";
import PHPAddInputsConcepts from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_with_concepts.php";
import PHPAddInputsCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_custom_metadata.php";

## Upload Image Data 

Below is an example of how to upload image data. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeImageData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageData}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeImageDataTS}</CodeBlock>
</TabItem>
</Tabs>





## Upload Text Data 

Below is an example of how to upload text data. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextData}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextDataTS}</CodeBlock>
</TabItem>
</Tabs>


## Write Custom Functions for Data Processing
                                          
You can add your own custom functions for data processing with ease. 

Below is an example of how to clean text data by removing Unicode characters before uploading it to the Clarifai platform.

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{RemoveUnicode}</CodeBlock>
</TabItem>

</Tabs>


## Upload Audio Data 

Below is an example of how to upload audio data. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAudioData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioData}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeAudioDataTS}</CodeBlock>
</TabItem>
</Tabs>




## Upload Video Data       

Below is an example of how to upload video data. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVideoData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVideoData}</CodeBlock>
</details>     
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVideoDataTS}</CodeBlock>
</TabItem>
</Tabs>

                                   
                                                                                                                 

## Upload Multimodal Data 

Below is an example of how to upload a combination of different input types, such as images and text, to the Clarifai platform.

Currently, Clarifai supports specific multimodal input combinations, such as `[Image, Text] -> Text`. This allows you to process and analyze interconnected data types for advanced use cases.


<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMMData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMMData}</CodeBlock>
</details>   
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeMMDataTS}</CodeBlock>
</TabItem>
</Tabs>




## Upload Custom Metadata

When using the Clarifai SDKs, you can enhance your inputs by attaching custom metadata alongside concepts. This feature enables you to include additional contextual information, such as categorization, filtering criteria, or reference data, making it easier to organize and retrieve your inputs later.

Below are examples of how to upload inputs with custom metadata. In these examples, the metadata includes details about the filename and the dataset split (e.g., train, validate, or test) to which the input belongs.

### Image With Metadata

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeImageM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageM}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeImageMTS}</CodeBlock>
</TabItem>
</Tabs>

### Video With Metadata

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVideoM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVideoM}</CodeBlock>
</details>    
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeVideoMTS}</CodeBlock>
</TabItem>
</Tabs>

                                    

### Text With Metadata

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeTextM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextM}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeTextMTS}</CodeBlock>
</TabItem>
</Tabs>





### Audio With Metadata



<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeAudioM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioM}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeAudioMTS}</CodeBlock>
</TabItem>
</Tabs>

## Upload Inputs with Geospatial Information

When uploading inputs to Clarifai, you can enrich them by including geospatial data, such as longitude and latitude coordinates from the GPS system.

This allows you to associate each input with a specific geographic location. Note that each input can have at most one geospatial point associated with it.

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeGeoInfo}</CodeBlock>
</TabItem>

</Tabs>

## Upload Inputs With Annotations

You can upload inputs along with their corresponding annotations, such as bounding boxes or polygons. 

### Bounding Box Annotations

Below is an example of how to label a new rectangular bounding box for a specific region within an image. The bounding box coordinates should be normalized to the image dimensions, with values scaled to the range of [0, 1.0].

This ensures that the coordinates are independent of the image resolution, making the annotations consistent across different image sizes.

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{BoundingBoxAnnotation}</CodeBlock>
</TabItem>

</Tabs>

### Polygon Annotations

Below is an example of how to annotate any polygon-shaped region within an image.

A polygon is defined by a list of points, each specified by:  

- **row** — The row position of the point, represented as a value between 0.0 and 1.0, where 0.0 corresponds to the top row and 1.0 corresponds to the bottom.  
- **col** — The column position of the point, represented as a value between 0.0 and 1.0, where 0.0 corresponds to the left column of the image and 1.0 corresponds to the right column.  


<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PolygonAnnotation}</CodeBlock>
</TabItem>

</Tabs>

### Concepts Annotations

Below is an example of how to annotate different types of inputs with [concepts](https://docs.clarifai.com/portal-guide/inputs-manager/concepts). 

<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{ConceptsAnnotation}</CodeBlock>
</TabItem>

</Tabs>

##  Upload Inputs Options (via URLs, bytes, concepts, metadata, etc)

You can add inputs one by one or in bulk. If you send them in bulk, you are limited to sending 128 inputs at a time, as mentioned [above](#upload-limits). 



### Upload Inputs via URL

Below is an example of how to add inputs via a publicly accessible URL. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsViaURL}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
                Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/metro-north.jpg",
                                                        AllowDuplicateUrl = true // optional
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Upload Inputs via Bytes

Below is an example of how to add inputs via bytes.

:::important Note

The data must be base64 encoded. When you add a base64 image to our servers, a copy will be stored and hosted on our servers. If you already have an image hosting service, we recommend using it and adding images via the `url` parameter.

:::

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsViaBytes}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
                Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Base64 = "{YOUR_IMAGE_BYTES_STRING}",
                                                        AllowDuplicateUrl = true // optional
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Upload Multiple Inputs With IDs

In cases where you have your own `id` and you only have one item per image, you are encouraged to send inputs with your own `id`. This will help you later match the input to your own database. 

If you do not send an `id`, one will be created for you. If you have more than one item per image, it is recommended that you put the product `id` in the metadata.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddMultipleInputsIds}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
                Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                                        Id = "train1"
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/metro-north.jpg",
                                                        AllowDuplicateUrl = true // optional
                        }
                    }
                }
            },
                        {
                new Input()
                {
                                        Id = "puppy1"
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/puppy.jpeg",
                                                        AllowDuplicateUrl = true // optional
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Upload Inputs With Concepts

You can add inputs with concepts via URLs or bytes. [Concepts](https://docs.clarifai.com/api-guide/concepts/) play an important role in creating your own models. Concepts also help you [search](https://docs.clarifai.com/api-guide/search/) for inputs. 

When you add a concept to an input, you need to indicate whether the concept is present in it or not. 



<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsConcepts}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
                Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/puppy.jpeg",
                                                        AllowDuplicateUrl = true // optional
                        },
                                                Concepts = 
                                                {
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "charlie",
                                                                        Value = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Upload Inputs With Multiple Concepts

You can also add an input with multiple concepts in a single API call. You can provide the concepts in a list and iterate through it. 

You can add the inputs via URLs or bytes.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddInputsMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddInputsMultipleConcepts}</CodeBlock>
</TabItem>

</Tabs>

### Upload Inputs With Custom Metadata

In addition to adding an input with concepts, you can also add an input with custom metadata. This metadata will then be searchable. Metadata can be any arbitrary JSON.


If you have more than one item per image, it is recommended to put the `id` in the metadata like:

```text
{
  "product_id": "xyz"
}
```

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsCustomMetadata}</CodeBlock>
</TabItem>

</Tabs>

## Upload Inputs From Cloud Storage 

You can add inputs from various cloud storage platforms, such as S3 (Amazon Simple Storage Service) and GCP (Google Cloud Platform), by simply providing their corresponding URLs. In cases where access credentials are necessary, you can include them as part of the request.

This simplifies the process of adding inputs to our platform, offering a more efficient alternative to the conventional method of using the **PostInputs** endpoint for users who already have data stored in the cloud platforms.

:::note

This functionality has been introduced starting from the [10.1 release](https://docs.clarifai.com/product-updates/changelog/release101#api).

:::


:::info

- Image files stored in the cloud platforms will be treated as image inputs, video files as video inputs, etc. Archives will be extracted, and their contents will also be processed like this. 

- We do not support extraction of archives located inside other archives. 

- The cloud URL will serve as a filter prefix. For instance, in the case of an S3 URL like `s3:/bucket/images_folder/abc`, files within the `images_folder` will be processed starting with `abc`, or within a subfolder beginning with `abc`. For example, files such as `bucket/images_folder/abcImage.png` or `bucket/images_folder/abc-1/Data.zip` will be processed accordingly.

:::


### Upload Inputs via Cloud Storage URLs

Below is an example of pulling inputs from a subfolder of an S3 bucket. 

import PythonCloudStorageURLs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.py";
import JSCloudStorageURLs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.html";
import NodeCloudStorageURLs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.js";
import JavaCloudStorageURLs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.java";
import PHPCloudStorageURLs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.php";
import CurlCloudStorageURLs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.sh";

import PythonTrackUploadProcess from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.py";
import JSTrackUploadProcess from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.html";
import NodeTrackUploadProcess from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.js";
import JavaTrackUploadProcess from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.java";
import PHPTrackUploadProcess from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.php";
import CurlTrackUploadProcess from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.sh";

import PythonListInputsJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.py";
import JSListInputsJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.html";
import NodeListInputsJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.js";
import JavaListInputsJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.java";
import PHPListInputsJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.php";
import CurlListInputsJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.sh";

import PythonCancelJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.py";
import JSCancelJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.html";
import NodeCancelJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.js";
import JavaCancelJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.java";
import PHPCancelJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.php";
import CurlCancelJobs from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.sh";

import PythonConceptsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.py";
import JSConceptsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.html";
import NodeConceptsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.js";
import JavaConceptsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.java";
import PHPConceptsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.php";
import CurlConceptsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.sh";

import OutputExample1 from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.txt";
import OutputExample2 from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.txt";
import OutputExample3 from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.txt";
import OutputExample4 from "!!raw-loader!../../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.txt";


<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCloudStorageURLs}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample1}</CodeBlock>
</details>

### Track Upload Process

After starting to pull the inputs from a cloud storage service, you can track the progress of the exercise. Note that we’ll use the `inputs_extraction_job_id` returned after running the extraction job. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrackUploadProcess}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample2}</CodeBlock>
</details>

### List Inputs Extraction Jobs 

You can list all your inputs extraction jobs and get their details. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListInputsJobs}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample3}</CodeBlock>
</details>

### Cancel Extraction Jobs

You can cancel the process of extraction of inputs from a cloud storage service. Note that we’ll use the `inputs_extraction_job_id` returned after starting the extraction process. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCancelJobs}</CodeBlock>
</TabItem>

</Tabs>

### Upload Inputs With Concepts and Datasets

You can also add inputs from cloud storage platforms while attaching relevant concepts, assigning them to an already existing [dataset](https://docs.clarifai.com/api-guide/data/datasets/dataset-basics), or adding other metadata information to them. 

The `input_template` parameter allows you to do that. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlConceptsDatasets}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample4}</CodeBlock>
</details>


