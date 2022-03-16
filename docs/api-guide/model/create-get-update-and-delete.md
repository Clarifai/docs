---
description: Manage your model training jobs.
sidebar_position: 5
---

# Models: Create, Update, Get, Delete

**Manage your model training jobs**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/create_model.py";
import PythonAddConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/add_concepts_model.py";
import PythonRemoveConceptsModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/remove_concepts_from_model.py";
import PythonUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/update_model_name_configuration.py";
import PythonListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/list_model_types.py";
import PythonGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/get_models.py";
import PythonGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/get_model_by_id.py";
import PythonGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/get_model_output_info_by_id.py";
import PythonListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/list_model_versions.py";
import PythonGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/get_model_version_by_id.py";
import PythonGetModelTraining from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/get_model_training_inputs.py";
import PythonGetModelTrainingVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/get_model_training_inputs_by_version.py";
import PythonDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/delete_model.py";
import PythonDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/delete_model_version.py";
import PythonDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/delete_all_models.py";
import PythonTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/train_model.py";
import PythonPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/predict_model.py";
import PythonSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/search_models_name_type.py";

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

## Create

### Create a Model

To create a model, you need to specify the model's name and other required fields⁠—depending on the type of model you want to create. Specifying the ID is optional.

Below is an example of how you would create a classifier model with one initial concept. You can always add and remove concepts later.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleModelResponse postModelsResponse = stub.postModels(
    PostModelsRequest.newBuilder().addModels(
        Model.newBuilder()
            .setId("petsID")
            .setOutputInfo(
                OutputInfo.newBuilder().setData(
                    Data.newBuilder().addConcepts(Concept.newBuilder().setId("boscoe"))
                )
            )
    ).build()
);

