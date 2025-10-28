---
description: Run inference with Clarifai models locally using OpenHands
sidebar_position: 5
---

# OpenHands

**Run inference with Clarifai models locally using OpenHands**
<hr />

[OpenHands](https://docs.all-hands.dev/) is an AI-powered code assistance framework designed to streamline development by harnessing the flexibility of large language models (LLMs).

Let's walk through how to run inference with Clarifai models locally using OpenHands, while leveraging its intelligent assistance to boost your coding productivity.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

## Prerequisites

- **Get a PAT key** — To use OpenHands with Clarifai models, you’ll need a [Personal Access Token](https://docs.clarifai.com/control/authentication/pat) (PAT). [Log in](https://clarifai.com/login) or [sign up](https://clarifai.com/signup) for a Clarifai account, then navigate to your **Security** settings to generate a new PAT. This token is required for authenticating your requests.

- **Get a model** — Clarifai's [Community platform](https://clarifai.com/explore) offers a wide selection of cutting-edge language models that you can run using OpenHands. Browse the platform to find a model that best fits your use case. For this example, we'll use the [GPT-OSS-120B](https://clarifai.com/openai/chat-completion/models/gpt-oss-120b) model. 

- **Install Docker Desktop** — OpenHands runs inside a Docker container, so you’ll need Docker installed and running on your system. You can download and install Docker Desktop for your operating system from the [official Docker website](https://www.docker.com/products/docker-desktop). Be sure to follow the installation steps specific to your OS (Windows, macOS, or Linux).


## Step 1: Pull Runtime Image

OpenHands uses a dedicated Docker image to provide a sandboxed execution environment. Pulling this image ahead of time from the All-Hands AI Docker registry can speed up the initial startup process.

> **Note:** Always check the official OpenHands documentation for the latest recommended image tag, as it may change over time.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    <CodeBlock className="language-bash">docker pull docker.all-hands.dev/all-hands-ai/runtime:0.51-nikolaik</CodeBlock>
</TabItem>
</Tabs>

## Step 2: Run OpenHands

Start OpenHands using the following comprehensive `docker run` command.

> **Note:** This command works best in Linux or macOS environments, where Docker supports native Linux-style paths. If you're using Windows, you'll need to modify the volume mount paths and run the command within a WSL2 (Linux) shell for proper compatibility.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    docker run -it --rm --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.51-nikolaik \
    -e LOG_ALL_EVENTS=true \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v ~/.openhands:/.openhands \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name openhands-app \
    docker.all-hands.dev/all-hands-ai/openhands:0.51  
    ```
</TabItem>
</Tabs>

The above command:

* Launches a new Docker container to run OpenHands.
* Sets environment variables for the runtime image and logging.
* Grants the container access to the Docker engine for sandboxing.
* Maps port 3000 on your computer host to port 3000 in the container. This is how you access the OpenHands web interface or API locally.
* Mounts the `~/.openhands` folder for persistent user data.
* Enables the container to communicate with the host machine.
* Assigns the container the name `openhands-app`.
* Uses the OpenHands `0.51` image from the official registry.
* Automatically deletes the container after it exits.

## Step 3: Access the Web Interface

After running the `docker run` command, monitor the terminal for log output. Once the application finishes its startup process, open your preferred web browser and go to:

```
http://localhost:3000
```

At this point, OpenHands is successfully installed and running on your local machine.

![](/img/new-docs/openhands_1.png)

## Step 4: Configure OpenHands

To configure OpenHands, open its interface and click the **Settings** (gear icon) in the bottom-left corner of the sidebar. 

The Settings page allows you to connect OpenHands to a language model, which serves as its cognitive engine, and integrate it with GitHub for version control and collaboration.

### Connect to an LLM

In the Settings page, go to the **LLM** tab and toggle the **Advanced** button.

![](/img/new-docs/openhands_2.png)

Then, fill in the following fields:

* **Custom Model** — Enter the Clarifai model URL you want to use. To ensure OpenAI compatibility, prefix the model path with `openai/`, followed by the full Clarifai model URL. Here is an example: `openai/https://clarifai.com/openai/chat-completion/models/gpt-oss-120b`. 
* **Base URL** — Enter Clarifai's [OpenAI-compatible](https://docs.clarifai.com/compute/inference/#predict-with-openai-compatible-format) API endpoint: `https://api.clarifai.com/v2/ext/openai/v1`. 
* **API Key** — Enter your PAT, as explained earlier.

> **Note:** You can leave the remaining settings at their default values, including the selected agent.

After filling in the fields, click the **Save Changes** button at the bottom-right corner of the interface.

### Integrate with GitHub

Within the same Settings page, navigate to the **Integrations** tab.

Enter your [GitHub token](https://github.com/settings/tokens) in the provided field, then click **Save Changes** in the bottom-right corner of the interface to apply the integration.

![](/img/new-docs/openhands_3.png)

Next, click the plus (**+**) **Start new conversation** button at the top of the sidebar. From there, connect to a repository by selecting the desired repo and its branch.

Once selected, click the **Launch** button to begin your coding session.

![](/img/new-docs/openhands_4.png)

## Step 5: Start Building

In the main interface, use the input field to prompt the agent and begin generating your script. You can continue interacting with the agent to refine, extend, or troubleshoot your code as needed.

Here is a prompt example you can use:

```text
Write a Bash script named hello.sh that prints "Hello, world!" to the console when executed.
```

![](/img/new-docs/openhands_5.png)

OpenHands forwards the request to the configured LLM, which responds by generating a snippet to fulfill the task.

Once you're satisfied with your work, you can seamlessly push your code to GitHub directly from the interface.
