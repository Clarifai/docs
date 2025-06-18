---
description: Learn how to use our API to manage, organize, and process your inputs
sidebar_position: 3
---

# Manage Inputs via API

**Learn how to use our API to manage, organize, and process your inputs**
<hr />

You can manage inputs on the Clarifai platform by organizing, updating, deleting, and performing various data processing tasks. 

Whether you're working with images, text, or videos, the platform provides powerful capabilities to help you maintain full control over your inputs throughout their lifecycle.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import BulkDeleteAnnotations from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/bulk_delete_annotations.py";
import DownloadInputs from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/download_inputs.py";

import CodeListInput from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/list_input.py";
import CodeDeleteInput from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/delete_input.py";

import CodePatchInputs1 from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/patch_inputs_1.py";
import CodePatchInputs2 from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/patch_inputs_2.py";
import CodePatchInputs3 from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/patch_inputs_3.py";
import CodePatchInputs4 from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/patch_inputs_4.py";

import CodeOutputListInput from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/outputs/list_input.txt";
import CodeOutputDeleteInput from "!!raw-loader!../../../code_snippets/python-sdk/managing-inputs/outputs/delete_input.txt";

import PythonListAllInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/list_all_inputs.py";
import PythonListInputsStreaming from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/list_inputs_streaming.py";
import PythonGetInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/get_input_by_id.py";
import PythonGetInputsStatus from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/get_inputs_status.py";
import PythonUpdateInputConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/update_input_concepts.py";
import PythonBulkUpdateInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/bulk_update_inputs_concepts.py";
import PythonDeleteConceptsInput from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/delete_concepts_input.py";
import PythonBulkDeleteConceptsInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/bulk_delete_concepts_inputs.py";
import PythonDeleteInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/delete_input_by_id.py";
import PythonDeleteListInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/delete_list_inputs.py";

import JSListAllInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/list_all_inputs.html";
import JSListInputsStreaming from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/list_inputs_streaming.html";
import JSGetInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/get_input_by_id.html";
import JSGetInputsStatus from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/get_inputs_status.html";
import JSUpdateInputConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/update_input_concepts.html"
import JSBulkUpdateInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/bulk_update_inputs_concepts.html";
import JSDeleteConceptsInput from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/delete_concepts_input.html";
import JSBulkDeleteConceptsInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/bulk_delete_concepts_inputs.html";
import JSDeleteInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/delete_input_by_id.html";
import JSDeleteListInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/delete_list_inputs.html"

import NodeListAllInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/list_all_inputs.js";
import NodeListInputsStreaming from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/list_inputs_streaming.js";
import NodeGetInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/get_input_by_id.js";
import NodeGetInputsStatus from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/get_inputs_status.js";
import NodeUpdateInputConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/update_input_concepts.js"
import NodeBulkUpdateInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/bulk_update_inputs_concepts.js";
import NodeDeleteConceptsInput from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/delete_concepts_input.js";
import NodeBulkDeleteConceptsInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/bulk_delete_concepts_inputs.js";
import NodeDeleteInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/delete_input_by_id.js";
import NodeDeleteListInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/delete_list_inputs.js";

import JavaListAllInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/list_all_inputs.java";
import JavaListInputsStreaming from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/list_inputs_streaming.java";
import JavaGetInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/get_input_by_id.java";
import JavaGetInputsStatus from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/get_inputs_status.java";
import JavaUpdateInputConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/update_input_concepts.java"
import JavaBulkUpdateInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/bulk_update_inputs_concepts.java";
import JavaDeleteConceptsInput from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/delete_concepts_input.java";
import JavaBulkDeleteConceptsInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/bulk_delete_concepts_inputs.java";
import JavaDeleteInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/delete_input_by_id.java";
import JavaDeleteListInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/delete_list_inputs.java";

import CurlListAllInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/list_all_inputs.sh";
import CurlListInputsStreaming from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/list_inputs_streaming.sh";
import CurlGetInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/get_input_by_id.sh";
import CurlGetInputsStatus from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/get_inputs_status.sh";
import CurlUpdateInputConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/update_input_concepts.sh"
import CurlBulkUpdateInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/bulk_update_inputs_concepts.sh";
import CurlDeleteConceptsInput from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/delete_concepts_input.sh";
import CurlBulkDeleteConceptsInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/bulk_delete_concepts_inputs.sh";
import CurlDeleteInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/delete_input_by_id.sh";
import CurlDeleteListInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/delete_list_inputs.sh"

import PHPListAllInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/list_all_inputs.php";
import PHPListInputsStreaming from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/list_inputs_streaming.php";
import PHPGetInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/get_input_by_id.php";
import PHPGetInputsStatus from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/get_inputs_status.php";
import PHPUpdateInputConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/update_input_concepts.php"
import PHPBulkUpdateInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/bulk_update_inputs_concepts.php";
import PHPDeleteConceptsInput from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/delete_concepts_input.php";
import PHPBulkDeleteConceptsInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/bulk_delete_concepts_inputs.php";
import PHPDeleteInputId from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/delete_input_by_id.php";
import PHPDeleteListInputs from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/delete_list_inputs.php";



## List Inputs

### List All Inputs

<!--##LINKS NOT WORKING
You can list all the inputs \(images\) you have previously added either for [search](https://github.com/Clarifai/docs/tree/5882f46bd17affcd85ed3e2ec98f4d6f355b58a9/advanced-searches.md) or [train](https://github.com/Clarifai/docs/tree/5882f46bd17affcd85ed3e2ec98f4d6f355b58a9/train.md).
-->

You can retrieve all inputs available in your app. If you added inputs with concepts, they will be returned in the response as well.

Note that this request supports [pagination](https://docs.clarifai.com/additional-resources/api-overview/pagination), allowing you to navigate through large sets of inputs efficiently.


<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeListInput}</CodeBlock>
</TabItem>


<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAllInputs}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.ListInputs(
    new ListInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
                Page = 1,
                PerPage = 10
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputListInput}</CodeBlock>
</details> 

