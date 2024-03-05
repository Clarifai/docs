---
description: Seamlessly upload your data from Databricks into Clarifai
sidebar_position: 1
---
# Upload Data

**Seamlessly upload your data from Databricks into Clarifai**
<hr />

You can ingest datasets from Databricks into your Clarifai environment. This allows you to easily take advantage of Clarifai's AI capabilities to analyze and extract insights from your data, without having to manually move it between the two platforms. 

Once your data has been uploaded to Clarifai, you can leverage Clarifai’s AI capabilities to get the most out of your data. For example, you can use Clarifai to identify and classify [objects and scenes](https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete/) in images. 

Let’s illustrate how you can seamlessly transfer data from a Databricks [volume](https://docs.databricks.com/en/sql/language-manual/sql-ref-volumes.html) to Clarifai.

## Prerequisites

- Databricks notebook development environment. Also, ensure your Databricks workspace is enabled to work with [Unity Catalog](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html)
- Get the path URL of the Databricks location having your data 
- Get your PAT (Personal Access Token) from the Clarifai’s portal under the [Settings/Security](https://clarifai.com/settings/security) section
- Get your Clarifai user ID 
- Get the ID of the Clarifai app where you want to upload the data
- Get the ID of a dataset within your app
- Install the [Clarifai PySpark](https://github.com/Clarifai/clarifai-pyspark) package by running `pip install clarifai-pyspark `
- Install Protocol Buffers by running `pip install protobuf==4.24.2 `. It’s a cross-platform, serialization protocol that describes the structure of the data to be sent 

:::info

You can learn how to authenticate with the Clarifai platform [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Databricks1 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_upload_from_volume_folder.py";
import Databricks2 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_upload_from_csv.py";
import Databricks3 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_upload_from_delta_table.py";
import Databricks4 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_upload_from_dataframe.py";
import Databricks5 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_upload_with_dataloader.py";

## Upload Data From a Volume Folder

You can upload images or text files stored in a Databricks volume to your Clarifai application. It’s important to ensure that the folder exclusively contains either images or text files. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks1}</CodeBlock>
</TabItem>
</Tabs>

## Upload Data From CSV 

You can upload data from a CSV file stored in a Databricks volume to your Clarifai application. The CSV file must include two essential columns: `inputid` and `input`. 

You can also include additional supported columns such as `concepts`, `metadata`, and `geopoints`. The `input` column within the CSV is a versatile field, capable of accommodating either a file URL or path, or it can contain raw text. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks2}</CodeBlock>
</TabItem>
</Tabs>

## Upload From Delta Table

You can upload data from a delta table in a Databricks volume to your Clarifai application. The table must include two essential columns: `inputid` and `input`. 

You can also include additional supported columns such as `concepts`, `metadata`, and `geopoints`. The `input` column within the table is a versatile field, capable of accommodating either a file URL or path, or it can contain raw text. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks3}</CodeBlock>
</TabItem>
</Tabs>

## Upload From Dataframe

You can upload data from a PySpark dataframe in a Databricks volume to your Clarifai application. The dataframe must include two essential columns: `inputid` and `input`.

You can also include additional supported columns such as `concepts`, `metadata`, and `geopoints`. The `input` column within the table is a versatile field, capable of accommodating either a file URL or path, or it can contain raw text. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks4}</CodeBlock>
</TabItem>
</Tabs>

## Upload With Custom Dataloader

You can utilize the custom data loader option if your dataset is stored in an alternative format or necessitates preprocessing. This grants you the flexibility to provide a specialized data loader tailored to your specific requirements.

For reference, you can explore a variety of data loader examples [here](https://github.com/Clarifai/examples/tree/main/datasets/upload). 

Ensure that the necessary files and folders for the dataloader are stored in Databricks volume storage to facilitate seamless integration and accessibility.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks5}</CodeBlock>
</TabItem>
</Tabs>

:::info

You can get examples for integrating Clarifai with Databricks [here](https://github.com/Clarifai/clarifai-pyspark/tree/main/examples).

:::