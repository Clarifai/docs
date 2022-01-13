---
description: Create, explore and modify datasets
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dataset Inputs


## Add inputs to a dataset
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

## List inputs in a datasets
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs?page=1&per_page=100' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Get a dataset inputs
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
