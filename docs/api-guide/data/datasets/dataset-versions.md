---
description: Manage dataset versions so you can track the performance of and iterate on your datasets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dataset Versions

## Add a dataset version
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request POST 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_versions": [
        {
            "id": "dataset-version-1633032673",
            "name": "foo",
            "dataset_filter": {
                "id": "{{dataset_filter_id}}"
            }
        }
    ]
}'
```
</TabItem>
</Tabs>

## List dataset versions
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions?page=1&per_page=100' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Get a dataset versions
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions/{{dataset_version_id}}' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Change a dataset version
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request PATCH 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_versions": [
        {
            "id": "{{dataset_version_id}}",
            "name": "dataset version updated name"
        }
    ],
    "action": "overwrite"
}'
```
</TabItem>
</Tabs>

## Delete a dataset version
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request DELETE 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataset_version_ids": ["{{dataset_version_id}}"]
}'
```
</TabItem>
</Tabs>
