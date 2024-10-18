---
description: Learn how to import models into the Clarifai platform
pagination_next: null
sidebar_position: 7
---

# Import Models

**Learn how to import models into the Clarifai platform**
<hr />

The Clarifai platform allows you to import and integrate externally developed, pre-trained models. This feature allows you to incorporate a diverse array of advanced models into the Clarifai platform and open up new possibilities for harnessing artificial intelligence (AI) in a wide range of applications.

Once imported, the model will be deployed and ready to be evaluated, fine-tuned and customized, combined with other models and agent operators in a workflow, or used to serve inference requests as it is.

:::info

The import model functionality is exclusively available to Enterprise users.

:::

Two main ways are:

- **[Hugging Face Importation](https://docs.clarifai.com/portal-guide/model/hf-model-importer):** Find and import pre-trained models from the Hugging Face platform.
- **[Local Model Upload](https://docs.clarifai.com/portal-guide/model/local-model-upload):** Upload your own trained models if they meet Clarifai's format requirements.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonImport1 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_1.py";
import JSImport1 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_1.html";
import NodeImport1 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_1.js";
import JavaImport1 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_1.java";
import PHPImport1 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_1.php";
import CurlImport1 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_1.sh";

import PythonImport2 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_2.py";
import JSImport2 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_2.html";
import NodeImport2 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_2.js";
import JavaImport2 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_2.java";
import PHPImport2 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_2.php";
import CurlImport2 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_2.sh";

import PythonImport3 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_3.py";
import JSImport3 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_3.html";
import NodeImport3 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_3.js";
import JavaImport3 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_3.java";
import PHPImport3 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_3.php";
import CurlImport3 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_3.sh";

import PythonImport4 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_4.py";
import JSImport4 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_4.html";
import NodeImport4 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_4.js";
import JavaImport4 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_4.java";
import PHPImport4 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_4.php";
import CurlImport4 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_4.sh";

import PythonImport5 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_5.py";
import JSImport5 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_5.html";
import NodeImport5 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_5.js";
import JavaImport5 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_5.java";
import PHPImport5 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_5.php";
import CurlImport5 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_5.sh";

import PythonImport6 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_6.py";
import JSImport6 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_6.html";
import NodeImport6 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_6.js";
import JavaImport6 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_6.java";
import PHPImport6 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_6.php";
import CurlImport6 from "!!raw-loader!../../../code_snippets/api-guide/model/import-model/import_6.sh";

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::

## Hugging Face Importation

Let’s illustrate how you could import a model from [Hugging Face](https://huggingface.co/models) and deploy it on your own Clarifai app. 

:::tip

[Click here](https://docs.clarifai.com/portal-guide/model/hf-model-importer#step-1-find-a-model-on-hugging-face) to learn how to find a model that meets Clarifai's requirements. 

:::

### Zero-Shot-Text-Classifier

To import a `zero-shot-text-classifier` model type, you need to start by creating it. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImport1}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImport1}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeImport1}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImport1}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImport1}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImport1}</CodeBlock>
</TabItem>

</Tabs>

Next, import the model by creating a new version for it. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImport2}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImport2}</CodeBlock>
</TabItem>

<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeImport2}</CodeBlock>
</TabItem>
-->

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImport2}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImport2}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImport2}</CodeBlock>
</TabItem>

</Tabs>

### Text Generation

To import a text generation (`text-to-text`) model type, you need to start by creating it. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImport3}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImport3}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeImport3}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImport3}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImport3}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImport3}</CodeBlock>
</TabItem>

</Tabs>

Next, import the model by creating a new version for it. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImport4}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImport4}</CodeBlock>
</TabItem>

<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeImport4}</CodeBlock>
</TabItem>
-->

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImport4}</CodeBlock>
</TabItem>

<!--
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImport4}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImport4}</CodeBlock>
</TabItem>

</Tabs>

## Local Model Upload

Let’s illustrate how you could import a custom-built model from your local development environment directly into the Clarifai platform. 

:::tip

[Click here](https://github.com/Clarifai/clarifai-python/tree/master/clarifai/models/model_serving) to learn how to build a model that meets Clarifai's requirements.

:::

### Text-Embedder

To import a locally-built `text-embedder` model type, you need to start by creating it. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImport5}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImport5}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeImport5}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImport5}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImport5}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImport5}</CodeBlock>
</TabItem>

</Tabs>

Next, import the model by creating a new version for it. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImport6}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSImport6}</CodeBlock>
</TabItem>

<!--Uploaded model gives KeyError: 'text'
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeImport6}</CodeBlock>
</TabItem>
-->

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaImport6}</CodeBlock>
</TabItem>

<!--Uploaded model gives KeyError: 'text'
<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPImport6}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlImport6}</CodeBlock>
</TabItem>

</Tabs>