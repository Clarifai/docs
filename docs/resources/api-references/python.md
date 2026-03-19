---
description: Clarifai Python SDK API Reference
sidebar_position: 2
toc_max_heading_level: 4
---

# Python API Reference

**Clarifai Python SDK API Reference**
<hr />

This is the API Reference documentation extracted from the [source code](https://github.com/Clarifai/clarifai-python/tree/master/clarifai/client).

## [App](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/app.py)

```python
class App(url=None, app_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

App is a class that provides access to Clarifai API endpoints related to App information.

**Parameters:**
- `url` (*str*) - The URL to initialize the app object
- `app_id` (*str*) - The App ID for the App to interact with
- `user_id` (*str*) - The user ID of the owner
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file
- `**kwargs` - Additional keyword arguments:
  - `name` (*str*) - The name of the app
  - `description` (*str*) - The description of the app

### App.create_concepts

```python
App.create_concepts(concept_ids, concepts=[])
```

Add concepts to the app.

**Parameters:**
- `concept_ids` (*List[str]*) - List of concept IDs to add
- `concepts` (*List[str]*) - Optional list of concept names

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.create_concepts(concept_ids=["concept_id_1", "concept_id_2"])
```

### App.create_concept_relations

```python
App.create_concept_relations(subject_concept_id, object_concept_ids, predicates)
```

Creates concept relations between concepts of the app.

**Parameters:**
- `subject_concept_id` (*str*) - The concept ID of the subject concept
- `object_concept_ids` (*List[str]*) - List of concept IDs of object concepts
- `predicates` (*List[str]*) - List of predicates corresponding to each relation

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.create_concept_relations(
    subject_concept_id="subject_concept_id",
    object_concept_ids=["object_concept_id_1", "object_concept_id_2"],
    predicates=["hypernym", "synonym"]
)
```

### App.create_dataset

```python
App.create_dataset(dataset_id, **kwargs)
```

Creates a dataset for the app.

**Parameters:**
- `dataset_id` (*str*) - The dataset ID for the dataset to create
- `**kwargs` - Additional keyword arguments passed to the Dataset

**Returns:** `Dataset` - A Dataset object for the specified dataset ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
dataset = app.create_dataset(dataset_id="dataset_id")
```

### App.create_model

```python
App.create_model(model_id, **kwargs)
```

Creates a model for the app.

**Parameters:**
- `model_id` (*str*) - The model ID for the model to create
- `**kwargs` - Additional keyword arguments passed to the Model

**Returns:** `Model` - A Model object for the specified model ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
model = app.create_model(model_id="model_id")
```

### App.create_workflow

```python
App.create_workflow(config_filepath, generate_new_id=False, display=True)
```

Creates a workflow for the app from a YAML config file.

**Parameters:**
- `config_filepath` (*str*) - The path to the yaml workflow config file
- `generate_new_id` (*bool*) - If True, generate a new workflow ID. Default False
- `display` (*bool*) - If True, display the workflow nodes tree. Default True

**Returns:** `Workflow` - A Workflow object for the specified workflow config

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
workflow = app.create_workflow(config_filepath="config.yml")
```

### App.dataset

```python
App.dataset(dataset_id, dataset_version_id=None, **kwargs)
```

Returns a Dataset object for the existing dataset ID.

**Parameters:**
- `dataset_id` (*str*) - The dataset ID for the dataset to interact with
- `dataset_version_id` (*str*) - The version ID for the dataset version to interact with

**Returns:** `Dataset` - A Dataset object for the existing dataset ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
dataset = app.dataset(dataset_id="dataset_id")
```

### App.delete_concept_relations

```python
App.delete_concept_relations(concept_id, concept_relation_ids=[])
```

Delete concept relations of a concept of the app.

**Parameters:**
- `concept_id` (*str*) - The concept ID of the concept to delete relations for
- `concept_relation_ids` (*List[str]*) - Optional list of concept relation IDs to delete

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_concept_relations(concept_id="concept_id", concept_relation_ids=["id_1", "id_2"])
```

### App.delete_dataset

```python
App.delete_dataset(dataset_id)
```

Deletes a dataset for the user.

**Parameters:**
- `dataset_id` (*str*) - The dataset ID for the app to delete

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_dataset(dataset_id="dataset_id")
```

### App.delete_model

```python
App.delete_model(model_id)
```

Deletes a model for the user.

**Parameters:**
- `model_id` (*str*) - The model ID for the app to delete

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_model(model_id="model_id")
```

### App.delete_workflow

```python
App.delete_workflow(workflow_id)
```

Deletes a workflow for the user.

**Parameters:**
- `workflow_id` (*str*) - The workflow ID for the app to delete

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_workflow(workflow_id="workflow_id")
```

### App.get_input_count

```python
App.get_input_count()
```

Get count of all the inputs in the app.

**Returns:** `int` - Count of inputs in the app

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
input_count = app.get_input_count()
```

### App.inputs

```python
App.inputs()
```

Returns an Inputs object for the app.

**Returns:** `Inputs` - An Inputs object

### App.list_concepts

```python
App.list_concepts(page_no=None, per_page=None)
```

Lists all the concepts for the app.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Concept` - Concept objects in the app

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_concepts = list(app.list_concepts())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### App.list_datasets

```python
App.list_datasets(page_no=None, per_page=None)
```

Lists all the datasets for the app.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Dataset` - Dataset objects for the datasets in the app

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_datasets = list(app.list_datasets())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### App.list_models

```python
App.list_models(filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists all the available models for the user.

**Parameters:**
- `filter_by` (*dict*) - A dictionary of filters to apply to the list of models
- `only_in_app` (*bool*) - If True, only return models that are in the app. Default True
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Model` - Model objects for the models in the app

**Example:**
```python
from clarifai.client.user import User
app = User(user_id="user_id").app(app_id="app_id")
all_models = list(app.list_models())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### App.list_pipeline_steps

```python
App.list_pipeline_steps(pipeline_id=None, filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists all the pipeline steps for the user.

**Parameters:**
- `pipeline_id` (*str*) - If provided, only list pipeline steps from this pipeline
- `filter_by` (*dict*) - A dictionary of filters to apply to the list
- `only_in_app` (*bool*) - If True, only return pipeline steps that are in the app. Default True
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `PipelineStep` - PipelineStep objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_pipeline_steps = list(app.list_pipeline_steps())
```

### App.list_pipelines

```python
App.list_pipelines(filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists all the pipelines for the user.

**Parameters:**
- `filter_by` (*dict*) - A dictionary of filters to apply to the list of pipelines
- `only_in_app` (*bool*) - If True, only return pipelines that are in the app. Default True
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Pipeline` - Pipeline objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_pipelines = list(app.list_pipelines())
```

### App.list_trainable_model_types

```python
App.list_trainable_model_types()
```

Lists all the trainable model types.

**Returns:** `List[str]` - List of all trainable model types

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
print(app.list_trainable_model_types())
```

### App.list_workflows

```python
App.list_workflows(filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists all the available workflows for the user.

**Parameters:**
- `filter_by` (*dict*) - A dictionary of filters to apply to the list of workflows
- `only_in_app` (*bool*) - If True, only return workflows that are in the app. Default True
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Workflow` - Workflow objects for the workflows in the app

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_workflows = list(app.list_workflows())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### App.model

```python
App.model(model_id, model_version={'id': ""}, **kwargs)
```

Returns a Model object for the existing model ID.

**Parameters:**
- `model_id` (*str*) - The model ID for the model to interact with
- `model_version` (*Dict*) - The model version ID for the model version to interact with

**Returns:** `Model` - A Model object for the existing model ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
model_v1 = app.model(model_id="model_id", model_version={"id": "model_version_id"})
```

### App.patch_dataset

```python
App.patch_dataset(dataset_id, action='merge', **kwargs)
```

Patches a dataset for the app.

**Parameters:**
- `dataset_id` (*str*) - The dataset ID for the dataset to patch
- `action` (*str*) - The action to perform: merge/overwrite/remove. Default 'merge'
- `**kwargs` - Additional keyword arguments to patch the Dataset

**Returns:** `Dataset` - A Dataset object for the specified dataset ID

### App.patch_model

```python
App.patch_model(model_id, action='merge', **kwargs)
```

Patches a model of the app.

**Parameters:**
- `model_id` (*str*) - The model ID of the model to patch
- `action` (*str*) - The action to perform: merge/overwrite/remove. Default 'merge'
- `**kwargs` - Additional keyword arguments to patch the Model

**Returns:** `Model` - A Model object of the specified model ID

### App.patch_workflow

```python
App.patch_workflow(workflow_id, action='merge', config_filepath=None, **kwargs)
```

Patches a workflow of the app.

**Parameters:**
- `workflow_id` (*str*) - The Workflow ID of the workflow to patch
- `action` (*str*) - The action to perform: merge/overwrite/remove. Default 'merge'
- `config_filepath` (*str*) - The path to the yaml workflow config file
- `**kwargs` - Additional keyword arguments to patch the Workflow

**Returns:** `Workflow` - A Workflow object of the specified workflow ID

### App.search

```python
App.search(**kwargs)
```

Returns a Search object for the user and app ID.

**Parameters:**
- `**kwargs` - Arguments passed to the Search class (see Search class)

**Returns:** `Search` - A Search object for the user and app ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
search_client = app.search(top_k=12, metric="euclidean")
```

### App.search_concept_relations

```python
App.search_concept_relations(concept_id=None, predicate=None, page_no=None, per_page=None, show_tree=False)
```

List all the concept relations of the app.

**Parameters:**
- `concept_id` (*str*) - The concept ID to filter the concept relations
- `predicate` (*str*) - Type of relation to filter: 'hypernym', 'hyponym', or 'synonym'
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page
- `show_tree` (*bool*) - If True, prints a rich tree representation of concept relations

**Yields:** `ConceptRelation` - ConceptRelation objects in the app

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_concept_relations = list(app.search_concept_relations())
```

### App.workflow

```python
App.workflow(workflow_id, **kwargs)
```

Returns a Workflow object for the existing workflow ID.

**Parameters:**
- `workflow_id` (*str*) - The workflow ID for the workflow to interact with

**Returns:** `Workflow` - A Workflow object for the existing workflow ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
workflow = app.workflow(workflow_id="workflow_id")
```

---

## [Artifact](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/artifact.py)

```python
class Artifact(artifact_id="", user_id="", app_id="", **kwargs)
```

Artifact client for managing artifacts in Clarifai.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID
- `user_id` (*str*) - The user ID
- `app_id` (*str*) - The app ID
- `**kwargs` - Additional keyword arguments passed to the BaseClient

### Artifact.create

```python
Artifact.create(artifact_id="", user_id="", app_id="")
```

Create a new artifact.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID to create. Defaults to the ID from initialization
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization

**Returns:** `Artifact` - An Artifact object for the created artifact

**Raises:** `Exception` if artifact creation fails

### Artifact.delete

```python
Artifact.delete(artifact_id="", user_id="", app_id="", **kwargs)
```

Delete this artifact.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID. Defaults to the artifact ID from initialization
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization

**Returns:** `bool` - True if deletion was successful

**Raises:** `Exception` if artifact deletion fails

### Artifact.get

```python
Artifact.get(artifact_id="", user_id="", app_id="", **kwargs)
```

Get information about this artifact.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID. Defaults to the artifact ID from initialization
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization

**Returns:** `resources_pb2.Artifact` - The artifact protobuf object

**Raises:** `Exception` if artifact retrieval fails

### Artifact.list

```python
Artifact.list(user_id="", app_id="", page=1, per_page=20, **kwargs)
```

List artifacts in an app.

**Parameters:**
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization
- `page` (*int*) - The page number for pagination. Default 1
- `per_page` (*int*) - The number of results per page. Default 20

**Yields:** `resources_pb2.Artifact` - Artifact protobuf objects

**Raises:** `Exception` if listing fails

---

## [ArtifactVersion](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/artifact_version.py)

```python
class ArtifactVersion(artifact_id="", version_id="", user_id="", app_id="", **kwargs)
```

ArtifactVersion client for managing artifact versions in Clarifai.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID
- `version_id` (*str*) - The artifact version ID
- `user_id` (*str*) - The user ID
- `app_id` (*str*) - The app ID
- `**kwargs` - Additional keyword arguments passed to the BaseClient

### ArtifactVersion.delete

```python
ArtifactVersion.delete(artifact_id="", version_id="", user_id="", app_id="", **kwargs)
```

Delete this artifact version.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID. Defaults to the artifact ID from initialization
- `version_id` (*str*) - The artifact version ID. Defaults to the version ID from initialization
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization

**Returns:** `bool` - True if deletion was successful

**Raises:** `Exception` if deletion fails

### ArtifactVersion.download

```python
ArtifactVersion.download(output_path="", artifact_id="", version_id="", user_id="", app_id="", force=False)
```

Download an artifact version with automatic progress tracking and retry logic.

**Parameters:**
- `output_path` (*str*) - The local path to save the file. If not provided, uses the original filename
- `artifact_id` (*str*) - The artifact ID. Defaults to the artifact ID from initialization
- `version_id` (*str*) - The artifact version ID. Defaults to the version ID from initialization
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization
- `force` (*bool*) - Whether to overwrite existing files without prompting. Default False

**Returns:** `str` - The path where the file was saved

**Raises:** `Exception` if download fails

### ArtifactVersion.get

```python
ArtifactVersion.get(artifact_id="", version_id="", user_id="", app_id="", **kwargs)
```

Get information about this artifact version.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID. Defaults to the artifact ID from initialization
- `version_id` (*str*) - The artifact version ID. Defaults to the version ID from initialization
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization

**Returns:** `resources_pb2.ArtifactVersion` - The artifact version protobuf object

**Raises:** `Exception` if retrieval fails

### ArtifactVersion.list

```python
ArtifactVersion.list(artifact_id="", user_id="", app_id="", page=1, per_page=20, **kwargs)
```

List artifact versions for this artifact.

**Parameters:**
- `artifact_id` (*str*) - The artifact ID. Defaults to the artifact ID from initialization
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization
- `page` (*int*) - The page number for pagination. Default 1
- `per_page` (*int*) - The number of results per page. Default 20

**Yields:** `resources_pb2.ArtifactVersion` - ArtifactVersion protobuf objects

**Raises:** `Exception` if listing fails

### ArtifactVersion.upload

```python
ArtifactVersion.upload(file_path, artifact_id="", description="", visibility=None, expires_at=None, version_id="", user_id="", app_id="")
```

Upload a file as a new artifact version with streaming support.

**Parameters:**
- `file_path` (*str*) - Path to the file to upload
- `artifact_id` (*str*) - The artifact ID. Defaults to the artifact ID from initialization
- `description` (*str*) - Description for the artifact version
- `visibility` (*str*) - Visibility setting: "private", "public", or "org". Defaults to "private"
- `expires_at` (*Timestamp*) - Optional expiration timestamp
- `version_id` (*str*) - Optional version ID to assign
- `user_id` (*str*) - The user ID. Defaults to the user ID from initialization
- `app_id` (*str*) - The app ID. Defaults to the app ID from initialization

**Returns:** `ArtifactVersion` - An ArtifactVersion object for the uploaded version

**Raises:** `Exception` if upload fails

---

## [ComputeCluster](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/compute_cluster.py)

```python
class ComputeCluster(compute_cluster_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

ComputeCluster is a class that provides access to Clarifai API endpoints related to Compute Cluster information.

**Parameters:**
- `compute_cluster_id` (*str*) - The ComputeCluster ID for the ComputeCluster to interact with
- `user_id` (*str*) - The user ID of the user
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### ComputeCluster.create_nodepool

```python
ComputeCluster.create_nodepool(config_filepath=None, nodepool_id=None, nodepool_config=None)
```

Creates a nodepool for the compute cluster.

**Parameters:**
- `config_filepath` (*str*) - The path to the nodepool config file
- `nodepool_id` (*str*) - New nodepool ID for the nodepool to create
- `nodepool_config` (*Dict[str, Any]*) - Optional dictionary containing nodepool configuration

**Returns:** `Nodepool` - A Nodepool object for the specified nodepool ID

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(compute_cluster_id="compute_cluster_id", user_id="user_id")
nodepool = compute_cluster.create_nodepool(config_filepath="config.yml")
```

### ComputeCluster.delete_nodepools

```python
ComputeCluster.delete_nodepools(nodepool_ids)
```

Deletes list of nodepools for the compute cluster.

**Parameters:**
- `nodepool_ids` (*List[str]*) - The nodepool IDs of the compute cluster to delete

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(compute_cluster_id="compute_cluster_id", user_id="user_id")
compute_cluster.delete_nodepools(nodepool_ids=["nodepool_id1", "nodepool_id2"])
```

### ComputeCluster.list_nodepools

```python
ComputeCluster.list_nodepools(page_no=None, per_page=None)
```

Lists all the available nodepools of the compute cluster.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Nodepool` - Nodepool objects for the nodepools in the compute cluster

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(compute_cluster_id="compute_cluster_id", user_id="user_id")
all_nodepools = list(compute_cluster.list_nodepools())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### ComputeCluster.nodepool

```python
ComputeCluster.nodepool(nodepool_id)
```

Returns a Nodepool object for the existing nodepool ID.

**Parameters:**
- `nodepool_id` (*str*) - The nodepool ID for the nodepool to interact with

**Returns:** `Nodepool` - A Nodepool object for the existing nodepool ID

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(compute_cluster_id="compute_cluster_id", user_id="user_id")
nodepool = compute_cluster.nodepool(nodepool_id="nodepool_id")
```

---

## [Dataset](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/dataset.py)

```python
class Dataset(url=None, dataset_id=None, dataset_version_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Dataset is a class that provides access to Clarifai API endpoints related to Dataset information.

**Parameters:**
- `url` (*str*) - The URL to initialize the dataset object
- `dataset_id` (*str*) - The Dataset ID within the App to interact with
- `dataset_version_id` (*str*) - The Dataset Version ID within the Dataset to interact with
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### Dataset.create_version

```python
Dataset.create_version(**kwargs)
```

Creates a dataset version for the Dataset.

**Parameters:**
- `**kwargs` - Additional keyword arguments passed to Dataset Version:
  - `description` (*str*) - The description of the dataset version
  - `metadata` (*Dict[str, Any]*) - The metadata dictionary for the dataset version

**Returns:** `Dataset` - A Dataset object for the newly created dataset version

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset_version = dataset.create_version(description='dataset_version_description')
```

### Dataset.delete_version

```python
Dataset.delete_version(version_id)
```

Deletes a dataset version for the Dataset.

**Parameters:**
- `version_id` (*str*) - The version ID to delete

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.delete_version(version_id='version_id')
```

### Dataset.export

```python
Dataset.export(save_path, archive_url=None, local_archive_path=None, split='all', num_workers=4)
```

Exports the Clarifai protobuf dataset to a local archive.

**Parameters:**
- `save_path` (*str*) - The path to save the archive to
- `archive_url` (*str*) - The URL to the Clarifai protobuf archive
- `local_archive_path` (*str*) - The path to the local Clarifai protobuf archive
- `split` (*str*) - Export dataset inputs in the directory format `{split}/{input_type}`. Default 'all'
- `num_workers` (*int*) - Number of workers to use for downloading the archive. Default 4

**Example:**
```python
from clarifai.client.dataset import Dataset
Dataset().export(save_path='output.zip')
```

### Dataset.get_upload_status

```python
Dataset.get_upload_status(dataloader=None, delete_version=False, timeout=600, pre_upload_stats=None, pre_upload=False)
```

Creates a new dataset version and displays the upload status of the dataset.

**Parameters:**
- `dataloader` (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
- `delete_version` (*bool*) - True if you want to delete the version after getting the upload status
- `timeout` (*int*) - Timeout in seconds. Default 600
- `pre_upload_stats` (*Tuple*) - The pre upload stats for the dataset
- `pre_upload` (*bool*) - True if you want to get the pre upload stats for the dataset

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.get_upload_status(dataloader)
```

### Dataset.list_inputs

```python
Dataset.list_inputs(page_no=None, per_page=None, input_type=None)
```

Lists all the inputs for the dataset.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page
- `input_type` (*str*) - The type of input to list: 'image', 'video', 'audio', 'text'

**Yields:** `Input` - Input objects in the dataset

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
all_dataset_inputs = list(dataset.list_inputs())
```

### Dataset.list_versions

```python
Dataset.list_versions(page_no=None, per_page=None)
```

Lists all the versions for the dataset.

**Parameters:**
- `page_no` (*int*) - The page number to list. If None, lists all pages
- `per_page` (*int*) - The number of items per page. If None, uses default

**Yields:** `Dataset` - Dataset objects for the versions of the dataset

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
all_dataset_versions = list(dataset.list_versions())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### Dataset.merge_dataset

```python
Dataset.merge_dataset(merge_dataset_id)
```

Merges another dataset into the current dataset.

**Parameters:**
- `merge_dataset_id` (*str*) - The dataset ID of the dataset to merge

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.merge_dataset(merge_dataset_id='merge_dataset_id')
```

### Dataset.retry_upload_from_logs

```python
Dataset.retry_upload_from_logs(log_file_path, dataloader, retry_duplicates=False, log_warnings=False, **kwargs)
```

Retries failed uploads from the log file.

**Parameters:**
- `log_file_path` (*str*) - Path to the log file
- `dataloader` (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
- `retry_duplicates` (*bool*) - True if you want to retry duplicate inputs. Default False
- `log_warnings` (*bool*) - True if you want to save log warnings in a file. Default False

### Dataset.upload_dataset

```python
Dataset.upload_dataset(dataloader, batch_size=32, get_upload_status=False, log_warnings=False, **kwargs)
```

Uploads a dataset to the app.

**Parameters:**
- `dataloader` (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
- `batch_size` (*int*) - Batch size for concurrent upload of inputs and annotations (max: 128). Default 32
- `get_upload_status` (*bool*) - True if you want to get the upload status of the dataset. Default False
- `log_warnings` (*bool*) - True if you want to save log warnings in a file. Default False

### Dataset.upload_from_csv

```python
Dataset.upload_from_csv(csv_path, input_type='text', csv_type=None, labels=True, batch_size=128)
```

Uploads dataset from a csv file.

**Parameters:**
- `csv_path` (*str*) - Path to the csv file
- `input_type` (*str*) - Type of the dataset: text, image. Default 'text'
- `csv_type` (*str*) - Type of the csv file: raw, url, file_path
- `labels` (*bool*) - True if csv file has labels column. Default True
- `batch_size` (*int*) - Batch size for concurrent upload. Default 128

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id='user_id', app_id='demo_app', dataset_id='demo_dataset')
dataset.upload_from_csv(csv_path='csv_path', input_type='text', csv_type='raw', labels=True)
```

**Note:** CSV file supports 'inputid', 'input', 'concepts', 'metadata', 'geopoints' columns. All data in the CSV should be in double quotes. Metadata should be in single quotes format. Geopoints should be in "long,lat" format.

### Dataset.upload_from_folder

```python
Dataset.upload_from_folder(folder_path, input_type, labels=False, batch_size=128)
```

Upload dataset from folder.

**Parameters:**
- `folder_path` (*str*) - Path to the folder containing images or text files
- `input_type` (*str*) - Type of the dataset: text, image
- `labels` (*bool*) - True if folder name is the label for the inputs. Default False
- `batch_size` (*int*) - Batch size for concurrent upload. Default 128

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id='user_id', app_id='demo_app', dataset_id='demo_dataset')
dataset.upload_from_folder(folder_path='folder_path', input_type='text', labels=True)
```

**Note:** The filename is used as the input_id.

---

## [Deployment](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/deployment.py)

```python
class Deployment(deployment_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Deployment is a class that provides access to Clarifai API endpoints related to Deployment information.

**Parameters:**
- `deployment_id` (*str*) - The Deployment ID for the Deployment to interact with
- `user_id` (*str*) - The user ID of the user
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### Deployment.get_runner_selector

```python
Deployment.get_runner_selector(user_id, deployment_id)  # static method
```

Returns a RunnerSelector object for the given deployment_id.

**Parameters:**
- `user_id` (*str*) - The user ID for the deployment
- `deployment_id` (*str*) - The deployment ID for the deployment

**Returns:** `resources_pb2.RunnerSelector` - A RunnerSelector object for the given deployment_id

---

## [Inputs](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/input.py)

```python
class Inputs(user_id=None, app_id=None, logger_level="INFO", base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Inputs is a class that provides access to Clarifai API endpoints related to Input information.

**Parameters:**
- `user_id` (*str*) - A user ID for authentication
- `app_id` (*str*) - An app ID for the application to interact with
- `logger_level` (*str*) - The logger level. Default "INFO"
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### Inputs.delete_annotations

```python
Inputs.delete_annotations(input_ids, annotation_ids=[])
```

Delete list of annotations of input objects from the app.

**Parameters:**
- `input_ids` (*List[str]*) - List of input IDs for which annotations to delete
- `annotation_ids` (*List[str]*) - Optional list of annotation IDs to delete

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.delete_annotations(input_ids=['input_id_1', 'input_id_2'])
```

**Note:** 'annotation_ids' are optional but if provided, the number and order must match 'input_ids'.

### Inputs.delete_inputs

```python
Inputs.delete_inputs(inputs)
```

Delete list of input objects from the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to delete

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.delete_inputs(list(input_obj.list_inputs()))
```

### Inputs.download_inputs

```python
Inputs.download_inputs(inputs)
```

Download list of input objects from the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to download

**Returns:** `List[bytes]` - List of bytes for each input

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.download_inputs(list(input_obj.list_inputs()))
```

### Inputs.get_bbox_proto

```python
Inputs.get_bbox_proto(input_id, label, bbox, label_id=None, annot_id=None)  # static method
```

Create an annotation proto for each bounding box, label input pair.

**Parameters:**
- `input_id` (*str*) - The input ID for the annotation to create
- `label` (*str*) - Annotation label name
- `bbox` (*List*) - A list of a single bbox's coordinates: [xmin, ymin, xmax, ymax]
- `label_id` (*str*) - Annotation label ID
- `annot_id` (*str*) - Annotation ID

**Returns:** `Annotation` - An annotation object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
Inputs.get_bbox_proto(input_id='demo', label='demo', bbox=[x_min, y_min, x_max, y_max])
```

### Inputs.get_image_inputs_from_folder

```python
Inputs.get_image_inputs_from_folder(folder_path, dataset_id=None, labels=False)  # static method
```

Create input protos for image data type from folder.

**Parameters:**
- `folder_path` (*str*) - Path to the folder containing images
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `labels` (*bool*) - If True, use folder name as label. Default False

**Returns:** `List[Input]` - A list of Input objects for the specified folder

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_image_inputs_from_folder(folder_path='demo_folder')
```

### Inputs.get_input

```python
Inputs.get_input(input_id)
```

Get Input object of input with input_id provided from the app.

**Parameters:**
- `input_id` (*str*) - The input ID for the annotation to get

**Returns:** `Input` - An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.get_input(input_id='demo')
```

### Inputs.get_input_from_bytes

```python
Inputs.get_input_from_bytes(input_id, image_bytes=None, video_bytes=None, audio_bytes=None, text_bytes=None, dataset_id=None, **kwargs)  # static method
```

Create input proto from bytes.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_bytes` (*bytes*) - The bytes for the image
- `video_bytes` (*bytes*) - The bytes for the video
- `audio_bytes` (*bytes*) - The bytes for the audio
- `text_bytes` (*bytes*) - The bytes for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `Input` - An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
image = open('demo.jpg', 'rb').read()
video = open('demo.mp4', 'rb').read()
input_proto = Inputs.get_input_from_bytes(input_id='demo', image_bytes=image, video_bytes=video)
```

### Inputs.get_input_from_file

```python
Inputs.get_input_from_file(input_id, image_file=None, video_file=None, audio_file=None, text_file=None, dataset_id=None, **kwargs)  # static method
```

Create input proto from files.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_file` (*str*) - The file path for the image
- `video_file` (*str*) - The file path for the video
- `audio_file` (*str*) - The file path for the audio
- `text_file` (*str*) - The file path for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `Input` - An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_input_from_file(input_id='demo', video_file='file_path')
```

### Inputs.get_input_from_url

```python
Inputs.get_input_from_url(input_id, image_url=None, video_url=None, audio_url=None, text_url=None, dataset_id=None, **kwargs)  # static method
```

Create input proto from url.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_url` (*str*) - The url for the image
- `video_url` (*str*) - The url for the video
- `audio_url` (*str*) - The url for the audio
- `text_url` (*str*) - The url for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `Input` - An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_input_from_url(input_id='demo', image_url='https://samples.clarifai.com/metro-north.jpg')
```

### Inputs.get_inputs_from_csv

```python
Inputs.get_inputs_from_csv(csv_path, input_type='text', csv_type='raw', dataset_id=None, labels=True)  # static method
```

Create input protos from csv.

**Parameters:**
- `csv_path` (*str*) - Path to the csv file
- `input_type` (*str*) - Type of input: 'text', 'image', 'video', 'audio'. Default 'text'
- `csv_type` (*str*) - Type of csv file: 'raw', 'url', 'file_path'. Default 'raw'
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `labels` (*bool*) - True if csv file has labels column. Default True

**Returns:** `List[Input]` - List of input protos

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_inputs_from_csv(csv_path='filepath', input_type='text', csv_type='raw')
```

### Inputs.get_mask_proto

```python
Inputs.get_mask_proto(input_id, label, polygons, label_id=None, annot_id=None)  # static method
```

Create an annotation proto for each polygon box, label input pair.

**Parameters:**
- `input_id` (*str*) - The input ID for the annotation to create
- `label` (*str*) - Annotation label name
- `polygons` (*List[List[float]]*) - Polygon x,y points iterable
- `label_id` (*str*) - Annotation label ID
- `annot_id` (*str*) - Annotation ID

**Returns:** `Annotation` - An annotation object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
Inputs.get_mask_proto(input_id='demo', label='demo', polygons=[[[x,y],...,[x,y]],...])
```

### Inputs.get_multimodal_input

```python
Inputs.get_multimodal_input(input_id, raw_text=None, text_bytes=None, image_url=None, image_bytes=None, dataset_id=None, **kwargs)  # static method
```

Create input proto for text and image from bytes or url.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `raw_text` (*str*) - The raw text input
- `text_bytes` (*bytes*) - The bytes for the text
- `image_url` (*str*) - The url for the image
- `image_bytes` (*bytes*) - The bytes for the image
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `Input` - An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_multimodal_input(
    input_id='demo',
    raw_text='What time of day is it?',
    image_url='https://samples.clarifai.com/metro-north.jpg'
)
```

### Inputs.get_text_input

```python
Inputs.get_text_input(input_id, raw_text, dataset_id=None, **kwargs)  # static method
```

Create input proto for text data type from raw text.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `raw_text` (*str*) - The raw text input
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `Input` - An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_text_input(input_id='demo', raw_text='This is a test')
```

### Inputs.get_text_inputs_from_folder

```python
Inputs.get_text_inputs_from_folder(folder_path, dataset_id=None, labels=False)  # static method
```

Create input protos for text data type from folder.

**Parameters:**
- `folder_path` (*str*) - Path to the folder containing text files
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `labels` (*bool*) - If True, use folder name as label. Default False

**Returns:** `List[Input]` - A list of Input objects for the specified folder

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_text_inputs_from_folder(folder_path='demo_folder')
```

### Inputs.list_annotations

```python
Inputs.list_annotations(batch_input=None, page_no=None, per_page=None)
```

Lists all the annotations for the app.

**Parameters:**
- `batch_input` (*List[Input]*) - The input objects to list annotations from
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Annotation` - Annotation objects for the app

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
all_inputs = list(input_obj.list_inputs(input_type='image'))
all_annotations = list(input_obj.list_annotations(batch_input=all_inputs))
```

**Note:** If `batch_input` is not given, lists all the annotations for the app.

### Inputs.list_inputs

```python
Inputs.list_inputs(dataset_id=None, page_no=None, per_page=None, input_type=None)
```

Lists all the inputs for the app.

**Parameters:**
- `dataset_id` (*str*) - The dataset ID for the dataset to list inputs from
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page
- `input_type` (*str*) - The type of input to list: 'image', 'video', 'audio', 'text'

**Yields:** `Input` - Input objects for the app

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
all_inputs = list(input_obj.list_inputs(input_type='image'))
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### Inputs.patch_annotations

```python
Inputs.patch_annotations(batch_annot, action='merge')
```

Patch image annotations to app.

**Parameters:**
- `batch_annot` (*List[Annotation]*) - Annotation batch protos
- `action` (*str*) - Action to perform: 'merge', 'overwrite', 'remove'. Default 'merge'

### Inputs.patch_concepts

```python
Inputs.patch_concepts(concept_ids, labels=[], values=[], action='overwrite')
```

Patch concepts to app.

**Parameters:**
- `concept_ids` (*List[str]*) - A list of concept IDs
- `labels` (*List[str]*) - A list of label names
- `values` (*List[float]*) - Concept values
- `action` (*str*) - Action to perform. Default 'overwrite'

### Inputs.patch_inputs

```python
Inputs.patch_inputs(inputs, action='merge')
```

Patch list of input objects to the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to patch
- `action` (*str*) - Action to perform: 'merge', 'overwrite', 'remove'. Default 'merge'

### Inputs.upload_annotations

```python
Inputs.upload_annotations(batch_annot, show_log=True)
```

Upload image annotations to app.

**Parameters:**
- `batch_annot` (*List[Annotation]*) - Annotation batch protos
- `show_log` (*bool*) - Show upload status log. Default True

**Returns:** `List[Annotation]` - Failed annotation uploads (for retry)

### Inputs.upload_from_bytes

```python
Inputs.upload_from_bytes(input_id, image_bytes=None, video_bytes=None, audio_bytes=None, text_bytes=None, dataset_id=None, **kwargs)
```

Upload input from bytes.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_bytes` (*bytes*) - The bytes for the image
- `video_bytes` (*bytes*) - The bytes for the video
- `audio_bytes` (*bytes*) - The bytes for the audio
- `text_bytes` (*bytes*) - The bytes for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `str` - Job ID for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
image = open('demo.jpg', 'rb').read()
input_obj.upload_from_bytes(input_id='demo', image_bytes=image)
```

### Inputs.upload_from_file

```python
Inputs.upload_from_file(input_id, image_file=None, video_file=None, audio_file=None, text_file=None, dataset_id=None, **kwargs)
```

Upload input from file.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_file` (*str*) - The file for the image
- `video_file` (*str*) - The file for the video
- `audio_file` (*str*) - The file for the audio
- `text_file` (*str*) - The file for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `str` - Job ID for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.upload_from_file(input_id='demo', audio_file='demo.mp3')
```

### Inputs.upload_from_url

```python
Inputs.upload_from_url(input_id, image_url=None, video_url=None, audio_url=None, text_url=None, dataset_id=None, **kwargs)
```

Upload input from url.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_url` (*str*) - The url for the image
- `video_url` (*str*) - The url for the video
- `audio_url` (*str*) - The url for the audio
- `text_url` (*str*) - The url for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `str` - Job ID for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.upload_from_url(input_id='demo', image_url='https://samples.clarifai.com/metro-north.jpg')
```

### Inputs.upload_inputs

```python
Inputs.upload_inputs(inputs, show_log=True)
```

Upload list of input objects to the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to upload
- `show_log` (*bool*) - Show upload status log. Default True

**Returns:** `str` - Job ID for the upload request

### Inputs.upload_text

```python
Inputs.upload_text(input_id, raw_text, dataset_id=None, **kwargs)
```

Upload text from raw text.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `raw_text` (*str*) - The raw text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to

**Returns:** `str` - Job ID for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.upload_text(input_id='demo', raw_text='This is a test')
```

---

## [Lister](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/lister.py)

```python
class Lister(page_size=16)
```

Lister class for obtaining paginated results from the Clarifai API.

**Parameters:**
- `page_size` (*int*) - The default page size for listing resources. Default 16

### Lister.list_pages_generator

```python
Lister.list_pages_generator(endpoint, proto_message, request_data, page_no=None, per_page=None)
```

Lists pages of a resource.

**Parameters:**
- `endpoint` (*Callable*) - The endpoint to call
- `proto_message` (*Any*) - The proto message to use
- `request_data` (*dict*) - The request data to use
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `dict` - The next item in the listing

---

## [Model](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/model.py)

```python
class Model(url=None, model_id=None, model_version={'id': ""}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, deployment_user_id=None, **kwargs)
```

Model is a class that provides access to Clarifai API endpoints related to Model information.

**Parameters:**
- `url` (*str*) - The URL to initialize the model object
- `model_id` (*str*) - The Model ID to interact with
- `model_version` (*dict*) - The Model Version to interact with. Default `{'id': ""}`
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file
- `compute_cluster_id` (*str*) - Compute cluster ID for runner selector
- `nodepool_id` (*str*) - Nodepool ID for runner selector
- `deployment_id` (*str*) - Deployment ID for runner selector
- `deployment_user_id` (*str*) - User ID for runner selector (organization or user)

### Model.async_generate

```python
async Model.async_generate(*args, **kwargs)
```

Calls the model's async generate() method (UNARY_STREAMING). Supports raw proto inputs for backward compatibility.

### Model.async_predict

```python
async Model.async_predict(*args, **kwargs)
```

Calls the model's async predict() method (UNARY_UNARY). Supports raw proto inputs for backward compatibility.

### Model.async_stream

```python
async Model.async_stream(*args, **kwargs)
```

Calls the model's async stream() method (STREAMING_STREAMING). Supports raw proto inputs for backward compatibility.

### Model.create_version

```python
Model.create_version(**kwargs)
```

Creates a model version for the Model.

**Parameters:**
- `**kwargs` - Additional keyword arguments passed to Model Version:
  - `description` (*str*) - The description of the model version
  - `concepts` (*list[Concept]*) - The concepts to associate with the model version
  - `output_info` (*resources_pb2.OutputInfo*) - The output info to associate with the model version

**Returns:** `Model` - A Model object for the specified model ID

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_version = model.create_version(description='model_version_description')
```

### Model.delete_version

```python
Model.delete_version(version_id)
```

Deletes a model version for the Model.

**Parameters:**
- `version_id` (*str*) - The version ID to delete

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model.delete_version(version_id='version_id')
```

### Model.evaluate

```python
Model.evaluate(dataset=None, dataset_id=None, dataset_app_id=None, dataset_user_id=None, dataset_version_id=None, eval_id=None, extended_metrics=None, eval_info=None)
```

Run evaluation on the model.

**Parameters:**
- `dataset` (*Dataset*) - If Clarifai Dataset is set, ignores other dataset_ arguments
- `dataset_id` (*str*) - Dataset ID. Default None
- `dataset_app_id` (*str*) - App ID for cross app evaluation. Default None
- `dataset_user_id` (*str*) - User ID for cross app evaluation. Default None
- `dataset_version_id` (*str*) - Dataset version ID. Default None
- `eval_id` (*str*) - Specific ID for the evaluation. Default None
- `extended_metrics` (*dict*) - User custom metrics result. Default None
- `eval_info` (*dict*) - Custom eval info. Default None

**Returns:** `resources_pb2.EvalMetrics` - Evaluation metrics

### Model.generate

```python
Model.generate(*args, **kwargs)
```

Calls the model's generate() method (UNARY_STREAMING). Supports raw proto inputs for backward compatibility.

### Model.generate_by_bytes

```python
Model.generate_by_bytes(input_bytes, input_type=None, inference_params={}, output_config={})
```

Generate the stream output on model based on the given bytes.

**Parameters:**
- `input_bytes` (*bytes*) - File bytes to predict on
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override:
  - `min_value` (*float*) - Minimum prediction confidence
  - `max_concepts` (*int*) - Maximum number of concepts to return
  - `select_concepts` (*list[Concept]*) - The concepts to select

**Example:**
```python
from clarifai.client.model import Model
model = Model("https://clarifai.com/openai/chat-completion/models/GPT-4")
stream_response = model.generate_by_bytes(b'Write a tweet on future of AI',
                                           inference_params=dict(temperature=str(0.7), max_tokens=30))
list_stream_response = [response for response in stream_response]
```

### Model.generate_by_filepath

```python
Model.generate_by_filepath(filepath, input_type=None, inference_params={}, output_config={})
```

Generate the stream output on model based on the given filepath.

**Parameters:**
- `filepath` (*str*) - The filepath to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
stream_response = model.generate_by_filepath('/path/to/image.jpg', 'image')
list_stream_response = [response for response in stream_response]
```

### Model.generate_by_url

```python
Model.generate_by_url(url, input_type=None, inference_params={}, output_config={})
```

Generate the stream output on model based on the given URL.

**Parameters:**
- `url` (*str*) - The URL to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
stream_response = model.generate_by_url('url')
list_stream_response = [response for response in stream_response]
```

### Model.get_eval_by_id

```python
Model.get_eval_by_id(eval_id, label_counts=False, test_set=False, binary_metrics=False, confusion_matrix=False, metrics_by_class=False, metrics_by_area=False)
```

Get detailed eval_metrics by eval_id with extra metric fields.

**Parameters:**
- `eval_id` (*str*) - Evaluation ID
- `label_counts` (*bool*) - Set True to get label counts. Default False
- `test_set` (*bool*) - Set True to get test set. Default False
- `binary_metrics` (*bool*) - Set True to get binary metric. Default False
- `confusion_matrix` (*bool*) - Set True to get confusion matrix. Default False
- `metrics_by_class` (*bool*) - Set True to get metrics by class. Default False
- `metrics_by_area` (*bool*) - Set True to get metrics by area. Default False

**Returns:** `resources_pb2.EvalMetrics` - Evaluation metrics

### Model.get_latest_eval

```python
Model.get_latest_eval(label_counts=False, test_set=False, binary_metrics=False, confusion_matrix=False, metrics_by_class=False, metrics_by_area=False)
```

Run `get_eval_by_id` method with the latest eval_id.

**Parameters:**
- `label_counts` (*bool*) - Set True to get label counts. Default False
- `test_set` (*bool*) - Set True to get test set. Default False
- `binary_metrics` (*bool*) - Set True to get binary metric. Default False
- `confusion_matrix` (*bool*) - Set True to get confusion matrix. Default False
- `metrics_by_class` (*bool*) - Set True to get metrics by class. Default False
- `metrics_by_area` (*bool*) - Set True to get metrics by area. Default False

**Returns:** `resources_pb2.EvalMetrics` if model is evaluated, otherwise None

### Model.get_param_info

```python
Model.get_param_info(param)
```

Returns the parameter info for the specified parameter.

**Parameters:**
- `param` (*str*) - The parameter name to get information for

**Returns:** `Dict[str, Any]` - Dictionary containing model parameter info for the specified param

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', save_to='model_params.yaml')
param_info = model.get_param_info('learning_rate')
```

### Model.get_params

```python
Model.get_params(template=None, save_to='params.yaml')
```

Returns the model params for the model type and saves them to a yaml file.

**Parameters:**
- `template` (*str*) - The template to use for the model type. Required for most model types except 'clusterer' and 'embedding-classifier'
- `save_to` (*str*) - The yaml file path to save the model params. Default 'params.yaml'

**Returns:** `Dict[str, Any]` - Dictionary of model params for the model type

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', save_to='model_params.yaml')
```

### Model.list_evaluations

```python
Model.list_evaluations()
```

List all eval_metrics of current model version.

**Returns:** `resources_pb2.EvalMetrics` - Evaluation metrics

**Raises:** `Exception` if API call fails

### Model.list_training_templates

```python
Model.list_training_templates()
```

Lists all the training templates for the model type.

**Returns:** `List[str]` - List of training templates for the model type

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
print(model.list_training_templates())
```

### Model.list_versions

```python
Model.list_versions(page_no=None, per_page=None)
```

Lists all the versions for the model.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Model` - Model objects for the versions of the model

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
all_model_versions = list(model.list_versions())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### Model.load_info

```python
Model.load_info(validate=False)
```

Loads the model information from the Clarifai API.

**Parameters:**
- `validate` (*bool*) - If True, only validates the existence of the model without updating attributes. Default False

**Raises:** `Exception` if the gRPC API call fails

### Model.load_input_types

```python
Model.load_input_types()
```

Loads the input types for the model.

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model.load_input_types()
```

### Model.predict

```python
Model.predict(*args, **kwargs)
```

Calls the model's predict() method (UNARY_UNARY). Supports raw proto inputs for backward compatibility.

**Parameters:**
- `inputs` (*List[Input]*) - List of input protos (backward compat) or method arguments
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

### Model.predict_by_bytes

```python
Model.predict_by_bytes(input_bytes, input_type=None, inference_params={}, output_config={})
```

Predicts the model based on the given bytes.

**Parameters:**
- `input_bytes` (*bytes*) - File bytes to predict on
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override:
  - `min_value` (*float*) - Minimum prediction confidence
  - `max_concepts` (*int*) - Maximum number of concepts to return
  - `select_concepts` (*list[Concept]*) - The concepts to select

**Example:**
```python
from clarifai.client.model import Model
model = Model("https://clarifai.com/openai/chat-completion/models/GPT-4")
model_prediction = model.predict_by_bytes(b'Write a tweet on future of AI',
                                           inference_params=dict(temperature=str(0.7), max_tokens=30))
```

### Model.predict_by_filepath

```python
Model.predict_by_filepath(filepath, input_type=None, inference_params={}, output_config={})
```

Predicts the model based on the given filepath.

**Parameters:**
- `filepath` (*str*) - The filepath to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_prediction = model.predict_by_filepath('/path/to/image.jpg')
model_prediction = model.predict_by_filepath('/path/to/text.txt')
```

### Model.predict_by_url

```python
Model.predict_by_url(url, input_type=None, inference_params={}, output_config={})
```

Predicts the model based on the given URL.

**Parameters:**
- `url` (*str*) - The URL to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_prediction = model.predict_by_url('url')
```

### Model.stream

```python
Model.stream(*args, **kwargs)
```

Calls the model's stream() method (STREAMING_STREAMING). Supports raw proto inputs for backward compatibility.

### Model.stream_by_bytes

```python
Model.stream_by_bytes(input_bytes_iterator, input_type=None, inference_params={}, output_config={})
```

Stream the model output based on the given bytes iterator.

**Parameters:**
- `input_bytes_iterator` (*Iterator[bytes]*) - Iterator of file bytes to predict on
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

**Example:**
```python
from clarifai.client.model import Model
model = Model("https://clarifai.com/openai/chat-completion/models/GPT-4")
stream_response = model.stream_by_bytes(iter([b'Write a tweet on future of AI']),
                                         inference_params=dict(temperature=str(0.7), max_tokens=30))
list_stream_response = [response for response in stream_response]
```

### Model.stream_by_filepath

```python
Model.stream_by_filepath(filepath, input_type=None, inference_params={}, output_config={})
```

Stream the model output based on the given filepath.

**Parameters:**
- `filepath` (*str*) - The filepath to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

**Example:**
```python
from clarifai.client.model import Model
model = Model("url")
stream_response = model.stream_by_filepath('/path/to/image.jpg')
list_stream_response = [response for response in stream_response]
```

### Model.stream_by_url

```python
Model.stream_by_url(url_iterator, input_type=None, inference_params={}, output_config={})
```

Stream the model output based on the given URL iterator.

**Parameters:**
- `url_iterator` (*Iterator[str]*) - Iterator of URLs to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'
- `inference_params` (*dict*) - The inference params to override
- `output_config` (*dict*) - The output config to override

**Example:**
```python
from clarifai.client.model import Model
model = Model("url")
stream_response = model.stream_by_url(iter(['url']))
list_stream_response = [response for response in stream_response]
```

### Model.train

```python
Model.train(yaml_file=None)
```

Trains the model based on the given yaml file or model params.

**Parameters:**
- `yaml_file` (*str*) - The yaml file for the model params

**Returns:** `str` - The model version ID for the model

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', yaml_file='model_params.yaml')
model.train('model_params.yaml')
```

### Model.training_status

```python
Model.training_status(version_id=None, training_logs=False)
```

Get the training status for the model version.

**Parameters:**
- `version_id` (*str*) - The version ID to get the training status for
- `training_logs` (*bool*) - Whether to save the training logs in a file. Default False

**Returns:** `Dict[str, str]` - Dictionary of training status for the model version

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model.training_status(version_id='version_id', training_logs=True)
```

### Model.update_params

```python
Model.update_params(**kwargs)
```

Updates the model params for the model.

**Parameters:**
- `**kwargs` - Model params to update (e.g. `batch_size=8`, `dataset_version='dataset_version_id'`)

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', yaml_file='model_params.yaml')
model.update_params(batch_size=8, dataset_version='dataset_version_id')
```

---

## [ModelClient](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/model_client.py)

```python
class ModelClient(stub, async_stub=None, request_template=None)
```

Client for calling model predict, generate, and stream methods.

**Parameters:**
- `stub` - The gRPC stub for the model
- `async_stub` (*V2Stub*) - Optional async gRPC stub
- `request_template` (*PostModelOutputsRequest*) - Template for the request with common fields like model_id, model_version, cluster

### ModelClient.available_methods

```python
ModelClient.available_methods()
```

Get the available methods for this model.

**Returns:** `List[str]` - The available methods

### ModelClient.fetch

```python
ModelClient.fetch()
```

Fetch function signature definitions from the model and define the functions in the client.

### ModelClient.from_local_grpc

```python
ModelClient.from_local_grpc(port=8000)  # classmethod
```

Create a ModelClient connected to a local gRPC model server.

Connects to a local gRPC server started with `clarifai model serve --grpc`. Method signatures are auto-discovered from the running model.

**Parameters:**
- `port` (*int*) - Port of the local gRPC server. Default 8000

**Returns:** `ModelClient` with predict/generate/stream methods ready to use

**Example:**
```python
from clarifai.client.model_client import ModelClient

client = ModelClient.from_local_grpc(port=8000)
response = client.predict(text="What is the future of AI?")
print(response)
```

### ModelClient.generate_client_script

```python
ModelClient.generate_client_script(base_url=None, use_ctx=False, colorize=False)
```

Generate a client script for this model.

**Returns:** `str` - The client script

### ModelClient.method_signature

```python
ModelClient.method_signature(method_name)
```

Get the method signature for a method.

**Parameters:**
- `method_name` (*str*) - The name of the method

**Returns:** `str` - The method signature

---

## [Nodepool](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/nodepool.py)

```python
class Nodepool(nodepool_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Nodepool is a class that provides access to Clarifai API endpoints related to Nodepool information.

**Parameters:**
- `nodepool_id` (*str*) - The Nodepool ID for the Nodepool to interact with
- `user_id` (*str*) - The user ID of the user
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### Nodepool.create_deployment

```python
Nodepool.create_deployment(config_filepath=None, deployment_id=None, deployment_config=None)
```

Creates a deployment for the nodepool.

**Parameters:**
- `config_filepath` (*str*) - The path to the deployment config file
- `deployment_id` (*str*) - New deployment ID for the deployment to create
- `deployment_config` (*Dict[str, Any]*) - Optional dictionary containing deployment configuration

**Returns:** `Deployment` - A Deployment object for the specified deployment ID

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
deployment = nodepool.create_deployment(config_filepath="config.yml")
```

### Nodepool.create_runner

```python
Nodepool.create_runner(config_filepath=None, runner_config=None)
```

Creates a runner for the nodepool. Only needed for local runners.

**Parameters:**
- `config_filepath` (*str*) - The path to the runner config file
- `runner_config` (*Dict[str, Any]*) - Optional dictionary containing runner configuration

**Returns:** `Runner` - A Runner object for the specified runner ID

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
runner = nodepool.create_runner(config_filepath="runner.yml")
```

### Nodepool.delete_deployments

```python
Nodepool.delete_deployments(deployment_ids)
```

Deletes list of deployments for the nodepool.

**Parameters:**
- `deployment_ids` (*List[str]*) - The list of deployment IDs to delete

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
nodepool.delete_deployments(deployment_ids=["deployment_id1", "deployment_id2"])
```

### Nodepool.delete_runners

```python
Nodepool.delete_runners(runner_ids)
```

Deletes list of runners for the nodepool.

**Parameters:**
- `runner_ids` (*List[str]*) - The list of runner IDs to delete

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
nodepool.delete_runners(runner_ids=["runner_id1", "runner_id2"])
```

### Nodepool.deployment

```python
Nodepool.deployment(deployment_id)
```

Returns a Deployment object for the existing deployment ID.

**Parameters:**
- `deployment_id` (*str*) - The deployment ID for the deployment to interact with

**Returns:** `Deployment` - A Deployment object for the existing deployment ID

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
deployment = nodepool.deployment(deployment_id="deployment_id")
```

### Nodepool.get_runner_selector

```python
Nodepool.get_runner_selector(user_id, compute_cluster_id, nodepool_id)  # static method
```

Returns a RunnerSelector object for the specified compute cluster and nodepool.

**Parameters:**
- `user_id` (*str*) - The user ID of the user
- `compute_cluster_id` (*str*) - The compute cluster ID
- `nodepool_id` (*str*) - The nodepool ID

**Returns:** `resources_pb2.RunnerSelector` - A RunnerSelector object

**Example:**
```python
from clarifai.client.nodepool import Nodepool
runner_selector = Nodepool.get_runner_selector(user_id="user_id", compute_cluster_id="compute_cluster_id", nodepool_id="nodepool_id")
```

### Nodepool.list_deployments

```python
Nodepool.list_deployments(filter_by={}, page_no=None, per_page=None)
```

Lists all the available deployments of the compute cluster.

**Parameters:**
- `filter_by` (*Dict[str, Any]*) - The filter to apply to the list of deployments
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Deployment` - Deployment objects for the nodepool

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
all_deployments = list(nodepool.list_deployments())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### Nodepool.list_runners

```python
Nodepool.list_runners(model_version_ids=None, page_no=None, per_page=None)
```

Lists all the available runners for the model version in the nodepool.

**Parameters:**
- `model_version_ids` (*List[str]*) - Optional model version IDs to filter runners
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Runner` - Runner objects for the nodepool

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
all_runners = list(nodepool.list_runners())
```

### Nodepool.runner

```python
Nodepool.runner(runner_id)
```

Returns a Runner object for the existing runner ID.

**Parameters:**
- `runner_id` (*str*) - The runner ID for the runner to interact with

**Returns:** `Runner` - A Runner object for the existing runner ID

**Example:**
```python
from clarifai.client.nodepool import Nodepool
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
runner = nodepool.runner(runner_id="runner_id")
```

---

## [Pipeline](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/pipeline.py)

```python
class Pipeline(url=None, pipeline_id=None, pipeline_version_id=None, pipeline_version_run_id=None, user_id=None, app_id=None, nodepool_id=None, compute_cluster_id=None, log_file=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Pipeline is a class that provides access to Clarifai API endpoints related to Pipeline information.

**Parameters:**
- `url` (*str*) - The URL to initialize the pipeline object
- `pipeline_id` (*str*) - The Pipeline ID to interact with
- `pipeline_version_id` (*str*) - The Pipeline Version ID to interact with
- `pipeline_version_run_id` (*str*) - The Pipeline Version Run ID. If not provided, a UUID is generated
- `user_id` (*str*) - The User ID that owns the pipeline
- `app_id` (*str*) - The App ID that contains the pipeline
- `nodepool_id` (*str*) - The Nodepool ID to run the pipeline on
- `compute_cluster_id` (*str*) - The Compute Cluster ID to run the pipeline on
- `log_file` (*str*) - Path to file where logs should be written. If not provided, logs to console
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### Pipeline.monitor_only

```python
Pipeline.monitor_only(timeout=3600, monitor_interval=10)
```

Monitor an existing pipeline run without starting a new one.

**Parameters:**
- `timeout` (*int*) - Maximum time to wait for completion in seconds. Default 3600 (1 hour)
- `monitor_interval` (*int*) - Interval between status checks in seconds. Default 10

**Returns:** `Dict` - The pipeline run result

### Pipeline.patch_pipeline_version_run

```python
Pipeline.patch_pipeline_version_run(pipeline_version_run_id, orchestration_status_code)
```

Patch a pipeline version run's orchestration status.

This method can be used to pause, cancel, or resume a pipeline run.

**Parameters:**
- `pipeline_version_run_id` (*str*) - The pipeline version run ID to patch
- `orchestration_status_code` (*int*) - The status code to set (e.g., JOB_PAUSED, JOB_CANCELLED, JOB_RUNNING)

**Returns:** `Dict` - The response as a dictionary

**Raises:** `UserError` if the patch request fails

### Pipeline.run

```python
Pipeline.run(inputs=None, timeout=3600, monitor_interval=10, input_args_override=None)
```

Run the pipeline and monitor its progress.

**Parameters:**
- `inputs` (*List*) - List of inputs to run the pipeline with. If None, runs without inputs
- `timeout` (*int*) - Maximum time to wait for completion in seconds. Default 3600 (1 hour)
- `monitor_interval` (*int*) - Interval between status checks in seconds. Default 10
- `input_args_override` (*OrchestrationArgsOverride*) - Override arguments for the pipeline run

**Returns:** `Dict` - The pipeline run result

---

## [PipelineStep](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/pipeline_step.py)

```python
class PipelineStep(url=None, pipeline_step_id=None, pipeline_step_version_id=None, user_id=None, app_id=None, pipeline_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

PipelineStep is a class that provides access to Clarifai API endpoints related to PipelineStep information.

**Parameters:**
- `url` (*str*) - The URL to initialize the pipeline step object
- `pipeline_step_id` (*str*) - The PipelineStep ID for the PipelineStep to interact with
- `pipeline_step_version_id` (*str*) - The PipelineStep version ID
- `user_id` (*str*) - The User ID for the PipelineStep to interact with
- `app_id` (*str*) - The App ID for the PipelineStep to interact with
- `pipeline_id` (*str*) - The Pipeline ID for the PipelineStep to interact with
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication
- `token` (*str*) - A session token for authentication
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

---

## [Runner](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/runner.py)

```python
class Runner(runner_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Runner is a class that provides access to Clarifai API endpoints related to Runner information.

**Parameters:**
- `runner_id` (*str*) - The Runner ID for the Runner to interact with
- `user_id` (*str*) - The user ID of the user
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

---

## [Search](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/search.py)

```python
class Search(user_id, app_id, top_k=None, metric="cosine", algorithm="nearest_neighbor", pagination=False, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None)
```

Search class for performing vector search and filtering over Clarifai inputs.

**Parameters:**
- `user_id` (*str*) - User ID
- `app_id` (*str*) - App ID
- `top_k` (*int*) - Top K results to retrieve. Defaults to 10
- `metric` (*str*) - Similarity metric: 'cosine' or 'euclidean'. Default 'cosine'
- `algorithm` (*str*) - Search algorithm: 'nearest_neighbor' or 'brute_force'. Default 'nearest_neighbor'
- `pagination` (*bool*) - Enable pagination. Default False
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

**Raises:**
- `UserError` if the metric is not 'cosine' or 'euclidean'
- `UserError` if the algorithm is not 'nearest_neighbor' or 'brute_force'

### Search.query

```python
Search.query(ranks=[{}], filters=[{}], page_no=None, per_page=None)
```

Perform a query with rank and filters.

**Parameters:**
- `ranks` (*List[Dict]*) - List of rank parameters. Default `[{}]`
- `filters` (*List[Dict]*) - List of filter parameters. Default `[{}]`
- `page_no` (*int*) - The page number to list (only available when `pagination=True`)
- `per_page` (*int*) - The number of items per page (only available when `pagination=True`)

**Returns:** Generator of query results

**Example:**
```python
from clarifai.client.search import Search

# Get successful inputs of type image or text
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')
res = search.query(filters=[{'input_types': ['image', 'text'], 'input_status_code': 30000}])

# Vector search over inputs
search = Search(user_id='user_id', app_id='app_id', metric='cosine', pagination=True)
res = search.query(ranks=[{'image_url': 'https://samples.clarifai.com/dog.tiff'}], page_no=2, per_page=5)
```

**Note:** For rank and filter schema, refer to [schema](https://github.com/Clarifai/clarifai-python/tree/master/clarifai/schema/search.py).

---

## [User](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/user.py)

```python
class User(user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

User is a class that provides access to Clarifai API endpoints related to user information.

**Parameters:**
- `user_id` (*str*) - The user ID for the user to interact with
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### User.app

```python
User.app(app_id, **kwargs)
```

Returns an App object for the specified app ID.

**Parameters:**
- `app_id` (*str*) - The app ID for the app to interact with

**Returns:** `App` - An App object for the specified app ID

**Example:**
```python
from clarifai.client.user import User
app = User("user_id").app("app_id")
```

### User.compute_cluster

```python
User.compute_cluster(compute_cluster_id)
```

Returns a ComputeCluster object for the specified compute cluster ID.

**Parameters:**
- `compute_cluster_id` (*str*) - The compute cluster ID for the compute cluster to interact with

**Returns:** `ComputeCluster` - A ComputeCluster object for the specified compute cluster ID

**Example:**
```python
from clarifai.client.user import User
compute_cluster = User("user_id").compute_cluster("compute_cluster_id")
```

### User.create_app

```python
User.create_app(app_id, base_workflow='Empty', **kwargs)
```

Creates an app for the user.

**Parameters:**
- `app_id` (*str*) - The app ID for the app to create
- `base_workflow` (*str*) - The base workflow to use for the app. Examples: 'Universal', 'Language-Understanding', 'General'. Default 'Empty'
- `**kwargs` - Additional keyword arguments passed to the App

**Returns:** `App` - An App object for the specified app ID

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
app = client.create_app(app_id="app_id", base_workflow="Universal")
```

### User.create_compute_cluster

```python
User.create_compute_cluster(config_filepath=None, compute_cluster_id=None, compute_cluster_config=None)
```

Creates a compute cluster for the user.

**Parameters:**
- `config_filepath` (*str*) - The path to the compute cluster config file
- `compute_cluster_id` (*str*) - New compute cluster ID for the compute cluster to create
- `compute_cluster_config` (*Dict[str, Any]*) - Optional dictionary containing compute cluster configuration

**Returns:** `ComputeCluster` - A Compute Cluster object for the specified compute cluster ID

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
compute_cluster = client.create_compute_cluster(config_filepath="config.yml")
```

### User.create_secrets

```python
User.create_secrets(secrets)
```

Creates secrets for the user.

**Parameters:**
- `secrets` (*List[Dict[str, Any]]*) - List of secret configurations. Each secret dict can contain:
  - `id` (*str*) - The name/ID of the secret (required)
  - `value` (*str*) - The secret value (required)
  - `description` (*str*) - Optional description of the secret
  - `expires_at` (*str*) - Optional expiration timestamp

**Returns:** `List[Dict]` - List of dictionaries containing information about the created secrets

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
secrets = [{"id": "secret1", "value": "secret_value", "description": "My Secret"}]
created_secrets = client.create_secrets(secrets)
```

### User.delete_app

```python
User.delete_app(app_id)
```

Deletes an app for the user.

**Parameters:**
- `app_id` (*str*) - The app ID for the app to delete

**Example:**
```python
from clarifai.client.user import User
User("user_id").delete_app("app_id")
```

### User.delete_compute_clusters

```python
User.delete_compute_clusters(compute_cluster_ids)
```

Deletes a list of compute clusters for the user.

**Parameters:**
- `compute_cluster_ids` (*List[str]*) - The compute cluster IDs of the user to delete

**Example:**
```python
from clarifai.client.user import User
User("user_id").delete_compute_clusters(compute_cluster_ids=["compute_cluster_id1", "compute_cluster_id2"])
```

### User.delete_runner

```python
User.delete_runner(runner_id)
```

Deletes the specified runner.

**Parameters:**
- `runner_id` (*str*) - Runner ID to delete

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
client.delete_runner(runner_id="runner_id")
```

### User.delete_secrets

```python
User.delete_secrets(secret_ids)
```

Deletes a list of secrets for the user.

**Parameters:**
- `secret_ids` (*List[str]*) - The secret IDs of the user to delete

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
client.delete_secrets(secret_ids=["secret_id1", "secret_id2"])
```

### User.get_secret

```python
User.get_secret(secret_id)
```

Returns a secret object if it exists.

**Parameters:**
- `secret_id` (*str*) - The secret ID to interact with

**Returns:** `Dict` - A dictionary containing information about the existing secret ID

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
secret_info = client.get_secret(secret_id="secret_id")
```

### User.get_user_info

```python
User.get_user_info(user_id=None)
```

Returns the user information for the specified user ID.

**Parameters:**
- `user_id` (*str*) - The user ID for the user to interact with

**Returns:** Response containing user information

### User.list_apps

```python
User.list_apps(filter_by={}, page_no=None, per_page=None)
```

Lists all the apps for the user.

**Parameters:**
- `filter_by` (*Dict[str, Any]*) - A dictionary of filters to be applied to the list of apps
- `page_no` (*int*) - The page number to list. If None, lists all pages
- `per_page` (*int*) - The number of items per page. If None, uses default

**Yields:** `App` - App objects for the user

**Example:**
```python
from clarifai.client.user import User
apps = list(User("user_id").list_apps())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### User.list_cloud_providers

```python
User.list_cloud_providers()
```

List available cloud providers (e.g. aws, gcp, azure, vultr).

**Returns:** `list` - List of CloudProvider protobuf objects with id, name, special_handling fields

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
providers = client.list_cloud_providers()
```

### User.list_cloud_regions

```python
User.list_cloud_regions(cloud_provider_id)
```

List available regions for a cloud provider.

**Parameters:**
- `cloud_provider_id` (*str*) - The cloud provider ID (e.g. 'aws', 'gcp')

**Returns:** `list` - List of CloudRegion protobuf objects

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
regions = client.list_cloud_regions("aws")
```

### User.list_compute_clusters

```python
User.list_compute_clusters(page_no=None, per_page=None)
```

List all compute clusters for the user.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `ComputeCluster` - ComputeCluster objects

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_compute_clusters = list(client.list_compute_clusters())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### User.list_instance_types

```python
User.list_instance_types(cloud_provider_id, region)
```

List available GPU/instance types for a cloud provider and region.

**Parameters:**
- `cloud_provider_id` (*str*) - The cloud provider ID (e.g. 'aws', 'gcp')
- `region` (*str*) - The region ID (e.g. 'us-east-1')

**Returns:** `list` - List of InstanceType protobuf objects with id, description, compute_info, price, cloud_provider, region fields

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
instance_types = client.list_instance_types("aws", "us-east-1")
```

### User.list_models

```python
User.list_models(user_id=None, app_id=None, show=True, return_clarifai_model=False, **kwargs)
```

List models with optional filtering by user and app.

**Parameters:**
- `user_id` (*str*) - User ID to filter by. Use "all" to list all users' models
- `app_id` (*str*) - App ID to filter by
- `show` (*bool*) - If True, print a tabulated display of models. Default True
- `return_clarifai_model` (*bool*) - If True, return Model objects instead of dicts. Default False

**Returns:** `List[Dict]` or `List[Model]` - List of model info dicts, or Model objects if `return_clarifai_model=True`

### User.list_organizations

```python
User.list_organizations()
```

List organizations the user belongs to via REST API.

**Returns:** `List[Dict]` - List of dicts with 'id' and 'name' keys for each organization

### User.list_pipeline_steps

```python
User.list_pipeline_steps(page_no=None, per_page=None)
```

List all pipeline steps for the user across all apps.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `PipelineStep` - PipelineStep objects

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_pipeline_steps = list(client.list_pipeline_steps())
```

### User.list_pipelines

```python
User.list_pipelines(page_no=None, per_page=None)
```

List all pipelines for the user across all apps.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Pipeline` - Pipeline objects

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_pipelines = list(client.list_pipelines())
```

### User.list_runners

```python
User.list_runners(filter_by={}, page_no=None, per_page=None)
```

List all runners for the user.

**Parameters:**
- `filter_by` (*dict*) - A dictionary of filters to apply to the list of runners
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Dict` - Dictionaries containing information about the runners

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_runners = list(client.list_runners())
```

### User.list_secrets

```python
User.list_secrets(page_no=None, per_page=None)
```

List all secrets for the user.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Dict` - Dictionaries containing information about the secrets

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_secrets = list(client.list_secrets())
```

### User.patch_app

```python
User.patch_app(app_id, action='overwrite', **kwargs)
```

Patch an app for the user.

**Parameters:**
- `app_id` (*str*) - The app ID for the app to patch
- `action` (*str*) - The action to perform: overwrite/remove. Default 'overwrite'
- `**kwargs` - Additional keyword arguments to patch the App

**Returns:** `App` - Patched App object for the specified app ID

### User.patch_secrets

```python
User.patch_secrets(secrets, action='overwrite')
```

Patches secrets for the user.

**Parameters:**
- `secrets` (*List[Dict[str, Any]]*) - List of secret configurations to patch. Each secret dict should contain:
  - `id` (*str*) - The name/ID of the secret to patch (required)
  - `value` (*str*) - Optional new secret value
  - `description` (*str*) - Optional new description
  - `expires_at` (*str*) - Optional new expiration timestamp
- `action` (*str*) - The action to perform: overwrite/remove. Default 'overwrite'

**Returns:** `List[Dict]` - List of dictionaries containing information about the patched secrets

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
secrets = [{"id": "secret1", "description": "Updated Secret Description"}]
patched_secrets = client.patch_secrets(secrets, action="overwrite")
```

### User.runner

```python
User.runner(runner_id)
```

Returns a Runner object if it exists.

**Parameters:**
- `runner_id` (*str*) - The runner ID to interact with

**Returns:** `Dict` - A dictionary containing information about the existing runner ID

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
runner_info = client.runner(runner_id="runner_id")
```

---

## [Workflow](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/workflow.py)

```python
class Workflow(url=None, workflow_id=None, workflow_version={'id': ""}, output_config={'min_value': 0}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Workflow is a class that provides access to Clarifai API endpoints related to Workflow information.

**Parameters:**
- `url` (*str*) - The URL to initialize the workflow object
- `workflow_id` (*str*) - The Workflow ID to interact with
- `workflow_version` (*Dict[str, str]*) - The Workflow Version to interact with. Default `{'id': ""}` for latest version
- `output_config` (*Dict[str, Any]*) - The output config to interact with:
  - `min_value` (*float*) - The minimum value of the prediction confidence to filter
  - `max_concepts` (*int*) - The maximum number of concepts to return
  - `select_concepts` (*List[Concept]*) - The concepts to select
  - `sample_ms` (*int*) - The number of milliseconds to sample
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file

### Workflow.export

```python
Workflow.export(out_path)
```

Exports the workflow to a yaml file.

**Parameters:**
- `out_path` (*str*) - The path to save the yaml file to

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Demographics")
workflow.export('out_path.yml')
```

### Workflow.list_versions

```python
Workflow.list_versions(page_no=None, per_page=None)
```

Lists all the versions of the workflow.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:** `Workflow` - Workflow objects for versions of the workflow

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
workflow_versions = list(workflow.list_versions())
```

**Note:** Defaults to 16 per page if `page_no` is specified and `per_page` is not. If both are None, lists all resources.

### Workflow.load_info

```python
Workflow.load_info()
```

Loads the workflow info, including input types for the first node's model.

### Workflow.predict

```python
Workflow.predict(inputs, workflow_state_id=None)
```

Predicts the workflow based on the given inputs.

**Parameters:**
- `inputs` (*List[Input]*) - The inputs to predict (max 32)
- `workflow_state_id` (*str*) - Key for the workflow state cache that stores the workflow node predictions

**Returns:** Response from the workflow prediction

### Workflow.predict_by_bytes

```python
Workflow.predict_by_bytes(input_bytes, input_type=None)
```

Predicts the workflow based on the given bytes.

**Parameters:**
- `input_bytes` (*bytes*) - Bytes to predict on
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'

**Returns:** Response from the workflow prediction

### Workflow.predict_by_filepath

```python
Workflow.predict_by_filepath(filepath, input_type=None)
```

Predicts the workflow based on the given filepath.

**Parameters:**
- `filepath` (*str*) - The filepath to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'

**Returns:** Response from the workflow prediction

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Face-Sentiment")
workflow_prediction = workflow.predict_by_filepath('filepath')
```

### Workflow.predict_by_url

```python
Workflow.predict_by_url(url, input_type=None)
```

Predicts the workflow based on the given URL.

**Parameters:**
- `url` (*str*) - The URL to predict
- `input_type` (*str*) - The type of input: 'image', 'text', 'video', or 'audio'

**Returns:** Response from the workflow prediction

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Face-Sentiment")
workflow_prediction = workflow.predict_by_url('url')
```
