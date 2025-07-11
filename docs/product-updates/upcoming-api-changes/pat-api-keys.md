---
description: Learn about breaking changes to the use of PATs and API keys
# For positioning, we use negative position so that the oldest announcements are displayed at the bottom. Any time you add a new announcement, increase the position by -1.
sidebar_position: -8
---

# Changes to Use of PATs and API Keys

**Learn about breaking changes to the use of PATs and API keys**
<hr />

## Change

- **Type of Change** — Important [breaking change](https://docs.clarifai.com/product-updates/changelog/release-types#release-types) regarding the use of PATs and API keys.

- **Implementation Date** — June 11th, 2025

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

:::info TL;DR

Previously, you could access Clarifai models like this:

```bash
curl -X POST "clarifai.com/api/_api/v2/users/$YOUR_USER_ID/apps/$YOUR_APP_ID/models/general-image-recognition/outputs" \
-H "Authorization: Key $YOUR_API_KEY" \
# ... (rest of your request)
```

The above method will now fail.

You must now specify Clarifai’s user and app ID instead of your own, and authenticate using a PAT instead of an API key.

```bash
curl -X POST "clarifai.com/api/_api/v2/users/clarifai/apps/main/models/general-image-recognition/outputs" \
-H "Authorization: Key $YOUR_PAT_TOKEN" \
# ... (rest of your request)
```

:::

## Details

An upcoming release of Clarifai’s API, **11.6**, will significantly change how [Personal Access Tokens (PATs)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens/) and [API keys](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys/) work. We plan to implement this change on June 11th, 2025, providing sufficient notice to change the way your applications authenticate on our platform.  

#### Terminology

If any of the terms used here are unfamiliar, you can check them in our [glossary](https://docs.clarifai.com/clarifai-basics/glossary). Specifically, we mention [models](https://docs.clarifai.com/clarifai-basics/glossary/#model), [workflows](https://docs.clarifai.com/clarifai-basics/glossary/#workflows), [public](https://docs.clarifai.com/clarifai-basics/glossary/#public), [private](https://docs.clarifai.com/clarifai-basics/glossary/#private), [collaboration](https://docs.clarifai.com/clarifai-basics/glossary/#collaboration), [organization](https://docs.clarifai.com/clarifai-basics/glossary/#organization), and [community](https://docs.clarifai.com/clarifai-basics/glossary/#community).

#### Why we are making this change

With PATs you can access resources for which you’re a collaborator or teammate. You can also access public content shared by any user, in addition to all your private content across all of your apps. This simplifies the use of all the resources you have access to unlike using API keys that are restricted to a single application. PAT provides a consistent, secure, and robust authentication method. Finally, for Enterprise clients, Org functionality is PAT only and this change creates a consistent method of authentication across the platform.

#### What is changing

Previously, you could use API keys to access any model, concept, or workflow owned by the app scoped to the API key, as well as those owned by the user `clarifai` in the application `main`. Now, accessing models or workflows owned by `clarifai` in the application `main` can only be done with a PAT tied to your account. 

To be specific:

- You must now use PATs to make API calls for resources that are outside the scope of your apps, such as Clarifai’s models and workflows. While using a PAT, you must also specify the `USER_ID` of the application owner, and the `APP_ID` of the application that you’re accessing. The legacy behavior allowed you to use the `USER_ID` and `APP_ID` of any application on the platform to access Clarifai models and workflows in the app "main". This change requires you to specify the `USER_ID` (clarifai) and `APP_ID` (main) associated with the application containing the resource (model, concept, workflow, etc).

- You will no longer be able to use API keys to access resources outside the application the API key is created in. With a key, there is no need to specify the user_id or the app_id as they are already part of the key. API keys will function as normal when accessing resources within the application the key is created in, but will no longer allow access to resources owned by the user `clarifai` in the application `main`.

- Since workflows are a collection of models, some of which may be references to models that are not in the same application as the workflow itself, you should also use PATs to interact with workflows. While API keys will still work for the time being for workflows in the same app as the API key that contains only models from that same app, this will be a very narrow use of workflows. Therefore, we recommend updating your code to use PATs when using workflows too.

- The preferred method for accessing the Clarifai API moving forward is with a PAT. To avoid potential future breakage we recommend using a PAT. Of course, we will provide prior notice if additional behavior is going to change for API keys.

We hope and expect that this will not be a significant change for you. In order to implement it, you will need to ensure that you set the `PAT`, `USER_ID`, and `APP_ID` variables appropriately. There are examples using all of our supported languages on [this page](https://docs.clarifai.com/api-guide/predict/images), and we are available at any time if you need assistance or have any questions.

The best place to contact us for support questions is our [Discord Server](https://discord.gg/WgUvPK4pVD), which is monitored by many of our support teams and is the fastest way to get help.

We do apologize for any inconvenience this causes; however, we are confident that this is a positive change that will simplify the usage of the platform going forward and make it easier to leverage AI created by other people on our platform!

Thank you for your understanding and please feel free to reach out for any help.
