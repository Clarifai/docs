---
description: Learn about our filter operators
sidebar_position: 2
---

# Filter

**Learn about our filter operators**
<hr />

Filtering helps you to remove unwanted data from your workflow. This data might take the form of inputs (like images, video, and text) or it might be an output from another model, like a predicted concept. One very common use of filters in workflows is to eliminate predictions that fall below a certain confidence threshold. That's exactly what filter operators do.

Filter operators process and analyze data by selectively passing information based on defined criteria.

This guide covers three primary filter operators used in various data processing workflows: Region Thresholder, Concept Thresholder, and Random Sample. Each operator is designed to enhance the efficiency and accuracy of data handling, ensuring that only relevant data is analyzed in subsequent stages.

### ​​**Common Features of Filter Operators**

All three operators share several key features and functionalities:

- **Input Filtering**: Each operator takes input data and applies a set of predefined rules or conditions to filter the data, ensuring that only relevant data points proceed to the next stage of processing.
- **Enhanced Workflow Efficiency**: By eliminating irrelevant or less significant data early in the process, these operators reduce the workload and computational requirements of downstream processes.
- **Configurability**: Users can configure each operator with specific parameters and thresholds to meet the unique needs of their application, making these tools versatile across different scenarios and datasets.

## Region Thresholder

**Input:** `regions[…].data.concepts`
**Output:** `regions[…].data.concepts`

The Region Thresholder model filters image regions based on the confidence scores assigned to detected concepts and works with the visual detection node.

It ensures that only regions meeting specific confidence criteria are passed on for further processing, enhancing the workflow results' accuracy and relevance. It uses a thresholding mechanism to filter out regions according to threshold criteria set by the user, ensuring that only regions with required scores are considered for further analysis. 

It’s threshold mechanism is discussed below:

- **Threshold Type:** The threshold can be set using various operators such as >, >=, =, \<=, or \<.
- **Per Concept Thresholding:** For each concept detected in a region, the confidence score is compared to the specified threshold or threshold criteria set by the user. For example, if the threshold type is >, then only regions with a concept's confidence score greater than the threshold will be passed on.
- **Overall Region Filtering:** If all concepts within a region are filtered out (i.e., none meet the threshold criteria), the entire region is removed from the output.

#### Example Scenario

- **Concept:** "Laptop"
- **Threshold Type:** >
- **Threshold Value:** 0.8
- **Operation:** If the confidence score of "Laptop" in a detected region is greater than 0.8, that region is passed through. Otherwise, it is filtered out.

Let's demonstrate how you can use the Region Thresholder, alongside a [detection model](https://docs.clarifai.com/portal-guide/model/model-types/visual-detector). The reason behind this is that the Visual Detector identifies regions and provides the confidence scores that the Thresholder uses to filter those regions effectively. Without the Visual Detector, the Region Thresholder would lack the necessary data to perform its filtering function.

1. Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as [general-image-detection](https://clarifai.com/clarifai/main/models/general-image-detection), and select its version. You can also set the other configuration options — including selecting the concepts you want to filter.

2. Search for the Region-Thresholder option in the left-hand sidebar and drag it onto the workspace. Now set up its output configuration on below given parameters:

- **concepts -** Select the concepts and their confidence threshold value.
- **concept_threshold_type -** Select the concept threshold type from the dropdown. 

3. Connect the visual-detector model with the Region Thresholder operator and save your workflow.

![Region Thresholder Setup](<../../../static/img/agent-system-operators/Region Thresholder Setup.png>)

To see it in action, upload the inputs from your local device or use the inputs in the app.  As soon as you upload inputs, the workflow will give the output based on the configurations done.

![Region Thresholder Output](<../../../static/img/agent-system-operators/Region Thresholder Output.png>)

You can try this workflow [here](https://clarifai.com/clarifai/Sample-Workflows-for-Docs/workflows/Region-Thresholder?version=c6e19afea2a740738cbaad0bb53913f5). 
:::note
Before trying to access the workflow, please make sure that you have a Clarifai account and are logged in to the Clarifai platform to access the example workflow. If you do not have clarifai account you can signup [here](https://clarifai.com/explore).
:::

## Concept Thresholder

**Input:** `concepts`
**Output:** `concepts`

The Concept Thresholder model filters entire datasets based on the confidence scores assigned to specific concepts. This model works effectively across different types of data inputs, not limited to visual data.

It ensures that only data points meeting specific confidence criteria are passed on for further processing, enhancing the accuracy and relevance of the workflow results. It uses a thresholding mechanism to filter out data according to criteria set by the user, ensuring that only data with required scores are considered for further analysis.

Its threshold mechanism is discussed below:

- **Threshold Type:** The threshold can be set using various operators such as >, >=, =, \<=, or \<.
- **Per Concept Thresholding:** For each concept detected in the dataset, the confidence score is compared to the specified threshold or threshold criteria set by the user. For example, if the threshold type is >, then only data points with a concept's confidence score greater than the threshold will be passed on.
- **Overall Data Filtering:** If all concepts within a data point are filtered out (i.e., none meet the threshold criteria), the entire data point is removed from the output.

#### Example Scenario

- **Concept:** "Bridge"
- **Threshold Type:** >
- **Threshold Value:** 0.75
- **Operation:** If the confidence score of "Bridge" in a data point is greater than 0.75, that data point is passed through. Otherwise, it is filtered out.

Let's demonstrate how you can use the Concept Thresholder to efficiently manage large datasets. This model is pivotal for tasks where specific concept relevancy is critical, such as filtering customer feedback or social media posts.

1. Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as [general-image-detection](https://clarifai.com/clarifai/main/models/general-image-detection), and select its version. You can also set the other configuration options — including selecting the concepts you want to filter.


2. Search for the concept-thresholder option in the left-hand sidebar and drag it onto the empty workspace. Now set up its output configuration on the below-given parameters:

- **concepts** - Select the concepts and their confidence threshold value.
- **concept_threshold_type** - Select the concept threshold type from the dropdown.


3. Connect the visual-detector model with the Concept Thresholder operator and save your workflow.

![Concept Thresholder Setup](<../../../static/img/agent-system-operators/Concept Thresholder Setup.png>)

To see it in action, upload the inputs from your local device or use the inputs in the app.  As soon as you upload inputs, the workflow will give the output based on the configurations done.

![Concept Thresholder Output](<../../../static/img/agent-system-operators/Concept Thresholder Output.png>)

You can try this workflow [here](https://clarifai.com/clarifai/Sample-Workflows-for-Docs/workflows/Concept-Thresholder?version=ff04af9f5fff471aa7a4691a23474607). 
:::note
Before trying to access the workflow, please make sure that you have a Clarifai account and are logged in to the Clarifai platform to access the example workflow. If you do not have clarifai account you can signup [here](https://clarifai.com/explore).
:::

## Random Sampler

**Input:** `any`
**Output:** `any`

The Random Sample model randomly selects a subset of data from the input based on a specified sample size or percentage, making it an essential tool for statistical analysis and model training. This operator ensures that the sample is representative of the whole dataset, thus maintaining the integrity and variability of the data.

It employs a sampling mechanism to randomly pick data points, ensuring that every item in the dataset has an equal chance of being included in the sample. This approach is crucial for reducing bias in the analysis results.

Its sampling mechanism is discussed below:

- **Sampling Type:** The sampling can be configured to select either a fixed number of items or a percentage of the total dataset.
- **Random Selection:** Each item in the dataset is given an equal probability of being selected, ensuring a fair and unbiased sample.

#### Example Scenario
- **Sampling Type:** Percentage
- **Sampling Value:** 0.1
- **Operation:** If the dataset consists of 1,000 items, the Random Sample operator will randomly select 100 items to be passed on for further processing.

Let's demonstrate how you can use the Random Sample operator to handle large datasets efficiently or prepare data for machine learning model training.

1. Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as [general-image-detection](https://clarifai.com/clarifai/main/models/general-image-detection), and select its version. You can also set the other configuration options — including selecting the concepts you want to filter.


2. Search for the random-sample option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to specify the sampling criteria ie; **keep fraction**. This is the fraction of input to randomly keep. This is implemented as simply if keep_fraction > rand() then output this input from the model . This is applied independently for each input sent in a batch to the model.


3. Save your workflow without the need to connect it directly to a data processing model, as it functions independently to reduce the dataset size.

![Random Sampler Setup](<../../../static/img/agent-system-operators/Random Sampler Setup.png>)

To see it in action, upload the inputs from your local device or use the inputs in the app. As soon as you upload inputs, the workflow will give the output based on the configurations done, displaying a randomly selected subset of the data.

![Random Sampler Output](<../../../static/img/agent-system-operators/Random Sampler Output.png>)

You can try this workflow [here](https://clarifai.com/clarifai/Sample-Workflows-for-Docs/workflows/Random-Sampler?version=cc26641fca6b4a5d8a8075e6883deb54). 
:::note
Before trying to access the workflow, please make sure that you have a Clarifai account and are logged in to the Clarifai platform to access the example workflow. If you do not have clarifai account you can signup [here](https://clarifai.com/explore).
:::
