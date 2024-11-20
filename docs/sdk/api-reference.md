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
class User(self,
             user_id: str = None,
             base_url: str = "https://api.clarifai.com", 
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

User is a class that provides access to Clarifai API endpoints related to user information.

### User.\__init\__()

```python
def __init__(self,
             user_id: str = None,
             base_url: str = "https://api.clarifai.com", 
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes a **User** object.

**Parameters:**
- `user_id` (*str*) - The user ID for the user to interact with 
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - A session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to the SSL root certificates file
- `**kwargs` - Additional keyword arguments

### User.app()

```python
def app(self, app_id: str, **kwargs) -> App
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

### User.create_app()

```python
def create_app(self, app_id: str, base_workflow: str = 'Empty', **kwargs) -> App
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

### User.create_runner()

```python
def create_runner(self, runner_id: str, labels: List[str], description: str) -> dict
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

### User.delete_app()

```python
def delete_app(self, app_id: str) -> None
```

Deletes an app by app id.

**Parameters:**
- `app_id` (*str*) - The ID of the app to delete

**Example:**
```python
from clarifai.client.user import User
User("user_id").delete_app("app_id")
```

### User.delete_runner()

```python
def delete_runner(self, runner_id: str) -> None
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

### User.list_apps()

```python
def list_apps(self, filter_by: Dict[str, Any] = {}, page_no: int = None, per_page: int = None) -> Generator[App, None, None]
```

Lists all apps for the user.

**Parameters:**
- `filter_by` (*dict*) - Dictionary of filters
- `page_no` (*int*) - Page number to list
- `per_page` (*int*) - Items per page

**Yields:** 
- App objects

**Example:**
```python
from clarifai.client.user import User
apps = list(User("user_id").list_apps())
```

### User.list_runners()

```python
def list_runners(self, filter_by: Dict[str, Any] = {}, page_no: int = None, per_page: int = None) -> Generator[dict, None, None]
```

Lists all runners for the user.

**Parameters:**
- `filter_by` (*dict*) - Dictionary of filters
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

### User.runner()

```python
def runner(self, runner_id: str) -> dict
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

### User._process_compute_cluster_config()

```python
def _process_compute_cluster_config(self, config_filepath: str) -> Dict[str, Any]
```

Internal method to process compute cluster configuration from YAML file.

**Parameters:**
- `config_filepath` (*str*) - Path to configuration YAML file

**Returns:**
- Dict containing processed compute cluster configuration

### User.create_compute_cluster()

```python
def create_compute_cluster(self, config_filepath: str, compute_cluster_id: str = None) -> ComputeCluster
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

### User.compute_cluster()

```python
def compute_cluster(self, compute_cluster_id: str) -> ComputeCluster
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

### User.list_compute_clusters()

```python
def list_compute_clusters(self, page_no: int = None, per_page: int = None) -> Generator[dict, None, None]
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

### User.delete_compute_clusters()

```python
def delete_compute_clusters(self, compute_cluster_ids: List[str]) -> None
```

Deletes multiple compute clusters by their IDs.

**Parameters:**
- `compute_cluster_ids` (*List[str]*) - List of compute cluster IDs to delete

**Example:**
```python
from clarifai.client.user import User
User("user_id").delete_compute_clusters(["cluster_id1", "cluster_id2"])
```

### User.patch_app()

```python
def patch_app(self, app_id: str, action: str = 'overwrite', **kwargs) -> App
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
class App(url: str = None,
          app_id: str = None,
          user_id: str = None,
          base_url: str = "https://api.clarifai.com",
          pat: str = None,
          token: str = None,
          root_certificates_path: str = None,
          **kwargs)
```

App is a class that provides access to Clarifai API endpoints related to App information.

### App.\__init\__()

```python
def __init__(self,
             url: str = None,
             app_id: str = None,
             user_id: str = None,
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes an **App** object.

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

### App.create_concepts()

```python
def create_concepts(self, concept_ids: List[str], concepts: List[str] = []) -> None
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

### App.create_concept_relations()

```python
def create_concept_relations(self, subject_concept_id: str, object_concept_ids: List[str], predicates: List[str]) -> None
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

### App.create_dataset()

```python
def create_dataset(self, dataset_id: str, **kwargs) -> Dataset
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

### App.create_model()

```python
def create_model(self, model_id: str, **kwargs) -> Model
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

### App.create_module()

```python
def create_module(self, module_id: str, description: str, **kwargs) -> Module
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

### App.create_workflow()

```python
def create_workflow(self, config_filepath: str, generate_new_id: bool = False, display: bool = True) -> Workflow
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

### App.dataset()

```python
def dataset(self, dataset_id: str, dataset_version_id: str = None, **kwargs) -> Dataset
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

### App.delete_concept_relations()

```python
def delete_concept_relations(self, concept_id: str, concept_relation_ids: List[str] = []) -> None
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

### App.delete_dataset()

```python
def delete_dataset(self, dataset_id: str) -> None
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

### App.delete_model()

```python
def delete_model(self, model_id: str) -> None
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

### App.delete_module()

```python
def delete_module(self, module_id: str) -> None
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

### App.delete_workflow()

```python
def delete_workflow(self, workflow_id: str) -> None
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

### App.get_input_count()

```python
def get_input_count(self) -> int
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

### App.inputs()

```python
def inputs(self) -> Inputs
```

Returns an Input object.

**Returns:**
- Inputs object for managing app inputs

### App.list_concepts()

```python
def list_concepts(self, page_no: int = None, per_page: int = None) -> Generator[Concept, None, None]
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

### App.list_datasets()

```python
def list_datasets(self, page_no: int = None, per_page: int = None) -> Generator[Dataset, None, None]
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

### App.list_installed_module_versions()

```python
def list_installed_module_versions(self, filter_by: Dict[str, Any] = {}, page_no: int = None, per_page: int = None) -> Generator[Module, None, None]
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

### App.list_models()

```python
def list_models(self, filter_by: Dict[str, Any] = {}, only_in_app: bool = True, page_no: int = None, per_page: int = None) -> Generator[Model, None, None]
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

### App.list_modules()

```python
def list_modules(self, filter_by: Dict[str, Any] = {}, only_in_app: bool = True, page_no: int = None, per_page: int = None) -> Generator[Module, None, None]
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

### App.list_trainable_model_types()

```python
def list_trainable_model_types(self) -> List[str]
```

Lists trainable model types.

**Returns:**
- List of trainable model type names

**Example:**
```python
from clarifai.client.app import App
types = app.list_trainable_model_types()
```

### App.list_workflows()

```python
def list_workflows(self, filter_by: Dict[str, Any] = {}, only_in_app: bool = True, page_no: int = None, per_page: int = None) -> Generator[Workflow, None, None]
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

### App.model()

```python
def model(self, model_id: str, model_version: Dict = {'id': ""}, **kwargs) -> Model
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

### App.module()

```python
def module(self, module_id: str, **kwargs) -> Module
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

### App.patch_dataset()

```python
def patch_dataset(self, dataset_id: str, action: str = 'merge', **kwargs) -> Dataset
```

Updates a dataset.

**Parameters:**
- `dataset_id` (*str*) - Dataset ID to update
- `action` (*str*) - Update action ('merge'/'overwrite'/'remove')
- `**kwargs` - Properties to update

**Returns:**
- Updated Dataset object

### App.patch_model()

```python
def patch_model(self, model_id: str, action: str = 'merge', **kwargs) -> Model
```

Updates a model.

**Parameters:**
- `model_id` (*str*) - Model ID to update
- `action` (*str*) - Update action ('merge'/'overwrite'/'remove')
- `**kwargs` -

### App.search_concept_relations()

```python
def search_concept_relations(self, concept_id: str = None, predicate: str = None, page_no: int = None, per_page: int = None, show_tree: bool = False) -> Generator[ConceptRelation, None, None]
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

### App._process_workflow_config()

```python
def _process_workflow_config(self, config_filepath: str)
```

Internal method to process workflow configuration from YAML file.

**Parameters:**
- `config_filepath` (*str*) - Path to workflow configuration YAML file

**Returns:**
- Tuple of workflow configuration and nodes

### App.workflow()

```python
def workflow(self, workflow_id: str, **kwargs) -> Workflow
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

### App.patch_workflow()

```python
def patch_workflow(self, workflow_id: str, action: str = 'merge', config_filepath: str = None, **kwargs) -> Workflow
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
class Dataset(url: str = None,
             dataset_id: str = None,
             dataset_version_id: str = None,
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Dataset is a class that provides access to Clarifai API endpoints related to Dataset information.

### Dataset.\__init\__()

```python
def __init__(self,
             url: str = None,
             dataset_id: str = None,
             dataset_version_id: str = None,
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes a **Dataset** object.

**Parameters:**
- `url` (*str*) - The URL to initialize the dataset object
- `dataset_id` (*str*) - The Dataset ID within the App to interact with
- `dataset_version_id` (*str*) - Dataset Version ID to interact with
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - Session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments

### Dataset.create_version()

```python
def create_version(self, **kwargs) -> 'Dataset'
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

### Dataset.delete_version()

```python
def delete_version(self, version_id: str) -> None
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

### Dataset.list_versions()

```python
def list_versions(self, page_no: int = None, per_page: int = None) -> Generator['Dataset', None, None]
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

### Dataset.list_inputs()

```python
def list_inputs(self, page_no: int = None, per_page: int = None, input_type: str = None) -> Generator[Input, None, None]
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

### Dataset.\__iter\__()

```python
def __iter__(self) -> Iterator[DatasetExportReader]
```

Makes the Dataset class iterable, returning an iterator over exported dataset contents.

**Returns:**
- Iterator of DatasetExportReader that provides access to dataset contents

**Example:**
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id')
for entry in dataset:
    # Process each dataset entry
    pass
```

### Dataset._concurrent_annot_upload()

```python
def _concurrent_annot_upload(self, annots: List[List[resources_pb2.Annotation]]) -> Union[List[resources_pb2.Annotation], List[None]]
```

Internal method for concurrent annotation uploads.

**Parameters:**
- `annots` (*List[List[resources_pb2.Annotation]]*) - Annotation protos to upload

**Returns:**
- List of failed annotation protos

### Dataset._delete_failed_inputs()

```python
def _delete_failed_inputs(self, batch_input_ids: List[int], dataset_obj: ClarifaiDatasetType, upload_response: MultiInputResponse = None, batch_no: Optional[int] = None) -> Tuple[List[int], List[int]]
```

Internal method to delete failed input IDs.

**Parameters:**
- `batch_input_ids` (*List[int]*) - Batch input IDs
- `dataset_obj` (*ClarifaiDatasetType*) - Dataset object
- `upload_response` (*MultiInputResponse*) - Upload response proto
- `batch_no` (*Optional[int]*) - Batch number

**Returns:**
- Tuple of success and failed input ID lists

### Dataset._upload_inputs_annotations()

```python
def _upload_inputs_annotations(self, batch_input_ids: List[int], dataset_obj: ClarifaiDatasetType, batch_no: Optional[int] = None, is_retry_duplicates: bool = False) -> Tuple[List[int], List[resources_pb2.Annotation], MultiInputResponse]
```

Internal method to upload input batches with annotations.

**Parameters:**
- `batch_input_ids` (*List[int]*) - Batch input IDs
- `dataset_obj` (*ClarifaiDatasetType*) - Dataset object
- `batch_no` (*Optional[int]*) - Batch number 
- `is_retry_duplicates` (*bool*) - Whether retrying duplicates

**Returns:**
- Tuple containing failed IDs, retry annotations and response

### Dataset._retry_uploads()

```python
def _retry_uploads(self, failed_input_ids: List[int], retry_annot_protos: List[resources_pb2.Annotation], dataset_obj: ClarifaiDatasetType, batch_no: Optional[int]) -> None
```

Internal method to retry failed uploads.

**Parameters:**
- `failed_input_ids` (*List[int]*) - Failed input IDs
- `retry_annot_protos` (*List[resources_pb2.Annotation]*) - Annotations to retry
- `dataset_obj` (*ClarifaiDatasetType*) - Dataset object
- `batch_no` (*Optional[int]*) - Batch number

### Dataset._data_upload()

```python
def _data_upload(self, dataset_obj: ClarifaiDatasetType, is_log_retry: bool = False, log_retry_ids: List[int] = None, **kwargs) -> None
```

Internal method for dataset uploads.

**Parameters:**
- `dataset_obj` (*ClarifaiDatasetType*) - Dataset object
- `is_log_retry` (*bool*) - Whether retrying from logs
- `log_retry_ids` (*List[int]*) - IDs to retry
- `**kwargs` - Additional arguments

### Dataset.upload_dataset()

```python
def upload_dataset(self, dataloader: Type[ClarifaiDataLoader], batch_size: int = 32, get_upload_status: bool = False, log_warnings: bool = False, **kwargs) -> None
```

Uploads a dataset to the app.

**Parameters:**
- `dataloader` (*Type[ClarifaiDataLoader]*) - Data loader object
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

### Dataset.retry_upload_from_logs()

```python
def retry_upload_from_logs(self, log_file_path: str, dataloader: Type[ClarifaiDataLoader], retry_duplicates: bool = False, log_warnings: bool = False, **kwargs) -> None
```

Retries failed uploads from logs.

**Parameters:**
- `log_file_path` (*str*) - Path to log file
- `dataloader` (*Type[ClarifaiDataLoader]*) - Data loader object
- `retry_duplicates` (*bool*) - Retry duplicate inputs if True
- `log_warnings` (*bool*) - Save warnings to log file if True
- `**kwargs` - Additional arguments

### Dataset.upload_from_csv()

```python
def upload_from_csv(self, csv_path: str, input_type: str = 'text', csv_type: str = None, labels: bool = True, batch_size: int = 128) -> None
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

### Dataset.upload_from_folder()

```python
def upload_from_folder(self, folder_path: str, input_type: str, labels: bool = False, batch_size: int = 128) -> None
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

### Dataset.get_upload_status()

```python
def get_upload_status(self, dataloader: Type[ClarifaiDataLoader] = None, delete_version: bool = False, timeout: int = 600, pre_upload_stats: Tuple[Dict[str, int], Dict[str, int]] = None, pre_upload: bool = False) -> Optional[Tuple[Dict[str, int], Dict[str, int]]]
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

### Dataset.merge_dataset()

```python
def merge_dataset(self, merge_dataset_id: str) -> None
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

### Dataset.archive_zip()

```python
def archive_zip(self, wait: bool = True) -> str
```

Gets dataset archive as ZIP.

**Parameters:**
- `wait` (*bool*) - Wait for export completion if True

**Returns:**
- URL to download archive

### Dataset.export()

```python
def export(self, save_path: str, archive_url: str = None, local_archive_path: str = None, split: str = 'all', num_workers: int = 4) -> None
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

## Input

```python
class Inputs(user_id: str = None,
            app_id: str = None,
            logger_level: str = "INFO", 
            base_url: str = "https://api.clarifai.com",
            pat: str = None,
            token: str = None,
            root_certificates_path: str = None,
            **kwargs)
```

Inputs is a class that provides access to Clarifai API endpoints related to Input information.

### Inputs.\__init\__()

```python
def __init__(self,
             user_id: str = None,
             app_id: str = None,
             logger_level: str = "INFO",
             base_url: str = "https://api.clarifai.com", 
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes an Input object.

**Parameters:**
- `user_id` (*str*) - User ID for authentication
- `app_id` (*str*) - App ID for the application to interact with 
- `logger_level` (*str*) - Logging level. Default "INFO"
- `base_url` (*str*) - Base API url. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication. Can be set as env var CLARIFAI_PAT
- `token` (*str*) - Session token for authentication. Can be set as env var CLARIFAI_SESSION_TOKEN
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments

### Inputs._get_proto()

```python
@staticmethod 
def _get_proto(input_id: str,
               dataset_id: str = None,
               imagepb: Image = None,
               video_pb: Video = None, 
               audio_pb: Audio = None,
               text_pb: Text = None,
               geo_info: List = None,
               labels: List = None,
               label_ids: List = None,
               metadata: Struct = None) -> Input
```

Creates an input proto object.

**Parameters:**
- `input_id` (*str*) - Input ID
- `dataset_id` (*str*) - Dataset ID to add input to
- `imagepb` (*Image*) - Image proto
- `video_pb` (*Video*) - Video proto 
- `audio_pb` (*Audio*) - Audio proto
- `text_pb` (*Text*) - Text proto
- `geo_info` (*List*) - List [longitude, latitude] for geo point
- `labels` (*List*) - List of label names
- `label_ids` (*List*) - List of label IDs 
- `metadata` (*Struct*) - Metadata struct

**Returns:**
- Input proto object

### Inputs.get_input_from_url()

```python
@staticmethod
def get_input_from_url(input_id: str,
                      image_url: str = None,
                      video_url: str = None,
                      audio_url: str = None, 
                      text_url: str = None,
                      dataset_id: str = None,
                      **kwargs) -> Input
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

### Inputs.get_input_from_file()

```python
@staticmethod
def get_input_from_file(input_id: str,
                       image_file: str = None, 
                       video_file: str = None,
                       audio_file: str = None,
                       text_file: str = None,
                       dataset_id: str = None,
                       **kwargs) -> Input
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

### Inputs.get_input_from_bytes()

```python
@staticmethod
def get_input_from_bytes(input_id: str,
                        image_bytes: bytes = None,
                        video_bytes: bytes = None,
                        audio_bytes: bytes = None,
                        text_bytes: bytes = None,
                        dataset_id: str = None,
                        **kwargs) -> Input
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

### Inputs.get_image_inputs_from_folder()

```python
@staticmethod
def get_image_inputs_from_folder(folder_path: str,
                               dataset_id: str = None,
                               labels: bool = False) -> List[Input]
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

### Inputs.get_text_input()

```python
@staticmethod
def get_text_input(input_id: str,
                   raw_text: str,
                   dataset_id: str = None,
                   **kwargs) -> Text
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

### Inputs.get_multimodal_input()

```python
@staticmethod
def get_multimodal_input(input_id: str,
                        raw_text: str = None,
                        text_bytes: bytes = None,
                        image_url: str = None, 
                        image_bytes: bytes = None,
                        dataset_id: str = None,
                        **kwargs) -> Text
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

### Inputs.get_inputs_from_csv()

```python
@staticmethod
def get_inputs_from_csv(csv_path: str,
                       input_type: str = 'text',
                       csv_type: str = 'raw',
                       dataset_id: str = None,
                       labels: str = True) -> List[Text]
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

### Inputs.get_text_inputs_from_folder()

```python
@staticmethod
def get_text_inputs_from_folder(folder_path: str,
                              dataset_id: str = None,
                              labels: bool = False) -> List[Text]
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

### Inputs.get_bbox_proto()

```python
@staticmethod
def get_bbox_proto(input_id: str,
                   label: str,
                   bbox: List,
                   label_id: str = None,
                   annot_id: str = None) -> Annotation
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

### Inputs.get_mask_proto()

```python
@staticmethod
def get_mask_proto(input_id: str,
                   label: str, 
                   polygons: List[List[float]],
                   label_id: str = None,
                   annot_id: str = None) -> Annotation
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

### Inputs.upload_from_url()

```python
def upload_from_url(self,
                   input_id: str,
                   image_url: str = None,
                   video_url: str = None,
                   audio_url: str = None,
                   text_url: str = None,
                   dataset_id: str = None,
                   **kwargs) -> str
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

### Inputs.upload_from_file()

```python
def upload_from_file(self,
                    input_id: str,
                    image_file: str = None,
                    video_file: str = None,
                    audio_file: str = None,
                    text_file: str = None,
                    dataset_id: str = None,
                    **kwargs) -> str
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

### Inputs.upload_from_bytes()

```python
def upload_from_bytes(self,
                     input_id: str,
                     image_bytes: bytes = None,
                     video_bytes: bytes = None,
                     audio_bytes: bytes = None,
                     text_bytes: bytes = None,
                     dataset_id: str = None,
                     **kwargs) -> str
```

Uploads input from bytes.

**Parameters:**
- `input_id` (*str*) - Input ID
- `image_bytes` (*bytes*) - Image bytes
- `video_bytes` (*bytes*) - Video bytes
- `audio_bytes` (*bytes*)

### Inputs.upload_text()

```python
def upload_text(self,
                input_id: str,
                raw_text: str,
                dataset_id: str = None,
                **kwargs) -> str
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

### Inputs.upload_inputs()

```python
def upload_inputs(self,
                 inputs: List[Input],
                 show_log: bool = True) -> str
```

Uploads multiple input objects to the app.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to upload
- `show_log` (*bool*) - Show upload status log if True

**Returns:**
- Tuple of (input_job_id, response)

### Inputs.patch_inputs()

```python
def patch_inputs(self,
                inputs: List[Input],
                action: str = 'merge') -> None
```

Patches existing input objects.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to patch
- `action` (*str*) - Action to perform: 'merge', 'overwrite', or 'remove'

### Inputs.upload_annotations()

```python
def upload_annotations(self,
                      batch_annot: List[resources_pb2.Annotation],
                      show_log: bool = True) -> Union[List[resources_pb2.Annotation], List[None]]
```

Uploads image annotations.

**Parameters:**
- `batch_annot` (*List[resources_pb2.Annotation]*) - List of annotation protos
- `show_log` (*bool*) - Show upload log if True

**Returns:**
- List of failed annotations for retry

### Inputs.patch_annotations()

```python
def patch_annotations(self,
                     batch_annot: List[resources_pb2.Annotation],
                     action: str = 'merge') -> None
```

Patches existing annotations.

**Parameters:**
- `batch_annot` (*List[resources_pb2.Annotation]*) - List of annotation protos
- `action` (*str*) - Action to perform: 'merge', 'overwrite', or 'remove'

### Inputs.patch_concepts()

```python
def patch_concepts(self,
                  concept_ids: List[str],
                  labels: List[str] = [],
                  values: List[float] = [],
                  action: str = 'overwrite') -> None
```

Patches concepts in the app.

**Parameters:**
- `concept_ids` (*List[str]*) - List of concept IDs
- `labels` (*List[str]*) - List of concept labels
- `values` (*List[float]*) - List of concept values
- `action` (*str*) - Action to perform (only 'overwrite' supported)

### Inputs._upload_batch()

```python
def _upload_batch(self, inputs: List[Input]) -> List[Input]
```

Internal method to upload a batch of input objects to the app. It handles the upload process, waits for input processing, and manages failed inputs.

**Parameters:**
- `inputs` (*List[Input]*) - List of input objects to upload

**Returns:**
- List of failed input objects that couldn't be uploaded

**Example:**
```python
from clarifai.client.input import Inputs
input_obj = Inputs(user_id='user_id', app_id='app_id')
failed_inputs = input_obj._upload_batch(input_batch)
```

### Inputs.delete_inputs()

```python
def delete_inputs(self,
                 inputs: List[Input]) -> None
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

### Inputs.delete_annotations()

```python
def delete_annotations(self,
                      input_ids: List[str],
                      annotation_ids: List[str] = []) -> None
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

### Inputs.download_inputs()

```python
def download_inputs(self,
                   inputs: List[Input]) -> List[bytes]
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

### Inputs.list_inputs()

```python
def list_inputs(self,
                dataset_id: str = None,
                page_no: int = None,
                per_page: int = None,
                input_type: str = None) -> Generator[Input, None, None]
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

### Inputs.list_annotations()

```python
def list_annotations(self,
                    batch_input: List[Input] = None,
                    page_no: int = None,
                    per_page: int = None) -> Generator[Annotation, None, None]
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

### Inputs._bulk_upload()

```python
def _bulk_upload(self,
                inputs: List[Input],
                batch_size: int = 128) -> None
```

Internal method for uploading large numbers of inputs in batches.

**Parameters:**
- `inputs` (*List[Input]*) - List of input protos to upload
- `batch_size` (*int*) - Batch size for each request (max 128)

### Inputs._wait_for_inputs()

```python
def _wait_for_inputs(self, input_job_id: str) -> bool
```

Internal method to wait for input processing completion.

**Parameters:**
- `input_job_id` (*str*) - Upload job ID

**Returns:**
- True if processed successfully, False if timed out

### Inputs._retry_uploads()

```python
def _retry_uploads(self, failed_inputs: List[Input]) -> None
```

Internal method to retry failed uploads.

**Parameters:**
- `failed_inputs` (*List[Input]*) - Failed input protos

### Inputs._delete_failed_inputs()

```python
def _delete_failed_inputs(self, inputs: List[Input]) -> List[Input]
```

Internal method to delete failed inputs.

**Parameters:**
- `inputs` (*List[Input]*) - Input protos to check

**Returns:**
- List of failed input protos

## Lister

```python
class Lister(page_size: int = 16)
```

Lister is a class for obtaining paginated results from the Clarifai API.

### Lister.\__init\__()

```python
def __init__(self, page_size: int = 16)
```

Initializes a Lister object.

**Parameters:**
- `page_size` (*int*) - Default number of items per page. Default is 16.

### Lister.list_pages_generator()

```python
def list_pages_generator(self,
                        endpoint: Callable,
                        proto_message: Any,
                        request_data: Dict[str, Any],
                        page_no: int = None,
                        per_page: int = None) -> Generator[Dict[str, Any], None, None]
```

Lists pages of a resource with pagination support.

**Parameters:**
- `endpoint` (*Callable*) - API endpoint function to call
- `proto_message` (*Any*) - Protobuf message type for request
- `request_data` (*Dict[str, Any]*) - Request data dictionary
- `page_no` (*int*) - Specific page number to fetch (optional)
- `per_page` (*int*) - Number of items per page (optional)

**Yields:** 
- Dictionary containing resource items from response

## Model

```python
class Model(url: str = None,
           model_id: str = None,
           model_version: Dict = {'id': ""},
           base_url: str = "https://api.clarifai.com",
           pat: str = None,
           token: str = None,
           root_certificates_path: str = None,
           **kwargs)
```

Model is a class that provides access to Clarifai API endpoints related to Model information.

### Model.\__init\__()

```python
def __init__(self,
             url: str = None,
             model_id: str = None,
             model_version: Dict = {'id': ""},
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes a Model object.

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

### Model.list_training_templates()

```python
def list_training_templates(self) -> List[str]
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

### Model.get_params()

```python
def get_params(self,
              template: str = None,
              save_to: str = 'params.yaml') -> Dict[str, Any]
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

### Model.update_params()

```python
def update_params(self, **kwargs) -> None
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

### Model.get_param_info()

```python
def get_param_info(self, param: str) -> Dict[str, Any]
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

### Model.train()

```python
def train(self, yaml_file: str = None) -> str
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

### Model.training_status()

```python
def training_status(self,
                   version_id: str = None,
                   training_logs: bool = False) -> Dict[str, str]
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

### Model.delete_version()

```python
def delete_version(self, version_id: str) -> None
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

### Model.create_version()

```python
def create_version(self, **kwargs) -> 'Model'
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

### Model.list_versions()

```python
def list_versions(self,
                 page_no: int = None,
                 per_page: int = None) -> Generator['Model', None, None]
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

### Model.predict()

```python
def predict(self,
           inputs: List[Input],
           runner_selector: RunnerSelector = None,
           inference_params: Dict = {},
           output_config: Dict = {})
```

Makes predictions using the model.

**Parameters:**
- `inputs` (*List[Input]*) - List of inputs to predict on
- `runner_selector` (*RunnerSelector*) - Runner selection config
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Prediction response

### Model._check_predict_input_type()

```python
def _check_predict_input_type(self, input_type: str) -> None
```

Internal method to validate input type.

**Parameters:**
- `input_type` (*str*) - Input type to validate

### Model.load_input_types()

```python
def load_input_types(self) -> None
```

Loads available input types for the model.

### Model.predict_by_filepath()

```python 
def predict_by_filepath(self,
                       filepath: str, 
                       input_type: str = None,
                       compute_cluster_id: str = None,
                       nodepool_id: str = None,
                       deployment_id: str = None,
                       inference_params: Dict = {},
                       output_config: Dict = {})
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

### Model.predict_by_bytes()

```python
def predict_by_bytes(self,
                    input_bytes: bytes,
                    input_type: str = None,
                    compute_cluster_id: str = None,
                    nodepool_id: str = None,
                    deployment_id: str = None, 
                    inference_params: Dict = {},
                    output_config: Dict = {})
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

### Model.predict_by_url()

```python
def predict_by_url(self,
                  url: str,
                  input_type: str = None,
                  compute_cluster_id: str = None,
                  nodepool_id: str = None,
                  deployment_id: str = None,
                  inference_params: Dict = {},
                  output_config: Dict = {})
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

### Model.generate()

```python
def generate(self,
            inputs: List[Input],
            runner_selector: RunnerSelector = None,
            inference_params: Dict = {},
            output_config: Dict = {})
```

Generates outputs with streaming response.

**Parameters:** 
- `inputs` (*List[Input]*) - List of inputs
- `runner_selector` (*RunnerSelector*) - Runner selection config
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.generate_by_filepath()

```python
def generate_by_filepath(self,
                        filepath: str,
                        input_type: str = None,
                        compute_cluster_id: str = None,
                        nodepool_id: str = None,
                        deployment_id: str = None,
                        inference_params: Dict = {},
                        output_config: Dict = {})
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

### Model.generate_by_bytes()

```python
def generate_by_bytes(self,
                     input_bytes: bytes,
                     input_type: str = None,
                     compute_cluster_id: str = None,
                     nodepool_id: str = None,
                     deployment_id: str = None,
                     inference_params: Dict = {},
                     output_config: Dict = {})
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

### Model.generate_by_url()

```python
def generate_by_url(self,
                   url: str,
                   input_type: str = None,
                   compute_cluster_id: str = None,
                   nodepool_id: str = None,
                   deployment_id: str = None,
                   inference_params: Dict = {},
                   output_config: Dict = {})
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


### Model._req_iterator()

```python
def _req_iterator(self,
                 input_iterator: Iterator[List[Input]],
                 runner_selector: RunnerSelector)
```

Internal method to create request iterator for streaming predictions.

**Parameters:**
- `input_iterator` (*Iterator[List[Input]]*) - Iterator of input lists
- `runner_selector` (*RunnerSelector*) - Runner selection configuration

**Yields:**
- Model output request objects


### Model.stream()

```python
def stream(self,
          inputs: Iterator[List[Input]],
          runner_selector: RunnerSelector = None,
          inference_params: Dict = {},
          output_config: Dict = {})
```

Streams predictions for input iterator.

**Parameters:**
- `inputs` (*Iterator[List[Input]]*) - Iterator of input lists
- `runner_selector` (*RunnerSelector*) - Runner selection config
- `inference_params` (*Dict*) - Inference parameters
- `output_config` (*Dict*) - Output configuration

**Returns:**
- Generator yielding output responses

### Model.stream_by_filepath()

```python
def stream_by_filepath(self,
                      filepath: str,
                      input_type: str = None,
                      compute_cluster_id: str = None,
                      nodepool_id: str = None,
                      deployment_id: str = None,
                      inference_params: Dict = {},
                      output_config: Dict = {})
```

Streams predictions from file input.

**Parameters:**
- `filepath` (*str*) - Path to input file
- `input_type` (*str*) - Input type ('image', 'text', 'video', 'audio')
- `compute_cluster_id` (*str*) - Compute cluster ID
- `nodepool_id` (*str*)


### Model._override_model_version()

```python
def _override_model_version(self,
                          inference_params: Dict = {},
                          output_config: Dict = {}) -> None
```

Internal method to override model version configuration.

**Parameters:**
- `inference_params` (*Dict*) - Inference parameters to override
- `output_config` (*Dict*) - Output configuration including:
  - `min_value` (*float*) - Minimum confidence threshold
  - `max_concepts` (*int*) - Maximum concepts to return
  - `select_concepts` (*List*) - Specific concepts to return
  - `sample_ms` (*int*) - Sample duration in milliseconds

### Model._list_concepts()

```python
def _list_concepts(self) -> List[str]
```

Internal method to list all concepts for the model type.

**Returns:**
- List of concept IDs

### Model._make_pretrained_config_proto()

```python
@staticmethod
def _make_pretrained_config_proto(input_field_maps: dict,
                                output_field_maps: dict,
                                url: str = None)
```

Internal method to create pretrained model config protobuf.

**Parameters:**
- `input_field_maps` (*dict*) - Input field mappings
- `output_field_maps` (*dict*) - Output field mappings
- `url` (*str*) - Optional direct download URL

**Returns:**
- PretrainedModelConfig protobuf object

### Model._make_inference_params_proto()

```python
@staticmethod
def _make_inference_params_proto(inference_parameters: List[Dict]) -> List[resources_pb2.ModelTypeField]
```

Internal method to convert inference parameters to protobuf format.

**Parameters:**
- `inference_parameters` (*List[Dict]*) - List of parameter configurations with:
  - `field_type` - Parameter type
  - `path` - Parameter path
  - `default_value` - Default value
  - `description` - Parameter description

**Returns:**
- List of ModelTypeField protobuf objects


### Model.evaluate()

```python
def evaluate(self,
            dataset: Dataset = None,
            dataset_id: str = None,
            dataset_app_id: str = None,
            dataset_user_id: str = None,
            dataset_version_id: str = None,
            eval_id: str = None,
            extended_metrics: dict = None,
            eval_info: dict = None) -> resources_pb2.EvalMetrics
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

### Model.get_eval_by_id()

```python
def get_eval_by_id(self,
                   eval_id: str,
                   label_counts: bool = False,
                   test_set: bool = False,
                   binary_metrics: bool = False,
                   confusion_matrix: bool = False,
                   metrics_by_class: bool = False,
                   metrics_by_area: bool = False) -> resources_pb2.EvalMetrics
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

### Model.get_latest_eval()

```python
def get_latest_eval(self,
                   label_counts: bool = False,
                   test_set: bool = False,
                   binary_metrics: bool = False, 
                   confusion_matrix: bool = False,
                   metrics_by_class: bool = False,
                   metrics_by_area: bool = False) -> Union[resources_pb2.EvalMetrics, None]
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

### Model.list_evaluations()

```python
def list_evaluations(self) -> resources_pb2.EvalMetrics
```

Lists all evaluation metrics for current model version.

**Returns:**
- List of evaluation metrics

### Model.get_eval_by_dataset()

```python
def get_eval_by_dataset(self, dataset: Dataset) -> List[resources_pb2.EvalMetrics]
```

Gets all evaluation data for a dataset.

**Parameters:**
- `dataset` (*Dataset*) - Dataset to get evaluations for

**Returns:**
- List of evaluation metrics for dataset

### Model.get_raw_eval()

```python
def get_raw_eval(self,
                dataset: Dataset = None,
                eval_id: str = None,
                return_format: str = 'array') -> Union[resources_pb2.EvalTestSetEntry, 
                                                     Tuple[np.array, np.array, list, List[Input]],
                                                     Tuple[List[dict], List[dict]]]
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

### Model.create_version_by_file()

```python
def create_version_by_file(self,
                          file_path: str,
                          input_field_maps: dict,
                          output_field_maps: dict,
                          inference_parameter_configs: dict = None,
                          model_version: str = None,
                          description: str = "") -> 'Model'
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

### Model.create_version_by_url()

```python
def create_version_by_url(self,
                         url: str,
                         input_field_maps: dict,
                         output_field_maps: dict,
                         inference_parameter_configs: List[dict] = None,
                         description: str = "") -> 'Model'
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

### Model.export()

```python
def export(self, export_dir: str = None) -> None
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

### Model.load_info()

```python
def load_info(self) -> None
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
class Workflow(url: str = None,
              workflow_id: str = None,
              workflow_version: Dict = {'id': ""},
              output_config: Dict = {'min_value': 0},
              base_url: str = "https://api.clarifai.com",
              pat: str = None,
              token: str = None,
              root_certificates_path: str = None,
              **kwargs)
```

Workflow is a class that provides access to Clarifai API endpoints related to Workflow information.

### Workflow.\__init\__()

```python
def __init__(self,
             url: str = None,
             workflow_id: str = None,
             workflow_version: Dict = {'id': ""},
             output_config: Dict = {'min_value': 0},
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes a Workflow object.

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

### Workflow.predict()

```python
def predict(self, 
           inputs: List[Input],
           workflow_state_id: str = None)
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

### Workflow.predict_by_filepath()

```python
def predict_by_filepath(self,
                       filepath: str,
                       input_type: str = None)
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

### Workflow.predict_by_bytes()

```python
def predict_by_bytes(self,
                    input_bytes: bytes,
                    input_type: str = None)
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

### Workflow.predict_by_url()

```python
def predict_by_url(self,
                  url: str,
                  input_type: str = None)
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

### Workflow.list_versions()

```python
def list_versions(self,
                 page_no: int = None,
                 per_page: int = None) -> Generator['Workflow', None, None]
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

### Workflow.export()

```python
def export(self, out_path: str)
```

Exports workflow to YAML file.

**Parameters:**
- `out_path` (*str*) - Path to save YAML file

**Example:**
```python
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Demographics")
workflow.export('workflow_config.yml')
```

### Workflow.load_info()

```python
def load_info(self) -> None
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
class Module(url: str = None,
            module_id: str = None,
            module_version: Dict = {'id': ""},
            base_url: str = "https://api.clarifai.com",
            pat: str = None,
            token: str = None,
            root_certificates_path: str = None,
            **kwargs)
```

Module is a class that provides access to Clarifai API endpoints related to Module information.

### Module.\__init\__()

```python
def __init__(self,
             url: str = None,
             module_id: str = None,
             module_version: Dict = {'id': ""},
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes a Module object.

**Parameters:**
- `url` (*str*) - URL to initialize module object
- `module_id` (*str*) - Module ID to interact with
- `module_version` (*Dict*) - Module version details with ID
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token for authentication
- `token` (*str*) - Session token for authentication 
- `root_certificates_path` (*str*) - Path to SSL root certificates file
- `**kwargs` - Additional keyword arguments


### Module.list_versions()

```python
def list_versions(self,
                 page_no: int = None,
                 per_page: int = None) -> Generator['Module', None, None]
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
class Search(user_id: str,
            app_id: str,
            top_k: int = None,
            metric: str = DEFAULT_SEARCH_METRIC,
            algorithm: str = DEFAULT_SEARCH_ALGORITHM,
            pagination: bool = False,
            base_url: str = "https://api.clarifai.com",
            pat: str = None,
            token: str = None,
            root_certificates_path: str = None)
```

Search is a class that provides access to Clarifai API endpoints related to searching over inputs.

### Search.\__init\__()

```python
def __init__(self,
             user_id: str,
             app_id: str,
             top_k: int = None,
             metric: str = DEFAULT_SEARCH_METRIC,
             algorithm: str = DEFAULT_SEARCH_ALGORITHM,
             pagination: bool = False,
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None)
```

Initializes a Search object.

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

**Raises:**
- UserError if:
  - Invalid metric specified
  - Invalid algorithm specified
  - Cosine metric used with nearest neighbor
  - Both top_k and pagination enabled


### Search._get_annot_proto()

```python
def _get_annot_proto(self, **kwargs)
```

Creates Annotation proto from keyword arguments.

**Parameters:**
- `**kwargs` - Supported keys:
  - `image_bytes` (*bytes*) - Raw image data
  - `image_url` (*str*) - Image URL
  - `concepts` (*List*) - Concept list
  - `text_raw` (*str*) - Raw text
  - `metadata` (*dict*) - Metadata
  - `geo_point` (*dict*) - Geographic data

**Returns:**
- Annotation proto message

### Search._get_input_proto()

```python
def _get_input_proto(self, **kwargs)
```

Creates Input proto from keyword arguments.

**Parameters:**
- `**kwargs` - Supported keys:
  - `input_types` (*List[str]*) - Input types list
  - `input_dataset_ids` (*List[str]*) - Dataset IDs
  - `input_status_code` (*int*) - Status code

**Returns:**
- Input proto message

### Search._get_geo_point_proto()

```python
def _get_geo_point_proto(self,
                        longitude: float,
                        latitude: float,
                        geo_limit: float) -> resources_pb2.Geo
```

Creates Geo proto for geographical searches.

**Parameters:**
- `longitude` (*float*) - Longitude coordinate
- `latitude` (*float*) - Latitude coordinate
- `geo_limit` (*float*) - Geographic limit in kilometers

**Returns:**
- Geo proto message


### Search._list_topk_generator()

```python
def _list_topk_generator(self,
                        endpoint: Callable[..., Any],
                        proto_message: Any,
                        request_data: Dict[str, Any]) -> Generator[Dict[str, Any], None, None]
```

Internal generator for top-k search results.

### Search._list_all_pages_generator()

```python
def _list_all_pages_generator(self,
                            endpoint: Callable,
                            proto_message: Any,
                            request_data: Dict[str, Any],
                            page_no: int = None,
                            per_page: int = None) -> Generator[Dict[str, Any], None, None]
```

Internal generator for paginated search results.


### Search.query()

```python
def query(self,
          ranks: List[Dict] = [{}],
          filters: List[Dict] = [{}],
          page_no: int = None,
          per_page: int = None)
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


## Base

```python
class BaseClient(**kwargs)
```

BaseClient is the base class for all classes interacting with Clarifai endpoints. It provides core authentication and API interaction functionality.

### Base.\__init\__()

```python
def __init__(self, **kwargs)
```

Initializes a BaseClient object with authentication and configuration.

**Parameters:**
- `**kwargs` - Configuration parameters including:
  - `user_id` (*str*) - User ID for authentication
  - `app_id` (*str*) - App ID for API interaction
  - `pat` (*str*) - Personal access token
  - `token` (*str*) - Session token
  - `base` (*str*) - Base API URL (default: 'https://api.clarifai.com')
  - `ui` (*str*) - UI URL (default: 'https://clarifai.com')
  - `root_certificates_path` (*str*) - Path to SSL certificates

**Raises:**
- Exception if neither pat nor token is provided

**Note:**
- Must provide either pat (Personal Access Token) or token (Session Token)
- Can set tokens via environment variables CLARIFAI_PAT or CLARIFAI_SESSION_TOKEN


### Base.from_env()

```python
@classmethod
def from_env(cls, validate: bool = False)
```

Creates BaseClient instance from environment variables.

**Parameters:**
- `validate` (*bool*) - Whether to validate credentials

**Returns:**
- BaseClient instance

**Example:**
```python
client = BaseClient.from_env()
```

### Base.from_auth_helper()

```python
@classmethod
def from_auth_helper(cls, auth: ClarifaiAuthHelper, **kwargs)
```

Creates BaseClient instance from existing ClarifaiAuthHelper.

**Parameters:**
- `auth` (*ClarifaiAuthHelper*) - Authentication helper instance
- `**kwargs` - Additional configuration parameters

**Returns:**
- BaseClient instance

**Example:**
```python
auth = ClarifaiAuthHelper(pat="your_pat")
client = BaseClient.from_auth_helper(auth)
```


### Base._grpc_request()

```python
def _grpc_request(self, method: Callable, argument: Any)
```

Makes gRPC requests to the Clarifai API.

**Parameters:**
- `method` (*Callable*) - gRPC method to call
- `argument` (*Any*) - Arguments for the method

**Returns:**
- API response

**Raises:**
- Exception on API error


### Base.convert_string_to_timestamp()

```python
def convert_string_to_timestamp(self, date_str) -> Timestamp
```

Converts string to Protobuf Timestamp.

**Parameters:**
- `date_str` (*str*) - Date string in format 'YYYY-MM-DDThh:mm:ss.sssZ' or 'YYYY-MM-DDThh:mm:ssZ'

**Returns:**
- Protobuf Timestamp object

**Example:**
```python
timestamp = client.convert_string_to_timestamp("2023-01-01T12:00:00.000Z")
```

### Base.process_response_keys()

```python
def process_response_keys(self, old_dict, listing_resource=None)
```

Processes API response dictionary to convert keys to proper format.

**Parameters:**
- `old_dict` (*dict*) - Original response dictionary
- `listing_resource` (*str*) - Optional resource type for listing operations

**Returns:**
- new_dict (dict): The dictionary with processed keys.


## ComputeCluster

```python
class ComputeCluster(compute_cluster_id: str = None,
                    user_id: str = None,
                    base_url: str = "https://api.clarifai.com",
                    pat: str = None,
                    token: str = None,
                    root_certificates_path: str = None,
                    **kwargs)
```

ComputeCluster is a class that provides access to Clarifai API endpoints related to Compute Cluster information.

### ComputeCluster.\__init\__()

```python
def __init__(self,
             compute_cluster_id: str = None,
             user_id: str = None,
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes a ComputeCluster object.

**Parameters:**
- `compute_cluster_id` (*str*) - ComputeCluster ID to interact with
- `user_id` (*str*) - User ID
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token
- `token` (*str*) - Session token
- `root_certificates_path` (*str*) - Path to SSL certificates
- `**kwargs` - Additional configurations


### ComputeCluster.list_nodepools()

```python
def list_nodepools(self,
                   page_no: int = None,
                   per_page: int = None) -> Generator[Nodepool, None, None]
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

### ComputeCluster.create_nodepool()

```python
def create_nodepool(self,
                   config_filepath: str,
                   nodepool_id: str = None) -> Nodepool
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

### ComputeCluster.nodepool()

```python
def nodepool(self, nodepool_id: str) -> Nodepool
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

### ComputeCluster.delete_nodepools()

```python
def delete_nodepools(self, nodepool_ids: List[str]) -> None
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

### ComputeCluster._process_nodepool_config()

```python
def _process_nodepool_config(self, config_filepath: str) -> Dict[str, Any]
```

Processes nodepool configuration from YAML file.

**Parameters:**
- `config_filepath` (*str*) - Path to YAML configuration file

**Returns:**
- Processed configuration dictionary

**Required Configuration Fields:**
- `nodepool`:
  - `instance_types` - Instance type configurations
  - `node_capacity_type` - Capacity type settings
  - `max_instances` - Maximum instance count


## Nodepool

```python
class Nodepool(nodepool_id: str = None,
              user_id: str = None,
              base_url: str = "https://api.clarifai.com",
              pat: str = None,
              token: str = None,
              root_certificates_path: str = None,
              **kwargs)
```

Nodepool is a class that provides access to Clarifai API endpoints related to Nodepool information.

### Nodepool.\__init\__()

```python
def __init__(self,
             nodepool_id: str = None,
             user_id: str = None,
             base_url: str = "https://api.clarifai.com",
             pat: str = None,
             token: str = None,
             root_certificates_path: str = None,
             **kwargs)
```

Initializes a Nodepool object.

**Parameters:**
- `nodepool_id` (*str*) - Nodepool ID to interact with
- `user_id` (*str*) - User ID
- `base_url` (*str*) - Base API URL. Default "https://api.clarifai.com"
- `pat` (*str*) - Personal access token
- `token` (*str*) - Session token
- `root_certificates_path` (*str*) - Path to SSL certificates
- `**kwargs` - Additional configurations


### Nodepool.list_deployments()

```python
def list_deployments(self,
                    filter_by: Dict[str, Any] = {},
                    page_no: int = None,
                    per_page: int = None) -> Generator[Deployment, None, None]
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

### Nodepool.create_deployment()

```python
def create_deployment(self,
                     config_filepath: str,
                     deployment_id: str = None) -> Deployment
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

### Nodepool.deployment()

```python
def deployment(self, deployment_id: str) -> Deployment
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

### Nodepool.delete_deployments()

```python
def delete_deployments(self, deployment_ids: List[str]) -> None
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

### Nodepool.get_runner_selector()

```python
@staticmethod
def get_runner_selector(user_id: str,
                       compute_cluster_id: str,
                       nodepool_id: str) -> resources_pb2.RunnerSelector
```

Creates RunnerSelector for specified compute cluster and nodepool.

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

### Nodepool._process_deployment_config()

```python
def _process_deployment_config(self, config_filepath: str) -> Dict[str, Any]
```

Processes deployment configuration from YAML file.

**Parameters:**
- `config_filepath` (*str*) - Path to YAML configuration

**Returns:**
- Processed configuration dictionary

**Required Configuration Fields:**
```yaml
deployment:
  autoscale_config:
    # Autoscaling settings
  worker:
    model:  # or workflow
      # Model/workflow configuration
  scheduling_choice:
    # Scheduling configuration
  nodepools:
    # Nodepool assignments
```


