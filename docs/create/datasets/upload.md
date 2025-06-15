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

[Click here](https://docs.clarifai.com/additional-resources/api-references/api-reference/#dataset) to learn more about the different methods of uploading data to a dataset. 

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeUpImage from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_image.py";
import CodeUpImageTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/uploadImage.ts";


import CodeUpText from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_text.py";
import CodeUpTextTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/uploadText.ts";

import CodeUpAudio from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_audio.py";
import CodeUpAudioTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/uploadAudio.ts";



import CodeUpVideo from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/up_video.py";
import CodeUpVideoTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/uploadVideo.ts";


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


:::note Customize Batch Size

When uploading inputs to the Clarifai platform, there are limits on the size and number of inputs per upload, as detailed [here](https://docs.clarifai.com/create-manage/inputs/upload/#upload-limits). However, by using methods from the `Dataset` class — such as `Dataset.upload_from_folder()`, `Dataset.upload_from_url()`, or `Dataset.upload_dataset()` — you can bypass these restrictions and efficiently upload larger volumes of inputs.

For example, when uploading images in bulk, such methods incrementally process and upload them in multiple batches, ensuring that each batch contains a maximum of 128 images and does not exceed 128MB in size – which ensures adherence to the upload restrictions. 

You can also customize the `batch_size` variable, which allows for concurrent upload of inputs and annotations. For example, if your images folder exceeds 128MB, you can set the variable to ensure that each batch contains an appropriate number of images while staying within the 128MB per batch limit.

The default `batch_size` is set to 32, but you can customize it to any value between 1 (minimum) and 128 (maximum). 

Here is an example: 

```text
dataset.upload_from_folder(folder_path='./images', input_type='image', labels=True, batch_size=50)
```

:::

## Add Inputs to a Dataset

You can add inputs to a dataset by specifying their input IDs.

<Tabs groupId="code">

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddInputsDatasets}</CodeBlock>
</TabItem>

</Tabs>

## Upload Image Data

You can upload image data in bulk either from a folder or by using a [CSV file](https://docs.clarifai.com/additional-resources/api-references/api-reference/#datasetupload_from_csv).

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpImage}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpImageTS}</CodeBlock>
</TabItem>
</Tabs>



## Upload Text Data

You can upload text data in bulk either from a folder or by using a CSV file.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpText}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpTextTS}</CodeBlock>
</TabItem>
</Tabs>





## Upload Audio Data

You can upload audio data in bulk either from a folder or by using a CSV file.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpAudio}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpAudioTS}</CodeBlock>
</TabItem>
</Tabs>






## Upload Video Data

You can upload video data in bulk either from a folder or by using a CSV file.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpAudio}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpVideoTS}</CodeBlock>
</TabItem>
</Tabs>






## Upload Image Data With Annotations

You can upload image data along with bounding box annotations, allowing you to add depth and contextual information to your visual data.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpImageAN}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpImageANTS}</CodeBlock>
</TabItem>
</Tabs>

## Upload Image Data With Mask Annotations

You can add masks to image data by providing polygon coordinates along with the image, enabling precise region-based annotations.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpImageMask}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpImageMaskTS}</CodeBlock>
</TabItem>
</Tabs>




                                           

                                                                                                                  


## Upload Video Data With Annotations

You can upload videos with enriched annotations by including bounding box coordinates that define regions of interest within individual frames, adding valuable context to your video content.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeUpVideoAN}</CodeBlock>
  
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeUpVideoANTS}</CodeBlock>
</TabItem>
</Tabs>






## Upload Text Data With Annotations

You can enrich your uploaded text data by attaching metadata, categorizing the content, or adding detailed annotations to enhance structure and context.


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

Set `retry_duplicates` to `True` if you want to retry duplicate with new Input_id in current dataset.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeRetry}</CodeBlock>
</TabItem>
</Tabs>


