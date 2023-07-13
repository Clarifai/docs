---
description: Learn about changes to the workflow builder model IDs
# For positioning, we use negative position so that the oldest announcements are displayed at the bottom. Any time you add a new announcement, increase the position by -1.
sidebar_position: -6
---

# Changes to Workflow Builder Model IDs

**Learn about changes to the workflow builder model IDs**
<hr />

**Change**: Fixed an issue where the workflow builder inconsistently returned an old hash-based ID, instead of a new, user-friendly V2 ID of models

**Fix Release Date**: July 27th, 2023 

**Who is affected**:  Portal and API users who need to match the model IDs returned from workflows

**Type of change**: Critical, breaking change

**What you need to do**: [See below](#what-you-need-to-do).

## Issue

If you pick a model when creating a workflow on the Portal, you will see the ID of the model you’ve selected. This is the V2 ID, which is a human-readable, user-friendly version of the ID of the model. 

For example, the V2 ID of the following visual classification model is `apparel-classification-v2`.

![apparel classification model id](/img/others/workflow-builder-1.png)

However, if you save the workflow and access the model again, you will notice that the ID of the model has changed to an old version, which we had migrated from. That ID is a hash value that may not be user-friendly.

![apparel classification model hash id](/img/others/workflow-builder-2.png)

And if you use the [ListWorkflows]( https://docs.clarifai.com/api-guide/workflows/create-get-update-delete#get-all-workflows-in-an-app) API method to get all the custom workflows in your app, you notice that the backend returns the old hash-based ID of the model. 

![get custom workflows app](/img/others/workflow-builder-3.png)

## Fix

To fix the inconsistency, all workflow graphs will start returning the new V2 ID of models, instead of the old hash-based ID. 

## What you need to do

- If you’re an API user who depends on programmatically matching the model IDs returned from workflows, you need to ensure that you correctly reference the V2 ID of your models in your code.

- If you’re a Portal user who checks the results of your workflow graphs by matching the model IDs, you need to ensure that you correctly check the V2 ID of your models.

