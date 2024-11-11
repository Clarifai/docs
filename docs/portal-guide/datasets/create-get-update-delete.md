---
description: Learn how to make the most of your datasets
pagination_next: null
sidebar_position: 1
---

# Create, Get, Update, Merge, and Delete

**Learn how to make the most of your datasets**
<hr />

The Clarifai platform allows you to create new datasets and carry out various management tasks on them. 

## Create Datasets

### Create a New Dataset

To create a new dataset, head to the individual page of your application. Then, select the **Datasets** option in the collapsible left sidebar.

You'll be redirected to the **Datasets** manager page, where you can create new datasets and view already created ones. Click the **Create Dataset** button in the upper-right corner of the page. 

![](/img/community/datasets/dataset_1.png)

On the **New Dataset** page, provide an ID and, optionally, a short description of the dataset. Then, click the **Create** button. 

![](/img/community/datasets/dataset_2.png)

You'll be redirected to the created dataset's page, where you can accomplish various tasks. Let's talk about them. 

![](/img/community/datasets/dataset_3.png)

### View in Leaderboard

To view the dataset in the Leaderboard, click the **View in Leaderboard** button in the upper section of the page. You'll be redirected to the **Leaderboard** page, where you can assess how the dataset performs when used to evaluate a model.

[Click here](https://docs.clarifai.com/portal-guide/evaluate/leaderboard/#evaluation-dataset--version) to learn how the leaderboard feature works. 

### Edit Visibility

To change the visibility of the dataset, whether from private to public or vice versa, click the **Edit Visibility** button located in the upper section of the page. A pop-up window will appear, allowing you to modify the dataset's visibility settings.

![](/img/community/datasets/dataset_3-1.png)

:::note

If you make a specific [version of a dataset](#create-a-dataset-version) public, your user ID and app ID will also be set to public. 

:::

After editing the settings, click the **Confirm** button. 

### Upload Inputs

To add inputs to the dataset, click the **Upload Inputs** button in the upper section of the page. You'll be redirected to the Inputs-Manager page, where you can upload inputs to the dataset.

[Click here](https://docs.clarifai.com/portal-guide/data/#upload-inputs) to learn how to upload inputs to our platform. 

### Create Labeling Task

To create a labeling task, click the **Create Labeling Task** button in the upper section of the page. You'll be redirected to the **New Labeling Task** page, where you can create a new labeling task to label the inputs in your dataset either manually or automatically. 

[Click here](https://docs.clarifai.com/portal-guide/annotate/create-a-task) to learn how to create a labeling task. 

### Train Model

To train a model, click the **Train Model** button in the upper section of the page. You'll be redirected to a page where you can create a new custom model for your use case. 

[Click here](https://docs.clarifai.com/portal-guide/model/pcustom-model-walkthrough) to learn how to create and train a model. 

## Create Dataset Version

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

### Auto-Generated Versions

As you navigate through the **Versions** tab, you might come across auto-generated dataset versions.

These are some cases where **"auto-generated-*"** dataset versions could be created:

- If you train a model and only select a dataset, but not a corresponding dataset version.
- During the model evaluation process, the **auto-generated** dataset versions are used to store the different ground truths and predictions, which are then used to further calculate the actual evaluation metrics.

![](/img/community/datasets/autogen_version.png)

## Get Datasets

### List of Datasets

To get a list of datasets, go to the individual page of your application. Then, select the **Datasets** option in the collapsible left sidebar.

You'll be redirected to the **Datasets** manager page, where you can get the already created datasets in your application.

![](/img/community/datasets/dataset_7.png)

### Export a Dataset

You can export the inputs in your dataset, alongside their annotations, to an external storage system.


To do so, start by clicking the icon at the extreme end of a dataset field to select the format you want to use for exporting your dataset. From the list that drops down, you can select any of the following data formats:

- **Clarifai-Data-Protobuf**, which is the default — This is a [protocol buffer](https://protobuf.dev/) (protobuf) format used by Clarifai to structure data for machine learning tasks. Protocol buffers are a language-agnostic, platform-neutral mechanism for serializing structured data. 

- **Clarifai-Data-JSON** — This is a JSON (JavaScript Object Notation) format used by Clarifai to structure data. JSON is a text-based, lightweight data-interchange format that's easy to read and write.

- **COCO** — This is the [COCO](https://cocodataset.org/#format-data) (Common Objects in Context) format used by Clarifai to structure data. COCO is a large-scale, popular dataset used in machine learning and computer vision tasks. 

After selecting your preferred export format, click the **Generate** button. Once the export file has been processed, the **Generate** button will become a **Download** button, which you can click to download your dataset.

![](/img/community/datasets/dataset_8.png)

:::note

The export feature only works after adding inputs to a dataset and creating and selecting a dataset version. Learn how to create dataset version [here](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#create-dataset-version). 

:::


### Dataset ID or Version ID

To copy a dataset ID to the clipboard, go to its individual page and click the copy button next to the dataset's ID.

To copy a dataset version ID to the clipboard, click the copy button next to the **Selected Version** search field.

![](/img/community/datasets/dataset_9.png)

## Update Datasets

### Update a Dataset Version

After making some changes to your dataset — such as adding or removing inputs, or adding or removing annotations — you may want to update your dataset version to reflect the changes. 

To update a dataset version, go to the individual page of the dataset and select the **Refresh Metrics** option that drops down after clicking the ellipsis in the upper-right corner of the page. 

![](/img/community/datasets/dataset_14.png)

Finally, click the **Update status** button. 

![](/img/community/datasets/dataset_15.png)

The updated inputs and annotations in your dataset will be displayed in the **Overview** tab.

![](/img/community/datasets/dataset_16.png)

You can also choose the dataset version you'd like to use from the **Selected Version** drop-down list.

### Update Cover Image

To update a dataset's cover image, click the **Change cover image** button. A window will appear that allows you to upload an image for the dataset. 

![](/img/community/datasets/dataset_16_1.png)

## Merge Datasets

You can merge datasets by transferring inputs and their annotations from a source dataset to a destination dataset. Note that this process does not remove the inputs from the source dataset; they remain intact while being duplicated to the destination.

Start by selecting the **Inputs** option in your app's collapsible left sidebar. You'll be redirected to the Inputs-Manager page, where the inputs in your app are displayed. 

Next, navigate to the **Datasets** section and select the dataset from which you want to transfer inputs. Once selected, all the available inputs in the dataset will be displayed on the page.

To choose the inputs for transfer, hover over each of them and click the small empty box in the upper-left corner to select them.

:::tip multi-select feature

- **Mouse click**: Selects a single item or input.
- **Shift + mouse click**: Selects a range of inputs between the first and last clicked item.

:::

Next, click the **Dataset...** button that appears at the bottom section of the page.

![](/img/community/datasets/dataset_18.png)

The small window that pops up allows you to add or remove inputs from the selected datasets.

![](/img/community/datasets/dataset_19.png)

Select the **Add** option, which lets you add inputs to the destination dataset (the option is selected by default). Then, select the destination dataset from the **Select Datasets** search field. 

:::tip

If you select the **Apply to all search results** button, all the inputs that are visually similar to the one(s) you've initially selected will also be added. This allows you to merge datasets easily and fast. 

:::

If you want to create a new destination dataset:

![](/img/community/datasets/dataset_20.png)

- Click the plus sign (**+**) next to the **Select Datasets** search field.
- Type the new dataset name in the search field. The new name you've typed will appear underneath the search field.
- Click the **Add new dataset** button to create the dataset. The new dataset will be successfully added to your app and selected as a destination.

Finally, click the **Add Inputs** button at the bottom of the pop-up window to complete adding the selected inputs to the destination dataset. 

Alternatively, you can remove inputs from a dataset by selecting the **Remove** option, selecting the desired dataset, and clicking the **Remove Inputs** button.

![](/img/community/datasets/dataset_21.png)

After merging the datasets, remember to [update the dataset version](#update-a-dataset-version) of your destination dataset to ensure the latest version reflects the newly added inputs and annotations.

## Delete Datasets

To delete a dataset, go to the individual page of the dataset and select the **Delete Dataset** option that drops down after clicking the ellipsis in the upper-right corner of the page.

:::caution

Please proceed with extreme caution, as deleted datasets cannot be recovered.

:::

![](/img/community/datasets/dataset_17.png)
