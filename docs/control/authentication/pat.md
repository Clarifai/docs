---
description: Authenticate access to your own resources and those outside the scope of your apps
sidebar_position: 1
---

# Personal Access Tokens

**Authenticate access to your own resources and those outside the scope of your apps**
<hr />

A Personal Access Token \(usually shortened as PAT\) is a kind of key that authenticates a user across all applications they have access to. It's not linked to a specific application.

A PAT represents you when accessing the Clarifai API. It's a powerful way of accessing your resources within the Clarifai platform. 

You can use PATs to accomplish the following:

- Access multiple apps with a single key. This lets you access your own apps as well as any other apps you have permissions to use, such as public apps, apps where you're added as a collaborator, or apps belonging to your organization's team.
- Create apps and app-specific keys programmatically through the API. This is crucial for programs that segregate the data of each of their end-users into different apps.


:::info

- PAT is the primary authentication mechanism we use.  
- When using a PAT, you need to specify the **user ID** alongside the **application ID** of the owner of the resource you want to access — be it your own or for another user. If accessing your own resources, you specify your own `user_id` and `app_id`; if you don't own them, specify the owner's `user_id` and `app_id`. 

:::

:::caution PAT Versus API Key

A PAT allows you to make inferences on resources that are outside the scope of your apps. [An API Key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) only allows you to access resources scoped to the app defined by that key. So, you can use an API Key to access your own resources, but not Clarifai's or other public resources. 

:::

## How to Create a PAT on the Platform

A default PAT is automatically generated for you when you create an account on the Clarifai platform. Nonetheless, you can also create a new PAT explicitly on the platform. 

To create it, [log in](https://clarifai.com/login) to the platform, navigate to the upper-right section of the navigation bar, and click your user’s profile icon.

Select the **Security** settings option in the drop-down list.

![Create new PAT on Community](/img/others/create_pat_community.png)

On the ensuing **Security** page, click the **Create Personal Access Token** button.  

![Account security settings](/img/others/account_security_settings.png)

On the form that pops up, provide a short token description, set the scopes you want to apply, and click the **Confirm** button.

![create pat](/img/others/pat_dialog_box.png)

You can find the new PAT listed on the **Personal Access Token** section, where you can copy it to the clipboard, edit it, or delete it. 

![listed pat](/img/others/pat_section_1.png)

:::note

- PATs do not expire. In case your PAT gets compromised, you should delete it, and create a new one with the same scopes.
- We recommend that you do **not** share your PAT with other users.

:::

## How to Use a PAT Example

Here is an example of how to use a PAT to make a prediction request from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. 

Note that you need to specify the resource owner's `user_id` and `app_id` in the `UserAppIDSet`, if making a gRPC call, or in the URL, if making a REST call. 

:::tip Set PAT as an Environment Variable

It's a good practice to load your PAT from an environment variable. Keeping your PAT in a secrets manager, and not in the source code, improves its security and management. 

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonPat from "!!raw-loader!../../../code_snippets/api-guide/authentication/pat.py";
import CurlPat from "!!raw-loader!../../../code_snippets/api-guide/authentication/pat.sh";

<Tabs>
<TabItem value="python" label="Python (gRPC)">
     <CodeBlock className="language-python">{PythonPat}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPat}</CodeBlock>
</TabItem>
</Tabs>