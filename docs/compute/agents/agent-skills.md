---
description: Use Clarifai agent skills to supercharge AI coding assistants with deep Clarifai knowledge
sidebar_position: 4
toc_max_heading_level: 4
---

# Agent Skills

**Supercharge AI coding assistants with deep Clarifai knowledge**

<hr />


Clarifai Skills are specialized prompt templates that transform AI coding assistants — Claude Code, Cursor, Codex, and more — into Clarifai platform experts.

You don't need to explain APIs from scratch. Just describe what you want in plain language — such as _"list my apps"_ — and your assistant finds the right skill and gets to work.

Built on the open [Agent Skills](https://agentskills.io) standard, Clarifai Skills work out of the box across 30+ agent platforms.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

## Available Skills

| Skill | What It Does |
|-------|-------------|
| [`clarifai-cli`](https://github.com/Clarifai/skills/tree/main/.github/skills/clarifai-cli) | Full CLI reference: `init`, `serve`, `deploy`, `status`, `logs`, `undeploy`, `predict`, `list-instances` |
| [`clarifai-model-upload`](https://github.com/Clarifai/skills/tree/main/.github/skills/clarifai-model-upload) | Deploy models with vLLM, SGLang, HuggingFace, Ollama — `ModelClass`, `config.yaml`, GPU config |
| [`clarifai-inference`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-inference) | Model discovery, method signatures, code generation, OpenAI-compatible API, agentic models|
| [`clarifai-mcp`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-mcp) | Build MCP servers with `MCPModelClass`, `StdioMCPModelClass`, FastMCP tools|
| [`clarifai-deployment-lifecycle`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-deployment-lifecycle) | Deploy/status/logs/undeploy lifecycle, version patching, state monitoring |
| [`clarifai-observability`](https://github.com/Clarifai/skills/tree/main/.github/skills/clarifai-observability) | Debug stuck or crashing deployments: CLI logs, K8s events, common resolutions |
| [`clarifai-agentic-flows`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-agentic-flows) | Multi-step orchestration: "train THEN deploy", client scripts, server orchestrators |
| [`clarifai-datasets`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-datasets) | Upload datasets with annotations (classification, detection, segmentation), format conversion |
| [`clarifai-pipelines`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-pipelines) | Batch processing pipelines with containerized steps and Artifacts API |
| [`clarifai-training-pipelines`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-training-pipelines) | Train classifiers (ResNet-50) and detectors (YOLOF) using built-in templates |
| [`clarifai-grpc`](https://github.com/Clarifai/skills/blob/main/.github/skills/clarifai-grpc) | Low-level gRPC API with protobufs for advanced platform operations |

## Prerequisites

### Install the Clarifai Python SDK

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    ```bash
    pip install --upgrade clarifai
    ```
</TabItem>
</Tabs>

### Log in via the CLI

Log in to Clarifai and authenticate your connection with your [PAT](https://docs.clarifai.com/control/authentication/pat) (Personal Access Token).

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai login
    ```
</TabItem>
</Tabs>

### Install Skills

#### Option A: Clarifai CLI (Recommended)

Run the skills installer. If no agent flag is specified, it auto-detects installed agents. If no skill name is given, it installs all available skills.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai skills install                         # all skills, auto-detect agents
    clarifai skills install --claude                # all skills for Claude Code
    clarifai skills install clarifai-cli --claude   # one skill for Claude Code
    clarifai skills install --claude --cursor       # all skills, multi-agent
    clarifai skills install --local                 # project-level install
    ```
</TabItem>
</Tabs>

:::note Scope flags

- `--claude` — Target Claude Code
- `--codex` — Target OpenAI Codex
- `--cursor` — Target Cursor
- `--copilot` — Target GitHub Copilot
- `--gemini` — Target Gemini
- `--all-agents` — Target all supported agents
- `--global` — Install globally (`~/`) (default)
- `--local` — Install at project level (`./`)
- `--force` — Overwrite existing skills
- `--source PATH` — Install or update from a local skills repo clone instead of GitHub

:::

#### Option B: Claude Code Plugin

If you use Claude Code, you can install Clarifai skills directly via the plugin marketplace:

<Tabs groupId="code">
<TabItem value="bash" label="Bash">
    ```bash
    claude plugin marketplace add Clarifai/skills   # Register the Clarifai skills repo
    claude plugin install clarifai-skills            # Install all skills as a single plugin
    ```
</TabItem>
</Tabs>


## Managing Skills

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai skills list --remote           # browse available skills (shorthand: ls)
    clarifai skills list --installed        # see what's installed
    clarifai skills update                  # update all (auto-detect agents)
    clarifai skills update --claude         # update for Claude only
    clarifai skills remove clarifai-cli --claude    # remove one skill from Claude Code
    clarifai skills remove --all                    # remove all Clarifai skills
    ```
</TabItem>
</Tabs>


## How It Works

Each skill is a folder containing a `SKILL.md` file with YAML frontmatter and markdown documentation, plus optional `references/` and `examples/` subdirectories.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai-cli/
      SKILL.md        ← instructions loaded by the agent
      references/     ← detailed reference docs
      examples/       ← working code examples
    ```
</TabItem>
</Tabs>

When you install skills, they are placed in a central location and symlinked per agent:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    ~/.agents/skills/           # one copy of each skill
      clarifai-cli/
      clarifai-model-upload/
      ...
    ~/.claude/skills/           # symlinks for Claude Code
      clarifai-cli -> ~/.agents/skills/clarifai-cli
      ...
    ```
</TabItem>
</Tabs>

Skills activate when your request matches their description. Depending on your AI assistant, you can trigger them:

- **By asking naturally** — describe what you want and the assistant picks the right skill:
  > "How do I run inference on a Clarifai model?"
  > "Deploy a vLLM model to Clarifai"
  > "Train an image classifier on my dataset"

- **Via slash commands** (supported in assistants like Claude Code):
  ```
  /clarifai-inference
  /clarifai-cli
  /clarifai-model-upload
  ```

- **By pasting skill context** — in assistants like Cursor or Codex, you can paste a skill's prompt directly into your system prompt or context window to activate its guidance.


## Example Usage

### Run Inference

Tell your assistant: _"Run inference on Claude Sonnet 4 with the prompt: Hello world"_.

The `clarifai-inference` skill guides the assistant to generate code like:

<Tabs groupId="code">
<TabItem value="python" label="Python">
    ```python
    import os
    from openai import OpenAI

    client = OpenAI(
        base_url="https://api.clarifai.com/v2/ext/openai/v1",
        api_key=os.environ['CLARIFAI_PAT'],
    )

    response = client.chat.completions.create(
        model="https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
        messages=[{"role": "user", "content": "Hello world"}],
    )
    print(response.choices[0].message.content)
    ```
</TabItem>

</Tabs>

Or, run it directly from the terminal:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai model predict anthropic/completion/models/claude-sonnet-4 "Hello world"
    ```
</TabItem>
</Tabs>

### Deploy a Model

Tell your assistant: _"Deploy Qwen3-0.6B with vLLM"_.

The `clarifai-cli` and `clarifai-model-upload` skills guide the assistant to run:

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    clarifai model init ./qwen --toolkit vllm --model-name "Qwen/Qwen3-0.6B"
    clarifai model serve ./qwen    # test locally
    clarifai model deploy ./qwen   # deploy to cloud
    ```
</TabItem>
</Tabs>

### More Examples

Here are more prompts you can use with your assistant:

- _"Create a FastMCP server with a web search tool and deploy it to Clarifai"_
- _"Upload my COCO-format dataset to Clarifai with detection annotations"_
- _"My deployment is stuck — help me debug it"_
- _"Train an image classifier on my dataset"_
- _"Show me how to run inference on a Clarifai-hosted LLM using the OpenAI-compatible API"_



