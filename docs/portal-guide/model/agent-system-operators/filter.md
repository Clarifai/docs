---
description: Learn about our filter operators
sidebar_position: 1
---

# Filter

**Learn about our filter operators**
<hr />

## Concept Thresholder 

**Output**: Concepts

It allows you to threshold input concepts according to both a threshold and an operator (>, >=, =, <=, or <). For example, assume the " > " threshold type is set for a model, then if the input `concept.value` is greater than the threshold for that concept, the input concept will be the output from this model; otherwise, it will not be outputted by the model. 

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
