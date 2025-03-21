---
description: Upload, list, download, update, or delete inputs
sidebar_position: 5
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeImageData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/image_data.py";
import CodeImageDataTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/imageDataInputs.ts";


import CodeTextData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/text_data.py";
import CodeTextDataTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/textDataInputs.ts";


import CodeAudioData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/audio_data.py";
import CodeAudioDataTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/audioDataInputs.ts";

import CodeVideoData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/video_data.py";
import CodeVideoDataTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/videoDataInputs.ts";


import CodeMMData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/multimodal_data.py";
import CodeMMDataTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/multimodalDataInputs.ts";


import CodeListInput from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/list_input.py";
import CodeDeleteInput from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/delete_input.py";

import CodeImageM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/image_metadata.py";
import CodeImageMTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/imageWithMetadata.ts";


import CodeVideoM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/video_metadata.py";
import CodeVideoMTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/videoWithMetadata.ts";

import CodeTextM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/text_metadata.py";
import CodeTextMTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/textWithMetadata.ts";


import CodeAudioM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/audio_data_metadata.py";
import CodeAudioMTS from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/audioWithMetadata.ts";

import CodePatchInputs1 from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/patch_inputs_1.py";
import CodePatchInputs2 from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/patch_inputs_2.py";
import CodePatchInputs3 from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/patch_inputs_3.py";
import CodePatchInputs4 from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/patch_inputs_4.py";


import CodeGeoInfo from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/geo_info.py";
import BoundingBoxAnnotation from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/bounding_box_annotation.py";
import PolygonAnnotation from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/polygon_annotation.py";
import ConceptsAnnotation from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/concepts_annotation.py";
import BulkDeleteAnnotations from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/bulk_delete_annotations.py";
import DownloadInputs from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/download_inputs.py";
import RemoveUnicode from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/remove_unicode.py";

import CodeOutputImageData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/image_data.txt";
import CodeOutputTextData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/text_data.txt";
import CodeOutputAudioData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/audio_data.txt";
import CodeOutputVideoData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/video_data.txt";
import CodeOutputMMData from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/multimodal_data.txt";
import CodeOutputListInput from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/list_input.txt";
import CodeOutputDeleteInput from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/delete_input.txt";
import CodeOutputImageM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/image_metadata.txt";
import CodeOutputVideoM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/video_metadata.txt";
import CodeOutputTextM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/text_metadata.txt";
import CodeOutputAudioM from "!!raw-loader!../../code_snippets/python-sdk/managing-inputs/outputs/audio_data_metadata.txt";

# Managing Inputs

**Upload, list, download, update, or delete inputs**
<hr />

Managing inputs in the Clarifai platform is a streamlined process that includes uploading, updating, deleting, and performing various data processing tasks. Inputs can encompass a wide range of data types, such as images, videos, text, and more. 

Whether your inputs are hosted online via URLs, stored locally as file paths, or represented as bytes, our API supports all these formats, ensuring flexibility and ease of use.

## API Upload Limits

When uploading data to the Clarifai platform by using methods like `upload_from_bytes()` or `upload_from_url()` (which are illustrated below), your inputs should meet the following conditions.

_Note that these conditions also apply when uploading inputs for inferencing._

#### Images

- Each request can include up to 128 image inputs per batch.
- Each image file must be a maximum of 85 megapixels and less than 20MB in size.
- The total batch size (in bytes) for each request must be less than 128MB.

#### Videos

- Each request can include only 1 video input.
- If uploading via URL, the video can be up to 300MB or 10 minutes long.
- If uploading via direct file upload, the video must be less than 128MB.

#### Text Files

- Each request can include up to 128 text files per batch.
- Each text file must be less than 20MB.
- The total batch size (in bytes) must be less than 128MB.

#### Audio Files

- Each request can include up to 128 audio files per batch.
- Each audio file must be less than 20MB in size (suitable for a 48kHz, 60-second, 16-bit recording).
- The total batch size (in bytes) must be less than 128MB.

> You can bypass these limits by using the [`upload_from_folder()` method](https://docs.clarifai.com/sdk/managing-datasets/upload-data) from the `Dataset` class, which efficiently handles larger volumes of inputs by automatically batching them while adhering to upload restrictions.

> For example, when uploading images in bulk, the method incrementally processes and uploads them in multiple batches, ensuring that each batch contains a maximum of 128 images and does not exceed 128MB in size.

> You can also customize the `batch_size` variable, which allows for concurrent upload of inputs and annotations. For example, if your folder exceeds 128MB, you can set the variable to ensure that each batch contains an appropriate number of images while staying within the 128MB per batch limit.


## Upload Image Data 

Below is an example of how to upload image data. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeImageData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageData}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeImageDataTS}</CodeBlock>
</TabItem>
</Tabs>





## Upload Text Data 

Below is an example of how to upload text data. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextData}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextDataTS}</CodeBlock>
</TabItem>
</Tabs>


## Write Custom Functions for Data Processing
                                          
You can add your own custom functions for data processing with ease. 

Below is an example of how to clean text data by removing Unicode characters before uploading it to the Clarifai platform.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{RemoveUnicode}</CodeBlock>
</TabItem>

</Tabs>


## Upload Audio Data 

Below is an example of how to upload audio data. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAudioData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioData}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeAudioDataTS}</CodeBlock>
</TabItem>
</Tabs>




## Upload Video Data       

