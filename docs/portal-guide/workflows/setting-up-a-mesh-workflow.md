---
description: Learn the basics of setting up a new workflow.
sidebar_position: 4
---

# Setting Up a Workflow

**Learn the basics of setting up a new workflow**
<hr />

Workflows are a graph of computation that encompass one or more Clarifai or custom model\(s\). Every workflow is attached to one of your applications. Under each application, you will see a list of all the available Clarifai models and custom models when selecting models to add to your workflow. With Workflow Predict, you can run your business logic on one efficient tool.

This won't impact the price you are charged per call, and you'll still be charged for the same operation as if it were separate calls to the API. When you make a prediction request with a workflow, you're charged for the prediction of each model in the workflow as if they are separate calls.

## Workflow Setup

To set up a workflow, head to your account's [Applications listing page](https://portal.clarifai.com/). From there, select the application you want to create the workflow under. If you've not created an application yet, follow [this tutorial](https://docs.clarifai.com/clarifai-basics/applications/create-an-application) to create one. 

![](/img/old_portal/applications_listing_page.png)

Next, click the "four small squares" icon on the left sidebar of the selected app's page, and enter the **Model Mode**.

![](/img/old_portal/model_mode.png)

Next, click the blue **Create Workflow** button at the top right-hand corner of the page to begin building your new workflow. 

![](/img/old_portal/create_workflow_button.png)

The ensuing page lets you create a new workflow by using either:

![](/img/old_portal/create_new_workflow.png)

- Linear view; or,
- Visual graph editor.

### a) Create a Workflow via the Linear View

To create a custom workflow via the linear view, provide the required information on the **Create a Workflow** page. 

- **Workflow ID**—Provide a descriptive name for your workflow. This ID will be used to make an API call, so give it something URL-friendly.

- **USER**—Filter your models by user ID. You can select "clarifai" if you want  to choose a Clarifai model.

- **APP**—Filter your models based on their app.

- **Input**—Filter your models based on the type of input they accept.

- **Output**—Filter your models based on the type of output they return.

- **Model Type ID**—Filter your models based on the type of model you want to use.

For this example, we'll combine the following two Clarifai's models in a workflow:

- The **general-english-image-caption-clip** model for captioning images. It takes image inputs and outputs texts. 
- The **moderation-english-text-classification** for classifying harmful English texts. It takes text inputs and outputs concepts. 

After selecting the model you'd like to use—alongside its version, since a model can have several versions—click the **Add Model** button next to it. 

![](/img/old_portal/add_model.png)

You will see the model displayed in the **Selected models** section below. You can add the models you want to use in the sequence that you would like to have them in the workflow. 

:::info

You can add up to 20 models to a single workflow. 

:::

![](/img/old_portal/selected_models.png)

You can also rearrange a model's position by using the vertical ellipsis on its left edge to drag and drop it to where you desire it to be on the workflow. 

Once you've added a model, you can configure its input nodes. Model outputs vary based on the type of model that you are working with.

On the **Selected models** section, under **Input Nodes**, click the checkbox that indicates that the **moderation-english-text-classification** model should accept inputs from the **general-english-image-caption-clip** model. 

Finally, click the **Create Workflow** button at the top right-hand corner of the page, and that will save the state of your workflow. 

Now you are ready to predict using your brand new workflow. 

### b) Create a Workflow via the Visual Graph Editor

To create a workflow via the visual graph editor, click the **Use Visual Graph Mode** button on the **Create a Workflow** page.

You'll be redirected to a simple no-code, drag-and-drop interface that allows you to connect your models together. 

For this example, we'll combine the following two Clarifai's models in a workflow:

- The **general-english-image-caption-clip** model for captioning images. It takes image inputs and outputs texts. 
- The **moderation-english-text-classification** for classifying harmful English texts. It takes text inputs and outputs concepts. 

You can start by clicking the input box on the top section of the page and providing an ID for your custom workflow.

Next, on the **Filter model type** search box on the left sidebar, look for **image-to-text** model type. 

![](/img/old_portal/visual_graph_editor_1.png)

After finding the model type, drag and drop it on the empty workspace pane. This model will be configured automatically as a node in the workflow.

![](/img/old_portal/visual_graph_editor_2.png)

Also, search for a **text-classifier** model type, and drag and drop it on the workspace. It will also be configured automatically as a node in the workflow.

![](/img/old_portal/visual_graph_editor_3.png)

The models in the workflow will automatically connect when they are placed near each other. This shows the flow of information from one model to another. You can also grab the node connectors on each model and configure your workflow nodes manually.

For this example, use the node connectors to draw a line that connects the two models.

![](/img/old_portal/visual_graph_editor_4.png)

Next, click the **image-to-text** button on the workspace. And on the search box that appears on the right side of the page, click the **BROWSE** button to search for a model to use.

Then, on the small window that pops up, select the **general-english-image-caption-clip** model as the one you'll use for captioning the images. Also, select the version of the model you want to use.

![](/img/old_portal/visual_graph_editor_5.png)

Similarly, click the **text-classifier** button on the workspace. And on the search box that appears on the right side of the page, click the **BROWSE** button to search for a model to use. 

Then, on the small window that pops up, select the **moderation-english-text-classification** model as the one you'll use for classifying whether the captioned text is harmful. Also, select its version.

![](/img/old_portal/visual_graph_editor_6.png)

Finally, click the **Create Workflow** button at the top right-hand section of the page to save the state of your workflow. Now you are ready to predict using your brand new workflow. 

If you click the vertical ellipsis at the right edge of the **Create Workflow** button, you'll get the options of **BACK TO WORKFLOWS** and **SWITCH TO LINEAR VIEW**, which allow you to go back to the page listing your workflows and switch to the linear view of creating workflows, respectively. 

![](/img/old_portal/visual_graph_editor_7.png)

## Workflow Predict

After creating your workflow, you can begin using it to make predictions. 

The custom workflow we created previously combined two models together. We can use it to caption an image and then gauge if the generated captioned text is harmful. 

_Please note that this example is for illustrative purposes only. You may create your own workflow that meets the objectives of your specific use case._

Start by going to your application's overview page and clicking the **Data Mode** icon on the left sidebar. 

![](/img/old_portal/data_mode.png)

The **Data Mode** page ensues, allowing you to add the image you want to process using the workflow. You can also enter the **Data Mode** by clicking the **Add Inputs** button on the application's overview page.

![](/img/old_portal/add_inputs.png)

After adding the image, go back to your application's overview page and click the "eye" icon on the left sidebar (or the **View In Explorer** button). 

![](/img/old_portal/view_in_explorer.png)

You'll be redirected to the explorer view page that allows you to see the input(s) you've uploaded on your app. You can also enter the **Data Mode** from the explorer  by clicking the **Add Inputs** button on the page's top right-hand corner.  

![](/img/old_portal/explorer_view.png)

Next, select the input you want to get its predictions. You'll be redirected to the input viewer page that allows you to perform various actions on the selected input, including using a workflow to get predictions. 

On the right sidebar, select the **APP WORKFLOW:** option to expand it. Then, click the gear icon that appears and select the workflow you want to use for making predictions.

![](/img/old_portal/workflow_options.png)

You can also click the **New Workflow** button and create a new workflow. 

After selecting a workflow, you'll see the predictions of each of the models that comprises it underneath.

![](/img/old_portal/workflow_predictions.png)

That's the power of using workflows on the Clarifai platform!

## Workflow Management

After creating a workflow, you can carry out various management tasks, such as duplicating, editing, or deleting it. 

Let's demonstrate how you can perform different management tasks on your own workflows.

To start with, go to your application's overview page, click the "four small squares" icon on the left sidebar, and enter the **Model Mode**.

![](/img/old_portal/model_mode.png)

On the **Model Mode** page, select the **Workflows** tab. You can toggle the **User** field to see either the workflows you own or those owned by Clarifai. 

Select your user name to see the workflows you own. 

![](/img/old_portal/workflows_overview.png)

You can now complete various management tasks on your workflows.

### Duplicate a workflow

Click the **Copy to new Workflow** button towards the right end side of a workflow field to duplicate the workflow you've selected.

![](/img/old_portal/copy_to_new_workflow.png)

### Copy Workflow ID

Click the **Copy Workflow ID to Clipboard** button towards the right end side of a workflow field to copy the ID of the workflow you've selected to the clipboard.

![](/img/old_portal/copy_workflow_id.png)

### Edit a Workflow

Click the **Edit Workflow** button towards the right end side of a workflow field to edit the workflow you've selected. You'll be redirected to a page that allows you to edit the workflow as you desire. 

![](/img/old_portal/edit_workflow.png)

### Delete a Workflow

Click the **Delete Workflow** button on the right end side of a workflow field to delete the workflow you've selected. Note that deleting a workflow cannot be undone, so you must proceed cautiously.

![](/img/old_portal/delete_workflow.png)

