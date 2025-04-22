---
description: Perform predictions on the UI using your deployed models
sidebar_position: 3
---

# Inference via the UI

**Perform predictions on the UI using your deployed models**
<hr />

You can perform predictions using your deployed models directly through the User Interface (UI) — no code required. This method is ideal for quick testing, demos, and visual validation of your model's performance. 

You can simply upload an input (such as image, text, or video) and view the output predictions in real-time within an intuitive user experience.

:::info

Before making a prediction, ensure that your model has been deployed, [as mentioned previously](README.mdx). Otherwise, the prediction will default to the `Clarifai Shared` deployment type. 

:::

## Predictions Within Model Playground

To make predictions this way, go to your model’s playground page and click on the **Deployments** tab. 

Here, you’ll find a **Deployments & Usage** table listing all deployments associated with the model, including details such as the cluster and nodepool. You can also sort the table alphabetically (A–Z or Z–A) based on your preferences.

![ ](/img/compute-orchestration/compute-16.png)

To select a deployment, click the **Deployment** button. A dropdown list will appear, showing your available deployments. Choose the one you want to use to direct traffic to a specific cluster and nodepool. 

Once you’ve selected a deployment ID, go to the **Overview** pane to use it for making prediction requests.

When inferencing using a deployed model, the request is routed to the nodepool within the cloud region specified in the cluster, and the model’s predictions are returned as output in real time.

![ ](/img/compute-orchestration/compute-21.png)

## Predictions Within Input-Viewer

> The single Input-Viewer is the main page that showcases the details of a single input available in your app. If you click an input listed on the [Inputs-Manager](https://docs.clarifai.com/portal-guide/inputs-manager/) page, you'll be redirected to the viewer page for that input, where you can view and interact with it.

To make predictions on an input, switch to predict mode by toggling the **Predict** button located in the top-right corner of the page. Next, click the **Choose a model or workflow** button in the right-hand sidebar to select the model you want to use. 

![ ](/img/compute-orchestration/compute-27.png)

In the window that appears, choose your desired model and then select a deployment from the **Deployment** dropdown. If needed, you can also create a new deployment from this window. 

![ ](/img/compute-orchestration/compute-28.png)

Lastly, click the **Predict** button at the bottom of the sidebar. The model will process the input and return predictions in real time, allowing you to immediately view the results within the Input-Viewer screen.

![ ](/img/compute-orchestration/compute-29.png)