---
description: Seamlessly retrieve annotations from Clarifai into Databricks 
sidebar_position: 3
---
# Fetch Annotations

**Seamlessly retrieve annotations from Clarifai into Databricks**
<hr />

The Clarifai platform allows you to [annotate your inputs](https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete), enriching them with valuable labels and metadata.

You can effortlessly fetch annotations from a Clarifai application to Databricks. This integration is particularly valuable for machine learning workflows in Databricks, as it introduces annotated data from Clarifai into the platform. 

Annotated data enhances the quality of training data, a crucial factor in improving the accuracy and performance of machine learning models.

Let’s illustrate how you can seamlessly transfer annotations from Clarifai into the Databricks environment. 

## Prerequisites

- Databricks notebook development environment
- Get your PAT (Personal Access Token) from the Clarifai’s portal under the [Settings/Security](https://clarifai.com/settings/security) section
- Get your Clarifai user ID 
- Get the ID of the Clarifai app where you want to fetch the annotations from
- Get the ID of the dataset having the annotations within your app
- Install the [Clarifai PySpark](https://github.com/Clarifai/clarifai-pyspark) package by running `pip install clarifai-pyspark `
- Install Protocol Buffers by running `pip install protobuf==4.24.2 `. It’s a cross-platform, serialization protocol that describes the structure of the data to be sent 

:::info

You can learn how to authenticate with the Clarifai platform [here](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Databricks1 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_fetch_annotations_JSON.py";
import Databricks2 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_fetch_annotations_dataframe.py";
import Databricks3 from "!!raw-loader!../../../code_snippets/api-guide/integrations/databricks_fetch_annotations_dataframe_2.py";

## Retrieve Annotations in JSON Format

You can retrieve detailed information about the annotations in your Clarifai app’s dataset. You’ll get a JSON response containing comprehensive details about the annotations.

Optionally, you can specify a list of input IDs for which you want to fetch their annotations. 

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks1}</CodeBlock>
</TabItem>
</Tabs>

## Retrieve Annotations as a Dataframe

You can retrieve detailed information about your annotations in a structured dataframe format. The dataframe includes key columns like `annotation_id`, `annotation`, `annotation_user_id`, `input_id`, `annotation_created_at` and `annotation_modified_at`.

Note that the JSON response may include supplementary attributes, offering comprehensive insights beyond the specified columns in the dataframe.

Optionally, you can specify a list of input IDs for which you want to fetch their annotations.  

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks2}</CodeBlock>
</TabItem>
</Tabs>

### Retrieve Inputs With Annotations as a Dataframe

You can obtain inputs along with their corresponding annotations in a structured dataframe. This capability allows for the simultaneous retrieval of input details and their associated annotations. 

The resulting dataframe consolidates information seamlessly from both the annotations and inputs dataframes, as outlined in the previously mentioned functions.

<Tabs groupId="code">
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Databricks3}</CodeBlock>
</TabItem>
</Tabs>

:::info

You can get examples for integrating Clarifai with Databricks [here](https://github.com/Clarifai/clarifai-pyspark/tree/main/examples).

:::