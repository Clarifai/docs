---
description: Manage your datasets
sidebar_position: 1
---

# Create, Get, Update, Delete

**Manage your datasets**
<hr />

The Clarifai portal allows you to create new datasets and carry out various management tasks on them. 

## Create Datasets

### Create a New Dataset

To create a new dataset, head to the individual page of your application. Then, select the **App Datasets** option on the collapsible left sidebar.

You'll be redirected to the **Datasets** manager page, where you can create new datasets and view already created ones. Click the **Create Dataset** button at the top-right corner of the page. 

![](/img/community/datasets/dataset_1.png)

On the **New Dataset** page, provide an ID and a short description of the dataset. Then, click the **Create** button. 

![](/img/community/datasets/dataset_2.png)

You'll be redirected to the created dataset's page, where you can accomplish various tasks, such as:

- Adding inputs to a dataset
- Getting labels
- Training a model

![](/img/community/datasets/dataset_3.png)

### Add Inputs

To add inputs to a dataset, click the **Add Inputs** button at the top-right corner of the individual page of the dataset. Then, upload them on the inputs uploader pop-up.

![](/img/community/datasets/dataset_4.png)

### Get Labels

To get labels, click the **Get Labels** button at the top-right corner of the individual page of the dataset. You'll be redirected to the **New Labeling Task** page, where you can create and assign [a new labeling task](https://docs.clarifai.com/portal-guide/annotate/tasks/create-a-task) to members of your team. 

![](/img/community/datasets/dataset_5.png)

### Train a Model

To train a model, click the **Train a Model** button at the top-right corner of the individual page of the dataset. You'll be redirected to the **Create new Model** page, where you can create [a new custom model](https://docs.clarifai.com/portal-guide/model/pcustom-model-walkthrough) for your use case. 

![](/img/community/datasets/dataset_6.png)

### Create a Dataset Version

A dataset can change over time because of various reasons, such as the addition of new inputs or the removal of inputs. With dataset versioning, you can assign a unique identifier to a specific version of a dataset. 

A dataset version can help you achieve many things, such as:

- Refer to a specific dataset version and recreate the same results. This can help you to have a clear reference to what data was used at a particular point in time.
- Ensure everyone in your team is working on the same dataset. This reduces confusion and errors, and leads to accurate results. 
- Track the changes you've made to a dataset over time. This can help you to determine whether you're improving the quality and quantity of your dataset. 

After adding inputs to a dataset, you can create a version that bookmarks the state of your data so that you can apply a specific version of the dataset for future iterations. 

To create a new dataset version, go to the individual page of the newly created dataset and click the **New version** button. 

![](/img/community/datasets/dataset_10.png)

Next, click the **Update status** button. 

![](/img/community/datasets/dataset_11.png)

The inputs and annotations in your dataset will be displayed under the **Overview** tab.

![](/img/community/datasets/dataset_12.png)

The versions of the datasets you've created will be displayed under the **Versions** tab. 

![](/img/community/datasets/dataset_13.png)

## Get Datasets

### Get a List of Datasets

To get a list of datasets, head to the individual page of your application. Then, select the **App Datasets** option on the collapsible left sidebar.

You'll be redirected to the **Datasets** manager page, where you can get the already created datasets in your application.

![](/img/community/datasets/dataset_7.png)

### Export a Dataset

You can also export the inputs in your dataset, alongside their annotations, to an external storage system. Start by selecting the format you want to use for exporting your dataset. To do so, click the gear icon at the extreme end of a dataset field. 

From the list that drops down, select your preferred export format. You can select any of the following data formats:

- Clarifai-Data-Protobuf, which is the default

- Clarifai-Data-JSON

- COCO

After selecting your preferred export format, click the **Generate** button. Once the export file has been processed, the **Generate** button will become a **Download** button, which you can click to download your dataset.

![](/img/community/datasets/dataset_8.png)

:::tip

The export feature only works after adding inputs to a dataset and creating and selecting a dataset version. 

:::

### Copy a Dataset ID

To copy a dataset ID to the clipboard, go to its individual page and click the copy button next to the dataset's ID.

![](/img/community/datasets/dataset_9.png)

## Update Datasets

### Update a Dataset Version

After making some changes to your dataset—such as adding or removing inputs, or adding or removing annotations—you may want to update your dataset version to reflect the changes. 

To update a dataset version, go to the individual page of the dataset and select the **Refresh Metrics** option that drops down after clicking the ellipsis at the top-right corner of the page. 

![](/img/community/datasets/dataset_14.png)

Next, click the **Update status** button. 

![](/img/community/datasets/dataset_15.png)

The updated inputs and annotations in your dataset will be displayed under the **Overview** tab.

![](/img/community/datasets/dataset_16.png)

You can also choose the dataset version you'd like to use from the **Selected Version** drop-down list. 

## Delete Datasets

To delete a dataset, go to the individual page of the dataset and select the **Delete Dataset** option that drops down after clicking the ellipsis at the top-right corner of the page.

:::caution

Please proceed with extreme caution, as deleted datasets cannot be recovered.

:::

![](/img/community/datasets/dataset_17.png)