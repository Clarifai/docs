---
sidebar_position: 2
---

# App-Specific API Keys

**Authenticate access to Clarifai apps**
<hr />


App-specific API Keys are used to authorize access to your Clarifai applications. A key is automatically generated when you create a new application.

You can also go to the [Application's List](https://portal.clarifai.com/) on the Portal, select an app of your choice, and create a new key in the app details page. 

:::important note

Each API Key is tied to a specific user and a specific app

:::

An API Key allows you to have fine-grained control over the data exposed through your app. You can control the scope of your API Key through a simple checkbox interface displayed when you create a new key or edit a key. 

## Create API Keys in the Portal

Just navigate to your app's management page and click the "Create new API key" button. Then, use the form that pops up to generate a new API Key for your application. 

![](/img/apikey-screen.png)

## Create API Keys Programmatically

For enterprise customers, it is also possible to generate keys programmatically. 

If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create keys this way. This ensures that each individual user only has access to their own private resources.

:::tip

You need to use a [Personal Access Token (PAT)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) to create an API Key. 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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


