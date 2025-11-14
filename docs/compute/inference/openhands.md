---
description: Run inference with Clarifai models locally using OpenHands
sidebar_position: 5
---

# OpenHands

**Run inference with Clarifai models locally using OpenHands**
<hr />

[OpenHands](https://docs.all-hands.dev/) is an AI-powered code assistance framework designed to streamline development by harnessing the flexibility of large language models (LLMs).

Let's walk through how to run inference with Clarifai models locally using OpenHands, while leveraging its intelligent assistance to boost your productivity.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import OpenHands1 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_hands_1.py";
import OpenHands2 from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/open_hands_2.txt";

## Step 1: Perform Prerequisites

- **Get a PAT (Personal Access Token) key** — To use OpenHands with Clarifai models, you need a [PAT](https://docs.clarifai.com/control/authentication/pat) for authentication. [Log in](https://clarifai.com/login) or [sign up](https://clarifai.com/signup) for a Clarifai account, then go to **Settings** in the collapsible left sidebar and select **Secrets**. From there, you can create a new token or copy an existing one to use with your requests.

- **Get a model** — Clarifai's [Community platform](https://clarifai.com/explore) offers a wide selection of cutting-edge language models that you can run using OpenHands. Browse the platform to find a model that best fits your use case. For this example, we'll use the [GPT-OSS-120B](https://clarifai.com/openai/chat-completion/models/gpt-oss-120b) model. 

- **Install Docker Desktop** — OpenHands runs inside a Docker container, so you’ll need Docker installed and running on your system. You can download and install Docker Desktop for your operating system from the [official Docker website](https://www.docker.com/products/docker-desktop). Be sure to follow the installation steps specific to your OS (Windows, macOS, or Linux).

- **Get a GitHub token** — If you want to integrate OpenHands with GitHub, you’ll need a personal access token for authentication. You can follow [GitHub’s documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to generate one.


## Step 2: Run OpenHands Locally

### Option A: CLI Launcher (Recommended)

The simplest way to run OpenHands locally is by using the CLI launcher with the [`uv`](https://docs.astral.sh/uv/) package manager.  This approach provides better isolation from your existing project’s virtual environment and is needed for OpenHands’ default MCP servers.

If you don’t already have `uv` installed, follow the official [uv installation guide](https://docs.astral.sh/uv/getting-started/installation/) for the latest instructions for your platform.

Then, use either of the following commands to launch OpenHands.

Launch by starting the GUI server:

```bash
uvx --python 3.12 openhands serve
```

Or, start in CLI mode:

```bash
uvx --python 3.12 openhands
```

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{OpenHands2}</CodeBlock>
</details>

### Option B: Docker

You can also run OpenHands using Docker.

Note that OpenHands uses a dedicated Docker image to provide a sandboxed execution environment. Pulling this image ahead of time from the All-Hands AI Docker registry can speed up the initial startup process.

> **Note:** Always check the [official OpenHands documentation](https://github.com/OpenHands/OpenHands?tab=readme-ov-file#option-2-docker) for the latest recommended image tag, as it may change over time.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">docker pull docker.openhands.dev/openhands/runtime:0.62-nikolaik</CodeBlock>
</TabItem>
</Tabs>

Next, start OpenHands using the following comprehensive `docker run` command.

> **Note:** This command works best in Linux or macOS environments, where Docker supports native Linux-style paths. If you're using Windows, you'll need to modify the volume mount paths and run the command within a WSL2 (Linux) shell for proper compatibility.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-python">{OpenHands1}</CodeBlock>
</TabItem>
</Tabs>

The above command:

* Launches a new Docker container to run OpenHands.
* Sets environment variables for the runtime image and logging.
* Grants the container access to the Docker engine for sandboxing.
* Maps port 3000 on your computer host to port 3000 in the container. _This is how you access the OpenHands web interface or API locally._
* Mounts the `~/.openhands` folder for persistent user data.
* Enables the container to communicate with the host machine.
* Assigns the container the name `openhands-app`.
* Uses the OpenHands `0.62` image from the official registry.
* Automatically deletes the container after it exits.

### Run OpenHands

After launching OpenHands, monitor the terminal for log output. Once the application finishes its startup process, open your preferred web browser and go to:

```
http://localhost:3000
```

At this point, OpenHands is successfully installed and running on your local machine.

![](/img/new-docs/openhands_1.png)

## Step 3: Connect to an LLM

To configure OpenHands to use a Clarifai model as its cognitive engine, click the settings icon in the bottom-left corner of the sidebar.

In the menu that appears, select **LLM** to open the LLM configuration panel.

Here, you can set up the large language model that OpenHands will use for reasoning and task execution.

![](/img/new-docs/openhands_2.png)

Fill in the following fields:

* **LLM Provider** — From the list of providers, select `Clarifai`.
* **LLM Model** — Choose the Clarifai model you want OpenHands to use.
* **API Key** — Enter your Clarifai PAT as described [earlier](#step-1-perform-prerequisites).

After filling in the fields, click the **Save Changes** button in the bottom-right corner of the interface.

:::info Advanced LLM Settings

To access [advanced](https://docs.openhands.dev/openhands/usage/settings/llm-settings#advanced-llm-settings) configuration options, toggle the **Advanced** switch in the LLM configuration panel.

![](/img/new-docs/openhands_6.png)

This allows you to specify a custom Clarifai model and adjust additional LLM options. This is helpful when the model you want to use is not available in the basic dropdown selection.

Then, fill in the following fields:

* **Custom Model** — Enter the Clarifai model URL you want to use. To ensure OpenAI compatibility, prefix the model path with `openai/`, followed by the full Clarifai model URL. Here is an example: `openai/https://clarifai.com/openai/chat-completion/models/gpt-oss-120b`. 
* **Base URL** — Enter Clarifai's [OpenAI-compatible](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format) API endpoint: `https://api.clarifai.com/v2/ext/openai/v1`. 
* **API Key** — Enter your PAT, as explained [earlier](#step-1-perform-prerequisites).

> **Note:** You can leave all other fields at their default values, including the selected agent, unless you require custom behavior.

After filling in the fields, click the **Save Changes** button at the bottom-right corner of the interface.

:::

## Step 4: Integrate with GitHub

Integrating OpenHands with GitHub allows you to take advantage of version control, repository access, and collaboration features.

To set this up, open the **Settings** panel and navigate to the **Integrations** tab. Then, enter your GitHub personal access token in the designated field.

> **Optionally:** If you are using a self-hosted or enterprise instance, you may also provide your GitHub host URL.

![](/img/new-docs/openhands_3.png)

> **Note:** You can also integrate with GitLab or Bitbucket by entering the corresponding token and host details.

Once everything is filled in, click **Save Changes** in the bottom-right corner to apply your integration settings.

## Step 5: Start a Conversation

Next, click the plus (**+**) **Start new conversation** button at the top of the sidebar. From there, connect to a repository by selecting the desired repo and its branch.

Once selected, click the **Launch** button to begin your session.

![](/img/new-docs/openhands_4.png)

> **Tip:** You can also start a new conversation from scratch that is not connected to an existing repository.

## Step 6: Start Building

In the main interface, use the input field to prompt the agent and begin working on your task. You can continue interacting with the agent to refine the results, extend the functionality, or troubleshoot issues as they arise.

![](/img/new-docs/openhands_5.png)

OpenHands sends each request to the large language model you configured — powered by Clarifai — and the model generates the responses. 

Once you're satisfied with the output, you can seamlessly push your changes to GitHub directly from the interface, making it easy to commit, publish, and share your work.

That's it!
