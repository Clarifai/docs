---
description: Capture inputs used for making predictions in your app
sidebar_position: 1
toc_max_heading_level: 4
---

# Collectors

**Capture inputs used for making predictions in your app**
<hr />

Collector is an ingenious feature that allows you to capture the inputs used for making predictions. After creating a collector, which includes specifying the caller user ID and the source model, a triggering process is established. 

This process ensures that whenever the stated user makes a prediction using the specified model, the inputs used in generating the predictions are automatically ingested and stored in your app.

With collectors, you can automatically pipe in data from production models, gather inputs to feed your models with real-world training data, and unlock many platform training capabilities.

:::caution feature availability

The Collector feature is currently exclusively available to our Professional and Enterprise users. Learn more [here](https://www.clarifai.com/pricing).

:::


## Create via the UI

To create a collector within your application, you need to use the Clarifai’s [Collectors module](https://clarifai.com/clarifai/data/modules/collector). 

Let’s demonstrate how you can use the module to create a collector via the UI. 

### Install the Module

#### Option 1

Go to the Collectors module [page](https://clarifai.com/clarifai/data/modules/collector) and click the **Install Module** button at the upper-right corner. 

Next, on the small window that pops up, select a desired user and destination app for installing the module.

Click the **Confirm** button.

![](/img/modules/collector-1.png)

On the ensuing page, choose a destination URL for installing the module, select the module visibility, and click the **Install to this App!** button. 

After the module has been successfully installed, click the **Click to use installed module version** button to start using it. You can also refresh the page for your installed module to appear on the left sidebar under the **Installed Modules** category.

![](/img/modules/collector-2.png)

If you click the button, you’ll be redirected to a page that requires you to authorize the module to access data on your behalf. You will see the permissions the module requires.  

![](/img/modules/collector-3.png)

Click the **Authorize** button.

#### Option 2

Alternatively, you can use the module’s URL to install it in your app. To do so, click the **Manage Installed Modules** option at the bottom of the collapsible left sidebar. 

Grab the URL of the Collectors module and paste it into the **Module URL** input field.  

![](/img/modules/collector-4.png)

You can then follow the ensuing prompts to complete installing the module in your app. 

### Create Collector

After installing the module and authorizing it to access data on your behalf, you’ll be redirected to a page that allows you to create it. You can fill in the required details. 
 
![](/img/modules/collector-5.png)

#### Collector ID​

Give your collector a useful and descriptive name.

#### Description
​
Provide additional details about your collector.

#### Pre-queue Workflow​

In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion.

Common pre-queue workflows are designed to:

- Randomly sample inputs
- Filter inputs by metadata
- Filter inputs with a maximum probability below a given threshold
- Filter inputs with a minimum probability above a given threshold
- Filter specific concept probabilities above a given threshold
- Undertake knowledge graph mapping from public General model concepts to a custom model

:::note

At least one (pre-queue or post-queue) workflow ID is required. 

:::

> _For this example, let’s create a **random-sample** workflow, which randomly samples the inputs to be collected in your app. Let’s set the **keep_fraction** parameter to 1, implying that all (100%) the inputs predicted by the specified model will be kept and added to your app._ 

> ![](/img/modules/collector-6.png)

> _After creating the workflow in the [Workflow Builder](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows/), let’s select it in the **Pre-Queue Workflow** field._

#### Post-queue Workflow​

This is the workflow to run after the collector has processed the queued input. This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. 

> _For this example, let’s create an **image-to-text** workflow, which uses the [general-english-image-caption-blip](https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip) model to generate English captions from images. So, the images outputted by the pre-queue workflow will be captioned by the post-queue workflow, and the captioned text stored in your app._

> ![](/img/modules/collector-11.png)

> _After creating the workflow in the Workflow Builder, let’s select it in the **Post-Queue Workflow** field._

If the workflow output has any field that is non-empty, then it will be passed on to POST /inputs to the destination app.

#### Post Inputs Key

Select the PAT key that you would like your module to use to enable inputs to be posted to your app. This key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app. 

It should also have the permissions to access the source model used for making the predictions. 

#### Activate Collector

Select the checkbox if you want to activate the collector and make it ready to be used. Otherwise, the collector will remain inactive. 

#### Caller

Specify the ID of the caller who will be making the prediction requests. You can even provide your own user ID. 

#### Source

Specify the source model from which you want to collect data. The collector will automatically post the inputs utilized by the caller for making predictions using the specified model into your app. 

You need to specify the model URL and its version ID. 

> _For this example, let’s specify the [general-image-recognition]( https://clarifai.com/clarifai/main/models/general-image-recognition) model with its version ID as aa7f35c01e0642fda5cf400f543e7c40._

#### Create new Collector

Here are the details we provided for creating the new collector:

![](/img/modules/collector-7.png)

Finally, click the **Create new collector** button. 

### Manage Collectors

If you click the **Show All** option located under the **collector** module within the collapsible left sidebar, you will be directed to a subsequent page where your created collector, along with its corresponding details, will be listed for your review.

This page also allows you to effortlessly deactivate, reactivate, or delete collectors as needed.

![](/img/modules/collector-8.png)

If you click the **Update** option, you will be directed to a subsequent page where you can update the details of your collector.

### Example

Let’s say the caller you’d specified uses [this image](https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg) to make a prediction on the general-image-recognition model, which you’d stated as the source model. 

![](/img/modules/collector-9.png)

The image used for making the prediction will be automatically captured, captioned, and the generated text stored in your app — according to the rules you specified when creating the collector.  

![](/img/modules/collector-10.png)

If you update the collector by deselecting the post-queue workflow, only the pre-queue workflow will remain active. As such, you'll notice that the image used for making the prediction will be captured in your app as-is. 

![](/img/modules/collector-12.png)

That’s it! 

## Create via the API

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonAddCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/add_collector.py";
import PythonUpdateCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/update_collector.py";
import PythonListCollectors from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/list_collectors.py";
import PythonGetCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/get_collector.py";
import PythonDeleteCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/delete_collector.py";

import JSAddCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/add_collector.html";
import JSUpdateCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/update_collector.html";
import JSListCollectors from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/list_collectors.html";
import JSGetCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/get_collector.html";
import JSDeleteCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/delete_collector.html";

import NodeAddCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/add_collector.js";
import NodeUpdateCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/update_collector.js";
import NodeListCollectors from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/list_collectors.js";
import NodeGetCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/get_collector.js";
import NodeDeleteCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/delete_collector.js";

import JavaAddCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/add_collector.java";
import JavaUpdateCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/update_collector.java";
import JavaListCollectors from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/list_collectors.java";
import JavaGetCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/get_collector.java";
import JavaDeleteCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/delete_collector.java";

import PHPAddCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/add_collector.php";
import PHPUpdateCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/update_collector.php";
import PHPListCollectors from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/list_collectors.php";
import PHPGetCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/get_collector.php";
import PHPDeleteCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/delete_collector.php";

import CurlAddCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/add_collector.sh";
import CurlUpdateCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/update_collector.sh";
import CurlListCollectors from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/list_collectors.sh";
import CurlGetCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/get_collector.sh";
import CurlDeleteCollector from "!!raw-loader!../../../../code_snippets/api-guide/data/collectors/delete_collector.sh";

### Collector Parameters

Let's talk about the parameters required to create a collector via the API. 

#### Collector ID

Give your collector a useful and descriptive name.

#### Description

Provide additional details about your collector.

#### Pre-queue Workflow

In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion.

Common pre-queue workflows are designed to:

- Randomly sample inputs
- Filter inputs by metadata
- Filter inputs with a maximum probability below a given threshold
- Filter inputs with a minimum probability above a given threshold
- Filter specific concept probabilities above a given threshold
- Undertake knowledge graph mapping from public General model concepts to a custom model

:::note

At least one (pre-queue or post-queue) workflow ID is required. 

:::

#### Post-queue Workflow​

This is the workflow to run after the collector has processed the queued input. This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. 

#### Source

These are the details of the source model from which you want to collect data. The collector will automatically post the inputs utilized by the caller for making predictions using the specified model into your app. 

#### Post Inputs Key

This is the PAT or the API key to use to enable inputs to be posted to your app. This key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app. 

It should also have the permissions to access the source model used for making the predictions. 

#### Caller User ID

This is the ID of the caller who will be making the prediction requests. You can even provide your own user ID. 

### Add Collector

Here is how to add a new collector to your application.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSAddCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddCollector}</CodeBlock>
</TabItem>

</Tabs>

### Update Collector

You can update an existing collector.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-javascript">{JavaUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateCollector}</CodeBlock>
</TabItem>

</Tabs>

### List Collectors

You can list all the collectors in your app. Click [here](https://docs.clarifai.com/api-guide/advanced-topics/pagination/) to learn how to control the page that gets displayed.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListCollectors}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSListCollectors}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListCollectors}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListCollectors}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListCollectors}</CodeBlock>
</TabItem>


<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListCollectors}</CodeBlock>
</TabItem>

</Tabs>

### Get Collector

You can return the details of a certain collector.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSGetCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetCollector}</CodeBlock>
</TabItem>

</Tabs>

### Delete Collector

You can delete a collector.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{JSDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteCollector}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteCollector}</CodeBlock>
</TabItem>

</Tabs>

