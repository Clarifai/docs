---
description: Clarifai Python SDK API Reference
sidebar_position: 3
---

# API Reference

**Clarifai Python SDK API Reference**
<hr />

This is the API Reference documentation extracted from the source code.

## User

### *class* User(user_id='', \*\*kwargs)

User is a class that provides access to Clarifai API endpoints related to user information.

#### \_\_init_\_(user_id='', \*\*kwargs)

Initializes an User object.

* **Parameters:**
  * **user_id** (*str*) – The user ID for the user to interact with.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

#### app(app_id, \*\*kwargs)

Returns an App object for the specified app ID.

* **Parameters:**
  * **app_id** (*str*) – The app ID for the app to interact with.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the App.
* **Returns:**
  An App object for the specified app ID.
* **Return type:**
  App

#### Example

```pycon
>>> from clarifai.client.user import User
>>> app = User("user_id").app("app_id")
```

#### create_app(app_id, base_workflow='Language-Understanding', \*\*kwargs)

Creates an app for the user.

* **Parameters:**
  * **app_id** (*str*) – The app ID for the app to create.
  * **base_workflow** (*str*) – The base workflow to use for the app.(Examples: ‘Universal’, ‘Empty’, ‘General’)
  * **\*\*kwargs** – Additional keyword arguments to be passed to the App.
* **Returns:**
  An App object for the specified app ID.
* **Return type:**
  App

#### Example

```pycon
>>> from clarifai.client.user import User
>>> client = User(user_id="user_id")
>>> app = client.create_app(app_id="app_id",base_workflow="Universal")
```

#### delete_app(app_id)

Deletes an app for the user.

* **Parameters:**
  **app_id** (*str*) – The app ID for the app to delete.
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.user import User
>>> user = User("user_id").delete_app("app_id")
```

#### list_apps(filter_by={})

Lists all the apps for the user.

* **Parameters:**
  **filter_by** (*dict*) – A dictionary of filters to be applied to the list of apps.
* **Returns:**
  A list of App objects for the user.
* **Return type:**
  list of App

#### Example

```pycon
>>> from clarifai.client.user import User
>>> apps = User("user_id").list_apps()
```

## App

### *class* App(url_init='', app_id='', \*\*kwargs)

App is a class that provides access to Clarifai API endpoints related to App information.

#### \_\_init_\_(url_init='', app_id='', \*\*kwargs)

Initializes an App object.

* **Parameters:**
  * **url_init** (*str*) – The URL to initialize the app object.
  * **app_id** (*str*) – The App ID for the App to interact with.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.
    - name (str): The name of the app.
    - description (str): The description of the app.

#### create_dataset(dataset_id, \*\*kwargs)

Creates a dataset for the app.

* **Parameters:**
  * **dataset_id** (*str*) – The dataset ID for the dataset to create.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Dataset.
* **Returns:**
  A Dataset object for the specified dataset ID.
* **Return type:**
  Dataset

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> dataset = app.create_dataset(dataset_id="dataset_id")
```

#### create_model(model_id, \*\*kwargs)

Creates a model for the app.

* **Parameters:**
  * **model_id** (*str*) – The model ID for the model to create.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Model.
* **Returns:**
  A Model object for the specified model ID.
* **Return type:**
  Model

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> model = app.create_model(model_id="model_id")
```

#### create_module(module_id, description, \*\*kwargs)

Creates a module for the app.

* **Parameters:**
  * **module_id** (*str*) – The module ID for the module to create.
  * **description** (*str*) – The description of the module to create.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the module.
* **Returns:**
  A Module object for the specified module ID.
* **Return type:**
  Module

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> module = app.create_module(module_id="module_id")
```

#### create_workflow(workflow_id, \*\*kwargs)

Creates a workflow for the app.

* **Parameters:**
  * **workflow_id** (*str*) – The workflow ID for the workflow to create.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the workflow.
* **Returns:**
  A Workflow object for the specified workflow ID.
