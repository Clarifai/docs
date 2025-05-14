---
description: Learn how to create concepts within your app
sidebar_position: 1
toc_max_heading_level: 4
---

# Create Concepts

**Learn how to create concepts within your app**
<hr />

## **Create via the UI**

To create a new concept, head to your application's individual page and select the **Inputs** option in the collapsible left sidebar.

You'll be redirected to the Inputs-Manager page, where you can create new concepts and use them to complete various operations. 

![](/img/community_2/inputs_viewer_page.png)

There are several ways to create concepts on the platform. Let's illustrate two of them:

- Via the **Labels** section
- Via the inputs uploader

### Via the **Labels** Section

To create a new concept, go to the **Labels** section on the Inputs-Manager page and click the plus sign (**+**) next to the **Select or add concepts** search box. Then, type the new concept name in the search box.

The new name you've typed will appear underneath the search box. Click the **Add new label** button to create the concept. 

![](/img/community_2/add_concept.png)

The new concept will be successfully added to your app. You can follow the same process to create other concepts for your app.

![](/img/community_2/new_concept_added.png)

### Via the Inputs Uploader

You can also create new concepts when uploading inputs to your app. To do so, click the **Upload Inputs** button at the upper-right corner of the Inputs-Manager page.  

> The window that pops up allows you to upload your inputs — either by uploading them directly from your local device or by providing a publicly accessible URL.

In the **Concepts** section of the pop-up window, click the plus sign (**+**) next to the **Select or add concepts** search box. Then, type the new concept name in the search box.

The new name you've typed will appear underneath the search box. Click the **Add new concept** button to create the concept. 

![](/img/community_2/concepts_upload_inputs_new_concepts.png)

The new concept will be successfully added to your app.

> You can also click the **Upload inputs** button at the bottom of the pop-up window to finalize uploading your input.

![](/img/community_2/concepts_newly_added_concept.png)

## **Create via the API**

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonSDKCreateConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/sdk_create_concepts.py";
import PythonAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/python/add_concepts.py";
import JavaScriptAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/js/add_concepts.html";
import NodeJSAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/node/add_concepts.js";
import JavaAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/java/add_concepts.java";
import PHPAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/php/add_concepts.php";
import CurlAddConcepts from "!!raw-loader!../../../code_snippets/api-guide/concepts/curl/add_concepts.sh";

import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/concepts/code_output_examples/add_concepts.js";


### Create Concepts

To create a new concept in your app, you POST the concept with an id and name. You can also post more than one concept in the same request by sending a list of concepts.

Below is an example of how to add concepts.  


<Tabs>

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{PythonSDKCreateConcepts}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeJSAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAddConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddConcepts}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Raw Output Example</summary>
    <CodeBlock className="language-js">{JSONOutputExample1}</CodeBlock>
</details>
