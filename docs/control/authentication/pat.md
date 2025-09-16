---
description: Authenticate access to your own resources and those outside the scope of your apps
sidebar_position: 1
---

# Personal Access Tokens

**Authenticate access to your own resources and those outside the scope of your apps**
<hr />

A Personal Access Token \(usually shortened as PAT\) is a kind of key that authenticates your connection to the Clarifai platform. It's not linked to a specific application.

A PAT represents you when accessing the Clarifai API. It's a powerful way of accessing your resources within the Clarifai platform. 

You can use PATs to accomplish various tasks, including:

- Access multiple apps with a single key. This lets you access your own apps as well as any other apps you have permission to use, such as public apps, apps where you're added as a collaborator, or apps belonging to your organization's team.
- Create apps and app-specific keys programmatically through the API. This is crucial for programs that segregate the data of each of their end-users into different apps.


> _**Note:** PAT is the primary authentication mechanism we use.  For example, when using a PAT to access a resource, you need to specify the **user ID** alongside the **application ID** of the owner of the resource you want to access — be it your own or for another user. If accessing your own resources, you specify your own `user_id` and `app_id`; if you don't own them, specify the owner's `user_id` and `app_id`._


:::caution PAT Versus API Key

A PAT allows you to make inferences on resources that are outside the scope of your apps. [An API Key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) only allows you to access resources scoped to the app defined by that key. So, you can use an API Key to access your own resources, but not Clarifai's or other public resources. 

:::

## How to Create a PAT on the Platform

A default PAT is automatically generated for you when you create an account on the Clarifai platform. Nonetheless, you can also create a new PAT explicitly on the platform. 

To create it, [log in](https://clarifai.com/login) to the platform, go to the top-right corner of the navigation bar, and open the drop-down menu.

Then, in the collapsible left sidebar, select **Settings** and choose **Security** from the dropdown list.

![Create new PAT on Community](/img/others/create_pat_community.png)

> **Note:** On the **Security** page, you can update the password used to access your Clarifai account by entering your current password and a new one, or by generating a new password automatically.

On the ensuing **Security** page, click the **Create Personal Access Token** button.  

Next, on the form that pops up, provide a short token description, set the [scopes](https://docs.clarifai.com/control/authentication/scopes/) you want to apply, and click the **Create Personal Access Token** button.

![create pat](/img/others/pat_dialog_box.png)

The new PAT will be listed in the **Personal Access Token** section, where you can copy, view, edit, or delete it.

![listed pat](/img/others/pat_section_1.png)

:::tip note

- PATs do not expire. In case your PAT gets compromised, you should delete it, and create a new one with the same scopes.
- We recommend that you do **not** share your PAT with other users.

:::

## Set PAT as an Environment Variable

It’s recommended to load your PAT from an environment variable. Storing it this way, instead of hardcoding it in your code, enhances both security and manageability.

Here is how you can set it as an environment variable.

<Tabs groupId="code">
<TabItem value="bash" label="Unix-Like Systems">
    <CodeBlock className="language-bash"> export CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
<TabItem value="bash2" label="Windows">
    <CodeBlock className="language-bash"> set CLARIFAI_PAT=YOUR_PERSONAL_ACCESS_TOKEN_HERE </CodeBlock>
</TabItem>
</Tabs>

## Example

Here is an example of how to use a PAT to make a prediction request. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonPat from "!!raw-loader!../../../code_snippets/api-guide/authentication/pat.py";
import PythonSDKPat from "!!raw-loader!../../../code_snippets/api-guide/authentication/pat-sdk.py";
import CurlPat from "!!raw-loader!../../../code_snippets/api-guide/authentication/pat.sh";

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
     <CodeBlock className="language-python">{PythonSDKPat}</CodeBlock>
</TabItem>
<TabItem value="pythongrpc" label="Python (gRPC)">
     <CodeBlock className="language-python">{PythonPat}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPat}</CodeBlock>
</TabItem>
</Tabs>