---
description: Create, explore and modify datasets
sidebar_position: 3
---

# Dataset Inputs

**Create, explore, and modify datasets**
<hr />

## Add Inputs to a Dataset

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import curlAddInputsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/add_inputs_datasets_2.sh";
import curlListInputsDatasets from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/list_inputs_datasets.sh";
import curlGetDatasetInputs from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/get_dataset_input.sh";
import curlDeleteInputs from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/delete_inputs.sh";

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddInputsDatasets}</CodeBlock>
</TabItem>

</Tabs>

## List Inputs in Datasets

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlListInputsDatasets}</CodeBlock>
</TabItem>

</Tabs>

## Get a Dataset Input

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlGetDatasetInputs}</CodeBlock>
</TabItem>

</Tabs>

## Delete Inputs

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDeleteInputs}</CodeBlock>
</TabItem>

</Tabs>
