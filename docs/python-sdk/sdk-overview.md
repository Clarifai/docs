---
description: Learn how to install the Clarifai Python SDK
sidebar_position: 1
---

# Installation Guide

**Learn how to install the Clarifai Python SDK**
<hr />

## Install the Package

You can install the latest stable Clarifai using pip (which is the canonical way to install Python packages). To install using `pip`, run:

```default
pip install -U clarifai
```

## Installation from Source (for Development)

If you want to install from source for development purposes, follow these steps:

```default
python -m venv ~/virtualenv/clarifai-python-utils
source ~/virtualenv/clarifai-python-utils/bin/activate
cd clarifai-python-utils
python setup.py develop
```

## Configuration

Clarifai uses Personal Access Tokens (PATs) to validate requests. You can create and manage PATs under your Clarifai account security settings. To set your PAT as an environment variable, run:

```default
export CLARIFAI_PAT={your personal access token}
```
