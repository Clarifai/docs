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
 class User(user_id= '',base_url= "https://api.clarifai.com",pat= '',token= '',**kwargs)
```

User is a class that provides access to Clarifai API endpoints related to user information.

### User.\__init\__()

```python
__init__(user_id='',base_url: str = "https://api.clarifai.com",pat='',token= '',**kwargs)
```

Initializes a **User** object.

#### Parameters

  * **user_id** (*str*) – The user ID for the user to interact with.
  * **base_url** (*str*) - Base API url. Default "https://api.clarifai.com"
  * **pat** (*str*) - A personal access token for authentication.
  * **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
  * **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

### User.app()

```python
app(app_id, **kwargs)
```
Returns an App object for the specified app ID.

#### Parameters

  * **app_id** (*str*) – The app ID for the app to interact with.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the App.

#### Returns

An App object for the specified app ID.

#### Return type

App

#### Example

```python
from clarifai.client.user import User
app = User("user_id").app("app_id")
```
### User.create_app()

```python
create_app(app_id, base_workflow='Language-Understanding', **kwargs)
```
Creates an app for the user.

#### Parameters

  * **app_id** (*str*) – The app ID for the app to create.
  * **base_workflow** (*str*) – The base workflow to use for the app.(Examples: ‘Universal’, ‘Empty’, ‘General’)
  * **\*\*kwargs** – Additional keyword arguments to be passed to the App.

#### Returns

An App object for the specified app ID.

#### Return type

App

#### Example

```python
from clarifai.client.user import User
client = User(user_id="user_id")
app = client.create_app(app_id="app_id",base_workflow="Universal")
```

### User.create_runner()

```python
create_runner(runner_id, labels, description='')
```
Creates a runner

#### Parameters

* **runner_id** (*str*) – The Id of runner to create.
* **labels** (*List[str]*) – Labels to match runner.
* **description (str)** – Description of Runner.

#### Returns

A runner object for the specified Runner ID.

#### Return type

Runner

#### Example

```python
from clarifai.client.user import User
client = User(user_id="user_id")
runner = client.create_runner(runner_id="runner_id", labels=["label to link runner"], description="laptop runner")
```

### User.delete_app()

```python
delete_app(app_id)
```

Deletes an app for the user.

#### Parameters

* **app_id** (*str*) – The app ID for the app to delete.

#### Return type

`None`

#### Example

```python
from clarifai.client.user import User
user = User("user_id").delete_app("app_id")
```
### User.delete_runner()

```python
delete_runner(runner_id)
```
Deletes all specified runner ids.

#### Parameters

* **runner_ids (str)** – List of runners to delete.

#### Example

```python
from clarifai.client.user import User
client = User(user_id="user_id")
client.delete_runner(runner_id="runner_id")
```
### User.list_apps()

```python
list_apps(filter_by= {}, page_no, per_page)
```
Lists all the apps for the user.

#### Parameters

* **filter_by** (*dict*): A dictionary of filters to be applied to the list of apps.
* **page_no** (*int*): The page number to list.
* **per_page** (*int*): The number of items per page.

#### Returns

A list of App objects for the user.

#### Return type

List of App

#### Example

```python
from clarifai.client.user import User
apps = User("user_id").list_apps()
```

### User.list_runners()

```python
list_runners(filter_by={}, page_no, per_page)
```
List all runners for the user.

#### Parameters

* **filter_by** (*dict*): A dictionary of filters to be applied to the list of apps.
* **page_no** (*int*): The page number to list.
* **per_page** (*int*): The number of items per page.

#### Returns

A list of Runner objects for the runners.

#### Return type

 List[Runner]

#### Example

```python
from clarifai.client.user import User
client = User(user_id="user_id")
all_runners= client.list_runners()
```

### User.runner()

```python
runner(runner_id)
```

Returns a Runner object if exists.

#### Parameters

* **runner_id** (*str*) – The runner ID to interact with.

#### Returns

A Runner object for the existing runner ID.

#### Return type

Runner

#### Example

```python
from clarifai.client.user import User
client = User(user_id="user_id")
runner = client.runner(runner_id="runner_id")
```

## App

```python
class App(url='', app_id='',base_url= "https://api.clarifai.com",pat='',token='',**kwargs)
```

App is a class that provides access to Clarifai API endpoints related to App information.

### App.\__init\__()

```python
__init__(url='', app_id='',base_url= "https://api.clarifai.com",pat='',token='',**kwargs)
```
Initializes an App object.

#### Parameters

* **url** (*str*) -  The URL to initialize the app object.
* **app_id** (*str*) -  The App ID for the App to interact with.
* **base_url** (*str*) -  Base API url. Default "https://api.clarifai.com"
* **pat** (*str*) -  A personal access token for authentication.
* **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN
* **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.
* **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper:
    - name (str): The name of the app.
    - description (str): The description of the app.

### App.create_dataset()

```python
create_dataset(dataset_id, **kwargs)
```
Creates a dataset for the app.

#### Parameters

  * **dataset_id** (*str*) – The dataset ID for the dataset to create.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Dataset.

#### Returns
  A Dataset object for the specified dataset ID.

#### Return type

  Dataset

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
dataset = app.create_dataset(dataset_id="dataset_id")
```

### App.create_model()

```python
create_model(model_id, **kwargs)
```
Creates a model for the app.

#### Parameters

  * **model_id** (*str*) – The model ID for the model to create.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Model.

#### Returns

  A Model object for the specified model ID.

#### Return type

Model

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
model = app.create_model(model_id="model_id")
```
### App.create_module()

```python
create_module(module_id, description, **kwargs)
```
Creates a module for the app.

#### Parameters
  * **module_id** (*str*) – The module ID for the module to create.
  * **description** (*str*) – The description of the module to create.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the module.

#### Returns

  A Module object for the specified module ID.

#### Return type
  Module

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
module = app.create_module(module_id="module_id")
```
### App.create_workflow()

```python
create_workflow(config_filepath, generate_new_id, display)
```

Creates a workflow for the app.

#### Parameters

  * **config_filepath** (*str*) – The path to the yaml workflow config file.
  * **generate_new_id** (*bool*) – If True, generate a new workflow ID.
  * **display** (*bool*) – If True, display the workflow nodes tree.

