---
description: Manage the data in your app.
sidebar_position: 2
---

# Adding and Removing Data

**Manage the data in your app**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAddInputsViaURL from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_via_url.py";
import PythonAddInputsViaBytes from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_via_bytes.py";
import PythonAddMultipleInputsIds from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/add_multiple_inputs_with_ids.py";
import PythonAddInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_with_concepts.py";
import PythonAddInputsMultipleConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_with_multiple_concepts.py";
import PythonAddInputsCustomMetadata from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/py/add_inputs_custom_metadata.py";
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

import JSAddInputsViaURL from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_via_url.html";
import JSAddInputsViaBytes from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_via_bytes.html";
import JSAddMultipleInputsIds from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/add_multiple_inputs_with_ids.html";
import JSAddInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_with_concepts.html";
import JSAddInputsMultipleConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_with_multiple_concepts.html";
import JSAddInputsCustomMetadata from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/js/add_inputs_custom_metadata.html";
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

import NodeAddInputsViaURL from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_via_url.js";
import NodeAddInputsViaBytes from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_via_bytes.js";
import NodeAddMultipleInputsIds from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/add_multiple_inputs_with_ids.js";
import NodeAddInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_with_concepts.js";
import NodeAddInputsMultipleConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_with_multiple_concepts.js";
import NodeAddInputsCustomMetadata from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/node/add_inputs_custom_metadata.js";
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

import JavaAddInputsViaURL from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_via_url.java";
import JavaAddInputsViaBytes from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_via_bytes.java";
import JavaAddMultipleInputsIds from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/add_multiple_inputs_with_ids.java";
import JavaAddInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_with_concepts.java";
import JavaAddInputsCustomMetadata from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/java/add_inputs_custom_metadata.java";
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

import CurlAddInputsViaURL from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_via_url.sh";
import CurlAddInputsViaBytes from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_via_bytes.sh";
import CurlAddMultipleInputsIds from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_multiple_inputs_with_ids.sh";
import CurlAddInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_with_concepts.sh";
import CurlAddInputsCustomMetadata from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/curl/add_inputs_custom_metadata.sh";
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

import PHPAddInputsViaURL from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_via_url.php";
import PHPAddInputsViaBytes from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_via_bytes.php";
import PHPAddMultipleInputsIds from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/add_multiple_inputs_with_ids.php";
import PHPAddInputsConcepts from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_with_concepts.php";
import PHPAddInputsCustomMetadata from "!!raw-loader!../../../code_snippets/api-guide/data/create_get_update_delete/php/add_inputs_custom_metadata.php";
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


The API is built around a simple idea. You send inputs \(such as images\) to the service and it returns predictions. In addition to receiving predictions on inputs, you can also index inputs and their predictions to later search against. You can also index inputs with concepts to later train your own model.

When you add an input to your app, the base workflow of your app runs, computing the outputs from all the models in that workflow and indexing those outputs. Those indexed outputs are what incur the indexing fee monthly, and enable search and training on top of the outputs of the base workflow models.

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions)

:::

## Add Inputs

You can add inputs one by one or in bulk. If you send them in bulk, you are limited to sending 128 inputs at a time.

:::important Note

**Adding inputs is an asynchronous operation.** That means it will process indexing of your inputs through your default workflow in the background, which can take some time. In order to check the status of each input you add, see the section on [Get Inputs](#get-inputs) and look for status 30000 \(INPUT\_IMAGE\_DOWNLOAD\_SUCCESS\) status code on each input to know when it has successfully been indexed.

:::

### Add Inputs via URL

Below is an example of how to add inputs via a publicly accessible URL. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAddInputsViaURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsViaURL}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/metro-north.jpg",
														AllowDuplicateUrl = true // optional
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

### Add Inputs via Bytes

Below is an example of how to add inputs via bytes.

:::important Note

The data must be base64 encoded. When you add a base64 image to our servers, a copy will be stored and hosted on our servers. If you already have an image hosting service, we recommend using it and adding images via the `url` parameter.

:::

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAddInputsViaBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsViaBytes}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Base64 = "{YOUR_IMAGE_BYTES_STRING}",
														AllowDuplicateUrl = true // optional
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

### Add Multiple Inputs With IDs