* **Return type:**
  Workflow

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> workflow = app.create_workflow(workflow_id="workflow_id")
```

#### dataset(dataset_id, \*\*kwargs)

Returns a Dataset object for the existing dataset ID.

* **Parameters:**
  **dataset_id** (*str*) – The dataset ID for the dataset to interact with.
* **Returns:**
  A Dataset object for the existing dataset ID.
* **Return type:**
  Dataset

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> dataset = app.dataset(dataset_id="dataset_id")
```

#### delete_dataset(dataset_id)

Deletes an dataset for the user.

* **Parameters:**
  **dataset_id** (*str*) – The dataset ID for the app to delete.
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> app.delete_dataset(dataset_id="dataset_id")
```

#### delete_model(model_id)

Deletes an model for the user.

* **Parameters:**
  **model_id** (*str*) – The model ID for the app to delete.
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> app.delete_model(model_id="model_id")
```

#### delete_module(module_id)

Deletes an module for the user.

* **Parameters:**
  **module_id** (*str*) – The module ID for the app to delete.
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> app.delete_module(module_id="module_id")
```

#### delete_workflow(workflow_id)

Deletes an workflow for the user.

* **Parameters:**
  **workflow_id** (*str*) – The workflow ID for the app to delete.
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> app.delete_workflow(workflow_id="workflow_id")
```

#### inputs()

Returns an Input object.

* **Returns:**
  An input object.
* **Return type:**
  Inputs

#### list_concepts()

Lists all the concepts for the app.

#### list_datasets()

Lists all the datasets for the app.

* **Returns:**
  A list of Dataset objects for the datasets in the app.
* **Return type:**
  List Dataset

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> all_datasets = app.list_datasets()
```

#### list_installed_module_versions(filter_by={})

Lists all installed module versions in the app.

* **Parameters:**
  **filter_by** (*dict*) – A dictionary of filters to apply to the list of installed module versions.
* **Returns:**
  A list of Module objects for the installed module versions in the app.
* **Return type:**
  List[[Module](#clarifai.client.module.Module)]

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> all_installed_module_versions = app.list_installed_module_versions()
```

#### list_models(filter_by={}, only_in_app=True)

Lists all the available models for the user.

* **Parameters:**
  * **filter_by** (*dict*) – A dictionary of filters to apply to the list of models.
  * **only_in_app** (*bool*) – If True, only return models that are in the app.
* **Returns:**
  A list of Model objects for the models in the app.
* **Return type:**
  List Model

#### Example

```pycon
>>> from clarifai.client.user import User
>>> app = User(user_id="user_id").app(app_id="app_id")
>>> all_models = app.list_models()
```

#### list_modules(filter_by={}, only_in_app=True)

Lists all the available modules for the user.

* **Parameters:**
  * **filter_by** (*dict*) – A dictionary of filters to apply to the list of modules.
  * **only_in_app** (*bool*) – If True, only return modules that are in the app.
* **Returns:**
  A list of Module objects for the modules in the app.
* **Return type:**
  List Module

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> all_modules = app.list_modules()
```

#### list_workflows(filter_by={}, only_in_app=True)

Lists all the available workflows for the user.

* **Parameters:**
  * **filter_by** (*dict*) – A dictionary of filters to apply to the list of workflows.
  * **only_in_app** (*bool*) – If True, only return workflows that are in the app.
* **Returns:**
  A list of Workflow objects for the workflows in the app.
* **Return type:**
  List Workflow 

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> all_workflows = app.list_workflows()
```

#### model(model_id, model_version_id='', \*\*kwargs)

Returns a Model object for the existing model ID.

* **Parameters:**
  * **model_id** (*str*) – The model ID for the model to interact with.
  * **model_version_id** (*str*) – The model version ID for the model version to interact with.
* **Returns:**
  A Model object for the existing model ID.
