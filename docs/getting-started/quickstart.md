---
description: Get started quickly with Clarifai in a few simple steps
sidebar_position: 1
---

# Quick Start

**Get started quickly with Clarifai in a few simple steps**
<hr />

<div style={{ "position":"relative","width": "100%","overflow": "hidden","padding-top": "56.25%"}}>
<iframe width="900" height="500" style={{"position": "absolute","top": "0","left": "0","bottom": "0","right": "0","width": "100%","height": "100%",}} src="https://www.youtube.com/embed/8oWjmB3Bmqk" title="How to Use a Model on the Clarifai Platform (Playground or API)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<br/><br/>

Clarifai provides an intuitive interface and a robust API designed to get you up and running quickly. In just a few simple steps or a few lines of code, you can bring your AI projects to life within minutes. 

:::warning Log in or Set up an Account

[Log in to](https://clarifai.com/login) your existing Clarifai account or [create](https://clarifai.com/signup) a new one to explore the platform's powerful AI capabilities. New accounts receive free operations to begin exploration.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import InstallJava from "!!raw-loader!../../code_snippets/new-docs/assorted/install-java.java";
import PythonSDKRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/python-sdk-request.py";
import NodeSDKRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/node-sdk-request.js";
import CLIRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/cli-request.sh";
import CurlRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/curl-request.sh";
import JSRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/js-request.html";
import PyGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/py-grpc-request.py";
import NodeGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/node-grpc-request.js";
import JavaGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/java-grpc-request.java";
import PHPGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/php-grpc-request.php";

import OutputExample from "!!raw-loader!../../code_snippets/new-docs/assorted/output-request.txt";


## Try Out Our Community Models

We offer a diverse collection of [Community](https://clarifai.com/explore) models that you can browse, test, and integrate into your projects.

### Step 1: Find a Model

You can easily find a model to use by heading to the homepage and exploring the **Trending AI models** section, which showcases popular and ready-to-use options.

After finding the model, click the **TEST IN PLAYGROUND** button in the bottom left corner of its information card. 

For this example, we'll use the [Llama-3.2-3B-Instruct](https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct) model.

> _Alternatively, you can select the **Playground** option in the top navigation bar._

![](/img/new-docs/playground-2.png)

### Step 2: Run Your Inference in Playground

You'll be taken to the AI Playground, which is a testing battleground that allows you to quickly interact with powerful AI models without additional setup.

In the chat interface at the bottom of the Playground, enter your desired prompt to generate text with the selected model. Note that if the model supports image or video inputs as prompts, you can also upload them directly into the interface.

> _Alternatively, in the upper-left section of the Playground, you can choose the model you'd like to use for inference._

Then, click the arrow icon to submit your request.

![](/img/new-docs/playground-3.png)

The results will be streamed directly in the interface, allowing you to see the output in real time. Note that since we support streaming capabilities, you can interact with language models as they generate responses token by token — just like in a live chat experience.


:::info

- For this example, we're using the default settings for deployment (`Clarifai Shared`), inference parameters, and others. You can [customize](https://docs.clarifai.com/compute/models/) these settings as needed for more advanced use cases.

- You can toggle the button in the upper-left section of the Playground to display ready-to-use API code snippets in various programming languages. Simply copy and use them in your project.

![](/img/new-docs/playground-4.png)

:::

## Call Your First Model With Our API

You can get started quickly by using the Clarifai [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk) to make your first API call.

<!--
You can access the Clarifai API effortlessly using your preferred method:

- SDKs – Quick integration with official client libraries.

- CLI (Command Line Interface) – Manage tasks directly from the command line.

- HTTP Requests – Use any programming language with REST API calls.

- gRPC Clients – High-performance support for popular languages.
-->

### Step 1: Get a PAT Key

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

### Step 2: Install Python SDK

Install the latest version of the Clarifai Python SDK package.

<Tabs>
<TabItem value="python1" label="Python SDK">
    <CodeBlock className="language-python">pip install --upgrade clarifai</CodeBlock>
</TabItem>

<!--
<TabItem value="cli" label="CLI">
 <CodeBlock className="language-javascript">pip install --upgrade clarifai</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-php">python -m pip install clarifai-grpc</CodeBlock>
</TabItem>
-->

</Tabs>

:::note tip

On Windows, the Clarifai Python SDK expects a `HOME` environment variable, which isn’t set by default. To ensure compatibility with file paths used by the SDK, set `HOME` to the value of your `USERPROFILE`. You can set it in your Command Prompt this way: `set HOME=%USERPROFILE%`.

:::

### Step 3: Send an API Request

For this example, let's use the [Qwen3](https://clarifai.com/qwen/qwenLM/models/Qwen3-30B-A3B-GGUF) model to generate text based on a given prompt.

<Tabs>
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PythonSDKRequest}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeSDKRequest}</CodeBlock>
</TabItem>

<!--
<TabItem value="cli1" label="CLI">
 <CodeBlock className="language-bash">{CLIRequest}</CodeBlock>
</TabItem>

<TabItem value="js11" label="cURL">
 <CodeBlock className="language-javascript">{CurlRequest}</CodeBlock>
</TabItem>

<TabItem value="javascript11" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSRequest}</CodeBlock>
</TabItem>

<TabItem value="python21" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyGRPCRequest}</CodeBlock>
</TabItem>
-->

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample}</CodeBlock>
</details>

:::tip Learn more

[Click here](https://docs.clarifai.com/compute/models/inference/api/) to learn more about how to make inference requests using our API. You'll discover how to list all the available inference methods defined in a model's configuration, generate example code, leverage our Compute Orchestration capabilities for various types of inference requests, and more.

:::

Congratulations — you've just get started with the Clarifai platform!