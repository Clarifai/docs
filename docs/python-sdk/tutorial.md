---
description: Learn how to use our Clarifai Python SDK
sidebar_position: 2
---

# Tutorial

**Learn how to use the Clarifai Python SDK**
<hr />

The Python SDK is designed to offer you a simple, fast, and efficient way to experience the power of Clarifai’s AI platform—all with just a few lines of code.

Here are some self-contained code snippets that you can easily copy and get started consuming the Clarifai API easily and quickly. 

For detailed information about the Python SDK, please refer to its [API Reference](https://docs.clarifai.com/python-sdk/api-reference).

## Examples

### Predict with Models

For more information on any of the public models, visit [here](https://clarifai.com/explore/models)

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.model import Model

# Model Predict
model_prediction = Model("https://clarifai.com/anthropic/completion/models/claude-v2").predict_by_bytes(b"Write a tweet on future of AI", "text")

model = Model(user_id="user_id", app_id="app_id", model_id="model_id")
model_prediction = model.predict_by_url(url="url", input_type="image") # Supports image, text, audio, video

# Customizing Model Inference Output
model = Model(user_id="user_id", app_id="app_id", model_id="model_id",
                  output_config={"min_value": 0.98}) # Return predictions having prediction confidence > 0.98
model_prediction = model.predict_by_filepath(filepath="local_filepath", input_type="text") # Supports image, text, audio, video

model = Model(user_id="user_id", app_id="app_id", model_id="model_id",
                  output_config={"sample_ms": 2000}) # Return predictions for specified interval
model_prediction = model.predict_by_url(url="VIDEO_URL", input_type="video")
```

### Predict with Workflow

For more information on any of the public workflows, visit [here](https://clarifai.com/explore/workflows).

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.workflow import Workflow

# Workflow Predict
workflow = Workflow("workflow_url") # Example: https://clarifai.com/clarifai/main/workflows/Face-Sentiment
workflow_prediction = workflow.predict_by_url(url="url", input_type="image") # Supports image, text, audio, video

# Customizing Workflow Inference Output
workflow = Workflow(user_id="user_id", app_id="app_id", workflow_id="workflow_id",
                  output_config={"min_value": 0.98}) # Return predictions having prediction confidence > 0.98
workflow_prediction = workflow.predict_by_filepath(filepath="local_filepath", input_type="text") # Supports image, text, audio, video
```

### Create App

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.user import User
client = User(user_id="user_id")

# Get all apps
apps = client.list_apps()

# Create app and dataset
app = client.create_app(app_id="demo_app", base_workflow="Universal")
```

### Create Dataset

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.app import App

# Get an app
app = App(user_id="user_id", app_id="app_id")

 # Create a dataset
dataset = app.create_dataset(dataset_id="demo_dataset")
```

### Create Workflow

Create a new workflow specified by a [yaml config file](https://github.com/Clarifai/examples/tree/main/workflows/configs).

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.app import App
app = App(user_id="user_id", app_id="app_id")
workflow = app.create_workflow(config_filepath="config.yml")
```

### Export Workflow

Export an existing workflow from Clarifai as a local yaml file.

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.workflow import Workflow
workflow = Workflow("https://clarifai.com/clarifai/main/workflows/Demographics")
workflow.export('demographics_workflow.yml')
```

### Upload Dataset

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.dataset import Dataset

# Get a dataset
dataset = Dataset(user_id="user_id", app_id="app_id", dataset_id="dataset_id")

# Upload dataset from loaders
dataset.upload_dataset(task='visual_segmentation', split="train", dataset_loader='coco_segmentation')

# Upload a dataset from local folder
dataset.upload_from_folder(folder_path='folder_path', input_type='text', labels=True)

# Upload a text dataset from csv file
dataset.upload_from_csv(csv_path='csv_path', labels=True)
```

### Upload Inputs

```python
from clarifai.client.user import User
app = User(user_id="user_id").app(app_id="app_id")
input_obj = app.inputs()

#input upload from url
input_obj.upload_from_url(input_id = 'demo', image_url='https://samples.clarifai.com/metro-north.jpg')

#input upload from filename
input_obj.upload_from_file(input_id = 'demo', video_file='demo.mp4')

# text upload
input_obj.upload_text(input_id = 'demo', raw_text = 'This is a test')
```

### List Apps

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.user import User
client = User(user_id="user_id")

# Get all apps
apps = client.list_apps()
```

### List Datasets

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.app import App

# Get an app
app = App(user_id="user_id", app_id="app_id")

# Get all datasets
datasets = app.list_datasets()
```

### List Models

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.app import App

# Get an app
app = App(user_id="user_id", app_id="app_id")

# Get all models
models = app.list_models()

# List all models in community filtered by model_type, description
all_llm_community_models = App().list_models(filter_by={"query": "LLM",
                                                     "model_type_id": "text-to-text"}, only_in_app=False)
```

### List Workflows

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.app import App

# Get an app
app = App(user_id="user_id", app_id="app_id")

# List all workflow in an app
workflows = app.list_workflows()

# List all workflow in community filtered by description
all_face_community_workflows = App().list_workflows(filter_by={"query": "face"}, only_in_app=False) # Get all face related workflows
```

### Delete App

```python
# Note: CLARIFAI_PAT must be set as env variable.
from clarifai.client.user import User
client = User(user_id="user_id")

# Delete an app
client.delete_app(app_id="app_id")
```

## Notebook Examples

Here are comprehensive step-by-step walkthroughs within Jupyter or Colab notebooks that showcase how to harness the power of the Clarifai Python SDK.

|Notebook              |  |Description                |
|----------------------|--|---------------------------|
| [Basics](https://github.com/Clarifai/examples/blob/main/basics/basics.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/basics/basics.ipynb) | App and dataset lifecycle: creation, interaction, and deletion    |
| [Input Upload](https://github.com/Clarifai/examples/blob/main/datasets/upload/input_upload.ipynb)<br />[Dataset Upload](https://github.com/Clarifai/examples/blob/main/datasets/upload/dataset_upload.ipynb) | ![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)<br />[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/datasets/upload/dataset_upload.ipynb) | Illustrates how to upload datasets into a Clarifai app using features from `Dataset`   |
| [Vector Search](https://github.com/Clarifai/examples/blob/main/search/cross_modal_search.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/search/cross_modal_search.ipynb) | How to do vector search over your own data |
| [Create Workflows](https://github.com/Clarifai/examples/blob/main/workflows/create_workflow.ipynb) <br />[Export workflows](https://github.com/Clarifai/examples/blob/main/workflows/export_workflow.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/workflows/create_workflow.ipynb)<br />[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/workflows/export_workflow.ipynb) | Learn how to create workflows <br /> Learn how to export workflows    |
| [Models Predict](https://github.com/Clarifai/examples/blob/main/models/model_predict.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_predict.ipynb) | Learn how to get predictions with text, image, video, and audio inputs with any model (e.g. LLMs) |
| [Image Classification Training](https://github.com/Clarifai/examples/blob/main/models/model_train/image-classification_training.ipynb) <br /> [Text Classification Training](https://github.com/Clarifai/examples/blob/main/models/model_train/text-classification_training.ipynb)<br /> [Image Detection Training](https://github.com/Clarifai/examples/blob/main/models/model_train/image-detection_training.ipynb) <br /> [Image Segmentation Training](https://github.com/Clarifai/examples/blob/main/models/model_train/image-segmentation_training.ipynb) <br /> [Transfer Learn Training](https://github.com/Clarifai/examples/blob/main/models/model_train/transfer-learn.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/image-classification_training.ipynb) <br />[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/text-classification_training.ipynb) <br /> [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/image-detection_training.ipynb) <br /> [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/image-segmentation_training.ipynb) <br /> [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/transfer-learn.ipynb) | Model training and finetuning for different model types.