* **Return type:**
  Model

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> model_v1 = app.model(model_id="model_id", model_version_id="model_version_id")
```

#### module(module_id, module_version_id='', \*\*kwargs)

Returns a Module object for the existing module ID.

* **Parameters:**
  * **module_id** (*str*) – The module ID for the module to interact with.
  * **module_version_id** (*str*) – The module version ID for the module version to interact with.
* **Returns:**
  A Module object for the existing module ID.
* **Return type:**
  Module

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> module = app.module(module_id="module_id", module_version_id="module_version_id")
```

#### workflow(workflow_id, \*\*kwargs)

Returns a workflow object for the existing workflow ID.

* **Parameters:**
  **workflow_id** (*str*) – The workflow ID for the workflow to interact with.
* **Returns:**
  A Workflow object for the existing workflow ID.
* **Return type:**
  Workflow

#### Example

```pycon
>>> from clarifai.client.app import App
>>> app = App(app_id="app_id", user_id="user_id")
>>> workflow = app.workflow(workflow_id="workflow_id")
```

## Dataset

### *class* Dataset(url_init='', dataset_id='', \*\*kwargs)

Dataset is a class that provides access to Clarifai API endpoints related to Dataset information.

#### \_\_init_\_(url_init='', dataset_id='', \*\*kwargs)

Initializes a Dataset object.

* **Parameters:**
  * **url_init** (*str*) – The URL to initialize the dataset object.
  * **dataset_id** (*str*) – The Dataset ID within the App to interact with.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

#### upload_dataset(task, split, module_dir=None, dataset_loader=None, chunk_size=128)

Uploads a dataset to the app.

* **Parameters:**
  * **task** (*str*) – task type(text_clf, visual-classification, visual_detection, visual_segmentation, visual-captioning)
  * **split** (*str*) – split type(train, test, val)
  * **module_dir** (*str*) – path to the module directory
  * **dataset_loader** (*str*) – name of the dataset loader
  * **chunk_size** (*int*) – chunk size for concurrent upload of inputs and annotations
* **Return type:**
  `None`

#### upload_from_csv(csv_path, input_type='text', labels=True, chunk_size=128)

Uploads dataset from a csv file.

* **Parameters:**
  * **csv_path** (*str*) – path to the csv file
  * **input_type** (*str*) – type of the dataset(text, image)
  * **labels** (*bool*) – True if csv file has labels column
  * **chunk_size** (*int*) – chunk size for concurrent upload of inputs and annotations
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.dataset import Dataset
>>> dataset = Dataset(user_id = 'user_id', app_id = 'demo_app', dataset_id = 'demo_dataset')
>>> dataset.upload_from_csv(csv_path='csv_path', labels=True)
```

Note: csv file should have either one(input) or two columns(input, labels).

#### upload_from_folder(folder_path, input_type, labels=False, chunk_size=128)

Upload dataset from folder.

* **Parameters:**
  * **folder_path** (*str*) – Path to the folder containing images.
  * **input_type** (*str*) – type of the dataset(text, image)
  * **labels** (*bool*) – True if folder name is the label for the inputs
  * **chunk_size** (*int*) – chunk size for concurrent upload of inputs and annotations
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.dataset import Dataset
>>> dataset = Dataset(user_id = 'user_id', app_id = 'demo_app', dataset_id = 'demo_dataset')
>>> dataset.upload_from_folder(folder_path='folder_path', input_type='text', labels=True)
```

Note: The filename is used as the input_id.

## Input

### *class* Inputs(user_id='', app_id='', logger_level='INFO', \*\*kwargs)

Inputs is a class that provides access to Clarifai API endpoints related to Input information.

#### \_\_init_\_(user_id='', app_id='', logger_level='INFO', \*\*kwargs)

Initializes an Input object.

* **Parameters:**
  * **user_id** (*str*) – A user ID for authentication.
  * **app_id** (*str*) – An app ID for the application to interact with.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Input

#### delete_inputs(inputs)

