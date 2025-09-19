---
description: Learn how to create a Clarifai App
sidebar_position: 1
---

# Apps Creation

**Learn how to create a Clarifai application**
<hr />

[As mentioned previously](README.mdx), an app on the Clarifai platform acts as a central repository for models, datasets, inputs, and other resources. 

## **Create via the UI**

To create an app, start by [logging in to](https://clarifai.com/login) to your account.

Next, click the plus (**+**) button in the upper-right corner of the Clarifai platform dashboard. A dropdown menu will appear with several options. From the list, select **New Application**.

![create app portal](/img/others/create-new-app-new-1.png)

> **Alternatively:** _Open the collapsible left sidebar and select **Projects**. From the dropdown that appears, choose **Select Application** to open a panel displaying a searchable list of your existing applications. Scroll to the bottom of this list and click the **Create new Application** option, marked with a **+** icon._
> _![create app portal](/img/others/alternate-create-new-app-new.png)_

Next, on the window that pops up, select the **Start with a Blank App** option to create a new application from scratch.

![application creation window](/img/create-new-app-new.png)

> **Tip:** You can also select the **Use an App Template** option to [use a template](https://docs.clarifai.com/clarifai-basics/app-templates) to create a new application. 

Next, on the window that appears, provide the information required to create a new application.

![](/img/others/create-new-app-new-2.png)

- **Owner** — Choose the owner to associate with the app. By default, this is set to your personal account, but you can also select an organization you belong to, provided you have the necessary [permissions](https://docs.clarifai.com/control/clarifai-organizations/security#scopes-and-access-levels-of-organization-members) to create apps within it.

- **App ID** — This serves as a unique identifier for your application. It’s important to choose a unique and memorable ID as it will be used for URLs and redirections.

- **Short Description** — Optionally, provide a brief description that outlines the purpose or features of your app.

- **Primary Input Type** — Select the primary type of inputs that will be available in your app: either images/videos or texts/documents.

- **Advanced Settings** — This collapsible field allows you to choose the [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) for your app. Base workflows index your data and furnish your app with a default knowledge base. While a base workflow is automatically selected based on your primary input type, you can choose another one that best suits your specific use case.

:::note ID Validation

Application names and other names in our platform must follow a few rules:
- Names must be 1 to 32 letters or numbers in length, with hyphens or underscores as separators.
- Spaces, periods, etc., are not allowed as separators.

:::

Lastly, click the **Create App** button in the upper-right corner to finalize and create your application.


### Copy (Duplicate) Apps

You can also create a new app by cloning an existing one. Cloning is a convenient way to start a new project using an established setup or to branch off from an existing application. 

To do so, open the collapsible left sidebar, select **Projects**, and then choose **All Resources** from the dropdown list. This will take you to a page that displays all the resources you own, with the **Apps / Templates** tab selected by default. 

From there, locate the app you want to clone. Click the three dots in the bottom-right corner of the app card, and from the dropdown menu, select **Duplicate** to copy its contents into a new application.

![](/img/app_duplication.png)

> **Note:** The dropdown menu also allows you to copy the app ID or delete the app.

Next, a pop-up window will appear where you can choose the destination user or organization, as well as the target application. You can either create a new app as the destination or copy the contents into an existing app. The window also allows you to specify which resources you want to duplicate.

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

