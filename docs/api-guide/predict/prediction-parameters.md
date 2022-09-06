---
description: Learn about model prediction parameters.
sidebar_position: 4
---

# Prediction Parameters

**Learn about model prediction parameters**
<hr />

You can set additional parameters to gain flexibility in the predict operation.

## Select Concepts

By putting this additional parameter on your predict calls, you can receive predict value\(s\) for **only** the concepts that you want to. You can specify particular concepts by either their id and/or their name. 

The concept names and ids are case sensitive; and so, these must be exact matches.

:::tip

To retrieve an entire list of concepts from a given model, and get their ids and names, use the [`GET /v2/models/YOUR_MODEL_ID_HERE/output_info`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete#get-model-output-info-by-id) endpoint.

:::

:::caution

If you submit a request with not an exact match of the concept id or name, you will receive an invalid model argument error. However, if one or more matches while one or more do not, the API will respond with a Mixed Success.

:::


Below is an example of how you would select concepts and receive predictions from the Clarifai's `general-image-recognition` model. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_by_model_version_id.py";
import PythonMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_max_concepts.py";
import PythonMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_min_predict_value.py";
import PythonSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_select_concepts.py";

import JavaScriptByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_by_model_version_id.html";
import JavaScriptMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_max_concepts.html";
import JavaScriptMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_min_predict_value.html";
import JavaScriptSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_select_concepts.html";

import NodeJSByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_by_model_version_id.js";
import NodeJSMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_max_concepts.js";
import NodeJSMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_min_predict_value.js";
import NodeJSSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_select_concepts.js";

import JavaByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_by_model_version_id.java";
import JavaMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_max_concepts.java";
import JavaMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_min_predict_value.java";
import JavaSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_select_concepts.java";

import CurlByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_by_model_version_id.sh";
import CurlMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_max_concepts.sh";
import CurlMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_min_predict_value.sh";
import CurlSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_select_concepts.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_select_concepts.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_select_concepts.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_max_concepts.txt";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_max_concepts.js";
import CodeOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_min_predict_value.txt";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_min_predict_value.js";
import CodeOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_model_version_id.txt";
import JSONOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_model_version_id.js";


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform an image is defined by a special Image object.
// There are several ways in which an Image object can be populated including
// by url and image bytes (base64).
//
$image = new Image([
    'url' => 'https://samples.clarifai.com/dog2.jpeg'
]);

//
// After an Image object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'image' => $image
]);

//
// The Data object is then wrapped in an Input object in order to meet the
// API specification.  Additional fields are available to populate in the Input
// object, but for the purposes of this example we can send in just the
// Data object.
//
$input = new Input([
    'data' => $data
]);

///////////////////////////////////////////////////////////////////////////////
// Specifying Output Configuration 
///////////////////////////////////////////////////////////////////////////////
//
// Output configuration can be specified by the OutputConfig object.  Here
// we specify a concept by both the name and the id for what we want to narrow
// down to in the results.
//
$outputConfig = new OutputConfig([
    'select_concepts' => [
        new Concept(['name' => 'train']),
        new Concept(['id' => 'ai_6kTjGfF6'])
    ]
])

//
// The OutputInfo object is a wrapper around the OutputConfig object
// 
$outputInfo = new OutputInfo([
    'output_config' => $outputConfig
])

//
// The model object is a wrapper around the OutputInfo object.  This is the
// final part needed to define an output configuration.
//
$model = new Model([
    'output_info' => $outputInfo
]);

///////////////////////////////////////////////////////////////////////////////
// Creating the request object 
///////////////////////////////////////////////////////////////////////////////
//
// Finally, the request object itself is created.  This object carries the request
// along with the request status and other metadata related to the request itself.
// In this example we populate:
//    - the `user_app_id` field with the UserAppIDSet constructed above
//    - the `model_id` field with the ID of the model we are referencing
//    - the `inputs` field with an array of input objects constructed above 
//    - the `model` field with the output configuration specified above
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input],
    'model' => $model
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC Call
///////////////////////////////////////////////////////////////////////////////
//
// Once the request object is constructed, we can call the actual request to the
// Clarifai platform.  This uses the opened gRPC client channel to communicate the
// request and then wait for the response.
//
[$response, $status] = $client->PostModelOutputs(
    $request,
    $metadata
)->wait();

