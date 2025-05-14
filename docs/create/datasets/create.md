---
description: Learn how to create datasets and their versions
sidebar_position: 1
toc_max_heading_level: 4
---

# Datasets Creation

**Learn how to create datasets and their versions**
<hr />

## **Create via the UI**

### Create a New Dataset

To create a new dataset, head to the individual page of your application. Then, select the **Datasets** option in the collapsible left sidebar.

You'll be redirected to the **Datasets** manager page, where you can create new datasets and view already created ones. Click the **Create Dataset** button in the upper-right corner of the page. 

![](/img/community/datasets/dataset_1.png)

On the **New Dataset** page, provide an ID and, optionally, a short description of the dataset. Then, click the **Create** button. 

![](/img/community/datasets/dataset_2.png)

You'll be redirected to the created dataset's page, where you can accomplish various tasks. Let's talk about them. 

![](/img/community/datasets/dataset_3.png)

#### View in Leaderboard

To view the dataset in the Leaderboard, click the **View in Leaderboard** button in the upper section of the page. You'll be redirected to the **Leaderboard** page, where you can assess how the dataset performs when used to evaluate a model.

[Click here](https://docs.clarifai.com/portal-guide/evaluate/leaderboard/#evaluation-dataset--version) to learn how the leaderboard feature works. 

#### Edit Visibility

To change the visibility of the dataset, whether from private to public or vice versa, click the **Edit Visibility** button located in the upper section of the page. A pop-up window will appear, allowing you to modify the dataset's visibility settings.

![](/img/community/datasets/dataset_3-1.png)

:::note

If you make a specific version of a dataset public, your user ID and app ID will also be set to public. 

:::

After editing the settings, click the **Confirm** button. 

#### Upload Inputs

To add inputs to the dataset, click the **Upload Inputs** button in the upper section of the page. You'll be redirected to the Inputs-Manager page, where you can upload inputs to the dataset.

[Click here](https://docs.clarifai.com/portal-guide/data/#upload-inputs) to learn how to upload inputs to our platform. 

#### Create Labeling Task

To create a labeling task, click the **Create Labeling Task** button in the upper section of the page. You'll be redirected to the **New Labeling Task** page, where you can create a new labeling task to label the inputs in your dataset either manually or automatically. 

[Click here](https://docs.clarifai.com/portal-guide/annotate/create-a-task) to learn how to create a labeling task. 

#### Train Model

To train a model, click the **Train Model** button in the upper section of the page. You'll be redirected to a page where you can create a new custom model for your use case. 

[Click here](https://docs.clarifai.com/portal-guide/model/pcustom-model-walkthrough) to learn how to create and train a model. 

### Create Dataset Version

A dataset can change over time for various reasons, such as by adding or removing inputs. With dataset versioning, you can assign a unique identifier to a specific version of a dataset. 

A dataset version can help you achieve many things, such as:

- Refer to a specific dataset version and recreate the same results. This can help you to have a clear reference to what data was used at a particular point in time.
- Ensure everyone in your team is working on the same dataset. This reduces confusion and errors, and leads to accurate results. 
- Track the changes you've made to a dataset over time. This can help you to determine whether you're improving the quality and quantity of your dataset. 

After adding inputs to a dataset, you can create a version that bookmarks the state of your data so that you can apply a specific version of the dataset for future iterations. 

To create a new dataset version, go to the individual page of your created dataset and click the **New version** button. 

![](/img/community/datasets/dataset_10.png)

Finally, click the **Update status** button. 

![](/img/community/datasets/dataset_11.png)

The total number of inputs and their respective annotations are displayed in the **Overview** tab. 

:::note

If you click the **Explore Inputs** button, you'll be redirected to the Inputs-Manager page, where all the inputs in your dataset are displayed.

:::

![](/img/community/datasets/dataset_12.png)

The versions of the datasets you've created are displayed in the **Versions** tab. 

![](/img/community/datasets/dataset_13.png)

As you can see in the screenshot above, the **Versions** tab has a chart that displays the total number of inputs in your dataset over time, with data plotted against specific dates. 

By default, it shows the annotation metrics based on the dataset version, with each annotation type represented by a distinct color. This makes it easy to track and compare trends across different dates.

You can switch the chart to display metrics by input type by clicking the **by inputs** button in the upper-right corner. Each type of input is marked with its own color. 

![](/img/community/datasets/dataset_13_1.png)

If you hover over the chart, a tooltip is activated that provides detailed information for that specific date, including the exact count of the type of annotation or type of input. The hovered item is highlighted in the tooltip, which allows for quick identification.

Additionally, a table is provided below the chart. It lists each dataset version alongside the creation date, description, input count, and annotation count. The table includes a search function for easy lookup and allows the sorting of columns for streamlined navigation.

#### Auto-Generated Versions

As you navigate through the **Versions** tab, you might come across auto-generated dataset versions.

These are some cases where **"auto-generated-*"** dataset versions could be created:

- If you train a model and only select a dataset, but not a corresponding dataset version.
- During the model evaluation process, the **auto-generated** dataset versions are used to store the different ground truths and predictions, which are then used to further calculate the actual evaluation metrics.

![](/img/community/datasets/autogen_version.png)

## **Create via the API**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeCreateDataset from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/create_dataset.py";
import CodeCreateDatasetTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/creatingDatasets.ts";
import CodeCreateDatasetV from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/create_data_version.py";
import CodeCreateDatasetVTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/createDatasetVersion.ts";
import curlCreateDataset from "!!raw-loader!!../../../code_snippets/api-guide/data/datasets/create_dataset.sh";
import curlAddDatasetVersion from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/add_dataset_version.sh";

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

### Create a Dataset

You can create a dataset by specifying a unique dataset ID.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCreateDataset}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeCreateDatasetTS}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlCreateDataset}</CodeBlock>
</TabItem>

</Tabs>

### Create a Dataset Version

After making changes to a dataset, such as adding new inputs, you can create a new version to reflect those updates, [as previously explained](#create-dataset-version).

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCreateDatasetV}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeCreateDatasetVTS}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddDatasetVersion}</CodeBlock>
</TabItem>

</Tabs>


        