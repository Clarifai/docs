---
description: Seamlessly upload locally built models into our platform
sidebar_position: 9
---

# Local Model Upload

**Seamlessly upload locally built models into our platform**
<hr />

You can upload custom-built machine learning models from your local development environment directly into the Clarifai platform. To ensure smooth integration with the Clarifai platform, it's essential that your model adheres to the Triton format, which is our preferred data format for model deployment.

We've designed our platform to provide robust support for widely used tools, such as TensorFlow, PyTorch, and ONNX. This ensures that your preferred development environments and frameworks remain fully compatible with our platform, giving you flexibility and convenience in deploying your models.

The local model upload feature provides several benefits, including:

- Create highly specialized and tailored AI solutions that cater to your unique business needs. 
- Leverage Clarifai’s robust infrastructure to expand the capabilities of your locally built models. For example, you can link an uploaded model with other models in a [workflow](https://docs.clarifai.com/portal-guide/workflows/) and unlock new possibilities. 
- Share locally built models, enabling you to showcase your innovations and collaborate with others in the AI community. 

:::info

The uploaded model will be automatically deployed and ready to be evaluated, fine-tuned and customized, combined with other models and agent operators in a workflow, or used to serve inference requests as it is.

:::

## How to Upload a Model

### Step 1: Build the Model

Begin by constructing the model you intend to deploy on the Clarifai platform, making sure to follow the guidelines of the Triton format.

Then, compress the model into a ZIP file and host it on a publicly accessible URL.

:::tip

[Click here](https://github.com/Clarifai/clarifai-python/tree/master/clarifai/models/model_serving) to access a step-by-step guide for creating your own Triton inference model.

:::

### Step 2: Add the Model

After building the model, you can now upload it to the Clarifai platform.

Go to the individual page of an application you own, and select the **Models** option on the collapsible left sidebar.

On the models listing page, click the **Add Model** button at the upper-right corner of the page.

![](/img/model-importer/local_upload-1.png)

On the **Add a model** window that pops up, select the **Upload a Model** option and click the Continue button.

![](/img/model-importer/local_upload-2.png)

You'll be redirected to the **Triton Model Upload** page, where you can upload your custom-built model. 

### Step 3: Fill out the Model Upload Form

You can now start filling out the model upload form. 

This form is where you'll provide essential information about your model and its specifications, ensuring that it is properly configured and ready for integration into the Clarifai platform. 

![](/img/model-importer/local_upload-3.png)

Let’s talk about the fields to fill in the form.

#### Model ID

Carefully pick a memorable, human-readable ID for the model you want to upload.

#### Model Type

Choose a [model type](https://docs.clarifai.com/portal-guide/model/model-types/) from the available options in the drop-down list.

#### Clarifai Model Notes​

Provide a short description of what the model is about. Later, you can go to the model's individual page, under the **Notes** section, and edit its description using Markdown.

#### Model Version Description

Optionally, you can provide a brief description of the model version, summarizing its characteristics or updates.

#### Triton Model Zip URL

Enter a publicly accessible, download URL for the zipped Triton model. 

#### Input Fields

Provide the required input parameters for the model.

#### Output Fields

Provide the required output parameters for the model.

#### Select the Checkbox​

Select the checkbox to acknowledge uploading your custom-built model to the Clarifai platform.

#### Upload Model​

Finally, click the **Upload Model** button to complete uploading your model. 

### Step 4: Use the Model

You’ll be redirected to the individual page of the model.

If you check the model's versions table, you’ll notice that the model is still being uploaded. It takes a few minutes for the model to be uploaded—large models can take longer.

![](/img/model-importer/local_upload-4.png)

After the model has been uploaded, the status will change to `Model is trained and ready.`

You can now click the **Use Model** button at the upper-right corner of the page to start using the model.

