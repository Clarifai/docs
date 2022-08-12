---
description: Create, explore and modify datasets
sidebar_position: 1
---

# Dataset Basics

**Create, explore, and modify datasets**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import curlCreateDataset from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/create_dataset.sh";
import curlListDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/list_datasets.sh";
import curlGetDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/get_datasets.sh";
import curlUpdateDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/update_datasets.sh";
import curlUpdateDatasetsDefaultFilter from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/update_datasets_default_filter.sh";
import curlDeleteDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/delete_datasets.sh";
import curlAddInputsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/add_inputs_datasets.sh";

## Create a Dataset

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlCreateDataset}</CodeBlock>
</TabItem>

</Tabs>

## List Datasets

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlListDatasets}</CodeBlock>
</TabItem>

</Tabs>

## Get Datasets

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlGetDatasets}</CodeBlock>
</TabItem>

</Tabs>

## Update Datasets

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlUpdateDatasets}</CodeBlock>
</TabItem>

</Tabs>

## Update Datasets With Default Filter

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlUpdateDatasetsDefaultFilter}</CodeBlock>
</TabItem>

</Tabs>

## Delete Datasets

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDeleteDatasets}</CodeBlock>
</TabItem>

</Tabs>

## Add Inputs to Datasets

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddInputsDatasets}</CodeBlock>
</TabItem>

</Tabs>