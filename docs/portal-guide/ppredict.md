---
description: Dynamic AI model orchestration and inference scaling
sidebar_position: 3
---

# Making Predictions

**Dynamic AI model orchestration and inference scaling**
<hr />

You can use the Clarifai portal to analyze your inputs and understand what's inside of them. The portal will return a list of [concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) with corresponding probabilities of how likely these concepts are contained within the provided inputs.

Predictions are ready the moment you upload an input. You can make predictions using public or custom models and workflows. You can search for your preferred models on the [Community platform](https://clarifai.com/explore) and use them to make predictions. 

## Example

You can use the pre-built Clarifai's [general-image-recognition](https://clarifai.com/clarifai/main/models/general-image-recognition) model to identify a variety of concepts in images. 

To do so, navigate to the model’s viewer screen and click the blue **Try your own images or videos** button. A modal will pop up, providing a convenient interface for adding input data and examining predictions.

![](/img/community_2/model_predictions.png)

The modal provides three distinct options for making predictions.

### Try Your Own Images or Videos

This option lets you add an input and see its predictions without leaving the Model-Viewer screen. If you click the button, a small window will pop up, allowing you to upload your input.

![](/img/community_2/model_predictions-2.png)

After uploading the image, the model will analyze it and return a list of concepts identified on the right-hand side of the page. 

### Batch Predict on App Inputs

This option lets you select an app and a dataset. If you click the button, a small window will pop up, allowing you to choose an app and a dataset with the inputs you want to view their predictions. 

![](/img/community_2/model_predictions-3.png)

After selecting an app and a dataset, click the **Try Inputs** button. 

You’ll be redirected to the Input-Viewer screen with the default mode set to Predict, allowing you to see the predictions on an input based on your selections.

![](/img/community_2/model_predictions-4.png)

### Add Public Preview Examples

This option lets model owners add public preview examples. It's only visible on the Model-Viewer screen of a model you own. 

If you click the button, a small window will pop up, allowing you to add public prediction examples for anyone who wants to see how your model works. 

![](/img/community_2/model_predictions-5.png)

:::info

[Click here](https://docs.clarifai.com/clarifai-basics/quick-start/your-first-predictions/) to learn more about how to make predictions using custom or public models and workflows. 

:::
