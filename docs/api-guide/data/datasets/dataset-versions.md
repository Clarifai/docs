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

## List Dataset Versions
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions?page=1&per_page=100' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Get a Dataset Versions
<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions/{{dataset_version_id}}' \
--header 'Authorization: Key {{YOUR API KEY}}' \
--header 'Content-Type: application/json'
```
</TabItem>
</Tabs>

## Change a Dataset Version
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

## Delete a Dataset Version
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