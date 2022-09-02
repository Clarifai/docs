---
description: Make predictions on passages of text
sidebar_position: 3
---

# Text

**Make predictions on text inputs**
<hr />

To get predictions for an input, you need to supply the text and the model you'd like to get predictions from. You can supply the text via a publicly accessible URL, a local text file, or in the raw format. 

The file size of each text input should be less than 20MB.

You specify the model you'd like to use with the `MODEL_ID` parameter.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_url.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_bytes.py";
import CodePythonViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/python/text_via_raw.py";

import CodeJavaScriptViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_url.html";
import CodeJavaScriptViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_bytes.html";
import CodeJavaScriptViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/js/text_via_raw.html";

import CodeNodeJSViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_bytes.js";
import CodeNodeJSViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/node/text_via_raw.js";

import CodeJavaViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_url.java";
import CodeJavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_bytes.java";
import CodeJavaViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/java/text_via_raw.java";

import CurlViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_bytes.sh";
import CurlViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/text_via_raw.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_url.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_url.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_bytes.txt";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_bytes.js";
import CodeOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_raw_text.txt";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/text_via_raw_text.js";

## Via URL 

Below is an example of how you would make predictions on passages of text hosted on the web from the Clarifai's `product-review-sentiment-multi` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{CodeJavaViaURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURL}</CodeBlock>
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
// In the Clarifai platform a text is defined by a special Text object.
// There are several ways in which a Text object can be populated including
// by url and raw string.
//
$text = new Text([
    'url' => 'https://samples.clarifai.com/negative_sentence_12.txt'
]);

//
// After an Text object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional text independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'text' => $text
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
// Creating the request object 
///////////////////////////////////////////////////////////////////////////////
//
// Finally, the request object itself is created.  This object carries the request
// along with the request status and other metadata related to the request itself.
// In this example we populate:
//    - the `user_app_id` field with the UserAppIDSet constructed above
//    - the `model_id` field with the ID of the model we are referencing
//    - the `inputs` field with an array of input objects constructed above 
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input]
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC call
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

## Via Local Files

Below is an example of how you would provide text inputs via local text files and receive predictions from the Clarifai's `product-review-sentiment-multi` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{CodeJavaViaBytes}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaBytes}</CodeBlock>
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

## Via Raw Text

Below is an example of how you would provide raw text inputs and receive predictions from the Clarifai's `product-review-sentiment-multi` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaRaw}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaRaw}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
   <CodeBlock className="language-javascript">{CodeNodeJSViaRaw}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
   <CodeBlock className="language-java">{CodeJavaViaRaw}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaRaw}</CodeBlock>
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