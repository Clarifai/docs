---
description: Learn about our push operators
sidebar_position: 3
---

# Push

**Learn about our push operators**
<hr />

Push operators help you to automate processes. You can trigger a wide variety of actions based on predictions made by models in your workflow. You can automatically add a label to an image based on predicted concepts, send an SMS message when a certain object is detected, and more.

## Annotation Writer 

**Output**: Any

Allows you to write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation. 

## Status Push 

**Output**: Any

This model pushes the processing status of a batch of inputs ingested through vendor/inputs endpoint in one request.

## Results Push 

**Output**: Any

This model pushes Clarifai’s prediction results in an external format.

## Email Alert

**Output**: Any

This model will send an email if there are any data fields input to the specified model.

## SMS Alert 

**Output**: Any

This model will send an SMS if there are any data fields input to the specified model.
