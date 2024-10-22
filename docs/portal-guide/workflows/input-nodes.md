---
description: Learn how to connect your models together in a workflow
sidebar_position: 1
---

# Input Nodes

**Learn how to connect your models together in a workflow**
<hr />

The outputs from one model can be used as the inputs in another model. This allows you to create nodes that link together the models in a workflow graph. 

Linking models help build sophisticated AI solutions that can zero in on specific use cases.

## Supported Input and Output Types

Different models accept different types of inputs and return different types of outputs. They are named after the fields in the Data object of our API. This object is used in inputs, annotations, models, and workflows. 

Some examples include:

#### Inputs

* Concepts
* Embeddings
* Image
* Image or video
* Regions

#### Outputs

* Concepts
* Clusters
* Regions

## Create Your Workflow

You can create workflows out of any Clarifai models or custom models that you have created for your app. The inputs and outputs supported by your custom workflows will depend on the inputs and outputs supported by the models that you have used to build them.

In this example, we'll create a simple custom workflow that first extracts text from an image and then translates the extracted text to Spanish.

We'll connect the following two Clarifai models to achieve our objective:

- The [ocr-scene-english-paddleocr](https://clarifai.com/clarifai/main/models/ocr-scene-english-paddleocr) model, which detects and recognizes English texts in images;
- The [text-translation-english-spanish](https://clarifai.com/helsinkinlp/translation/models/text-translation-english-spanish) model, which translates texts from English to Spanish.

We'll specify the IDs of the models and their versions — since a model can have several versions.

:::info

You can add up to 20 models to a single workflow.

:::

## Step 1: Create Application

Let's begin by creating an application, which will act as the container for all the related models and workflows for this particular project.

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai platform.

:::note

When creating the application, select the Text/Document option as the primary input type.

:::

## Step 2: Create a New Workflow

To create a new workflow, select the **Workflows** option in the collapsible left sidebar. Next, click the **Create Workflow** button in the upper-right corner of the page.

![create new workflow](/img/community_2/input_nodes_create_new_workflow.png)

## Step 3: Create Your Nodes

You'll be redirected to a simple, no-code, drag-and-drop interface that allows you to connect your models together. You'll need to connect the input nodes in your workflow. You can link your nodes to any nodes that precede them in the visual graph.

### Name Your Workflow

Let's start by clicking the input field in the upper section of the page and providing a name for the custom workflow. 

### Search for First Node

Next, in the left sidebar, search for the `optical-character-recognizer` node. This allows you to configure a model that enables the extraction of texts from images, such as scans of printed pages or photos of street signs.

After finding the node, drag and drop it on the empty workspace pane and connect it to the `IN` element.

![empty workflow pane](/img/community_2/input_nodes_empty_pane.png)

:::tip

You can use the tools on the left side of the workspace pane to manage the workflow creation process. These tools enable you to zoom in and out, fit the view, arrange the workflow, reset the workspace, and perform other actions to help you efficiently design and organize your workflow.

:::

### Search for Second Node

Next, search for the `text-to-text` node. This allows you to configure a model that enables the transformation of one kind of text into another.  

After finding the second node, drag and drop it on the workspace and draw a line that connects it to the first node. This shows the flow of information from one node to another.

![add another model](/img/community_2/input_nodes_add_another_model.png)


## Step 4: Search for Models

Click the `optical-character-recognizer` node. And on the search box that appears on the right side of the page, specify the **ocr-scene-english-paddleocr** model as the one to use for optical character recognition. Also, select the version of the model you want to use. 

![ocr model](/img/community_2/input_nodes_ocr_model.png)

Similarly, click the `text-to-text` node and specify the **text-translation-english-spanish** model as the one to use for translating the extracted text from English to Spanish. Also, select its version.

![text to text model](/img/community_2/input_nodes_text_to_text.png)

## Step 5: Save Workflow

Finally, click the **Save Workflow** button to save the workflow. This will save the state of your workflow. Now, you are ready to [predict](https://docs.clarifai.com/portal-guide/workflows/setting-up-a-mesh-workflow/#workflow-predict) using your brand-new workflow. 

![save workflow](/img/community_2/input_nodes_save_workflow.png)

## Edit Workflow

After creating your workflow, you can edit it at any time by navigating to its individual page and clicking the **Edit workflow** button in the upper-right section. 

This allows you to make changes easily whenever needed.

![](/img/community_2/input_nodes_edit_workflow_2.png)

For example, to add a `text-to-audio` node to your workflow, first locate it in the left sidebar. Drag the node and connect it to the preceding `text-to-text` node. Next, use the search box on the right side of the page to select the specific model you want for the text-to-audio conversion.

![](/img/community_2/input_nodes_edit_workflow_1.png)

Once you've made your changes, click the **Save as new version** button to save the updated workflow under a new version — without exiting the workflow editor. 

:::note

You can easily switch between different versions by selecting the respective version ID from the left sidebar in the workflow editor.

:::

Note that clicking the **Update Workflow** button creates a new version of your workflow and exits the workflow editor, redirecting you to the workflow's main page.

![](/img/community_2/input_nodes_edit_workflow_3.png)

