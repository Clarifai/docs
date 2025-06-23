---
description: Learn how to create and train a visual classifier model 
sidebar_position: 2
---

# Visual Classifier 

**Learn how to create and train a visual classifier model**
<hr />

**Input**: Images and videos

**Output**: [Concepts]( https://docs.clarifai.com/portal-guide/concepts)

Visual classifier is a type of deep fine-tuned model that allows you to classify images and video frames into a set of concepts. It helps you answer the question "What" or "Who" is in your data.

![](/img/others-2/image_classification_example.webp)
<center>Image classification example</center>

:::info

The visual classifier model type also comes with various [templates](https://docs.clarifai.com/portal-guide/model/deep-training/visual-classification-templates/) that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.

::: 

Visual classifiers are commonly used for various computer vision tasks, such as:

- **Image classification**: Categorizing images into different concepts, such as "cat", "dog", "car", or "person".
- **Object detection**: Finding and identifying objects in images, such as faces, cars, or traffic signs.
- **Scene recognition**: Identifying the scene in an image, such as a beach, a forest, or a city.
- **Video analysis**: Tracking objects and events in videos.

You may choose a visual classifier model type in cases where:

- Accuracy and the ability to carefully target solutions take priority over speed and ease of use.
- You need a classification model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example Use Case

A large retailer is looking to find and remove listings for illegal objects and substances across thousands of listings that include user-generated data. A classification model allows the retailer to quickly find listings that violate their community rules, and remove them from the site.

##  **Via the UI**

Let's demonstrate how to create and train a visual classifier model using the UI. We intend to create a model that can distinguish between images of cats and dogs.

### Step 1: Prepare Training Data

Preparing data for fine-tuning ensures that the custom model learns effectively from the new task or domain, generalizes well to unseen data, and produces reliable predictions.

Ensure that you collect high-quality, well-prepared data that will help achieve optimized performance in your model. 

You can prepare your data using your preferred spreadsheet software. 
[Click here](https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv) to download a CSV template you can use to prepare your data.

To illustrate how fine-tuning works, we'll prepare the following simple dataset consisting of images of dogs and cats. Note that for your model to perform well, you need to provide it with enough diverse data to learn meaningful patterns. [Click here](https://www.clarifai.com/blog/using-ai-to-create-applications-downloading-images-easily) to learn how you can get images to enrich your dataset. 

<details>
  <summary>Sample Dataset</summary>

```
https://samples.clarifai.com/dog1.jpeg
https://samples.clarifai.com/dog2.jpeg
https://samples.clarifai.com/dog3.jpeg
https://samples.clarifai.com/dog2_tiny.jpeg
https://samples.clarifai.com/dog.tiff
https://samples.clarifai.com/cat1.jpeg
https://samples.clarifai.com/cat2.jpeg
https://samples.clarifai.com/cat3.jpeg
https://samples.clarifai.com/featured-models/blip-flying-cat.jpg
https://samples.clarifai.com/featured-models/social-media-cat-laying-down.jpg
```
</details>


### Step 2: Create an App

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai portal. 

:::note

When creating the application, go with the default Image/Video option as the primary input type. And in the collapsible **Advanced Settings** field, also go with the default **Universal** as the [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/). 

:::

### Step 3: Add and Annotate Inputs

Select the **Inputs** option on your app’s collapsible left sidebar. Next, use the inputs uploader pop-up window to [upload](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#add-inputs) the images of dogs you prepared to a [dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) within your application.  

Also, [label](https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete) the images with the "dog" concept. 

![](/img/community_2/my-deep-training-1.png)

Click the **Upload inputs** button to add the annotated images of dogs to your app. 

Similarly, use the inputs uploader pop-up window to upload the images of cats you prepared to the same dataset.

Also, label the images with the "cat" concept.

![](/img/community_2/my-deep-training-2.png)

Click the **Upload inputs** button to add the annotated images of cats to your app.

### Step 4: Choose a Model Type

Select the **Models** option on your app’s collapsible left sidebar. 

Click the **Add Model** button on the upper-right corner of the page. On the window that pops up, select the **Build a Custom Model** option and click the **Continue** button.

![](/img/community_2/my-deep-training-3.png)

You’ll be redirected to a page where you can choose the type of model you want to create and fine-tune.

Select the **Visual Classifier** option.

![](/img/community_2/my-deep-training-4.png)

### Step 5: Create the Model

The ensuing page allows you to create and fine-tune a visual classifier model that categorizes images into a set of predefined concepts.

Provide a unique ID and click the **Continue to Configure model** button to create your model. 

![](/img/community_2/my-deep-training-5.png)

After creating the model, set it up for training. 

![](/img/community_2/my-deep-training-6.png)

- **Dataset** — Select the dataset you previously created that has the images of the dogs and cats. You can also select [a specific version](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#update-a-dataset-version) for it. 
- **Concepts** — Select the list of concepts you want the model to predict from the existing concepts in your app. For this example, let's select "cat" and "dog."
- **Invalid Data Tolerance Percent** — Optionally, you can set a tolerance threshold (0 to 100) for the percentage of invalid inputs during training, and if this threshold is exceeded, training is stopped with an error.
- **Template** — Select a pre-configured model template you want to use to fine-tune your model. When you choose a deep training template, you will see the hyperparameters that are available within that template populated with default values. You can adjust these values as desired. For this example, we’ll go with the recommended template: `MMClassification_ResNet_50_RSB_A1`. [Click here](https://docs.clarifai.com/portal-guide/model/deep-training/visual-classification-templates) to learn more about the visual classification templates. 


:::note

Notice that the estimated duration for the training process is displayed for you. This [Training Time Estimator](https://docs.clarifai.com/create-manage/models/deep-fine-tuning/#training-time-estimator) feature offers transparency in expected training costs.

:::

### Step 6: Train the Model​

After configuring the training settings, click the **Train Model** button to initiate training your model. 

You'll be redirected to the individual page of your model. 

![](/img/community_2/my-deep-training-7.png)

If you check the [model's versions table](https://docs.clarifai.com/portal-guide/model-versions/#model-versions-table), you’ll notice that the model is still being trained. 

Many hours may be required to deep train models with large numbers of inputs and complex taxonomies. You can cancel a deep fine-tuning job at any time by clicking the **Cancel training** button. 

:::caution

Deep fine-tuning is billed at an hourly rate, and for canceled jobs, you will be charged for the time you've used to train your model. You can learn more about deep fine-tuning pricing [here](https://www.clarifai.com/pricing).

:::

You can check the training progress by clicking the **View Training Log** button. If you click the button, a small sidebar will appear with details of the training exercise. 
You can also download the training log data by clicking the **download** button. 

![](/img/community_2/my-deep-training-7-1.png)

### Step 7: Use the Model​

After the model has been trained, the status will change to **Model Trained**.

In the **Actions** column, you can carry out the following:

- Copy the model version ID
- View the model in the [leaderboard](https://docs.clarifai.com/portal-guide/evaluate/leaderboard/)
- View the [model version details](https://docs.clarifai.com/portal-guide/model-versions/)
- Download the training log data
- Delete the model version

![](/img/community_2/my-deep-training-8.png)

Once you've created and trained your new model, you can put it to work. It will be ready to be [evaluated](https://docs.clarifai.com/portal-guide/evaluate/), combined with other models and [agent operators](https://docs.clarifai.com/portal-guide/model/agent-system-operators/) in a workflow, or used to serve [inference](https://docs.clarifai.com/portal-guide/ppredict) requests as it is.

That's it!

##  **Via the API**

Let's demonstrate how to create and train a visual classifier model using our API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeVC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/create_app.py";
import CodeDU from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/dataset_upload.py";
import CodeMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/model_type.py";
import CodeMC from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/model_creation.py";
import CodeTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/template_selection.py";
import CodeS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/setup.py";
import CodeS2 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/setup2.py";
import CodeIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/imt.py";
import CodeMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/visual_classifier/mp.py";
import CodeTrEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/train_eval.py";
import CodeTeEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/test_eval.py";
import CodeCMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/cmp.py";

import CodeOutputMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/model_type.txt";
import CodeOutputTS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/template_selection.txt";
import CodeOutputS from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/setup.txt";
import CodeOutputS2 from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/setup2.txt";
import CodeOutputIMT from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/imt.txt";
import CodeOutputMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_training/outputs/visual_classifier/mp.txt";
import CodeOutputTrEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/train_eval.txt";
import CodeOutputTeEv from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/test_eval.txt";
import CodeOutputCMP from "!!raw-loader!../../../../code_snippets/python-sdk/model_eval/visual_classifier/outputs/cmp.txt";

import PythonCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.py";
import JSCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.html";
import NodeCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.js";
import JavaCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.java";
import PHPCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.php";
import CurlCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/create_model.sh";

import PythonTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.py";
import JSTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.html";
import NodeTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.js";
import JavaTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.java";
import PHPTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.php";
import CurlTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/deep_training/train_model.sh";

### Step 1: App Creation

Let's start by creating an [app](https://docs.clarifai.com/create-manage/applications/create). 


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeVC}</CodeBlock>
</TabItem>
</Tabs>


### Step 2: Dataset Upload

Next, let’s upload the [dataset](https://docs.clarifai.com/create-manage/datasets/upload) that will be used to train the model to the app.

You can find the dataset we used [here](https://github.com/Clarifai/examples/tree/main/datasets/upload/image_classification).

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>


### Step 3: Model Creation

Let's list all the available trainable model types in the Clarifai platform.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMT}</CodeBlock>
</details>

Next, let's select the `visual-classifier` model type and use it to create a model.  


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCreateModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCreateModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCreateModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateModel}</CodeBlock>
</TabItem>
</Tabs>

### Step 4: Template Selection

Let's list all the available training templates in the Clarifai platform.


<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>


Next, let's choose the `'MMClassification_EfficientNet' ` template to use for training our model, as demonstrated below.

### Step 5: Set Up Model Parameters

You can save the model parameters in a YAML file, which can then be passed to the model when initiating training.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>

You can customize the YAML file according to your requirements and then reload it for model training.

Below is an example of the modifications made to the YAML file:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS2}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS2}</CodeBlock>
</details>

### Step 6: Initiate Model Training

You can initiate model training by passing the YAML configuration file as a parameter to `model.train()`. The Clarifai API also provides features for monitoring training status and saving training logs to a local file.

:::note

If the status code is `MODEL-TRAINED`, it indicates that the model has been successfully trained and is ready for use.

:::

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainModel}</CodeBlock>
</TabItem>
-->

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaTrainModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTrainModel}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainModel}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputIMT}</CodeBlock>
</details>


### Step 7: Model Prediction

After the model is trained and ready to use, you can run some predictions with it.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMP}</CodeBlock>
    <img src="/img/python-sdk/vc_mp.png" />
</details>


### Step 8: Model Evaluation

Let’s evaluate the model using both the training and test datasets. We’ll start by reviewing the evaluation metrics for the training dataset.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTrEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTrEv}</CodeBlock>
</details>

Before evaluating the model on the test dataset, ensure it is uploaded using the data loader. Once uploaded, proceed with the evaluation.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTeEv}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTeEv}</CodeBlock>
</details>

Finally, to gain deeper insights into the model’s performance, use the `EvalResultCompare` method to compare results across multiple datasets.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCMP}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCMP}</CodeBlock>
</details>
