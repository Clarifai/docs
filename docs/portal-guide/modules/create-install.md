---
description: Learn how to create and install your modules
sidebar_position: 1
---

# Create and Install Modules

**Learn how to create and install your modules**
<hr />

The Clarifai portal allows you to create and install new modules and carry out various management tasks on them. 

## Overview

There are two steps for creating modules: 

**1. Creating a module and its versions**—This is the process of authoring a new module and registering it on our AI lake. At the end of this process, it won’t be interactable with our UI just yet; the next process of installing the module version into the sidebar handles that. Creating a module requires familiarity with GitHub and Python development. You’ll start by coding your module, which is a great experience even locally, and then creating the module in the Clarifai platform, where we will fully host it for you. Each time you update the code of your module, you can simply create a new module version to capture that change.

**2. Installing a module**—Once a module is created (or you find an already created one in our Community platform, or from your team members), you can install the module. This process will register the module in your Clarifai app, and it will appear on the portal’s collapsible left sidebar so that you can interact with it.

## Prerequisite for Creating Modules

- A Streamlit app repository on GitHub. 

For this example, we'll use [this Clarifai app module template](https://github.com/Clarifai/module-template). You can refer to its README.md file to learn how to clone the repository to your development environment.

:::info

- Your Streamlit app should have a file named `app.py` because we support integrating with Streamlit apps only from the `app.py` entry point. It also serves as a central configuration file for your application. The file plays a crucial role in defining the behavior and structure of your Streamlit app integrated into the Clarifai platform. 

- After installing a module, the markdown notes for the module overview page on the Clarifai portal will be created from the README.md file. Also, the left sidebar child items that appear under the **Installed Modules** category will be constructed from your Streamlit’s app pages or folder. If your Streamlit app does not have them, it will be constructed as a single-page app with no sidebar subpages.

:::

## Create Modules

To create a new module, go to the individual page of your application. Then, select the **Modules** option on the collapsible left sidebar. 

You'll be redirected to the **Modules** manager page, where you can create new modules and view already created ones.

Click the **Create Module** button at the upper-right corner of the page.

![modules manager page](/img/modules/module_1.png)

You’ll be redirected to a page where you can create a module and a specific version for it. 

![create a module](/img/modules/module_2.png)

Let's talk about the fields to fill in the form for creating a new module. 

#### Module ID

Start by providing a unique ID of the module you want to create. The ID is scoped to your app; so, it needs to be unique within your app, but not necessarily globally.

#### Module Description

Provide a short description of your module. The description will be displayed on the Clarifai Community platform for others to quickly understand the purpose of your module.

#### Module Metadata

Optionally, you can provide a JSON blob of metadata to attach to the module. It helps with filtering and organizing your modules.

#### Module Visibility

You can choose to make the module public or private. Public modules are visible to everyone in the Community. Private modules are only visible to you and your collaborators.

#### Create Module

Click the **Create Module** button to finish creating your module.

You’ll get a message that the module has been successfully created. 

## Create a Module Version

After creating a module, you can now create a specific version for it. 

![create a module version](/img/modules/module_3.png)

:::tip

Each module represents one Streamlit app. As you make changes to your Streamlit app code, you can create new versions of the module as you go. 

:::

In the input field, you can provide either:

- GitHub branch URL; or,
- GitHub commit URL.

The URL you provide should be for the specific repository you would like to deploy as your module version. The repository should be public—or, you’ll need to provide Clarifai with the necessary permissions to import data from your private repository. The authorization process will walk you through a simple process where you grant access to your private repository using a GitHub Oauth app provided by Clarifai.

### Get a GitHub URL 

To get a GitHub branch URL, navigate to your repository’s page and switch to the branch you want. 

![get GitHub branch URL](/img/modules/module_4.png)

You can then grab the URL displayed on the branch page. 

![copy GitHub branch URL](/img/modules/module_5.png)

Here is an example: `https://github.com/[github-username]/module-example/tree/[branch-name]`.

Or, to get a commit URL, navigate to your repository’s page and click the **commits** link.

![get a commit URL](/img/modules/module_6.png)

On the ensuing page, click the **View commit details** button. 

![view commit details](/img/modules/module_7.png)

Next, grab the URL of the specific commit you want.

![copy commit URL](/img/modules/module_8.png)

Here is an example: `https://github.com/[github-username]/module-example/commit/b03da4dae7cc617adbfe335ee7608c10ff69d0d4`.

### Fill the form

