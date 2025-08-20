---
description: Discover the power of the Python SDK
sidebar_position: 1
---

# Python SDK 

**Discover the power of the Python SDK**
<hr />

[The Python SDK](https://github.com/Clarifai/clarifai-python/) is designed to streamline your AI workflows, making it easier than ever to interact with the Clarifai API. Whether you're building AI applications or integrating Clarifai into your existing systems, the Python SDK is your go-to tool for effortless API interaction.

With an intuitive, object-oriented approach, you can accelerate your AI development with just a few lines of code.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

## Installation

### Install via PyPI

You can install the latest stable version of the Clarifai [Python SDK](https://pypi.org/project/clarifai/) using `pip`:

```python
pip install -U clarifai
```

For additional functionality, you can install all the optional libraries mentioned [here](https://github.com/Clarifai/clarifai-python/blob/491d5444f5ae5da234012022e1ba4e83739242a4/setup.py) by running:

```python
pip install "clarifai[all]"
```

Once installed, you can confirm the version by running the following command:

```text
clarifai --version
```

### Install from Source (for Development)

If you’re contributing to development or need the latest updates, install from source:

```python
git clone https://github.com/Clarifai/clarifai-python.git
cd clarifai-python
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
```

## Authentication

Clarifai uses [Personal Access Tokens](https://docs.clarifai.com/control/authentication/pat) (PATs) to authenticate API requests. You can obtain one from your personal settings page by navigating to the **Security** section.

To set your PAT as an environment variable and use it with the Python SDK, run:


<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

## Minimum System Requirements

The Clarifai Python package is lightweight and designed to run on most modern systems. No special hardware is required. It will run on standard consumer-grade laptops and desktops.

Below are the minimum system requirements for different operating systems.

### Supported Operating Systems

- **Windows**: Windows 10 (64-bit) or later
- **macOS**: macOS 11.0 (Big Sur) or later, Apple Silicon (M1, M2, M3, …) only
> **Note**: Intel-based Macs are not supported
- **Linux**: Ubuntu 18.04 LTS or later, or equivalent distributions

### Python Requirements

- Python 3.11 – 3.12 (3.12 is supported by default)
- Pip 21.0 or higher

### Hardware Requirements

- **Processor**:
    - Windows/Linux: x86_64 or ARM64 (Intel, AMD, or ARM)
    - macOS: Apple Silicon only (M1, M2, M3, …)
- **Memory**: Minimum 2 GB RAM (4 GB or more is recommended)
- **Disk Space**: At least 200 MB free storage for installation and dependencies
- **GPU**: Not required. However, for more intensive tasks, you may need access to a GPU. We provide various [GPU options](https://docs.clarifai.com/compute/deployments/cloud-instances) (e.g., NVIDIA A100, L40S) through our cloud compute services. These resources are managed on our platform, not on your local machine. 

