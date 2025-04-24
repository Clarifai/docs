---
description: Use vector search to sort, rank, and retrieve images
sidebar_position: 3
toc_max_heading_level: 4
---

# Datasets Management

**Use vector search to sort, rank, and retrieve images**
<hr />

## **Via the UI**

### Get Datasets

#### List of Datasets

To get a list of datasets, go to the individual page of your application. Then, select the **Datasets** option in the collapsible left sidebar.

You'll be redirected to the **Datasets** manager page, where you can get the already created datasets in your application.

![](/img/community/datasets/dataset_7.png)

#### Export a Dataset

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


#### Dataset ID or Version ID

To copy a dataset ID to the clipboard, go to its individual page and click the copy button next to the dataset's ID.

To copy a dataset version ID to the clipboard, click the copy button next to the **Selected Version** search field.

![](/img/community/datasets/dataset_9.png)

### Update Datasets

#### Update a Dataset Version

After making some changes to your dataset — such as adding or removing inputs, or adding or removing annotations — you may want to update your dataset version to reflect the changes. 

To update a dataset version, go to the individual page of the dataset and select the **Refresh Metrics** option that drops down after clicking the ellipsis in the upper-right corner of the page. 

![](/img/community/datasets/dataset_14.png)

Finally, click the **Update status** button. 

![](/img/community/datasets/dataset_15.png)

The updated inputs and annotations in your dataset will be displayed in the **Overview** tab.

![](/img/community/datasets/dataset_16.png)

You can also choose the dataset version you'd like to use from the **Selected Version** drop-down list.

#### Update Cover Image

To update a dataset's cover image, click the **Change cover image** button. A window will appear that allows you to upload an image for the dataset. 

![](/img/community/datasets/dataset_16_1.png)

### Merge Datasets

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

### Delete Datasets

To delete a dataset, go to the individual page of the dataset and select the **Delete Dataset** option that drops down after clicking the ellipsis in the upper-right corner of the page.

:::caution

Please proceed with extreme caution, as deleted datasets cannot be recovered.

:::

![](/img/community/datasets/dataset_17.png)

## **Via the API**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePatchDataset from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/patch_dataset.py";
import CodeExport from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/export.py";
import CodeSDH from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/sdh.py";
import CodeDV from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/delete_version.py";
import CodeDVTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/deleteDatasetVersion.ts";
import CodeDelete from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/delete.py";
import CodeDeleteTS from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/deleteDataset.ts";
import MergeDataset from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/merge_dataset.py";
import ListDatasetInputs from "!!raw-loader!../../../code_snippets/python-sdk/managing-datasets/list_dataset_inputs.py";
import curlListDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/list_datasets.sh";
import curlGetDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/get_datasets.sh";
import curlUpdateDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/update_datasets.sh";
import curlUpdateDatasetsDefaultFilter from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/update_datasets_default_filter.sh";
import curlDeleteDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/delete_datasets.sh";
import curlListInputsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/list_inputs_datasets.sh";
import curlGetDatasetInputs from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/get_dataset_input.sh";
import curlDeleteInputs from "!!raw-loader!../../../code_snippets/api-guide/data/datasets/delete_inputs.sh";

### List Datasets

You can list the datasets in your app. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlListDatasets}</CodeBlock>
</TabItem>

</Tabs>

### Get a Dataset

You can retrieve the details of a specific dataset by providing its ID. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlGetDatasets}</CodeBlock>
</TabItem>

</Tabs>

### Get a Dataset Input

You can retrieve an input in a dataset by specifying its ID. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlGetDatasetInputs}</CodeBlock>
</TabItem>

</Tabs>


### List Dataset Inputs

You can list the inputs in a dataset by providing the dataset ID. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{ListDatasetInputs}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlListInputsDatasets}</CodeBlock>
</TabItem>
</Tabs>

### Export Dataset

You can download your datasets in a compressed ZIP file format for easy storage, sharing, or offline access.

:::info

The `clarifai-data-protobuf.zip` file can be downloaded from the [export dataset](#export-a-dataset) section on the platform UI. 

:::

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeExport}</CodeBlock>
</TabItem>
</Tabs>

### SDH Enabled Inputs Download

You can download inputs that have been enhanced or optimized using [Secure Data Hosting](https://docs.clarifai.com/product-updates/upcoming-api-changes/secure-data-hosting/#what-is-secure-data-hosting) (SDH) technology. 

This feature leverages the power of SDH to deliver a faster, more efficient download experience — offering performance and flexibility tailored to modern computing needs.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeSDH}</CodeBlock>
</TabItem>
</Tabs>


### Patch a Dataset 

You can apply patch operations to a dataset — merging, removing, or overwriting data. While all these actions support overwriting by default, they have specific behaviors when handling lists of objects. 

- The `merge` action replaces a `key:value`pair with `key:new_value`, or appends to an existing list. For dictionaries, it merges entries that share the same `id` field.
- The `remove` action is only used to delete the dataset's cover image on the platform UI.
- The `overwrite` action completely replaces an existing object with a new one.

Below is an example of patching a dataset to update its description, notes, and image URL. 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodePatchDataset}</CodeBlock>
</TabItem>
</Tabs>

Below is an example of updating dataset's description and metadata. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlUpdateDatasets}</CodeBlock>
</TabItem>

</Tabs>

Below is an example of updating a dataset with a default filter. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlUpdateDatasetsDefaultFilter}</CodeBlock>
</TabItem>

</Tabs>

### Merge Datasets

Here’s an example of merging a dataset with the ID `merge_dataset_id` into another dataset with the ID `dataset_id` using the `merge_dataset` feature from the `Dataset` class.

Note that all inputs from the source dataset (`merge_dataset_id`) will be added to the target dataset (`dataset_id`). 

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{MergeDataset}</CodeBlock>
</TabItem>
</Tabs>

### Delete Dataset Inputs

You can delete the inputs in a dataset by specifying their IDs. 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDeleteInputs}</CodeBlock>
</TabItem>

</Tabs>

### Delete Dataset Version

You can easily remove specific versions of your dataset. 

:::caution

Be certain that you want to delete a particular dataset version as the operation cannot be undone.

:::

                                         
<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDV}</CodeBlock>
  
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeDVTS}</CodeBlock>
</TabItem>
</Tabs>
                                                                                                              
### Delete Dataset

You can easily remove a dataset by specifying its ID. 


:::caution

Be certain that you want to delete a particular dataset as the operation cannot be undone.

:::

                                         
<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDelete}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeDeleteTS}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDeleteDatasets}</CodeBlock>
</TabItem>
</Tabs>



                                           
