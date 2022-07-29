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

For enterprise customers, it is also possible to generate applications and keys programmatically. 

If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create apps and keys this way. This ensures that each individual user only has access to their own private resources.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cURL" label="cURL" default>

```bash
curl --location --request POST 'https://api.clarifai.com/v2/users/{{user_id}}/keys' \
--header 'Content-Type: application/json' \
--header 'X-Clarifai-Session-Token: {{session_token}}' \
--data-raw '{
    "keys": [
        {
            "description": "All permissions",
            "scopes": [
                "All"
            ],
            "apps": [
                {
                    "id": "{{app_id}}",
                    "user_id": "{{user_id}}"
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


