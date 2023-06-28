---
description: Learn how to create and manage apps, models, and workflows 
sidebar_position: 2
---

# Apps, Models, and Workflows

**Learn how to create and manage apps, models, and workflows**

<hr />

An app is a self-contained project for storing and handling your resources. It's what you need to enable your organization to complete various tasks within the Clarifai platform. 

A model is an algorithm that learns patterns, relationships, and behaviors from data. It generates predictions based on the patterns extracted from the input data in concepts. 

A workflow is a Clarifai feature that allows you to combine multiple models and carry out different operations. With a workflow, you can create a powerful multi-model system that meets various use cases in a single call—instead of relying only on one model.

Let's illustrate how to create and manage them within your Clarifai organization. 

## How to Create and Manage Apps

To create an app, click your organization’s profile at the top-right section of the navigation bar and select the **My Apps** option on the drop-down list. 
The ensuing page lets you create apps and carry out various app management tasks. With an app, you can organize all your content, including models, workflows, inputs, and more.

If you’ve not created any app before, just click the **+ Create an App** button to create an app for your organization. 

Or, you can click the **+** sign on the top-right section of the navigation bar. 

![Create app](/img/clarifai_orgs/create_app.png)

Next, on the dialog box that appears, provide the details of your new application and click the **Confirm** button. 

![Create app dialog box](/img/clarifai_orgs/dialog_create_app.png)

The newly created app will then be listed under the **Apps** tab. If you create models and workflows, they will also be listed under the **Models** and **Workflows** tabs, respectively. 

![App listing page](/img/clarifai_orgs/app_listing_page.png)

You can click the pin icon located within the listed app to highlight it among the rest of your other applications. If you have many apps, pinning an app lets it rise to the top of the page so that you can access and manage it easily. 

You can also click the series of dots located within the listed app to duplicate the app, copy its ID, or delete it.

The listed apps page also enables you to accomplish the following:

- Use the search box to look for a specific app you require by filtering it by name. 
- List apps by either grid view or list view.
- Sort your apps by various parameters, including last updated, app name, ascending order, or descending order. 

If you click on any listed app, you’ll be redirected to its individual page, where you can accomplish several tasks, including editing the app’s details, uploading and searching inputs, creating models, creating workflows, and more. 

![Individual app page](/img/clarifai_orgs/individual_app_page.png)

For example, click the **Inputs** button on the collapsible left sidebar to upload inputs to the app. Next, click the **Upload Inputs** button and upload the inputs you want to add to the app. 

![App upload inputs](/img/clarifai_orgs/upload_inputs.png)

## How to Transfer Your Personal Account's App to an Organization

You can transfer an app you own to an organization you belong to and have the permission to create apps. This would greatly enhance collaboration and boost your productivity.

To do so, start by clicking your personal user’s profile icon at the top-right section of the navigation bar. Then, select the **My Apps** option on the drop-down list.

You’ll be redirected to a page that lists the apps you own. 

![List apps you own](/img/clarifai_orgs/transfer_app_org_1.png)

Next, click on the app you want to transfer to an organization. You’ll be redirected to the app’s individual page. 

Select the **App Setting** option on the collapsible left sidebar. 

![App setting](/img/clarifai_orgs/transfer_app_org_2.png)

On the ensuing **App Settings** page, scroll down to the **Transfer ownership** section and click the **Transfer** button.

![Transfer app ownership](/img/clarifai_orgs/transfer_app_org_3.png)

On the dialog box that appears, select the app’s destination organization and give it a new name, if you want to. 

![Give app a new name](/img/clarifai_orgs/transfer_app_org_4.png)

Click the **Confirm** button to finalize the transfer. 

The app will be successfully moved to the organization you selected, and it will no longer appear under your listed apps. 

## How to Create and Manage Models

To create a model, start by navigating to the individual page of your app, as illustrated earlier. Then, select the **App Models** option on the collapsible left sidebar. 

![App models](/img/clarifai_orgs/app_models.png)

You’ll be redirected to the models’ listing page, where you can see a list of models available in your app and also create new ones. 

:::tip

On the models’ listing page, you can also complete several other tasks, such as searching models, editing a model, and deleting a model. 

:::

Click the **Create Model** button on the top-right corner of the page.

![Create model](/img/clarifai_orgs/create_model.png)
 
Next, choose the type of model you want to create. In this example, let’s choose a **Text Classifier**. 

![Create new text classifier](/img/clarifai_orgs/create_new_model_text_classifier.png)

On the ensuing page, provide the details required to create a text classifier model. 

![Create text classifier](/img/clarifai_orgs/create_text_classifier.png)

Click the **Create Model** button to finalize the process. 

![Create model button](/img/clarifai_orgs/create_model_button.png)

You’ll then be redirected to the newly created model’s page. As you can see on the screenshot below, the individual model’s page allows you to complete various model management tasks, including:

![Newly created model page](/img/clarifai_orgs/newly_created_model_page.png)

- Click the star icon to highlight the model. It will then appear on the **Starred** page. 
- Click the **Edit Visibility** button to edit the model’s visibility to either private or public.
- Click the **Train Model** button to train the model. 
- Click the **Use Model** button to use the model in an API request or add it to a workflow.  
- Click the series of vertical dots at the top-right, endmost section of the page to delete the model. 
- Under the **Overview** tab, you can complete various actions, such as editing the model’s details and predicting with the model.
- Under the **Versions** tab, you can copy the model’s version ID, delete the model version, and more. 
- Under the **Concepts** tab, you can view the concepts available in your model, search for concepts, and more. 

## How to Create and Manage Workflows

To create a workflow, start by navigating to the individual page of your app, as illustrated earlier. Then, select the **App Workflows** option on the collapsible left sidebar. 

![App workflows](/img/clarifai_orgs/app_workflows.png)

You’ll be redirected to the workflows’ listing page, where you can see a list of workflows available in your app and also create new ones. 

:::tip

On the workflows’ listing page, you can also complete several other tasks, such as searching workflows, duplicating a workflow, and deleting a workflow. 

:::

Click the **Create Workflow** button on the top-right corner of the page.

![Create workflow](/img/clarifai_orgs/create_workflow.png)

You’ll be redirected to a new page that has a visual graph you can use to create your new workflow. You can simply drag and connect the components of your workflow. 

:::tip

You can [click here](https://www.clarifai.com/blog/creating-workflows-in-clarifai-community) to read more on how to create a workflow in the Clarifai Community. 

:::

After finishing creating your workflow, click the **Save Workflow** button. 

![Save workflow](/img/clarifai_orgs/save_workflow.png)

You’ll then be redirected to the newly created workflow’s page. As you can see on the screenshot below, the individual workflow’s page allows you to complete various workflow management tasks, including:

![Newly created workflow page](/img/clarifai_orgs/newly_created_workflow_page.png)

- Click the star icon to highlight the workflow. It will then appear on the **Starred** page. 
- Click the **Edit Visibility** button to edit the workflow’s visibility to either private or public.
- Click the **Edit Workflow** button to edit the workflow. 
- Click the **Use Workflow** button to use the workflow in an app or in an API request.  
- Click the series of vertical dots at the top-right, endmost section of the page to delete the workflow. 
- On the same page, you can also complete several other tasks, such as editing the workflow’s details, such as its description, and making predictions with the workflow.

