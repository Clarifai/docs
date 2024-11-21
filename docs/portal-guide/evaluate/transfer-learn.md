---
description: Learn how to evaluate transfer learn models
sidebar_position: 1
draft: true
---

# Transfer Learn Models

**Learn how to transfer learn models**
<hr />

## How It Works

Evaluating classifier models is performed using K-split cross-validation on the provided test data.

![cross validation](/img/cross_validation.jpg)

This is how the cross-validation process works:

1. **Data splitting:** Randomly set aside a 1/K subset of the evaluation data as a test set.
2. **Model training:** Train a new model on the remaining data.
3. **Prediction:** Use the newly trained model to make predictions on the test set.
4. **Comparison:** Compare the predictions with the actual labels of the test set.
5. **Repetition:** Repeat steps 1 to 4 across K-splits to average out the evaluation results.

## Cross-App Evaluation

Cross-app evaluation refers to evaluating the performance of a model version using datasets within your current application or those from another application under your ownership. This means that you can assess how well your model performs across various contexts or use cases by leveraging datasets from separate applications within your ownership.

You can run the evaluation on a specific version of your custom model on the Community platform. To do so, navigate to the version table of your model and locate the version of the model you want to evaluate.

The **Evaluation Dataset** column in the table allows you to select a dataset to use to assess the performance of your model version. If you click the field, a drop-down list emerges, enabling you to select a dataset version to perform the evaluation.

This selection can include datasets within your current application or those from another application under your ownership, which facilitates cross-app evaluation.

![](/img/community/evaluate/evaluate_1.png)

Also, if you click the **Evaluate with a new Dataset** button, a small window will pop up. Within this window, you can choose a new dataset not included in the drop-down list, along with its version, for conducting the evaluation. If you do not select a dataset version, the latest one will be automatically used.

![](/img/community/evaluate/evaluate_2.png)

After selecting the dataset you want to use for the evaluation, click the **Calculate** button. This will start the evaluation process. 

The evaluation may take some time. Once complete, the **Calculate** button will become a **View Results** button, which you can click to see the evaluation results.