Delete list of input objects from the app.

* **Parameters:**
  **input_ids** (*Input*) – List of input objects to delete.
* **Return type:**
  `None`

#### Example

```pycon
>>> from clarifai.client.user import User
>>> input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
>>> input_obj.delete_inputs(input_obj.list_inputs())
```

#### get_annotation_proto(input_id, label, annotations)

Create an annotation proto for each bounding box, label input pair.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the annotation to create.
  * **label** (*str*) – annotation label
  * **annotations** (*List*) – a list of a single bbox’s coordinates. # Annotations ordering: [xmin, ymin, xmax, ymax]
* **Return type:**
  `Annotation`
* **Returns:**
  An annotation object for the specified input ID.

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_obj.get_annotation_proto(input_id='demo', label='demo', annotations=[x_min, y_min, x_max, y_max])
```

#### get_image_inputs_from_folder(folder_path, dataset_id=None, labels=False)

Create input protos for image data type from folder.

* **Parameters:**
  **folder_path** (*str*) – Path to the folder containing images.
* **Returns:**
  A list of Input objects for the specified folder.
* **Return type:**
  list of Input

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_protos = input_obj.get_image_inputs_from_folder(folder_path='demo_folder')
```

#### get_input_from_bytes(input_id, image_bytes=None, video_bytes=None, audio_bytes=None, dataset_id=None, \*\*kwargs)

Create input proto from bytes.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_bytes** (*str*) – The bytes for the image.
  * **video_bytes** (*str*) – The bytes for the video.
  * **audio_bytes** (*str*) – The bytes for the audio.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
* **Returns:**
  An Input object for the specified input ID.
* **Return type:**
  Input

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> image = open('demo.jpg', 'rb').read()
>>> video = open('demo.mp4', 'rb').read()
>>> input_proto = input_obj.get_input_from_bytes(input_id = 'demo',image_bytes =image, video_bytes=video)
```

#### get_input_from_file(input_id, image_file=None, video_file=None, audio_file=None, dataset_id=None, \*\*kwargs)

Create input proto from files.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_file** (*str*) – The url for the image.
  * **video_file** (*str*) – The url for the video.
  * **audio_file** (*str*) – The url for the audio.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
* **Returns:**
  An Input object for the specified input ID.
* **Return type:**
  Input

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_proto = input_obj.get_input_from_file(input_id = 'demo', video_file='file_path')
```

#### get_input_from_url(input_id, image_url=None, video_url=None, audio_url=None, text_url=None, dataset_id=None, \*\*kwargs)

Create input proto from url.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_url** (*str*) – The url for the image.
  * **video_url** (*str*) – The url for the video.
  * **audio_url** (*str*) – The url for the audio.
  * **text_url** (*str*) – The url for the text.
    dataset_id (str): The dataset ID for the dataset to add the input to.
* **Returns:**
  An Input object for the specified input ID.
* **Return type:**
  Input

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_proto = input_obj.get_input_from_url(input_id = 'demo', image_url='https://samples.clarifai.com/metro-north.jpg')
```

#### get_mask_proto(input_id, label, polygons)

Create an annotation proto for each polygon box, label input pair.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the annotation to create.
  * **label** (*str*) – annotation label
  * **polygons** (*List*) – Polygon x,y points iterable
* **Return type:**
  `Annotation`
* **Returns:**
  An annotation object for the specified input ID.

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_obj.get_mask_proto(input_id='demo', label='demo', polygons=[[[x,y],...,[x,y]],...])
```

#### get_text_input(input_id, raw_text, dataset_id=None, \*\*kwargs)

Create input proto for text data type from rawtext.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **raw_text** (*str*) – The raw text input.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the Input
* **Returns:**
  An Input object for the specified input ID.
