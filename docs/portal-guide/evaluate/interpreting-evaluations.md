---
description: Learn to interpret model evaluations.
sidebar_position: 1
---

# Interpreting Evaluations

**Learn to interpret model evaluations**
<hr />

## Interpreting Results

As mentioned in the previous [Evaluating Models](./) section, once the evaluation process is complete, the **Calculate** button will become a **View Results** button. 

You can click the **View Results** button to see the evaluation results.

![](/img/community/evaluate/evaluate_3.png)

You'll then be redirected to the following page:

![](/img/community/evaluate/evaluate_4.png) 

We suggest that you start by looking at the **Evaluation highlights** section, especially the **Evaluation Summary** table, to get a sense of the overall model prediction performance and identify the high-performing and low-performing concepts. 

![](/img/community/evaluate/evaluate_5.png) 

Afterward, hone in on the Selection Details of the False Positives and False Negatives to identify any biases, if any, in how the model is predicting, and to correct any inputs that are mislabeled

Generally, you’ll be looking at results that represent either:

a\) the average across K-splits; or,

b\) the test set of a single split, which is about 1/K of your original training set.

Note that a single split will be capped at 1,000 inputs.

If you want to evaluate how a model performs against a test dataset, select it under the **Holdout Dataset** section and click the **Evaluate?** button. Once the evaluation process is complete, the results will be populated on the page. 

![](/img/community/evaluate/evaluate_6.png) 

:::tip

