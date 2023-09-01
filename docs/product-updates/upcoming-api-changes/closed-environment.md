---
description: Learn about deprecation of `closed_environment`
# For positioning, we use negative position so that the oldest announcements are displayed at the bottom. Any time you add a new announcement, increase the position by -1.
sidebar_position: -4
---

# Deprecation of `closed_environment` in favor of `enrich_dataset`

**Learn about deprecation of `closed_environment`**
<hr />

## Date

January 26th, 2023

## Change

Deprecation of `closed_environment` in favor of `enrich_dataset` for creating embedding-classifier models 

## Details

When using the **PostModels** endpoint to create a custom embedding-classifier model, you could include the `closed_environment` variable, as part of the `modelVersion.OutputInfo.OutputConfig` struct. 

The variable accepted a Boolean value and specified whether a pre-stored dataset, of (usually) negative embeddings, should be added to the training process of your model. This generally leads to higher model accuracy without any additional effort on your end. 

- If `closed_environment` was set to `False`, which was the default action, we would try to use additional negative embeddings during the training process. _However, the default action would fail if the underlying base model did not have negative embeddings._ 

- If it was set to `True`, it meant that the user wanted a closed environment for the training and therefore we did not add additional negative embeddings. This worked for all embedding models.

We plan to replace it with `enrich_dataset` that is specified inside `modelVersion.TrainInfo.Params` when creating embedding-classifiers, which is the only type of model that supports it. 

The `enrich_dataset` variable will be implemented as an `ENUM` instead of a `BOOL` so that it can have two options: `Automatic` (default) and `Disabled`. 

- `Automatic` means that if there are negative embeddings for a base model, we will use them—and we won’t use them if they’re not available. _So, the training will not fail if the underlying embeddings do not have negative embeddings._

- `Disabled` means that we should not use the negative embeddings whether they are available or not. 

That way, `enrich_dataset` fixes the problem with `closed_environment`. Previously, setting the `closed_environment` variable to `False` (the default value) would fail if the base model didn’t have the negatives for it. 

This change will also affect the **PostModelVersions** endpoint. 