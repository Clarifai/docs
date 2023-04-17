---
description: Connect your models together in a workflow
sidebar_position: 1
---

# Input Nodes

**Connect your models together in a workflow**
<hr />

The outputs from one model can be used as the inputs in another model. This allows you to link together the models in a workflow graph. Linking models help you build sophisticated AI solutions that can zero-in on specific use cases.

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

You can create workflows out of any Clarifai models or custom models that you have created for your app. The inputs and outputs supported by your custom models will depend on the inputs and outputs supported by the Clarifai models, or model templates that you have used to build them.

In this example, we'll create a simple custom workflow that first extracts text from an image and then translates the extracted text to Spanish.

We'll connect the following two models to achieve our objective:

- The [ocr-scene-english-paddleocr](https://clarifai.com/clarifai/main/models/ocr-scene-english-paddleocr) model, which detects and recognizes English texts in images;
- The [text-translation-english-spanish](https://clarifai.com/helsinkinlp/translation/models/text-translation-english-spanish) model, which translates texts from English to Spanish.

We'll specify the IDs of the models and their versions—since a model can have several versions.

:::info

You can add up to 20 models to a single workflow.

:::
### Create Application

Let's begin by creating an application, which will act as the container for all the related models and workflows for this particular project.

Log in to your account and click the **Create an App** button at the top-right section of the navigation bar. And on the small window that pops up, provide the information required to create a new application—a unique name, a short description, a language, and a default base workflow.

![create app](/img/community_2/input_nodes_create_app.png)

This is how the newly created app looks like.

![new app](/img/community_2/input_nodes_new_app.png)

### Create a New Workflow

To create a new workflow, select the **App Workflows** option on the collapsible left sidebar. Next, click the **Create Workflow** button on the top-right corner of the page.

![create new workflow](/img/community_2/input_nodes_create_new_workflow.png)

### Connect Your Nodes

You'll be redirected to a simple no-code, drag-and-drop interface that allows you to connect your models together. You'll need to connect the `Input Nodes` in your workflow. You can link your models to any models that precede them in the visual graph.

Let's start by clicking the input box on the top section of the page and providing a name for the custom workflow. 

Next, on the left-hand sidebar, let's search for an optical-character-recognizer model, which is how computers extract texts from images, such as scans of printed pages or photos of street signs.

![search model for workflow](/img/community_2/input_nodes_search_model.png)

After finding the model type, let's drag and drop it on the empty workspace pane. This model will be configured automatically as a node in the workflow.

![empty workflow pane](/img/community_2/input_nodes_empty_pane.png)

Let's also search for another model, a text-to-text model, which transforms one kind of text into another. After finding the second model, let's also drag and drop it on the workspace. It will also be configured automatically as a node in the workflow.

![add another model](/img/community_2/input_nodes_add_another_model.png)

The models in the workflow will automatically connect when they are placed near each other. This shows the flow of information from one model to another.
You can also grab the node connectors on each model and configure your workflow nodes manually.

For this example, let's use the node connectors to draw a line that connects the two models. 

![connect models](/img/community_2/input_nodes_connect_models.png)

Let's click the **optical-character-recognizer** button. And on the search box that appears on the right side of the page, specify the **ocr-scene-english-paddleocr** model as the one we'll use for optical character recognition. We'll also select the version of the model we want to use. 

![ocr model](/img/community_2/input_nodes_ocr_model.png)

Similarly, let's click the **text-to-text** button and specify the **text-translation-english-spanish** model as the one we'll use for translating the extracted text from English to Spanish. We'll also select its version.

![text to text model](/img/community_2/input_nodes_text_to_text.png)

Finally, let's click the **Save Workflow** button to save this workflow. That will save the state of your workflow. Now you are ready to predict using your brand new workflow. You can also edit your workflow at any time.

![save workflow](/img/community_2/input_nodes_save_workflow.png)

### Update Your Base Workflow

To activate your new workflow in your app, go to the **App Settings** page, and change the `Base Workflow` to the new workflow that you have just created.

![change base workflow](/img/community_2/input_nodes_change_base_workflow.png)