#### Returns
  A Workflow object for the specified workflow config.

#### Return type
  Workflow

#### Example

```python
from clarifai.client.app import App
app = App(user_id="user_id", app_id="app_id")
workflow = app.create_workflow(config_filepath="config.yml")
```

### App.dataset()

```python
dataset(dataset_id, **kwargs)
```
Returns a Dataset object for the existing dataset ID.

#### Parameters

* **dataset_id** (*str*) – The dataset ID for the dataset to interact with.

#### Returns

A Dataset object for the existing dataset ID.

#### Return type

Dataset

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
dataset = app.dataset(dataset_id="dataset_id")
```

### App.delete_dataset()

```python
delete_dataset(dataset_id)
```
Deletes a dataset for the user.

#### Parameters

* **dataset_id** (*str*) – The dataset ID for the app to delete.

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_dataset(dataset_id="dataset_id")
```
### App.delete_model()

```python
delete_model(model_id)
```
Deletes a model for the user.

#### Parameters

* **model_id** (*str*) – The model ID for the app to delete.

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_model(model_id="model_id")
```

### App.delete_module()

```python
delete_module(module_id)
```
Deletes a module for the user.

#### Parameters

* **module_id** (*str*) – The module ID for the app to delete.

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_module(module_id="module_id")
```

### App.delete_workflow()

```python
delete_workflow(workflow_id)
```
Deletes a workflow for the user.

#### Parameters

* **workflow_id** (*str*) – The workflow ID for the app to delete.

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
app.delete_workflow(workflow_id="workflow_id")
```

### App.inputs()

```python
inputs()
```
Returns an Input object.

#### Returns
  An input object.

#### Return type
  Inputs

### App.list_concepts()

```python
list_concepts(page_no,per_page)
```
Lists all the concepts for the app.

#### Parameters
* **page_no** (*int*) -  The page number to list.
* **per_page** (*int*) -  The number of items per page.

### App.list_datasets()

```python
list_datasets(page_no,per_page)
```
Lists all the datasets for the app.

#### Parameters
* **page_no** (*int*) - The page number to list.
* **per_page** (*int*) - The number of items per page.

#### Returns
  A list of Dataset objects for the datasets in the app.

#### Return type
  List[Dataset]

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_datasets = app.list_datasets()
```
### App.list_installed_module_versions()

```python
list_installed_module_versions(filter_by={},page_no,per_page)
```

Lists all installed module versions in the app.

#### Parameters

* **filter_by** (*dict*) – A dictionary of filters to apply to the list of installed module versions.
* **page_no** (*int*) - The page number to list.
* **per_page** (*int*) - The number of items per page.

#### Returns

  A list of Module objects for the installed module versions in the app.

#### Return type

List[Module]

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_installed_module_versions = app.list_installed_module_versions()
```
### App.list_models()

```python
list_models(filter_by={}, only_in_app=True,page_no,per_page)
```
Lists all the available models for the user.

#### Parameters
  * **filter_by** (*dict*) – A dictionary of filters to apply to the list of models.
  * **only_in_app** (*bool*) – If True, only return models that are in the app.
  * **page_no** (*int*) -  The page number to list.
  * **per_page** (*int*) - The number of items per page.

#### Returns

A list of Model objects for the models in the app.

#### Return type

List[Model]

#### Example

```python
from clarifai.client.user import User
app = User(user_id="user_id").app(app_id="app_id")
all_models = app.list_models()
```
### App.list_modules()

```python
list_modules(filter_by={}, only_in_app=True,page_no,per_page)
```
Lists all the available modules for the user.

#### Parameters

  * **filter_by** (*dict*) – A dictionary of filters to apply to the list of modules.
  * **only_in_app** (*bool*) – If True, only return modules that are in the app.
  * **page_no** (*int*) - The page number to list.
  * **per_page** (*int*) - The number of items per page.

##### Returns

A list of Module objects for the modules in the app.

##### Return type

List[Module]

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_modules = app.list_modules()
```
### App.list_workflows()

```python
list_workflows(filter_by={}, only_in_app=True, page_no,per_page)
```

Lists all the available workflows for the user.

#### Parameters

  * **filter_by** (*dict*) – A dictionary of filters to apply to the list of workflows.
  * **only_in_app** (*bool*) – If True, only return workflows that are in the app.
  * **page_no** (*int*) - The page number to list.
  * **per_page** (*int*) - The number of items per page.
#### Returns

A list of Workflow objects for the workflows in the app.

#### Return type

List Workflow

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
all_workflows = app.list_workflows()
```

### App.list_trainable_model_types()
```python
list_trainable_model_types()
```
Lists all the trainable model types.

#### Example
```python
from clarifai.client.app import App
print(app.list_trainable_model_types())
```

### App.search()
```python
search(**kwargs)
```
Returns a Search object for the user and app ID.

#### Parameters
* **\*\*kwargs** - See the Search class.

#### Returns
A Search object for the user and app ID.

#### Example
```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
search_client = app.search(top_k=12, metric="euclidean")
```


### App.model()

```python
model(model_id, model_version={'id': ""}, **kwargs)
```

Returns a Model object for the existing model ID.

#### Parameters

  * **model_id** (*str*) – The model ID for the model to interact with.
  * **model_version** (*dict*) – The Model Version to interact with.

##### Returns

A Model object for the existing model ID.

#### Return type

Model

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
model_v1 = app.model(model_id="model_id", model_version={'id': ""})
```

### App.module()

```python
module(module_id, module_version_id='', **kwargs)
```
Returns a Module object for the existing module ID.

#### Parameters

  * **module_id** (*str*) – The module ID for the module to interact with.
  * **module_version_id** (*str*) – The module version ID for the module version to interact with.

#### Returns

A Module object for the existing module ID.

#### Return type

