---
description: Keep your credentials secure and build powerful modules
sidebar_position: 4
---


# OCR Evaluation Module


**Learn how to evaluate OCR model performance effectively.**
<hr />

The OCR (Optical Character Recognition) Evaluation Module is a powerful tool designed to assess the performance of OCR workflows in Clarifai. It enables users to measure the accuracy and effectiveness of their OCR workflows by comparing model outputs against known ground truth data. 

Key features of the evaluation module include:



* Ground truth data management
* Comprehensive OCR performance metrics
* Multiple evaluation methods
* Detailed performance reports
* Support for various OCR workflows


## **Getting Started**

Before you start using the OCR evaluation module in your app, ensure that you have installed the module. You can learn how to install modules in the app [here](https://docs.clarifai.com/portal-guide/modules/create-install/#install-the-created-module-version).

There are two components of this [module](https://clarifai.com/mogith-p-n/OCR-ground-truth):



* GT Upload
* OCR Eval

Let's discuss and understand the usage of both of them one by one.


### GT (Ground Truth) Upload

The GT Upload component allows users to upload and manage ground truth data that will be used to evaluate OCR model performance. This interface provides a streamlined process for data ingestion and dataset selection.



![alt_text](/img/modules/ocr_1.png)


**Follow the steps below to access GT upload and upload data:**



1. **Accessing GT Upload:** Navigate to the '**GT Upload**' section within the OCR Evaluation Module on your Clarifai dashboard.
2. **Uploading Files:** Click on '**Browse Files**' to upload your CSV file containing ground truth data. Ensure the data is formatted as required by the evaluation tool.

**CSV Data Format Requirements:**

Required columns - image_id,ground_truth_text,bounding_box



* `image_id`: Unique identifier for each image
* `ground_truth_text`: Actual text present in the image
* `bounding_box`: Coordinates of text location (if applicable)

    **Important**: Ensure your CSV file:

* Is UTF-8 encoded
* Contains no empty rows
* Has consistent column naming
* Is under 200MB in size

You can also refer to this [file](https://github.com/mogith-pn/Assests/blob/main/gt.csv) to see an example of a correctly formatted CSV file.



3. **Selecting Dataset:** From the '**Select dataset**' dropdown, choose the dataset that aligns with your ground truth for precise evaluation.
4. **Uploading Data:** After selecting your file and dataset, click '**Upload data'** to ingest the ground truth into the platform.


### OCR Eval

The OCR Workflow Evaluation interface within the Clarifai platform allows users to assess the performance of their Optical Character Recognition (OCR) or Visual Language Model (VLM) workflows by comparing predicted outputs against pre-established ground truth data.

![alt_text](/img/modules/ocr_2.png)


After uploading the ground truth data, this component evaluates the OCR model's performance based on the uploaded data.

**Follow the steps below for OCR Eval:**



1. **Access the Module:**
    * Navigate to the OCR Evaluation Module in your Clarifai application dashboard.
2. **Model Description Configuration:**
    * **Eval Dataset:** Select the dataset against which the model will be evaluated from the dropdown menu.
    * **Workflow URL:** Enter the URL of the OCR or VLM workflow that you wish to evaluate.
3. **Model Type Selection:**
    * Choose between OCR and VLM, depending on the nature of the workflow you are testing.
4. **Evaluate Workflow:**
    * Once the dataset and workflow URL are configured and the model type is selected, click on the ‘Evaluate Workflow’ button to start the evaluation process.
5. **Viewing Results:**
    * After the evaluation is completed, the interface will display key performance metrics such as Semantic Similarity, Word Error Rate (WER), Character Error Rate (CER), Word Information Loss (WIL), Precision, Recall, and F1 Score.
    * Each metric is clickable for a detailed explanation on what it measures and how to interpret the results.


![alt_text](/img/modules/ocr_3.png)


1. **Download Evaluation Results:**
    * There is an option to download the complete evaluation report, which includes detailed metric scores and comparative analysis. 

The CSV file downloaded after evaluating the OCR workflow in provides a comprehensive breakdown of the OCR model's performance against the ground truth data. Each row corresponds to a data entry evaluated by the model. Here’s a breakdown of typical columns you might find in this CSV:



* **Input ID**: Unique identifier for each input or image evaluated.
* **Ground Truth Text**: The correct text as per the ground truth data.
* **Predicted Text**: The text that the OCR model extracted from the input.
* **Accuracy**: A percentage indicating the exact match accuracy between the predicted text and the ground truth.
* **Word Error Rate (WER)**: A metric that shows the percentage of words incorrectly predicted.
* **Character Error Rate (CER)**: Measures the percentage of characters that were incorrectly predicted.
* **Confidence Score**: Reflects the confidence of the OCR model in its predictions for each input.


## **Understanding Evaluation Metrics**


### **1. Semantic Similarity**



* **Description**: Measures how closely the OCR output matches the ground truth in terms of meaning
* **Scale**: 0 to 1 (higher is better)
* **Implementation Methods**:
    * TF-IDF vectorization with cosine similarity
    * LLM-based semantic comparison
    * Embedding model comparison


### **2. Word Error Rate (WER)**



* **Description**: Measures the minimum number of word-level operations needed to transform OCR output into ground truth
* Calculation: \
WER = (Number of word transformations) / (Total number of words in ground truth) \

* **Example**:
    * Ground Truth: "Lion is a wild animal"
    * OCR Output: "Lion iz wild animol"
    * Transformations: 3 (is→iz, missing 'a', animol→animal)
    * WER = 3/6 = 50%


### **3. Character Error Rate (CER)**



* **Description**: Measures character-level accuracy using Levenshtein distance
* Calculation: \
CER = (Number of character transformations) / (Total characters in ground truth) \

* **Example**:
    * Ground Truth: "619375128"
    * OCR Output: "61g375Z8"
    * Transformations: 3 (g→9, missing 1, Z→2)
    * CER = 3/9 = 33.33%


### **4. Word Information Loss (WIL)**



* **Description**: Indicates the percentage of words incorrectly predicted
* **Scale**: 0 to 1 (lower is better)
* **Factors**:
    * Number of correct words
    * Total words in reference
    * Total words in prediction


### **5. Precision and Recall Metrics**



* Precision:
    * Measures accuracy of recognized text
    * Formula: True Positives / (True Positives + False Positives)
    * Scale: 0 to 1 (higher is better)
* Recall:
    * Measures completeness of text recognition
    * Formula: True Positives / (True Positives + False Negatives)
    * Scale: 0 to 1 (higher is better)
* F1 Score:
    * Harmonic mean of precision and recall
    * Formula: 2 * (Precision * Recall) / (Precision + Recall)
    * Provides a balanced measure of model performance
