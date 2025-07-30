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
pip install -r requirements.txt
python setup.py install
```

## Authentication

Clarifai uses Personal Access Tokens (PATs) to authenticate API requests. You can create and manage PATs in your Clarifai account [security settings](https://clarifai.com/settings/security).

To set your PAT as an environment variable and use it with the Python SDK, run:


<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