After getting the GitHub URL, paste it in the input field, and click the enter button on your keyboard. Then, a form will appear for you to provide the details for creating a new module version. 

![create a module](/img/modules/module_9.png)

Let’s talk about the fields to fill in the form. 

#### Notes Preview

There is an expandable section that shows the markdown notes pulled from the module’s GitHub README.md file. These markdown notes are what will show on your module’s landing page and are only driven by what is found in the README.md file. So, you may review them here. If they are not satisfactory, you may make a new commit and then update the GitHub URL before proceeding with the next steps.

#### Module Version ID

Start by providing a unique ID of the module version you want to create. For example, you can provide a version number as `1_0_0` so that you can give `major_minor_patch` semantic versioning to your users.

#### Module ID

Provide the module ID the version belongs to. It should be the ID of a module you created previously.

#### Sidebar Title

Provide the module’s title that will appear on the collapsible left sidebar under the **Installed Modules** category.

#### Module Version Description

Provide a short description of your module version. The description will be displayed to help users explore the different versions of your module and quickly understand the purpose of each version. 

If you have a detailed description, you should provide it using the markdown notes on the module overview page. 

#### Module Version Metadata

Optionally, you can provide a JSON blob of metadata to attach to the module version. It helps with filtering and organizing your module versions.

![create a module](/img/modules/module_10.png)

#### Module Version Visibility

You can choose to make the module version public or private. Public module versions are visible to everyone in the Community. Private module versions are only visible to you and your collaborators.

#### Environment Variables and Secrets

Optionally, you can set environment variables and secrets for your module version. 


#### Sidebar Page Title

The page titles you provide will appear as the left sidebar child items under the **Installed Modules** category. The titles will link to the single page `app.py` file of your module.

If you have a single-page Streamlit app, you do not need to add page titles. On the other hand, if you have a multi-page Streamlit app, each module under pages/ in the repository will be mapped to an option on the navigation bar. 

#### Select deployment type

You can choose any of the following two deployment types:

- Deploy locally — You can deploy the module version manually on your local machine. However, it will only be accessible to you. You need to provide the URL where your module is deployed. For example, you can provide `http://localhost:8502` for local Streamlit development or `https://share.streamlit.io/...` for Streamlit cloud deployment. Your deployment should be running before installing it. 

- Clarifai cloud — You can also deploy the module version on Clarifai's fully hosted cloud platform. This will make it accessible to other users and be fully managed for you. 

#### Create Module Version

Click the **Create Module Version** button to finish creating your module version.

After the deployment has been processed, you’ll get a message that the version has been successfully added to your module. 

![create a module version](/img/modules/module_11.png)

## Install the Created Module Version

After creating a module and adding a version for it, a form will appear on the same page that allows you to install it on your app. This is an optional step for convenience purposes as you may want to use the newly created module version for yourself in the same application. Remember that you cannot actually use the created module version until you install it.

:::note

Your new module, and its versions, will appear in the AI Lake under the **Modules** section, and anyone who has the necessary permissions on your app and the module can install it. To make that easy, we also provide a link you can share for others to install it.

:::

![install created module version](/img/modules/module_12.png)

Let’s talk about the fields to fill in the form. 

#### Destination user_id

Provide the `user_id` of the app you want to install the module to. It defaults to the current user ID, but you can change it to others, such as collaborators or organizations you belong to.

#### Destination app_id

Provide the `app_id` of the app you want to install the module to. It defaults to the current app ID, but you can change to any apps within the destination `user_id’s` account.

#### Get shareable link

You can copy the provided shareable link and send it to anyone to install the module in their environment. They just need to replace `{USER_ID}` with their user ID, and `{APP_ID}` with the app ID they want to install the module to.

#### Install Module

Click the **Install Module** button to install the module directly to the `user_id` and `app_id` you’d stated. 

## Install the Module Into Destination App

You’ll be redirected to another page where you can choose a URL suffix for installing the module into the destination app. It’ll be available at `https://clarifai.com/{user_id}/{app_id}/installed_module_versions/{suffix}`. 

You can also set the module’s visibility on the same page. You can make the installation of the module version public, even if the underlying module and its versions are private, allowing you to open up a new capability. 

![install created module version](/img/modules/module_13.png)

Finally, click the **Install to this App** button. 

You’ll get a message that the module has been successfully installed on your app. 

![installed module to app](/img/modules/module_14.png)

If you refresh the page, you’ll notice that your installed module appears on the left sidebar under the **Installed Modules** category.

![module on sidebar](/img/modules/module_15.png)

That’s it!
