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

Creates concept relations between concepts.

**Parameters:**
- `subject_concept_id` (*str*) - Subject concept ID
- `object_concept_ids` (*List[str]*) - Object concept IDs
- `predicates` (*List[str]*) - Relation predicates

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.create_concept_relations(
    subject_concept_id="subject_id",
    object_concept_ids=["object_id_1", "object_id_2"],
    predicates=["predicate_1", "predicate_2"]
)
```

### App.create_dataset

```python
App.create_dataset(dataset_id, **kwargs) 
```

Creates a dataset in the app.

**Parameters:**
- `dataset_id` (*str*) - The dataset ID to create
- `**kwargs` - Additional dataset arguments

**Returns:**
- Dataset object for the created dataset

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

Creates a model in the app.

**Parameters:**
- `model_id` (*str*) - The model ID to create
- `**kwargs` - Additional model arguments

**Returns:**
- Model object for the created model

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
model = app.create_model(model_id="model_id")
```

### App.create_module

```python
App.create_module(module_id, description, **kwargs) 
```

Creates a module in the app.

**Parameters:**
- `module_id` (*str*) - The module ID to create
- `description` (*str*) - Module description
- `**kwargs` - Additional module arguments

**Returns:**
- Module object for the created module

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
module = app.create_module(module_id="module_id", description="Module description")
```

### App.create_workflow

```python
App.create_workflow(config_filepath, generate_new_id=False, display=True) 
```

Creates a workflow in the app.

**Parameters:**
- `config_filepath` (*str*) - Path to workflow config YAML file
- `generate_new_id` (*bool*) - Generate new workflow ID if True
- `display` (*bool*) - Display workflow tree if True

**Returns:**
- Workflow object for the created workflow

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

Returns a Dataset object.

**Parameters:**
- `dataset_id` (*str*) - Dataset ID to get
- `dataset_version_id` (*str*) - Optional dataset version ID
- `**kwargs` - Additional arguments

**Returns:**
- Dataset object for the specified ID

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

Deletes concept relations for a concept.

**Parameters:**
- `concept_id` (*str*) - Concept ID to delete relations for
- `concept_relation_ids` (*List[str]*) - Optional specific relation IDs to delete

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_concept_relations(concept_id="concept_id")
```

### App.delete_dataset

```python
App.delete_dataset(dataset_id) 
```

Deletes a dataset by ID.

**Parameters:**
- `dataset_id` (*str*) - Dataset ID to delete

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

Deletes a model by ID.

**Parameters:**
- `model_id` (*str*) - Model ID to delete

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_model(model_id="model_id")
```

### App.delete_module

```python
App.delete_module(module_id) 
```

Deletes a module by ID.

**Parameters:**
- `module_id` (*str*) - Module ID to delete

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_module(module_id="module_id")
```

### App.delete_workflow

```python
App.delete_workflow(workflow_id) 
```

Deletes a workflow by ID.

**Parameters:**
- `workflow_id` (*str*) - Workflow ID to delete

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

Gets count of all inputs in the app.

**Returns:**
- Total number of processed inputs

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
count = app.get_input_count()
```

### App.inputs

```python
App.inputs()
```

Returns an Input object.

**Returns:**
- Inputs object for managing app inputs

### App.list_concepts

```python
App.list_concepts(page_no=None, per_page=None)
```

Lists all concepts in the app.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Concept objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
concepts = list(app.list_concepts())
```

### App.list_datasets

```python
App.list_datasets(page_no=None, per_page=None)
```

Lists all datasets in the app.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Dataset objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
datasets = list(app.list_datasets())
```

### App.list_installed_module_versions

```python
App.list_installed_module_versions(filter_by={}, page_no=None, per_page=None)
```

Lists installed module versions.

**Parameters:**
- `filter_by` (*dict*) - Filters to apply
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Module objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
versions = list(app.list_installed_module_versions())
```

### App.list_models

```python
App.list_models(filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists models in the app.

**Parameters:**
- `filter_by` (*dict*) - Filters to apply
- `only_in_app` (*bool*) - Only list app models if True
- `page_no` (*int*) - Page number to list 
- `per_page` (*int*) - Items per page

**Yields:**
- Model objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
models = list(app.list_models())
```

### App.list_modules

```python
App.list_modules(filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists modules in the app.

**Parameters:**
- `filter_by` (*dict*) - Filters to apply
- `only_in_app` (*bool*) - Only list app modules if True
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Module objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
modules = list(app.list_modules())
```

### App.list_pipelines

```python
App.list_pipelines(filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists all pipelines for the user.

**Parameters:**
- `filter_by` (*dict*) - Filters to apply
- `only_in_app` (*bool*) - Only list app pipelines if True
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Pipeline objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
pipelines = list(app.list_pipelines())
```

### App.list_pipeline_steps

```python
App.list_pipeline_steps(pipeline_id=None, filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists all pipeline steps for the user.

**Parameters:**
- `pipeline_id` (*str*) - Optional pipeline ID to filter steps
- `filter_by` (*dict*) - Filters to apply
- `only_in_app` (*bool*) - Only list app pipeline steps if True
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- PipelineStep objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
pipeline_steps = list(app.list_pipeline_steps())
```

### App.list_trainable_model_types

```python
App.list_trainable_model_types()
```

Lists trainable model types.

**Returns:**
- List of trainable model type names

**Example:**
```python
from clarifai.client.app import App
types = app.list_trainable_model_types()
```

### App.list_workflows

```python
App.list_workflows(filter_by={}, only_in_app=True, page_no=None, per_page=None)
```

Lists workflows in the app.

**Parameters:**
- `filter_by` (*dict*) - Filters to apply
- `only_in_app` (*bool*) - Only list app workflows if True
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Workflow objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
workflows = list(app.list_workflows())
```

### App.model

```python
App.model(model_id, model_version={'id': ""}, **kwargs)
```

Returns a Model object.

**Parameters:**
- `model_id` (*str*) - Model ID to get
- `model_version` (*Dict*) - Optional model version info
- `**kwargs` - Additional arguments

**Returns:**
- Model object for specified ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
model = app.model(model_id="model_id", model_version={"id": "model_version_id"})
```

### App.module

```python
App.module(module_id, **kwargs)
```

Returns a Module object.

**Parameters:**
- `module_id` (*str*) - Module ID to get
- `**kwargs` - Additional arguments

**Returns:**
- Module object for specified ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
module = app.module(module_id="module_id")
```

### App.patch_dataset

```python
App.patch_dataset(dataset_id, action='merge', **kwargs)
```

Updates a dataset.

**Parameters:**
- `dataset_id` (*str*) - Dataset ID to update
- `action` (*str*) - Update action ('merge'/'overwrite'/'remove')
- `**kwargs` - Properties to update

**Returns:**
- Updated Dataset object

### App.patch_model

```python
App.patch_model(model_id, action='merge', **kwargs)
```

Updates a model.

**Parameters:**
- `model_id` (*str*) - Model ID to update
- `action` (*str*) - Update action ('merge'/'overwrite'/'remove')
- `**kwargs` - Properties to update

**Returns:**
- Updated Model object

### App.patch_workflow

```python
App.patch_workflow(workflow_id, action='merge', config_filepath=None, **kwargs)
```

Updates a workflow by workflow id.

**Parameters:**
- `workflow_id` (*str*) - The Workflow ID to patch
- `action` (*str*) - Action to perform ('merge'/'overwrite'/'remove')
- `config_filepath` (*str*) - Optional path to workflow config YAML file
- `**kwargs` - Additional properties to update

**Returns:**
- Updated Workflow object

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
workflow = app.patch_workflow(workflow_id="workflow_id", description="New description")
```

### App.search

```python
App.search(**kwargs)
```

Returns a Search object for the user and app ID.

**Parameters:**
- See the Search class in clarifai.client.search for kwargs

**Returns:**
- Search object for the user and app ID

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

Lists all concept relations of the app.

**Parameters:**
- `concept_id` (*str*) - The concept ID to filter the concept relations
- `predicate` (*str*) - Type of relation to filter ('hypernym', 'hyponym', 'synonym')
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page
- `show_tree` (*bool*) - If True, prints rich tree representation of concept relations

**Yields:**
- ConceptRelation objects

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
relations = list(app.search_concept_relations())
```

### App.workflow

```python
App.workflow(workflow_id, **kwargs)
```

Returns a workflow object for the existing workflow ID.

**Parameters:**
- `workflow_id` (*str*) - The workflow ID to interact with
- `**kwargs` - Additional keyword arguments

**Returns:**
- Workflow object for the specified ID

**Example:**
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
workflow = app.workflow(workflow_id="workflow_id")
```

