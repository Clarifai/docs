---
description: How to create a Clarifai Application
sidebar_position: 1
---

# Create an Application

**How to create a Clarifai application**
<hr />

## Create Application in Portal

To create an application, head to the [Portal](https://portal.clarifai.com/) and press the 'Create Application' button. 

![Application creation window](/img/create-new-app-new.png)

### ID Validation

Application names and other names in the Portal must follow a few rules. Names must be 1 to 32 letters or numbers in length, with hyphens or underscores as separators. Note that spaces, periods, etc are not allowed as separators. 


You can also set the default language so that you can create, train and search concepts in your own language. Please keep in mind that pre-trained model concepts currently only work in English.


## Create Applications Programmatically

For enterprise customers, it is also possible to generate applications and keys programmatically. If you are managing the work of multiple users, who's data, models, and concepts need to be segregated, we recommend you create apps and keys this way. This ensures that each individual user only has access to their own private resources.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```text
curl --location --request POST 'https://api.clarifai.com/v2/users/{{user_id}}/apps/' \
--header 'Content-Type: application/json' \
--header 'X-Clarifai-Session-Token: {{session_token}}' \
--data-raw '{
    "apps": [
        {
            "id": "test-application-1589318146"
        }
    ]
}'
```

</TabItem>
</Tabs>

### Copy Applications

You can also create an application by cloning an existing application. Cloning an existing application can be a great way to start a new project, or branch and existing one. We’ve made cloning easy with a simple interface in the Portal. Just click “Create Copy” on the bottom-right corner of your app on the app management page.

![](/img/app_duplication.jpg)

