---
description: Learn how to make positive and negative annotations
pagination_next: null
sidebar_position: 5
---

# Positive and Negative Annotations

**Learn how to make positive and negative annotations**
<hr />

Positive and negative annotations play a critical role in training machine learning models. 

Positive annotations help the model identify and learn the features associated with a particular input. Negative annotations, on the other hand, help the model distinguish between similar inputs by highlighting what the input is not. 

Some inputs may also have overlapping features, especially in complex datasets. Providing both positive and negative annotations reduces the risk of the model misclassifying similar but distinct inputs, leading to more precise predictions.

By annotating your data with both positive and negative labels, you provide your model with the comprehensive information it needs to learn effectively, which results in better performance and more reliable outcomes.

Let's talk about how a model could interpret these annotations for a classification labeling task. 

:::tip 

You can use the [Labeling Tasks](https://docs.clarifai.com/portal-guide/annotate/labeling-tools) tool to assign both positive and negative labels.

:::

## Positive Annotation

If an input is tagged with a positive annotation, it is considered a positive label for it.

For example, if you positively annotate your input with the `burger` concept, your custom model will see it as having that label. 

![](/img/annotation_i.jpg)

If an input is tagged with a positive annotation, a negative label is implicitly assigned to all the other concepts that are not tagged as positive. 

For example, if an input is positively annotated with the `burger` concept, the model will implicitly treat `pizza` and `taco` as negative labels for that input.

In that case, here's how the model could see the labels:

![](/img/annotation_ii.jpg)

## Negative Annotation

If an input is tagged with a negative annotation, it is treated as a negative label for that concept. It emphasizes that the input does not belong to that concept.

For example, if you negatively annotate your input with the `pizza` concept, your model will recognize that the input does not represent `pizza`.

![](/img/annotation_iii.jpg)

If there is no positive annotation for an input, then if any concept is tagged with a negative annotation, it is treated as a negative example for all concepts related to that input.

In that case, here's how the model could see the labels:

![](/img/annotation_iv.jpg)

## No Annotations

If an input lacks either positive or negative annotations, the model ignores the example.

![](/img/annotation_v.jpg)

