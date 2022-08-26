---
description: Manage dataset versions so you can track the performance of and iterate on your datasets
sidebar_position: 4
---

# Dataset Versions

**Manage dataset versions so you can track the performance of your datasets and iterate over them**
<hr />

## Add a Dataset Version

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import curlAddDatasetVersion from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/add_dataset_version.sh";
import curlListDatasetVersions from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/list_dataset_versions.sh";
import curlGetDatasetVersions from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/get_dataset_versions.sh";
import curlChangeDatasetVersion from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/change_dataset_version.sh";
import curlDeleteDatasetVersion from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/delete_dataset_version.sh";

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlAddDatasetVersion}</CodeBlock>
</TabItem>

</Tabs>

## List Dataset Versions

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlListDatasetVersions}</CodeBlock>
</TabItem>

</Tabs>

## Get a Dataset Versions

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlGetDatasetVersions}</CodeBlock>
</TabItem>

</Tabs>

## Change a Dataset Version

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlChangeDatasetVersion}</CodeBlock>
</TabItem>

</Tabs>

## Delete a Dataset Version

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDeleteDatasetVersion}</CodeBlock>
</TabItem>

</Tabs>
