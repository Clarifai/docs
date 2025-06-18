---
description: Learn how to get, update, search, and delete models
sidebar_position: 4
---

# Manage Models

**Learn how to get, update, search, and delete models**
<hr />


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import PythonUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/update_model_name_configuration.py";
import PythonUpdateConfiguration2 from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/update_model_name_configuration_2.py";
import PythonListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/list_model_types.py";
import PythonGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_models.py";
import PythonGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_by_id.py";
import PythonGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_output_info_by_id.py";
import PythonListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/list_model_concepts.py";
import PythonListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/list_model_versions.py";
import PythonGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/get_model_version_by_id.py";
import PythonDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/delete_model.py";
import PythonDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/delete_model_version.py";
import PythonDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/delete_all_models.py";

import PythonSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/py/search_models_name_type.py";


import JSUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/update_model_name_configuration.html";
import JSUpdateConfiguration2 from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/update_model_name_configuration_2.html";
import JSListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/list_model_types.html";
import JSGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_models.html";
import JSGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_by_id.html";
import JSGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_output_info_by_id.html";
import JSListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/list_model_concepts.html";
import JSListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/list_model_versions.html";
import JSGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/get_model_version_by_id.html";
import JSDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/delete_model.html";
import JSDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/delete_model_version.html";
import JSDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/delete_all_models.html";

import JSSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/js/search_models_name_type.html";


import NodeUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/update_model_name_configuration.js";
import NodeUpdateConfiguration2 from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/update_model_name_configuration_2.js";
import NodeListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/list_model_types.js";
import NodeGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_models.js";
import NodeGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_by_id.js";
import NodeGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_output_info_by_id.js";
import NodeListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/list_model_versions.js";
import NodeListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/list_model_concepts.js"
import NodeGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/get_model_version_by_id.js";
import NodeDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/delete_model.js";
import NodeDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/delete_model_version.js";
import NodeDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/delete_all_models.js";

import NodeSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/node/search_models_name_type.js";


import JavaUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/update_model_name_configuration.java";
import JavaUpdateConfiguration2 from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/update_model_name_configuration_2.java";
import JavaListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/list_model_types.java";
import JavaListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/list_model_concepts.java";
import JavaGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_models.java";
import JavaGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_by_id.java";
import JavaGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_output_info_by_id.java";
import JavaListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/list_model_versions.java";
import JavaGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/get_model_version_by_id.java";
import JavaDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/delete_model.java";
import JavaDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/delete_model_version.java";
import JavaDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/delete_all_models.java";

import JavaSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/java/search_models_name_type.java";


import PHPUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/update_model_name_configuration.php";
import PHPUpdateConfiguration2 from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/update_model_name_configuration_2.php";
import PHPListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/list_model_types.php";
import PHPGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/get_models.php";
import PHPGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/get_model_by_id.php";
import PHPGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/get_model_output_info_by_id.php";
import PHPListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/list_model_concepts.php";
import PHPListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/list_model_versions.php";
import PHPGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/get_model_version_by_id.php";
import PHPDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/delete_model.php";
import PHPDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/delete_model_version.php";
import PHPDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/delete_all_models.php";


import PHPSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/php/search_models_name_type.php";


import CurlUpdateConfiguration from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/update_model_name_configuration.sh";
import CurlUpdateConfiguration2 from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/update_model_name_configuration_2.sh";
import CurlListModelTypes from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/list_model_types.sh";
import CurlGetModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_models.sh";
import CurlGetModelID from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_by_id.sh";
import CurlGetModelOutput from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_output_info_by_id.sh";
import CurlListModelVersions from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/list_model_versions.sh";
import CurlListModelConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/list_model_concepts.sh";
import CurlGetModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/get_model_version_by_id.sh";
import CurlDeleteModel from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/delete_model.sh";
import CurlDeleteModelVersion from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/delete_model_version.sh";
import CurlDeleteAllModels from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/delete_all_models.sh";


import CurlSearchModelsName from "!!raw-loader!../../../code_snippets/api-guide/model/create_get_update_delete/curl/search_models_name_type.sh";


import SDKPatchModel from "!!raw-loader!../../../code_snippets/python-sdk/model_training/clusterer/patch_model.py";



:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::




## Get

### List Model Types

Learn about the available model types and their hyperparameters. This endpoint lets you list all the possible models that are creatable (when `creatable=true`) or generally in the platform (the other ones have `creatable=false`).

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListModelTypes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelTypes}</CodeBlock>
</TabItem>

</Tabs>

### List Models

Below is an example of how to get a list of all the models you've created in your app. 

:::info

