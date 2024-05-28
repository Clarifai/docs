---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeCreateDataset from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/create_dataset.py";
import CodeCreateDatasetTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/creatingDatasets.ts";

import CodeCreateDatasetV from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/create_data_version.py";
import CodeCreateDatasetVTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/createDatasetVersion.ts";

import CodeUpImage from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/up_image.py";
import CodeUpImageTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/uploadImage.ts";


import CodeUpText from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/up_text.py";
import CodeUpTextTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/uploadText.ts";

import CodeUpAudio from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/up_audio.py";
import CodeUpAudioTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/uploadAudio.ts";



import CodeUpVideo from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/up_video.py";
import CodeUpVideoTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/uploadVideo.ts";


import CodeUpImageAN from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/up_image_an.py";
import CodeUpImageANTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/uploadImageWithAnnotation.ts";


import CodeUpVideoAN from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/up_video_an.py";
import CodeUpVideoANTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/uploadVideoWithAnnotation.ts";


import CodeUpTextAN from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/up_text_an.py";
import CodeUpTextANTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/uploadTextWithAnnotation.ts";


import CodeUpBatch from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/batch.py";
import CodeExport from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/export.py";
import CodeSDH from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/sdh.py";


import CodeDV from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/delete_version.py";
import CodeDVTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/deleteDatasetVersion.ts";


import CodeDelete from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/delete.py";
import CodeDeleteTS from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/deleteDataset.ts";

import CodeRetry from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/retry_log.py";




import CodeOutputCreateDataset from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/create_dataset.txt";
import CodeOutputCreateDatasetV from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/create_data_version.txt";
import CodeOutputUpImage from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/up_image.txt";
import CodeOutputUpText from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/up_text.txt";
import CodeOutputUpAudio from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/up_audio.txt";
import CodeOutputUpVideo from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/up_video.txt";
import CodeOutputUpImageAN from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/up_image_an.txt";
import CodeOutputUpVideoAN from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/up_video_an.txt";
import CodeOutputUpTextAN from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/up_text_an.txt";
import CodeOutputBatch from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/batch.txt";
import CodeOutputExport from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/export.txt";
import CodeOutputDV from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/delete_version.txt";
import CodeOutputDelete from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/delete.txt";
import CodeOutputRetry from "!!raw-loader!../../code_snippets/python-sdk/managing-datasets/outputs/retry_log.txt";




# Managing Datasets

**Learn how to interact with datasets using Clarifai SDKs**
<hr />

Effectively navigate the complexities of dataset management using the Clarifai SDKs, where a suite of robust tools empowers you to handle datasets with unparalleled efficiency. This comprehensive set of functionalities enables you to seamlessly organize, modify, and analyze your image data. Whether you are creating new datasets from scratch, updating existing ones with fresh information, or fine-tuning your data for optimal model performance, the SDK delivers a seamless and intuitive interface.

Our SDK goes beyond mere dataset manipulation; it offers a complete solution for every step of your data journey. With the ability to effortlessly upload new datasets, swiftly delete redundant ones, and manipulate existing datasets according to your specific needs, you gain full control over your data pipeline. This ensures a fluid and adaptable workflow, allowing you to focus on deriving meaningful insights and maximizing the potential of your image data.


## Creating Datasets

Leverage the robust capabilities of the Clarifai SDKs to seamlessly generate datasets within your application. Through the API, you can initiate the creation of a dataset by specifying a unique dataset ID. This process empowers you to tailor your datasets to the specific needs of your application, ensuring a customized and efficient data.

Visit  this [link](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCreateDataset}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateDataset}</CodeBlock>
</details>  
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeCreateDatasetTS}</CodeBlock>
</TabItem>
</Tabs>

                                      

                                                                                                                  


## Create a Dataset version

Leveraging the power of the Clarifai SDKs, you can effortlessly generate a new dataset version tailored to your specific needs. This process involves utilizing the API to initiate the creation of a version for a designated dataset, identified by its unique dataset ID. By seamlessly integrating this functionality into your workflow, you gain the ability to manage and track different iterations of your datasets effectively.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCreateDatasetV}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateDatasetV}</CodeBlock>
</details>  
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeCreateDatasetVTS}</CodeBlock>
</TabItem>
</Tabs>



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


## Export Dataset

With our API, you can efficiently retrieve your datasets in a compressed zip file format, streamlining the process of data retrieval and enhancing your dataset management capabilities. Whether you're archiving your data for backup, sharing datasets across applications, or conducting in-depth analyses externally, the export functionality provides a convenient and efficient solution.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeExport}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputExport}</CodeBlock>
</details>


## SDH Enabled Inputs Download

This functionality empowers users to seamlessly retrieve and download inputs that have been enhanced or optimized through SDH technology. By harnessing the power of SDH, this feature ensures a superior and efficient download experience for inputs, providing a level of performance and flexibility that aligns with modern computing demands.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeSDH}</CodeBlock>
</TabItem>
</Tabs>


## Delete Dataset Version

Within the Clarifai SDKs, you have the capability to precisely manage your datasets by removing specific versions with ease. This feature empowers you to selectively delete a particular version of your dataset through the API. Whether you are refining your dataset collection, optimizing storage resources, or ensuring data accuracy, this functionality provides a targeted and efficient solution.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.


:::caution
Be certain that you want to delete a particular dataset version as the operation cannot be undone.
:::

                                         
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDV}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputDV}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeDVTS}</CodeBlock>
</TabItem>
</Tabs>


                                                                                                                  


## Delete Dataset

Within the Clarifai SDKs, removing a dataset is a straightforward process enabled by the API. By supplying the unique identifier, known as the dataset ID, you gain the capability to seamlessly eliminate a dataset from your Clarifai account. It's essential to note that this functionality extends beyond a singular dataset removal; it also initiates the deletion of all associated dataset versions.

Visit this [page](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for more information.


:::caution
 Be certain that you want to delete a particular dataset as the operation cannot be undone.
:::

                                         
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDelete}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputDelete}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeDeleteTS}</CodeBlock>
</TabItem>
</Tabs>



                                           
