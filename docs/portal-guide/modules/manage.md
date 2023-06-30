---
description: Learn how to manage your modules
sidebar_position: 2
---

# Manage Your Modules

**Learn how to manage your modules**
<hr />

After creating and installing your modules, you can now carry out various management tasks on them.

## Access Your modules

To access the modules you’ve created, go to the individual page of your application. Then, select the **Modules** option on the collapsible left sidebar. 

You'll be redirected to the **Modules** manager page, where you can view the already created ones.

You can also click the delete button to remove a module you no longer need.

![listed modules page](/img/modules/module_16.png)

If you click a listed module, you’ll be redirected to the individual page of the module, where you can accomplish various tasks, such as installing the module to your app, creating a version for it, managing its versions, or deleting it. 

![module manager page](/img/modules/module_17.png)

Let's talk about how you can carry out the tasks. 

### a) Install a module

To install a module, click the **Install Module** button. A small window will pop up that allows you to select the app where you want to install the module. After selecting the destination app, click the **Confirm** button. 

![install a module](/img/modules/module_18.png)

You’ll then be redirected to a page that allows you to install the module on your selected app.

You may refer to [the previous page](./create-install.md/#install-the-module-into-destination-app) on how to install a module to a destination app. 

### b) Create a module version

To create a module version, click the **Create Module Version** button. You’ll then be redirected to a page that allows you to provide the GitHub URL for the specific branch or commit you would like to deploy as the module version.

You may refer to [the previous page](./create-install/#create-a-module-version) on how to create a module version. 

### c) Manage module versions

If you click the vertical ellipsis on the upper rightmost part of the module’s page, a dropdown box will appear. Click the **Manage Module Versions** option. 

![manage module versions](/img/modules/module_19.png)

On the ensuing page, you can see all the versions created for the module listed in a table. All the details about each module version are also provided in that table. 

![manage module versions](/img/modules/module_20.png)

The page allows you to:

- Create a new module version by clicking the **Create New Version** button. 

- Delete a module version by first selecting it in the table and clicking the activated **Delete Module Version** button. 

### d) Delete a module

If you click the vertical ellipsis on the upper rightmost part of the module’s page, a dropdown box will appear. Click the **Delete Module** option. 

![listed module versions](/img/modules/module_21.png)

On the ensuing page, confirm if you still want to delete the module. 

![delete a module](/img/modules/module_22.png)

:::caution

This action deletes the module as well as all its created and installed versions. If another user installed any version of the module, they will no longer be able to use them. So, you need to proceed with caution. 

:::

## Start Using Installed Modules

To start using a module you’ve installed on your app, navigate to the **Installed Modules** category on the collapsible left sidebar, and expand the section of the module you want to use. 

:::note

You can also click the **Uninstall Module** button to delete the installed module. 

:::

![installed modules category](/img/modules/module_23.png)

Click a sub-item listed under the name of an installed module. For this example, the sub-item is called **First Page**. 

A small window will pop up requiring you to authorize the module to access data on your behalf. You will see the permissions the module requires. 

![authorize module permissions](/img/modules/module_24.png)

:::tip

Authorizing will create a new personal access token in your account with all scopes. The level of permissions the module will have to access data in your app will be determined by your relationship with the app (owner, collaborator, teammate, or public user).

You may delete that personal access token in your [security settings](https://clarifai.com/settings/security) at any time to revoke the access the module has to your data. If you do not trust the author of the module, we recommend you review the source code before authorizing access. Uninstalling an installed module will also automatically delete the personal access token for you.

:::

Click the **Authorize** button.

You’ll be redirected to the UI of your installed module, where you can start using it.

![installed module UI](/img/modules/module_25.png)

That’s it—you’ve successfully deployed a Streamlit app on the Clarifai platform!

## Manage Installed Modules

If you click the **Manage Installed Modules** button, you’ll be redirected to a page that lets you carry out various management tasks on your installed modules. 

![manage installed modules](/img/modules/module_26.png)

You can see a list of all the module versions installed on your app. To uninstall any of them, select it in the table and click the **Uninstall** button that appears. 

You can also install a module you’ve found on the [Clarifai Community](https://clarifai.com/explore/modules). Just copy and paste the module URL into the **Module URL** input field.

After pressing the enter button, you can follow the ensuing prompts to complete installing the module on your app. 

