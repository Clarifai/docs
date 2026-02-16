---
description: Examples of how artifacts are used
sidebar_position: 2
---

# Artifacts Use Cases

**Examples of how artifacts are used**
<hr />


Artifacts provide a flexible, versioned way to store and manage files produced throughout the ML and data lifecycle. They are especially useful for preserving intermediate outputs, enabling reproducibility, and sharing results across teams and environments.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import UseCase1 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-use-case-1.py";
import UseCase2 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-use-case-2.py";
import UseCase3 from "!!raw-loader!../../../code_snippets/new-docs/artifacts/py-use-case-3.py";


## Example Use Cases

### Model Training Workflows

You can upload model checkpoints to the Clarifai platform after each training run or epoch. If training is interrupted, you can resume from the most recent checkpoint instead of starting from scratch.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{UseCase1}</CodeBlock>
</TabItem>


</Tabs>

### Model Deployment

You can retrieve the latest approved model artifact and download it locally for deployment in production environments.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{UseCase2}</CodeBlock>
</TabItem>


</Tabs>

### Pipeline Outputs

You can store evaluation metrics, preprocessed embeddings, serialized configurations, or logs produced by pipeline steps. These artifacts can be reused in downstream pipelines, audited later, or shared across teams.



### Experiment Tracking

You can use artifacts as a versioned record of experiment outputs. Track how model performance evolves over time, compare results across hyperparameter configurations, and ensure experiments remain reproducible.


## Error Handling Examples

You can handle common failure cases gracefully when uploading or downloading artifacts.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{UseCase3}</CodeBlock>
</TabItem>


</Tabs>