---
description: Authenticate access to your own Clarifai apps
sidebar_position: 2
---

# App-Specific API Keys

**Authenticate access to resources within the scope defined by the key**
<hr />


App-specific API Keys are used to authorize access to your Clarifai applications. You can use an API Key to access the resources within the scope of the app defined by that key.

A key is automatically generated when you create a new application. You can also go to the [Application's List](https://portal.clarifai.com/) on the Portal, select an app of your choice, and create a new key on the app details page. 

:::info

Each API Key is associated with a specific user and a specific app. It ties in `user_id` and `app_id`, causing only resources in that app to be usable.

:::

When using an app-specific API Key to make a request, you do not need to specify either the user ID or the application ID, as they are already part of the API Key.

An API Key allows you to have fine-grained control over the data exposed through your app. You can control the scope of your API Key through a simple checkbox interface displayed when you create a new key or edit a key. 

:::tip

You cannot use an API key to access models, model versions, workflows, and other resources that are not part of the app that the API key is associated with. You need a [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) to do so. For example, to access any of Clarifai's resources, you need to use a PAT while specifying Clarifai's `user_id` and the `app_id` to which the resource belongs. 

:::

## How to Create API Keys on the Portal

Navigate to your application's individual page and select the **Settings** option on the collapsible left sidebar.

You'll be redirected to the **App Settings** page.

Within the **API Keys** section, click the **Create API Key** button. 

![App settings create key](/img/others/create_api_key_community.png)

Then, use the form that pops up to generate a new API key for your application—provide a short description, select the scopes, and click the **Confirm** button. 

![App key create form](/img/others/create_api_key_community_form.png)

The new key will be listed in the **API Keys** section, where you can copy it to the clipboard, edit it, or delete it.

![copy, edit, delete api key](/img/others/create_api_key_community_2.png)

## How to Create API Keys Programmatically

For enterprise users, it is also possible to generate keys programmatically. 

If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create keys this way. This ensures that each individual user only has access to their own private resources.

:::tip

You need to use a [Personal Access Token (PAT)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) to create an API Key. 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonKey from "!!raw-loader!../../../code_snippets/api-guide/authentication/key.py";
import CurlKey from "!!raw-loader!../../../code_snippets/api-guide/authentication/key.sh";

<Tabs>
<TabItem value="cURL" label="cURL" default>

```bash
curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/keys" \
--header "Content-Type: application/json" \
--header "Authorization: Key YOUR_PAT_HERE" \
--data-raw '{
    "keys": [
        {
            "description": "All permissions",
            "scopes": [
                "All"
            ],
            "apps": [
                {
                    "id": "YOUR_APP_ID_HERE",
                    "user_id": "YOUR_USER_ID_HERE"
                }
            ]
        }
    ]
}'
```
</TabItem>
</Tabs>

:::caution

- API Keys do not expire. In case your API Key gets compromised, you should delete that key, and create a new one with the same scopes.

- We recommend that you do **not** share your API Key with other users.

:::

## How to Use an API Key Example

Here is an example of how to use an API Key to make a prediction request from your own model. Note that your `user_id` and `app_id` are already tied to the key, so no need to specify them.

<Tabs>
<TabItem value="python" label="Python">
     <CodeBlock className="language-python">{PythonKey}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlKey}</CodeBlock>
</TabItem>
</Tabs>