### List Inputs \(Streaming\)

This is another method for listing inputs, which was built to scalably list an app's inputs in an iterative / streaming fashion. `StreamInputs` will return `per_page` number of inputs from a certain input onward, controlled by the optional `last_id` parameter \(defaults to the first input\).

By default, the stream will return inputs from oldest to newest. Set the `descending` field to true to reverse that order.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListInputsStreaming}</CodeBlock>
</TabItem>

</Tabs>

## Get Inputs

### Get Input by ID

If you'd like to get the details of a specific input by its `id`, you can do that as well.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetInputId}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetInputId}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetInputId}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetInputId}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetInputId}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetInputId}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.ListInputs(
    new ListInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				InputId = "{YOUR_INPUT_ID}"
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Get Inputs' Status

If you add inputs in bulk, they will be procesed in the background. You can get the status of all your inputs \(processed, to\_process, and errors\) like this:

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetInputsStatus}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.GetInputCount(
    new GetInputCountRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);

Console.WriteLine(response.Counts);
```
</TabItem>
-->

</Tabs>

## Download Inputs

Below is an example of how to download inputs from your app. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{DownloadInputs}</CodeBlock>
</TabItem>
</Tabs>




## Patch Inputs

You can apply patch operations to an input, allowing for the merging or removal of items. By default, these actions overwrite existing data, but they behave differently when handling lists of objects.

- The `merge` action replaces a `key:value` pair with a `key:new_value`, or appends new values to an existing list. When dealing with dictionaries, it merges entries that share the same `id` field.

- The `remove` action replaces a `key:value` pair with a `key:new_value`, or removes any items from a list that match the IDs of the provided values.

- The `overwrite` action fully replaces an existing object with a new one.

### Patch Metadata 

Here is an example of how to patch the metadata of an input.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodePatchInputs3}</CodeBlock>
</TabItem>
</Tabs>

### Patch Bounding Box Annotation

Here is an example of how to patch a bounding box annotation on an input.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodePatchInputs1}</CodeBlock>
</TabItem>
</Tabs>
                                       
### Patch Polygon Annotation

Here is an example of how to patch a polygon annotation on an input.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodePatchInputs2}</CodeBlock>
</TabItem>
</Tabs>
  
### Update Input With Concepts

To update an input with a new concept, or to change a concept value from true/false, you can do the following:

<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodePatchInputs4}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateInputConcepts}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PatchInputs(
    new PatchInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "merge",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree",
																		Value = 1
                                }
                            },
																new Concept
                                {
                                    Id = "water",
																		Value = O
                                }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Bulk Update Inputs With Concepts

You can update existing inputs using their `ids`. This is useful if you'd like to add concepts to inputs after they have already been added.

Below is an example of how to update multiple inputs with concepts at once. 

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PatchInputs(
    new PatchInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "merge",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_1}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree",
																		Value = 1
                                }
                            },
																new Concept
                                {
                                    Id = "water",
																		Value = O
                                }
                        }
                    }
                }
            },
						{
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_2}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "animal",
																		Value = 1
                                }
                            },
																new Concept
                                {
                                    Id = "fruit",
																		Value = O
                                }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

## Bulk Delete Input Annotations  

Below is an example of how to delete all the annotations associated with a given input by setting the input ID(s). 

The `annotation_ids` parameter is optional. However, if provided, the number and order of `annotation_ids` must match the corresponding `input_ids`.  

<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{BulkDeleteAnnotations}</CodeBlock>
</TabItem>

</Tabs>



## Delete Inputs

:::caution

Be certain that you want to delete a particular input as the operation cannot be undone.

:::

### Delete Concepts From an Input

To remove concepts that were already added to an input, you can do this:

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteConceptsInput}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PatchInputs(
    new PatchInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "remove",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Bulk Delete Concepts From a List of Inputs

Below is an example of how to bulk delete multiple concepts from a list of inputs. 

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.DeleteInput(
    new DeleteInputRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        }
				Action = "remove",
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_1}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "tree"
                                }
                            },
														{
                                new Concept
                                {
                                    Id = "water"
                                }
                            }
                        }
                    }
                }
            },
						{
                new Input()
                {
										InputId = "{YOUR_INPUT_ID_2}",
                    Data = new Data()
                    {
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "animal"
                                }
                            },
														{
                                new Concept
                                {
                                    Id = "fruit"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Delete Input by ID

Below is an example of how to delete a single input by its `id`. 

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteInputId}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.DeleteInput(
    new DeleteInputRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				inputId = "{YOUR_INPUT_ID}"
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>

### Delete a List of Inputs

You can also delete multiple inputs in one API call. This will happen asynchronously.

:::info

We currently support a batch size of 128 inputs per request. So, you can provide a list of 128 input IDs and delete them in one API call. 

:::

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteListInputs}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.DeleteInput(
    new DeleteInputRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Ids = {
            new List<string>()
            {
                "{YOUR_INPUT_ID_1}", 
								"{YOUR_INPUT_ID_2}"
            }
        }
    },
    metadata
);

if (response.Status.Code != StatusCode.Success)
    throw new Exception("Request failed, response: " + response);
```
</TabItem>
-->

</Tabs>


### Delete All Inputs

Below is an example of how to delete all inputs from your app.



<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDeleteInput}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputDeleteInput}</CodeBlock>
</details> 