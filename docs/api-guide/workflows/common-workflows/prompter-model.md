---
description: Learn how to integrate a prompter model into an LLM workflow 
sidebar_position: 5
---

# Custom Prompter Model

**Integrate a prompter model into an LLM workflow**
<hr />

A [prompter model](https://docs.clarifai.com/portal-guide/agent-system-operators/prompter) is a type of language model specifically designed to craft instructions that guide the output of large language models (LLMs). It helps in prompt engineering, focusing on optimizing the responses of LLMs to prompts. 

Let's demonstrate how you can create your own prompter model and connect it to an LLM in a [workflow](https://docs.clarifai.com/api-guide/workflows/). 

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCreatePromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/py/create_prompt_model.py";
import JSCreatePromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/js/create_prompt_model.html";
import NodeCreatePromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/node/create_prompt_model.js";
import JavaCreatePromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/java/create_prompt_model.java";
import CurlCreatePromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/create_prompt_model.sh";
import PHPCreatePromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/php/create_prompt_model.php";

import PythonTrainPromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/py/train_prompt_model.py";
import JSTrainPromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/js/train_prompt_model.html";
import NodeTrainPromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/node/train_prompt_model.js";
import JavaTrainPromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/java/train_prompt_model.java";
import CurlTrainPromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/train_prompt_model.sh";
import PHPTrainPromptModel from "!!raw-loader!../../../../code_snippets/api-guide/model/php/train_prompt_model.php";

import PythonPromptWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/model/py/prompter_workflow.py";
import JSPromptWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/model/js/prompter_workflow.html";
import NodePromptWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/model/node/prompter_workflow.js";
import JavaPromptWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/model/java/prompter_workflow.java";
import CurlPromptWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/prompter_workflow.sh";
import PHPPromptWorkflow from "!!raw-loader!../../../../code_snippets/api-guide/model/php/prompter_workflow.php";

import PythonPromptWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/model/py/prompter_workflow_predict.py";
import JSPromptWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/model/js/prompter_workflow_predict.html";
import NodePromptWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/model/node/prompter_workflow_predict.js";
import JavaPromptWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/model/java/prompter_workflow_predict.java";
import CurlPromptWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/model/curl/prompter_workflow_predict.sh";
import PHPPromptWorkflowPredict from "!!raw-loader!../../../../code_snippets/api-guide/model/php/prompter_workflow_predict.php";

import ExampleOutput1 from "!!raw-loader!../../../../code_snippets/api-guide/model/code_output_examples/prompter_model_workflow.js";

## Create a Prompter Model

<Tabs>

<TabItem value="grpc_python" label="Python">
    <CodeBlock className="language-python">{PythonCreatePromptModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreatePromptModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCreatePromptModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="Java">
    <CodeBlock className="language-java">{JavaCreatePromptModel}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCreatePromptModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreatePromptModel}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-js">{ExampleOutput1}</CodeBlock>
</details>

## Train a Prompter Model

When training a prompter model, you need to provide a prompt template, which serves as a pre-configured piece of text for instructing an LLM. 

Note that your prompt template should include at least one instance of the placeholder `{data.text.raw}`. When you input your text data at inference time, all occurrences of `{data.text.raw}` within the template will be replaced with the provided text.

<Tabs>

<TabItem value="grpc_python" label="Python">
    <CodeBlock className="language-python">{PythonTrainPromptModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainPromptModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="grpc_nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainPromptModel}</CodeBlock>
</TabItem>
-->

<TabItem value="grpc_java" label="Java">
    <CodeBlock className="language-java">{JavaTrainPromptModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTrainPromptModel}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainPromptModel}</CodeBlock>
</TabItem>

</Tabs>

## Add to a Workflow

After training your prompter model, you can now put it to work by integrating it into an LLM workflow and using it to accomplish various tasks. 

Below is an example of how to connect a prompter model to an LLM like [GPT-4](https://clarifai.com/openai/chat-completion/models/GPT-4) for text-to-text tasks. 

<Tabs>

<TabItem value="grpc_python" label="Python">
    <CodeBlock className="language-python">{PythonPromptWorkflow}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPromptWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodePromptWorkflow}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="Java">
    <CodeBlock className="language-java">{JavaPromptWorkflow}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPPromptWorkflow}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPromptWorkflow}</CodeBlock>
</TabItem>

</Tabs>

## Workflow Predict

After creating the workflow, let's now use it to perform a text sentiment prediction task. 

<Tabs>

<TabItem value="grpc_python" label="Python">
    <CodeBlock className="language-python">{PythonPromptWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPromptWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodePromptWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="Java">
    <CodeBlock className="language-java">{JavaPromptWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPPromptWorkflowPredict}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPromptWorkflowPredict}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Text Output Example</summary>
    <CodeBlock className="language-js">{ExampleOutput1}</CodeBlock>
</details>

As you can see on the output above, the response contains the predictions of each model in the workflow. The prompt text starts with the earlier provided template text, and the `{data.text.raw}` placeholder is substituted with the provided input text. That is what is used as a prompt for the GPT-4 model.

And the model correctly predicts the sentiment of the provided input text. 