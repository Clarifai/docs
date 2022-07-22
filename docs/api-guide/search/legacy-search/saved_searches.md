---
description: Save your searches
sidebar_position: 4
---

# Saved Searches

**Save your searches**
<hr />

With saved searches, you can capture your search results at any given point in time, and record the inputs, annotations, search parameters, and models that you are running through the platform. 

Saved searches help you to:

* Save a search so that you can return to those same results later
* Share a search with a collaborator in your app
* Carve out data that you want to evaluate your models on as a "golden set"
* Split your data into training sets and test tests

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create a Saved Search

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request POST 'https://api.clarifai.com/v2/searches/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Key {{key}}' \
--data-raw '{
    "searches": [{
        "query": {
            "ands": [{
                "annotation":{
                    "annotation_info": {
                        "asset_set": ["set1", "set2"]
                    }
                }
            }]
        },
        "save": true,
        "id": "dataset-1589318146",
        "name": "Dataset #1589318146"
    }]
}
'
```
</TabItem>
</Tabs>

## List Saved Searches in an App

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request GET 'https://api.clarifai.com/v2/searches/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Key {{key}}'
```
</TabItem>
</Tabs>

## Search by Search ID

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl --location --request POST 'https://api.clarifai.com/v2/searches/{{search_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Key {{key}}' \
--data-raw '{
  "pagination": {
    "page": 1,
    "per_page": 5
  }
}'
```
</TabItem>
</Tabs>

Saved searches are extremely helpful when testing out multiple versions of a model, or collaborating with a team. Just save your search, and refer to it at any time.