**Notes:** For list methods: Defaults to 16 per page if page_no is specified and per_page is not specified. If both page_no and per_page are None, then lists all resources. The App class inherits from Lister and BaseClient, providing pagination and authentication functionality.

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
- `token` (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections
- `**kwargs` - Additional keyword arguments to be passed to the compute cluster

### ComputeCluster.list_nodepools

```python
ComputeCluster.list_nodepools(page_no=None, per_page=None)
```

Lists all the available nodepools of the compute cluster.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:**
- Nodepool objects for the nodepools in the compute cluster

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(compute_cluster_id="compute_cluster_id", user_id="user_id")
all_nodepools = list(compute_cluster.list_nodepools())
```

**Note:**
Defaults to 16 per page if page_no is specified and per_page is not specified.
If both page_no and per_page are None, then lists all the resources.

### ComputeCluster.create_nodepool

```python
ComputeCluster.create_nodepool(config_filepath=None, nodepool_id=None, nodepool_config=None)
```

Creates a nodepool for the compute cluster.

**Parameters:**
- `config_filepath` (*str*) - The path to the nodepool config file
- `nodepool_id` (*str*) - New nodepool ID for the nodepool to create
- `nodepool_config` (*Dict[str, Any]*) - Nodepool configuration dictionary

**Returns:**
- Nodepool: A Nodepool object for the specified nodepool ID

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(compute_cluster_id="compute_cluster_id", user_id="user_id")
nodepool = compute_cluster.create_nodepool(config_filepath="config.yml")
```

**Note:**
Either config_filepath or nodepool_config must be provided, but not both.

### ComputeCluster.nodepool

```python
ComputeCluster.nodepool(nodepool_id)
```

Returns a Nodepool object for the existing nodepool ID.

**Parameters:**
- `nodepool_id` (*str*) - The nodepool ID for the nodepool to interact with

**Returns:**
- Nodepool: A Nodepool object for the existing nodepool ID

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(compute_cluster_id="compute_cluster_id", user_id="user_id")
nodepool = compute_cluster.nodepool(nodepool_id="nodepool_id")
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
- `token` (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections
- `**kwargs` - Additional keyword arguments to be passed to the Dataset

### Dataset.create_version

```python
Dataset.create_version(**kwargs)
```

Creates a dataset version for the Dataset.

**Parameters:**
- `**kwargs` - Additional keyword arguments to be passed to Dataset Version:
  - `description` (*str*) - The description of the dataset version
  - `metadata` (*Dict[str, Any]*) - The metadata dictionary for the dataset version

**Returns:**
- Dataset: A Dataset object for the newly created dataset version

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

### Dataset.list_versions

```python
Dataset.list_versions(page_no=None, per_page=None)
```

Lists all the versions for the dataset.

**Parameters:**
- `page_no` (*int*) - The page number to list. If None, lists all pages
- `per_page` (*int*) - The number of items per page. If None, uses default

**Yields:**
- Dataset: Dataset objects for the versions of the dataset

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
all_dataset_versions = list(dataset.list_versions())
```

**Note:**
Defaults to 16 per page if page_no is specified and per_page is not specified.
If both page_no and per_page are None, then lists all the resources.

### Dataset.list_inputs

```python
Dataset.list_inputs(page_no=None, per_page=None, input_type=None)
```

Lists all the inputs for the dataset.

**Parameters:**
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page
- `input_type` (*str*) - The type of input to list. Options: 'image', 'video', 'audio', 'text'

**Yields:**
- Input: Input objects in the dataset

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
all_dataset_inputs = list(dataset.list_inputs())
```

### Dataset.upload_dataset

```python
Dataset.upload_dataset(dataloader, batch_size=32, get_upload_status=False, log_warnings=False, **kwargs)
```

Uploads a dataset to the app.

**Parameters:**
- `dataloader` (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
- `batch_size` (*int*) - Batch size for concurrent upload of inputs and annotations (max: 128)
- `get_upload_status` (*bool*) - True if you want to get the upload status of the dataset
- `log_warnings` (*bool*) - True if you want to save log warnings in a file
- `**kwargs` - Additional keyword arguments for retry uploading functionality

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id')
dataset.upload_dataset(dataloader=my_dataloader)
```

### Dataset.retry_upload_from_logs

```python
Dataset.retry_upload_from_logs(log_file_path, dataloader, retry_duplicates=False, log_warnings=False, **kwargs)
```

Retries failed uploads from the log file.

**Parameters:**
- `log_file_path` (*str*) - Path to the log file
- `dataloader` (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
- `retry_duplicates` (*bool*) - True if you want to retry duplicate inputs
- `log_warnings` (*bool*) - True if you want to save log warnings in a file
- `**kwargs` - Additional keyword arguments for retry uploading functionality

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id')
dataset.retry_upload_from_logs(log_file_path='upload.log', dataloader=my_dataloader)
```

### Dataset.upload_from_csv

```python
Dataset.upload_from_csv(csv_path, input_type='text', csv_type=None, labels=True, batch_size=128)
```

Uploads dataset from a csv file.

**Parameters:**
- `csv_path` (*str*) - Path to the csv file
- `input_type` (*str*) - Type of the dataset ('text', 'image', 'video', 'audio')
- `csv_type` (*str*) - Type of the csv file ('raw', 'url', 'file_path')
- `labels` (*bool*) - True if csv file has labels column
- `batch_size` (*int*) - Batch size for concurrent upload of inputs and annotations

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id='user_id', app_id='demo_app', dataset_id='demo_dataset')
dataset.upload_from_csv(csv_path='csv_path', input_type='text', csv_type='raw', labels=True)
```

**Note:**
CSV file supports 'inputid', 'input', 'concepts', 'metadata', 'geopoints' columns.
All the data in the CSV should be in double quotes.
metadata should be in single quotes format. Example: `"{'key': 'value'}"`
geopoints should be in "long,lat" format.

### Dataset.upload_from_folder

```python
Dataset.upload_from_folder(folder_path, input_type, labels=False, batch_size=128)
```

Upload dataset from folder.

**Parameters:**
- `folder_path` (*str*) - Path to the folder containing images
- `input_type` (*str*) - Type of the dataset ('text', 'image')
- `labels` (*bool*) - True if folder name is the label for the inputs
- `batch_size` (*int*) - Batch size for concurrent upload of inputs and annotations

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id='user_id', app_id='demo_app', dataset_id='demo_dataset')
dataset.upload_from_folder(folder_path='folder_path', input_type='text', labels=True)
```

**Note:** The filename is used as the input_id.

### Dataset.get_upload_status

```python
Dataset.get_upload_status(dataloader=None, delete_version=False, timeout=600, pre_upload_stats=None, pre_upload=False)
```

Creates a new dataset version and displays the upload status of the dataset.

**Parameters:**
- `dataloader` (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
- `delete_version` (*bool*) - True if you want to delete the version after getting the upload status
- `timeout` (*int*) - Timeout in seconds for getting the upload status. Default is 600 seconds
- `pre_upload_stats` (*Tuple[Dict[str, int], Dict[str, int]]*) - The pre upload stats for the dataset
- `pre_upload` (*bool*) - True if you want to get the pre upload stats for the dataset

**Returns:**
- Optional[Tuple[Dict[str, int], Dict[str, int]]]: Pre-upload statistics if pre_upload=True

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.get_upload_status(dataloader=my_dataloader)
```

**Note:**
This is a beta feature and is subject to change.

### Dataset.merge_dataset

```python
Dataset.merge_dataset(merge_dataset_id)
```

Merges the another dataset into current dataset.

**Parameters:**
- `merge_dataset_id` (*str*) - The dataset ID of the dataset to merge

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.merge_dataset(merge_dataset_id='merge_dataset_id')
```

### Dataset.archive_zip

```python
Dataset.archive_zip(wait=True)
```

Exports the dataset to a zip file URL.

**Parameters:**
- `wait` (*bool*) - Wait for export completion if True

**Returns:**
- URL to download the archive

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id')
archive_url = dataset.archive_zip()
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
- `split` (*str*) - Export dataset inputs in the directory format `{split}/{input_type}`. Default is 'all'
- `num_workers` (*int*) - Number of workers to use for downloading the archive. Default is 4

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id')
dataset.export(save_path='output.zip')
```

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
- `token` (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections
- `**kwargs` - Additional keyword arguments to be passed to the deployment

### Deployment.get_runner_selector

```python
Deployment.get_runner_selector(user_id, deployment_id)
```

Returns a RunnerSelector object for the given deployment_id.

**Parameters:**
- `user_id` (*str*) - The user ID for the deployment
- `deployment_id` (*str*) - The deployment ID for the deployment

**Returns:**
- `resources_pb2.RunnerSelector`: A RunnerSelector object for the given deployment_id

**Example:**
```python
from clarifai.client.deployment import Deployment
runner_selector = Deployment.get_runner_selector(user_id="user_id", deployment_id="deployment_id")
```

## [Inputs](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/input.py)

```python
class Inputs(user_id=None, app_id=None, logger_level="INFO", base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Inputs is a class that provides access to Clarifai API endpoints related to Input information.

**Parameters:**
- `user_id` (*str*) - A user ID for authentication
- `app_id` (*str*) - An app ID for the application to interact with
- `logger_level` (*str*) - Logging level. Default "INFO"
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections
- `**kwargs` - Additional keyword arguments to be passed to the Input

### Inputs.get_input

```python
Inputs.get_input(input_id)
```

Get Input object of input with input_id provided from the app.

**Parameters:**
- `input_id` (*str*) - The input ID for the annotation to get

**Returns:**
- Input: An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.get_input(input_id='demo')
```

### Inputs.get_input_from_url

```python
Inputs.get_input_from_url(input_id, image_url=None, video_url=None, audio_url=None, text_url=None, dataset_id=None, **kwargs)
```

Create input proto from url.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_url` (*str*) - The url for the image
- `video_url` (*str*) - The url for the video
- `audio_url` (*str*) - The url for the audio
- `text_url` (*str*) - The url for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `**kwargs` - Additional keyword arguments

**Returns:**
- Input: An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_input_from_url(input_id='demo', image_url='https://samples.clarifai.com/metro-north.jpg')
```

### Inputs.get_input_from_file

```python
Inputs.get_input_from_file(input_id, image_file=None, video_file=None, audio_file=None, text_file=None, dataset_id=None, **kwargs)
```

Create input proto from files.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_file` (*str*) - The file_path for the image
- `video_file` (*str*) - The file_path for the video
- `audio_file` (*str*) - The file_path for the audio
- `text_file` (*str*) - The file_path for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `**kwargs` - Additional keyword arguments

**Returns:**
- Input: An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_input_from_file(input_id='demo', video_file='file_path')
```

### Inputs.get_input_from_bytes

```python
Inputs.get_input_from_bytes(input_id, image_bytes=None, video_bytes=None, audio_bytes=None, text_bytes=None, dataset_id=None, **kwargs)
```

Create input proto from bytes.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `image_bytes` (*bytes*) - The bytes for the image
- `video_bytes` (*bytes*) - The bytes for the video
- `audio_bytes` (*bytes*) - The bytes for the audio
- `text_bytes` (*bytes*) - The bytes for the text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `**kwargs` - Additional keyword arguments

**Returns:**
- Input: An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
image = open('demo.jpg', 'rb').read()
video = open('demo.mp4', 'rb').read()
input_proto = Inputs.get_input_from_bytes(input_id='demo', image_bytes=image, video_bytes=video)
```

### Inputs.get_image_inputs_from_folder

```python
Inputs.get_image_inputs_from_folder(folder_path, dataset_id=None, labels=False)
```

Create input protos for image data type from folder.

**Parameters:**
- `folder_path` (*str*) - Path to the folder containing images
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `labels` (*bool*) - Use folder name as label if True

**Returns:**
- List[Input]: A list of Input objects for the specified folder

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_image_inputs_from_folder(folder_path='demo_folder')
```

### Inputs.get_text_input

```python
Inputs.get_text_input(input_id, raw_text, dataset_id=None, **kwargs)
```

Create input proto for text data type from raw text.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `raw_text` (*str*) - The raw text input
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `**kwargs` - Additional keyword arguments

**Returns:**
- Text: An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_text_input(input_id='demo', raw_text='This is a test')
```

### Inputs.get_multimodal_input

```python
Inputs.get_multimodal_input(input_id, raw_text=None, text_bytes=None, image_url=None, image_bytes=None, dataset_id=None, **kwargs)
```

Create input proto for text and image from bytes or url.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `raw_text` (*str*) - The raw text input
- `text_bytes` (*bytes*) - The bytes for the text
- `image_url` (*str*) - The url for the image
- `image_bytes` (*bytes*) - The bytes for the image
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `**kwargs` - Additional keyword arguments

**Returns:**
- Input: An Input object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_multimodal_input(input_id='demo', raw_text='What time of day is it?', image_url='https://samples.clarifai.com/metro-north.jpg')
```

### Inputs.get_inputs_from_csv

```python
Inputs.get_inputs_from_csv(csv_path, input_type='text', csv_type='raw', dataset_id=None, labels=True)
```

Create input protos from csv.

**Parameters:**
- `csv_path` (*str*) - Path to the csv file
- `input_type` (*str*) - Type of input. Options: 'text', 'image', 'video', 'audio'
- `csv_type` (*str*) - Type of csv file. Options: 'raw', 'url', 'file_path'
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `labels` (*bool*) - True if csv file has labels column

**Returns:**
- List[Text]: List of input protos

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_inputs_from_csv(csv_path='filepath', input_type='text', csv_type='raw')
```

### Inputs.get_text_inputs_from_folder

```python
Inputs.get_text_inputs_from_folder(folder_path, dataset_id=None, labels=False)
```

Create input protos for text data type from folder.

**Parameters:**
- `folder_path` (*str*) - Path to the folder containing text files
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `labels` (*bool*) - Use folder name as label if True

**Returns:**
- List[Text]: A list of Input objects for the specified folder

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_text_inputs_from_folder(folder_path='demo_folder')
```

### Inputs.get_bbox_proto

```python
Inputs.get_bbox_proto(input_id, label, bbox, label_id=None, annot_id=None)
```

Create an annotation proto for each bounding box, label input pair.

**Parameters:**
- `input_id` (*str*) - The input ID for the annotation to create
- `label` (*str*) - Annotation label name
- `bbox` (*List*) - A list of a single bbox's coordinates [xmin, ymin, xmax, ymax]
- `label_id` (*str*) - Annotation label ID
- `annot_id` (*str*) - Annotation ID

**Returns:**
- Annotation: An annotation object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
Inputs.get_bbox_proto(input_id='demo', label='demo', bbox=[x_min, y_min, x_max, y_max])
```

### Inputs.get_mask_proto

```python
Inputs.get_mask_proto(input_id, label, polygons, label_id=None, annot_id=None)
```

Create an annotation proto for each polygon box, label input pair.

**Parameters:**
- `input_id` (*str*) - The input ID for the annotation to create
- `label` (*str*) - Annotation label name
- `polygons` (*List[List[float]]*) - Polygon x,y points iterable
- `label_id` (*str*) - Annotation label ID
- `annot_id` (*str*) - Annotation ID

**Returns:**
- Annotation: An annotation object for the specified input ID

**Example:**
```python
from clarifai.client.input import Inputs
Inputs.get_mask_proto(input_id='demo', label='demo', polygons=[[[x,y],...,[x,y]],...])
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
- `**kwargs` - Additional keyword arguments

**Returns:**
- input_job_id: job id for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.upload_from_url(input_id='demo', image_url='https://samples.clarifai.com/metro-north.jpg')
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
- `**kwargs` - Additional keyword arguments

**Returns:**
- input_job_id: job id for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.upload_from_file(input_id='demo', audio_file='demo.mp3')
```

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
- `**kwargs` - Additional keyword arguments

**Returns:**
- input_job_id: job id for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
image = open('demo.jpg', 'rb').read()
input_obj.upload_from_bytes(input_id='demo', image_bytes=image)
```

### Inputs.upload_text

```python
Inputs.upload_text(input_id, raw_text, dataset_id=None, **kwargs)
```

Upload text from raw text.

**Parameters:**
- `input_id` (*str*) - The input ID for the input to create
- `raw_text` (*str*) - The raw text
- `dataset_id` (*str*) - The dataset ID for the dataset to add the input to
- `**kwargs` - Additional keyword arguments

**Returns:**
- input_job_id: job id for the upload request

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.upload_text(input_id='demo', raw_text='This is a test')
```

### Inputs.upload_inputs

```python
Inputs.upload_inputs(inputs, show_log=True)
```

Upload list of input objects to the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to upload
- `show_log` (*bool*) - Show upload status log

**Returns:**
- Tuple of (input_job_id, response)

### Inputs.patch_inputs

```python
Inputs.patch_inputs(inputs, action='merge')
```

Patch list of input objects to the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to upload
- `action` (*str*) - Action to perform on the input. Options: 'merge', 'overwrite', 'remove'

**Returns:**
- Response from the grpc request

### Inputs.upload_annotations

```python
Inputs.upload_annotations(batch_annot, show_log=True)
```

Upload image annotations to app.

**Parameters:**
- `batch_annot` (*List[resources_pb2.Annotation]*) - Annotation batch protos
- `show_log` (*bool*) - Show upload status log

**Returns:**
- Union[List[resources_pb2.Annotation], List[None]]: Failed annotation uploads for retry

### Inputs.patch_annotations

```python
Inputs.patch_annotations(batch_annot, action='merge')
```

Patch image annotations to app.

**Parameters:**
- `batch_annot` (*List[resources_pb2.Annotation]*) - Annotation batch protos
- `action` (*str*) - Action to perform on the input. Options: 'merge', 'overwrite', 'remove'

### Inputs.patch_concepts

```python
Inputs.patch_concepts(concept_ids, labels=[], values=[], action='overwrite')
```

Patch concepts to app.

**Parameters:**
- `concept_ids` (*List[str]*) - A list of concept IDs
- `labels` (*List[str]*) - A list of label names
- `values` (*List[float]*) - Concept values
- `action` (*str*) - Action to perform on the input. Options: 'overwrite'

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

### Inputs.delete_annotations

```python
Inputs.delete_annotations(input_ids, annotation_ids=[])
```

Delete list of annotations of input objects from the app.

**Parameters:**
- `input_ids` (*List[str]*) - List of input objects for which annotations to delete
- `annotation_ids` (*List[str]*) - List of annotation ids to delete

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.delete_annotations(input_ids=['input_id_1', 'input_id_2'])
```

**Note:**
'annotation_ids' are optional but if they are provided, the number and order in 'annotation_ids' and 'input_ids' should match

### Inputs.download_inputs

```python
Inputs.download_inputs(inputs)
```

Download list of input objects from the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to download

**Returns:**
- List[bytes]: Downloaded input content

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.download_inputs(list(input_obj.list_inputs()))
```

### Inputs.list_inputs

```python
Inputs.list_inputs(dataset_id=None, page_no=None, per_page=None, input_type=None)
```

Lists all the inputs for the app.

**Parameters:**
- `dataset_id` (*str*) - The dataset ID for the dataset to list inputs from
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page
- `input_type` (*str*) - The type of input to list. Options: 'image', 'video', 'audio', 'text'

**Yields:**
- Input: Input objects for the app

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
all_inputs = list(input_obj.list_inputs(input_type='image'))
```

**Note:**
Defaults to 16 per page if page_no is specified and per_page is not specified.
If both page_no and per_page are None, then lists all the resources.

### Inputs.list_annotations

```python
Inputs.list_annotations(batch_input=None, page_no=None, per_page=None)
```

Lists all the annotations for the app.

**Parameters:**
- `batch_input` (*List[Input]*) - The input objects to list annotations from
- `page_no` (*int*) - The page number to list
- `per_page` (*int*) - The number of items per page

**Yields:**
- Annotation: Annotation objects for the app

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
all_inputs = list(input_obj.list_inputs(input_type='image'))
all_annotations = list(input_obj.list_annotations(batch_input=all_inputs))
```

**Note:** If batch_input is not given, then lists all the annotations for the app.
Defaults to 16 per page if page_no is specified and per_page is not specified.
If both page_no and per_page are None, then lists all the resources.


Based on the provided file content, here's the API Reference for the Lister class:

## [Lister](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/lister.py)

```python
class Lister(page_size=16)
```

Lister class for obtaining paginated results from the Clarifai API.

**Parameters:**
- `page_size` (*int*) - Default number of items per page. Default is 16

### Lister.list_pages_generator

```python
Lister.list_pages_generator(endpoint, proto_message, request_data, page_no=None, per_page=None)
```

Lists pages of a resource using a generator for efficient pagination.

**Parameters:**
- `endpoint` (*Callable*) - The gRPC endpoint function to call
- `proto_message` (*Any*) - The proto message class to use for the request
- `request_data` (*Dict[str, Any]*) - The request data dictionary to populate the proto message
- `page_no` (*int*) - The specific page number to list. If None, lists all pages
- `per_page` (*int*) - The number of items per page. If None, uses default page size

**Yields:**
- Dict[str, Any]: The next item in the listing, with response keys processed for consistency

**Raises:**
- Exception: If the listing fails with a non-success status code

**Behavior:**
- When both `page_no` and `per_page` are None, iterates through all pages automatically
- When `page_no` is specified but `per_page` is not, uses the default page size
- When either `page_no` or `per_page` is specified, returns only that specific page
- Processes response keys to maintain consistent naming across different resource types
- Handles special cases like "dataset_inputs" resource type

**Example Usage:**
```python
# List all resources across all pages
for item in lister.list_pages_generator(
    endpoint=stub.ListModels,
    proto_message=service_pb2.ListModelsRequest,
    request_data={'user_app_id': user_app_id}
):
    print(item)

# List a specific page
for item in lister.list_pages_generator(
    endpoint=stub.ListModels,
    proto_message=service_pb2.ListModelsRequest,
    request_data={'user_app_id': user_app_id},
    page_no=2,
    per_page=20
):
    print(item)
```

**Notes:** This class is typically used as a mixin with other client classes that need paginated listing functionality. The default page size of 16 is optimized for API performance and rate limiting considerations. The method handles special resource types like "dataset_inputs" that require specific key processing.

## [Model](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/model.py)

```python
class Model(url=None, model_id=None, model_version={'id': ""}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, deployment_user_id=None, **kwargs)
```

Model is a class that provides access to Clarifai API endpoints related to Model information.

**Parameters:**
- `url` (*str*) - URL to initialize model object
- `model_id` (*str*) - Model ID to interact with
- `model_version` (*Dict*) - Model version details with id
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication
- `token` (*str*) - Session token for authentication
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `compute_cluster_id` (*str*) - Compute cluster ID for runner selector
- `nodepool_id` (*str*) - Nodepool ID for runner selector
- `deployment_id` (*str*) - Deployment ID for runner selector
- `deployment_user_id` (*str*) - User ID for runner selector (organization or user)
- `**kwargs` - Additional keyword arguments

**Note:** Either url or model_id must be specified, but not both.

### Model.from_current_context
```python
Model.from_current_context(**kwargs)
```
This Class method creates a Model instance from the current context.

**Parameters:**
- `**kwargs` - Additional keyword arguments

**Returns:**
- Model instance

### Model.list_training_templates

```python
Model.list_training_templates()
```

Lists all training templates for the model type.

**Returns:**
- List of available training templates

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
templates = model.list_training_templates()
```

### Model.get_params

```python
Model.get_params(template=None, save_to='params.yaml')
```

Gets model parameters for training.

**Parameters:**
- `template` (*str*) - Template to use for model type
- `save_to` (*str*) - YAML file path to save parameters

**Returns:**
- Dictionary of model parameters

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
params = model.get_params(template='template', save_to='model_params.yaml')
```

### Model.update_params

```python
Model.update_params(**kwargs)
```

Updates model training parameters.

**Parameters:**
- `**kwargs` - Parameter key-value pairs to update

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model.update_params(batch_size=8, dataset_version='dataset_version_id')
```

### Model.get_param_info

```python
Model.get_param_info(param)
```

Gets information about a specific parameter.

**Parameters:**
- `param` (*str*) - Parameter name to get info for

**Returns:**
- Dictionary with parameter information

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
param_info = model.get_param_info('learning_rate')
```

### Model.train

```python
Model.train(yaml_file=None)
```

Trains the model using specified parameters.

**Parameters:**
- `yaml_file` (*str*) - YAML file containing training parameters

**Returns:**
- Model version ID of trained model

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
version_id = model.train('model_params.yaml')
```

### Model.training_status

```python
Model.training_status(version_id=None, training_logs=False)
```

Gets training status for a model version.

**Parameters:**
- `version_id` (*str*) - Version ID to check status for
- `training_logs` (*bool*) - Save training logs to file if True

**Returns:**
- Dictionary with training status information

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
status = model.training_status(version_id='version_id', training_logs=True)
```

### Model.delete_version

```python
Model.delete_version(version_id)
```

Deletes a model version.

**Parameters:**
- `version_id` (*str*) - Version ID to delete

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model.delete_version('version_id')
```

### Model.create_version

```python
Model.create_version(**kwargs)
```

Creates a new model version.

**Parameters:**
- `**kwargs` - Version parameters including:
  - `description` (*str*) - Version description
  - `concepts` (*list*) - Associated concepts
  - `output_info` (*OutputInfo*) - Output configuration

**Returns:**  
- New Model object for created version

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
new_version = model.create_version(description='New version')
```

### Model.list_versions

```python
Model.list_versions(page_no=None, per_page=None)
```

Lists all versions of the model.

**Parameters:**
- `page_no` (*int*) - Page number for pagination
- `per_page` (*int*) - Items per page

**Yields:**
- Model objects for each version

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
versions = list(model.list_versions())
```

### Model.predict

```python
Model.predict(inputs, inference_params={}, output_config={})
```

Makes predictions using the model.

**Parameters:**
- `inputs` (*List[Input]*) - List of inputs to predict on
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Prediction response

### Model.async_predict

```python
Model.async_predict(inputs, inference_params={}, output_config={})
```

Makes asynchronous predictions using the model.

**Parameters:**
- `inputs` (*List[Input]*) - List of inputs to predict on
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Async prediction response

### Model.load_input_types

```python
Model.load_input_types()
```

Loads available input types for the model.

### Model.predict_by_filepath

```python
Model.predict_by_filepath(filepath, input_type=None, inference_params={}, output_config={})
```

Makes predictions from file input.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Example:**
```python
from clarifai.client.model import Model 
model = Model(model_id='model_id')
response = model.predict_by_filepath('image.jpg', input_type='image')
```

### Model.predict_by_bytes

```python
Model.predict_by_bytes(input_bytes, input_type=None, inference_params={}, output_config={})
```

Makes predictions from bytes input.

**Parameters:**
- `input_bytes` (*bytes*) - Input bytes
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Example:**
```python
text = b'Write a tweet about AI'
model = Model("https://clarifai.com/openai/chat-completion/models/GPT-4")
response = model.predict_by_bytes(text, inference_params={'temperature': 0.7})
```

### Model.predict_by_url

```python
Model.predict_by_url(url, input_type=None, inference_params={}, output_config={})
```

Makes predictions from URL input.

**Parameters:**
- `url` (*str*) - Input URL
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Example:**
```python
from clarifai.client.model import Model
model = Model(model_id='model_id')
response = model.predict_by_url('https://example.com/image.jpg', input_type='image')
```

### Model.generate

```python
Model.generate(inputs, inference_params={}, output_config={})
```

Generates outputs with streaming response.

**Parameters:** 
- `inputs` (*List[Input]*) - List of inputs
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.async_generate

```python
Model.async_generate(inputs, inference_params={}, output_config={})
```

Generates outputs asynchronously with streaming response.

**Parameters:** 
- `inputs` (*List[Input]*) - List of inputs
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Async generator yielding output responses

### Model.generate_by_filepath

```python
Model.generate_by_filepath(filepath, input_type=None, inference_params={}, output_config={})
```

Generates outputs from file input with streaming response.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.generate_by_bytes

```python
Model.generate_by_bytes(input_bytes, input_type=None, inference_params={}, output_config={})
```

Generates outputs from bytes input with streaming response.

**Parameters:**
- `input_bytes` (*bytes*) - Input bytes
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.generate_by_url

```python
Model.generate_by_url(url, input_type=None, inference_params={}, output_config={})
```

Generates outputs from URL input with streaming response.

**Parameters:**
- `url` (*str*) - Input URL
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.stream

```python
Model.stream(inputs, inference_params={}, output_config={})
```

Streams predictions for input iterator.

**Parameters:**
- `inputs` (*Iterator[List[Input]]*) - Iterator of input lists
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.async_stream

```python
Model.async_stream(inputs, inference_params={}, output_config={})
```

Streams predictions asynchronously for input iterator.

**Parameters:**
- `inputs` (*Iterator[List[Input]]*) - Iterator of input lists
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Async generator yielding output responses

### Model.stream_by_filepath

```python
Model.stream_by_filepath(filepath, input_type=None, inference_params={}, output_config={})
```

Streams predictions from file input.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.stream_by_bytes

```python
Model.stream_by_bytes(input_bytes_iterator, input_type=None, inference_params={}, output_config={})
```

Streams predictions from bytes iterator.

**Parameters:**
- `input_bytes_iterator` (*Iterator[bytes]*) - Iterator of input bytes
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.stream_by_url

```python
Model.stream_by_url(url_iterator, input_type=None, inference_params={}, output_config={})
```

Streams predictions from URL iterator.

**Parameters:**
- `url_iterator` (*Iterator[str]*) - Iterator of input URLs
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.evaluate

```python
Model.evaluate(dataset=None, dataset_id=None, dataset_app_id=None, dataset_user_id=None, dataset_version_id=None, eval_id=None, extended_metrics=None, eval_info=None)
```

Evaluates model performance on a dataset.

**Parameters:**
- `dataset` (*Dataset*) - Dataset to evaluate on
- `dataset_id` (*str*) - Dataset ID if not using Dataset object
- `dataset_app_id` (*str*) - Dataset app ID for cross-app evaluation
- `dataset_user_id` (*str*) - Dataset user ID for cross-app evaluation
- `dataset_version_id` (*str*) - Dataset version ID
- `eval_id` (*str*) - Custom evaluation ID
- `extended_metrics` (*dict*) - Custom metrics configuration
- `eval_info` (*dict*) - Additional evaluation information

**Returns:**
- Evaluation metrics

### Model.get_eval_by_id

```python
Model.get_eval_by_id(eval_id, label_counts=False, test_set=False, binary_metrics=False, confusion_matrix=False, metrics_by_class=False, metrics_by_area=False)
```

Gets detailed evaluation metrics by ID.

**Parameters:**
- `eval_id` (*str*) - Evaluation ID
- `label_counts` (*bool*) - Include label counts
- `test_set` (*bool*) - Include test set
- `binary_metrics` (*bool*) - Include binary metrics
- `confusion_matrix` (*bool*) - Include confusion matrix
- `metrics_by_class` (*bool*) - Include per-class metrics
- `metrics_by_area` (*bool*) - Include metrics by area

**Returns:**
- Detailed evaluation metrics

### Model.get_latest_eval

```python
Model.get_latest_eval(label_counts=False, test_set=False, binary_metrics=False, confusion_matrix=False, metrics_by_class=False, metrics_by_area=False)
```

Gets metrics from latest evaluation.

**Parameters:**
- `label_counts` (*bool*) - Include label counts
- `test_set` (*bool*) - Include test set
- `binary_metrics` (*bool*) - Include binary metrics
- `confusion_matrix` (*bool*) - Include confusion matrix
- `metrics_by_class` (*bool*) - Include per-class metrics
- `metrics_by_area` (*bool*) - Include metrics by area

**Returns:**
- Latest evaluation metrics or None if not evaluated

### Model.list_evaluations

```python
Model.list_evaluations()
```

Lists all evaluation metrics for current model version.

**Returns:**
- List of evaluation metrics

### Model.get_eval_by_dataset

```python
Model.get_eval_by_dataset(dataset)
```

Gets all evaluation data for a dataset.

**Parameters:**
- `dataset` (*Dataset*) - Dataset to get evaluations for

**Returns:**
- List of evaluation metrics for dataset

### Model.get_raw_eval

```python
Model.get_raw_eval(dataset=None, eval_id=None, return_format='array')
```

Gets raw evaluation data in specified format.

**Parameters:**
- `dataset` (*Dataset*) - Dataset to get evaluation for
- `eval_id` (*str*) - Specific evaluation ID
- `return_format` (*str*) - Output format ('proto', 'array', 'coco')

**Returns:**
- Evaluation data in requested format

**Example:**
```python
from clarifai.client.model import Model
from clarifai.client.dataset import Dataset

model = Model(url="model_url")
dataset = Dataset(dataset_id="dataset_id")
y_true, y_pred, classes, inputs = model.get_raw_eval(
    dataset,
    return_format="array"
)
```

### Model.create_version_by_file

```python
Model.create_version_by_file(file_path, input_field_maps, output_field_maps, inference_parameter_configs=None, model_version=None, part_id=1, range_start=0, no_cache=False, no_resume=False, description="")
```

Creates new model version from local file.

**Parameters:**
- `file_path` (*str*) - Path to model file
- `input_field_maps` (*dict*) - Input field mappings 
- `output_field_maps` (*dict*) - Output field mappings
- `inference_parameter_configs` (*List[dict]*) - Inference parameter configurations
- `model_version` (*str*) - Custom version ID
- `part_id` (*int*) - Part ID for upload (default: 1)
- `range_start` (*int*) - Range start for upload (default: 0)
- `no_cache` (*bool*) - Disable upload cache (default: False)
- `no_resume` (*bool*) - Disable auto-resume upload (default: False)
- `description` (*str*) - Version description

**Returns:**
- New Model instance

### Model.create_version_by_url

```python
Model.create_version_by_url(url, input_field_maps, output_field_maps, inference_parameter_configs=None, description="")
```

Creates new model version from URL.

**Parameters:**
- `url` (*str*) - URL to model file
- `input_field_maps` (*dict*) - Input field mappings
- `output_field_maps` (*dict*) - Output field mappings
- `inference_parameter_configs` (*List[dict]*) - Inference parameter configurations
- `description` (*str*) - Version description

**Returns:**
- New Model instance

### Model.patch_version

```python
Model.patch_version(version_id, **kwargs)
```

Patches an existing model version.

**Parameters:**
- `version_id` (*str*) - Version ID to patch
- `**kwargs` - Fields to update

**Returns:**
- Updated Model instance

### Model.export

```python
Model.export(export_dir=None)
```

Exports model to local file.

**Parameters:**
- `export_dir` (*str*) - Directory to save exported model

**Example:**
```python
from clarifai.client.model import Model
model = Model("model_url")
model.export("exported_models/")
```

### Model.load_info

```python
Model.load_info()
```

Loads or refreshes model information.

**Example:**
```python
from clarifai.client.model import Model
model = Model("model_url")
model.load_info()
```

## [ModelClient](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/model_client.py)

```python
class ModelClient(stub, async_stub=None, request_template=None)
```

The ModelClient offers a flexible interface that adapts to the specific capabilities of each model while maintaining a consistent programming interface across different model types.

Also, it provides dynamic method generation based on model signatures and handles both synchronous and asynchronous inference calls.

**Parameters:**
- `stub` - The gRPC stub for the model
- `async_stub` (*V2Stub*) - The async gRPC stub for the model (optional)
- `request_template` (*service_pb2.PostModelOutputsRequest*) - Template request with common fields like model_id, model_version, etc.

### Instance Methods

#### ModelClient.fetch

```python
ModelClient.fetch()
```

Fetches function signature definitions from the model and defines the functions in the client. This method is called automatically when accessing model methods.

**Example:**
```python
from clarifai.client.model_client import ModelClient

# Initialize client (typically done through Model class)
client = ModelClient(stub, async_stub, request_template)
client.fetch()  # Explicitly fetch signatures
```

#### ModelClient.available_methods

```python
ModelClient.available_methods()
```

Gets the available methods for this model.

**Returns:**
- List[str]: The available method names

**Example:**
```python
methods = client.available_methods()
print(methods)  # ['predict', 'generate', 'classify']

# Check all available methods and their signatures
for method in client.available_methods():
    print(f"{method}: {client.method_signature(method)}")
```

#### ModelClient.method_signature

```python
ModelClient.method_signature(method_name)
```

Gets the method signature for a specific method.

**Parameters:**
- `method_name` (*str*) - The name of the method

**Returns:**
- str: The method signature string

**Example:**
```python
signature = client.method_signature('predict')
print(signature)  # 'predict(input: str) -> str'
```

#### ModelClient.generate_client_script

```python
ModelClient.generate_client_script(base_url=None, use_ctx=False, colorize=False)
```

Generates a client script for this model.

**Parameters:**
- `base_url` (*str*) - Base URL for the API
- `use_ctx` (*bool*) - Whether to use context manager in generated script
- `colorize` (*bool*) - Whether to colorize the output

**Returns:**
- str: The generated client script

**Example:**
```python
script = client.generate_client_script()
print(script)  # Prints a ready-to-use client script
```

### Dynamic Methods

The ModelClient dynamically creates methods based on the model's method signatures. These typically include:

#### Predict Methods
```python
ModelClient.predict(inputs)
```
Makes synchronous predictions using the model.

**Parameters:**
- `inputs` - Input data matching the model's expected format

**Returns:**
- Prediction results

**Example:**
```python
# Single input prediction
result = client.predict({"text": "Hello world"})
print(result)

# Batch input prediction
batch_results = client.predict([
    {"text": "First input"},
    {"text": "Second input"}
])
for result in batch_results:
    print(result)
```

#### Async Predict Methods
```python
ModelClient.async_predict(inputs)
```
Makes asynchronous predictions using the model.

**Parameters:**
- `inputs` - Input data matching the model's expected format

**Returns:**
- Async prediction results

**Example:**
```python
import asyncio

async def main():
    # Single input prediction
    result = await client.async_predict({"text": "Hello world"})
    print(result)
    
    # Batch input prediction  
    batch_results = await client.async_predict([
        {"text": "First input"},
        {"text": "Second input"}
    ])
    for result in batch_results:
        print(result)

asyncio.run(main())
```

#### Generate Methods
```python
ModelClient.generate(inputs)
```
Generates outputs with streaming response.

**Parameters:**
- `inputs` - Input data matching the model's expected format

**Returns:**
- Generator yielding output responses

**Example:**
```python
# Streaming text generation
for chunk in client.generate({"prompt": "Write a story about AI"}):
    print(chunk, end="", flush=True)

# Batch streaming generation
for batch_chunks in client.generate([
    {"prompt": "First prompt"},
    {"prompt": "Second prompt"}
]):
    for chunk in batch_chunks:
        print(f"Chunk: {chunk}")
```

#### Async Generate Methods
```python
ModelClient.async_generate(inputs)
```
Generates outputs asynchronously with streaming response.

**Parameters:**
- `inputs` - Input data matching the model's expected format

**Returns:**
- Async generator yielding output responses

**Example:**
```python
import asyncio

async def main():
    # Single input streaming generation
    async for chunk in client.async_generate({"prompt": "Write a story"}):
        print(chunk, end="", flush=True)
    
    # Batch streaming generation
    async for batch_chunks in client.async_generate([
        {"prompt": "First prompt"},
        {"prompt": "Second prompt"}
    ]):
        for chunk in batch_chunks:
            print(f"Chunk: {chunk}")

asyncio.run(main())
```

#### Stream Methods
```python
ModelClient.stream(inputs)
```
Streams predictions for input iterator. This is used for models that accept streaming inputs (like audio processing).

**Parameters:**
- `inputs` - Input data with streaming components, must include a generator for the stream

**Returns:**
- Generator yielding output responses

**Example:**
```python
def audio_chunk_generator():
    # Simulate audio chunks
    yield b"audio_chunk_1"
    yield b"audio_chunk_2"
    yield b"audio_chunk_3"
    
# Stream audio processing
for response in client.stream({"audio_stream": audio_chunk_generator()}):
    print(f"Processed: {response}")
```

#### Async Stream Methods
```python
ModelClient.async_stream(inputs)
```
Streams predictions asynchronously for input iterator.

**Parameters:**
- `inputs` - Input data with streaming components, must include an async generator for the stream

**Returns:**
- Async generator yielding output responses

**Example:**
```python
import asyncio

async def async_audio_chunk_generator():
    # Simulate async audio chunks
    yield b"audio_chunk_1"
    await asyncio.sleep(0.1)
    yield b"audio_chunk_2"
    await asyncio.sleep(0.1)
    yield b"audio_chunk_3"
    
async def main():
    async for response in client.async_stream({"audio_stream": async_audio_chunk_generator()}):
        print(f"Processed: {response}")

asyncio.run(main())
```

## [Module](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/module.py)

```python
class Module(url=None, module_id=None, module_version={'id': ""}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

The Module class provides a comprehensive interface for interacting with Clarifai modules and their versions, making it easy to manage and explore module configurations across different versions.

**Parameters:**
- `url` (*Optional[str]*) - URL to initialize module object
- `module_id` (*Optional[str]*) - Module ID to interact with
- `module_version` (*Dict[str, str]*) - Module version details with ID. Defaults to `{'id': ""}` for latest version
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*Optional[str]*) - Personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*Optional[str]*) - Session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*Optional[str]*) - Path to SSL root certificates file, used to establish secure gRPC connections
- `**kwargs` - Additional keyword arguments to be passed to the Module

**Note:** Either url or module_id must be specified, but not both.

**Example:**
```python
from clarifai.client.module import Module

# Initialize from URL
module = Module(url="https://clarifai.com/user_id/app_id/modules/module_id/versions/version_id")

# Initialize with module ID
module = Module(
    module_id='my-module',
    user_id='user_id', 
    app_id='app_id',
    module_version={'id': 'specific-version'}  # or omit for latest version
)
```

### Module.list_versions

```python
Module.list_versions(page_no=None, per_page=None)
```

Lists all versions of the module.

**Parameters:**
- `page_no` (*int*) - Page number for pagination
- `per_page` (*int*) - Items per page

**Yields:**
- Module objects for each version

**Example:**
```python
from clarifai.client.module import Module

module = Module(module_id='my-module', user_id='user_id', app_id='app_id')

# List all versions
all_module_versions = list(module.list_versions())

# List versions with pagination
first_page_versions = list(module.list_versions(page_no=1, per_page=10))

# Iterate through versions
for version in module.list_versions():
    print(f"Version ID: {version.id}")
    print(f"Description: {version.description}")
```

**Note:** Defaults to 16 per page if page_no is specified and per_page is not specified. If both page_no and per_page are None, then lists all the resources.

### Accessing Module Properties

Once initialized, you can access various module properties directly from the Module instance:

**Example:**
```python
from clarifai.client.module import Module

module = Module(module_id='my-module', user_id='user_id', app_id='app_id')

# Access module properties
print(f"Module ID: {module.id}")
print(f"App ID: {module.app_id}")
print(f"User ID: {module.user_id}")

# The module also provides a string representation
print(module)  # Shows formatted module details
```


## [Nodepool](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/nodepool.py)

```python
class Nodepool(nodepool_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

The Nodepool class provides comprehensive management capabilities for deployments and runners within a compute cluster, enabling efficient resource allocation and scaling for model serving.

**Parameters:**
- `nodepool_id` (*str*) - The Nodepool ID for the Nodepool to interact with
- `user_id` (*str*) - The user ID of the user
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections
- `**kwargs` - Additional keyword arguments to be passed to the nodepool

**Example:**
```python
from clarifai.client.nodepool import Nodepool

# Initialize nodepool
nodepool = Nodepool(nodepool_id="my-nodepool", user_id="user_id")
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

**Yields:**
- Deployment: Deployment objects for the nodepools in the compute cluster

**Example:**
```python
from clarifai.client.nodepool import Nodepool

nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")

# List all deployments
all_deployments = list(nodepool.list_deployments())

# List deployments with filtering and pagination
filtered_deployments = list(nodepool.list_deployments(
    filter_by={"status": "active"},
    page_no=1,
    per_page=10
))
```

**Note:** Defaults to 16 per page if page_no is specified and per_page is not specified. If both page_no and per_page are None, then lists all the resources.

### Nodepool.create_deployment

```python
Nodepool.create_deployment(config_filepath=None, deployment_id=None, deployment_config=None)
```

Creates a deployment for the nodepool.

**Parameters:**
- `config_filepath` (*str*) - The path to the deployment config file (YAML format)
- `deployment_id` (*str*) - New deployment ID for the deployment to create
- `deployment_config` (*Dict[str, Any]*) - Deployment configuration as a dictionary (alternative to config file)

**Returns:**
- Deployment: A Deployment object for the specified deployment ID

**Example:**
```python
from clarifai.client.nodepool import Nodepool

nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")

# Create deployment from config file
deployment = nodepool.create_deployment(config_filepath="deployment_config.yml")

# Create deployment with custom ID
deployment = nodepool.create_deployment(
    config_filepath="deployment_config.yml",
    deployment_id="my-custom-deployment"
)

# Create deployment from dictionary config
deployment_config = {
    "deployment": {
        "worker": {
            "model": {"id": "my-model", "user_id": "user_id", "app_id": "app_id"}
        },
        "scheduling_choice": "priority",
        "nodepools": [{"id": "nodepool_id", "compute_cluster": {"id": "cluster_id"}}]
    }
}
deployment = nodepool.create_deployment(deployment_config=deployment_config)
```

### Nodepool.deployment

```python
Nodepool.deployment(deployment_id)
```

Returns a Deployment object for the existing deployment ID.

**Parameters:**
- `deployment_id` (*str*) - The deployment ID for the deployment to interact with

**Returns:**
- Deployment: A Deployment object for the existing deployment ID

**Example:**
```python
from clarifai.client.nodepool import Nodepool

nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
deployment = nodepool.deployment(deployment_id="existing_deployment_id")
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

### Nodepool.runner

```python
Nodepool.runner(runner_id)
```

Returns a Runner object for the existing runner ID.

**Parameters:**
- `runner_id` (*str*) - The runner ID for the runner to interact with

**Returns:**
- Runner: A Runner object for the existing runner ID

**Example:**
```python
from clarifai.client.nodepool import Nodepool

nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
runner = nodepool.runner(runner_id="runner_id")
```

### Nodepool.create_runner

```python
Nodepool.create_runner(config_filepath=None, runner_config=None)
```

Creates a runner for the nodepool. Only needed for local runners.

**Parameters:**
- `config_filepath` (*str*) - The path to the runner config file (YAML format)
- `runner_config` (*Dict[str, Any]*) - Runner configuration as a dictionary (alternative to config file)

**Returns:**
- Runner: A Runner object for the specified runner

**Example:**
```python
from clarifai.client.nodepool import Nodepool

nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")

# Create runner from config file
runner = nodepool.create_runner(config_filepath="runner_config.yml")

# Create runner from dictionary config
runner_config = {
    "runner": {
        "worker": {"image_url": "my-image:latest"},
        "num_replicas": 2
    }
}
runner = nodepool.create_runner(runner_config=runner_config)
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

### Nodepool.get_runner_selector

```python
Nodepool.get_runner_selector(user_id, compute_cluster_id, nodepool_id)
```

Returns a RunnerSelector object for the specified compute cluster and nodepool.

**Parameters:**
- `user_id` (*str*) - The user ID of the user
- `compute_cluster_id` (*str*) - The compute cluster ID for the compute cluster
- `nodepool_id` (*str*) - The nodepool ID for the nodepool

**Returns:**
- resources_pb2.RunnerSelector: A RunnerSelector object for the specified compute cluster and nodepool

**Example:**
```python
from clarifai.client.nodepool import Nodepool

runner_selector = Nodepool.get_runner_selector(
    user_id="user_id",
    compute_cluster_id="compute_cluster_id", 
    nodepool_id="nodepool_id"
)
```

## [Pipeline](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/pipeline.py)

```python
class Pipeline(url=None, pipeline_id=None, pipeline_version_id=None, pipeline_version_run_id=None, user_id=None, app_id=None, nodepool_id=None, compute_cluster_id=None, log_file=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

The Pipeline class provides a complete interface for executing and monitoring pipeline runs, making it easy to integrate complex data processing workflows into your applications with robust monitoring and logging capabilities.

**Parameters:**
- `url` (*Optional[str]*) - The URL to initialize the pipeline object
- `pipeline_id` (*Optional[str]*) - The Pipeline ID to interact with
- `pipeline_version_id` (*Optional[str]*) - The Pipeline Version ID to interact with
- `pipeline_version_run_id` (*Optional[str]*) - The Pipeline Version Run ID. If not provided, a UUID will be generated
- `user_id` (*Optional[str]*) - The User ID that owns the pipeline
- `app_id` (*Optional[str]*) - The App ID that contains the pipeline
- `nodepool_id` (*Optional[str]*) - The Nodepool ID to run the pipeline on
- `compute_cluster_id` (*Optional[str]*) - The Compute Cluster ID to run the pipeline on
- `log_file` (*Optional[str]*) - Path to file where logs should be written. If not provided, logs are displayed on console
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*Optional[str]*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*Optional[str]*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*Optional[str]*) - Path to the SSL root certificates file, used to establish secure gRPC connections
- `**kwargs` - Additional keyword arguments to be passed to the Pipeline

**Note:** Either url or pipeline_id must be specified, but not both.

**Example:**
```python
from clarifai.client.pipeline import Pipeline

# Initialize from URL
pipeline = Pipeline(url="https://clarifai.com/user_id/app_id/pipelines/pipeline_id")

# Initialize with explicit parameters
pipeline = Pipeline(
    pipeline_id="my-pipeline",
    pipeline_version_id="v1",
    user_id="user_id",
    app_id="app_id",
    nodepool_id="nodepool-1",
    compute_cluster_id="cluster-1"
)

# Initialize with custom run ID and log file
pipeline = Pipeline(
    pipeline_id="my-pipeline",
    pipeline_version_run_id="custom-run-123",
    log_file="pipeline_logs.txt",
    user_id="user_id",
    app_id="app_id"
)
```

### Pipeline.run

```python
Pipeline.run(inputs=None, timeout=3600, monitor_interval=10)
```

Run the pipeline and monitor its progress.

**Parameters:**
- `inputs` (*List*) - List of inputs to run the pipeline with. If None, runs without inputs
- `timeout` (*int*) - Maximum time to wait for completion in seconds. Default 3600 (1 hour)
- `monitor_interval` (*int*) - Interval between status checks in seconds. Default 10

**Returns:**
- Dict: The pipeline run result with keys:
  - `status`: "success", "failed", or "timeout"
  - `pipeline_version_run`: Detailed run information when successful

**Example:**
```python
from clarifai.client.pipeline import Pipeline

# Initialize pipeline
pipeline = Pipeline(
    pipeline_id="my-pipeline",
    user_id="user_id",
    app_id="app_id",
    nodepool_id="nodepool-1",
    compute_cluster_id="cluster-1"
)

# Run pipeline without inputs
result = pipeline.run()

# Run pipeline with inputs
inputs = [{"data": {"text": {"raw": "Hello world"}}}]
result = pipeline.run(inputs=inputs)

# Run with custom timeout and monitoring interval
result = pipeline.run(
    inputs=inputs,
    timeout=7200,  # 2 hours
    monitor_interval=5  # Check every 5 seconds
)

if result["status"] == "success":
    print("Pipeline completed successfully!")
    print(f"Run details: {result['pipeline_version_run']}")
elif result["status"] == "failed":
    print("Pipeline failed")
else:
    print("Pipeline timed out")
```

### Pipeline.monitor_only

```python
Pipeline.monitor_only(timeout=3600, monitor_interval=10)
```

Monitor an existing pipeline run without starting a new one.

**Parameters:**
- `timeout` (*int*) - Maximum time to wait for completion in seconds. Default 3600 (1 hour)
- `monitor_interval` (*int*) - Interval between status checks in seconds. Default 10

**Returns:**
- Dict: The pipeline run result with keys:
  - `status`: "success", "failed", or "timeout"
  - `pipeline_version_run`: Detailed run information when successful

**Example:**
```python
from clarifai.client.pipeline import Pipeline

# Monitor an existing pipeline run
pipeline = Pipeline(
    pipeline_id="my-pipeline",
    pipeline_version_run_id="existing-run-id-123",
    user_id="user_id",
    app_id="app_id"
)

# Monitor the existing run
result = pipeline.monitor_only()

# Monitor with custom settings
result = pipeline.monitor_only(
    timeout=1800,  # 30 minutes
    monitor_interval=15  # Check every 15 seconds
)

if result["status"] == "success":
    print("Pipeline run completed successfully!")
```

## [Search](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/search.py)

```python
class Search(user_id, app_id, top_k=None, metric='cosine', algorithm='nearest_neighbor', pagination=False, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None)
```

The Search class provides a comprehensive interface for performing various types of searches across your Clarifai app's inputs with powerful filtering and ranking capabilities.

**Parameters:**
- `user_id` (*str*) - User ID
- `app_id` (*str*) - App ID
- `top_k` (*int*) - Top K results to retrieve. Defaults to 10 when pagination is False
- `metric` (*str*) - Similarity metric (either 'cosine' or 'euclidean'). Defaults to 'cosine'
- `algorithm` (*str*) - Search algorithm (either 'nearest_neighbor' or 'brute_force'). Defaults to 'nearest_neighbor'
- `pagination` (*bool*) - Enable pagination. Defaults to False
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections

**Note:** 
- Cosine distance metric is not supported with nearest neighbor algorithm
- top_k and pagination cannot be used together
- When pagination is False and top_k is not specified, defaults to 10 results

**Example:**
```python
from clarifai.client.search import Search

# Basic search with top_k
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')

# Search with pagination enabled
search = Search(
    user_id='user_id', 
    app_id='app_id', 
    metric='cosine', 
    pagination=True
)

# Search with euclidean metric
search = Search(
    user_id='user_id',
    app_id='app_id',
    top_k=20,
    metric='euclidean',
    algorithm='brute_force'
)
```

### Search.query

```python
Search.query(ranks=[{}], filters=[{}], page_no=None, per_page=None)
```

Perform a query with rank and filters.

**Parameters:**
- `ranks` (*List[Dict]*) - List of rank parameters for similarity search. Each dict can contain:
  - `image_bytes` (*bytes*) - Raw image bytes for vector search
  - `image_url` (*str*) - URL to an image for vector search
  - `text_raw` (*str*) - Raw text content for text search
  - `concepts` (*List[Dict]*) - List of concept dictionaries for concept-based search
  - `metadata` (*Dict*) - Metadata dictionary for metadata-based search
  - `geo_point` (*Dict*) - Geographic point with keys:
    - `longitude` (*float*) - Geographic longitude
    - `latitude` (*float*) - Geographic latitude  
    - `geo_limit` (*float*) - Geographical limit in kilometers
- `filters` (*List[Dict]*) - List of filter parameters to narrow down results. Each dict can contain:
  - `input_types` (*List[str]*) - List of input types to filter by ('image', 'text', 'audio', 'video')
  - `input_dataset_ids` (*List[str]*) - List of dataset IDs to filter by
  - `input_status_code` (*int*) - Status code to filter by (e.g., 30000 for successful inputs)
  - `concepts` (*List[Dict]*) - List of concept dictionaries for filtering
  - `metadata` (*Dict*) - Metadata dictionary for filtering
  - `geo_point` (*Dict*) - Geographic point for location-based filtering
- `page_no` (*int*) - The page number to list (only when pagination=True)
- `per_page` (*int*) - The number of items per page (only when pagination=True)

**Returns:**
- Generator[Dict[str, Any], None, None]: A generator of query results

**Example:**
```python
from clarifai.client.search import Search

# Vector search by image URL with top_k
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')
results = search.query(
    ranks=[{'image_url': 'https://samples.clarifai.com/dog.tiff'}]
)

# Text search with filtering
search = Search(user_id='user_id', app_id='app_id', top_k=15, metric='cosine')
results = search.query(
    ranks=[{'text_raw': 'search query'}],
    filters=[{'input_types': ['text']}]
)

# Search with pagination
search = Search(user_id='user_id', app_id='app_id', metric='cosine', pagination=True)
results = search.query(
    ranks=[{'image_url': 'https://samples.clarifai.com/dog.tiff'}],
    page_no=2, 
    per_page=5
)

# Filter by input status and type
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')
results = search.query(
    filters=[{
        'input_types': ['image', 'text'], 
        'input_status_code': 30000  # Successful inputs
    }]
)

# Geographic search
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')
results = search.query(
    ranks=[{
        'geo_point': {
            'longitude': -74.006,
            'latitude': 40.7128,
            'geo_limit': 10.0  # Within 10 kilometers
        }
    }]
)

# Concept-based search
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')
results = search.query(
    ranks=[{
        'concepts': [
            {'id': 'cat', 'value': 1.0},
            {'id': 'animal', 'value': 1.0}
        ]
    }]
)

# Iterate through results
for result_batch in results:
    for hit in result_batch.hits:
        print(f"Score: {hit.score}, Input ID: {hit.input.id}")
```

**Note:**
- For detailed schema of rank and filter parameters, refer to the [search schema](https://github.com/Clarifai/clarifai-python/tree/master/clarifai/schema/search.py)
- For more search examples, refer to the [examples repository](https://github.com/Clarifai/examples/tree/main/search)
- When using pagination, you must set `pagination=True` during Search initialization
- The method performs OR operations when multiple values are provided in filters (e.g., multiple input_types)


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
- `**kwargs` - Additional keyword arguments

### User.app

```python
User.app(app_id, **kwargs)
```

Returns an App object for the specified app ID.

**Parameters:**
- `app_id` (*str*) - The app ID for the app to interact with
- `**kwargs` - Additional keyword arguments

**Returns:**
- App: An App object for the specified app ID

**Example:**
```python
from clarifai.client.user import User
app = User("user_id").app("app_id")
```

### User.create_app

```python
User.create_app(app_id, base_workflow='Empty', **kwargs)
```

Creates an app for the user.

**Parameters:**
- `app_id` (*str*) - The app ID for the app to create
- `base_workflow` (*str*) - The base workflow to use (e.g. 'Universal', 'Empty', 'General')
- `**kwargs` - Additional keyword arguments 

**Returns:**
- App: An App object for the specified app ID

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
app = client.create_app(app_id="app_id", base_workflow="Universal")
```

### User.delete_app

```python
User.delete_app(app_id)
```

Deletes an app by app id.

**Parameters:**
- `app_id` (*str*) - The ID of the app to delete

**Example:**
```python
from clarifai.client.user import User
User("user_id").delete_app("app_id")
```

### User.list_apps

```python
User.list_apps(filter_by={}, page_no=None, per_page=None)
```

Lists all apps for the user.

**Parameters:**
- `filter_by` (*Dict[str, Any]*) - Dictionary of filters
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:** 
- App objects

**Example:**
```python
from clarifai.client.user import User
apps = list(User("user_id").list_apps())
```

### User.patch_app

```python
User.patch_app(app_id, action='overwrite', **kwargs) 
```

Updates an app by app id.

**Parameters:**
- `app_id` (*str*) - The app ID to patch
- `action` (*str*) - Action to perform ('overwrite'/'remove') 
- `**kwargs` - Properties to update

**Returns:**
- Updated App object

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
app = client.patch_app("app_id", description="New description")
```

### User.runner

```python
User.runner(runner_id) 
```

Returns a Runner object if it exists.

**Parameters:**
- `runner_id` (*str*) - The runner ID to interact with

**Returns:**
- Dict containing information about the existing runner

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
runner_info = client.runner(runner_id="runner_id")
```

### User.list_runners

```python
User.list_runners(filter_by={}, page_no=None, per_page=None) 
```

Lists all runners for the user.

**Parameters:**
- `filter_by` (*Dict[str, Any]*) - Dictionary of filters
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Dict objects containing runner information

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_runners = list(client.list_runners())
```

### User.delete_runner

```python
User.delete_runner(runner_id)
```

Deletes a runner by runner id.

**Parameters:**
- `runner_id` (*str*) - The ID of the runner to delete

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
client.delete_runner(runner_id="runner_id")
```

### User.compute_cluster

```python
User.compute_cluster(compute_cluster_id) 
```

Returns a Compute Cluster object for the specified compute cluster ID.

**Parameters:**
- `compute_cluster_id` (*str*) - The compute cluster ID to interact with

**Returns:**
- ComputeCluster: A Compute Cluster object for the specified ID

**Example:**
```python
from clarifai.client.user import User
compute_cluster = User("user_id").compute_cluster("compute_cluster_id")
```

### User.create_compute_cluster

```python
User.create_compute_cluster(config_filepath=None, compute_cluster_id=None, compute_cluster_config=None) 
```

Creates a compute cluster for the user.

**Parameters:**
- `config_filepath` (*str*) - Path to the compute cluster config file
- `compute_cluster_id` (*str*) - Optional ID for the new compute cluster
- `compute_cluster_config` (*Dict[str, Any]*) - Optional dictionary containing compute cluster configuration

**Returns:**
- ComputeCluster object for the created cluster

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
cluster = client.create_compute_cluster(config_filepath="config.yml")
```

### User.list_compute_clusters

```python
User.list_compute_clusters(page_no=None, per_page=None) 
```

Lists compute clusters for the user.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- ComputeCluster objects

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
clusters = list(client.list_compute_clusters())
```

### User.delete_compute_clusters

```python
User.delete_compute_clusters(compute_cluster_ids) 
```

Deletes multiple compute clusters by their IDs.

**Parameters:**
- `compute_cluster_ids` (*List[str]*) - List of compute cluster IDs to delete

**Example:**
```python
from clarifai.client.user import User
User("user_id").delete_compute_clusters(["cluster_id1", "cluster_id2"])
```

### User.list_pipelines

```python
User.list_pipelines(page_no=None, per_page=None)
```

List all pipelines for the user across all apps.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Dict objects containing pipeline information

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_pipelines = list(client.list_pipelines())
```

### User.list_pipeline_steps

```python
User.list_pipeline_steps(page_no=None, per_page=None)
```

List all pipeline steps for the user across all apps.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Dict objects containing pipeline step information

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_pipeline_steps = list(client.list_pipeline_steps())
```

### User.get_secret

```python
User.get_secret(secret_id)
```

Returns a secret object if exists.

**Parameters:**
- `secret_id` (*str*) - The secret ID to interact with

**Returns:**
- Dict containing information about the existing secret

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
secret_info = client.get_secret(secret_id="secret_id")
```

### User.list_secrets

```python
User.list_secrets(page_no=None, per_page=None)
```

List all secrets for the user.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Dict objects containing secret information

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_secrets = list(client.list_secrets())
```

### User.create_secrets

```python
User.create_secrets(secrets)
```

Creates secrets for the user.

**Parameters:**
- `secrets` (*List[Dict[str, Any]]*) - List of secret configurations to create

**Returns:**
- List[Dict]: List of dictionaries containing information about the created secrets

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
secrets = [{"id": "secret1", "value": "secret_value", "description": "My Secret"}]
created_secrets = client.create_secrets(secrets)
```

### User.patch_secrets

```python
User.patch_secrets(secrets, action='overwrite')
```

Patches secrets for the user.

**Parameters:**
- `secrets` (*List[Dict[str, Any]]*) - List of secret configurations to patch
- `action` (*str*) - Action to perform ('overwrite'/'remove')

**Returns:**
- List[Dict]: List of dictionaries containing information about the patched secrets

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
secrets = [{"id": "secret1", "description": "Updated Secret Description"}]
patched_secrets = client.patch_secrets(secrets, action="overwrite")
```

### User.delete_secrets

```python
User.delete_secrets(secret_ids)
```

Deletes a list of secrets for the user.

**Parameters:**
- `secret_ids` (*List[str]*) - The secret IDs to delete

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
client.delete_secrets(secret_ids=["secret_id1", "secret_id2"])
```

### User.list_models

```python
User.list_models(user_id=None, app_id=None, show=True, return_clarifai_model=False, **kwargs)
```

Lists models for the user or across all users.

**Parameters:**
- `user_id` (*str*) - User ID to list models from, use "all" for all users
- `app_id` (*str*) - App ID to filter models
- `show` (*bool*) - Whether to display results in table format
- `return_clarifai_model` (*bool*) - Whether to return Model objects instead of dicts
- `**kwargs` - Additional keyword arguments

**Returns:**
- List of model dictionaries or Model objects

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
models = client.list_models(user_id="all", show=True)
```

### User.get_user_info

```python
User.get_user_info(user_id=None)
```

Returns the user information for the specified user ID.

**Parameters:**
- `user_id` (*str*) - The user ID for the user to interact with

**Returns:**
- User: A User object for the specified user ID

## [Workflow](https://github.com/Clarifai/clarifai-python/blob/master/clarifai/client/workflow.py)

```python
class Workflow(url=None, workflow_id=None, workflow_version={'id': ""}, output_config={'min_value': 0}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Workflow is a class that provides access to Clarifai API endpoints related to Workflow information.

**Parameters:**
- `url` (*str*) - URL to initialize workflow object
- `workflow_id` (*str*) - Workflow ID to interact with
- `workflow_version` (*Dict[str, str]*) - Workflow Version to interact with. Defaults to `{'id': ""}` for latest version
- `output_config` (*Dict[str, Any]*) - Output configuration including:
  - `min_value` (*float*) - Minimum prediction confidence threshold
  - `max_concepts` (*int*) - Maximum number of concepts to return
  - `select_concepts` (*List[Concept]*) - Specific concepts to select
  - `sample_ms` (*int*) - Sampling duration in milliseconds
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - Session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments

**Note:** You must specify either `url` or `workflow_id`, but not both.

### Workflow.predict

```python
Workflow.predict(inputs, workflow_state_id=None)
```

Makes predictions using the workflow.

**Parameters:**
- `inputs` (*List[Input]*) - List of inputs to predict (max 32)
- `workflow_state_id` (*str*) - Cache key for workflow node predictions

**Returns:**
- Workflow prediction response

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow(workflow_id='workflow_id')
response = workflow.predict(inputs=[input_proto])
```

### Workflow.predict_by_filepath

```python
Workflow.predict_by_filepath(filepath, input_type=None)
```

Makes predictions from file input.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio'). If not provided, will be inferred from workflow

**Returns:**
- Workflow prediction response

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Face-Sentiment")
prediction = workflow.predict_by_filepath('image.jpg', input_type='image')
```

### Workflow.predict_by_bytes

```python
Workflow.predict_by_bytes(input_bytes, input_type=None)
```

Makes predictions from bytes input.

**Parameters:**
- `input_bytes` (*bytes*) - Input bytes
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio'). If not provided, will be inferred from workflow

**Returns:**
- Workflow prediction response

**Example:**
```python
with open('image.jpg', 'rb') as f:
    bytes_data = f.read()
workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
prediction = workflow.predict_by_bytes(bytes_data, input_type='image')
```

### Workflow.predict_by_url

```python
Workflow.predict_by_url(url, input_type=None)
```

Makes predictions from URL input.

**Parameters:**
- `url` (*str*) - URL to input
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio'). If not provided, will be inferred from workflow

**Returns:**
- Workflow prediction response

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Face-Sentiment")
prediction = workflow.predict_by_url('https://example.com/image.jpg', input_type='image')
```

### Workflow.list_versions

```python
Workflow.list_versions(page_no=None, per_page=None)
```

Lists all versions of the workflow.

**Parameters:**
- `page_no` (*int*) - Page number for pagination
- `per_page` (*int*) - Items per page

**Yields:**
- Workflow objects for each version

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
workflow_versions = list(workflow.list_versions())
```

**Note:** Defaults to 16 items per page if only page_no specified. Lists all if neither specified.

### Workflow.export

```python
Workflow.export(out_path)
```

Exports workflow to YAML file.

**Parameters:**
- `out_path` (*str*) - Path to save YAML file

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Demographics")
workflow.export('workflow_config.yml')
```

### Workflow.load_info

```python
Workflow.load_info()
```

Loads or refreshes workflow information and input types.

This method:
1. Fetches latest workflow configuration
2. Updates workflow info and kwargs
3. Loads input types from first workflow node

**Example:**
```python
from clarifai.client.workflow import Workflow
workflow = Workflow(workflow_id='workflow_id')
workflow.load_info()
```