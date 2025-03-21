---
description: Generate model or workflow predictions on the Input-Viewer
sidebar_position: 3
---

# Predictions

**Generate model or workflow predictions on the Input-Viewer**
<hr />

You can use the Input-Viewer page to generate model or workflow predictions from your inputs. This feature allows you to quickly get predictions from your inputs and make the most of your models and workflows. 

## Choose a Model or Workflow

To make predictions, start by setting the page's mode to **Predict**. You can find the mode settings in the upper-left corner of the page. Next, in the right sidebar, click the **Choose a model or workflow** link to select a model or workflow for making the predictions.

![](/img/others/explorer_predictions_1.png)

Next, use the **Select a model or workflow** search box to choose a model or workflow to use for generating the predictions. You can choose your own customized model or workflow, or look for a public one from the Community platform. You can also create your own model or workflow from there.

![](/img/others/explorer_predictions_2.png)

To select a public model or workflow from the Community, click the **Explore Community Models / Workflows** button. In the pop-up window, use the search bar to find the desired model or workflow.

For this example, let’s choose the Community’s [general-image-recognition](https://clarifai.com/clarifai/main/models/general-image-recognition) model, which is a visual classification model that identifies a variety of concepts in images. 

![](/img/others/explorer_predictions_2-1.png)

:::tip

When working with image inputs, you need to choose a model or workflow that outputs concepts or objects (bounding box regions). This ensures the generation and display of the predictions.

:::

## Generate Predictions

After selecting your preferred model, click the **Predict** button located in the lower section of the sidebar to start making the predictions. 

:::note Compute Orchestration 

You can select a deployment to use for running your model or workflow using our Compute Orchestration system. [Click here](https://docs.clarifai.com/portal-guide/compute-orchestration/) to learn more about Compute Orchestration. 

:::

![](/img/others/explorer_predictions_3.png)

It could take a few moments for the predictions to be generated. The predictions are sorted in descending order based on their concept probability values. 

![](/img/others/explorer_predictions_4.png)

The **Prediction Threshold** slider allows you to set the threshold that will allow you to see only the prediction probabilities that meet your defined criteria.

The **Filter by concept** search field allows you to find specific concepts and display their predictions on the page.

![](/img/others/explorer_predictions_5.png)

