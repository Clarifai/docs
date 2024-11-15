---
description: Make predictions with your workflows.
sidebar_position: 1
---

# Workflow Predict

**Make predictions with your workflows**
<hr />

The Workflow Predict API allows you make predictions using one or more models, whether they are Clarifai's pre-built models or custom creations—all in a single API call.

The maximum number of inputs that can be processed at once with any given workflow is 32.

After you're set up, you can initiate predictions under a specific workflow by utilizing the `POST /v2/workflows/WORKFLOW_ID_HERE/results` endpoint, where `WORKFLOW_ID_HERE` corresponds to the unique ID you assigned to your workflow.

When crafting the request body, its layout remains consistent with the usual approach for making a prediction call. The response body will include a `results` object, with each sub-object representing a response from the models, maintaining the same order as specified in the workflow you configured.

You can also use the [Workflow Builder](https://docs.clarifai.com/portal-guide/workflows/working_with_workflows) in the Clarifai Portal to build your workflows and see the results of their predictions on a given input.

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_images.py";
import JSWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_images.html";
import NodeWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_images.js";
import JavaWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_images.java";
import CurlWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_images.sh";
import PHPWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_images.php";

import ExampleCodeWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_images.txt";
import ExampleJSONWorkflowPredictImage from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_images.js";

import PythonWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_text.py";
import JSWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_text.html";
import NodeWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_text.js";
import JavaWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_text.java";
import CurlWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_text.sh";
import PHPWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_text.php";

import ExampleCodeWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_text.txt";
import ExampleJSONWorkflowPredictText from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_text.js";

import PythonWorkflowPredictVideo from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_video.py";
import JSWorkflowPredictVideo from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_video.html";
import NodeWorkflowPredictVideo from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_video.js";
import JavaWorkflowPredictVideo from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_video.java";
import CurlWorkflowPredictVideo from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_video.sh";
import PHPWorkflowPredictVideo from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_video.php";

import PythonWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/py/workflow_predict_audio.py";
import JSWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/js/workflow_predict_audio.html";
import NodeWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/node/workflow_predict_audio.js";
import JavaWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/java/workflow_predict_audio.java";
import CurlWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/curl/workflow_predict_audio.sh";
import PHPWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/php/workflow_predict_audio.php";

import ExampleCodeWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_audio.txt";
import ExampleJSONWorkflowPredictAudio from "!!raw-loader!../../../../code_snippets/api-guide/workflows/common_workflows/output_examples/example_workflow_predict_audio.js";

:::tip

If you want to make a predict call with an external workflow that is outside the scope of your app, you need to use a PAT while specifying the `app_id` and the `user_id` associated with the workflow you want to use. 

:::

## Images

Let's illustrate how you would get predictions from image inputs using Clarifai's [Face-Sentiment](https://clarifai.com/clarifai/main/workflows/Face-Sentiment) workflow. The workflow combines these three models: 

- A visual detector model that detects bounding box regions in an image;
- An image cropper model that extracts the specific region of interest from an image;
- A visual classifier model that classifies an image into a set of concepts.

Note that the `base64` output representation of the image in bytes is already in binary format. It is not encoded, so you do not need to decode it for further downstream tasks.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPWorkflowPredictImage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictImage}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{ExampleCodeWorkflowPredictImage}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleJSONWorkflowPredictImage}</CodeBlock>
</details>

## Videos

Let's illustrate how you would get predictions from video inputs using a workflow.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPWorkflowPredictVideo}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictVideo}</CodeBlock>
</TabItem>

</Tabs>

## Text

Let's illustrate how you would produce embeddings and clusters from text inputs using Clarifai's [Language-Understanding](https://clarifai.com/clarifai/main/workflows/Language-Understanding) text workflow.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPWorkflowPredictText}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictText}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{ExampleCodeWorkflowPredictText}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleJSONWorkflowPredictText}</CodeBlock>
</details>

## Audio

Let's illustrate how you would get the sentiment of an audio input using Clarifai's [asr-sentiment](https://clarifai.com/clarifai/main/workflows/asr-sentiment) workflow.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPWorkflowPredictAudio}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlWorkflowPredictAudio}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{ExampleCodeWorkflowPredictAudio}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{ExampleJSONWorkflowPredictAudio}</CodeBlock>
</details>