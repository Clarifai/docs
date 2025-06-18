---
description: Learn how to manage your Clarifai applications
sidebar_position: 2
toc_max_heading_level: 4
---

# Apps Management

**Learn how to manage your Clarifai applications**
<hr />

## **Manage via the UI**

### App Overview

The App Overview page gives a glimpse of your app and its purpose. To access it, go to your application's individual page and select the **Overview** option on the collapsible left sidebar.

You'll be redirected to a page that gives an overview of the contents of your app. 

![app overview](/img/app_overview_page.png)

You can accomplish various tasks on that page. 

-   Click the pencil icon next to the app ID to change it. 
-	Click the **Edit Visibility** button at the upper-right corner to edit the visibility of your app to either public or private.
-	Click the star icon at the upper-right corner to highlight your app. This marks it as a favorite and makes it easier to access among other listed apps. 
-	Click the three dots at the upper-right corner to reveal a drop-down list that lets you duplicate the app, copy its ID, or delete it.
-	View the number of each type of resource contained in your app—inputs, datasets, models, workflows, and modules. If the number is large and has been truncated in the display, click on the tooltip (?) to reveal the precise count of the resource.   
- Click the plus icon (**+**) within any resource type section to add the resource to your app. If you click the button, you’ll be redirected to a subsequent page that allows you to add the resource you want. 
- Click the "view" link within any resource type section to view all the respective resources available in your app.
-	Add notes that describe what your app is about. 
-	Upload a cover image and use it as a reference for the app. 
-	Edit the app’s description.
-	View the app’s base workflow, last updated date, and default language.
-	Copy the app's URL and share it across various platforms and social media channels for wider visibility and reach.
-	View the types of models contained in the app.
-	View and edit the [collaborators](#add-collaborators) associated with the app. 

### App Settings

You can change the settings of an application at any time. To do so, go to the application's individual page and select the **Settings** option on the collapsible left sidebar.

You'll be redirected to the **Settings** page, where you can change the application's settings.

![app settings](/img/edit_application.jpg)

Let's talk about the changes you can make on the page.

:::note

This page has intuitive elements that let you search for specific items and sort displayed items based on your preferences. 

:::

#### API Keys

##### Create API Keys

Click the **Create API Key** button to add a new API key to your app. Then, use the form that pops up to generate a new API key — provide a short description, select the scopes, and click the **Confirm** button. 

![api keys](/img/application_settings_1.png)

The new [app-specific key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) will be listed in the **API Keys** section, where you can carry out various management tasks on it. 

##### Copy an API Key

You can copy an API key to the clipboard by clicking the copy button.

![copy an api key](/img/application_settings_2.png)

##### Show an API Key

You can reveal an API key by clicking the show button. You can also hide it by clicking the same button. 

![show api key](/img/application_settings_3.png)

##### Edit an API Key

You can edit an API key by clicking the edit button. A form will pop up that allows you to update the description and scopes of your API key. 

![edit an api key](/img/application_settings_4.png)

##### Delete an API Key

You can delete an API key by clicking the delete button.

![delete an api key](/img/application_settings_5.png)

#### Collaborators

Collaboration is a functionality that allows you to share your apps so that you can work with your team members to label data, create models, and more. With this feature, you can control the permissions available in your apps and manage the capabilities available to each user. 

For example, you can give a trusted collaborator full access privileges. You can also invite a worker and grant them limited permissions, such as only to annotate data but not to delete them.

##### Add Collaborators

To add a collaborator to your app, click the **Add Collaborators** button in the **Collaborators** section. A form will appear that allows you to invite a collaborator. 

Enter the email address associated with the collaborator’s Clarifai account and specify the scope of resources you want them to access. 

Lastly, click the **Confirm** button. The invited collaborator will receive an email notification informing them that they have been added to the app.

:::note

- The collaborator you want to invite must have a registered account on the Clarifai portal. 

- [Personal Access Tokens (PATs)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) are automatically generated for collaborators, providing them access to the Clarifai API.

- Collaborators can also invite other collaborators.

:::

![add a collaborator](/img/application_settings_6.png)


> _Alternatively, you can add a collaborator directly from the **App Overview** page._ 

> _![](/img/others-2/app-collaboration-1.png)_

> _In the upper-right corner of the **App Overview** page, click the add collaborator button. Next, use the form that pops up to invite a collaborator — provide an email address associated with their Clarifai account, select their scopes, and click the **Confirm** button._


:::info Choose Scopes

You can select specific scopes when adding a collaborator. Modifying these scopes provides fine-grained control over the data that users can access, enhancing your app's security and preventing unauthorized intrusions.

In the **Add Collaborator** form, you can click the **Select All Scopes** button to choose all scopes at once. Alternatively, you can select individual scopes from the listed **BASIC SCOPES**, or click on the **ADVANCED SCOPES** option to access more advanced choices.

You can edit a collaborator's scopes at a later time.

These are the basic scopes you can choose:

```text
Annotation: Add and Remove Annotations on Inputs
Collaborator: Add, Remove and Patch Collaborators
Collector: Add, Remove and Patch Input Collectors
Concept: Add, Remove and Patch Concept
Input: Add and Remove Inputs to an App
Model: Add, Remove and Train Custom Models
Predict: Predict on Public and Custom Models
Search: Search over Inputs an App
Task: Add, Remove and Patch Scribe labeling Tasks
Vocab: Add, Remove and Delete lists of Concepts
Workflow: Add, Remove and Delete Workflows of Models
```

[Click here](https://docs.clarifai.com/clarifai-basics/authentication/scopes/) to learn more about scopes.

:::

##### Delete a Collaborator

You can remove a collaborator by clicking the delete button.

![delete a collaborator](/img/application_settings_7.png)

##### View Collaborations

You can easily access the apps where you've been added as a collaborator by selecting the **Collaborations** option in the top menu. This will take you to a page that lists all the apps you've been invited to collaborate on.

 ![](/img/others-2/view-collaborations.png)

#### Base Workflow

A base workflow is the workflow you choose as the default knowledge base when creating an application. It optimizes your custom model performance.

You can change your app's base workflow by selecting another one from the list that drops down when you click the workflows search box. You can choose public workflows or workflows you've created in your app. 

:::note

Updating the base workflow will re-index your app, processing all inputs through the new base workflow. This may take some time, and could incur costs. You could avoid the costs by deleting all your inputs before updating the base workflow.

:::

After selecting your preferred Base Workflow, click the **Change Base Workflow** button. 

![change base workflow](/img/application_settings_8.png) 

:::info

[Click here](https://docs.clarifai.com/portal-guide/workflows/base-workflows) to learn more about the base workflow functionality. 

:::

:::warning

Performing any of the actions below is dangerous. So, you need to proceed with caution. 

:::

#### Update Visibility

You can easily toggle your app's visibility between private and public modes by clicking the **Update Visibility** button.

![update visibility](/img/application_settings_update_visibility.png) 

#### Delete Application

You can delete the application by clicking the **Delete App** button. A small window will pop up, prompting you to confirm the action. 

![delete app](/img/application_settings_11.png)

:::warning

Remember that once you delete an application, we cannot recover it. You will also lose all images, concepts, models, and other resources associated with that application. 

:::

#### Delete all Models

You can delete all models by clicking the **Delete all Models** button. A small window will pop up, prompting you to confirm the action. 

![delete all models](/img/application_settings_10.png)

#### Transfer Application

You can transfer your application to an [organization](https://docs.clarifai.com/portal-guide/clarifai-organizations/) you belong to and have permission to create apps. This would greatly enhance collaboration and boost your productivity.

To do so, click the **Transfer** button. On the small window that pops up, select the app’s destination organization and give it a new name, if you want to.

Click the **Confirm** button to finalize the transfer.

![transfer application](/img/application_settings_9.png) 

The app will be successfully moved to the organization you selected, and it will no longer appear under your listed apps.

## **Manage via the API**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CodePatchApp from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/patch_app.py";

import CodeCreateAppBase from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/create_app_base_workflow.py";
import CodeListApp from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/list_apps.py";
import CodeListAppTS from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/listingApps.ts";

import CodeDeleteApp from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/delete_app.py";
import CodeDeleteAppTS from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/deleteApp.ts";

import CodeCreateConcept from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/create_concept.py";
import CodeCreateConceptTS from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/createConcept.ts";

import CodeListConcept from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/list_concept.py";
import CodeListConceptTS from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/listConcept.ts";

import CodeOutputListApp from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/outputs/list_apps.txt";
import CodeOutputDeleteApp from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/outputs/delete_app.txt";
import CodeOutputCreateConcept from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/outputs/create_concept.txt";
import CodeOutputListConcept from "!!raw-loader!../../../code_snippets/python-sdk/create-apps/outputs/list_concept.txt";



### Patch App

You can perform patch operations on an app by merging, removing, or overwriting data. By default, all actions support overwriting, with specific behaviors for lists of objects.

- The `merge` action updates an existing `key:value` pair with `key:new_value` or appends to an existing list. For dictionaries, it merges objects that share a matching `id` field.
- The `remove` action is only used to delete the app's cover image on the platform UI.
- The `overwrite` action fully replaces an existing object with a new one.

Below is an example of performing patch operations on an app, where the base workflow is updated, the app is switched to an [app template](https://docs.clarifai.com/create-manage/applications/templates/), and changes are made to the app's description, notes, default language, and image URL. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodePatchApp}</CodeBlock>
</TabItem>
</Tabs>

### List Apps

You can use the `list_apps` method to retrieve all the apps associated with your account. This method supports [pagination](https://docs.clarifai.com/additional-resources/api-overview/pagination), allowing you to tailor the results using parameters like `page_no` and `per_page` to fit your specific needs.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeListApp}</CodeBlock>
    <details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CodeOutputListApp}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-python">{CodeListAppTS}</CodeBlock>
</TabItem>
</Tabs>


### Delete App

You can remove an app from your account by specifying its app ID. Note that you need to be certain that you want to delete a particular app as the operation cannot be undone.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeDeleteApp}</CodeBlock>
    <details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CodeOutputDeleteApp}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-python">{CodeDeleteAppTS}</CodeBlock>
</TabItem>
</Tabs>



                                                                                                        
### Create Concepts

You can create [concepts](https://docs.clarifai.com/portal-guide/inputs-manager/concepts) by uploading input data to your app along with a specified label. This automatically generates new concepts, making it easier to integrate and manage new ideas or entities within your application.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeCreateConcept}</CodeBlock>
    <details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CodeOutputCreateConcept}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-python">{CodeCreateConceptTS}</CodeBlock>
</TabItem>
</Tabs>



                                      


### List Concepts

You can use the `list_concepts` method to retrieve all the concepts within your application. This method supports [pagination](https://docs.clarifai.com/additional-resources/api-overview/pagination), allowing you to tailor the results using parameters like `page_no` and `per_page` to fit your specific needs.


<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeListConcept}</CodeBlock>
    <details>
  <summary>Example Output</summary>
    <CodeBlock className="language-text">{CodeOutputListConcept}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-python">{CodeListConceptTS}</CodeBlock>
</TabItem>
</Tabs>



