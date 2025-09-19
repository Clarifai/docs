---
description: Authenticate access to resources within the scope defined by the key
sidebar_position: 2
---

# App-Specific API Keys

**Authenticate access to resources within the scope defined by the key**
<hr />


App-specific API Keys are used to authorize access to your Clarifai applications. You can use an API Key to access the resources within the scope of the app defined by that key.

A key is automatically generated when you create a new application. You can also create a new one, as described [below](#how-to-create-api-keys-on-the-platform). 

:::info

Each API Key is associated with a specific user and a specific app. It ties in `user_id` and `app_id`, causing only resources in that app to be usable.

:::

When using an app-specific API Key to make a request, you do not need to specify either the user ID or the application ID, as they are already part of the key.

An API Key allows you to have fine-grained control over the data exposed through your app. You can control the scope of your key through a simple checkbox interface displayed when you create a new key or edit a key. 

:::caution API Key Versus PAT

You cannot use an API Key to access models, model versions, workflows, or other resources that are not part of the app that the key is associated with. You need a [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) to do so. For example, to access any of Clarifai's resources, you need to use a PAT while specifying Clarifai's `user_id` and the `app_id` to which the resource belongs. 

:::

## How to Create API Keys on the Platform

In the collapsible left sidebar, select the **Projects** option. Then, choose the application you want to generate an API key for.

![App settings create key](/img/others/create_api_key_select_app.png)

You'll be redirected to the application's individual page. Select the **Settings** option in the app's collapsible left sidebar.

Next, on the **App Settings** page, within the **API Keys** section, click the **Create API Key** button. 

![App settings create key](/img/others/create_api_key_community.png)

Then, use the form that pops up to generate a new key for your application — provide a short description, select the [scopes](https://docs.clarifai.com/control/authentication/scopes), and click the **Create API Key** button. 

![App key create form](/img/others/create_api_key_community_form.png)

The new key will be listed in the **API Keys** section, where you can copy it to the clipboard, edit it, or delete it.

![copy, edit, delete api key](/img/others/create_api_key_community_2.png)

## How to Create API Keys Programmatically

For enterprise users, it is also possible to generate keys programmatically. 

If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create keys this way. This ensures that each individual user only has access to their own private resources.

:::note

You need to use a [Personal Access Token (PAT)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) to create an API Key. 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonKey from "!!raw-loader!../../../code_snippets/api-guide/authentication/key.py";
import CurlKey from "!!raw-loader!../../../code_snippets/api-guide/authentication/key.sh";

<Tabs groupId="code">
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

:::note

- API Keys do not expire. In case your key gets compromised, you should delete it, and create a new one with the same scopes.
- We recommend that you do **not** share your API Key with other users.

:::

## How to Use an API Key Example

Here is an example of how to use an API Key to make a prediction request from your own model.

Note that your `user_id` and `app_id` are already tied to the key, so no need to specify them.

:::tip Set API Key as an Environment Variable

It's a good practice to load your API Key from an environment variable. Keeping your key in a secrets manager, and not in the source code, improves its security and management. 

:::

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
     <CodeBlock className="language-python">{PythonKey}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlKey}</CodeBlock>
</TabItem>
</Tabs>
