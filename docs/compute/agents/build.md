---
description: Learn how to build agents with Clarifai
sidebar_position: 1
toc_max_heading_level: 4
---

# Build Agents

**Learn how to build agents with Clarifai**
<hr />

Clarifai provides a streamlined developer experience that allows you to quickly prototype, build, and deploy  agentic AI applications. 

As mentioned [here](https://docs.clarifai.com/compute/models/inference/open-ai), we provide an OpenAI-compatible API endpoint, which allows you to seamlessly integrate with popular agent development toolkits that support the OpenAI's API standard. This empowers you to create powerful, flexible, and tool-using AI agents with minimal configuration.

Let’s illustrate how you can build agents with the various toolkits we support.  

:::note LiteLLM

[LiteLLM](https://docs.litellm.ai/docs/providers/clarifai) is a library that offers a unified API for working with various LLM providers. When using an agent toolkit that supports LiteLLM to access Clarifai's models, specify the model using the `openai/` prefix followed by the Clarifai model URL — for example:
`openai/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B`.

:::

:::tip Install Clarifai Package

Install the latest version of the Clarifai Python SDK package by running `pip install --upgrade clarifai`. Also,  go to the [Security](https://clarifai.com/settings/security) section in your personal settings page and generate a Personal Access Token (PAT) to authenticate with the Clarifai platform. 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import OpenAI from "!!raw-loader!../../../code_snippets/python-sdk/agents/openai.py";
import OpenAIOutput from "!!raw-loader!../../../code_snippets/python-sdk/agents/openai-output.txt";
import GoogleADK from "!!raw-loader!../../../code_snippets/python-sdk/agents/googleadk.py";
import GoogleADKOutput from "!!raw-loader!../../../code_snippets/python-sdk/agents/googleadk-output.txt";
import CrewAI from "!!raw-loader!../../../code_snippets/python-sdk/agents/crewai.py";
import CrewAIOutput from "!!raw-loader!../../../code_snippets/python-sdk/agents/crewai-output.txt";
import Vercel from "!!raw-loader!../../../code_snippets/python-sdk/agents/vercel.js";
import VercelOutput from "!!raw-loader!../../../code_snippets/python-sdk/agents/vercel-output.txt";

## OpenAI

You can use the [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) to build agentic AI apps that make use of Clarifai models. 

### Installation

The following command will install the `openai-agents` package and the optional `litellm` dependency group. 

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install "openai-agents[litellm]" </CodeBlock>
</TabItem>
</Tabs>

After the installation, you can use the [LitellmModel](https://openai.github.io/openai-agents-python/models/litellm/) class in the OpenAI Agents SDK to access Clarifai models via LiteLLM. 

### Build an Agent

When building an agent with the OpenAI Agents SDK, the most common properties you'll configure are:

- `instructions` — Also known as the system prompt or developer message, this defines the agent’s behavior and tone.
- `model` —  Specifies which LLM to use. In this case, it points to a Clarifai-hosted model.
- `tools` —  Define the actions your agent can take, such as calling APIs or fetching data. These can be implemented as regular Python functions.

You'll also need the `Runner` class to run your agent. 

### Example

Here is an example of an AI agent powered by a Clarifai-hosted model and equipped with a simple weather lookup tool. When asked about the weather, the agent will recognize the need to use its tool, get the information, and then summarize it in the form of a haiku.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{OpenAI}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OpenAIOutput}</CodeBlock>
</details>

## Google ADK

You can use the [Google Agent Development Kit (ADK)](https://google.github.io/adk-docs/) to build agentic AI apps that make use of Clarifai models.

### Installation

You can install the following necessary packages:

- `google-adk` — This is the Google ADK itself, which provides a wide range of components, such as `Agent`, `Runner`, `LiteLlm`, and `InMemorySessionService`.
- `litellm` — The ADK's `LiteLlm` model class relies on the `litellm` library under the hood to handle multi-model support. After the installation, you can use the `LiteLlm` class to access Clarifai models via LiteLLM. 
- `google-generativeai` — The ADK uses it for handling `types`; that is, structuring message inputs and outputs.

This is the combined commands for installing them:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install google-adk litellm google-generativeai </CodeBlock>
</TabItem>
</Tabs>

### Build an Agent

When building an agent with the Google ADK, the most common properties you'll configure are:

- `instruction` — Also known as the system prompt or developer message, this defines the agent’s behavior and tone.
- `model` —  Specifies which LLM to use. In this case, it points to a Clarifai-hosted model.
- `tools` —  Define the actions your agent can take, such as calling APIs or fetching data. These can be implemented as regular Python functions.

You'll also need the `Runner` class to run your agent. 

### Example

Here is an example of an interactive AI agent that is designed to act as a helpful weather assistant, leveraging a Clarifai-hosted LLM and a custom tool to fetch weather information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{GoogleADK}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{GoogleADKOutput}</CodeBlock>
</details>

### Additional Examples

To learn more about building AI agents with the Google ADK, see the following examples:

- [Repository for Clarifai-Powered Google ADK Agents](https://github.com/Clarifai/examples/tree/main/agents/Google-ADK)

## CrewAI

You can use [CrewAI](https://docs.crewai.com/introduction) to build agentic AI apps that make use of Clarifai models. CrewAI is a Python framework that empowers developers to create autonomous AI agents tailored to a wide range of use cases.

### Installation

The following command will install the core CrewAI package. 

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> pip install crewai </CodeBlock>
</TabItem>
</Tabs>

The `crewai` package provides a wide range of components for interacting with the CrewAI ecosystem, such as `Agent`, `Task`, `Crew`, `Process`, and `LLM`.

CrewAI uses LiteLLM to integrate with a wide range of [LLMs](https://docs.crewai.com/learn/llm-connections). With the `LLM` class, you can easily connect to any OpenAI-compatible model, including those hosted by providers like Clarifai.

### Build an Agent

When building an agent with CrewAI, the most common properties you'll configure are:

- `Crew` — The top-level organization that orchestrates how agents work together and manages the overall workflow and process.
- `AI Agents` — These are specialized team members, each with distinct personalities and expertise. An AI agent can:
    - Have a specific `role` (like _"Senior Research Analyst"_).
    - Work towards defined a `goal` (like _"Uncover cutting-edge developments and facts on a given topic"_).
    - Have a `backstory` that shape its approach and personality.
    - Use designated `tools` to accomplish its work.
    - Delegate tasks.
    - Specify which `llm` to use. In this case, it points to a Clarifai-hosted model.
- `Process` — The workflow management system that defines how agents collaborate. For example, the `sequential` process ensures agents work one after another. 
- `Tasks` — The individual assignments that drive the work forward. Each task can:
    - Have a clear `description` of what needs to be done.
    - Define `expected_output` format and content.
    - Be assigned to a specific `agent`.
    - Feed into the larger process.

### Example

Here is an example of a specialized AI agent powered by a Clarifai-hosted model. When you provide a topic, the agent performs a detailed analysis and then generates responses.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CrewAI}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CrewAIOutput}</CodeBlock>
</details>

### Additional Examples

To learn more about building AI agents with CrewAI, see the following examples:

- [YouTube Video: Building an AI Blog Writing Agent with Clarifai and CrewAI](https://www.youtube.com/watch?v=1XZT2wD4UzQ&t=25s)
- [Repository for Clarifai-Powered CrewAI Agents](https://github.com/Clarifai/examples/tree/main/agents/CrewAI)

## Vercel

You can use the [Vercel](https://vercel.com/docs/agents) platform to build agentic AI apps that make use of Clarifai models. Using the [Vercel AI SDK](https://ai-sdk.dev/) — a TypeScript toolkit for working with OpenAI-compatible APIs — you can easily connect to and interact with Clarifai's hosted AI models.

### Installation

You can install the following necessary packages:

- `ai` — This is the Vercel AI SDK, the main library.
- `@ai-sdk/openai`— The [OpenAI provider](https://ai-sdk.dev/providers/ai-sdk-providers/openai) package for the AI SDK, which allows you to connect to OpenAI-compatible APIs (like Clarifai's).
- `zod`— For schema validation of tool parameters.

This is the combined commands for installing them:

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash"> npm install ai @ai-sdk/openai zod </CodeBlock>
</TabItem>
</Tabs>

### Build an Agent

When building an agent with the Vercel AI SDK, the core function you can use to interact with the language model is `generateText`. It serves as the main entry point for generating responses and orchestrating tool use. 

The most common properties you'll configure in a `generateText` call are:

- `model` — Specifies which LLM to use. In this case, it points to a Clarifai-hosted model.
- `maxSteps` — Sets the maximum number of reasoning or tool-use steps the agent can take before halting.
- `tools` — Provides the agent with a set of callable tools. Tools are defined using the `tool` function, which requires a description, a parameter schema (using `zod`), and an `execute` function that defines the tool's behavior.
- `prompt` — The user's input or query that the agent will respond to.

### Example

Here is an example that demonstrates how to build an agent using the Vercel AI SDK that interacts with a Clarifai-hosted language model.

<Tabs>
<TabItem value="typescript" label="TypeScript">
    <CodeBlock className="language-typescript">{Vercel}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{VercelOutput}</CodeBlock>
</details>

### Additional Examples

To learn more about building AI agents with the Vercel AI SDK, see the following examples:

- [Repository for Clarifai-Powered Vercel AI SDK Agents](https://github.com/Clarifai/examples/tree/main/nodejs/vercel-ai-sdk)