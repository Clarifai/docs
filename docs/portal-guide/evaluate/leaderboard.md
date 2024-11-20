---
description: Compare models' performance based on their evaluation results
sidebar_position: 7
---

# Evaluation Leaderboard

**Compare models' performance based on their evaluation results**
<hr />

The Evaluation Leaderboard is a ranking system that compares the performance of your models based on their evaluation results. It’s a scoreboard that provides useful insights for the model versions in your apps and ranks them according to selected benchmark metrics.

The Leaderboard allows you to:

- **Find** top-performing models within a specific model type across your apps. It organizes models based on their evaluation results, making it effortless to access the best models for your chosen criteria.

- **Discover** models tailored to a specific task type and dataset, allowing you to pinpoint the top-performing models effortlessly.  

- **Access** a variety of insight tabs to further evaluate your models. You can delve deeper into model version details, dataset specifics, and more—while conducting a comprehensive comparison of model performances.

- **Identify** the strengths and weaknesses of your models. You can analyze the Leaderboard and identify areas where your models excel and areas where they need improvement.

:::note

The Evaluation Leaderboard feature currently supports visual classification, detection, and text classification model types. Support for text generation and other model types will be available soon.

:::

:::info

The Evaluation Leaderboard feature is currently exclusively available to Enterprise users.

:::

## How to Access the Leaderboard

After [running an evaluation](https://docs.clarifai.com/portal-guide/evaluate/#running-evaluation) on a specific version of your custom model, the model and its version will be listed on the Leaderboard page. 

To access the Leaderboard, click the **My Apps** navigation element and select the **Leaderboard** tab.  

![access leaderboard](/img/others/leaderboard_1.png)

## How to Use the Leaderboard

By default, the Leaderboard displays the evaluation results of your **Transfer Learn Classifier** models. If you want to see the results of another [type of model](https://docs.clarifai.com/portal-guide/model/model-types/), select it from the model type option in the left sidebar. 

You can also filter the displayed results based on an evaluation dataset, training dataset, and concepts associated with the dataset you’ve selected.

The filtering options in the left sidebar can be collapsed or expanded with ease — simply by clicking the button located next to each option. 

### Leaderboard Table

The Leaderboard table displays various model evaluation metrics. This offers a comprehensive view of a model's performance across various dimensions.

#### Rank

The **Rank** column provides a quick and intuitive comparison of model performances. Models are ordered based on their sorted evaluation metrics, making it easy for you to identify which ones are leading and how they compare to each other.  

#### Model ID / Version

The **Model ID / Version** column helps to uniquely identify each model and its associated version. This lets you compare the performance of different model versions by referring to their respective IDs.

You can sort them alphabetically, either in ascending order (A to Z) or descending order (Z to A).

![model id/version leaderboard](/img/others/leaderboard_2.png)

If you click a cell within the column, you’ll be navigated to a page that displays more information about the model version. 

Here is an example: 

![model version details](/img/others/leaderboard_3.png)

#### Evaluation Dataset / Version

The **Evaluation Dataset / Version** column indicates the dataset, and its associated version, which was used to evaluate each model. 

This information is crucial for understanding the context of a model's performance. Different datasets or versions may present unique challenges or characteristics that impact model performance.

If you hover over a cell within the column, a tooltip will be revealed, displaying information about the dataset, and its corresponding version, which was utilized for the evaluation.

Here is an example:

![evaluation version details](/img/others/leaderboard_4.png)

#### Training Dataset / Version

The **Training Dataset / Version** column indicates the dataset, and its associated version, which was used for training each model. 

This column helps you assess how models perform when trained on different datasets, contributing to fair and robust benchmarking.

If you hover over a cell within the column, a tooltip will be revealed, displaying information about the dataset, and its corresponding version, which was utilized for the training.

#### ROC/AUC

The **ROC/AUC** column, where ROC stands for Receiver Operating Characteristic and AUC for Area Under the Curve, gives another useful performance metric. 

The column provides a concise summary of how well each model discriminates between classes or [concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete), making it easier to compare the models based on their receiver operating characteristics. A higher score generally indicates better discrimination.

You can use the column to quickly identify models that excel in distinguishing between concepts, allowing you to select the ones with superior discrimination capabilities and better performance.

You can sort the ROC/AUC score in ascending order, from lowest to highest, or in descending order, from highest to lowest. 

You can [click here](https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations/#roc-auc-concept-accuracy-score) to learn more about the ROC/AUC metric.
If you click a cell within the column, you’ll be navigated to a page that displays more information about the evaluation highlights. 

Here is an example: 

![evaluation version details](/img/others/leaderboard_5.png)

#### F1

The **F1** column indicates an overall assessment of a model's ability to balance precision and recall rates. The F1 score is the harmonic mean of precision and recall, providing a balanced measure of a model's performance on both false positives and false negatives.

You can use the column to help you choose models that align with the desired trade-off between false positives and false negatives, depending on the specific application context. 

You can sort the F1 score in ascending order, from lowest to highest, or in descending order, from highest to lowest. 

You can [click here](https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations/#f1-score) to learn more about the F1 metric.

If you click a cell within the column, you’ll be navigated to a page that displays more information about the evaluation highlights. 

#### Recall

The **Recall** column allows you to evaluate how well each model captures and recalls actual positive cases. Recall, also known as sensitivity or true positive rate, measures the ability of a model to correctly identify positive instances.

You can use the column to identify models that excel in capturing positive instances, especially in scenarios where sensitivity to identifying true positives is paramount.

If you click a cell within the column, you’ll be navigated to a page that displays more information about the evaluation highlights. 
 





