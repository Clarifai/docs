---
description: Learn the basics of setting up a new workflow.
sidebar_position: 4
---

# Setting Up a Workflow

**Learn the basics of setting up a new workflow**
<hr />

Workflows are a graph of computation that encompass one or more Clarifai or custom model\(s\). Every workflow is attached to one of your applications. Under each application, you will see a list of all the available Clarifai models and custom models when selecting models to add to your workflow. With Workflow Predict, you will be able to run your business logic on one efficient tool.

This won't have any impact on the price you are charged per call. You will still be charged for the same operation as if it were separate calls to the API. When you make a predict request with a workflow, you're charged for the prediction of each model in the workflow as if they are separate calls.

## Workflow Setup

To set up a workflow, head to your account's [Applications listing page](https://portal.clarifai.com/). From there, select the application you want to create the workflow under. If you've not created an application yet, follow [this tutorial](https://docs.clarifai.com/clarifai-basics/applications/create-an-application) to create one. 

![](/img/old_portal/applications_listing_page.png)

Next, click the "four small squares" icon on the left-hand sidebar of the selected app's page, and enter the **Model Mode**.

![](/img/old_portal/model_mode.png)

Next, click the blue **Create Workflow** button at the top right-hand corner of the page to begin building your new workflow. 

![](/img/old_portal/create_workflow_button.png)

The ensuing page lets you create a new workflow by using either:

![](/img/old_portal/create_new_workflow.png)

- Linear view; or,
- Visual graph editor.

### a) Create a Workflow via the Linear View

To create a custom workflow via the linear view, provide the required information on the **Create a Workflow** page. 

- **Workflow ID**—Provide a descriptive name for your workflow. This ID will be used to make an API call, so make sure to give it something URL-friendly.

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

You will see the model displayed on the **Selected models** section below. You can add the models you want to use in the sequence that you would like to have them in the workflow. 

:::info

You can add up to 20 models to a single workflow. 

:::

![](/img/old_portal/selected_models.png)

You can also rearrange a model's position by using the vertical ellipsis on its left-edge to drag and drop it to where you desire it to be on the workflow. 

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

Next, on the **Filter model type** search box on the left-hand sidebar, look for **image-to-text** model type. 

![](/img/old_portal/visual_graph_editor_1.png)

After finding the model type, drag and drop it on the empty workspace pane. This model will be configured automatically as a node in the workflow.

![](/img/old_portal/visual_graph_editor_2.png)

Also, search for a **text-classifier** model type, and drag and drop it on the workspace. It will also be configured automatically as a node in the workflow.

![](/img/old_portal/visual_graph_editor_3.png)

The models in the workflow will automatically connect when they are placed near each other. This shows the flow of information from one model to another. You can also grab the node connectors on each model and configure your workflow nodes manually.

For this example, use the node connectors to draw a line that connects the two models.

![](/img/old_portal/visual_graph_editor_4.png)

Next, click the **image-to-text** button. And on the search box that appears on the right side of the page, click the **BROWSE** button to search for a model to use. Then, on the small window that pops up, select the **general-english-image-caption-clip** model as the one you'll use for captioning the images. Also, select the version of the model you want to use.

![](/img/old_portal/visual_graph_editor_5.png)

Similarly, click the **text-classifier** button. And on the search box that appears on the right side of the page, click the **BROWSE** button to search for a model to use. Then, on the small window that pops up, select the **moderation-english-text-classification** model as the one you'll use for classifying whether the captioned text is harmful. Also, select its version.

![](/img/old_portal/visual_graph_editor_6.png)

Finally, click the **Create Workflow** button at the top right-hand section of the page to save the state of your workflow. Now you are ready to predict using your brand new workflow. 

If you click the vertical ellipsis at the right-edge of the **Create Workflow** button, you'll get the options of **BACK TO WORKFLOWS** and **SWITCH TO LINEAR VIEW**, which allow you to go back to the page listing your workflows and switch to the linear view of creating workflows, respectively. 

![](/img/old_portal/visual_graph_editor_7.png)

## Workflow Predict

After creating your workflow, you can begin using it to make predictions. The custom workflow we created previously combined two models together. We can use it to caption an image and then gauge if the generated captioned text is harmful. 

_Please note that this example is for illustrative purposes only. You may create your own workflow that meets the objectives of your specific use case._

Start by going to your application's overview page and clicking the **Data Mode** icon on the left-hand sidebar. 

![](/img/old_portal/data_mode.png)

Next, the **Data Mode** page ensues and allows you to add the image you want to process using the workflow. You can also enter the **Data Mode** by clicking the **Add Inputs** button on the application's overview page.

After adding the image, go back to your application's overview page and click the "eye" icon on the left-hand sidebar or the **View In Explorer** button. 

![](/img/old_portal/view_in_explorer.png)

You'll be redirected to the explorer view page that allows you to see the input(s) you've uploaded on your app. You can also enter the **Data Mode** from the explorer  by clicking the **Add Inputs** button located on top right-hand corner of the page. 

![](/img/old_portal/explorer_view.png)

Next, select the input you want to get its predictions. You'll be redirected to the input viewer page that allows you perform various actions on the selected input, including using a workflow to get predictions from it. 

On the right sidebar, click the **APP WORKFLOW**: option. 






- You can edit a workflow at any time.
- Make predictions