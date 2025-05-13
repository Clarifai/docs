---
description: Learn how to use transfer learning to create custom visual classifier model
sidebar_position: 2
---

# Visual Classifier

**Learn how to use transfer learning to create custom visual classifier models**
<hr />

A visual classifier model is a type of machine learning model that is trained to recognize and categorize images or visual inputs into predefined classes or labels. It "classifies" visual data based on patterns it has learned from training examples.

Let's demonstrate how you can create a custom visual classifier model using the [transfer learning](README.mdx) technique. 

![](/img/illustration-training.png)

## **Via the UI**

Let’s walk through how to create a model using the UI that can distinguish between pants and shorts.

### Step 1: Create an App

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai platform.

:::note

When creating the application, go with the default Image/Video option as the primary input type.

:::

### Step 2: Create a Dataset

[Click here](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete/#create-a-new-dataset) to learn how to create a dataset that will store the inputs. 


### Step 3: Add and Annotate Inputs

Next, you need to upload data to the app you've created. The input data, labeled with concepts, is what will be used for training your model. Training helps your model to “learn” from the annotated concepts on your inputs so that it can be able to recognize them. 

To get started with transfer learning, you don't need a large number of images. We recommend beginning with just 10 and adding more as needed. 

In this example, we'll use 5 images of pants and 5 images of shorts sourced from [this clothing dataset](https://github.com/alexeygrigorev/clothing-dataset-small). You can clone the repository and follow along with this documentation.

To upload inputs, select the **Inputs** option in the collapsible left sidebar. Next, click the **Upload inputs** button. 

![upload inputs](/img/community_2/custom_model_upload_inputs.png)

The small window that pops up allows you to upload your inputs — either by providing publicly accessible URLs or by uploading them directly from your local device. For this illustration, we'll upload the images of pants and shorts from a local device. 

![upload inputs window](/img/community_2/custom_models_upload_inputs_window.png)

- Use the **Select or add datasets** search box to select the dataset you previously created for storing the uploaded inputs. 

- To label the inputs with the `pants` concept, click the plus (**+**) icon next to the **Select or add concepts** search box. Then, type the new concept name in the search box. The new name you've typed will appear underneath the search box. Click the **Add new concept** button to create the concept. Once created, the concept will be listed underneath the search box. 

- Click the **Upload inputs** button at the bottom of the pop-up window to finalize uploading your annotated inputs to the dataset. 

- Similarly, upload the images of shorts to the dataset you previously created, and label them with the `shorts` concept. 

![](/img/community_2/custom_models_upload_inputs_window_2.png)

:::tip

[Click here](https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete) to learn more about labeling inputs.

:::

### Step 4: Update Dataset

Next, go to the individual page of your dataset and create a version for it by clicking the **New version** button. This bookmarks the state of your data so that you can apply a specific version for training your custom model. 

![](/img/community_2/custom_model_dataset_version.png)

### Step 5: Choose a Model Type

Once you've added images that contain the concepts you want to train for, you can now proceed to create your custom model.

To begin, select the **Models** option in the collapsible left sidebar. On the ensuing page, click the **Add Model** button in the upper-right corner.

In the pop-up window, choose the **Build a Custom Model** option, then click **Continue** to proceed.

![](/img/community_2/custom_model_create_model.png)

You’ll be redirected to a page where you can choose the type of model you want to create 

Let’s choose the **Transfer Learn** model type. 

![](/img/community_2/custom_model_create_new_model.png)

### Step 6: Create a Model 

On the ensuing page, provide a unique ID and click the **Continue to Configure Model** button to create your model.

![](/img/community_2/custom_model_create_new_model-2.png)

### Step 7: Set Up the Model

Next, you need to set up the model for training by providing the required details. 

![Create model page](/img/community_2/custom_model_create_model_page.png)

- **Dataset** — Select a dataset to use to train the model. For this example, let's select the dataset we previously created — alongside its version. 
- **Base Embed Model** — You can select the base model version to use for embeddings, which has to be one of the embed models in the app workflow. This allows you to specify the specific model in case the default workflow of your app has multiple embedding models present in it. For this example, let's go with the default option.
- **Concepts** — Select the concepts that you want the model to predict. For this example, let's choose the `pants` and `shorts` concepts. 
- **Concepts Mutually Exclusive** — Let's turn the button on to indicate no overlap between any of the model concepts. 
- **Enrich Dataset** — If enabled and set to `Automatic`, this option enhances your model by incorporating supplemental data from pre-built datasets of negative embeddings, helping to improve accuracy. Alternatively, setting it to `Disabled` will exclude the use of negative embeddings, regardless of their availability.
For this example, we'll proceed with the default `Automatic` option.
- **Inference Settings (optional)** — Optionally, you can configure the provided inference settings for your model. 

After configuring the settings, click the **Train Model** button to begin training your custom model.

### Step 8: Use Your Custom Model

You'll be redirected to the created model's page. Once the visual classifier model is trained, which normally takes a few seconds, you can put it to work. 

For example, to use it for making a [prediction](https://docs.clarifai.com/portal-guide/ppredict/), click the blue (**+**) **Try your own images or videos** button. A small window will pop up that allows you to upload an input and see its prediction probabilities on the right side of the page. 

![Predict with custom model](/img/community_2/custom_model_create_model_page-2.png)

That's it!

## **Via the API**

Let’s walk through how to create a visual classifier model using the API.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonAddImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/model/py/add_images_with_concepts.py";
import PythonCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/py/create_model.py";
import PythonTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/py/train_model.py";
import PythonPredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/py/predict_with_model.py";

import JSAddImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/model/js/add_images_with_concepts.html";
import JSCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/js/create_model.html";
import JSTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/js/train_model.html";
import JSPredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/js/predict_with_model.html";

import NodeAddImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/model/node/add_images_with_concepts.js";
import NodeCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/node/create_model.js";
import NodeTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/node/train_model.js";
import NodePredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/node/predict_with_model.js";

import JavaAddImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/model/java/add_images_with_concepts.java";
import JavaCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/java/create_model.java";
import JavaTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/java/train_model.java";
import JavaPredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/java/predict_with_model.java";

import CurlAddImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/add_images_with_concepts.sh";
import CurlCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/create_model.sh";
import CurlTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/train_model.sh";
import CurlPredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/predict_with_model.sh";

import PHPAddImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/model/php/add_images_with_concepts.php";
import PHPCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/php/create_model.php";
import PHPTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/php/train_model.php";
import PHPPredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/php/predict_with_model.php";

import ExampleAddImagesConcepts from "!!raw-loader!../../../../code_snippets/api-guide/model/code_output_examples/add_images_with_concepts.js";
import ExampleCreateModel from "!!raw-loader!../../../../code_snippets/api-guide/model/code_output_examples/create_model.js";
import ExampleTrainModel from "!!raw-loader!../../../../code_snippets/api-guide/model/code_output_examples/train_model.js";
import ExamplePredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/code_output_examples/predict_with_model.js";
import ExampleTextPredictModel from "!!raw-loader!../../../../code_snippets/api-guide/model/code_output_examples/predict_with_model.txt";

### Step 1: Create an App

Before you create and train your first model, you need to [create an application](https://docs.clarifai.com/create-manage/applications/create) and select **Image/Video** as the primary input type. 

### Step 2: Add Images With Concepts

:::tip

This walkthrough example assumes that you've selected a Classification Base Workflow. If you choose a Detection Base Workflow, then this **Add Images With Concepts** example could throw an error message, such as `Adding/patching inputs with pre-tagged concepts is not allowed for apps with a detection model in their base workflow. Please use Post or Patch Annotations instead.` If you get such an error, you should first upload the inputs without any concepts attached and then use the [Annotations endpoint](https://docs.clarifai.com/api-guide/annotate/annotations/#add-annotations) to label the inputs.

:::

To get started training your own model, you need to first add images that already contain the concepts you want your model to see.

<Tabs>

<TabItem value="grpc_python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddImagesConcepts}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{ExampleAddImagesConcepts}</CodeBlock>
</details>


### Step 3: Create a Model

After adding images with concepts, you are now ready to create a custom transfer learning model (also called an "embedding-classifier"). You need to provide an ID for the model. 

If you want to [create another type of model](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete#create-a-model) you could use the `model_type_id` parameter to specify it. Otherwise, the "embedding-classifier" model type will be created by default. 

:::tip

**PostModels** will create new models but not create new model versions. This means trainable models that have not yet been trained will require the additional step of calling the [**PostModelVersions**](#step-4-train-the-model) endpoint, while providing the `*_info` fields in the model version—to affect training.

:::

Take note of the `model id`, as we'll need that for the next steps.

<Tabs>

<TabItem value="grpc_python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCreateModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCreateModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCreateModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateModel}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{ExampleCreateModel}</CodeBlock>
</details>

### Step 4: Train the Model

Now that you've added images with concepts, then created a model, the next step is to train the model. When you train a model, you are telling the system to look at all the images with concepts you've provided and learn from them. 

This train operation is asynchronous. It may take a few seconds for your model to be fully trained and ready.

Take note of the `model_version id` in the response. We'll need that for the next section when we predict with the model.

:::note

- The **PostModelVersions** endpoint kicks off training and creates a new model version. You can also add concepts to a model when creating the model version—and only if the model type supports it as defined in the model type parameters.

- You can use the **PostModelVersions** endpoint to give information specific to a model version. All the `*_info` fields—such as `output_info`, `input_info`, `train_info`, and `import_info`—are available on this endpoint. 

- You cannot remove the training concepts from a model version. However, you can edit the additional `OutputInfo.Params` concept options if they are defined in the model type.

- When training an embedding-classifier, you could specify the [`enrich_dataset`](https://docs.clarifai.com/product-updates/upcoming-api-changes/closed-environment) variable inside `modelVersion.TrainInfo.Params` of the **PostModelVersions** endpoint. It lets you enrich the model with supplemental data from pre-built datasets of negative embeddings, which improves the model's accuracy. It has two options: 
    - `Automatic` (default) means that if there are negative embeddings for a base model, we will use them—and we won’t use them if they’re not available. 
    - `Disabled` means that we should not use the negative embeddings whether they are available or not. 

:::

<Tabs>

<TabItem value="grpc_python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeTrainModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaTrainModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPTrainModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainModel}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{ExampleTrainModel}</CodeBlock>
</details>

### Step 5: Predict With the Model

Now that we have trained the model, we can start making predictions with it. In our predict call, we specify three items: the `model id`, `model version id` \(optional, defaults to the latest trained version if omitted\), and the `input` we want a prediction for.

:::tip

You can repeat the above steps as often as you like. By adding more images with concepts and training, you can get the model to predict exactly how you want it to.

:::

<Tabs>

<TabItem value="grpc_python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonPredictModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPredictModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodePredictModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaPredictModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPPredictModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPredictModel}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-js">{ExampleTextPredictModel}</CodeBlock>
</details>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{ExamplePredictModel}</CodeBlock>
</details>
