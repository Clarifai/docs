---
description: 'Search helps you sort, save, organize and filter your datasets.'
sidebar_position: 1
---

# Search Overview

**Search helps you sort, save, organize, and filter your datasets**
<hr />

You can upload inputs to our platform as URLs or bytes. When you `POST /inputs`, your [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) is used to index the inputs, and this index enables search over the outputs of the models in your workflow. Once indexed, you can search for the inputs by concept, annotation, or any other advanced search parameters. 

## Rank

Your model can identify concepts in your data and rank your search results by how confident it is that a given concept is present. You can even rank search results by how similar one input is to another input.

## Filter

Trim down the amount of data returned in search. For example, you may only want to see inputs that one of your collaborators has labeled with the word “dog”. Or, perhaps you want only those inputs that were captured in a certain geographical region.

## 'AND'

Combine multiple search parameters. For example, you can find all the inputs within a geographical region with a "weapon" in them, or all annotations assigned to user "Joe", or visually similar product images that are assigned the word "XL" in metadata.

![Image illustrating how to search by images using Clarifai&apos;s concepts](/img/illustration-search.png)

