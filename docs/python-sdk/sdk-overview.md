---
description: Learn how to install the Clarifai Python SDK
sidebar_position: 1
---

# Installation Guide

**Learn how to install the Clarifai Python SDK**
<hr />

Our new Python SDK empowers you to simplify data import, interact with our API in an object-oriented manner, quickly create apps, inputs, and datasets, easily consume models and workflows from the Clarifai community, and more. 

To consume the Clarifai API effortlessly and with just a few lines of code, the new Python SDK is all you need.

:::info
The current Python SDK version is `v10.2.1`
:::
<a href="https://pypi.org/project/clarifai" target="_blank"> <img src="https://img.shields.io/pypi/dm/clarifai" alt="PyPI - Downloads" /> </a> 

## Install the Package

You can install the latest stable version of the Python SDK package by using `pip`.

To install, run:

```python
pip install -U clarifai
```

:::note
Install Clarifai Python SDK through  ```pip install "clarifai[all]"``` to use more optional libraries mentioned [here](https://github.com/Clarifai/clarifai-python/blob/491d5444f5ae5da234012022e1ba4e83739242a4/setup.py).
:::

## Installation from Source (for Development)

If you want to install from source for development purposes, follow these steps:

```python
git clone https://github.com/Clarifai/clarifai-python.git
cd clarifai-python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python setup.py install
```

## Configuration

Clarifai uses Personal Access Tokens (PATs) to validate requests. You can create and manage PATs under your Clarifai account security settings. To set your PAT as an environment variable, run:

```python
export CLARIFAI_PAT={your personal access token}
```
