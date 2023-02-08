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

You can make an API call by providing the `MODEL_ID` parameter and specifying your data parameter as `video` instead of `image`.

#### Configuring FPS

You can configure the FPS rate in the predict request by setting the `sample_ms` variable, which is the number of milliseconds between each frame for inference.

The number must range betweeen 100 and 60000. 

:::tip

FPS = 1000/`sample_ms`

:::

If `sample_ms` is 1000, then the FPS rate is 1, which is the default.

#### Video limits

The Predict API has limits to the length and size it can support. A video, uploaded through URL, can be anywhere up to 100MB in size or 10mins in length. When a video is sent through by bytes, the Predict API can support 10MB in size.

If your video exceeds the limits, please follow our [tutorial](https://www.clarifai.com/blog/splitting-video-into-smaller-pieces) on how to break up a large video into smaller components, and send those into the Video API. Otherwise, the processing will time out and you will receive an error response.

## Predict via URL

Below is an example of how you would send video URLs and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model.

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

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

import CodePHPViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/php/video_via_url.php";
import CodePHPViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/php/video_via_bytes.php";

import CurlViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/video_via_url.sh";
import CurlViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/video_via_bytes.sh";

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
    <CodeBlock className="language-php">{CodePHPViaURL}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlViaURL}</CodeBlock>
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

## Predict via Bytes

Below is an example of how you would send the bytes of a video and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model.

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
    <CodeBlock className="language-php">{CodePHPViaBytes}</CodeBlock>
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

