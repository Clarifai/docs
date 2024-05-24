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




# Model Export
**Learn how to perform model export using Clarifai Python SDK**
<hr />
Using the Clarifai Python SDK, you can export the model you have trained on the Clarifai portal into a .tar file by specifying the model URL. This feature allows users to version control their trained models and seamlessly integrate them into different environments. The exported .tar file encapsulates the model architecture, weights, and any additional training artifacts, making it a portable archive for deployment. Overall, the ability to export models via the Clarifai Python SDK empowers users with greater flexibility and control over their machine-learning workflows.

<Tabs>
<TabItem value="python" label="Python">
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

ONNX inference equips developers and data scientists with a standardized and efficient approach to deploying machine learning models in production environments. It fosters flexibility, simplifies deployment, and offers the potential for performance improvements, making it a valuable tool for unlocking the power of machine-learning models across a wide range of applications. ONNX inference acts as a bridge, enabling the seamless execution of this model across diverse platforms and frameworks that support ONNX. This eliminates the need for repetitive model retraining or framework-specific conversions, resulting in significant time and resource savings.

Visit [this](https://onnxruntime.ai/docs/get-started/with-python.html) page to learn more about ONNX.

:::note
Install the ```requirements.txt``` file with ```pip install requirements.txt```.
:::
Below is an example of running predictions on a model using ONNX runtime. We are going to use ```model.onnx``` file we received after unpacking the ```model.tar``` file.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeON}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputON}</CodeBlock>
</details>


## Deployment Using Nvidia Triton

Imagine you've trained powerful machine learning models and want to deploy them efficiently for real-world applications. NVIDIA Triton Inference Server acts as the bridge between your trained models and the real world. It's an open-source software specifically designed to optimize and streamline the process of deploying and running machine learning models for inference tasks.

Click here to [learn](https://github.com/triton-inference-server/python_backend) more about Nvidia Triton.

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
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeInf}</CodeBlock>
</TabItem>
</Tabs>
<br />
<details>
  <summary>Output</summary>
   <CodeBlock className="language-python">{CodeOutputON}</CodeBlock>
</details>
