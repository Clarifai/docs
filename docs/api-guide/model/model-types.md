---
description: Learn about some of the most important model types on the Clarifai platform.
sidebar_position: 2
---

# Model Types

**Learn about some of the most important model types on the Clarifai platform**
<hr />

Clarifai offers a wide variety of [models](https://clarifai.com/explore) that can be used as standalone solutions, or as building blocks for your own custom business solutions.

It's important to note that Clarifai continually introduces new models to augment your options. So, you need to check the platform frequently for an up-to-date list of the models we provide.

For a listing of the models available to you:

* Make a `GET` call to the [`/models/types`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#list-model-types) API method or the `ListModelTypes` gRPC API method. The method responds with all the available model types.
* If you want to create a model with your preferred model type, you can make a `POST` request to the [`/models`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#create-a-model) API method or the `PostModels` gRPC API method with the `model_type_id` parameter specified in the request. 

:::tip

[Click here](https://docs.clarifai.com/portal-guide/model/model-types/) to learn more about the model types we offer.

:::
