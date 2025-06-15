---
description: Learn how to create a Clarifai App
sidebar_position: 1
---

# Apps Creation

**Learn how to create a Clarifai application**
<hr />

As mentioned previously, [an app](https://docs.clarifai.com/create-manage/applications/) on the Clarifai platform acts as a central repository for models, datasets, inputs, and other resources. 

## **Create via the UI**

To create an app, [log in](https://clarifai.com/login) to your account and click the **Create** button at the upper-right section of the navigation bar.

![create app portal](/img/others/create-new-app-new-1.png)

And on the window that pops up, select the **Start with a Blank App** option to create a new application from scratch.


:::tip

You can also select the **Use an App Template** option to [use a template](https://docs.clarifai.com/clarifai-basics/app-templates) to create a new application. 

:::

![application creation window](/img/create-new-app-new.png)

Next, on the window that appears, provide the information required to create a new application.

![](/img/others/create-new-app-new-2.png)

- **App ID** — This serves as a unique identifier for your application. It’s important to choose a unique and memorable ID as it will be used for URLs and redirections.

- **Short Description** — Optionally, provide a brief description that outlines the purpose or features of your app.

- **Primary Input Type** — Select the primary type of inputs that will be available in your app: either images/videos or texts/documents.

- **Advanced Settings** — This collapsible field allows you to choose the [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) for your app. Base workflows index your data and furnish your app with a default knowledge base. While a base workflow is automatically selected based on your primary input type, you can choose another one that best suits your specific use case.

:::note ID Validation

Application names and other names in the Portal must follow a few rules:

- Names must be 1 to 32 letters or numbers in length, with hyphens or underscores as separators.
- Spaces, periods, etc., are not allowed as separators.

:::

Lastly, click the **Create App** button at the upper-right corner of the page.

<!--
### Default Language
You can also set the default language so that you can create, train, and search concepts in your own language. Please keep in mind that pre-trained model concepts currently only work in English.
-->

### Copy (Duplicate) Apps

You can also create an app by cloning an existing application. Cloning an existing application can be a great way to start a new project, or branch an existing one. We’ve made cloning easy with a simple interface in the Portal. 

After logging in to your Clarifai account, select the **My Apps** option on the navigation bar. Then, select the **Apps / Templates** option on the menu bar, and a list of your apps will populate that page. 

Click the series of dots at the bottom-right corner of the app you want to copy its contents. Then, select the **Duplicate** option on the list that drops down. 

![](/img/app_duplication.png)


The small window that pops up lets you select the destination user or organization, along with the destination app. You can copy the app as a new one or select an existing app. Additionally, you can specify particular resources you wish to duplicate.

![](/img/others/app_duplication-1.png)

Lastly, click the **Confirm** button, and the copied app will be automatically created for you. 


## **Create via the API**

For enterprise customers, it is possible to generate applications programmatically. Note that you need to use a [Personal Access Token (PAT)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) to create an application. 

### Create App With Default Base Workflow

[The base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) acts as the default knowledge base for your app and provides the basic structure for indexing your data. 

If you create an application without specifying the base workflow, a default one will be automatically created for you.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodeCreateApp from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/create_app.py";
import CodeCreateAppTS from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/createApp.ts";
import CodeCreateAppBase from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/create_app_base_workflow.py";

import CodeOutputCreateApp from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/outputs/create_app.txt";


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCreateApp}</CodeBlock> 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeCreateAppTS}</CodeBlock>
</TabItem>
<TabItem value="curl" label="cURL">

```javascript
curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/" \
--header "Content-Type: application/json" \
--header "Authorization: Key YOUR_PAT_HERE" \
--data-raw '{
    "apps": [
        {
            "id": "test-app"
        }
    ]
}'
```

</TabItem>
</Tabs>

<details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateApp}</CodeBlock>
</details>



### Create App With Different Base Workflow

You can create an app with a different base workflow. You can choose from a range of available base workflows, including **Empty**, **Universal**, **Language Understanding**, and **General**. 

This enables you to seamlessly integrate and customize the fundamental structure of your app, ensuring it aligns perfectly with your project requirements.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCreateAppBase}</CodeBlock>
</TabItem>
</Tabs>

