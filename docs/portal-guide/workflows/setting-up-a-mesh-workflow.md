---
description: Learn the basics of setting up a new workflow
sidebar_position: 4
---

# Setting Up a Workflow

**Learn the basics of setting up a new workflow**
<hr />

Workflows are computational graphs that include one or more Clarifai or custom models.

When making a prediction request using a workflow, the cost remains the same as if you were making individual API calls. You'll be charged for each model's prediction within the workflow, just as if each model were called separately.

## Workflow Setup

You can [click here](https://docs.clarifai.com/portal-guide/workflows/input-nodes/#create-your-workflow) to read a step-by-step walkthrough on how to create a workflow. 

## Workflow Predict

After creating your workflow, you can start using it to make predictions. 

For example, let's use the custom workflow we created previously to extract text from [this image](https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg), and then translate the extracted text into Spanish.

To do so, go to the workflow's overview page, select the version you want to use, and click the blue "**+**" button. Next, select the **Try your own image or video** option on the modal that appears. The small window that pops up allows you to upload the image.

![try your own image or video](/img/community_2/workflow_predict_try_your_own_image.png)

After the image has been uploaded and processed, the output will contain the predictions each model in the workflow returns. You can see in the screenshot below that the text was successfully extracted from the image and then translated into Spanish. 

![workflow prediction](/img/community_2/workflow_prediction_output.png)

That's the power of using workflows on the Clarifai platform!