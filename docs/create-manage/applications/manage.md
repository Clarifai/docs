---
description: How to view and change the settings of an application
sidebar_position: 2
---

# Apps Management

**View and change an application's settings**
<hr />

## App Overview

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
-	View and edit the [collaborators](https://docs.clarifai.com/clarifai-basics/applications/collaboration) associated with the app. 

## App Settings

You can change the settings of an application at any time. To do so, go to the application's individual page and select the **Settings** option on the collapsible left sidebar.

You'll be redirected to the **Settings** page, where you can change the application's settings.

![app settings](/img/edit_application.jpg)

Let's talk about the changes you can make on the page.

:::note

This page has intuitive elements that let you search for specific items and sort displayed items based on your preferences. 

:::

### API Keys

#### Create API Keys

Click the **Create API Key** button to add a new API key to your app. Then, use the form that pops up to generate a new API key—provide a short description, select the scopes, and click the **Confirm** button. 

![api keys](/img/application_settings_1.png)

The new [app-specific key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) will be listed in the **API Keys** section, where you can carry out various management tasks on it. 

#### Copy an API Key

You can copy an API key to the clipboard by clicking the copy button.

![copy an api key](/img/application_settings_2.png)

#### Show an API Key

You can reveal an API key by clicking the show button. You can also hide it by clicking the same button. 

![show api key](/img/application_settings_3.png)

#### Edit an API Key

You can edit an API key by clicking the edit button. A form will pop up that allows you to update the description and scopes of your API key. 

![edit an api key](/img/application_settings_4.png)

#### Delete an API Key

You can delete an API key by clicking the delete button.

![delete an api key](/img/application_settings_5.png)

### Collaborators

#### Add Collaborators

To add a collaborator to your app, click the **Add Collaborators** button. Then, use the form that pops up to invite a collaborator—provide an email address associated with their Clarifai account, select the scopes, and click the **Confirm** button. 

:::note

The collaborator you want to invite must have a registered account on the Clarifai portal. 

:::

![add a collaborator](/img/application_settings_6.png)

#### Delete a Collaborator

You can remove a collaborator by clicking the delete button.

![delete a collaborator](/img/application_settings_7.png)

### Base Workflow

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

### Update Visibility

You can easily toggle your app's visibility between private and public modes by clicking the **Update Visibility** button.

![update visibility](/img/application_settings_update_visibility.png) 

### Delete Application

You can delete the application by clicking the **Delete App** button. A small window will pop up, prompting you to confirm the action. 

![delete app](/img/application_settings_11.png)

Remember that once you delete an application, we cannot recover it. You will also lose all images, concepts, models, and other resources associated with that application. 

### Delete all Models

You can delete all models by clicking the **Delete all Models** button. A small window will pop up, prompting you to confirm the action. 

![delete all models](/img/application_settings_10.png)

### Transfer Application

You can transfer your application to an [organization](https://docs.clarifai.com/portal-guide/clarifai-organizations/) you belong to and have permission to create apps. This would greatly enhance collaboration and boost your productivity.

To do so, click the **Transfer** button. On the small window that pops up, select the app’s destination organization and give it a new name, if you want to.

Click the **Confirm** button to finalize the transfer.

![transfer application](/img/application_settings_9.png) 

The app will be successfully moved to the organization you selected, and it will no longer appear under your listed apps.
