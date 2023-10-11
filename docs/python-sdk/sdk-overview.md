---
description: Learn how to install the Clarifai Python SDK
sidebar_position: 1
---

# Installation Guide

**Learn how to install the Clarifai Python SDK**
<hr />

Our new Python SDK empowers you to simplify data import, interact with our API in an object-oriented manner, quickly create apps, inputs, and datasets, easily consume models and workflows from the Clarifai community, and more. 

To consume the Clarifai API effortlessly and with just a few lines of code, the new Python SDK is all you need.

## Install the Package

You can install the latest stable version of the Python SDK package using `pip`.

To install, run:

```python
pip install -U clarifai
```

## Installation from Source (for Development)

If you want to install from source for development purposes, follow these steps:

```python
python -m venv ~/virtualenv/clarifai-python-utils
source ~/virtualenv/clarifai-python-utils/bin/activate
cd clarifai-python-utils
python setup.py develop
```

## Configuration

Clarifai uses Personal Access Tokens (PATs) to validate requests. You can create and manage PATs under your Clarifai account security settings. To set your PAT as an environment variable, run:

```python
export CLARIFAI_PAT={your personal access token}
```