Below is an example of how to upload video data. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVideoData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVideoData}</CodeBlock>
</details>     
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeVideoDataTS}</CodeBlock>
</TabItem>
</Tabs>

                                   
                                                                                                                 

## Upload Multimodal Data 

Below is an example of how to upload a combination of different input types, such as images and text, to the Clarifai platform.

Currently, Clarifai supports specific multimodal input combinations, such as `[Image, Text] -> Text`. This allows you to process and analyze interconnected data types for advanced use cases.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMMData}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMMData}</CodeBlock>
</details>   
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeMMDataTS}</CodeBlock>
</TabItem>
</Tabs>




## Upload Custom Metadata

When using the Clarifai SDKs, you can enhance your inputs by attaching custom metadata alongside concepts. This feature enables you to include additional contextual information, such as categorization, filtering criteria, or reference data, making it easier to organize and retrieve your inputs later.

Below are examples of how to upload inputs with custom metadata. In these examples, the metadata includes details about the filename and the dataset split (e.g., train, validate, or test) to which the input belongs.

### Image With Metadata

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeImageM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageM}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeImageMTS}</CodeBlock>
</TabItem>
</Tabs>

### Video With Metadata

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeVideoM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputVideoM}</CodeBlock>
</details>    
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeVideoMTS}</CodeBlock>
</TabItem>
</Tabs>

                                    

### Text With Metadata

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextM}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextMTS}</CodeBlock>
</TabItem>
</Tabs>





### Audio With Metadata



<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAudioM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioM}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeAudioMTS}</CodeBlock>
</TabItem>
</Tabs>

## Upload Inputs with Geospatial Information

When uploading inputs to Clarifai, you can enrich them by including geospatial data, such as longitude and latitude coordinates from the GPS system.

This allows you to associate each input with a specific geographic location. Note that each input can have at most one geospatial point associated with it.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeGeoInfo}</CodeBlock>
</TabItem>

</Tabs>

## Upload Inputs With Annotations

You can upload inputs along with their corresponding annotations, such as bounding boxes or polygons. 

### Bounding Box Annotations

Below is an example of how to label a new rectangular bounding box for a specific region within an image. The bounding box coordinates should be normalized to the image dimensions, with values scaled to the range of [0, 1.0].

This ensures that the coordinates are independent of the image resolution, making the annotations consistent across different image sizes.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{BoundingBoxAnnotation}</CodeBlock>
</TabItem>

</Tabs>

### Polygon Annotations

Below is an example of how to annotate any polygon-shaped region within an image.

A polygon is defined by a list of points, each specified by:  

- **row** — The row position of the point, represented as a value between 0.0 and 1.0, where 0.0 corresponds to the top row and 1.0 corresponds to the bottom.  
- **col** — The column position of the point, represented as a value between 0.0 and 1.0, where 0.0 corresponds to the left column of the image and 1.0 corresponds to the right column.  


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PolygonAnnotation}</CodeBlock>
</TabItem>

</Tabs>

### Concepts Annotations

Below is an example of how to annotate different types of inputs with [concepts](https://docs.clarifai.com/portal-guide/inputs-manager/concepts). 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ConceptsAnnotation}</CodeBlock>
</TabItem>

</Tabs>

## Bulk Delete Input Annotations  

Below is an example of how to delete all the annotations associated with a given input by setting the input ID(s). 

The `annotation_ids` parameter is optional. However, if provided, the number and order of `annotation_ids` must match the corresponding `input_ids`.  

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{BulkDeleteAnnotations}</CodeBlock>
</TabItem>

</Tabs>

 

## List inputs

You can retrieve all inputs within your app using the `list_inputs()` method. This method supports pagination, so you can efficiently organize and display data.

You can customize your queries by adjusting `page_no` and `per_page` parameters to fit your specific needs.


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeListInput}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputListInput}</CodeBlock>
</details> 

## Download Inputs

Below is an example of how to download inputs from your app. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{DownloadInputs}</CodeBlock>
</TabItem>
</Tabs>


## Delete Inputs

Below is an example of how to delete inputs from your app by providing a list of input IDs.

:::caution

Be certain that you want to delete a particular input as the operation cannot be undone.

:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDeleteInput}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputDeleteInput}</CodeBlock>
</details> 

## Patch Inputs

You can apply patch operations to an input, allowing for the merging or removal of items. By default, these actions overwrite existing data, but they behave differently when handling lists of objects.

- The `merge` action replaces a `key:value` pair with a `key:new_value`, or appends new values to an existing list. When dealing with dictionaries, it merges entries that share the same `id` field.

- The `remove` action replaces a `key:value` pair with a `key:new_value`, or removes any items from a list that match the IDs of the provided values.

- The `overwrite` action fully replaces an existing object with a new one.

### Metadata 

Here is an example of how to patch the metadata of an input.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePatchInputs3}</CodeBlock>
</TabItem>
</Tabs>

### Bounding Box Annotation

Here is an example of how to patch a bounding box annotation on an input.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePatchInputs1}</CodeBlock>
</TabItem>
</Tabs>
                                       
### Polygon Annotation

Here is an example of how to patch a polygon annotation on an input.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePatchInputs2}</CodeBlock>
</TabItem>
</Tabs>
  
### Concepts

Below is an example of performing a patch operation on concepts. Currently, only the `overwrite` action is supported, allowing you to update the label names associated with an input. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePatchInputs4}</CodeBlock>
</TabItem>
</Tabs> 

