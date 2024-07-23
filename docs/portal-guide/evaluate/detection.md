---
description: Learn how to interpret the evaluation results of detection models
sidebar_position: 1.1
---

# Evaluating Detection Models

**Learn how to interpret the evaluation results of detection models**
<hr />

As mentioned in the previous [Evaluating Models](./) section, once the evaluation process is complete, the **Calculate** button will become a **View Results** button. 

You can click the **View Results** button to see and interpret the evaluation results of your detection model. 

![](/img/community/evaluate/evaluate_6.png)

You will then be redirected to the **Evaluation results** page, where you can analyze the outcomes of the evaluation process.

![](/img/community/evaluate/evaluate_7.png)

## Evaluation Highlights

At the top of the page, you will find details about the evaluated model, including:

- Version of the model evaluated
- Evaluation date
- Number of concepts used for evaluation
- App name
- Dataset name
- Dataset version ID

The **Evaluation highlights** section provides key numerical metrics that offer an overview of the model's prediction performance, allowing you to assess the model's effectiveness at a glance.

<br/>

Let’s talk about the crucial metrics used in the evaluation of object detection models. 

## Intersection Over Union (IoU)

Intersection over Union (IoU) measures the degree of overlap between two bounding boxes: the predicted bounding box and the ground truth bounding box. It is defined as the ratio of the area of overlap to the area of union between the two intersecting boxes.

It is calculated as: `Area of Overlap / Area of Union`. 

Here is an image that demonstrates the IoU between a ground truth bounding box (in green) and a detected bounding box (in red):

![](/img/community/evaluate/evaluate_10.png)

_Image source: [GitHub](https://github.com/rafaelpadilla/Object-Detection-Metrics)_

The IoU score provides a numerical value indicating how well the model’s predictions align with the actual object locations. A higher IoU score signifies a better match between the predicted and ground truth bounding boxes, indicating superior localization accuracy. The values range from 0 to 1, where 1 indicates perfect overlap, and 0 indicates no overlap. 

IoU can be used to determine the following concepts:

:::note

For each predicted bounding box, IoU is calculated with respect to the ground truth bounding boxes. A predicted bounding box is considered a true positive if its IoU with a ground truth bounding box exceeds a predefined threshold (such as 0.5). Otherwise, it is considered a false positive. 

:::

- **True Positive** – a correct detection where IoU is greater than the threshold.
- **False Positive** – an incorrect detection where IoU is less than the threshold. 
- **False Negative** – occurs when a ground truth is not detected. 
- **True Negative** – not applicable for object detection tasks, as it would represent a corrected misdetection. 

Different IoU thresholds can be applied to assess the model's performance at varying levels of strictness. 

This is how the metrics are displayed on the **Evaluation Summary** table:

![](/img/community/evaluate/evaluate_13.png)

## Precision

Precision measures the accuracy of the model’s positive predictions. It quantifies the model's ability to identify only the relevant objects, specifically assessing how well the model distinguishes true positives from false positives.

A high precision score implies that the model effectively avoids false positives, providing reliable positive predictions.

It is calculated as: `True Positives / (True Positives + False Positives (all detections))`.

## Recall

Recall, also known as sensitivity or the true positive rate, measures a model's ability to correctly identify all relevant objects in the image (all ground truth bounding boxes). It specifically measures the model’s completeness in detecting objects of interest.

A high recall score implies that the model effectively identifies most of the relevant objects in the data.

It is calculated as: `True Positives / (True Positives + False Negatives (all ground truths))`.

## F1 Score

The F1 score offers an overall assessment of a model's ability to balance precision and recall. It is the harmonic mean of precision and recall, providing a balanced measure of a model's performance in relation to both false positives and false negatives.

It is calculated as: `2 * (Precision * Recall) / (Precision + Recall)`

The F1 score ranges from 0 to 1, with 1 being the best possible score. A high F1 score indicates that the model has both high precision and high recall, meaning it accurately identifies most positive instances in the dataset while minimizing false positives.

## Precision-Recall Curve

The Precision-Recall (PR) curve is an effective tool for evaluating the performance of an object detector as the confidence threshold is varied. This curve is plotted for each object class and provides insights into the trade-off between precision and recall.

An object detector for a particular class is considered good if its precision remains high as recall increases. This means that even when varying the confidence threshold, both precision and recall values stay high. High precision indicates that the detector identifies only relevant objects (few to no false positives), while high recall means it finds all ground truth objects (few to no false negatives).

On the other hand, a poor object detector increases the number of detected objects (resulting in more false positives and thus lower precision) to achieve high recall. This is why the PR curve typically starts with high precision values (y-axis) that decrease as recall (x-axis) increases. 

A good object detector will have a PR curve that maintains a high precision level across a broad range of recall values, indicating balanced performance in detecting relevant objects while minimizing false positives.

This is how the curve is displayed on the page:

![](/img/community/evaluate/evaluate_14.png)

## Average Precision (AP)

By varying the confidence score threshold for detections, different sets of true positives and false positives are obtained, which are used to plot the precision-recall curve. The area under this curve (AUC), which often exhibits a zigzag pattern, represents the Average Precision (AP) for each class. Higher AUC values indicate superior model performance.

AP is a single value that is crucial in capturing a harmonious balance between false positives and false negatives, which encapsulates the complexities of the model’s performance.

## Mean Average Precision (mAP)

Mean Average Precision (mAP) extends the concept of Average Precision (AP). Instead of assessing the model’s performance at a single confidence threshold, mAP calculates the average AP values across multiple IoU thresholds. 

It summarizes the detection and classification performance of an object detection model across all classes. Localization establishes the location of an instance (such as bounding box coordinates), and classification identifies what it is (such as a cat or a dog).

mAP is a single number that represents the tradeoff between precision and recall in order to maximize the effect of both metrics. Higher mAP values indicate better overall performance.

This approach ensures that the model performs well not only with loose bounding boxes (low IoU) but also with tighter, more accurate detections (high IoU). By averaging the precision across various IoU thresholds, mAP provides a comprehensive performance profile.

:::tip

Learn how to use the Prediction Threshold slider tool [here](https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations#prediction-threshold). 

:::