Module

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
module = app.module(module_id="module_id", module_version_id="module_version_id")
```
### App.workflow()

```python
workflow(workflow_id, **kwargs)
```
Returns a workflow object for the existing workflow ID.

#### Parameters

* **workflow_id** (*str*) – The workflow ID for the workflow to interact with.

#### Returns

A Workflow object for the existing workflow ID.

#### Return type

Workflow

#### Example

```python
from clarifai.client.app import App
app = App(app_id="app_id", user_id="user_id")
workflow = app.workflow(workflow_id="workflow_id")
```

## Dataset

```python
class Dataset(url='',dataset_id='',base_url= "https://api.clarifai.com",pat= '',token='',**kwargs)
```
### Dataset.\__init\__()

Dataset is a class that provides access to Clarifai API endpoints related to Dataset information.

```python
__init__(url='',dataset_id='',base_url= "https://api.clarifai.com",pat= '',token='',**kwargs)
```
Initializes a Dataset object.

#### Parameters
* **url** (*str*) - The URL to initialize the dataset object.
* **dataset_id** (*str*) - The Dataset ID within the App to interact with.
* **base_url** (*str*) - Base API url. Default "https://api.clarifai.com"
* **pat** (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
* **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
* **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.
* **\*\*kwargs** –  Additional keyword arguments to be passed to the Dataset

### Dataset.export()

```python
export(save_path='',archive_url=''local_archive_path='',split='',num_workers)
```

Exports the Clarifai protobuf dataset to a local archive.

#### Parameters

* **save_path** (*str*) – The path to save the archive to.
* **archive_url** (*str*) – The URL to the Clarifai protobuf archive.
* **local_archive_path** (*str*) – The path to the local Clarifai protobuf archive.
* **split** (*str*) – Export dataset inputs in the directory format {split}/{input_type}. Default is all.
* **num_workers** (*int*) - Number of workers to use for downloading the archive. Default is 4.

#### Example

```python
from clarifai.client.dataset import Dataset
Dataset().export(save_path='output.zip', local_archive_path='clarifai-data-protobuf.zip')
```

**Note:** Currently only supports export of dataset inputs.

### Dataset.upload_dataset()

```python
upload_dataset(dataloader,batch_size,get_upload_status,log_warnings)
```
Uploads a dataset to the app.

#### Parameters
  * **dataloader** (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
  * **batch_size** (*int*) - batch size for concurrent upload of inputs and annotations (max: 128)
  * **get_upload_status** (*bool*) - True if you want to get the upload status of the dataset
  * **log_warnings** (*bool*) - True if you want to save log warnings in a file
### Dataset.upload_from_csv()

```python
upload_from_csv(csv_path='',input_type='text',csv_type='',labels='',batch_size)
```
Uploads dataset from a CSV file.

#### Parameters

  * **csv_path** (*str*) – path to the csv file
  * **input_type** (*str*) – type of the dataset(text, image)
  * **csv_type** (*str*) – type of the csv file(raw, url, file_path)
  * **labels** (*bool*) – True if csv file has labels column
  * **batch_size** (*int*) - batch size for concurrent upload of inputs and annotations


#### Example

```python
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id = 'user_id', app_id = 'demo_app', dataset_id = 'demo_dataset')
dataset.upload_from_csv(csv_path='csv_path', input_type='text', csv_type='raw', labels=True)
```
**Note**: csv file should have either one(input) or two columns(input, labels).

### Dataset.upload_from_folder()

```python
upload_from_folder(folder_path='',input_type='',labels,batch_size)
```

Upload dataset from folder.

#### Parameters

  * **folder_path** (*str*) – Path to the folder containing images.
  * **input_type** (*str*) – type of the dataset(text, image)
  * **labels** (*bool*) – True if folder name is the label for the inputs
  * **batch_size** (*int*) - batch size for concurrent upload of inputs and annotations


#### Example

```python
from clarifai.client.dataset import Dataset
dataset = Dataset(user_id = 'user_id', app_id = 'demo_app', dataset_id = 'demo_dataset')
dataset.upload_from_folder(folder_path='folder_path', input_type='text', labels=True)
```

**Note**: The filename is used as the input_id.



### Dataset.get_upload_status()
```python
get_upload_status(dataloader,delete_version,timeout,pre_upload_stats,pre_upload)
```
Creates a new dataset version and displays the upload status of the dataset.

#### Parameters
  * **dataloader** (*Type[ClarifaiDataLoader]*) - ClarifaiDataLoader object
  * **delete_version** (*bool*) - True if you want to delete the version after getting the upload status
  * **timeout** (*int*) - Timeout in seconds for getting the upload status. Default is 600 seconds.
  * **pre_upload_stats** (*Tuple[Dict[str, int], Dict[str, int]]*) - The pre upload stats for the dataset.
  * **pre_upload** (*bool*) - True if you want to get the pre upload stats for the dataset.

#### Example

```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset.get_upload_status(dataloader)
```
**Note**: This is a beta feature and is subject to change.

### Dataset.list_versions()

```python
list_versions(page_no,per_page)
```
Lists all the versions for the dataset.

#### Parameters
* **page_no** (*int*) - The page number to list.
* **per_page** (*int*) - The number of items per page.

#### Example
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
all_dataset_versions = list(dataset.list_versions())
```
**Note**:  Defaults to 16 per page if page_no is specified and per_page is not specified.If both page_no and per_page are None, then lists all the resources.

### Dataset.create_version()
```python
create_version(**kwargs)
```
Creates a dataset version for the Dataset.

#### Parameters
* **\*\*kwargs** - Additional keyword arguments to be passed to Dataset Version.
  - **description** (*str*) - The description of the dataset version.
  - **metadata** (*dict*) - The metadata of the dataset version.*

