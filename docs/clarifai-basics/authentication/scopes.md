---
description: Implement fine-grained control over the data that users have access to
sidebar_position: 4
---

# Scopes

**Improve your apps' security**
<hr />

Scopes provide control over the set of functionality and features available when using our API. Modifying scopes allows for fine-grained control over the data that users have access to, and can help keep your app secure from unauthorized intrusions.

You can control scopes for your apps at three different levels:

- **[App-Specific API Keys](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys)** — Control access to resources used by a specific app and a specific user.

- **[Personal Access Tokens (PATs)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens)** — Control access to resources available to a specific user.

- **[Collaboration](https://docs.clarifai.com/clarifai-basics/applications/collaboration)** — Control access to resources available to collaborators.

## Combining Scopes

A variety of use cases can be addressed by selecting different combinations of scopes.

For example, you might want to create an app that only has access to the Search endpoint, but for search to work properly, it needs to access Predict at the operation level. This lets you perform advanced visual searches like searching by an image crop, which first needs to be understood with the prediction before search is performed.

By giving the combination of predict op-level, but only search endpoint, you can create an app that can perform searches, but not model predictions \(like [PostModelOutputs](https://docs.clarifai.com/api-guide/predict/images)\).

Since collaborators need to create an API key to access the app they are invited to \(or use a PAT\), the scopes that are attached to the collaborators invited to an app will be intersected with the scopes attached to the API key or PAT. 

Therefore, the permissions allowed when making requests will be the minimum set of scopes from that intersection. This ensures that the app owner remains in full control of the permissions they want their collaborators to have.

## Operations and Endpoints Scopes

You have control over both operation and endpoint level scopes.

:::tip

You can check an up-to-date list of the scopes available in your plan when creating or editing an API key or a PAT. 

:::

- **Operation level scopes** — These provide control over the ability to read, write, or delete a given resource type. Examples include `Annotations:Add (Write Annotations)`, `Concepts:Get (Read Concepts)`, and `Models:Delete (Delete Models)`. 
- **Endpoint level scopes** — These give you control over access to specific endpoints. Examples include `/clarifai.api.V2/GetConcept`, `/clarifai.api.V2/DeleteInputs`, and `/clarifai.api.V2/PostModelOutputs`. 


### Annotation: Add and Remove Annotations on Inputs

- Annotations:Add

- Annotations:Get

- Annotations:Delete

- /clarifai.api.V2/DeleteAnnotation

- /clarifai.api.V2/DeleteAnnotations

- /clarifai.api.V2/GetAnnotation

- /clarifai.api.V2/ListAnnotations

- /clarifai.api.V2/PatchAnnotations

- /clarifai.api.V2/PatchAnnotationsStatus

- /clarifai.api.V2/PostAnnotations


### Collaborator: Add, Remove and Patch Collaborators

- Collaborators:Add

- Collaborators:Get

- Collaborators:Delete

- /clarifai.api.V2/DeleteCollaborators

- /clarifai.api.V2/ListCollaborators

- /clarifai.api.V2/PatchCollaborators

- /clarifai.api.V2/PostCollaborators


### Collector: Add, Remove and Patch Input Collectors

- Collectors:Add

- Collectors:Get

- Collectors:Delete

- /clarifai.api.V2/DeleteCollectors

- /clarifai.api.V2/GetCollector

- /clarifai.api.V2/ListCollectors

- /clarifai.api.V2/PatchCollectors

- /clarifai.api.V2/PostCollectors


### Concept: Add, Remove and Patch Concept

- Concepts:Add

- Concepts:Get

- Concepts:Delete

- /clarifai.api.V2/GetConcept

- /clarifai.api.V2/GetConceptCounts

- /clarifai.api.V2/GetConceptLanguage

- /clarifai.api.V2/ListConceptLanguages

- /clarifai.api.V2/ListConceptReferences

- /clarifai.api.V2/ListConcepts

- /clarifai.api.V2/PatchConceptLanguages

- /clarifai.api.V2/PatchConcepts

- /clarifai.api.V2/PostConceptLanguages

- /clarifai.api.V2/PostConcepts

- /clarifai.api.V2/PostConceptsSearches


### Input: Add and Remove Inputs to an App

- Inputs:Add

- Inputs:Get

- Inputs:Delete

- /clarifai.api.V2/DeleteInput

- /clarifai.api.V2/DeleteInputs

- /clarifai.api.V2/GetInput

- /clarifai.api.V2/GetInputCount

- /clarifai.api.V2/ListInputs

- /clarifai.api.V2/ListModelInputs

- /clarifai.api.V2/PatchInputs

- /clarifai.api.V2/PostInputs

- /clarifai.api.V2/PostInputsFile


### Model: Add, Remove and Train Custom Models

- Models:Add

- Models:Get

- Models:Delete

- Models:Train

- /clarifai.api.V2/DeleteModel

- /clarifai.api.V2/DeleteModelVersion

- /clarifai.api.V2/DeleteModels

- /clarifai.api.V2/GetModel

- /clarifai.api.V2/GetModelOutputInfo

- /clarifai.api.V2/GetModelVersion

- /clarifai.api.V2/GetModelVersionMetrics

- /clarifai.api.V2/ListModelVersions

- /clarifai.api.V2/ListModels

- /clarifai.api.V2/PatchModelVersions

- /clarifai.api.V2/PatchModels

- /clarifai.api.V2/PostModelVersionMetrics

- /clarifai.api.V2/PostModelVersions

- /clarifai.api.V2/PostModels

- /clarifai.api.V2/PostModelsSearches


### Predict: Predict on Public and Custom Models

- Predict

- /clarifai.api.V2/PostModelOutputs

- /clarifai.api.V2/PostWorkflowResults


### Search: Search over Inputs an App

- Search

- /clarifai.api.V2/DeleteSearch

- /clarifai.api.V2/GetSearch

- /clarifai.api.V2/ListSearches

- /clarifai.api.V2/PatchSearches

- /clarifai.api.V2/PostSearches

- /clarifai.api.V2/PostSearchesByID


### Task: Add, Remove and Patch Scribe labeling Tasks

- Tasks:Add

- Tasks:Get

- Tasks:Delete

- /clarifai.api.V2/DeleteTasks

- /clarifai.api.V2/GetTask

- /clarifai.api.V2/ListTasks

- /clarifai.api.V2/PatchTasks

- /clarifai.api.V2/PostTasks


### Vocab: Add, Remove and Delete lists of Concepts

- /clarifai.api.V2/DeleteVocab

- /clarifai.api.V2/DeleteVocabConcept

- /clarifai.api.V2/DeleteVocabConcepts

- /clarifai.api.V2/DeleteVocabs

- /clarifai.api.V2/GetVocab

- /clarifai.api.V2/ListVocabConcepts

- /clarifai.api.V2/ListVocabs

- /clarifai.api.V2/PatchVocabs

- /clarifai.api.V2/PostVocabConcepts

- /clarifai.api.V2/PostVocabs


### Workflow: Add, Remove and Delete Workflows of Models

- Workflows:Add

- Workflows:Get

- Workflows:Delete

- /clarifai.api.V2/DeleteWorkflow

- /clarifai.api.V2/DeleteWorkflows

- /clarifai.api.V2/GetWorkflow

- /clarifai.api.V2/ListWorkflows

- /clarifai.api.V2/PatchWorkflows

- /clarifai.api.V2/PostWorkflows


