---
description: Combine multiple models and carry out different operations using workflows
sidebar_position: 1
---


# Working With Workflows


**Combine multiple models and carry out different operations using workflows**
<hr />

Clarifai Workflows is a powerful feature that enables you to combine multiple AI models and operations into a unified pipeline. Instead of relying on individual models, you can create sophisticated multi-model systems that address complex use cases through a single API call. 

Workflows provide a modular architecture for your inference pipeline, serving as building blocks for advanced machine learning ensemble modeling and business logic. With workflows, you can work with your machine learning models like they are nodes in a graph.


## **Creating Workflows**

You can create workflows out of any Clarifai models or custom models that you have created for your app. The inputs and outputs supported by your custom workflows will depend on the inputs and outputs supported by the models that you have used to build them.


Different models accept various input types and return diverse outputs. Examples include:



* **Inputs**: Concepts, Embeddings, Image, Image or Video, Regions
* **Outputs**: Concepts, Clusters, Regions

Let’s demonstrate creating workflows with an example. In this example, we'll create a simple custom workflow that first extracts text from an image and then translates the extracted text to Spanish.

We'll connect the following two Clarifai models to achieve our objective:



* The [ocr-scene-english-paddleocr](https://clarifai.com/clarifai/main/models/ocr-scene-english-paddleocr) model, which detects and recognizes English texts in images;
* The [text-translation-english-spanish](https://clarifai.com/helsinkinlp/translation/models/text-translation-english-spanish) model translates texts from English to Spanish.

We'll specify the IDs of the models and their versions — since a model can have several versions.


:::note
 You can add up to 20 models to a single workflow.
:::

### Step 1: Create Application[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#step-1-create-application)

Let's begin by creating an application that will act as the container for all the related models and workflows for this particular project.

[Click here](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal) to learn how to create an application on the Clarifai platform.

:::note
 When creating the application, select the Text/Document option as the primary input type.
:::

### Step 2: Create a New Workflow[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#step-2-create-a-new-workflow)

To create a new workflow, select the Workflows option in the collapsible left sidebar. Next, click the Create Workflow button in the upper-right corner of the page.



![alt_text](/img/community_2/input_nodes_create_new_workflow.png)



### Step 3: Create Your Nodes[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#step-3-create-your-nodes)

You'll be redirected to a simple, no-code, drag-and-drop interface that allows you to connect your models together. You'll need to connect the input nodes in your workflow. You can link your nodes to any nodes that precede them in the visual graph.


#### Name Your Workflow[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#name-your-workflow)

Let's start by clicking the input field in the upper section of the page and providing a name for the custom workflow.


#### Search for First Node[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#search-for-first-node)

Next, in the left sidebar, search for the optical-character-recognizer node. This allows you to configure a model that enables the extraction of texts from images, such as scans of printed pages or photos of street signs.

After finding the node, drag and drop it on the empty workspace pane and connect it to the IN element.


![alt_text](/img/community_2/input_nodes_empty_pane.png)


:::tip
You can use the tools on the left side of the workspace pane to manage the workflow creation process. These tools enable you to zoom in and out, fit the view, arrange the workflow, reset the workspace, and perform other actions to help you efficiently design and organize your workflow.
:::

#### Search for the Second Node[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#search-for-second-node)

Next, search for the text-to-text node. This allows you to configure a model that enables the transformation of one kind of text into another.

After finding the second node, drag and drop it on the workspace and draw a line that connects it to the first node. This shows the flow of information from one node to another.



![alt_text](/img/community_2/input_nodes_add_another_model.png)



### Step 4: Search for Models[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#step-4-search-for-models)

Click the optical-character-recognizer node. And on the search box that appears on the right side of the page, specify the ocr-scene-english-paddleocr model as the one to use for optical character recognition. Also, select the version of the model you want to use.


![alt_text](/img/community_2/input_nodes_ocr_model.png)


Similarly, click the text-to-text node and specify the text-translation-english-spanish model as the one to use for translating the extracted text from English to Spanish. Also, select its version.



![alt_text](/img/community_2/input_nodes_text_to_text.png)



### Step 5: Save Workflow[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#step-5-save-workflow)

Finally, click the Save Workflow button to save the workflow. This will save the state of your workflow. Now, you are ready to [predict](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#using-a-workflow) using your brand-new workflow.




![alt_text](/img/community_2/input_nodes_save_workflow.png)



### Edit Workflow[​](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows#edit-workflow)

After creating your workflow, you can edit it at any time by navigating to its individual page and clicking the Edit workflow button in the upper-right section.

This allows you to make changes easily whenever needed.


![alt_text](/img/community_2/input_nodes_edit_workflow_2.png)


For example, to add a text-to-audio node to your workflow, first locate it in the left sidebar. Drag the node and connect it to the preceding text-to-text node. Next, use the search box on the right side of the page to select the specific model you want for the text-to-audio conversion.



![alt_text](/img/community_2/input_nodes_edit_workflow_1.png)


Once you've made your changes, click the Save as new version button to save the updated workflow under a new version — without exiting the workflow editor.


:::note

* **You can easily switch between different versions by selecting the respective version ID from the left sidebar in the workflow editor.**
* **Clicking the Update Workflow button creates a new version of your workflow and exits the workflow editor, redirecting you to the workflow's main page.**
:::



![alt_text](/img/community_2/input_nodes_edit_workflow_3.png)



:::tip

* **You can add a maximum of 20 nodes in a single workflow.**
* **Ensure all connections between nodes are correctly set to avoid errors during execution.**
:::

## **Using a Workflow**

Workflows in Clarifai are computational graphs that include one or more models. The cost of making predictions with a workflow is the same as calling individual models.

After creating your workflow, use a workflow:



1. Go to the workflow's overview page.
2. Select the version and upload an image or video.
3. View the predictions returned by each model in the workflow.

For example, let's use the custom workflow we created previously to extract text from [this image](https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg), and then translate the extracted text into Spanish.

To do so, go to the workflow's overview page, select the version you want to use, and click the blue "+" button. Next, select the Try your own image or video option on the modal that appears. The small window that pops up allows you to upload the image.



![alt_text](/img/community_2/workflow_predict_try_your_own_image.png)


After the image has been uploaded and processed, the output will contain the predictions each model in the workflow returns. You can see in the screenshot below that the text was successfully extracted from the image and then translated into Spanish.



![alt_text](/img/community_2/workflow_prediction_output.png)


That's the power of using workflows on the Clarifai platform!
