---
description: Use filter and search functionality over your datasets
sidebar_position: 2
---

# Dataset Filters

**Use filter and search functionality over your datasets**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import curlAddDatasetFilters from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/add_dataset_filters.sh";
import curlListDatasetFilters from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/list_dataset_filters.sh";
import curlGetDatasetFilter from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/get_dataset_filter.sh";
import curlChangeDatasetFilter from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/change_dataset_filter.sh";
import curlDeleteDatasetFilter from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/delete_dataset_filter.sh";

## Add Dataset Filters

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddDatasetFilters}</CodeBlock>
</TabItem>

</Tabs>

## List Dataset Filters

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlListDatasetFilters}</CodeBlock>
</TabItem>

</Tabs>

## Get a Dataset Filter

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlGetDatasetFilter}</CodeBlock>
</TabItem>

</Tabs>

## Change a Dataset Filter

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlChangeDatasetFilter}</CodeBlock>
</TabItem>

</Tabs>

## Delete a Dataset Filter

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDeleteDatasetFilter}</CodeBlock>
</TabItem>

</Tabs>
