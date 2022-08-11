---
description: Make predictions on video inputs
sidebar_position: 2
---

# Video

**Make predictions on video inputs**
<hr />

With a video input, the Predict API response will return a list of predicted concepts for every frame of a video. By default, video is processed at 1 frame per second \(FPS\), which is configurable in the predict request. This means you will receive a list of concepts for every second (1000 milliseconds) of your video.

You can run Predict on your video using a select number of [Clarifai Models](https://www.clarifai.com/models). The models that are currently supported are: 
+ Apparel
+ Food
+ General
+ NSFW
+ Travel
+ Wedding

You can make an API call by providing the `{MODEL_ID}` parameter and specifying your data parameter as `video` instead of `image`.

#### Configuring FPS

You can configure the FPS rate in the predict request by setting the `sample_ms` variable, which is the number of milliseconds between each frame for inference.

The number must range betweeen 100 and 60000. 

:::tip

FPS = 1000/`sample_ms`

:::

If `sample_ms` is 1000, then the FPS rate is 1, which is the default.

#### Video limits

The Predict API has limits to the length and size it can support. A video, uploaded through URL, can be anywhere up to 80MB in size or 10mins in length. When a video is sent through by bytes, the Predict API can support 10MB in size.

If your video exceeds the limits, please follow our [tutorial](https://www.clarifai.com/blog/splitting-video-into-smaller-pieces) on how to break up a large video into smaller components, and send those into the Video API. Otherwise, the processing will time out and you will receive an error response.

## Via URL

Below is an example of how you would send video URLs and receive predictions from the Clarifai's `general-image-recognition` model.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/video_via_url.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/video_via_bytes.py";

import CodeJavaScriptViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/video_via_url.html";
import CodeJavaScriptViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/video_via_bytes.html";

import CodeNodeJSViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/video_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/video_via_bytes.js";

import CodeJavaViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/video_via_url.java";
import CodeJavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/video_via_bytes.java";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/video_via_url.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/video_via_url.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/video_via_bytes.txt";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/video_via_bytes.js";

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

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform a video is defined by a special Video object.
// There are several ways in which an Video object can be populated including
// by url and video bytes (base64).
//
$video = new Video([
    'url' => 'https://samples.clarifai.com/beer.mp4'
]);

//
// After a Video object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional video independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'video' => $video
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
// we loop through all of the frames of the video and print out the predicted 
// concepts for each along with their numerical prediction value (confidence).
//
foreach ($output->getData()->getFrames() as $frame) {
    echo "Predicted concepts on frame " . $frame->getFrameInfo()->getTime() . ":";
    foreach ($frame->getData()->getConcepts() as $concept) {
        echo "   " . $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
    }
}
?>
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
          "video": {
            "url": "https://samples.clarifai.com/beer.mp4"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs

# Model version ID is optional. It defaults to the latest model version.
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

## Via Bytes

Below is an example of how you would send the bytes of a video and receive predictions from the Clarifai's `general-image-recognition` model.

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

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

//
// For this example, the bytes of a video are needed and can be read in
// using PHP provided functions.
//
video = "https://samples.clarifai.com/beer.mp4";
$videoData = file_get_contents($image); // Get the video data from the URL

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform a video is defined by a special Video object.
// There are several ways in which an Video object can be populated including
// by url and video bytes (base64).
//
$video = new Video([
    'base64' => $videoData
]);

//
// After a Video object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'video' => $video
]);

//
// The Data object is then wrapped in a Video object in order to meet the
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
// we loop through all of the frames of the video and print out the predicted 
// concepts for each along with their numerical prediction value (confidence).
//
foreach ($output->getData()->getFrames() as $frame) {
    echo "Predicted concepts on frame " . $frame->getFrameInfo()->getTime() . ":";
    foreach ($frame->getData()->getConcepts() as $concept) {
        echo "   " . $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
    }
}
?>
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
          "video": {
            "base64": "'"$(base64 video_file_path.mp4)"'"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs

# The model version ID is optional. It defaults to the latest model version.
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

