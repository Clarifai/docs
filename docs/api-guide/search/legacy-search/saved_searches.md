---
description: Save your searches
sidebar_position: 4
---

# Saved Searches

**Save your searches**
<hr />

With saved searches, you can capture your search results at any given point in time, and record the inputs, annotations, search parameters, and models that you are running through the platform. 

Saved searches help you to:

* Save a search so that you can return to those same results later;
* Share a search with a collaborator in your app;
* Carve out data that you want to evaluate your models on as a "golden set";
* Split your data into training sets and test tests.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CurlCreateSavedSeach from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/curl/create_saved_search.sh";
import CurlListSavedSearches from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/curl/list_saved_searches.sh";
import CurlSearchBySeachId from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/curl/search_by_search_id.sh";

## Create a Saved Search

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateSavedSeach}</CodeBlock>
</TabItem>

</Tabs>

## List Saved Searches in an App

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListSavedSearches}</CodeBlock>
</TabItem>

</Tabs>

## Search by Search ID

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchBySeachId}</CodeBlock>
</TabItem>

</Tabs>

:::important note

Saved searches are extremely helpful when testing out multiple versions of a model, or collaborating with a team. Just save your search, and refer to it at any time.

:::