///////////////////////////////////////////////////////////////////////////////
// Handling the Response
///////////////////////////////////////////////////////////////////////////////
//
// The response is returned and the first thing we do is check the status of it.
// A successful response will have a status code of 0, otherwise there is some 
// reported error.
//
if ($status->code !== 0) throw new Exception("Error: {$status->details}");

//
// In addition to the RPC response status, there is a Clarifai API status that
// reports if the operationo was a success or failure (not just that the commuunication)
// was successful.
//
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " .
        $response->getStatus()->getDetails());
}

//
// The output of a successful call can be used in many ways.  In this example,
// we loop through all of the predicted concepts and print them out along with
// their numerical prediction value (confidence).
//
echo "Predicted concepts:\n";
foreach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {
    echo $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
}
?>
```
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample1}</CodeBlock>
</details>


## Maximum Concepts

Setting the `max_concepts` parameter will customize how many concepts and their corresponding probability scores the predict endpoint will return. If not specified, the predict endpoint will return the top 20 concepts. 

You can currently set the max concepts parameter to any number in the range of \[1-200\]. 

If your use case requires more concepts, please contact [Support](mailto:support@clarifai.com).

Below is an example of how you would set maximum concepts and receive predictions from the `general-image-recognition` model. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform an image is defined by a special Image object.
// There are several ways in which an Image object can be populated including
// by url and image bytes (base64).
//
$image = new Image([
    'url' => 'https://samples.clarifai.com/dog2.jpeg'
]);

//
// After an Image object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'image' => $image
]);

//
// The Data object is then wrapped in an Input object in order to meet the
// API specification.  Additional fields are available to populate in the Input
// object, but for the purposes of this example we can send in just the
// Data object.
//
$input = new Input([
    'data' => $data
]);

///////////////////////////////////////////////////////////////////////////////
// Specifying Output Configuration 
///////////////////////////////////////////////////////////////////////////////
//
// Output configuration can be specified by the OutputConfig object.  Here
// we specify the max number of concepts to return at 3.
//
$outputConfig = new OutputConfig([
    'max_concepts' => 3
])

//
// The OutputInfo object is a wrapper around the OutputConfig object
// 
$outputInfo = new OutputInfo([
    'output_config' => $outputConfig
])

//
// The model object is a wrapper around the OutputInfo object.  This is the
// final part needed to define an output configuration.
//
$model = new Model([
    'output_info' => $outputInfo
]);

///////////////////////////////////////////////////////////////////////////////
// Creating the request object 
///////////////////////////////////////////////////////////////////////////////
//
// Finally, the request object itself is created.  This object carries the request
// along with the request status and other metadata related to the request itself.
// In this example we populate:
//    - the `user_app_id` field with the UserAppIDSet constructed above
//    - the `model_id` field with the ID of the model we are referencing
//    - the `inputs` field with an array of input objects constructed above 
//    - the `model` field with the output configuration specified above
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input],
    'model' => $model
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC Call
///////////////////////////////////////////////////////////////////////////////
//
// Once the request object is constructed, we can call the actual request to the
// Clarifai platform.  This uses the opened gRPC client channel to communicate the
// request and then wait for the response.
//
[$response, $status] = $client->PostModelOutputs(
    $request,
    $metadata
)->wait();

///////////////////////////////////////////////////////////////////////////////
// Handling the Response
///////////////////////////////////////////////////////////////////////////////
//
// The response is returned and the first thing we do is check the status of it.
// A successful response will have a status code of 0, otherwise there is some 
// reported error.
//
if ($status->code !== 0) throw new Exception("Error: {$status->details}");

//
// In addition to the RPC response status, there is a Clarifai API status that
// reports if the operationo was a success or failure (not just that the commuunication)
// was successful.
//
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " .
        $response->getStatus()->getDetails());
}

//
// The output of a successful call can be used in many ways.  In this example,
// we loop through all of the predicted concepts and print them out along with
// their numerical prediction value (confidence).
//
echo "Predicted concepts:\n";
foreach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {
    echo $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
}
?>
```
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample2}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample2}</CodeBlock>
</details>