#### Example
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', app_id='app_id')
dataset_version = dataset.create_version(description='dataset_version_description')
```

### Dataset.delete_version()
```python
delete_version(version_id='')
```
Deletes a dataset version for the Dataset.

#### Parameters
* **version_id** (*str*) - The version ID to delete.

#### Example
```python
from clarifai.client.dataset import Dataset
dataset = Dataset(dataset_id='dataset_id', user_id='user_id', dataset.delete_version(version_id='version_id')
```

## Input

```python
class Inputs(user_id='',app_id='',logger_level="INFO",base_url="https://api.clarifai.com",pat='',token='',**kwargs)
```
Inputs is a class that provides access to Clarifai API endpoints related to Input information.

### Inputs.\__init\__()

```python
__init__(user_id='',app_id='',logger_level="INFO",base_url="https://api.clarifai.com",pat='',token='',**kwargs)
```

Initializes an Input object.

#### Parameters
  * **user_id** (*str*) – A user ID for authentication.
  * **app_id** (*str*) – An app ID for the application to interact with.
  * **base_url** (*str*) - Base API url. Default "https://api.clarifai.com"
  * **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
  * **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Input

### Inputs.delete_inputs()

```python
delete_inputs(inputs)
```

Delete list of input objects from the app.

#### Parameters
* **inputs** (*Input*) – List of input objects to delete.

#### Example

```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.delete_inputs(input_obj.list_inputs())
```



### Inputs.get_image_inputs_from_folder()

```python
get_image_inputs_from_folder(folder_path, dataset_id='', labels)
```
Create input protos for image data type from folder.

#### Parameters
*  **folder_path** (*str*) – Path to the folder containing images.

#### Returns
  A list of Input objects for the specified folder.

#### Return type
  List of Input

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
input_protos = input_obj.get_image_inputs_from_folder(folder_path='demo_folder')
```

### Inputs.get_input_from_bytes()

```python
get_input_from_bytes(input_id, image_bytes, video_bytes, audio_bytes,text_bytes, dataset_id='', **kwargs)
```

Create input proto from bytes.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_bytes** (*str*) – The bytes for the image.
  * **video_bytes** (*str*) – The bytes for the video.
  * **audio_bytes** (*str*) – The bytes for the audio.
  * **text_bytes** (*str*) - The bytes for the text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.

#### Returns
  An Input object for the specified input ID.
#### Return type
  Input

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
image = open('demo.jpg', 'rb').read()
video = open('demo.mp4', 'rb').read()
input_proto = input_obj.get_input_from_bytes(input_id = 'demo',image_bytes =image, video_bytes=video)
```
### Inputs.get_input_from_file()

```python
get_input_from_file(input_id, image_file, video_file, audio_file,text_file, dataset_id='', **kwargs)
```

Create input proto from files.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_file** (*str*) – The file for the image.
  * **video_file** (*str*) – The file for the video.
  * **audio_file** (*str*) – The file for the audio.
  * **text_file** (*str*) - The file for the text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.

#### Returns
  An Input object for the specified input ID.

#### Return type
  Input

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
input_proto = input_obj.get_input_from_file(input_id = 'demo', video_file='file_path')
```

### Inputs.get_input_from_url()

```python
get_input_from_url(input_id, image_url, video_url, audio_url, text_url, dataset_id, **kwargs)
```
Create input proto from URL.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_url** (*str*) – The url for the image.
  * **video_url** (*str*) – The url for the video.
  * **audio_url** (*str*) – The url for the audio.
  * **text_url** (*str*) – The url for the text.
  *  **dataset_id** (*str*) - The dataset ID for the dataset to add the input to.

#### Returns
  An Input object for the specified input ID.

#### Return type
  Input

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
input_proto = input_obj.get_input_from_url(input_id = 'demo', image_url='https://samples.clarifai.com/metro-north.jpg')
```

### Inputs.get_inputs_from_csv()

```python
get_inputs_from_csv(csv_path='',input_type ='text',csv_type= 'raw',dataset_id='',labels)
```

Create input protos from CSV.

#### Parameters

* **csv_path** (*str*) – Path to the csv file.
* **input_type** (*str*) – Type of input. Options: ‘text’, ‘image’, ‘video’, ‘audio’.
* **csv_type** (*str*) – Type of csv file. Options: ‘raw’, ‘url’, ‘file_path’.
* **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
* **labels** (*str*) – True if csv file has labels column.

#### Returns

List of inputs

#### Return type

inputs

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
input_protos = input_obj.get_inputs_from_csv(csv_path='filepath', input_type='text', csv_type='raw')
```
### Inputs.get_mask_proto()

```python
get_mask_proto(input_id, label, polygons)
```
Create an annotation proto for each polygon box, label input pair.

#### Parameters
  * **input_id** (*str*) – The input ID for the annotation to create.
  * **label** (*str*) – annotation label
  * **polygons** (*List*) – Polygon x,y points iterable

#### Returns
  An annotation object for the specified input ID.

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
input_obj.get_mask_proto(input_id='demo', label='demo', polygons=[[[x,y],...,[x,y]],...])
```
### Inputs.get_text_input()

```python
get_text_input(input_id, raw_text, dataset_id='', **kwargs)
```
Create input proto for text data type from raw text.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **raw_text** (*str*) – The raw text input.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Input

#### Returns
  An Input object for the specified input ID.

#### Return type
Text

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
input_protos = input_obj.get_text_input(input_id = 'demo', raw_text = 'This is a test')
```

### Inputs.get_text_inputs_from_folder()

```python
get_text_inputs_from_folder(folder_path, dataset_id='',labels)
```
Create input protos for text data type from folder.

#### Parameters
*  **folder_path** (*str*) – Path to the folder containing text.

#### Returns
  A list of Input objects for the specified folder.

#### Return type
  list of Input

#### Example

```python
from clarifai.client.input import Input
input_obj = Input()
input_protos = input_obj.get_text_inputs_from_folder(folder_path='demo_folder')
```

### Inputs.list_inputs()

```python
list_inputs(dataset_id='',page_no,per_page,input_type)
```
Lists all the inputs for the app.

#### Parameters
  * **dataset_id** (*str*) - The dataset ID for the dataset to list inputs from.
  * **page_no** (*int*) - The page number to list.
  * **per_page** (*int*) - The number of items per page.
  * **input_type** (*str*) - The type of input to list. Options: 'image', 'video', 'audio', 'text'.

#### Returns
  A list of Input objects for the app.

#### Return type
  list of Input

#### Example

```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.list_inputs()
```

### Inputs.upload_annotations()

```python
upload_annotations(batch_annot, show_log=True)
```

Upload image annotations to app.

#### Parameters
*  **batch_annot** – annot batch protos

#### Returns

failed annot upload


### Inputs.upload_from_bytes()

```python
upload_from_bytes(input_id, image_bytes, video_bytes, audio_bytes,text_bytes, dataset_id='', **kwargs)
```

Upload input from bytes.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_bytes** (*str*) – The bytes for the image.
  * **video_bytes** (*str*) – The bytes for the video.
  * **audio_bytes** (*str*) – The bytes for the audio.
  * **text_bytes**(*str*) – The bytes for the text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.

#### Returns
  Job id for the upload request.

#### Return type
  input_job_id

#### Example

```python
from clarifai.client.input import Input
input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
image = open('demo.jpg', 'rb').read()
input_obj.upload_from_bytes(input_id='demo', image_bytes=image)
```
### Inputs.upload_from_file()

```python
upload_from_file(input_id, image_file, video_file, audio_file, dataset_id, **kwargs)
```

Upload input from file.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_file** (*str*) – The file for the image.
  * **video_file** (*str*) – The file for the video.
  * **audio_file** (*str*) – The file for the audio.
   * **text_file**(*str*) – The file for the text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.

#### Returns
  Job id for the upload request.

#### Return type
  input_job_id

#### Example

```python
from clarifai.client.input import Input
input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
input_obj.upload_from_file(input_id='demo', audio_file='demo.mp3')
```

### Inputs.upload_from_url()

```python
upload_from_url(input_id, image_url, video_url, audio_url, text_url, dataset_id='', **kwargs)
```

Upload input from URL.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_url** (*str*) – The url for the image.
  * **video_url** (*str*) – The url for the video.
  * **audio_url** (*str*) – The url for the audio.
  * **text_url** (*str*) – The url for the text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.

#### Returns
  job id for the upload request.

#### Return type
  input_job_id

#### Example

```python
from clarifai.client.input import Input
input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
input_obj.upload_from_url(input_id='demo', image_url='https://samples.clarifai.com/metro-north.jpg')
```
### Inputs.upload_inputs()

```python
upload_inputs(inputs, show_log=True)
```

Upload list of input objects to the app.

#### Parameters
  * **inputs** (*list*) – List of input objects to upload.
  * **show_log** (*bool*) – Show upload status log.

#### Returns
  Job id for the upload request.

#### Return type
  input_job_id

### Inputs.upload_text()

```python
upload_text(input_id, raw_text, dataset_id='', **kwargs)
```

Upload text from raw text.

#### Parameters
  * **input_id** (*str*) – The input ID for the input to create.
  * **raw_text** (*str*) – The raw text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.

#### Returns
  Job id for the upload request.

#### Return type
  input_job_id (str)

#### Example

```python
from clarifai.client.input import Input
input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
input_obj.upload_text(input_id = 'demo', raw_text = 'This is a test')
```

### Inputs.get_multimodal_input()
```python
get_multimodal_input(input_id,raw_text,text_bytes,image_url,image_bytes,dataset_id,**kwargs)
```
Create input proto for text and image from bytes or url.

#### Parameters
  * **input_id** (*str*)- The input ID for the input to create.
  * **raw_text** (*str*)- The raw text input.
  * **text_bytes** (*str*)- The bytes for the text.
  * **image_url** (*str*)- The url for the image.
  * **image_bytes** (*str*)- The bytes for the image.
  * **dataset_id** (*str*)- The dataset ID for the dataset to add the input to.
  * **\*\*kwargs** - Additional keyword arguments to be passed to the Input

#### Returns
An Input object for the specified input ID.

```python
from clarifai.client.input import Inputs
input_protos = Inputs.get_multimodal_input(input_id = 'demo', raw_text = 'What time of day is it?', image_url='https://samples.clarifai.com/metro-north.jpg')
```

### Inputs.get_bbox_proto()
```python
get_bbox_proto(input_id, label, bbox)
```
Create an annotation proto for each bounding box, label input pair.


#### Parameters
* **input_id** (*str*) - The input ID for the annotation to create.
* **label** (*str*) - annotation label
* **bbox** (*List*) - a list of a single bbox's coordinates.Bbox ordering: [xmin, ymin, xmax, ymax]

#### Returns
An annotation object for the specified input ID.

```python
from clarifai.client.input import Inputs
Inputs.get_bbox_proto(input_id='demo', label='demo', bbox=[x_min, y_min, x_max, y_max])
```

### Inputs.patch_annotation()
```python
patch_annotations(batch_annot, action: str = 'merge')
```
Patch image annotations to app.
#### Parameters
* **batch_annot** - annot batch protos
* **action** (*str*) - Action to perform on the input. Options: 'merge', 'overwrite', 'remove'.

### Inputs.patch_concepts()
```python
patch_concepts(concept_ids, labels, values , action: str = 'overwrite'))
```
Patch concepts to app.
#### Parameters
* **concept_ids** (*List*) -  A list of concept.
* **labels** (*List*) - A list of label names.
* **values** (*List*) - concept value
* **action** (*str*) - Action to perform on the input. Options: 'overwrite'.

### Inputs.list_annotations()
```python
list_annotations(batch_input, page_no,per_page)
```
Lists all the annotations for the app.

#### Parameters
* **batch_input** (*List[Input]*) - The input objects to list annotations from.
* **page_no** (*int*) - The page number to list.
* **per_page** (*int*) - The number of items per page.

#### Yields
Annotation objects for the app.

```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
all_inputs = list(input_obj.list_inputs(input_type='image'))
all_annotations = list(input_obj.list_annotations(batch_input=all_inputs))

```

### Inputs.download_inputs()
```python
download_inputs(inputs)
```
Download list of input objects from the app.

#### Parameters
* **input_ids** (*Input*) - List of input objects to download.

```python
from clarifai.client.user import User
input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
input_obj.download_inputs(list(input_obj.list_inputs()))
```

## Lister

```python
class Lister(page_size=16)
```

Lister class for obtaining paginated results from the Clarifai API.

### Lister.\__init\__()

```python
__init__(page_size)
```
#### Parameters
  * **page_size** (*int*) – Stores the page size.


### Lister.list_pages_generator()

```python
 list_pages_generator(endpoint, proto_message,request_data,page_no,per_page)
```

Lists all pages of a resource.

#### Parameters

  * **endpoint** (*Callable*) – The endpoint to call.
  * **proto_message** (*Any*) – The proto message to use.
  * **request_data** (*dict*) – The request data to use.
  * **page_no** (*int*) - The page number to list.
  * **per_page** (*int*) - The number of items per page.
#### Yields
  *response_dict* – The next item in the listing.

## Model

```python
class Model(url='', model_id='',model_version={'id': ""},base_url = "https://api.clarifai.com",pat='',token='',**kwargs)
```
Model is a class that provides access to Clarifai API endpoints related to Model information.

### Model.\__init\__()

```python
__init__(url='', model_id='',model_version={'id': ""},base_url = "https://api.clarifai.com",pat='',token='',**kwargs)
```
Initializes a Model object.

#### Parameters
  * **url_init** (*str*) – The URL to initialize the model object.
  * **model_id** (*str*) – The Model ID to interact with.
  * **model_version** (*dict*) – The Model Version to interact with.
  * **base_url** (*str*) - Base API url. Default "https://api.clarifai.com"
  * **pat** (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
  * **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
  * **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

### Model.create_version()

```python
create_version(**kwargs)
```

Creates a model version for the Model.

#### Returns
  A Model object for the specified model ID.

#### Return type
  Model

#### Parameters
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Model Version.

#### Example

```python
from clarifai.client.model import Model
model = Model("model_url")
            # or
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_version = model.create_version(description='model_version_description')
```

### Model.list_versions()

```python
list_versions()
```

Lists all the versions for the model.

#### Returns
  A list of Model objects for the versions of the model.

#### Return type
  List[Model]

#### Example

```python
from clarifai.client.model import Model
model = Model("model_url") # Example URL: https://clarifai.com/clarifai/main/models/general-image-recognition
            # or
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
all_model_versions = model.list_versions()
```

### Model.predict()

```python
predict(inputs, inference_params = {}, output_config = {})
```

Predicts the model based on the given inputs.

#### Parameters

* **inputs** (list[Input]) – The inputs to predict, must be less than 128.
* **inference_params** (*dict*) - The inference params to override.
* **output_config** (*dict*) - The output config to override.
  * **min_value** (*float*) - The minimum value of the prediction confidence to filter.
  * **max_concepts** (*int*) - The maximum number of concepts to return.
  * **select_concepts** (*list[Concept]*) - The concepts to select.

### Model.predict_by_bytes()

```python
predict_by_bytes(input_bytes,input_type,inference_params= {},output_config= {})
```

Predicts the model based on the given bytes.

#### Parameters
  * **input_bytes** (*bytes*) – File Bytes to predict on.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio’.
  * **inference_params** (*dict*) - The inference params to override.
  * **output_config** (*dict*) - The output config to override.
    * **min_value** (*float*) - The minimum value of the prediction confidence to filter.
    * **max_concepts** (*int*) - The maximum number of concepts to return.
    * **select_concepts** (*list[Concept]*) - The concepts to select.

#### Example

```python
from clarifai.client.model import Model
model = Model("https://clarifai.com/anthropic/completion/models/claude-v2")
model_prediction = model.predict_by_bytes(b'Write a tweet on future of AI', 'text')
```

### Model.predict_by_filepath()

```python
predict_by_filepath(filepath,input_type,inference_params = {},output_config = {})
```
Predicts the model based on the given file path.

#### Parameters
  * **filepath** (*str*) – The file path to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.
  * **inference_params** (*dict*) - The inference params to override.
  * **output_config** (*dict*) - The output config to override.
    * **min_value** (*float*) - The minimum value of the prediction confidence to filter.
    * **max_concepts** (*int*) - The maximum number of concepts to return.
    * **select_concepts** (*list[Concept]*) - The concepts to select.

#### Example

```python
from clarifai.client.model import Model
model = Model("model_url") # Example URL: https://clarifai.com/clarifai/main/models/general-image-recognition
          #  or
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_prediction = model.predict_by_filepath('/path/to/image.jpg', 'image')
model_prediction = model.predict_by_filepath('/path/to/text.txt', 'text')
```

### Model.predict_by_url()

```python
predict_by_url(url,input_type,inference_params = {},output_config = {})
```

Predicts the model based on the given URL.

#### Parameters
  * **url** (*str*) – The URL to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.
  * **inference_params** (*dict*) - The inference params to override.
  * **output_config** (*dict*) - The output config to override.
    * **min_value** (*float*) - The minimum value of the prediction confidence to filter.
    * **max_concepts** (*int*) - The maximum number of concepts to return.
    * **select_concepts** (*list[Concept]*) - The concepts to select.

#### Example

```python
from clarifai.client.model import Model
model = Model("model_url") # Example URL: https://clarifai.com/clarifai/main/models/general-image-recognition
          #  or
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_prediction = model.predict_by_url('url', 'image')
```


### Model.list_training_templates()
```python
list_training_templates()
```
Lists all the training templates for the model type.
#### Returns
List of training templates for the model type.
#### Example
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
print(model.list_training_templates())
```

### Model.get_params()
```python
get_params(template='', save_to='params.yaml')
```
Returns the model params for the model type and yaml file.

#### Parameters
  * **template** (*str*) - The template to use for the model type.
  * **yaml_file** (*str*) - The yaml file to save the model params.

#### Returns
Dictionary of model params for the model type.

#### Example
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', yaml_file='model_params.yaml')
```

### Model.update_params()
```python
update_params(**kwargs)
```
Updates the model params for the model.

#### Parameters
  * **\*\*kwargs** - Model params to update.

#### Example
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', yaml_file='model_params.yaml')
model.update_params(batch_size = 8, dataset_version = 'dataset_version_id')
```


### Model.get_param_info()
```python
get_param_info(param)
```
Returns the param info for the param.

#### Parameters
  * **param** (*str*) - The param to get the info for.

#### Example
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', yaml_file='model_params.yaml')
model.get_param_info('param')
```

### Model.train()
```python
train(yaml_file='')
```
Trains the model based on the given yaml file or model params.

#### Parameters
  * **yaml_file** (*str*) - The yaml file for the model params.


#### Example
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model_params = model.get_params(template='template', yaml_file='model_params.yaml')
model.train('model_params.yaml')
```

### Model.training_status()
```python
training_status(version_id, training_logs)
```
Get the training status for the model version. Also stores training logs


#### Parameters
  * **version_id** (*str*) - The version ID to get the training status for.
  * **training_logs** (*bool*) - Whether to save the training logs in a file.

#### Returns
Dictionary of training status for the model version.

#### Example
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model.training_status(version_id='version_id',training_logs=True)
```

### Model.delete_version()
```python
delete_version(version_id)
```
Deletes a model version for the Model.

#### Parameters
  * **version_id** (*str*) - The version ID to delete.

#### Example
```python
from clarifai.client.model import Model
model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
model.delete_version(version_id='version_id')
```

### Model.export()
```python
from clarifai.client.model import Model
model = Model("url")
model.export('/path/to/export_model_dir')
```
Export the model, stores the exported model as model.tar file.
#### Parameters
* **export_dir** (*str, optional*) - If provided, the exported model will be saved in the specified directory else export status will be shown. Defaults to None.
### Model.evaluate()
```python
evaluate(dataset_id,dataset_app_id,dataset_user_id,eval_id,extended_metrics,eval_info)
```
Run evaluation

#### Parameters
  * **dataset_id** (*str*) - Dataset Id.
  * **dataset_app_id** (*str*) - App ID for cross app evaluation, leave it as None to use Model App ID. Default is None.
  * **dataset_user_id** (*str*) - User ID for cross app evaluation, leave it as None to use Model User ID. Default is None.
  * **eval_id** (*str*) - Specific ID for the evaluation. You must specify this parameter to either overwrite the result with the dataset ID or format your evaluation in an informative manner. If you don't, it will use random ID from system. Default is None.
  * **extended_metrics** (*dict*) - user custom metrics result. Default is None.
  * **eval_info** (*dict*) - custom eval info. Default is empty dict.

#### Returns
eval_metrics


### Model.get_eval_by_id()
```python
get_eval_by_id(eval_id,label_counts,test_set,binary_metrics,confusion_matrix,metrics_by_class,metrics_by_area) 
```
Get detail eval_metrics by eval_id with extra metric fields

#### Parameters
  * **eval_id** (*str*) - eval id
  * **label_counts** (*bool*, optional) - Set True to get label counts. Defaults to False.
  * **test_set** (*bool*, optional) - Set True to get test set. Defaults to False.
  * **binary_metrics** (*bool*, optional) - Set True to get binary metric. Defaults to False.
  * **confusion_matrix** (*bool*, optional) - Set True to get confusion matrix. Defaults to False.
  * **metrics_by_class** (*bool*, optional) - Set True to get metrics by class. Defaults to False.
  * **metrics_by_area** (*bool*, optional) - Set True to get metrics by area. Defaults to False.

#### Returns
resources_pb2.EvalMetrics: eval_metrics

### Model.get_latest_eval()
```python
get_latest_eval(label_counts,test_set,binary_metrics,confusion_matrix,metrics_by_class,metrics_by_area)
```
Run `get_eval_by_id` method with latest `eval_id`

#### Parameters
  * **label_counts** (*bool*, optional) - Set True to get label counts. Defaults to False.
  * **test_set** (*bool*, optional) - Set True to get test set. Defaults to False.
  * **binary_metrics** (*bool*, optional) - Set True to get binary metric. Defaults to False.
  * **confusion_matrix** (*bool*, optional) - Set True to get confusion matrix. Defaults to False.
  * **metrics_by_class** (*bool*, optional) - Set True to get metrics by class. Defaults to False.
  * **metrics_by_area** (*bool*, optional) - Set True to get metrics by area. Defaults to False.

#### Returns
eval_metric if model is evaluated otherwise None.


## Workflow

```python
class Workflow(url='',workflow_id='',workflow_version = {'id': ""},output_config = {'min_value': 0},base_url = "https://api.clarifai.com",pat = None,token='',**kwargs)
```

Workflow is a class that provides access to Clarifai API endpoints related to Workflow information.

### Workflow.\__init\__()

```python
__init__(url='',workflow_id='',workflow_version = {'id': ""},output_config = {'min_value': 0},base_url = "https://api.clarifai.com",pat = None,token='',**kwargs)
```
Initializes a Workflow object.

#### Parameters

  * **url_init** (*str*) – The URL to initialize the workflow object.
  * **workflow_id** (*str*) – The Workflow ID to interact with.
  * **workflow_version** (*dict*) – The Workflow Version to interact with.
  * **output_config** (*dict*) – The output config to interact with.
    * min_value (float) - The minimum value of the prediction confidence to filter.
    * max_concepts (int) - The maximum number of concepts to return.
    * select_concepts (list[Concept]) - The concepts to select.
    * sample_ms (int) - The number of milliseconds to sample.
  * **base_url** (*str*) - Base API url. Default "https://api.clarifai.com"
  * **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
  * **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

### Workflow.list_versions()

```python
list_versions()
```

Lists all the versions of the workflow.

#### Returns

A list of Workflow objects.

#### Return type

  list[Workflow]

#### Example

```python
from clarifai.client.workflow import Workflow
workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
workflow_versions = workflow.list_versions()
```

### Workflow.predict()

```python
predict(inputs,workflow_state_id)
```
Predicts the workflow based on the given inputs.

#### Parameters
* **inputs** (list[Input]) – The inputs to predict.
* **workflow_state_id** (*str*) - key for the workflow state cache that stores the workflow node predictions.

### Workflow.predict_by_bytes()

```python
predict_by_bytes(input_bytes, input_type)
```

Predicts the workflow based on the given bytes.

#### Parameters
  * **input_bytes** (*bytes*) – Bytes to predict on.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

### Workflow.predict_by_filepath()

```python
predict_by_filepath(filepath, input_type)
```

Predicts the workflow based on the given filepath.

#### Parameters

  * **filepath** (*str*) – The filepath to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

#### Example

```python
from clarifai.client.workflow import Workflow
workflow = Workflow("workflow_url") # Example: https://clarifai.com/clarifai/main/workflows/Face-Sentiment
           # or
workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
workflow_prediction = workflow.predict_by_filepath('filepath', 'image')
```

### Workflow.predict_by_url()

```python
predict_by_url(url, input_type)
```

Predicts the workflow based on the given URL.

#### Parameters
  * **url** (*str*) – The URL to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

#### Example

```python
from clarifai.client.workflow import Workflow
workflow = Workflow("workflow_url") # Example: https://clarifai.com/clarifai/main/workflows/Face-Sentiment
             # or
workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
workflow_prediction = workflow.predict_by_url('url', 'image')
```

### Workflow.export()

```python
export(out_path)
```

Exports the workflow to a yaml file.

#### Parameters
  * **out_path** (*str*) – The path to save the yaml file to.

#### Example

```python
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Demographics")
workflow.export('out_path.yml')
```

## Module

```python
class Module(url='',module_id='', module_version = {'id': ""},base_url = "https://api.clarifai.com",pat = '',token='',**kwargs)
```

Module is a class that provides access to Clarifai API endpoints related to Module information.

### Module.\__init\__()

```python
__init__(url='',module_id='', module_version = {'id': ""},base_url = "https://api.clarifai.com",pat = '',token='',**kwargs)
```
Initializes a Module object.

#### Parameters
  * **url_init** (*str*) – The URL to initialize the module object.
  * **module_id** (*str*) – The Module ID to interact with.
  * **module_version** (*dict*) – The Module Version to interact with.
  * **base_url** (*str*) - Base API url. Default "https://api.clarifai.com"
  * **pat** (*str*) - A personal access token for authentication. Can be set as env var CLARIFAI_PAT
  * **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
  * **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

### Module.list_versions()

```python
list_versions(page_no,per_page)
```

Lists all the module versions for the module.

#### Parameters
  * **page_no** (*int*): The page number to list.
  * **per_page** (*int*): The number of items per page.


#### Returns
  A list of Module objects for versions of the module.

#### Return type
  List[Module]

#### Example

```python
from clarifai.client.module import Module
module = Module(module_id='module_id', user_id='user_id', app_id='app_id')
all_Module_versions = module.list_versions()
```

## Utils

```python
class Chunker(seq, size)
```

Split an input sequence into small chunks.

### Chunker.\__init\__()

```python
__init__(seq, size)
```

### Chunker.chunk()

```python
chunk()
```
Chunk input sequence.

## Exceptions

### ApiError

```python
class ApiError(resource, params, method, response=None)
```
API Server error

### ApiClientError

```python
class ApiClientError
```
API Client Error

### UserError

```python
class UserError
```
User Error


## Runners
```python
class Runner(runner_id,user_id='',check_runner_exists,base_url = "https://api.clarifai.com",pat='',token='',num_parallel_polls,**kwargs)
```
Base class for remote inference runners. This should be subclassed with the run_input method
  implemented to process each input in the request

### Runner.\__init\__()

```python
__init__(runner_id,user_id='',check_runner_exists,base_url = "https://api.clarifai.com",pat='',token='',num_parallel_polls,**kwargs)

```
Initializes a Runner object

#### Parameters
  * **runner_id** (*str*) – The id of the runner to use.
  * **user_id** (*str*) –  Clarifai User ID
  * **base_url** (*dict*) – Base API url. Default "https://api.clarifai.com"
  * **pat** (*str*) - A personal access token for authentication.
  * **num_parallel_polls** (*int*) - The max number of threads for parallel run loops to be fetching work from.
  * **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

### Runner.start()

```python
start()
```
Start the run loop. This will ask the Clarifai API for work, and when it gets work, it will run
the model on the inputs and post the results back to the Clarifai API. It will then ask for more
work again.



### Runner.run_input()

```python
run_input(input, output_info)
```
Run the model on the given input in the request.

#### Parameters
  * **input** (*resources_pb2.Input*) – The input to run the model on.
  * **output_info** (*resources_pb2.OutputInfo*) – The output info for the model which includes
    output_info.params that the model can pass in on very prediction request. These can be provided
    during PostModelVersions as default for every request or can be overridden on a per request by
    passing in output_info in the PostModelOutputs request as the model.model_version.output_info.params
    field.

#### Returns
The response from the model's run_input implementation

#### Return Type
resources_pb2.Output




## Search
```python 
class Search(user_id,app_id,top_k,metric,base_url = "https://api.clarifai.com",pat='',token='')
```
Base class for Search.

### Search.\__init\__()

```python
__init__(user_id,app_id,top_k,metric,base_url = "https://api.clarifai.com",pat='',token='')

```
Initialize the Search object.

#### Parameters
  * **user_id** (*str*) – User ID.
  * **app_id** (*str*) – App ID.
  * **top_k**  (*int*) - Top K results to retrieve. Defaults to 10.
  * **metric** (*str*) - Similarity metric (either 'cosine' or 'euclidean'). Defaults to 'cosine'.
  * **base_url** (*str*) - Base API url. Defaults to "https://api.clarifai.com".
  * **pat** (*str*) - A personal access token for authentication.
  * **alogrithm** (*str, optional*) - Search algorithm (either 'nearest_neighbor' or 'brute_force'). Defaults to 'nearest_neighbor'.
  * **token** (*str*) - A session token for authentication. Accepts either a session token or a pat. Can be set as env var CLARIFAI_SESSION_TOKEN.
  * **root_certificates_path** (*str*) - Path to the SSL root certificates file, used to establish secure gRPC connections.


### Search.query()
```python
query(ranks=[{}], filters=[{}], page_no: int = None, per_page: int = None)
```
Perform a query with rank and filters.

#### Parameters
* **ranks** (*List[Dict]*) - List of rank parameters. Defaults to [{}].
* **filters** (*List[Dict]*) - List of filter parameters. Defaults to [{}].
* **page_no** (*int*) - The page number to list.
* **per_page** (*int*) - The number of items per page.

*The schema for rank and filters are given below*:

- Rank and filter must be a list
- Each item in the list must be a dict
- The dict can contain these optional keys:
    - 'image_url': Valid URL string
    - 'text_raw': Non-empty string
    - 'metadata': Dict
    - 'image_bytes': Bytes
    - 'geo_point': Dict with 'longitude', 'latitude' and 'geo_limit' as float, float and int respectively
    - 'concepts': List where each item is a concept dict
- Concept dict requires at least one of:
    - 'name': Non-empty string with dashes/underscores
    - 'id': Non-empty string
    - 'language': Non-empty string
    - 'value': 0 or 1 integer



#### Returns
A generator of query results.


#### Return Type
Generator[Dict[str, Any], None, None]


#### Exmaple
```python
# Get successful inputs of type image or text
from clarifai.client.search import Search
search = Search(user_id='user_id', app_id='app_id', top_k=10, metric='cosine')
res = search.query(filters=[{'input_types': ['image', 'text']}, {'input_status_code': 30000}])

# Vector search over inputs
from clarifai.client.search import Search
search = Search(user_id='user_id', app_id='app_id', top_k=1, metric='cosine')
res = search.query(ranks=[{'image_url': 'https://samples.clarifai.com/dog.tiff'}])
```