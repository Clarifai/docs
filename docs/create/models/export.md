---
description: Learn how to perform model export using Clarifai SDKs
sidebar_position: 7
---

# Model Export

**Learn how to perform model export using Clarifai SDKs**
<hr />

Using the Clarifai SDKs, you can export models trained on the Clarifai Portal into a `.tar` file by specifying the model URL. This feature enables version control and facilitates seamless integration into various environments.

The exported `.tar` file contains the model architecture, weights, and relevant training artifacts, providing a portable and deployment-ready package. Overall, model export via the Clarifai SDKs offers users greater flexibility and control over their machine learning workflows.


:::warning

Note that the model export functionality is only supported for specific model types on our platform.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeME from "!!raw-loader!../../../code_snippets/python-sdk/model-export/me.py";
import CodeON from "!!raw-loader!../../../code_snippets/python-sdk/model-export/m_onnx.py";
import CodeInf from "!!raw-loader!../../../code_snippets/python-sdk/model-export/infer_triton.py";

import CodeOutputME from "!!raw-loader!../../../code_snippets/python-sdk/model-export/outputs/me.txt";
import CodeOutputON from "!!raw-loader!../../../code_snippets/python-sdk/model-export/outputs/m_onnx.txt";
import CodeOutputDK from "!!raw-loader!../../../code_snippets/python-sdk/model-export/outputs/run_triton_container.txt";
import CodeOutputST from "!!raw-loader!../../../code_snippets/python-sdk/model-export/outputs/start_triton.txt";

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeME}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputME}</CodeBlock>
</details>

Before moving on to deployment, unpack the ```model.tar``` file to get the required files.
The unpacked ```model.tar``` folder structure will look like this,

```
├── model
   ├── 1
   │   ├── lib
   │   ├── model.onnx
   │   ├── model.py
   ├── config.pbtxt
   ├── labels.txt
   ├── requirements.txt
   ├── triton_conda-cp3.8-72f240d2.tar.gz
   └── triton_server_info.proto
```


## Model Inference Using ONNX

ONNX inference provides developers and data scientists with a standardized, efficient method for deploying machine learning models in production. By promoting interoperability across platforms and frameworks, ONNX simplifies deployment, enhances flexibility, and can improve performance.

Acting as a universal bridge, ONNX enables seamless model execution without the need for repeated retraining or framework-specific conversions. This results in significant time and resource savings, making ONNX a powerful tool for scaling machine learning solutions across diverse environments.

Click [here](https://onnxruntime.ai/docs/get-started/with-python.html) to learn more about ONNX.

:::note

Install the ```requirements.txt``` file with ```pip install requirements.txt```.

:::

Below is an example of running predictions on a model using ONNX runtime. We are going to use ```model.onnx``` file we received after unpacking the ```model.tar``` file.
<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeON}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputON}</CodeBlock>
</details>


## Deployment Using Nvidia Triton

Once you've trained powerful machine learning models, deploying them efficiently for real-world applications becomes essential. NVIDIA Triton Inference Server serves as a robust bridge between your trained models and production environments. 

As an open-source platform, Triton is purpose-built to optimize and streamline the deployment and execution of machine learning models for inference, enabling high-performance, scalable, and flexible model serving across diverse use cases.

Click [here](https://github.com/triton-inference-server/python_backend) to learn more about Nvidia Triton.

Before we deploy our model we have to first set up the triton package on our local machine.

:::info
Make sure that you have Docker installed on your system. Follow the steps in this [page](https://docs.docker.com/engine/install) to install Docker.
:::

Execute the following command to run the triton inference container in your machine,
```
docker run --shm-size=1g --ulimit memlock=-1 -p 9000:9000 -p 9001:9001 -p 9002:9002 --ulimit stack=67108864 -ti nvcr.io/nvidia/tritonserver:23.03-py3 -v $(pwd):/run
```
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputDK}</CodeBlock>
</details>

:::note
Use a common directory to run the container and to extract the ```model.tar``` file.
:::

Once you are inside the container then execute the following to start the triton server,
```
cd /run
```
```
tritonserver --model-repository=/run --model-control-mode=explicit --disable-auto-complete-config --backend-config=python3,python-runtime=/usr/bin/python3 --backend-directory=/opt/tritonserver/backends --http-port=9000 --grpc-port=9001 --metrics-port=9002 --log-verbose=5 --load-model=model
```
If you have followed the steps correctly, you should receive an output that looks similar to the one shown here,
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputST}</CodeBlock>
</details>

Since the inference server is up and running successfully, let's create an inference script that will communicate with the server and return the prediction. 
Below is an example inference script that does image classification using the exported model,
<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeInf}</CodeBlock>
</TabItem>
</Tabs>
<br />
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputON}</CodeBlock>
</details>