You can click [here](https://docs.clarifai.com/tutorials/how-to-evaluate-an-image-classification-model) to learn more about how to evaluate a model. 

:::

## Model Analysis

### Model Accuracy Score

![](/img/community/evaluate/evaluate_7.png) 

Model Accuracy Score is the highest level metric for your model’s prediction performance. It is defined as the macro average of the areas under the receiver operating characteristic curve for every concept. This metric does not depend on the Prediction Threshold. This metric is an average across K-splits.

A score of 1 represents a perfect model; a score of .5 represents a worthless model. As a general rule of thumb, a score above .9 is considered good.

:::important Note

We discourage users from making a final assessment of the model accuracy based on the Model Accuracy Score only.

:::

## Concept Analysis

### Prediction Threshold

![](/img/community/evaluate/evaluate_8.png) 

The probability threshold determines the model’s predictions. The default threshold is .5. The input is predicted \(i.e. “counts” \) as a concept, such as “dog”, only if the prediction probability for “dog” is higher than the set threshold; for example, 0.5. You can adjust the threshold slider depending on how ‘strict’ you want your classification to be.

All binary prediction metrics—such as True Positives, False Negatives, False Positives, Total Predicted, Recall Rate, and Precision Rate—depend on this threshold. If the threshold is adjusted, the values of those metrics also change. 

#### Choosing a Prediction Threshold

A threshold is the “sweet spot” numerical score that is dependent on the objective of your prediction for _recall_ and/or _precision_. In practice, there are multiple ways to define “accuracy” when it comes to machine learning, and the threshold is the number we use to gauge our preferences.

You might be wondering how you should set your classification threshold once you are ready to use it to predict out-of-sample data. This is more of a business decision; in that, you have to decide whether you would rather minimize the False Positive Rate or maximize the True Positive Rate.

If our model is used to predict concepts that lead to a high-stakes decision, like a diagnosis of a disease or moderation for safety, we might consider a few false positives as forgivable \(better to be safe than sorry!\). In this case, we might want high precision.

If our model is used to predict concepts that lead to a suggestion or flexible outcome, we might want a high recall rate so that the model can allow for exploration.

In either scenario, we will want to make sure our model is trained and tested with data that best reflects its use case.

Once we have determined the goal of our model \(high precision or high recall\), we can use test data that our model has never seen before to evaluate how well our model predicts according to the standards we have set.

### Evaluation Summary

![](/img/community/evaluate/evaluate_9.png) 

The table above summarizes the numerical evaluation results for every concept. 

For every concept, it calculates:

#### ROC AUC \(Concept Accuracy Score\)

The concept’s prediction performance score is defined by the area under the Receiver Operating Characteristic curve. This score gives us an idea of how well we have separated our different classes or concepts.

A score of 1 represents a perfect model; a score of .5 represents a poor model. As a general rule of thumb, a score above .9 is considered good. 

![](/img/community/evaluate/evaluate_10.png) 

:::important note

ROC AUC is not dependent on the prediction threshold.

:::

ROC AUC is generated by plotting the True Positive Rate \(y-axis\) against the False Positive Rate \(x-axis\) as you vary the threshold for assigning observations to a given class. The AUC, or Area Under the Curve, of these points is \(arguably\) the best way to summarize a model’s performance in a single number.

You can think of AUC as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation, and thus it is a useful metric even for datasets with highly unbalanced classes. 

A score of 1 represents a perfect model; a score of .5 represents a model that would be no better than random guessing, and this wouldn’t be suitable for predictions, and should be re-trained. 

#### Total Labeled

The total number of inputs that were originally labeled as the concept in the test set. Total Labeled is the sum of True Positives \(correct\) and False Negatives \(incorrect\). Note that the Total Labeled is not dependent on the prediction threshold.

#### Total Predicted

The total number of inputs that were predicted as the concept in the test set. This means these inputs were predicted as a concept with a probability greater than the prediction threshold value. Total Predicted is the sum of True Positives \(correct\) and False Positives \(incorrect\).

#### True Positives \(TP\)

The number of inputs that were correctly predicted as the concept they were actually labeled. Also known as “hits.” For example, these are the images that were labeled as “dog” and were predicted as “dog.”

#### False Negatives \(FN\)

The number of inputs that were not predicted as the concept they were actually labeled. Also known as “misses”. For example, these are the images that were labeled as “dog” but were not predicted as “dog.” 

#### False Positives \(FP\)

The number of inputs that were predicted as the concept but they were not labeled as the concept. Also known as “false alarms.” For example, these are the images that were predicted as “dog” but were not labeled as “dog.”

#### Recall Rate

The proportion of the images labeled as the concept that was predicted as the concept. It is calculated as True Positives divided by Total Labeled. Also known as “sensitivity” or “true positive rate.”

#### Precision Rate

The proportion of the images predicted as a concept that had been actually labeled as the concept. It is calculated as True Positives divided by Total Predicted. Also known as “positive predictive value.”

#### F1 Score

The F1 score is another metric for assessing the performance of models. It represents the harmonic mean of the precision and recall rates. 

The F1 score is defined as 2 \* (precision \* recall) / (precision + recall). It combines both precision and recall rates into a single metric that balances their importance.

The score ranges from 0 to 1, with 1 being the best possible score. A high F1 score implies that the model has both high precision and high recall, and is able to correctly identify most of the positive instances in the dataset while avoiding false positives.

### Confusion Matrix

A confusion matrix is a table that is used to visualize the performance of a model. It summarizes the predictions made by a model on a set of data, by comparing the actual labels of the data with the predicted labels.

It allows you to review where you see true positives, or correctly predicted inputs \(the diagonal row\). Simply put, this is an excellent feature for telling you where your model gets things right or wrong.

![](/img/community/evaluate/evaluate_11.png) 

It is usually presented in a tabular format with the Y-axis representing the `Actual Concepts` while the X-axis representing the `Predicted Concepts`. The cells display the average prediction probabilities for a certain concept, and for a group of images that were labeled as a certain concept.

The diagonal cells are the average probability for true positives, and any cells off the horizontal cells contain the average probability for non-true positives.

Each row represents a subset of the test set that was actually labeled as a concept, e.g. “dog.” As you go across the row, each cell represents the average prediction probability for each concept, noted by the column name, for all inputs in that subset, across all K-splits (i.e. “probabilities”).

The confusion matrix can help you to assess the effectiveness of a model for a particular task. It helps you to understand:

* **Accuracy**: Overall, how often is the model correct?
* **Misclassification Rate**: Overall, how often is it wrong?
* **True Positive Rate**: When it's actually yes, how often does it predict yes?
* **False Positive Rate**: When it's actually no, how often does it predict yes?
* **Specificity**: When it's actually no, how often does it predict no?
* **Precision**: When it predicts yes, how often is it correct?
* **Prevalence**: How often does the yes condition actually occur in our sample?

## Input Analysis

### Selection Details

![](/img/community/evaluate/evaluate_12.png) 

The **Selection Details** table shows the input-level details of the selection you made on the **Evaluation Summary** table. It shows the image input and prediction probabilities for each specific concept.

:::important Note

The prediction probabilities in this table may seem different from your actual model’s probabilities. The reason is that all the evaluation results are based on the new model that was built for evaluation purposes during the cross-validation process.

:::