In cases where you have your own `id` and you only have one item per image, you are encouraged to send inputs with your own `id`. This will help you later match the input to your own database. 

If you do not send an `id`, one will be created for you. If you have more than one item per image, it is recommended that you put the product `id` in the metadata.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAddMultipleInputsIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddMultipleInputsIds}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
										Id = "train1"
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/metro-north.jpg",
														AllowDuplicateUrl = true // optional
                        }
                    }
                }
            },
						{
                new Input()
                {
										Id = "puppy1"
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/puppy.jpeg",
														AllowDuplicateUrl = true // optional
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

### Add Inputs With Concepts

If you would like to add an input with concepts, you can do so. [Concepts](https://docs.clarifai.com/api-guide/concepts/) play an important role in creating your own models. 

You can learn more about creating your own models [here](https://docs.clarifai.com/api-guide/model/). 

Concepts also help you search for inputs. You can learn more about search [here](https://docs.clarifai.com/api-guide/search/).

When you add a concept to an input, you need to indicate whether the concept is present in the image or not. 

You can add inputs with concepts via URLs or bytes.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAddInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsConcepts}</CodeBlock>
</TabItem>

<!--
<TabItem value="csharp" label="C#">

```csharp
var response = client.PostInputs(
    new PostInputsRequest()
    {
        UserAppId = new UserAppIDSet()
        { 
            UserId = "{YOUR_USER_ID}",
            AppId = "{YOUR_APP_ID}"
        },
				Inputs =
        {
            new List<Input>()
            {
                new Input()
                {
                    Data = new Data()
                    {
                        Image = new Image()
                        {
                            Url = "https://samples.clarifai.com/puppy.jpeg",
														AllowDuplicateUrl = true // optional
                        },
												Concepts = 
												{
                            new List<Concept>
                            {
                                new Concept
                                {
                                    Id = "charlie",
																		Value = 1
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

### Add Inputs With Multiple Concepts

You can also add an input with multiple concepts in a single API call. You can provide the concepts in a list and iterate through it. 

You can add the inputs via URLs or bytes.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsMultipleConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddInputsMultipleConcepts}</CodeBlock>
</TabItem>

</Tabs>

### Add Inputs With Custom Metadata

In addition to adding an input with concepts, you can also add an input with custom metadata. This metadata will then be searchable. Metadata can be any arbitrary JSON.


If you have more than one item per image, it is recommended to put the `id` in the metadata like:

```text
{
  "product_id": "xyz"
}
```

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAddInputsCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddInputsCustomMetadata}</CodeBlock>
</TabItem>

</Tabs>

## List Inputs

### List all Inputs

<!--##LINKS NOT WORKING
You can list all the inputs \(images\) you have previously added either for [search](https://github.com/Clarifai/docs/tree/5882f46bd17affcd85ed3e2ec98f4d6f355b58a9/advanced-searches.md) or [train](https://github.com/Clarifai/docs/tree/5882f46bd17affcd85ed3e2ec98f4d6f355b58a9/train.md).
-->

You can list all the inputs \(images\) you previously added either for search or train. If you added inputs with concepts, they will be returned in the response as well. 

This request is [paginated](https://docs.clarifai.com/api-guide/advanced-topics/pagination).

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListAllInputs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

### List Inputs \(Streaming\)

This is another method for listing inputs, which was built to scalably list an app's inputs in an iterative / streaming fashion. `StreamInputs` will return `per_page` number of inputs from a certain input onward, controlled by the optional `last_id` parameter \(defaults to the first input\).

By default, the stream will return inputs from oldest to newest. Set the `descending` field to true to reverse that order.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListInputsStreaming}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListInputsStreaming}</CodeBlock>
</TabItem>

</Tabs>

## Get Inputs

### Get Input by ID

If you'd like to get the details of a specific input by its `id`, you can do that as well.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetInputId}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetInputId}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetInputId}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetInputId}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetInputsStatus}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

## Update Inputs

### Update Input With Concepts

To update an input with a new concept, or to change a concept value from true/false, you can do the following:

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateInputConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaBulkUpdateInputsConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

## Delete Inputs

### Delete Concepts From an Input

To remove concepts that were already added to an input, you can do this:

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteConceptsInput}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaBulkDeleteConceptsInputs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteInputId}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteListInputs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
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
