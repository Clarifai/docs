---
description: Learn the basics of setting up a new workflow
sidebar_position: 4
---

# Setting Up a Workflow

**Learn the basics of setting up a new workflow**
<hr />

Workflows are a graph of computation that encompass one or more Clarifai or custom model\(s\). Every workflow is attached to one of your applications. 

Under each workflow, you will see a list of the Clarifai models and all custom models in that application when selecting models to add to your workflow. With Workflow Predict, you will be able to run your business logic on one efficient tool.

This won't have any impact on the price you are charged per call. You will still be charged for the same operation as if it were separate calls to the API. When you do a predict with a workflow, you're charged for the prediction of each model in the workflow as if they were separate calls.


## Workflow Setup

You can [click here](./input-nodes#create-your-workflow) to read a step-by-step walkthrough about how to create a workflow. 

## Workflow Predict

After creating your workflow, you can start using it to make predictions. 

The custom workflow we created previously combined two models together. We can use it to extract text from [this image](https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg) and then translate the extracted text to Spanish.

To do so, let's go to the workflow's individual page and click the **Try your own image or video** button to upload the image. 

![try your own image or video](/img/community_2/workflow_predict_try_your_own_image.png)

On the small window that pops up, upload the image.

![upload image](/img/community_2/window_upload_image.png)

After the image has been processed, the output will contain the predictions each model in the workflow returns. You can see on the screenshot below that the text was successfully extracted from the image and then translated to Spanish. 

![workflow prediction](/img/community_2/workflow_prediction_output.png)

That's the power of using workflows on the Clarifai Community platform!