The **ListModels** endpoint will return details of all the models in your app, alongside the details of their latest versions. 

:::

:::tip

If you want to get a list of the models not within the scope of your app, you need to use your PAT while specifying the `user_id` of their owner and the `app_id` of the application that you’re accessing. For example, to get Clarifai's models in the `main` app, you need to use your PAT while specifying Clarifai's `user_id` as "clarifai" and `app_id` as "main" in the request.

:::

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetModels}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModels}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetModels}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetModels}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetModels}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModels}</CodeBlock>
</TabItem>

</Tabs>

### Get Model by ID

All models have unique IDs. You can get a specific model by its ID.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetModelID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetModelID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetModelID}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetModelID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelID}</CodeBlock>
</TabItem>

</Tabs>

### Get Model Output Info by ID

The output info of a model lists the concepts contained in the latest version of the model—unless a particular version is specified. 

:::note

The `GetModelOutputInfo` endpoint does not support pagination. If you want to split your results into pages, use the below-described `ListModelConcepts` endpoint.

:::

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetModelOutput}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelOutput}</CodeBlock>
</TabItem>

</Tabs>

### List Model Concepts

Apart from the `GetModelOutputInfo` endpoint, you can also use the `ListModelConcepts` endpoint to list the concepts in your model. 

A major difference between the two is that the `ListModelConcepts` endpoint supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/), which lets you easily list concepts instead of displaying all of them at once.


:::info

If you are using any of the Clarifai gRPC clients, the `ListModelConcepts` endpoint is only available from release 8.10.0. 

:::

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListModelConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelConcepts}</CodeBlock>
</TabItem>

</Tabs>

### List Model Versions

Every time you train a model, it creates a new version. You can list all the versions created.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListModelVersions}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListModelVersions}</CodeBlock>
</TabItem>

</Tabs>

### Get Model Version by ID

To get the details of a specific model version, you must provide the `model_id` as well as the `version_id` parameters. You can inspect the model version status to determine if your model is trained or still training.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetModelVersion}</CodeBlock>
</TabItem>

</Tabs>

## Update

After creating a model, you can perform patch operations on it by merging, removing, or overwriting data. By default, all actions support overwriting, but they handle lists of objects in specific ways. 

- The `merge` action updates a `key:value` pair with `key:new_value` or appends to an existing list. For dictionaries, it merges entries that share the same `id` field.
- The `remove` action is only used to delete the model's cover image on the platform UI.
- The `overwrite` action completely replaces an existing object with a new one.

:::info

- The **PatchModels** endpoint allows you to patch only the model level fields, and nothing in the model version. It only updates things like name, description, notes, and other metadata type information field you may have.
- The **PatchModelVersions** endpoint allows you to change most of the model version fields like gettable, metadata, license, description, notes, and `output_info` (not including concepts).

:::

### Update Model Name

Let's use the **PatchModels** endpoint to change the model name to `newname`.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateConfiguration}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateConfiguration}</CodeBlock>
</TabItem>

</Tabs>

### Update Model Configuration

Let's use the **PatchModelVersions** endpoint to configure the minimum probability threshold for the outputs we want to view from the model. We can modify the `min_value` parameter available for this model type to filter the outputs to see only the concepts with a probability score of 0.95 or higher.

:::tip

For embedding-classifiers, the `min_value` parameter falls within the range of 0 to 1, with a step size of 0.01. For most of the other model types, it falls within the range of 0 to 100, with a step size of 0.1.

:::


<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateConfiguration2}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateConfiguration2}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateConfiguration2}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateConfiguration2}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateConfiguration2}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateConfiguration2}</CodeBlock>
</TabItem>

</Tabs>

### Other Patch Operations

Below is an example of performing other patch operations on a model, such as updating its description and notes. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{SDKPatchModel}</CodeBlock>
</TabItem>
</Tabs>

## Search

### Search Models by Name and Type

You can search all your models by name and type of model.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPSearchModelsName}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSearchModelsName}</CodeBlock>
</TabItem>

</Tabs>

## Delete

### Delete a Model

You can delete a model by using the `model_id` parameter.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteModel}</CodeBlock>
</TabItem>

</Tabs>

### Delete a Model Version

You can also delete a specific version of a model with the `model_id` and `version_id` parameters.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteModelVersion}</CodeBlock>
</TabItem>

</Tabs>

### Delete all Models

If you would like to delete all models associated with an application, you can also do that. 

:::caution

Please proceed with extreme caution as deleted models cannot be recovered.

:::

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteAllModels}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteAllModels}</CodeBlock>
</TabItem>

</Tabs>

