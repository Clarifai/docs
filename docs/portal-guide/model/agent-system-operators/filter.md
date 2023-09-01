---
description: Learn about our filter operators
sidebar_position: 1
---

# Filter

**Learn about our filter operators**
<hr />

Filtering helps you to remove unwanted data from your workflow. This data might take the form of inputs (like images, video, and text), or it might be an output from another model, like a predicted concept. One very common use of filters in workflows is to eliminate predictions that fall below a certain confidence threshold.

## Concept Thresholder 

**Output**: Concepts

It allows you to threshold input concepts according to both a threshold and an operator (>, >=, =, <=, or <). For example, if you use the " > " threshold type and set the threshold value to 0.9, only concepts that have been predicted with a confidence score greater than 0.9 will be sent as outputs from the concept thresholder, and other concepts will be ignored. Concept Thresholders can be networked and combined to enable complex routing behaviors.

#### Example use case

A customer wants to automatically tag images based on AI predictions. They would connect a classification model with a "Concept Thresholder" model to determine which images are labeled and which ones are not.

## Region Thresholder 

**Output**: Regions

It allows you to threshold regions based on the concepts that they contain using a threshold per concept and an overall operator (>, >=, =, <=, or <). For example, assume the " > " threshold type is set for a model, then if the input `regions[...].data.concepts.value` is greater than the threshold for that concept, the input concept will be the output from this model; otherwise, it will not be outputted by the model. If the entire list of concepts at `regions[...].data.concepts` is filtered out, then the overall region will also be removed.

## Random Sample

It allows you to randomly allow an input to pass to the output. This is done with the conditional `keep_fraction > rand()` statement, where `keep_fraction` is the fraction to allow through on average.

## Input Filter 

**Output**: Any

If the input going through this model does not match those we are filtering for, it will not be passed on to the workflow branch.

## Keyword Filter Operator 

**Output**: Concepts

This operator is initialized with a set of words, and then determines which are found in the input text. 