## Minimum Prediction Value

This parameter lets you set a minimum probability threshold for the outputs you want to view for the Predict operation. 

For example if you want to see all concepts with a probability score of .95 or higher, this parameter will allow you to accomplish that. 

Also note that if you don't specify the number of `max_concepts`, you will only see the top 20. If your result can contain more values you will have to increase the number of maximum concepts as well.

Below is an example of how you would set a minimum probability threshold and receive predictions from the `general-image-recognition` model. 


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform an image is defined by a special Image object.
// There are several ways in which an Image object can be populated including
// by url and image bytes (base64).
//
$image = new Image([
    'url' => 'https://samples.clarifai.com/dog2.jpeg'
]);

//
// After an Image object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'image' => $image
]);

//
// The Data object is then wrapped in an Input object in order to meet the
// API specification.  Additional fields are available to populate in the Input
// object, but for the purposes of this example we can send in just the
// Data object.
//
$input = new Input([
    'data' => $data
]);

///////////////////////////////////////////////////////////////////////////////
// Specifying Output Configuration 
///////////////////////////////////////////////////////////////////////////////
//
// Output configuration can be specified by the OutputConfig object.  Here
// we specify the minimum threshold value to 0.95.
//
$outputConfig = new OutputConfig([
    'min_value' => 0.95
])

//
// The OutputInfo object is a wrapper around the OutputConfig object
// 
$outputInfo = new OutputInfo([
    'output_config' => $outputConfig
])

//
// The model object is a wrapper around the OutputInfo object.  This is the
// final part needed to define an output configuration.
//
$model = new Model([
    'output_info' => $outputInfo
]);

///////////////////////////////////////////////////////////////////////////////
// Creating the request object 
///////////////////////////////////////////////////////////////////////////////
//
// Finally, the request object itself is created.  This object carries the request
// along with the request status and other metadata related to the request itself.
// In this example we populate:
//    - the `user_app_id` field with the UserAppIDSet constructed above
//    - the `model_id` field with the ID of the model we are referencing
//    - the `inputs` field with an array of input objects constructed above 
//    - the `model` field with the output configuration specified above
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input],
    'model' => $model
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC Call
///////////////////////////////////////////////////////////////////////////////
//
// Once the request object is constructed, we can call the actual request to the
// Clarifai platform.  This uses the opened gRPC client channel to communicate the
// request and then wait for the response.
//
[$response, $status] = $client->PostModelOutputs(
    $request,
    $metadata
)->wait();

///////////////////////////////////////////////////////////////////////////////
// Handling the Response
///////////////////////////////////////////////////////////////////////////////
//
// The response is returned and the first thing we do is check the status of it.
// A successful response will have a status code of 0, otherwise there is some 
// reported error.
//
if ($status->code !== 0) throw new Exception("Error: {$status->details}");

//
// In addition to the RPC response status, there is a Clarifai API status that
// reports if the operationo was a success or failure (not just that the commuunication)
// was successful.
//
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " .
        $response->getStatus()->getDetails());
}

//
// The output of a successful call can be used in many ways.  In this example,
// we loop through all of the predicted concepts and print them out along with
// their numerical prediction value (confidence).
//
echo "Predicted concepts:\n";
foreach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {
    echo $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
}
?>
```
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample3}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample3}</CodeBlock>
</details>

## By Model Version ID

Every time you train a custom model, it creates a new model version. By specifying `version_id` in your predict call, you can continue to predict on a previous version, for consistent prediction results. Clarifai also updates its pre-built models on a regular basis.

If you are looking for consistent results from your predict calls, use `version_id`. If the model `version_id` is not specified, predict will default to the most current model.

Below is an example of how you would set a model version ID and receive predictions from the `general-image-recognition` model. 


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlByModelVersion}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample4}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample4}</CodeBlock>
</details>
