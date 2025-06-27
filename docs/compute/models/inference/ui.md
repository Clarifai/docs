---
description: Generate model or workflow predictions on the UI
sidebar_position: 3
toc_max_heading_level: 4
---

# Inference via UI

**Generate model or workflow predictions on the UI**
<hr />

You can perform predictions using your deployed models directly through the User Interface (UI) — no code required. This method is ideal for quick testing, demos, and visual validation of your model's performance. 

You can simply upload an input (such as image, text, or video) and view the output predictions in real-time within an intuitive user experience.

:::tip Deploy Model

Before making a prediction using our Compute Orchestration capabilities, ensure that your model has been [deployed](https://docs.clarifai.com/compute/deployments/deploy-model), [as explained here](https://docs.clarifai.com/compute/models/inference/). 


:::

## Predictions Within Model Playground

### Prediction With Legacy Method

Let's say you want to use the pre-built Clarifai's [general-image-recognition](https://clarifai.com/clarifai/main/models/general-image-recognition) model to identify and classify a variety of concepts in images. 

To do so, navigate to the model’s viewer screen and click the blue **Try your own images or videos** button. A modal will pop up, providing a convenient interface for adding input data and examining predictions.

![](/img/community_2/model_predictions.png)

The modal provides three distinct options for making predictions.

#### Try Your Own Images or Videos

This option lets you add an input and see its predictions without leaving that model viewer screen. If you click the button, a small window will pop up, allowing you to upload your input.

![](/img/community_2/model_predictions-2.png)

After uploading the image, the model will analyze it and return a list of concepts identified on the right side of the page. 

#### Batch Predict on App Inputs

This option lets you select an app and a dataset. If you click the button, a small window will pop up, allowing you to choose an app and a dataset with the inputs you want to view their predictions. 

![](/img/community_2/model_predictions-3.png)

After selecting an app and a dataset, click the **Try Inputs** button. 

You’ll be redirected to the Input-Viewer screen with the default mode set to Predict, allowing you to see the predictions on an input based on your selections.

![](/img/community_2/model_predictions-4.png)

#### Add Public Preview Examples

This option lets model owners add public preview examples. It's only visible on the model viewer screen of a model you own. 

If you click the button, a small window will pop up, allowing you to add public prediction examples for anyone who wants to see how your model works. 

![](/img/community_2/model_predictions-5.png)

### Prediction With Compute Orchestration

To make predictions this way, go to your model’s playground page and click on the **Deployments** tab. 

Here, you’ll find a **Deployments & Usage** table listing all deployments associated with the model, including details such as the cluster and nodepool. You can also sort the table alphabetically (A–Z or Z–A) based on your preferences.

![ ](/img/compute-orchestration/compute-16.png)

To select a deployment, click the **Deployment** button. A dropdown list will appear, showing your available deployments. Choose the one you want to use to direct traffic to a specific cluster and nodepool. 

Once you’ve selected a deployment ID, go to the **Overview** pane to use it for making prediction requests.

When inferencing using a deployed model, the request is routed to the nodepool within the cloud region specified in the cluster, and the model’s predictions are returned as output in real time.

![ ](/img/compute-orchestration/compute-21.png)

## Predictions Within Input-Viewer

> The single Input-Viewer is the main page that showcases the details of a single input available in your app. If you click an input listed on the [Inputs-Manager](https://docs.clarifai.com/portal-guide/inputs-manager/) page, you'll be redirected to the viewer page for that input, where you can view and interact with it.

To make predictions on an input, switch to predict mode by toggling the **Predict** button located in the top-left corner of the page. 

Next, click the **Choose a model or workflow** button in the right-hand sidebar to select the model you want to use. 

![ ](/img/compute-orchestration/compute-27.png)

In the window that appears, choose your desired model. You can choose your own customized model or workflow, or look for a public one from the Community platform. You can also create your own model or workflow from there.

> To select a public model or workflow from the Community, click the **Explore Community Models / Workflows** button. In the pop-up window, use the search bar to find the desired model or workflow.

> For this example, let’s choose the Community’s [Qwen2_5-VL-7B-Instruct](https://clarifai.com/qwen/qwen-VL/models/Qwen2_5-VL-7B-Instruct) model, which is a vision-language model that excels in visual recognition tasks. 

:::note

When working with image inputs, you need to choose a model or workflow that outputs concepts or objects (bounding box regions). This ensures the generation and display of the predictions.

:::

![ ](/img/compute-orchestration/compute-27-1.png)

Then select a deployment from the **Deployment** dropdown. If needed, you can also [create a new deployment](https://docs.clarifai.com/compute/deployments/deploy-model#via-the-ui) from this window. 

![ ](/img/compute-orchestration/compute-28.png)

Lastly, click the **Predict** button at the bottom of the sidebar to start making the predictions. 

The model will process the input and return predictions in real time, allowing you to immediately view the results within the Input-Viewer screen.

![ ](/img/compute-orchestration/compute-29.png)

:::note

For models that ouput concepts, the **Prediction Threshold** slider allows you to set the threshold that will allow you to see only the prediction probabilities that meet your defined criteria. You can also use the **Filter by concept** search field to find specific concepts and display their predictions on the page.

:::