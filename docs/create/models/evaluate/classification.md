---
description: Evaluate visual or text classifiers trained using deep fine-tuning
sidebar_position: 3
---

# Classification Models

**Evaluate visual or text classifiers trained using deep fine-tuning**
<hr />

[Deep fine-tuning](https://docs.clarifai.com/portal-guide/model/deep-training/) is a technique where pre-trained models are further trained on a target dataset, adjusting the weights of the entire model (or selected layers) to better align with the specific task.
 
Evaluating deep fine-tuned classifiers involves assessing their abilities to make predictions on unseen data and effectively solve the tasks for which they have been fine-tuned.

## Performing Evaluation

You can evaluate a specific version of your deep fine-tuned visual or text classifier to measure its performance. To begin, navigate to the versions table of your model and locate the version you want to evaluate.

 In the **Evaluation Dataset** column, you can select a [dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) for the evaluation process. Clicking the field opens a drop-down list of available datasets, which can include datasets from your current application or others you own. 
 
 This flexibility enables cross-application evaluation, allowing you to test how well your model adapts to different contexts or use cases by utilizing datasets from separate sources.

:::tip Prepare the Evaluation Dataset

For the evaluation, it is crucial to use a dataset that was not part of the training process to prevent biased results. This dataset should be representative of real-world scenarios and include high-quality annotations. 

For visual classifiers, this means having accurately labeled images, while for text classifiers, annotations should be consistent and reflect linguistic nuances. 

Additionally, the dataset should encompass diverse examples, including edge cases. For visual classifiers, these could involve occlusions, varying lighting conditions, or complex perspectives, whereas for text classifiers, noisy data, ambiguous contexts, and diverse linguistic styles should be included.

:::

![](/img/community/evaluate/evaluate_18.png)


If the desired dataset is not in the list, you can click the **Evaluate with a new Dataset** button. This action brings up a pop-up window where you can select a new dataset and its version. 

If no specific version is chosen, the latest one will be used. 

![](/img/community/evaluate/evaluate_19.png)

Once you have selected the appropriate dataset, click the **Calculate** button to initiate the evaluation process, which could take some time.

After the evaluation is complete, the **Calculate** button will change to a **View Results** button, and the ROC metric value will be displayed for review.

:::info How Classification Evaluation Works

For visual classifiers, the model predicts class labels for each image in the test dataset, and these predictions are compared with the ground truth labels provided by the test dataset to compute metrics like accuracy, precision, and recall. 

Similarly, for text classifiers, the model assigns class labels to text inputs from the test dataset, and these predictions are compared with the ground truth annotations it contains. Metrics such as F1 score, ROC/AUC, precision, and recall are used to assess the model's accuracy, robustness, and generalization to unseen data. 

The evaluation dataset plays a crucial role by supplying the reliable ground truth labels needed for a fair and unbiased evaluation.

:::

## Evaluation Metrics

Once the evaluation process is complete, you can click the **View Results** button.

![](/img/community/evaluate/evaluate_3.png)

You will be redirected to the **Evaluation results** page, where you can analyze the outcome of the evaluation process.

![](/img/community/evaluate/evaluate_4.png)

At the top of the page, you will find details about the evaluated model, including the version of the model evaluated and the dataset ID used for the evaluation. 

The **Evaluation highlights** section provides key numerical metrics that offer an overview of the model's prediction performance, allowing you to assess the model's effectiveness at a glance.

Let's talk about how to interpret the various evaluation results. 

### ROC/AUC (Accuracy Score)

The ROC/AUC is a key metric for assessing the prediction performance of a classification model. ROC stands for Receiver Operating Characteristic, and AUC stands for Area Under the Curve. The AUC is defined as the macro average of the areas under the ROC curve for every concept, averaged across K-splits.

This metric provides a concise summary of how well each model discriminates between classes or concepts, making it easier to compare models based on their ROC characteristics. It allows you to quickly identify models that excel in distinguishing between concepts, aiding in the selection of those with superior discrimination capabilities and better performance.

A higher ROC/AUC score generally indicates better discrimination between classes or concepts. A score of 1 represents a perfect model, while a score of 0.5 represents a model with no discrimination ability, essentially performing no better than random chance. Generally, a score above 0.9 is considered excellent.

![](/img/others-2/roc_curve_example.webp)
<center>ROC curve example</center>

<br/>
<br/>

![](/img/others-2/roc_auc_example.webp)
<center>ROC and AUC example</center>

:::note

It's important to note that the ROC/AUC is not dependent on the specified [prediction threshold](#prediction-threshold). 

:::

The ROC curve is generated by plotting the True Positive Rate (y-axis) against the False Positive Rate (x-axis) as you vary the threshold for assigning observations to a given class. The AUC is the area under this curve and is arguably the best way to summarize a model’s performance in a single number.

The AUC can be thought of as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation. This makes it a useful metric even for datasets with highly unbalanced classes.

:::caution

We discourage users from making a final assessment of a classification model's accuracy based solely on the ROC/AUC score.

:::

### Total Labeled

The total number of inputs that were originally labeled as the concept in the test set. Note that the Total Labeled value is not dependent on the [prediction threshold](#prediction-threshold).

It is calculated as: `True Positives (correct predictions) + False Negatives (incorrect predictions)`. 

### Total Predicted

The total number of inputs that were predicted as the concept in the test set. This means these inputs were predicted as a concept with a probability greater than the prediction threshold value.

It is calculated as: `True Positives (correct predictions) + False Positives (incorrect predictions)`.

### True Positives

The number of inputs that were correctly predicted as the concept they were actually labeled. Also known as “hits.” For example, these are the images that were labeled as “dog” and were predicted as “dog.”

### False Negatives 

The number of inputs that were not predicted as the concept they were actually labeled. Also known as “misses”. For example, these are the images that were labeled as “dog” but were not predicted as “dog.” 

### False Positives

The number of inputs that were predicted as the concept but were not labeled as the concept. Also known as “false alarms.” For example, these are the images that were predicted as “dog” but were not labeled as “dog.”

Here is a table that summarizes the above concepts:

![](/img/community/evaluate/evaluate_15) 

_Image source: [ResearchGate](https://www.researchgate.net/profile/Nittaya-Kerdprasop/publication/329526806/figure/fig1/AS:745215891623936@1554684722023/Example-of-confusion-matrix-True-Positive-TP-The-number-of-instances-that-a-model.ppm)_

### Recall

Recall rate, also known as sensitivity or true positive rate, measures a model's ability to correctly identify all actual positive cases. It is the proportion of actual positive cases that were correctly predicted.

It is calculated as: `True Positives / (True Positives + False Negatives)`. 

### Precision

Precision rate, also known as positive predictive value, measures the accuracy of the positive predictions of a model. It is the proportion of the predicted positive cases that are actually positive.

It is calculated as: `True Positives / (True Positives + False Positives)`. 

### F1

The F1 score provides an overall assessment of a model's ability to balance precision and recall. It is the harmonic mean of precision and recall, offering a balanced measure of a model's performance concerning both false positives and false negatives.

It is calculated as: `2 * (Precision * Recall) / (Precision + Recall)`. 

The F1 score ranges from 0 to 1, with 1 being the best possible score. A high F1 score implies that the model has both high precision and high recall, meaning it correctly identifies most positive instances in the dataset while minimizing false positives.

You can use the F1 score to determine how well your model aligns with the desired trade-off between false positives and false negatives, depending on the specific application context.

## Evaluation Summary

![](/img/community/evaluate/evaluate_8.png) 

The **Evaluation Summary** table provides a comprehensive overview of the numerical evaluation results for each concept. For every concept, you can review the metrics that indicate its performance.

This table enables you to gauge the overall prediction performance of your model and identify the high-performing and low-performing concepts.

### Prediction Threshold

The probability threshold determines the model's predictions. The default threshold is 0.5. An input is classified as a concept (e.g., "dog") only if its prediction probability exceeds the threshold. You can adjust the threshold slider based on how strict you want the classification to be.

For example, if the threshold is set to 0.5 and the model predicts that the probability of an image being a "dog" is 0.7, the image will be classified as a "dog." However, if you increase the threshold to 0.8, the same image will not be classified as a "dog" since 0.7 is below the new threshold. This adjustment can help reduce False Positives but might increase False Negatives.

:::info important

All binary prediction metrics — such as True Positives, False Negatives, False Positives, Total Predicted, Recall Rate, and Precision Rate — depend on this threshold. Adjusting the threshold slider will change the values of these metrics.

:::

:::note Choosing a Prediction Threshold

A threshold is the "sweet spot" numerical score that aligns with your prediction objective for recall and/or precision. In practice, there are multiple ways to define "accuracy" in machine learning, and the threshold is the value used to gauge our preferences.

When setting your classification threshold for predicting out-of-sample data, it becomes a business decision. You must decide whether to minimize the False Positive Rate or maximize the True Positive Rate.

- If your model predicts concepts that lead to high-stakes decisions, such as diagnosing a disease or ensuring safety through moderation, you might consider a few false positives as acceptable (better safe than sorry). In this case, you would prioritize high precision.
  
- If your model predicts concepts that lead to suggestions or flexible outcomes, you might prioritize a high recall rate to allow for exploration and coverage.

In both scenarios, it is crucial to train and test your model with data that accurately reflects its intended use case.

After determining the goal of your model (high precision or high recall), you can use unseen test data to evaluate how well your model meets the established standards.

:::

## Confusion Matrix

![](/img/community/evaluate/evaluate_11.png) 

A confusion matrix is a table used to visualize the performance of a model. It summarizes the model's predictions on a set of data by comparing the actual labels with the predicted labels, helping to identify where the model gets things right or wrong.

The confusion matrix is typically presented in a tabular format with the Y-axis representing the Actual Concepts and the X-axis representing the Predicted Concepts. The cells display the average prediction probabilities for each concept and for groups of images labeled as a certain concept.

- **Diagonal cells** — Show the average probability for true positives (correctly predicted inputs).
- **Off-diagonal cells** — Show the average probability for false positives, false negatives, and other misclassifications.

Each row represents a subset of the test set labeled as a specific concept (e.g., "dog"). As you move across a row, each cell represents the average prediction probability for each concept (indicated by the column name) for all inputs in that subset across all K-splits.

The confusion matrix helps you assess the effectiveness of a model for a particular task. It provides insights into:

- **Accuracy** — Overall, how often is the model correct?
- **Misclassification Rate** — Overall, how often is the model incorrect?
- **True Positive Rate (Recall)** — When the actual label is positive, how often does the model predict positive?
- **False Positive Rate** — When the actual label is negative, how often does the model predict positive?
- **Specificity** — When the actual label is negative, how often does the model predict negative?
- **Precision** — When the model predicts positive, how often is it correct?
- **Prevalence** — How often does the positive condition actually occur in the sample?

## Selection Details

![](/img/community/evaluate/evaluate_12.png) 

The **Selection Details** table allows you to analyze your inputs by showing an image of the input alongside the prediction probabilities for each specific concept. After selecting an actual concept used for labeling your input and a concept predicted during the evaluation process, the table displays relevant information to facilitate analysis.

To identify and correct biases in your model's predictions, you can hone in on the False Positives and False Negatives. This can help you detect any biases in how the model is predicting and correct any inputs that are mislabeled.

Note that the prediction probabilities in this table may differ from your actual model's probabilities. This is because all evaluation results are based on the new model built for evaluation purposes during the cross-validation process.

## Precision-Recall Curve

![](/img/community/evaluate/evaluate_5.png) 

A Precision-Recall Curve (PR curve) is a graphical representation that assesses the performance of a binary classification model across various thresholds. It plots the trade-off between precision (positive predictive value) and recall (sensitivity) of each concept used to train your model. 

Typically, it provides insights into how well a model balances precision and recall across different decision thresholds, offering a nuanced view of its performance beyond traditional metrics like accuracy.

The PR curve is created by plotting precision on the y-axis and recall on the x-axis for different thresholds used by the model. A higher area under the PR curve (AUC-PR) indicates better performance of the model, especially when dealing with imbalanced datasets where one class (typically the negative class) is much more frequent than the other.

:::warning PR Curve

When a model has high recall but low precision, it correctly identifies most of the positive samples but also generates many false positives (i.e., it incorrectly classifies many negative samples as positive). On the other hand, when a model has high precision but low recall, it accurately classifies samples as positive but may miss many actual positive samples, resulting in fewer positive detections overall.

Because both precision and recall are important, the precision-recall curve is used to illustrate the trade-off between these metrics at different threshold levels. This curve helps in selecting the optimal threshold to balance and maximize both precision and recall, thereby improving the overall performance of the model.

:::

