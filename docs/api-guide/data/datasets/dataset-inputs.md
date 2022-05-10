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

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request POST 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_inputs": [
        {
            "input": {
                "id": "{{input_id}}"
            }
        }
    ]
}'
```
</TabItem>
</Tabs>

## List Inputs in Datasets
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs?page=1&per_page=100' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Get a Dataset Inputs
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs/{{input_id}}' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Delete Inputs
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request DELETE 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "input_ids": ["{{input_id}}"]
}'
```
</TabItem>
</Tabs>