---
description: Get started quickly with Clarifai in a few simple steps
sidebar_position: 1
---

# Quickstart

**Get started quickly with Clarifai in a few simple steps**
<hr />

Clarifai provides an intuitive interface and robust APIs designed to get you up and running quickly. In just a few simple steps or a few lines of code, you can bring your AI projects to life within minutes. 

:::info Set up Your Account or Log in

[Create](https://clarifai.com/signup) a new Clarifai account or [log into](https://clarifai.com/login) your existing one to start accessing the platform's powerful AI capabilities.

:::

## Get Started With Web UI

### Step 1: Access the Playground

After logging into the Clarifai platform, select the **Playground** option in the top navigation bar. 

![](/img/new-docs/playground-2.png)

This will take you to the Playground interface, which is a  pre-authenticated testing environment that allows you to quickly interact with Clarifai's AI models without additional setup or authentication.

### Step 2: Select a Model

In the upper-left section of the Playground, choose the model you'd like to use for inference.

![](/img/new-docs/playground-1.png)

For this example, let's select the [Llama-3_2-3B-Instruct](https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct) model.

### Step 3: Provide a Prompt

In the chat interface located at the bottom of the Playground, enter the prompt you want to use for generating text with the selected model.

Then, click the arrow icon to submit your request.

![](/img/new-docs/playground-3.png)

The results will be displayed directly in the interface, allowing you to see the output in real time.

That's it!

:::note

For this example, we're using the default settings for deployment (`Clarifai Shared`), inference parameters, and others. You can customize these settings later as needed for more advanced use cases.

:::

## Get Started With APIs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import InstallJava from "!!raw-loader!../../code_snippets/new-docs/assorted/install-java.java";
import PythonSDKRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/python-sdk-request.py";
import NodeSDKRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/node-sdk-request.js";
import CLIRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/cli-request.txt";
import CurlRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/curl-request.sh";
import JSRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/js-request.html";
import PyGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/py-grpc-request.py";
import NodeGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/node-grpc-request.js";
import JavaGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/java-grpc-request.java";
import PHPGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/php-grpc-request.php";

import OutputExample from "!!raw-loader!../../code_snippets/new-docs/assorted/output-request.txt";


### Step 1: Get a PAT Key

You need a PAT key to authenticate your connection to the Clarifai platform. You can generate the PAT key in your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

### Step 2: Install a Client

You can access the Clarifai API through multiple methods, including SDKs, the Command Line Interface (CLI), direct HTTP requests, and gRPC clients — supporting the most popular programming languages for seamless integration.

<Tabs>
<TabItem value="python1" label="Python SDK">
    <CodeBlock className="language-python">pip install --upgrade clarifai</CodeBlock>
</TabItem>

<TabItem value="nodejs1" label="Node.js SDK">
    <CodeBlock className="language-python">npm install clarifai-nodejs</CodeBlock>
</TabItem>

<TabItem value="cli" label="CLI">
 <CodeBlock className="language-javascript">pip install --upgrade clarifai</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-php">python -m pip install clarifai-grpc</CodeBlock>
</TabItem>

<TabItem value="nodejs2" label="Node.js (gRPC)">
    <CodeBlock className="language-bash">npm install clarifai-nodejs-grpc</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-bash">{InstallJava}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-bash">composer require clarifai/clarifai-php-grpc</CodeBlock>
</TabItem>

</Tabs>


### Step 3: Send the First API Request

For this example, let's use the Llama-3_2-3B-Instruct model to generate text based on a given prompt.

<Tabs>
<TabItem value="python11" label="Python SDK">
    <CodeBlock className="language-python">{PythonSDKRequest}</CodeBlock>
</TabItem>

<TabItem value="nodejs11" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeSDKRequest}</CodeBlock>
</TabItem>

<TabItem value="cli1" label="CLI">
 <CodeBlock className="language-bash">{CLIRequest}</CodeBlock>
</TabItem>

<TabItem value="js11" label="cURL">
 <CodeBlock className="language-javascipt">{CurlRequest}</CodeBlock>
</TabItem>

<TabItem value="javascript11" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{JSRequest}</CodeBlock>
</TabItem>

<TabItem value="python21" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyGRPCRequest}</CodeBlock>
</TabItem>

<TabItem value="nodejs21" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGRPCRequest}</CodeBlock>
</TabItem>

<TabItem value="java1" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGRPCRequest}</CodeBlock>
</TabItem>

<TabItem value="php1" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGRPCRequest}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample}</CodeBlock>
</details>

That's it!