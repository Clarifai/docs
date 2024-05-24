---
sidebar_position: 4
---



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeImageText from "!!raw-loader!../../../code_snippets/python-sdk/inference/imagetext_text.py";
import CodeImageTextTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/imageTextToText.ts";



import CodeOutputImageText from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/imagetext_text.txt";



# MultiModal as Input

**Learn how to perform inference with multimodal inputs using Clarifai Python SDK**
<hr/>

Multi-modal inputs refer to feeding multiple types of data into a single model for processing and analysis. These data types, or modalities, can be diverse, such as text, images, audio, video, sensor data, or any other form of structured or unstructured data.


## [Image,Text] to Text

Leverage the power of the Predict API to seamlessly process multimodal inputs and obtain accurate predictions. In this example, we demonstrate the capability to send both image and text inputs to a [model](https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision), showcasing the versatility of the Predict API in handling diverse data types.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeImageText}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputImageText}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeImageTextTS}</CodeBlock>
</TabItem>
</Tabs>



