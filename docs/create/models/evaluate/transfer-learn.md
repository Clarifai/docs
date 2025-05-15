---
description: Evaluate visual or text classifiers trained using transfer learning
sidebar_position: 2
---

# Transfer Learn Models

**Evaluate visual or text classifiers trained using transfer learning**
<hr />

[Transfer learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning) models are machine learning models that leverage knowledge gained from training on one task (often with a large, general dataset) to improve performance on a different, often related task.

Evaluating transfer learning models for visual or text classification tasks involves assessing how well the transferred knowledge generalizes to the new task. 

## Performing Evaluation

You can evaluate a specific version of your custom transfer learn model to assess its performance on a designated dataset. To do so, navigate to the versions table of your model and locate the version of the model you want to evaluate. 

In the **Evaluation Dataset** column, click the field to open a drop-down list displaying available [datasets](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete). Then, choose a dataset to use to assess the model’s performance. 

You can select a dataset within your application or from another application under your ownership. This cross-application evaluation enables you to test your model’s robustness across various contexts and use cases.

:::tip Prepare the Evaluation Dataset

Use a separate, high-quality evaluation dataset with accurate labels that reflect real-world conditions and include challenging edge cases. This ensures an unbiased assessment of the model’s generalization and performance.

:::

![](/img/community/evaluate/evaluate_1.png)

If the desired dataset isn’t in the drop-down list, click the **Evaluate with a new Dataset** button. A window will appear, allowing you to choose a new dataset and its version for evaluation.

Note that if you do not select a specific dataset version, the latest version will be used.

![](/img/community/evaluate/evaluate_2.png)

After selecting the dataset, click the **Calculate** button to initiate the evaluation process, which could take some time.

Once complete, the **Calculate** button will become a **View Results** button, and the value for the ROC metric will be displayed.

## Cross-Validation

Evaluating transfer learning classifier models is typically done using **K-fold cross-validation** on the provided test data. This method ensures robust evaluation by leveraging different splits of the dataset, helping to mitigate biases caused by uneven data splits.  

![cross validation](/img/cross_validation.jpg)

Here’s how the cross-validation process works:  

1. **Data splitting** — The evaluation dataset is divided into K-equal subsets. For each iteration, one subset is set aside as the test set, while the remaining K-1 subsets are used for training.  

2. **Model training** — A new model is trained on the K-1 training subsets during each iteration.  

3. **Prediction** — The trained model is used to make predictions on the test set (the subset set aside for that iteration).  

4. **Comparison** — The predictions are compared with the actual labels in the test set to calculate performance metrics (such as accuracy, F1-score, or precision).  

5. **Repetition and aggregation** — Steps 1 to 4 are repeated K times, with a different subset serving as the test set in each iteration. The final performance is obtained by averaging the metrics across all splits, providing a more reliable evaluation.  

## Evaluation Metrics

Once the evaluation process is complete, you can click the **View Results** button. 

![](/img/community/evaluate/evaluate_17.png)

You will be redirected to the **Evaluation results** page, where you can analyze the outcomes of the evaluation process.

![](/img/community/evaluate/evaluate_16.png)

These are some of the metrics you can assess to understand a model’s classification performance:

- **ROC/AUC** — It evaluates a model’s ability to differentiate between classes by plotting the true positive rate against the false positive rate at various classification thresholds. The resulting curve provides insights into the model's performance, with the Area Under the Curve (AUC) summarizing its effectiveness; a value closer to 1 indicates excellent discrimination between classes.  

- **F1 Score** — It combines precision and recall into a single metric by calculating their harmonic mean. It is particularly useful for imbalanced datasets, as it considers both false positives and false negatives, providing a balanced measure of a model’s accuracy in predicting positive instances.  

- **Precision** — It focuses on the accuracy of positive predictions by calculating the proportion of correctly identified positives out of all instances classified as positive. This metric is crucial in scenarios where false positives carry significant consequences, such as fraud detection or medical diagnoses.  

- **Recall** — On the other hand, it emphasizes the model’s ability to capture all actual positive instances by calculating the proportion of true positives out of the total actual positives. It is particularly important for tasks where positive cases are missing, such as identifying diseases or security threats, which could have severe repercussions.  

[Click here](https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations#evaluation-metrics) to learn more about the evaluation metrics. 