* **Return type:**
  Text

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_protos = input_obj.get_text_input(input_id = 'demo', raw_text = 'This is a test')
```

#### get_text_input_from_csv(csv_path, dataset_id=None, labels=True)

Create input proto for text data type from cscv.

* **Parameters:**
  * **csv_path** (*str*) – Path to the csv file.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
  * **labels** (*str*) – True if csv file has labels column.
* **Returns:**
  List of inputs
* **Return type:**
  inputs

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_protos = input_obj.get_text_input_from_csv(csv_path = 'filepath')
```

#### get_text_inputs_from_folder(folder_path, dataset_id=None, labels=False)

Create input protos for text data type from folder.

* **Parameters:**
  **folder_path** (*str*) – Path to the folder containing text.
* **Returns:**
  A list of Input objects for the specified folder.
* **Return type:**
  list of Input

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input()
>>> input_protos = input_obj.get_text_inputs_from_folder(folder_path='demo_folder')
```

#### list_inputs()

Lists all the inputs for the app.

* **Returns:**
  A list of Input objects for the app.
* **Return type:**
  list of Input

#### Example

```pycon
>>> from clarifai.client.user import User
>>> input_obj = User(user_id="user_id").app(app_id="app_id").inputs()
>>> input_obj.list_inputs()
```

#### upload_annotations(batch_annot, show_log=True)

Upload image annotations to app.

* **Parameters:**
  **batch_annot** (`List`[`Annotation`]) – annot batch protos
* **Returns:**
  failed annot upload
* **Return type:**
  retry_upload

#### upload_from_bytes(input_id, image_bytes=None, video_bytes=None, audio_bytes=None, dataset_id=None, \*\*kwargs)

Upload input from bytes.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_bytes** (*str*) – The bytes for the image.
  * **video_bytes** (*str*) – The bytes for the video.
  * **audio_bytes** (*str*) – The bytes for the audio.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
* **Returns:**
  job id for the upload request.
* **Return type:**
  input_job_id

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
>>> image = open('demo.jpg', 'rb').read()
>>> input_obj.upload_from_bytes(input_id='demo', image_bytes=image)
```

#### upload_from_file(input_id, image_file=None, video_file=None, audio_file=None, dataset_id=None, \*\*kwargs)

Upload input from file.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_file** (*str*) – The file for the image.
  * **video_file** (*str*) – The file for the video.
  * **audio_file** (*str*) – The file for the audio.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
* **Returns:**
  job id for the upload request.
* **Return type:**
  input_job_id

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
>>> input_obj.upload_from_file(input_id='demo', audio_file='demo.mp3')
```

#### upload_from_url(input_id, image_url=None, video_url=None, audio_url=None, text_url=None, dataset_id=None, \*\*kwargs)

Upload input from url.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **image_url** (*str*) – The url for the image.
  * **video_url** (*str*) – The url for the video.
  * **audio_url** (*str*) – The url for the audio.
  * **text_url** (*str*) – The url for the text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
* **Returns:**
  job id for the upload request.
* **Return type:**
  input_job_id

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
>>> input_obj.upload_from_url(input_id='demo', image_url='https://samples.clarifai.com/metro-north.jpg')
```

#### upload_inputs(inputs, show_log=True)

Upload list of input objects to the app.

* **Parameters:**
  * **inputs** (*list*) – List of input objects to upload.
  * **show_log** (*bool*) – Show upload status log.
* **Returns:**
  job id for the upload request.
* **Return type:**
  input_job_id

#### upload_text(input_id, raw_text, dataset_id=None, \*\*kwargs)

Upload text from raw text.

* **Parameters:**
  * **input_id** (*str*) – The input ID for the input to create.
  * **raw_text** (*str*) – The raw text.
  * **dataset_id** (*str*) – The dataset ID for the dataset to add the input to.
* **Returns:**
  job id for the upload request.
* **Return type:**
  input_job_id (str)

#### Example

```pycon
>>> from clarifai.client.input import Input
>>> input_obj = Input(user_id = 'user_id', app_id = 'demo_app')
>>> input_obj.upload_text(input_id = 'demo', raw_text = 'This is a test')
```

