---
description: Pre-trained, pre-optimized and ready to use right out of the box
sidebar_position: 1
---

# Clarifai Models

**Pre-trained, pre-optimized, and ready to use right out of the box**
<hr />

Our model library is constantly growing and developing. You can browse the [Community](https://clarifai.com/explore) platform to learn more about the available models.

You can also use the [`Get`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete#get) commands outlined in the API guide to see a list of all the available pre-built models you can use in your app.  

## Clarifai Models

Clarifai Models are "Trainable" machine learning models that have been developed in-house and have been thoroughly tested.

Clarifai Models are ready to make predictions right out of the box. 

For example: 

- Our ["General"](https://clarifai.com/clarifai/main/models/general-image-recognition) model recognizes over 11,000 different concepts, including objects, themes, moods, and more—with outputs in 23 different languages. 
- Our ["Food"](https://clarifai.com/clarifai/main/models/food-item-recognition) model recognizes more than 500 food items in images down to the ingredient level. 

Before you train your own model, we suggest trying these out to see if they fit your needs.

## Operator Models

Operator models are "Non-Trainable", or "fixed function" models that help you connect, route, and control the inputs and outputs that you send through your [workflows](https://docs.clarifai.com/api-guide/workflows/). 

Operator models are critical building blocks for creating more advanced workflows.

Here is a selection of some model types to give you an idea of what is possible: 

* **Concept Thresholder**—Use a threshold and an operator \(&gt;, &gt;=, =, &lt;=, or &lt;\) to route the outputs of classification models in your workflows. For example, if you use the " &gt; " threshold type and set the threshold value to 0.9, only concepts that have been predicted with a confidence score greater than 0.9 will be sent as outputs from the concept thresholder, and other concepts will be ignored. Concept Thresholders can be networked and combined to enable complex routing behaviors.
* **Concept Synonym Mapper**—Map the input concepts to output concepts by following synonym concept relations in the knowledge graph of your app.
* **Annotation Writer**—Write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation.
* **Image Cropper**—Crop the input image according to each input region that is present in the input. When used in a workflow, this model can look back along the graph of the workflow to find the input image, if the preceding model does not output an image itself so that you can do image -&gt; detector -&gt; cropper type of workflow easily.
* **Random Sampler**—Randomly sample inputs allowed to pass through as outputs. This is done with the conditional keep\_fraction &gt; rand\(\) where keep\_fraction is the average fraction of inputs that will be allowed through.
* **Cross App Visual Searcher**—Perform a visual search in another app that you have configured in the model configuration and return the matched search hits as concept.
* **KNN Classifier Model**—Use k-nearest neighbors search and plurality voting amongst the nearest neighbors to classify new instances. This is recommended when you only have a small dataset, like one image per concept.

