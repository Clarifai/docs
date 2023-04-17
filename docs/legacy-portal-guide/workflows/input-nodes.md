---
description: Connect your models together.
sidebar_position: 1
---

# Input Nodes

**Connect your models together**
<hr />

The outputs from one model can be used as the inputs in another model. This allows you to link together the models in a graph. Linking models helps you build sophisticated AI solutions, that can zero-in on a specific use case.

## Supported input and output types

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

You can create workflows out of any Clarifai models or custom models that you have created for your app. The inputs and outputs supported by your custom models will depend on the inputs and outputs supported by the Clarifai models, or the model templates that you have used to build them.

To create a workflow, start by navigating to your individual app's page on the legacy portal. Then, click the "four small squares" icon on the left-hand sidebar, and enter the **Model Mode**.

![](/img/old_portal/model_mode.png)

Next, click the blue **Create Workflow** button at the top right-hand corner of the page to begin building your new workflow. 

![](/img/old_portal/create_workflow_button.png)

The ensuing page lets you use a linear view to create a new workflow. 

![](/img/old_portal/create_new_workflow.png)

Just add the models that you would like to use in the sequence that you would like to have them in your workflow. Click the **Add Model** button to do so. 

You can change the user drop-down menu to "clarifai" to view Clarifai models. You can also filter them by using the drop-down menus provided on the page. 

If you'd like to use the visual graph option to create a workflow, just click the **Use Visual Graph Mode** button. You can [click here](https://docs.clarifai.com/portal-guide/workflows/setting-up-a-mesh-workflow) to learn how to use it to create workflows. 

### Connect your nodes

You need to connect the `Input Nodes` in your workflow. You can link your models to any models that precede them in the graph. 

![](/img/old_portal/connect_nodes.png)

Finally, click the **Create Workflow** button at the top right-hand corner of the page, and then you are ready to get started!

### Update your base workflow

To activate the new workflow in your app, head back to the "App Overview" page, and change your `Base Workflow` to the new workflow that you have just created.

![](/img/old_portal/change_base_workflow.png)


