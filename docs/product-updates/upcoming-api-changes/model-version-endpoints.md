---
description: Learn about updates to model and model version endpoints
# For positioning, we use negative position so that the oldest announcements are displayed at the bottom. Any time you add a new announcement, increase the position by -1.
sidebar_position: -3
---

# Updates to Model and Model Version Endpoints

**Learn about updates to model and model version endpoints**
<hr />

## Date

January 20th, 2023

## Change

Critical updates to model and model version endpoints

## Details

#### Old Behavior

- Previously, using the **PostModels** endpoint to create a new model also created a placeholder version of the model with user-provided fields. And if the `model_type_id` of the model was trainable, then a new ModelVersion was created with UNTRAINED status by default. Otherwise, if the `model_type_id` was not trainable, then a new ModelVersion was created with TRAINED status.

- Modifying a model's config settings requires using the **PatchModels** endpoint. It's how you previously changed the info fields, descriptions, notes, metadata for both models and model versions. If you were only patching fields that are informational about the model, and not the model version, a model version was not created. If you were patching a trainable model where the latest model version was trained, and you were only changing the `output_info`, a new trained model version was created with the new info. Otherwise, if you were patching a trainable model where the latest model version had not been trained, the created model version was marked as untrained by default. If you were patching an untrainable model type, the new created model version was marked as trained.

- Previously, using the **PostModelVersions** endpoint automatically, by default, kicked off training the latest untrained model version—even though a user may not intend to train the latest version, which could unnecessarily incur training costs.

- Previously, using the **PatchModelVersions** endpoint only patched a model versions' visibility, metadata, license, or description—while maintaining the model version's status.

#### New Behavior

- **PostModels** will create new models but not create new model versions. This means trainable models that have not yet been trained will require the additional step of calling **PostModelVersions**—while providing the `*_info` fields in the model version—to effect training.

- **PostModelVersions** will allow users to give information specific to a model version. All the `*_info` fields—such as `output_info`, `input_info`, `train_info`, and `import_info`—will be migrated to the endpoint. This would minimize the confusion and difficulty of maintaining these endpoints. Users will be able patch model specific fields without worrying about model version fields being affected.

- **PatchModels** will allow users to patch only the model level fields, nothing in the model version. Unnecessary model versions will no longer be created. This allows users to easily track persisted versions.

- **PatchModelVersions** will be the new way to change most of the model version fields like gettable, metadata, license, description, notes, and `output_info` (not including concepts). 

- If users used `model.output_info.output_config` when inferencing, they will have to change that to `model.model_version.output_info.output_config`.