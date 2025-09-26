---
description: Learn how to upload data to a dataset
sidebar_position: 2
---

# Upload Data to Dataset via API

**Learn how to upload data to a dataset via the API**
<hr />

Uploading data to a dataset in Clarifai is essential for training and evaluating your machine learning models.

Whether you're working with images, videos, text, audio, or other data types, we provide flexible and efficient methods to upload data from various sources.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

:::tip

[Click here](https://docs.clarifai.com/additional-resources/api-references/api-reference/#dataset) to learn more about working with the `Dataset` class.

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeUpImageAN from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_image_an.py";
import CodeUpImageANTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/uploadImageWithAnnotation.ts";
import CodeUpVideoAN from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_video_an.py";
import CodeUpVideoANTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/uploadVideoWithAnnotation.ts";
import CodeUpTextAN from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_text_an.py";
import CodeUpTextANTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/uploadTextWithAnnotation.ts";
import CodeUpBatch from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/batch.py";
import CodeUpImageMask from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_image_annot_mask.py";
import CodeUpImageMaskTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_image_annot_mask.ts";
import CodeRetry from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/retry_log.py";
import curlAddInputsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/add_inputs_datasets.sh";
import UploadFromFolder from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/upload_from_folder.py";
import UploadFromCSV from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/upload_from_csv.py";
import NodeUploadFromFolder from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/node_upload_from_folder.js";
import NodeUploadFromCSV from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/node_upload_from_csv.js";

:::note 

## Customize Batch Size

When uploading inputs to the Clarifai platform, there are limits on the size and number of inputs per upload, as detailed [here](https://docs.clarifai.com/create-manage/inputs/upload/#upload-limits). However, by using methods from the `Dataset` class — such as `Dataset.upload_from_folder()` or `Dataset.upload_from_csv()` — you can bypass these restrictions and efficiently upload larger volumes of inputs.

For example, when uploading images in bulk, such methods incrementally process and upload them in multiple batches, ensuring that each batch contains a maximum of 128 images and does not exceed 128MB in size – which ensures adherence to the upload restrictions. 

You can also customize the `batch_size` variable, which allows for concurrent upload of inputs and annotations. For example, if your images folder exceeds 128MB, you can set the variable to ensure that each batch contains an appropriate number of images while staying within the 128MB per batch limit.

The default `batch_size` is set to 32, but you can customize it to any value between 1 (minimum) and 128 (maximum). 

Here is an example: 

```text
dataset.upload_from_folder(folder_path='/path/to/your/folder', input_type='image', labels=True, batch_size=50)
```

:::

## Add Inputs to a Dataset

After uploading inputs to the Clarifai platform, you can add them to a dataset by specifying their input IDs.

<Tabs groupId="code">

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddInputsDatasets}</CodeBlock>
</TabItem>

</Tabs>

## Upload From Folder

The `upload_from_folder` method lets you bulk-upload images or text files from a local folder directly into a Clarifai dataset.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{UploadFromFolder}</CodeBlock>
</TabItem>

<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{NodeUploadFromFolder}</CodeBlock>
</TabItem>

</Tabs>

Note that:

- The `upload_from_folder` method only supports `"image"` and `"text"` input types.
- Ensure your dataset (`dataset_id`) already exists before calling this method.
- Large datasets should be uploaded with an appropriate [`batch_size`](#customize-batch-size) (default 128).
- If `labels=True`, the folder name is assigned as the input’s concept label.
- The filename (without extension) is used as the `input_id` in Clarifai.
- When uploading text data, the target app should be configured to accept text inputs. Set the primary input type to **Text/Document** when [creating the app](https://docs.clarifai.com/create/applications/create#create-via-the-ui).


## Upload From CSV

The `upload_from_csv` method lets you bulk-upload data into a Clarifai dataset using a CSV file. This method is useful when your data is already structured in tabular form with URLs, local file paths, or raw text.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{UploadFromCSV}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{NodeUploadFromCSV}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example CSV Files</summary>
    <details>
        <summary>File-path based (for local files)</summary>
        ```text
        inputid,input,concepts,metadata
        img1,"data/metro-north.jpg","train","{'source': 'local'}"
        img2,"data/puppy.jpeg","dog","{'source': 'local'}"
        ```
    </details>
    <details>
        <summary>Raw text dataset (only valid with input_type="text")</summary>
        ```text
        inputid,input,concepts,metadata
        txt1,"The sky is clear and blue","weather","{'lang': 'en'}"
        txt2,"The puppy is playing in the garden","dog","{'lang': 'en'}"
        ```
    </details>
        <details>
        <summary>With geopoints</summary>
        ```text
        inputid,input,concepts,metadata,geopoints
        img1,"data/metro-north.jpg","train","{'source': 'clarifai-samples'}","-73.935242,40.730610"
        img2,"data/puppy.jpeg","dog","{'source': 'clarifai-samples'}","-118.243683,34.052235"
        ```
    </details>
</details>

Note that:

- The `upload_from_csv` method supports `"image"`, `"text"`, `"video"`, and `"audio"` file types. 
- The `csv_type` parameter defines how the CSV file will be interpreted. It can be:
    - `"url"` — Inputs are hosted online, and the CSV provides URLs.
    - `"file_path"` — Inputs are stored locally, and the CSV provides file paths.
    - `"raw"` — Only valid for text datasets; the CSV provides raw text strings. 
- If `labels=True` (default), the CSV must include a `concepts` column with labels. If `False`, inputs are uploaded without labels.
- The [`batch_size`](#customize-batch-size) (default = 128) parameter defines the maximum number of inputs to upload concurrently in one batch.
- The CSV file must include column headers. These are the supported headers:
    - `inputid` — Unique identifier for the input.
    - `input` — URL, file path, or raw text depending on `csv_type`.
    - `concepts` — Concept labels (if `labels=True`).
    - `metadata` — JSON metadata, formatted with single quotes inside. Example: `"{'source': 'web'}"`.
    - `geopoints` — Geolocation in `"longitude,latitude"` format. 
- All the data in the CSV file should be enclosed in double quotes.
- When uploading text data, ensure the target app is configured to accept text inputs. Set the primary input type to **Text/Document** when creating the app. 


## Upload Image Data With Annotations

You can [upload image data](https://docs.clarifai.com/create/inputs/upload/api#upload-image-data) together with bounding box annotations into a Clarifai dataset, adding richer context and detail to your visual data.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpImageAN}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpImageANTS}</CodeBlock>
</TabItem>
</Tabs>

## Upload Image Data With Mask Annotations

You can add masks to image data in a Clarifai dataset by providing polygon coordinates with the image, enabling precise region-based annotations.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpImageMask}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpImageMaskTS}</CodeBlock>
</TabItem>
</Tabs>                           

                                                                                                              
## Upload Video Data With Annotations

You can [upload videos](https://docs.clarifai.com/create/inputs/upload/api#upload-video-data) in a Clarifai dataset with enriched annotations by including bounding box coordinates that define regions of interest within individual frames, adding valuable context to your video content.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpVideoAN}</CodeBlock>
  
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpVideoANTS}</CodeBlock>
</TabItem>
</Tabs>

## Upload Text Data With Annotations

You can [upload text data](https://docs.clarifai.com/create/inputs/upload/api#upload-text-data) in a Clarifai dataset and enrich it by attaching metadata, categorizing the content, or adding detailed annotations to enhance structure and context.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpTextAN}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpTextANTS}</CodeBlock>
</TabItem>
</Tabs>                                 
                                                                                                 
## Batch Upload Image Data While Tracking Status

You can actively monitor the status of your dataset upload, giving you clear visibility into the progress and making it easy to track and analyze the data transfer process.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpBatch}</CodeBlock>
</TabItem>
</Tabs>


## Retry Upload From Log File

You can retry uploads for failed inputs directly from the logs. When using the `upload_dataset` function, any failed inputs are automatically logged to a file, which can later be used to resume and retry the upload process seamlessly.

:::info

Set `retry_duplicates` to `True` if you want to retry duplicate with new `input_id` in current dataset.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeRetry}</CodeBlock>
</TabItem>
</Tabs>


