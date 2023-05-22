---
description: How to create a Clarifai Application
sidebar_position: 1
---

# Create an Application

**How to create a Clarifai application**
<hr />

## Create an Application on the Portal

To create an application, [log in](https://clarifai.com/login) to your account and click the **Create an App** button at the upper-right section of the navigation bar.

And on the small window that pops up, provide the information required to create a new application.

![application creation window](/img/create-new-app-new.png)

### ID Validation

Application names and other names in the Portal must follow a few rules. 

- Names must be 1 to 32 letters or numbers in length, with hyphens or underscores as separators
- Spaces, periods, etc., are not allowed as separators

### Default Language

You can also set the default language so that you can create, train, and search concepts in your own language. Please keep in mind that pre-trained model concepts currently only work in English.

## Copy Applications

You can also create an application by cloning an existing application. Cloning an existing application can be a great way to start a new project, or branch an existing one. We’ve made cloning easy with a simple interface in the Portal. 

Go to the apps listing page and click the series of dots at the bottom-right corner of the app you want to copy its contents. Then, select the "Duplicate" option on the list that drops down. 

![](/img/app_duplication.png)


## Create Applications Programmatically

For enterprise customers, it is also possible to generate applications programmatically. 

If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create apps this way. This ensures that each individual user only has access to their own private resources.

:::tip

You need to use a [Personal Access Token (PAT)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) to create an application. 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL">

```text
curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/" \
--header "Content-Type: application/json" \
--header "Authorization: Key YOUR_PAT_HERE" \
--data-raw '{
    "apps": [
        {
            "id": "test-application"
        }
    ]
}'
```

</TabItem>
</Tabs>


