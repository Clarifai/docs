---
description: Use filter and search functionality over your datasets
sidebar_position: 2
---

# Dataset Annotation Filters

**Use filter and search functionality over your datasets**
<hr />


The dataset annotation filters do not affect the inputs that belong to a dataset. Inputs are explicitly added or removed from datasets. Rather, they affect the annotations (for the inputs in the dataset) that are used whenever the dataset is converted into a dataset version and used for training or evaluation. 

We calculate the metrics for the dataset version whenever it is created (each time a dataset is used for training or evaluation). Therefore, if a user wants to train a model on the exact same set of inputs, but by using annotations created by person A vs. the ones created by person B, they would update the dataset annotation filter for the same dataset to create two different dataset versions (both containing the same inputs, but one with person A's annotations and the other with person B's). 

Comparing the performance of those two models is a common technique for assessing the quality of the two labelers' annotations. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import curlAddDatasetFilters from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/add_dataset_filters.sh";
import curlListDatasetFilters from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/list_dataset_filters.sh";
import curlGetDatasetFilter from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/get_dataset_filter.sh";
import curlChangeDatasetFilter from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/change_dataset_filter.sh";
import curlDeleteDatasetFilter from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/delete_dataset_filter.sh";

## Add Dataset Annotation Filters

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddDatasetFilters}</CodeBlock>
</TabItem>

</Tabs>

## List Dataset Annotation Filters

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlListDatasetFilters}</CodeBlock>
</TabItem>

</Tabs>

## Get a Dataset Annotation Filter

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlGetDatasetFilter}</CodeBlock>
</TabItem>

</Tabs>

## Change a Dataset Annotation Filter

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlChangeDatasetFilter}</CodeBlock>
</TabItem>

</Tabs>

## Delete a Dataset Annotation Filter

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDeleteDatasetFilter}</CodeBlock>
</TabItem>

</Tabs>
