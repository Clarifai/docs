---
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

**Learn how to interact with inputs using Clarifai Python SDK**
<hr />

Effortlessly handle and organize your input data with Clarifai's Python SDK. The Input Management feature empowers you to efficiently manage various types of data, including images, videos, and text, facilitating seamless integration into your machine learning workflows. Take control of your inputs, whether sourced from URLs, file paths, or raw bytes, and streamline the preparation process for predictive model inferences. Clarifai's Input Management simplifies the task of organizing and preparing data for an enhanced and streamlined machine learning experience.


## Image Data as Inputs

The Clarifai Python SDK empowers you to seamlessly upload image data through various methods, providing flexibility and ease of integration. Whether your images are hosted online via URLs, stored locally as file paths, or represented as bytes within your application, our API accommodates all these formats. This versatility ensures a smooth and efficient workflow, allowing you to leverage Clarifai's powerful capabilities with the convenience that suits your specific use case.

Visit this [page](https://docs.clarifai.com/api-guide/data/create-get-update-delete) for more information.


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





## Text Data as Inputs

Use the potential of the Clarifai Python SDK to effortlessly upload text data through diverse methods, providing a seamless experience and fostering adaptability in your integration process. Whether your text is accessible online via URLs, resides locally as file paths, or is represented as bytes within your application, our API seamlessly accommodates these formats. This versatility ensures a fluid and effective workflow, enabling you to unlock Clarifai's robust capabilities with the utmost convenience tailored to your specific use case.

Visit this [page](https://docs.clarifai.com/api-guide/data/create-get-update-delete) for more information.

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



                                          

## Audio Data as Inputs

Unlock the potential of audio analysis with the Clarifai Python SDK, offering seamless integration for uploading audio data through multiple avenues. Whether your audio files reside on external servers accessible via URLs, are stored locally with file paths, or are represented as raw bytes within your application, our API effortlessly accommodates each of these formats. This adaptability ensures a streamlined and user-friendly workflow, providing you the freedom to harness Clarifai's advanced capabilities with the utmost convenience tailored to your specific use case.

Visit this [page](https://docs.clarifai.com/api-guide/data/create-get-update-delete) for more information.

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




## Video Data as Inputs      

Unlock the potential of video analysis with the Clarifai Python SDK, offering seamless integration for uploading video data through various methods. Whether your videos are accessible online via URLs, residing locally as file paths, or encapsulated as bytes within your application, our API effortlessly accommodates these diverse formats.

Visit this [page](https://docs.clarifai.com/api-guide/data/create-get-update-delete) for more information.

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

                                   
                                                                                                                 

## Multimodal Data as Inputs

With the Clarifai Python SDK, the integration of multimodal inputs becomes a seamless and intuitive process. Unlock the power of combining various types of inputs by leveraging our API. Whether you're incorporating a mix of images, text, or other data sources, our SDK allows you to specify and upload these multimodal inputs effortlessly. For now the Clarifai platform only supports multimodal inputs like [Image ,Text]->text.

Visit this [page](https://docs.clarifai.com/api-guide/data/create-get-update-delete) for more information.


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




## Custom Metadata

When working with the Clarifai Python SDK, you can add inputs with custom metadata in addition to concepts. This allows you to attach additional information  to your inputs, which can be useful for various purposes such as categorization, filtering, or later reference.

Visit this [page](https://docs.clarifai.com/api-guide/data/create-get-update-delete#add-inputs-with-custom-metadata) for more information.
### Image With Metadata

In the below example we are uploading an image with metadata that includes details about the filename and to which split it belongs to.

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

In the below example we are uploading a video file  with metadata that includes details about the filename and to which split it belongs to.

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

In the below example we are uploading a text file with metadata that includes details about the filename and to which split it belongs to.

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

In the below example we are uploading an audio file with metadata that includes details about the filename and to which split it belongs to.

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



## List inputs

Effortlessly explore and manage your inputs with the Clarifai Python SDK. By utilizing the list_inputs() method, you gain the ability to seamlessly view all inputs within your app. This powerful function supports features like pagination, enabling a well-organized display of information. Tailor your queries by setting parameters such as `page_no` and `per_page` to align with your specific requirements.

Visit this [page](https://docs.clarifai.com/api-guide/data/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeListInput}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputListInput}</CodeBlock>
</details> 


## Delete Inputs

Effortlessly manage your input data with the Clarifai Python SDK's Delete Inputs feature. Through the API, you gain the ability to delete inputs seamlessly by providing a list of input IDs. This straightforward and intuitive process empowers you to maintain control over your dataset, allowing for efficient removal of specific inputs as needed.

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

                                          

                                                                                                                  



