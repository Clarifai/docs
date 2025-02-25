---
description: Learn how to upload data to a dataset
sidebar_position: 1
---

# Uploading Data to Dataset

**Learn how to upload data to a dataset**
<hr />

Uploading data to a dataset in Clarifai is essential for training and evaluating your machine learning models. Whether you're working with images, videos, text, audio, or other data types, Clarifai’s SDKs provide flexible and efficient methods to upload data from various sources.


:::tip

[Click here](https://docs.clarifai.com/sdk/api-reference/#dataset) to learn more about the different methods of uploading data to a dataset. 

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


import CodeOutputUpImage from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_image.txt";
import CodeOutputUpText from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_text.txt";
import CodeOutputUpAudio from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_audio.txt";
import CodeOutputUpVideo from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_video.txt";
import CodeOutputUpImageAN from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_image_an.txt";
import CodeOutputUpVideoAN from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_video_an.txt";
import CodeOutputUpTextAN from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_text_an.txt";
import CodeOutputBatch from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/batch.txt";

import CodeOutputImageMask from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/up_image_annot_mask.txt";
import CodeOutputRetry from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/outputs/retry_log.txt";

## Upload Image

Simplify your image data upload process with the Clarifai API's DataLoader functionality. This versatile feature allows you to effortlessly upload image data in bulk, streamlining your workflow for enhanced efficiency. Whether you prefer uploading images directly from a folder or leveraging the convenience of a CSV format, our DataLoader seamlessly accommodates both methods.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpImage}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputUpImage}</CodeBlock>
</details>  
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpImageTS}</CodeBlock>
</TabItem>
</Tabs>



## Upload Text

Leverage the power of the Clarifai API to seamlessly upload text data with our versatile dataloader. Whether you prefer the convenience of organizing your text data in folders or opt for the structured approach offered by the CSV format, our API accommodates both methods. By utilizing the dataloader, you can effortlessly streamline the process of uploading text data, ensuring a smooth integration into your workflow.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpText}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputUpText}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpTextTS}</CodeBlock>
</TabItem>
</Tabs>





## Upload Audio

Seamlessly upload your audio datasets using the versatile dataloader feature, providing you with two convenient options: uploading audio files directly from a folder or utilizing the efficiency of a CSV format. This flexibility in data upload empowers you to effortlessly incorporate diverse audio datasets into your applications, ensuring a smooth and streamlined workflow.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpAudio}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputUpAudio}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpAudioTS}</CodeBlock>
</TabItem>
</Tabs>






## Upload Video

Elevate your multimedia analysis capabilities with the Clarifai SDKs, enabling you to effortlessly upload video data using the versatile dataloader. Seamlessly integrate video data into your projects by leveraging the dataloader, which supports uploading videos either directly from a folder or in the convenient CSV format.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpAudio}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputUpAudio}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpVideoTS}</CodeBlock>
</TabItem>
</Tabs>






## Upload Image with Annotation

Leverage the full potential of the Clarifai API by seamlessly uploading images with annotations. This advanced functionality allows you to enrich your image data by providing bounding box coordinates along with the image itself. By incorporating annotations, you enhance the depth and context of your visual data.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpImageAN}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputUpImageAN}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpImageANTS}</CodeBlock>
</TabItem>
</Tabs>

## Upload Image with Mask Annotation

This advanced functionality allows you to add mask to image data by providing polygon points as coordinates along with the image itself.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpImageMask}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageMask}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpImageMaskTS}</CodeBlock>
</TabItem>
</Tabs>




                                           

                                                                                                                  


## Upload Video with Annotation

Using our API, you have the capability to seamlessly upload videos enriched with annotations. This process involves more than just submitting the video file; you can enhance the contextual understanding by providing bounding box coordinates that precisely define the regions of interest within the video frames. By including this annotation data, you add valuable context to your video content.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpVideoAN}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputUpVideoAN}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpVideoANTS}</CodeBlock>
</TabItem>
</Tabs>






## Upload Text with Annotation

This functionality enables you to provide context and additional information alongside your text, enhancing the understanding and relevance of the uploaded content. Whether you're attaching metadata, categorizing content, or incorporating detailed annotations, the API effortlessly accommodates your specific needs. This feature not only streamlines the process of inputting annotated text but also enriches the dataset, allowing for more nuanced and accurate analysis.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpTextAN}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputUpTextAN}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeUpTextANTS}</CodeBlock>
</TabItem>
</Tabs>



                                          

                                                                                                                   


## Batch Upload Image data while tracking status

With our robust capabilities, you can actively monitor the status of your dataset upload, ensuring transparency and control throughout the entire operation. This feature provides valuable visibility into the progress of your data transfer, allowing you to track and analyze the status effortlessly.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeUpBatch}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputBatch}</CodeBlock>
</details>


## Retry Upload From Log File

This feature is used to retry upload from logs for failed inputs. When using `upload_dataset` function the failed inputs can be logged into file and later can be used to resume the upload process. 

:::info
Set `retry_duplicates` to `True` if you want to retry duplicate with new Input_id in current dataset.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeRetry}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputRetry}</CodeBlock>
</details>
