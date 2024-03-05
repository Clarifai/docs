---
description: >-
  Base workflows index your data and provide your app with a default knowledge
  base.
sidebar_position: 3
---

# Base Workflows

**Base workflows index your data and provide your app with a default knowledge base**
<hr />

The base workflow acts as the default knowledge base for your app and provides the basic structure for indexing your data. It gives you a "head start" when working with your data—by pre-indexing your inputs for search and by providing a default embedding for your custom models.

## How it works

Your base workflow makes your data sortable and searchable as soon as it is uploaded. When you add an input to your app, the base workflow of your app computes the outputs from the model(s) in that workflow and indexes those outputs.

Those indexed outputs enable search and transfer-learn based training on top of the base workflow model(s).

## How to choose a base workflow

You should go for a workflow that optimizes your custom model performance. For example, if you're training a custom model around food, you could choose the **Food** model as your **Base Workflow** to yield better results.

You can choose a base workflow when [creating a new application](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/). After selecting the primary input type for your app, the base workflow will be automatically selected for you—within the collapsible **Advanced Settings** field. 

Alternatively, you can select the one that aligns most with your specific use case from the dropdown list accessible when you click the workflows search box.

![choose base workflow](/img/community_2/base_workflow_choose.png)

## How to change a base workflow

You can also change the base workflow once your app is created. You can choose public workflows or workflows you've created in your app. 

To change it, go to your [**App Settings**](https://docs.clarifai.com/clarifai-basics/applications/application-settings#base-workflow) page and select the one you prefer from the list that drops down when you click the workflows search box. 

After selecting your preferred base workflow, click the **Change Base Workflow** button.

:::note

Updating the base workflow will re-index your app, processing all inputs through the new base workflow. This may take some time, and could incur costs. You could avoid the costs by deleting all your inputs before updating the base workflow.

:::

![change base workflow](/img/community_2/base_workflow_change.png)



