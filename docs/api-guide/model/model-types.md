---
description: Learn about some of the most important model types on the Clarifai platform.
sidebar_position: 2
---

# Model Types

**Learn about some of the most important model types on the Clarifai platform**
<hr />

Clarifai offers a wide variety of [models](https://clarifai.com/explore) that can be used as standalone solutions, or as building blocks for your own custom business solutions.

This page describes some important model types that you should know when working with the Clarifai platform. Please keep in mind that this is an overview of the general categories of models available to you and that new models are created frequently. 

For a listing of the models available to you:

* Make a `GET` call to the [`/models/types`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#list-model-types) API method or the `ListModelTypes` gRPC API method. The method responds with all the available model types.
* If you want to create a model with your preferred model type, you can make a `POST` request to the [`/models`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#create-a-model) API method or the `PostModels` gRPC API method with the `model_type_id` parameter specified in the request. 

:::tip

[Click here](../../portal-guide/model/model-types/) to learn more about the model types we offer.

:::
