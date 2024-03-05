---
description: Perform searches within your datasets
sidebar_position: 5
---

# Dataset Searches

**Perform searches within your datasets**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import curlDatasetSearches from "!!raw-loader!../../../../code_snippets/api-guide/data/datasets/dataset_searches.sh";

## Find Duplicate Images

Here's how you could use the `PostInputsSearches` endpoint to identify near-duplicate images within a given dataset. 

You can also use the  `min_value` threshold parameter to refine the results, ensuring that only images surpassing a specified minimum probability resemblance score are included in the output. . 

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{curlDatasetSearches}</CodeBlock>
</TabItem>

</Tabs>

