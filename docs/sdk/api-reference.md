---
description: Clarifai Python SDK API Reference
sidebar_position: 2
---

# Python API Reference

**Clarifai Python SDK API Reference**
<hr />

This is the API Reference documentation extracted from the source code.

## User

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

### User.create_runner

```python
User.create_runner(runner_id, labels, description)
```

Creates a runner.

**Parameters:**
- `runner_id` (*str*) - The ID of runner to create
- `labels` (*List[str]*) - Labels to match runner
- `description` (*str*) - Description of runner

**Returns:**  
- Dict containing the runner information

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
runner = client.create_runner(
    runner_id="runner_id",
    labels=["label to link runner"],
    description="laptop runner"
)
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

### User.create_compute_cluster

```python
User.create_compute_cluster(config_filepath, compute_cluster_id=None) 
```

Creates a compute cluster.

**Parameters:**
- `config_filepath` (*str*) - Path to the compute cluster config file
- `compute_cluster_id` (*str*) - Optional ID for the new compute cluster

**Returns:**
- ComputeCluster object for the created cluster

**Example:**
```python
from clarifai.client.user import User
client = User(user_id="user_id")
cluster = client.create_compute_cluster(config_filepath="config.yml")
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

### User.list_compute_clusters

```python
User.list_compute_clusters(page_no=None, per_page=None) 
```

Lists compute clusters for the user.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Dict objects containing compute cluster information

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


## App

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
app.add_concepts(concept_ids=["concept_id_1", "concept_id_2"])
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
app.create_concept_relation(
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
module = app.create_module(module_id="module_id")
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

### App.list_concepts()

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
from clarifai.client.user import User
app = User(user_id="user_id").app(app_id="app_id")
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
model = app.model(model_id="model_id")
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

## Dataset

```python
class Dataset(url=None, dataset_id=None, dataset_version_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Dataset is a class that provides access to Clarifai API endpoints related to Dataset information.


**Parameters:**
- `url` (*str*) - The URL to initialize the dataset object
- `dataset_id` (*str*) - The Dataset ID within the App to interact with
- `dataset_version_id` (*str*) - Dataset Version ID to interact with
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - Session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments

### Dataset.create_version

```python
Dataset.create_version(**kwargs)
```

Creates a dataset version.

**Parameters:**
- `**kwargs` - Additional arguments:
  - `description` (*str*) - Description of the version
  - `metadata` (*dict*) - Version metadata

**Returns:**
- Dataset object with new version

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

Deletes a dataset version.

**Parameters:**
- `version_id` (*str*) - Version ID to delete

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

Lists all versions for the dataset.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:**
- Dataset objects for each version

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
all_dataset_versions = list(dataset.list_versions())
```

### Dataset.list_inputs

```python
Dataset.list_inputs(page_no=None, per_page=None, input_type=None)
```

Lists all inputs in the dataset.

**Parameters:**
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page
- `input_type` (*str*) - Input type filter ('image', 'video', 'audio', 'text')

**Yields:**
- Input objects

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
- `dataloader` (*ClarifaiDataLoader*) - Data loader object
- `batch_size` (*int*) - Batch size for concurrent uploads (max: 128)
- `get_upload_status` (*bool*) - Get upload status if True
- `log_warnings` (*bool*) - Save warnings to log file if True
- `**kwargs` - Additional arguments

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

Retries failed uploads from logs.

**Parameters:**
- `log_file_path` (*str*) - Path to log file
- `dataloader` (*Type[ClarifaiDataLoader]*) - Data loader object
- `retry_duplicates` (*bool*) - Retry duplicate inputs if True
- `log_warnings` (*bool*) - Save warnings to log file if True
- `**kwargs` - Additional arguments

### Dataset.upload_from_csv

```python
Dataset.upload_from_csv(csv_path, input_type='text', csv_type=None, labels=True, batch_size=128)
```

Uploads dataset from CSV file.

**Parameters:**
- `csv_path` (*str*) - Path to CSV file
- `input_type` (*str*) - Input type ('text', 'image', 'video', 'audio')
- `csv_type` (*str*) - CSV type ('raw', 'url', 'file_path')
- `labels` (*bool*) - CSV has labels column if True
- `batch_size` (*int*) - Upload batch size

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id='user_id', app_id='app_id', dataset_id='dataset_id')
dataset.upload_from_csv(csv_path='data.csv', input_type='text', csv_type='raw')
```

### Dataset.upload_from_folder

```python
Dataset.upload_from_folder(folder_path, input_type, labels=False, batch_size=128)
```

Uploads dataset from a folder.

**Parameters:**
- `folder_path` (*str*) - Path to folder
- `input_type` (*str*) - Input type ('text', 'image')
- `labels` (*bool*) - Use folder names as labels if True
- `batch_size` (*int*) - Upload batch size

**Example:**
```python 
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id='user_id', app_id='app_id', dataset_id='dataset_id')
dataset.upload_from_folder(folder_path='data', input_type='image', labels=True)
```

### Dataset.get_upload_status

```python
Dataset.get_upload_status(dataloader=None, delete_version=False, timeout=600, pre_upload_stats=None, pre_upload=False)
```

Gets dataset upload status.

**Parameters:**
- `dataloader` (*Type[ClarifaiDataLoader]*) - Data loader object
- `delete_version` (*bool*) - Delete version after checking status
- `timeout` (*int*) - Status check timeout in seconds
- `pre_upload_stats` (*Tuple[Dict[str, int], Dict[str, int]]*) - Pre-upload statistics
- `pre_upload` (*bool*) - Get pre-upload stats if True

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.get_upload_status(dataloader=my_dataloader)
```

### Dataset.merge_dataset

```python
Dataset.merge_dataset(merge_dataset_id)
```

Merges another dataset into this dataset.

**Parameters:**
- `merge_dataset_id` (*str*) - ID of dataset to merge in

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.merge_dataset(merge_dataset_id='other_dataset_id')
```

### Dataset.archive_zip

```python
Dataset.archive_zip(wait=True)
```

Gets dataset archive as ZIP.

**Parameters:**
- `wait` (*bool*) - Wait for export completion if True

**Returns:**
- URL to download archive

### Dataset.export

```python
Dataset.export(save_path, archive_url=None, local_archive_path=None, split='all', num_workers=4)
```

Exports dataset to local archive.

**Parameters:**
- `save_path` (*str*) - Path to save archive
- `archive_url` (*str*) - URL to protobuf archive
- `local_archive_path` (*str*) - Path to local archive
- `split` (*str*) - Export split format
- `num_workers` (*int*) - Number of download workers

**Example:**
```python
from clarifai.client.dataset import Dataset
Dataset().export(save_path='output.zip')
```

## Deployment

```python
class Deployment(deployment_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Deployment class for accessing Clarifai API endpoints related to Deployment information.

**Parameters:**
- `deployment_id` (*str*) - Deployment ID to interact with
- `user_id` (*str*) - User ID
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token
- `token` (*str*) - Session token 
- `root_certificates_path` (*str*) - Path to SSL certificates
- `**kwargs` - Additional configurations

### Deployment.get_runner_selector

```python
Deployment.get_runner_selector(user_id, deployment_id)
```

Gets RunnerSelector object for a deployment.

**Parameters:**
- `user_id` (*str*) - User ID
- `deployment_id` (*str*) - Deployment ID

**Returns:**
- RunnerSelector object

**Example:**
```python
deployment = Deployment(deployment_id="deployment_id", user_id="user_id")
runner = Deployment.get_runner_selector(user_id="user_id", deployment_id="deployment_id")
```

## Input

```python
class Inputs(user_id=None, app_id=None, logger_level="INFO", base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Inputs is a class that provides access to Clarifai API endpoints related to Input information.

**Parameters:**
- `user_id` (*str*) - User ID for authentication
- `app_id` (*str*) - App ID for the application to interact with 
- `logger_level` (*str*) - Logging level. Default "INFO"
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - Session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments

### Inputs.get_input_from_url

```python
Inputs.get_input_from_url(input_id, image_url=None, video_url=None, audio_url=None, text_url=None, dataset_id=None, **kwargs)
```

Creates input proto from URL.

**Parameters:**
- `input_id` (*str*) - Input ID
- `image_url` (*str*) - Image URL
- `video_url` (*str*) - Video URL
- `audio_url` (*str*) - Audio URL
- `text_url` (*str*) - Text URL
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Input proto object

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_input_from_url(
    input_id='demo',
    image_url='https://samples.clarifai.com/metro-north.jpg'
)
```

### Inputs.get_input_from_file

```python
Inputs.get_input_from_file(input_id, image_file=None, video_file=None, audio_file=None, text_file=None, dataset_id=None, **kwargs) 
```

Creates input proto from files.

**Parameters:** 
- `input_id` (*str*) - Input ID
- `image_file` (*str*) - Path to image file
- `video_file` (*str*) - Path to video file
- `audio_file` (*str*) - Path to audio file
- `text_file` (*str*) - Path to text file
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Input proto object

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_input_from_file(
    input_id='demo',
    video_file='path/to/video.mp4'
)
```

### Inputs.get_input_from_bytes

```python
Inputs.get_input_from_bytes(input_id, image_bytes=None, video_bytes=None, audio_bytes=None, text_bytes=None, dataset_id=None, **kwargs) 
```

Creates input proto from bytes.

**Parameters:**
- `input_id` (*str*) - Input ID
- `image_bytes` (*bytes*) - Image bytes
- `video_bytes` (*bytes*) - Video bytes
- `audio_bytes` (*bytes*) - Audio bytes
- `text_bytes` (*bytes*) - Text bytes
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Input proto object

**Example:**
```python
from clarifai.client.input import Inputs
image = open('demo.jpg', 'rb').read()
video = open('demo.mp4', 'rb').read()
input_proto = Inputs.get_input_from_bytes(
    input_id='demo',
    image_bytes=image,
    video_bytes=video
)
```

### Inputs.get_image_inputs_from_folder

```python
Inputs.get_image_inputs_from_folder(folder_path, dataset_id=None, labels=False)
```

Creates input protos from a folder of images.

**Parameters:**
- `folder_path` (*str*) - Path to folder containing images
- `dataset_id` (*str*) - Dataset ID
- `labels` (*bool*) - Use folder name as label if True

**Returns:**
- List of input proto objects

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_image_inputs_from_folder(folder_path='images_folder')
```

### Inputs.get_text_input

```python
Inputs.get_text_input(input_id, raw_text, dataset_id=None, **kwargs)
```

Creates text input proto.

**Parameters:**
- `input_id` (*str*) - Input ID  
- `raw_text` (*str*) - Raw text content
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Text input proto object

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_text_input(
    input_id='demo',
    raw_text='This is a test'
)
```

### Inputs.get_multimodal_input

```python
Inputs.get_multimodal_input(input_id, raw_text=None, text_bytes=None, image_url=None, image_bytes=None, dataset_id=None, **kwargs)
```

Creates multimodal input proto with text and image.

**Parameters:**
- `input_id` (*str*) - Input ID
- `raw_text` (*str*) - Raw text content 
- `text_bytes` (*bytes*) - Text bytes
- `image_url` (*str*) - Image URL
- `image_bytes` (*bytes*) - Image bytes  
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Multimodal input proto object

**Example:**
```python
from clarifai.client.input import Inputs
input_proto = Inputs.get_multimodal_input(
    input_id='demo',
    raw_text='What time of day is it?',
    image_url='https://samples.clarifai.com/metro-north.jpg'
)
```

### Inputs.get_inputs_from_csv

```python
Inputs.get_inputs_from_csv(csv_path, input_type='text', csv_type='raw', dataset_id=None, labels=True)
```

Creates input protos from CSV file.

**Parameters:**
- `csv_path` (*str*) - Path to CSV file
- `input_type` (*str*) - Input type ('text', 'image', 'video', 'audio')
- `csv_type` (*str*) - CSV type ('raw', 'url', 'file_path')
- `dataset_id` (*str*) - Dataset ID
- `labels` (*bool*) - CSV has labels column if True

**Returns:**
- List of input proto objects

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_inputs_from_csv(
    csv_path='data.csv',
    input_type='text',
    csv_type='raw'
)
```

### Inputs.get_text_inputs_from_folder

```python
Inputs.get_text_inputs_from_folder(folder_path, dataset_id=None, labels=False)
```

Creates input protos from folder of text files.

**Parameters:**
- `folder_path` (*str*) - Path to folder containing text files
- `dataset_id` (*str*) - Dataset ID
- `labels` (*bool*) - Use folder name as label if True

**Returns:**
- List of text input proto objects

**Example:**
```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_text_inputs_from_folder(folder_path='text_folder')
```

### Inputs.get_bbox_proto

```python
Inputs.get_bbox_proto(input_id, label, bbox, label_id=None, annot_id=None)
```

Creates annotation proto for bounding box.

**Parameters:**
- `input_id` (*str*) - Input ID
- `label` (*str*) - Annotation label name
- `bbox` (*List*) - Bounding box coordinates [xmin, ymin, xmax, ymax]
- `label_id` (*str*) - Label ID
- `annot_id` (*str*) - Annotation ID

**Returns:** 
- Annotation proto object

**Example:**
```python
from clarifai.client.input import Inputs
Inputs.get_bbox_proto(
    input_id='demo',
    label='dog',
    bbox=[10, 20, 100, 200]
)
```

### Inputs.get_mask_proto

```python
Inputs.get_mask_proto(input_id, label, polygons, label_id=None, annot_id=None)
```

Creates annotation proto for polygon mask.

**Parameters:**
- `input_id` (*str*) - Input ID
- `label` (*str*) - Annotation label name
- `polygons` (*List[List[float]]*) - List of polygon point coordinates
- `label_id` (*str*) - Label ID
- `annot_id` (*str*) - Annotation ID

**Returns:**
- Annotation proto object

**Example:**
```python
from clarifai.client.input import Inputs
Inputs.get_mask_proto(
    input_id='demo',
    label='dog',
    polygons=[[[x1,y1], [x2,y2], [x3,y3]]]
)
```

### Inputs.upload_from_url

```python
Inputs.upload_from_url(input_id, image_url=None, video_url=None, audio_url=None, text_url=None, dataset_id=None, **kwargs)
```

Uploads input from URL.

**Parameters:**
- `input_id` (*str*) - Input ID
- `image_url` (*str*) - Image URL
- `video_url` (*str*) - Video URL
- `audio_url` (*str*) - Audio URL
- `text_url` (*str*) - Text URL
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Upload job ID

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='demo_app')
input_obj.upload_from_url(
    input_id='demo',
    image_url='https://samples.clarifai.com/metro-north.jpg'
)
```

### Inputs.upload_from_file

```python
Inputs.upload_from_file(input_id, image_file=None, video_file=None, audio_file=None, text_file=None, dataset_id=None, **kwargs)
```

Uploads input from file.

**Parameters:**
- `input_id` (*str*) - Input ID
- `image_file` (*str*) - Path to image file
- `video_file` (*str*) - Path to video file
- `audio_file` (*str*) - Path to audio file
- `text_file` (*str*) - Path to text file
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Upload job ID

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

Uploads input from bytes.

**Parameters:**
- `input_id` (*str*) - Input ID
- `image_bytes` (*bytes*) - Image bytes
- `video_bytes` (*bytes*) - Video bytes
- `audio_bytes` (*bytes*) - Audio bytes
- `text_bytes` (*bytes*) - Text bytes
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Upload job ID

### Inputs.upload_text

```python
Inputs.upload_text(input_id, raw_text, dataset_id=None, **kwargs)
```

Uploads text input from raw text.

**Parameters:**
- `input_id` (*str*) - Input ID
- `raw_text` (*str*) - Raw text content
- `dataset_id` (*str*) - Dataset ID
- `**kwargs` - Additional arguments

**Returns:**
- Input job ID

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

Uploads multiple input objects to the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to upload
- `show_log` (*bool*) - Show upload status log if True

**Returns:**
- Tuple of (input_job_id, response)

### Inputs.patch_inputs

```python
Inputs.patch_inputs(inputs, action='merge')
```

Patches existing input objects.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to patch
- `action` (*str*) - Action to perform: 'merge', 'overwrite', or 'remove'

### Inputs.upload_annotations

```python
Inputs.upload_annotations(batch_annot, show_log=True)
```

Uploads image annotations.

**Parameters:**
- `batch_annot` (*List[resources_pb2.Annotation]*) - List of annotation protos
- `show_log` (*bool*) - Show upload log if True

**Returns:**
- List of failed annotations for retry

### Inputs.patch_annotations

```python
Inputs.patch_annotations(batch_annot, action='merge')
```

Patches existing annotations.

**Parameters:**
- `batch_annot` (*List[resources_pb2.Annotation]*) - List of annotation protos
- `action` (*str*) - Action to perform: 'merge', 'overwrite', or 'remove'

### Inputs.patch_concepts

```python
Inputs.patch_concepts(concept_ids, labels=[], values=[], action='overwrite')
```

Patches concepts in the app.

**Parameters:**
- `concept_ids` (*List[str]*) - List of concept IDs
- `labels` (*List[str]*) - List of concept labels
- `values` (*List[float]*) - List of concept values
- `action` (*str*) - Action to perform (only 'overwrite' supported)

### Inputs.delete_inputs

```python
Inputs.delete_inputs(inputs)
```

Deletes input objects from the app.

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

Deletes annotations from inputs.

**Parameters:**
- `input_ids` (*List[str]*) - List of input IDs
- `annotation_ids` (*List[str]*) - Optional list of annotation IDs

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.delete_annotations(input_ids=['input_id_1', 'input_id_2'])
```

**Note:** If annotation_ids are provided, they must match the number and order of input_ids.

### Inputs.download_inputs

```python
Inputs.download_inputs(inputs)
```

Downloads input objects from the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to download

**Returns:**
- List of downloaded input bytes

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

Lists inputs in the app.

**Parameters:**
- `dataset_id` (*str*) - Filter by dataset ID
- `page_no` (*int*) - Page number
- `per_page` (*int*) - Items per page
- `input_type` (*str*) - Filter by type: 'image', 'video', 'audio', 'text'

**Yields:**
- Input objects

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
all_inputs = list(input_obj.list_inputs(input_type='image'))
```

### Inputs.list_annotations

```python
Inputs.list_annotations(batch_input=None, page_no=None, per_page=None)
```

Lists annotations in the app.

**Parameters:**
- `batch_input` (*List[Input]*) - Filter by input objects
- `page_no` (*int*) - Page number
- `per_page` (*int*) - Items per page

**Yields:**
- Annotation objects

**Example:**
```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
all_inputs = list(input_obj.list_inputs(input_type='image'))
all_annotations = list(input_obj.list_annotations(batch_input=all_inputs))
```

## Model

```python
class Model(url=None, model_id=None, model_version={'id': ""}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
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
- `**kwargs` - Additional keyword arguments

**Note:** Either url or model_id must be specified, but not both.

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
param_info = model.get_param_info('batch_size')
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
Model.predict(inputs, runner_selector=None, inference_params={}, output_config={})
```

Makes predictions using the model.

**Parameters:**
- `inputs` (*List[Input]*) - List of inputs to predict on
- `runner_selector` (*RunnerSelector*) - Runner selection config
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Prediction response

### Model.load_input_types

```python
Model.load_input_types()
```

Loads available input types for the model.

### Model.predict_by_filepath

```python
Model.predict_by_filepath(filepath, input_type=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, inference_params={}, output_config={})
```

Makes predictions from file input.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID
- `deployment_id` (*str*) - Deployment ID
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
Model.predict_by_bytes(input_bytes, input_type=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, inference_params={}, output_config={})
```

Makes predictions from bytes input.

**Parameters:**
- `input_bytes` (*bytes*) - Input bytes
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID
- `deployment_id` (*str*) - Deployment ID
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
Model.predict_by_url(url, input_type=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, inference_params={}, output_config={})
```

Makes predictions from URL input.

**Parameters:**
- `url` (*str*) - Input URL
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID 
- `deployment_id` (*str*) - Deployment ID
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
Model.generate(inputs, runner_selector=None, inference_params={}, output_config={})
```

Generates outputs with streaming response.

**Parameters:** 
- `inputs` (*List[Input]*) - List of inputs
- `runner_selector` (*RunnerSelector*) - Runner selection config
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.generate_by_filepath

```python
Model.generate_by_filepath(filepath, input_type=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, inference_params={}, output_config={})
```

Generates outputs from file input with streaming response.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID
- `deployment_id` (*str*) - Deployment ID
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.generate_by_bytes

```python
Model.generate_by_bytes(input_bytes, input_type=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, inference_params={}, output_config={})
```

Generates outputs from bytes input with streaming response.

**Parameters:**
- `input_bytes` (*bytes*) - Input bytes
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID
- `deployment_id` (*str*) - Deployment ID
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.generate_by_url

```python
Model.generate_by_url(url, input_type=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, inference_params={}, output_config={})
```

Generates outputs from URL input with streaming response.

**Parameters:**
- `url` (*str*) - Input URL
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID
- `deployment_id` (*str*) - Deployment ID
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.stream

```python
Model.stream(inputs, runner_selector=None, inference_params={}, output_config={})
```

Streams predictions for input iterator.

**Parameters:**
- `inputs` (*Iterator[List[Input]]*) - Iterator of input lists
- `runner_selector` (*RunnerSelector*) - Runner selection config
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.stream_by_filepath

```python
Model.stream_by_filepath(filepath, input_type=None, compute_cluster_id=None, nodepool_id=None, deployment_id=None, inference_params={}, output_config={})
```

Streams predictions from file input.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID
- `deployment_id` (*str*) - Deployment ID
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

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
Model.create_version_by_file(file_path, input_field_maps, output_field_maps, inference_parameter_configs=None, model_version=None, description="")
```

Creates new model version from local file.

**Parameters:**
- `file_path` (*str*) - Path to model file
- `input_field_maps` (*dict*) - Input field mappings 
- `output_field_maps` (*dict*) - Output field mappings
- `inference_parameter_configs` (*dict*) - Inference parameter configurations
- `model_version` (*str*) - Custom version ID
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

## Workflow

```python
class Workflow(url=None, workflow_id=None, workflow_version={'id': ""}, output_config={'min_value': 0}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Workflow is a class that provides access to Clarifai API endpoints related to Workflow information.

**Parameters:**
- `url` (*str*) - URL to initialize workflow object
- `workflow_id` (*str*) - Workflow ID to interact with
- `workflow_version` (*Dict*) - Workflow version details with ID
- `output_config` (*Dict*) - Output configuration including:
  - `min_value` (*float*) - Minimum prediction confidence threshold
  - `max_concepts` (*int*) - Maximum concepts to return
  - `select_concepts` (*List[Concept]*) - Specific concepts to select
  - `sample_ms` (*int*) - Sampling duration in milliseconds
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication
- `token` (*str*) - Session token for authentication
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments

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
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')

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
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')

**Returns:**
- Workflow prediction response

**Example:**
```python
with open('image.jpg', 'rb') as f:
    bytes_data = f.read()
workflow = Workflow(workflow_id='workflow_id')
prediction = workflow.predict_by_bytes(bytes_data, input_type='image')
```

### Workflow.predict_by_url

```python
Workflow.predict_by_url(url, input_type=None)
```

Makes predictions from URL input.

**Parameters:**
- `url` (*str*) - URL to input
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')

**Example:**
```python
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
workflow = Workflow(workflow_id='workflow_id')
versions = list(workflow.list_versions())
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
workflow = Workflow(workflow_id='workflow_id')
workflow.load_info()
```

## Module

```python
class Module(url=None, module_id=None, module_version={'id': ""}, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Module is a class that provides access to Clarifai API endpoints related to Module information.

**Parameters:**
- `url` (*str*) - URL to initialize module object
- `module_id` (*str*) - Module ID to interact with
- `module_version` (*Dict*) - Module version details with ID
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication
- `token` (*str*) - Session token for authentication 
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments

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
module = Module(module_id='module_id', user_id='user_id', app_id='app_id')
all_module_versions = list(module.list_versions())
```

## Search

```python
class Search(user_id, app_id, top_k=None, metric=DEFAULT_SEARCH_METRIC, algorithm=DEFAULT_SEARCH_ALGORITHM, pagination=False, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None)
```

Search is a class that provides access to Clarifai API endpoints related to searching over inputs.

**Parameters:**
- `user_id` (*str*) - User ID
- `app_id` (*str*) - App ID
- `top_k` (*int*) - Number of top results to return (default 10)
- `metric` (*str*) - Similarity metric ('cosine' or 'euclidean')
- `algorithm` (*str*) - Search algorithm ('nearest_neighbor' or 'brute_force')
- `pagination` (*bool*) - Enable pagination functionality
- `base_url` (*str*) - Base API URL
- `pat` (*str*) - Personal access token
- `token` (*str*) - Session token
- `root_certificates_path` (*str*) - Path to SSL certificates

### Search.query

```python
Search.query(ranks=[{}], filters=[{}], page_no=None, per_page=None)
```

Performs search query with ranking and filtering.

**Parameters:**
- `ranks` (*List[Dict]*) - Ranking criteria. Each dict can contain:
  - `image_url` (*str*) - Image URL
  - `text_raw` (*str*) - Raw text
  - `metadata` (*dict*) - Metadata
  - `geo_point` (*dict*) - Geographic coordinates
  - `concepts` (*List*) - Concept list
- `filters` (*List[Dict]*) - Filtering criteria. Each dict can contain:
  - `input_types` (*List[str]*) - Input types to filter
  - `input_dataset_ids` (*List[str]*) - Dataset IDs to filter
  - `input_status_code` (*int*) - Status code to filter
- `page_no` (*int*) - Page number for pagination
- `per_page` (*int*) - Items per page

**Returns:**
- Generator yielding search results

**Examples:**
```python
from clarifai.client.search import Search
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')
results = search.query(
    filters=[{
        'input_types': ['image', 'text'],
        'input_status_code': 30000
    }]
)

search = Search(
    user_id='user_id',
    app_id='app_id',
    metric='cosine',
    pagination=True
)
results = search.query(
    ranks=[{'image_url': 'https://samples.clarifai.com/dog.tiff'}],
    page_no=2,
    per_page=5
)
```

## ComputeCluster

```python
class ComputeCluster(compute_cluster_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

ComputeCluster is a class that provides access to Clarifai API endpoints related to Compute Cluster information.

**Parameters:**
- `compute_cluster_id` (*str*) - ComputeCluster ID to interact with
- `user_id` (*str*) - User ID
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token
- `token` (*str*) - Session token
- `root_certificates_path` (*str*) - Path to SSL certificates
- `**kwargs` - Additional configurations

### ComputeCluster.list_nodepools

```python
ComputeCluster.list_nodepools(page_no=None, per_page=None)
```

Lists all nodepools in the compute cluster.

**Parameters:**
- `page_no` (*int*) - Page number for pagination
- `per_page` (*int*) - Items per page

**Yields:**
- Nodepool objects

**Example:**
```python
from clarifai.client.compute_cluster import ComputeCluster
compute_cluster = ComputeCluster(
    compute_cluster_id="compute_cluster_id",
    user_id="user_id"
)
all_nodepools = list(compute_cluster.list_nodepools())
```

### ComputeCluster.create_nodepool

```python
ComputeCluster.create_nodepool(config_filepath, nodepool_id=None)
```

Creates a new nodepool in the compute cluster.

**Parameters:**
- `config_filepath` (*str*) - Path to nodepool configuration YAML file
- `nodepool_id` (*str*) - Optional custom nodepool ID

**Returns:**
- Nodepool object

**Example:**
```python
compute_cluster = ComputeCluster(
    compute_cluster_id="compute_cluster_id",
    user_id="user_id"
)
nodepool = compute_cluster.create_nodepool(config_filepath="config.yml")
```

### ComputeCluster.nodepool

```python
ComputeCluster.nodepool(nodepool_id)
```

Gets a specific nodepool by ID.

**Parameters:**
- `nodepool_id` (*str*) - ID of nodepool to retrieve

**Returns:**
- Nodepool object

**Example:**
```python
compute_cluster = ComputeCluster(
    compute_cluster_id="compute_cluster_id",
    user_id="user_id"
)
nodepool = compute_cluster.nodepool(nodepool_id="nodepool_id")
```

### ComputeCluster.delete_nodepools

```python
ComputeCluster.delete_nodepools(nodepool_ids)
```

Deletes multiple nodepools.

**Parameters:**
- `nodepool_ids` (*List[str]*) - List of nodepool IDs to delete

**Example:**
```python
compute_cluster = ComputeCluster(
    compute_cluster_id="compute_cluster_id",
    user_id="user_id"
)
compute_cluster.delete_nodepools(
    nodepool_ids=["nodepool_id1", "nodepool_id2"]
)
```

## Nodepool

```python
class Nodepool(nodepool_id=None, user_id=None, base_url="https://api.clarifai.com", pat=None, token=None, root_certificates_path=None, **kwargs)
```

Nodepool is a class that provides access to Clarifai API endpoints related to Nodepool information.

**Parameters:**
- `nodepool_id` (*str*) - Nodepool ID to interact with
- `user_id` (*str*) - User ID
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token
- `token` (*str*) - Session token
- `root_certificates_path` (*str*) - Path to SSL certificates
- `**kwargs` - Additional configurations

### Nodepool.list_deployments

```python
Nodepool.list_deployments(filter_by={}, page_no=None, per_page=None)
```

Lists all deployments in the nodepool.

**Parameters:**
- `filter_by` (*Dict[str, Any]*) - Filtering criteria
- `page_no` (*int*) - Page number
- `per_page` (*int*) - Items per page

**Yields:**
- Deployment objects

**Example:**
```python
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
deployments = list(nodepool.list_deployments())
```

### Nodepool.create_deployment

```python
Nodepool.create_deployment(config_filepath, deployment_id=None)
```

Creates new deployment in the nodepool.

**Parameters:**
- `config_filepath` (*str*) - Path to deployment configuration YAML
- `deployment_id` (*str*) - Optional custom deployment ID

**Returns:**
- Deployment object

**Example:**
```python
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
deployment = nodepool.create_deployment(config_filepath="config.yml")
```

### Nodepool.deployment

```python
Nodepool.deployment(deployment_id)
```

Gets specific deployment by ID.

**Parameters:**
- `deployment_id` (*str*) - Deployment ID to retrieve

**Returns:**
- Deployment object

**Example:**
```python
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
deployment = nodepool.deployment(deployment_id="deployment_id")
```

### Nodepool.delete_deployments

```python
Nodepool.delete_deployments(deployment_ids)
```

Deletes multiple deployments.

**Parameters:**
- `deployment_ids` (*List[str]*) - List of deployment IDs to delete

**Example:**
```python
nodepool = Nodepool(nodepool_id="nodepool_id", user_id="user_id")
nodepool.delete_deployments(
    deployment_ids=["deployment_id1", "deployment_id2"]
)
```

### Nodepool.get_runner_selector

```python
Nodepool.get_runner_selector(user_id, compute_cluster_id, nodepool_id)
```

Returns RunnerSelector for specified compute cluster and nodepool.

**Parameters:**
- `user_id` (*str*) - User ID
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*) - Nodepool ID

**Returns:**
- RunnerSelector protobuf object

**Example:**
```python
runner_selector = Nodepool.get_runner_selector(
    user_id="user_id",
    compute_cluster_id="cluster_id",
    nodepool_id="nodepool_id"
)
```
