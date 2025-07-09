---
description: Start quickly with Clarifai API in a few simple steps
sidebar_position: 1
---

# Quick Start With API

**Start quickly with Clarifai API in a few simple steps**
<hr />

Clarifai provides a robust API designed to get you up and running quickly. With just a few lines of code, you can bring your AI projects to life within minutes. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import InstallJava from "!!raw-loader!../../code_snippets/new-docs/assorted/install-java.java";
import PythonSDKRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/python-sdk-request.py";
import OpenAIRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/open-ai-request.py";
import NodeSDKRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/node-sdk-request.js";
import CLIRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/cli-request.sh";
import CurlRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/curl-request.sh";
import JSRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/js-request.html";
import PyGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/py-grpc-request.py";
import NodeGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/node-grpc-request.js";
import JavaGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/java-grpc-request.java";
import PHPGRPCRequest from "!!raw-loader!../../code_snippets/new-docs/assorted/php-grpc-request.php";

import OutputExample from "!!raw-loader!../../code_snippets/new-docs/assorted/output-request.txt";

## Step 1: Sign Up or Log In 

Start by [logging into](https://clarifai.com/login) your existing Clarifai account, or [sign up](https://clarifai.com/signup) for a new one to unlock access to the platform’s powerful AI capabilities. New users receive free operations to help kickstart their exploration.

## Step 2: Get a PAT Key

To authenticate your connection to Clarifai, you’ll need a Personal Access Token (PAT). You can obtain one from your personal settings page by navigating to the [Security section](https://clarifai.com/settings/security).

You can then set the PAT as an environment variable using `CLARIFAI_PAT`.

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

## Step 3: Install Your Preferred SDK

You can connect to the Clarifai API using the method that best fits your development environment:

- [Python SDK](https://docs.clarifai.com/resources/api-overview/python-sdk) – Seamlessly integrate with Clarifai using our Python client.

- [Node.js SDK](https://docs.clarifai.com/resources/api-overview/nodejs-sdk) – Use our SDK for integration in your JavaScript or TypeScript projects.

- [OpenAI client](https://docs.clarifai.com/compute/providers/open-ai) –  Leverage Clarifai’s OpenAI-compatible endpoint to run inferences using the OpenAI client library.

Here's how to install your preferred package:

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-bash">pip install --upgrade clarifai</CodeBlock>
</TabItem>

<TabItem value="node.js" label="Node.js SDK">
 <CodeBlock className="language-bash">  npm install clarifai-nodejs  </CodeBlock>
</TabItem>

<TabItem value="openai" label="Python (OpenAI)">
    <CodeBlock className="language-bash"> pip install openai </CodeBlock>
</TabItem>

</Tabs>

## Step 4: Get a Model

Clarifai’s [Community platform](https://clarifai.com/explore) offers a wide range of latest models to help you make your first API call.

You can easily find a model to use by heading to the Community homepage and exploring the **Trending Models** section, which showcases popular and ready-to-use options.

> **Note:** Once you’ve found a model you'd like to use, copy its full model URL — you’ll need this when making prediction requests via the API.

## Step 5: Send an API Request

For this example, let's use the [GPT-4.1](https://clarifai.com/openai/chat-completion/models/gpt-4_1) model to generate text based on a given prompt.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PythonSDKRequest}</CodeBlock>
</TabItem>
<TabItem value="node.js" label="Node.js SDK">
    <CodeBlock className="language-javascript">{NodeSDKRequest}</CodeBlock>
</TabItem>

<TabItem value="openai" label="Python (OpenAI)">
    <CodeBlock className="language-php"> {OpenAIRequest} </CodeBlock>
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

Congratulations — you've just gotten started with the Clarifai platform!

:::tip Learn more

[Click here](https://docs.clarifai.com/compute/models/inference/api/) to learn more about how to make inference requests using our API. You'll discover how to list all the available inference methods defined in a model's configuration, generate example code, leverage our Compute Orchestration capabilities for various types of inference requests, and more.

:::