## Lister

### *class* Lister(page_size=16)

Lister class for obtaining paginated results from the Clarifai API.

#### \_\_init_\_(page_size=16)

#### list_all_pages_generator(endpoint, proto_message, request_data)

Lists all pages of a resource.

* **Parameters:**
  * **endpoint** (*Callable*) – The endpoint to call.
  * **proto_message** (*Any*) – The proto message to use.
  * **request_data** (*dict*) – The request data to use.
* **Yields:**
  *response_dict* – The next item in the listing.
* **Return type:**
  `Generator`[`Dict`[`str`, `Any`], `None`, `None`]

## Model

### *class* Model(url_init='', model_id='', model_version={'id': ''}, output_config={'min_value': 0}, \*\*kwargs)

Model is a class that provides access to Clarifai API endpoints related to Model information.

#### \_\_init_\_(url_init='', model_id='', model_version={'id': ''}, output_config={'min_value': 0}, \*\*kwargs)

Initializes a Model object.

* **Parameters:**
  * **url_init** (*str*) – The URL to initialize the model object.
  * **model_id** (*str*) – The Model ID to interact with.
  * **model_version** (*dict*) – The Model Version to interact with.
  * **output_config** (*dict*) – The output config to interact with.
    min_value (float): The minimum value of the prediction confidence to filter.
    max_concepts (int): The maximum number of concepts to return.
    select_concepts (list[Concept]): The concepts to select.
    sample_ms (int): The number of milliseconds to sample.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

#### list_versions()

Lists all the versions for the model.

* **Returns:**
  A list of Model objects for the versions of the model.
