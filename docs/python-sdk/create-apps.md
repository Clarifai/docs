---
sidebar_position: 3
---




import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeCreateApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/create_app.py";
import CodeCreateAppBase from "!!raw-loader!../../code_snippets/python-sdk/create-apps/create_app_base_workflow.py";
import CodeListApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/list_apps.py";
import CodeDeleteApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/delete_app.py";
import CodeCreateConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/create_concept.py";
import CodeListConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/list_concept.py";



import CodeOutputCreateApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/create_app.txt";
import CodeOutputCreateAppBase from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/create_app_base_workflow.txt";
import CodeOutputListApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/list_apps.txt";
import CodeOutputDeleteApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/delete_app.txt";
import CodeOutputCreateConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/create_concept.txt";
import CodeOutputListConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/list_concept.txt";



# Creating your AI Apps

**Learn how to interact with apps using Clarifai Python SDK**
<hr />

Unlock the power of artificial intelligence by seamlessly integrating Clarifai's Python SDK into your application development process. With the Clarifai Python SDK, creating intelligent and visually aware applications has never been more accessible. Empower your apps with cutting-edge AI capabilities, from image and video recognition to natural language processing. Our Python SDK provides a user-friendly interface, allowing developers to harness the full potential of Clarifai's state-of-the-art models effortlessly.


## Create App

Leverage the Clarifai Python SDK to seamlessly generate a new application, complete with a distinct and unique app ID. The API empowers you to effortlessly create apps tailored to your specific requirements, unlocking the potential for innovative and personalized experiences. Dive into the simplicity of app creation with the Clarifai Python SDK

Visit this [page](https://docs.clarifai.com/clarifai-basics/applications/) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCreateApp}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateApp}</CodeBlock>
</details>


## Create an app with different base workflow

The API empowers you to establish an app with distinct base workflows, offering flexibility and adaptability. Choose from a range of available base workflows including Empty, Universal, Language Understanding, and General. This enables you to seamlessly integrate and customize the fundamental structure of your app, ensuring it aligns perfectly with your project requirements.

Visit this [page](https://docs.clarifai.com/clarifai-basics/applications/application-settings) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCreateAppBase}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateAppBase}</CodeBlock>
</details>


## Listing Apps

The Clarifai Python SDK provides a convenient API to retrieve a list of all the apps available in your account. The list_apps function is a powerful tool that not only fetches the information but also supports essential features such as pagination for optimal data display.The use of parameters like `page_no` and `per_page` empowers you to customize the retrieval process based on your specific requirements.

Visit this [page](https://docs.clarifai.com/api-guide/advanced-topics/pagination) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeListApp}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputListApp}</CodeBlock>
</details>


## Delete App

In the Clarifai Python SDK, the "Delete App" functionality empowers users to seamlessly remove an app from their account by specifying the unique App ID. This API-driven approach simplifies the app management process, allowing for efficient deletion of redundant or unused applications.

:::caution

Be certain that you want to delete a particular app as the operation cannot be undone.

:::



<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDeleteApp}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputDeleteApp}</CodeBlock>
</details>

                                                                                                        
## Create Concept

With the Clarifai Python SDK, you have the capability to effortlessly create concepts by uploading input data to your app, accompanied by a specified label. This process automates the creation of concepts, streamlining the integration of new ideas or entities into your application.

Visit this [page](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCreateConcept}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateConcept}</CodeBlock>
</details>

                                      


## List concept 

The List Concepts feature in the Clarifai Python SDK empowers users to retrieve a comprehensive list of all available concepts within their application. With the list_concepts function, users can seamlessly navigate through large sets of concepts by leveraging built-in pagination functionalities. This enables efficient information display while providing flexibility through parameters such as `page_no` and items `per_page`.

Visit this [page](https://docs.clarifai.com/api-guide/advanced-topics/pagination) for more information.



<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeListConcept}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputListConcept}</CodeBlock>
</details>