if (postModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post models failed, status: " + postModelsResponse.getStatus());
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModels(
    {
        models: [
            {
                id: "petsID",
                output_info: {
                    data: {concepts: [{id: "boscoe"}]},
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post models failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "model": {
      "id": "petsID",
      "output_info": {
        "data": {
          "concepts": [
            {
              "id": "boscoe",
              "value": 1
            }
          ]
        }
      }
    }
  }'\
  https://api.clarifai.com/v2/models
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "model": {
    "id": "petsID",
    "output_info": {
      "data": {
        "concepts": [
          {
            "id": "boscoe",
            "value": 1
          }
        ]
      }
    }
  }
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Add Concepts to a Model

You can add concepts to a model at any point. Just as you add concepts to inputs, you may add them to your model as well. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

...

MultiModelResponse patchModelsResponse = stub.patchModels(
    PatchModelsRequest.newBuilder()
        .setAction("merge")  // Supported actions: overwrite, merge, remove
        .addModels(
            Model.newBuilder()
                .setId("petsID")
                .setOutputInfo(
                    OutputInfo.newBuilder().setData(
                        Data.newBuilder().addConcepts(Concept.newBuilder().setId("charlie"))
                    )
                )
        )
        .build()
);

if (patchModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch models failed, status: " + patchModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchModels(
    {
        action: "merge",  // Supported actions: overwrite, merge, remove
        models: [
            {
                id: "petsID",
                output_info: {data: {concepts: [{id: "charlie"}]}}
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch models failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "models": [
      {
        "id": "petsID",
        "output_info": {
          "data": {
            "concepts": [
              {
                "id": "charlie"
              }
            ]
          }
        }
      }
    ],
    "action": "merge"
  }'\
  https://api.clarifai.com/v2/models/
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "models": [
    {
      "id": "petsID",
      "output_info": {
        "data": {
          "concepts": [
            {
              "id": "charlie"
            }
          ]
        }
      }
    }
  ],
  "action": "merge"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Remove Concepts From a Model

Conversely, if you'd like to remove concepts from a model, you can also do that.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonRemoveConceptsModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiModelResponse patchModelsResponse = stub.patchModels(
    PatchModelsRequest.newBuilder()
        .setAction("remove")  // Supported actions: overwrite, merge, remove
        .addModels(
            Model.newBuilder()
                .setId("petsID")
                .setOutputInfo(
                    OutputInfo.newBuilder().setData(
                        Data.newBuilder().addConcepts(Concept.newBuilder().setId("charlie"))
                    )
                )
        )
        .build()
);

if (patchModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch models failed, status: " + patchModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchModels(
    {
        action: "remove",  // Supported actions: overwrite, merge, remove
        models: [
            {
                id: "petsID",
                output_info: {data: {concepts: [{id: "charlie"}]}}
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch models failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "models": [
      {
        "id": "petsID",
        "output_info": {
          "data": {
            "concepts": [
              {
                "id": "charlie"
              }
            ]
          }
        }
      }
    ],
    "action": "remove"
  }'\
  https://api.clarifai.com/v2/models/
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "models": [
    {
      "id": "petsID",
      "output_info": {
        "data": {
          "concepts": [
            {
              "id": "charlie"
            }
          ]
        }
      }
    }
  ],
  "action": "remove"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Update

### Update Model Name and Configuration

Let's change the model name to `newname` and set the model's configuration to have `concepts_mutually_exclusive=true` and `closed_environment=true`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiModelResponse patchModelsResponse = stub.patchModels(
    PatchModelsRequest.newBuilder()
        .setAction("overwrite")
        .addModels(
            Model.newBuilder()
                .setId("petsID")
                .setName("newname")
                .setOutputInfo(
                    OutputInfo.newBuilder()
                        .setData(
                            Data.newBuilder()
                                .addConcepts(Concept.newBuilder().setId("birds"))
                                .addConcepts(Concept.newBuilder().setId("hurd"))
                        )
                        .setOutputConfig(
                            OutputConfig.newBuilder()
                                .setConceptsMutuallyExclusive(true)
                                .setClosedEnvironment(true)
                        )
                )
    ).build()
);

if (patchModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Patch models failed, status: " + patchModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PatchModels(
    {
        action: "overwrite",
        models: [
            {
                id: "petsID",
                name: "newname",
                output_info: {
                    data: {concepts: [{id: "birds"}, {id: "hurd"}]},
                    output_config: {concepts_mutually_exclusive: true, closed_environment: true}
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch models failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PATCH \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "models": [
      {
        "id": "petsID",
        "name": "newname",
        "output_info": {
          "data": {"concepts": [{"id": "birds"}, {"id": "hurd"}]},
          "output_config": {
            "concepts_mutually_exclusive": true,
            "closed_environment": true
          }
        }
      }
    ],
    "action": "overwrite"
  }'\
  https://api.clarifai.com/v2/models/
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "models": [
    {
      "id": "petsID",
      "name": "newname",
      "output_info": {
        "data": {"concepts": [{"id": "birds"}, {"id": "hurd"}]},
        "output_config": {
          "concepts_mutually_exclusive": true,
          "closed_environment": true
        }
      }
    }
  ],
  "action": "overwrite"
});

const requestOptions = {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Get

### List Model Types

Learn about the available model types and their hyperparameters. This endpoint lets you list all the possible models that are creatable (when `creatable=true`) or generally in the platform (the other ones have `creatable=false`).

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiModelTypeResponse listModelTypesResponse = stub.listModelTypes(ListModelTypesRequest.newBuilder().build());

for (ModelType modelType : listModelTypesResponse.getModelTypesList()) {
    System.out.println(modelType);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListModelTypes(
    {
        page: 1,
        per_page: 500
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Received status: " + response.status.description + "\n" + response.status.details);
        }

        for (const model_type of response.model_types) {
            console.log(model_type)
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET 'https://api.clarifai.com/v2/models/types?per_page=20&page=1' \
    -H 'Authorization: Key YOUR_API_KEY'
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/types?per_page=20&page=1`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get Models

Below is an example of how to get a list of all the models, including models you've created as well as Clarifai's models.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModels}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import java.util.List;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiModelResponse listModelsResponse = stub.listModels(
    ListModelsRequest.newBuilder().build()
);

if (listModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List models failed, status: " + listModelsResponse.getStatus());
}

List<Model> models = listModelsResponse.getModelsList();
for (Model model : models) {
    System.out.println(model);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListModels(
    {},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List models failed, status: " + response.status.description);
        }

        for (const model of response.models) {
            console.log(JSON.stringify(model, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get Model by ID

All models have unique IDs. You can get a specific model by its ID.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleModelResponse getModelResponse = stub.getModel(
    GetModelRequest.newBuilder()
        .setModelId("petsID")
        .build()
);

if (getModelResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get model failed, status: " + getModelResponse.getStatus());
}

Model model = getModelResponse.getModel();
System.out.println(model);
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.GetModel(
    {model_id: "petsID"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List models failed, status: " + response.status.description);
        }

        const model = response.model;
        console.log(JSON.stringify(model, null, 2));
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get Model Output Info by ID

The output info of a model lists the concepts it contains.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleModelResponse getModelOutputInfoResponse = stub.getModelOutputInfo(
    GetModelRequest.newBuilder()
        .setModelId("petsID")
        .build()
);

if (getModelOutputInfoResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get model output info failed, status: " + getModelOutputInfoResponse.getStatus());
}

Model model = getModelOutputInfoResponse.getModel();
System.out.println(model);
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.GetModelOutputInfo(
    {model_id: "petsID"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List models failed, status: " + response.status.description);
        }

        const model = response.model;
        console.log(JSON.stringify(model, null, 2));
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID/output_info
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}/output_info`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### List Model Versions

Every time you train a model, it creates a new version. You can list all the versions created.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import java.util.List;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiModelVersionResponse listModelVersionsResponse = stub.listModelVersions(
    ListModelVersionsRequest.newBuilder()
        .setModelId("petsID")
        .build()
);

if (listModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List model versions failed, status: " + listModelVersionsResponse.getStatus());
}

List<ModelVersion> modelVersions = listModelVersionsResponse.getModelVersionsList();
for (ModelVersion modelVersion : modelVersions) {
    System.out.println(modelVersion);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListModelVersions(
    {model_id: "petsID"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List model versions failed, status: " + response.status.description);
        }

        for (const model_version of response.model_versions) {
            console.log(JSON.stringify(model_version, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID/versions
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}/versions`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get Model Version by ID

To get the details of a specific model version, you must provide the `model_id` as well as the `version_id`. You can inspect the model version status to determine if your model is trained or still training.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions


SingleModelVersionResponse getModelVersionResponse = stub.getModelVersion(
    GetModelVersionRequest.newBuilder()
        .setModelId("petsID")
        .setVersionId("{YOUR_MODEL_VERSION_ID}")
        .build()
);

if (getModelVersionResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Get model version failed, status: " + getModelVersionResponse.getStatus());
}

ModelVersion modelVersion = getModelVersionResponse.getModelVersion();
System.out.println(modelVersion);
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.GetModelVersion(
    {model_id: "petsID", version_id: "{YOUR_MODEL_VERSION_ID}"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Get model version failed, status: " + response.status.description);
        }

        const model_version = response.model_version;
        console.log(JSON.stringify(model_version, null, 2));
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID/versions/{YOUR_MODEL_VERSION_ID}
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'
const modelVersionId = '{MODEL_VERSION_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}/versions/${modelVersionId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get Model Training Inputs

You can list all the inputs that were used to train the model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelTraining}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse listModelInputsResponse = stub.listModelInputs(
    ListModelInputsRequest.newBuilder()
        .setModelId("petsID")
        .build()
);

if (listModelInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List model inputs failed, status: " + listModelInputsResponse.getStatus());
}

List<Input> inputs = listModelInputsResponse.getInputsList();
for (Input input : inputs) {
    System.out.println(input);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListModelInputs(
    {model_id: "petsID"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List model inputs failed, status: " + response.status.description);
        }

        for (const input of response.inputs) {
            console.log(JSON.stringify(input, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}/inputs`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Get Model Training Inputs by Version

You can also list all the inputs that were used to train a specific model version.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetModelTrainingVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import java.util.List;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse listModelInputsResponse = stub.listModelInputs(
    ListModelInputsRequest.newBuilder()
        .setModelId("petsID")
        .setVersionId("{YOUR_MODEL_VERSION_ID}")
        .build()
);

if (listModelInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List model inputs failed, status: " + listModelInputsResponse.getStatus());
}

List<Input> inputs = listModelInputsResponse.getInputsList();
for (Input input : inputs) {
    System.out.println(input);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListModelInputs(
    {
        model_id: "petsID",
        version_id: "{YOUR_MODEL_VERSION_ID}"
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List model inputs failed, status: " + response.status.description);
        }

        for (const input of response.inputs) {
            console.log(JSON.stringify(input, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID/versions/{YOUR_MODEL_VERSION_ID}/inputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'
const modelVersionId = '{MODEL_VERSION_ID}'

const requestOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}/versions/${modelVersionId}/inputs`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Delete

### Delete a Model

You can delete a model using the `model_id`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteModelResponse = stub.deleteModel(
    DeleteModelRequest.newBuilder()
        .setModelId("petsID")
        .build()
);

if (deleteModelResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete model failed, status: " + deleteModelResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteModel(
    {model_id: "petsID"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete model failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Delete a Model Version

You can also delete a specific version of a model with the `model_id` and `version_id`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteModelVersionResponse = stub.deleteModelVersion(
    DeleteModelVersionRequest.newBuilder()
        .setModelId("petsID")
        .setVersionId("{YOUR_MODEL_VERSION_ID}")
        .build()
);

if (deleteModelVersionResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete model version failed, status: " + deleteModelVersionResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteModelVersion(
    {
        model_id: "petsID",
        version_id: "{YOUR_MODEL_VERSION_ID}"
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete model version failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/petsID/versions/{YOUR_MODEL_VERSION_ID}
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'
const modelVersionId = '{MODEL_VERSION_ID}'

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}/versions/${modelVersionId}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Delete all Models

If you would like to delete all models associated with an application, you can also do that. 

:::caution
Please proceed with caution as deleted models cannot be recovered.
:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

BaseResponse deleteModelsResponse = stub.deleteModels(
    DeleteModelsRequest.newBuilder()
        .setDeleteAll(true)
        .build()
);

if (deleteModelsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Delete models failed, status: " + deleteModelsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.DeleteModels(
    {delete_all: true},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete models failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X DELETE \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/models/
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'

const requestOptions = {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Train

### Train a Model

When you train a model, you are telling the system to look at successfully indexed images with concepts you've provided and learn from them. This train operation is asynchronous. It may take a few seconds for your model to be fully trained and ready.

:::note
You can repeat this operation as often as you like. By adding more images with concepts and training, you can get the model to predict exactly how you want it to.
:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
    PostModelVersionsRequest.newBuilder()
        .setModelId("petsID")
        .build()
);

if (postModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post model versions failed, status: " + postModelVersionsResponse.getStatus());
}

String modelVersionId = postModelVersionsResponse.getModel().getModelVersion().getId();
System.out.println("New model version ID: " + modelVersionId);
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModelVersions(
    {model_id: "petsID"},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model versions failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.clarifai.com/v2/models/petsID/versions
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const appId = '{YOUR_APP_ID}'
const modelId = '{MODEL_ID}'

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  }
};

fetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/models/${modelId}/versions`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Predict

### Predict With a Model

Once you have trained a model, you are ready to use the new model to make predictions. The predictions returned will only contain the concepts that you told it to see.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonPredictModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
    PostModelOutputsRequest.newBuilder()
        .setModelId("petsID")
        .setVersionId("{YOUR_MODEL_VERSION_ID}")  // Optional. Defaults to the latest version.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setImage(
                    Image.newBuilder().setUrl("https://samples.clarifai.com/metro-north.jpg")
                )
            )
        )
        .build()
);

if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
}

// Since we have one input, one output will exist here.
Output output = postModelOutputsResponse.getOutputs(0);

System.out.println("Predicted concepts:");
for (Concept concept : output.getData().getConceptsList()) {
    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModelOutputs(
    {
        model_id: "petsID",
        version_id: "{YOUR_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.
        inputs: [
            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        console.log("Predicted concepts:");
        for (const concept of output.data.concepts) {
            console.log(concept.name + " " + concept.value);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/puppy.jpeg"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/petsID/outputs

# Model version defaults to latest. If you want to specify the model version, use this URL:
# https://api.clarifai.com/v2/models/petsID/versions/{YOUR_MODEL_VERSION_ID}/outputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/puppy.jpeg"
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch("https://api.clarifai.com/v2/models/petsID/versions/{MODEL_VERSION_ID}/outputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Search

### Search Models by Name and Type

You can search all your models by name and type of model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import java.util.List;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiModelResponse postModelsSearchesResponse = stub.postModelsSearches(
    PostModelsSearchesRequest.newBuilder()
        .setModelQuery(
            ModelQuery.newBuilder()
                .setName("gen*")
                .setType("concept")
        )
        .build()
);

if (postModelsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post models searches failed, status: " + postModelsSearchesResponse.getStatus());
}

List<Model> models = postModelsSearchesResponse.getModelsList();
for (Model model : models) {
    System.out.println(model);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModelsSearches(
    {
        model_query: {
            name: "gen*",
            type: "concept"
        }
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model searches failed, status: " + response.status.description);
        }

        const models = response.models;
        for (const model of models) {
            console.log(JSON.stringify(model, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "model_query": {
      "name": "gen*",
      "type": "concept"
    }
  }'\
  https://api.clarifai.com/v2/models/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "model_query": {
    "name": "gen*",
    "type": "concept"
  }
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models/searches", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>
