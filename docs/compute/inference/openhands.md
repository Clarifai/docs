---
description: Run inference with Clarifai models locally using OpenHands
sidebar_position: 5
draft: true
---

# OpenHands

**Run inference with Clarifai models locally using OpenHands**
<hr />

[OpenHands](https://docs.all-hands.dev/) is an AI-powered code assistance framework that streamlines development by leveraging the flexibility of large language models (LLMs). It can assist with a wide range of coding tasks using LLMs.

Let's demonstrate how to use OpenHands to run inference with Clarifai models in your local development environment.

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
    <CodeBlock className="language-bash">
    docker run -it --rm --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.51-nikolaik \
    -e LOG_ALL_EVENTS=true \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v ~/.openhands:/.openhands \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name openhands-app \
    docker.all-hands.dev/all-hands-ai/openhands:0.51  
    </CodeBlock>
</TabItem>
</Tabs>

This command:

* Launches a new Docker container to run OpenHands.
* Sets environment variables for the runtime image and logging.
* Grants the container access to the Docker engine for sandboxing.
* Maps port 3000 on your computer host to port 3000 in the container. This is how you access the OpenHands web interface or API locally.
* Mounts the `~/.openhands` folder for persistent user data.
* Enables the container to communicate with the host machine.
* Assigns the container the name `openhands-app`.
* Uses the OpenHands `0.51` image from the official registry.
* Automatically deletes the container after it exits.

## Step 3: Run OpenHands