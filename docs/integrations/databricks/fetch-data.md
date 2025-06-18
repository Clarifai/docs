---
description: Seamlessly retrieve your data from Clarifai into Databricks 
sidebar_position: 2
---
# Fetch Data

**Seamlessly retrieve your data from Clarifai into Databricks**
<hr />

You may use Clarifai for tasks like image recognition and analysis. Then, you may want to bring the results or the processed data into Databricks for more in-depth exploration, analysis, or integration with other data sources. 

Let’s illustrate how you can effortlessly transfer data from Clarifai into the Databricks environment. 

## Prerequisites

- Databricks notebook development environment
- Get your PAT (Personal Access Token) from the Clarifai’s portal under the [Settings/Security](https://clarifai.com/settings/security) section
- Get your Clarifai user ID 
- Get the ID of the Clarifai app where you want to fetch the data from
- Get the ID of the dataset having the data within your app
- Install the [Clarifai PySpark](https://github.com/Clarifai/clarifai-pyspark) package by running `pip install clarifai-pyspark `
- Install Protocol Buffers by running `pip install protobuf==4.24.2 `. It’s a cross-platform, serialization protocol that describes the structure of the data to be sent 

:::info

You can learn how to authenticate with the Clarifai platform [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Databricks1 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_fetch_data_JSON.py";
import Databricks2 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_fetch_data_dataframe.py";
import Databricks3 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_fetch_data_volume.py";

## Retrieve Data Files in JSON Format

You can retrieve detailed information about the input data in your Clarifai app’s dataset. You’ll get a JSON response containing comprehensive details about the dataset files. 

Ensure you use the `input_type` parameter for targeted retrieval based on the data file types. You can specify the desired type, such as "image", "video", "audio", or "text", to obtain specific details relevant to that file type. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks1}</CodeBlock>
</TabItem>
</Tabs>

## Retrieve Data Files as a Dataframe

You can retrieve detailed information about your data files in a structured dataframe format. The dataframe includes key columns like `input_id`, `image_url/text_url`, `image_info/text_info`, `input_created_at`, and `input_modified_at`.

Ensure to specify the `input_type` parameter to tailor the results to a specific type, such as "image", or "text". 

Note that the JSON response may include additional attributes, offering comprehensive insights beyond the specified columns in the dataframe. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks2}</CodeBlock>
</TabItem>
</Tabs>

## Retrieve Data Files to Databricks Volume

You can effortlessly download image and text files from your Clarifai app’s dataset to your Databricks volume. 

You need to specify the path where the retrieved data will be stored in the volume and utilize the response obtained from the `list_inputs()` function as the parameter. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks3}</CodeBlock>
</TabItem>
</Tabs>

:::info

You can get examples for integrating Clarifai with Databricks [here](https://github.com/Clarifai/clarifai-pyspark/tree/main/examples).

:::