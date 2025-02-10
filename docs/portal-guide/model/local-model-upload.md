---
description: Seamlessly upload locally built models into our platform
sidebar_position: 9
pagination_next: null
pagination_prev: null
keywords: [local model upload, upload local models, Clarifai local model upload, AI model upload, machine learning model upload, integrate local models, local model integration, Clarifai model upload guide, custom model upload, pre-trained model upload, AI model integration, upload AI models, local model deployment, Clarifai model integration, deep learning model upload, local model importer, Clarifai model deployment]
---

# Local Model Upload

**Seamlessly upload locally built models into our platform**
<hr />

You can upload custom-built machine learning models from your local development environment directly into the Clarifai platform. To ensure smooth integration with the Clarifai platform, it's essential that your model adheres to the format that we support. 

You can check some examples [here](https://github.com/Clarifai/examples/tree/main/models/model_upload).  


<!--We've designed our platform to provide robust support for widely used tools, such as TensorFlow, PyTorch, and ONNX. This ensures that your preferred development environments and frameworks remain fully compatible with our platform, giving you flexibility and convenience in deploying your models.-->


:::info

The local model upload functionality is exclusively available to Enterprise users. 

:::

The local model upload feature provides several benefits, including:

- Create highly specialized and tailored AI solutions that cater to your unique business needs. 
- Leverage Clarifai’s robust infrastructure to expand the capabilities of your locally built models. For example, you can link an uploaded model with other models in a [workflow](https://docs.clarifai.com/portal-guide/workflows/) and unlock new possibilities. 
- Share locally built models, enabling you to showcase your innovations and collaborate with others in the AI community. 

:::warning Ready to serve 

The uploaded model will be automatically deployed and ready to be evaluated, fine-tuned and customized, combined with other models and agent operators in a workflow, or used to serve inference requests as it is.

:::

## Build the Model

Begin by creating the model you intend to deploy on the Clarifai platform, making sure to follow the format that Clarifai supports. 

Then, compress the model into a ZIP file and host it on a publicly accessible URL.

<!--[Click here](https://github.com/Clarifai/clarifai-python/tree/master/clarifai/models/model_serving) to access a step-by-step guide for creating your own Triton inference model.-->

## How to Upload a Model

After building the model, you can now upload it to the Clarifai platform.

### Step 1: Add the Model

Go to the individual page of an application you own, and select the **Models** option in the collapsible left sidebar.

On the models listing page, click the **Add Model** button at the upper-right corner of the page.

![](/img/model-importer/local_upload-1.png)

On the **Use a Model** window that pops up, select the **Upload a Model** option.

![](/img/model-importer/local_upload-2.png)

You'll be redirected to the **Model Upload** page, where you can upload your custom-built model. 

### Step 2: Fill out the Model Upload Form

You can now start filling out the model upload form. 

This form is where you'll provide essential information about your model and its specifications, ensuring that it is properly configured and ready for integration into the Clarifai platform. 

![](/img/model-importer/local_upload-3.png)

Let’s talk about the fields to fill in the form.

#### Model ID

Carefully pick a memorable, human-readable ID for the model you want to upload.

<!-- > _For this example, we'll specify the ID as `dummy-classification-model`._ -->

#### Model Type

Choose a [model type](https://docs.clarifai.com/portal-guide/model/model-types/) from the available options in the drop-down list.

<!-- > _For this example, we'll specify the model type as `visual-classifier`._-->

#### Clarifai Model Notes​

Provide a short description of what the model is about. Later, you can go to the model's individual page, under the [**Notes** section](https://docs.clarifai.com/portal-guide/portal-overview/#markdown-notes), and edit its description using Markdown.

#### Model Version Description

Optionally, you can provide a brief description of the model version, summarizing its characteristics or updates.

#### Model Zip URL

Enter a publicly accessible and downloadable URL for the zipped model. 

<!-- > _For this example, we'll enter the URL as `s3://clarifai-testing-persistent-data/test_triton_upload/dummy-visual-classifier.zip`. It's a simple, dummy visual-classifier model that returns five concepts, each with an identical confidence score._-->

#### Input Fields

Provide the required input parameters for the model, such as image.

<!-- > _For this example, we'll specify the input parameter as `image`_. -->

> Each model type requires different input and output fields. The table below illustrates the relationship between supported models and their corresponding input and output types. [Click here](https://github.com/Clarifai/clarifai-python/tree/cb42190df45348f188bc14147bef80801d723905/clarifai/models/model_serving/model_config/model_types_config) to learn more about the different input and output fields. 


<details>
  <summary>Input and Output Fields</summary>
| Type                | Input       | Output               |
|---------------------|-------------|----------------------|
| multimodal-embedder |  image, text | embeddings      |
| text-classifier     |  text       | softmax_predictions     |
| text-embedder       |  text       | embeddings      |
| text-to-image       |  text       | image          |
| text-to-text        |  text       | text           |
| visual-classifier   |  image      | softmax_predictions     |
| visual-detector     |  image      | predicted_bboxes, predicted_labels, predicted_scores |
| visual-embedder     |  image      | embeddings      |
| visual-segmenter    |  image      | predicted_mask          |
</details>

#### Output Fields

Provide the required output parameters for the model, such as concepts. 

<!-- > _For this example, we'll specify the output parameter as `softmax_predictions`._-->

#### Select the Checkbox​

Select the checkbox to acknowledge uploading your custom-built model to the Clarifai platform.

#### Upload Model​

Finally, click the **Upload Model** button to initiate uploading your model. 

### Step 3: Use the Model

You’ll be redirected to the individual page of the model.

If you check the model's versions table, you’ll notice that the model is still being uploaded. It takes a few minutes for the model to be uploaded — large models could take longer.

![](/img/model-importer/local_upload-4.png)

After the model has been uploaded, the status will change to `Model Trained.`

![](/img/model-importer/local_upload-5.png)

You can now click the **Use Model** button at the upper-right corner of the page to start using the model, such as for [making predictions](https://docs.clarifai.com/portal-guide/ppredict/).

