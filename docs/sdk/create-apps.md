---
sidebar_position: 4
---




import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeCreateApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/create_app.py";
import CodeCreateAppTS from "!!raw-loader!../../code_snippets/python-sdk/create-apps/createApp.ts";

import CodeCreateAppBase from "!!raw-loader!../../code_snippets/python-sdk/create-apps/create_app_base_workflow.py";
import CodeListApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/list_apps.py";
import CodeListAppTS from "!!raw-loader!../../code_snippets/python-sdk/create-apps/listingApps.ts";

import CodeDeleteApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/delete_app.py";
import CodeDeleteAppTS from "!!raw-loader!../../code_snippets/python-sdk/create-apps/deleteApp.ts";

import CodeCreateConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/create_concept.py";
import CodeCreateConceptTS from "!!raw-loader!../../code_snippets/python-sdk/create-apps/createConcept.ts";

import CodeListConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/list_concept.py";
import CodeListConceptTS from "!!raw-loader!../../code_snippets/python-sdk/create-apps/listConcept.ts";



import CodeOutputCreateApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/create_app.txt";
import CodeOutputCreateAppBase from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/create_app_base_workflow.txt";
import CodeOutputListApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/list_apps.txt";
import CodeOutputDeleteApp from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/delete_app.txt";
import CodeOutputCreateConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/create_concept.txt";
import CodeOutputListConcept from "!!raw-loader!../../code_snippets/python-sdk/create-apps/outputs/list_concept.txt";



# Creating your AI Apps

**Learn how to interact with apps using Clarifai SDKs**
<hr />

Unlock the power of artificial intelligence by seamlessly integrating Clarifai SDKs into your application development process. With the Clarifai SDKs, creating intelligent and visually aware applications has never been more accessible. Empower your apps with cutting-edge AI capabilities, from image and video recognition to natural language processing. Our SDKs provides a user-friendly interface, allowing developers to harness the full potential of Clarifai's state-of-the-art models effortlessly.


## Create App

Leverage the Clarifai SDKs to seamlessly generate a new application, complete with a distinct and unique app ID. The API empowers you to effortlessly create apps tailored to your specific requirements, unlocking the potential for innovative and personalized experiences.

Visit this [page](https://docs.clarifai.com/clarifai-basics/applications/) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCreateApp}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateApp}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeCreateAppTS}</CodeBlock>
</TabItem>
</Tabs>




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

The Clarifai SDKs provides a convenient API to retrieve a list of all the apps available in your account. The list_apps function is a powerful tool that not only fetches the information but also supports essential features such as pagination for optimal data display.The use of parameters like `page_no` and `per_page` empowers you to customize the retrieval process based on your specific requirements.

Visit this [page](https://docs.clarifai.com/api-guide/advanced-topics/pagination) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeListApp}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputListApp}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-python">{CodeListAppTS}</CodeBlock>
</TabItem>
</Tabs>




## Delete App

In the Clarifai SDKs, the "Delete App" functionality empowers users to seamlessly remove an app from their account by specifying the unique App ID. This API-driven approach simplifies the app management process, allowing for efficient deletion of redundant or unused applications.

:::caution

Be certain that you want to delete a particular app as the operation cannot be undone.

:::



<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDeleteApp}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputDeleteApp}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-python">{CodeDeleteAppTS}</CodeBlock>
</TabItem>
</Tabs>



                                                                                                        
## Create Concept

With the Clarifai SDKs, you have the capability to effortlessly create concepts by uploading input data to your app, accompanied by a specified label. This process automates the creation of concepts, streamlining the integration of new ideas or entities into your application.

Visit this [page](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) for more information.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeCreateConcept}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateConcept}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-python">{CodeCreateConceptTS}</CodeBlock>
</TabItem>
</Tabs>



                                      


## List concept 

The List Concepts feature in the Clarifai SDKs  empowers users to retrieve a comprehensive list of all available concepts within their application. With the list_concepts function, users can seamlessly navigate through large sets of concepts by leveraging built-in pagination functionalities. This enables efficient information display while providing flexibility through parameters such as `page_no` and items `per_page`.

Visit this [page](https://docs.clarifai.com/api-guide/advanced-topics/pagination) for more information.



<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeListConcept}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputListConcept}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-python">{CodeListConceptTS}</CodeBlock>
</TabItem>
</Tabs>