* **Return type:**
  List[[Model](#clarifai.client.model.Model)]

#### Example

```pycon
>>> from clarifai.client.model import Model
>>> model = Model("model_url") # Example URL: https://clarifai.com/clarifai/main/models/general-image-recognition
            or
>>> model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
>>> all_model_versions = model.list_versions()
```

#### predict(inputs)

Predicts the model based on the given inputs.

* **Parameters:**
  **inputs** (*list**[**Input**]*) – The inputs to predict, must be less than 128.

#### predict_by_bytes(input_bytes, input_type)

Predicts the model based on the given bytes.

* **Parameters:**
  * **input_bytes** (*bytes*) – File Bytes to predict on.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio’.

#### Example

```pycon
>>> from clarifai.client.model import Model
>>> model = Model("https://clarifai.com/anthropic/completion/models/claude-v2")
>>> model_prediction = model.predict_by_bytes(b'Write a tweet on future of AI', 'text')
```

#### predict_by_filepath(filepath, input_type)

Predicts the model based on the given filepath.

* **Parameters:**
  * **filepath** (*str*) – The filepath to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

#### Example

```pycon
>>> from clarifai.client.model import Model
>>> model = Model("model_url") # Example URL: https://clarifai.com/clarifai/main/models/general-image-recognition
            or
>>> model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
>>> model_prediction = model.predict_by_filepath('/path/to/image.jpg', 'image')
>>> model_prediction = model.predict_by_filepath('/path/to/text.txt', 'text')
```

#### predict_by_url(url, input_type)

Predicts the model based on the given URL.

* **Parameters:**
  * **url** (*str*) – The URL to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

#### Example

```pycon
>>> from clarifai.client.model import Model
>>> model = Model("model_url") # Example URL: https://clarifai.com/clarifai/main/models/general-image-recognition
            or
>>> model = Model(model_id='model_id', user_id='user_id', app_id='app_id')
>>> model_prediction = model.predict_by_url('url', 'image')
```

## Workflow

### *class* Workflow(url_init='', workflow_id='', workflow_version={'id': ''}, output_config={'min_value': 0}, \*\*kwargs)

Workflow is a class that provides access to Clarifai API endpoints related to Workflow information.

#### \_\_init_\_(url_init='', workflow_id='', workflow_version={'id': ''}, output_config={'min_value': 0}, \*\*kwargs)

Initializes a Workflow object.

* **Parameters:**
  * **url_init** (*str*) – The URL to initialize the workflow object.
  * **workflow_id** (*str*) – The Workflow ID to interact with.
  * **workflow_version** (*dict*) – The Workflow Version to interact with.
  * **output_config** (*dict*) – The output config to interact with.
    min_value (float): The minimum value of the prediction confidence to filter.
    max_concepts (int): The maximum number of concepts to return.
    select_concepts (list[Concept]): The concepts to select.
    sample_ms (int): The number of milliseconds to sample.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

#### list_versions()

Lists all the versions of the workflow.

* **Returns:**
  A list of Workflow objects.
* **Return type:**
  list[[Workflow](#clarifai.client.workflow.Workflow)]

#### Example

```pycon
>>> from clarifai.client.workflow import Workflow
>>> workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
>>> workflow_versions = workflow.list_versions()
```

#### predict(inputs)

Predicts the workflow based on the given inputs.

* **Parameters:**
  **inputs** (*list**[**Input**]*) – The inputs to predict.

#### predict_by_bytes(input_bytes, input_type)

Predicts the workflow based on the given bytes.

* **Parameters:**
  * **input_bytes** (*bytes*) – Bytes to predict on.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

#### predict_by_filepath(filepath, input_type)

Predicts the workflow based on the given filepath.

* **Parameters:**
  * **filepath** (*str*) – The filepath to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

#### Example

```pycon
>>> from clarifai.client.workflow import Workflow
>>> workflow = Workflow("workflow_url") # Example: https://clarifai.com/clarifai/main/workflows/Face-Sentiment
              or
>>> workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
>>> workflow_prediction = workflow.predict_by_filepath('filepath', 'image')
```

#### predict_by_url(url, input_type)

Predicts the workflow based on the given URL.

* **Parameters:**
  * **url** (*str*) – The URL to predict.
  * **input_type** (*str*) – The type of input. Can be ‘image’, ‘text’, ‘video’ or ‘audio.

#### Example

```pycon
>>> from clarifai.client.workflow import Workflow
>>> workflow = Workflow("workflow_url") # Example: https://clarifai.com/clarifai/main/workflows/Face-Sentiment
              or
>>> workflow = Workflow(user_id='user_id', app_id='app_id', workflow_id='workflow_id')
>>> workflow_prediction = workflow.predict_by_url('url', 'image')
```

## Module

### *class* Module(url_init='', module_id='', module_version={'id': ''}, \*\*kwargs)

Module is a class that provides access to Clarifai API endpoints related to Module information.

#### \_\_init_\_(url_init='', module_id='', module_version={'id': ''}, \*\*kwargs)

Initializes a Module object.

* **Parameters:**
  * **url_init** (*str*) – The URL to initialize the module object.
  * **module_id** (*str*) – The Module ID to interact with.
  * **module_version** (*dict*) – The Module Version to interact with.
  * **\*\*kwargs** – Additional keyword arguments to be passed to the ClarifaiAuthHelper.

#### list_versions()

Lists all the module versions for the module.

* **Returns:**
  A list of Module objects for versions of the module.
* **Return type:**
  List[Moudle]

#### Example

```pycon
>>> from clarifai.client.module import Module
>>> module = Module(module_id='module_id', user_id='user_id', app_id='app_id')
>>> all_Module_versions = module.list_versions()
```

## Utils

### *class* Chunker(seq, size)

Split an input sequence into small chunks.

#### \_\_init_\_(seq, size)

#### chunk()

Chunk input sequence.

* **Return type:**
  `List`[`List`]

## Exceptions

### *class* ApiError(resource, params, method, response=None)

API Server error

#### \_\_init_\_(resource, params, method, response=None)

### *class* ApiClientError

API Client Error

### *class* UserError

