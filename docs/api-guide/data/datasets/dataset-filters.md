---
description: Use filter and search functionality over your datasets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dataset Filters

## Add dataset filters
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request POST 'api.clarifai.com/v2/datasets/{{dataset_id}}/filters' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_filters": [
        {
            "id": "dataset-filter-1633032596",
            "name": "foo",
            "saved_search": {
                "id": "{{search_id}}"
            }
        }
    ]
}'
```
</TabItem>
</Tabs>

## List dataset Filters
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/filters?page=1&per_page=100' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Get a dataset filter
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/filters/{{dataset_filter_id}}' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Change a dataset filter

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request PATCH 'api.clarifai.com/v2/datasets/{{dataset_id}}/filters' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_filters": [
        {
            "id": "{{dataset_filter_id}}",
            "name": "foo bar",
            "saved_search_id": "{{search_id}}"
        }
    ],
    "action": "overwrite"
}'
```
</TabItem>
</Tabs>

## Delete a dataset filter
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request DELETE 'api.clarifai.com/v2/datasets/{{dataset_id}}/filters' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_filter_ids": ["{{dataset_filter_id}}"]
}'
```
</TabItem>
</Tabs>
