---
description: Learn about Clarifai Organizations
sidebar_position: 8
---

# Clarifai Organizations

**Make the most of teamwork**

<hr />

Clarifai Organizations is a feature within the Community that lets you consolidate multiple Clarifai accounts into an organization, allowing you to enhance collaboration and drive better results with your AI-powered software solutions. 

With Clarifai Organizations, you can create and centrally manage your company’s machine learning projects. It allows you to consolidate your team’s capabilities so that you can realize the compliance, security, and budgetary goals of your company.

## Clarifai Organizations Capabilities

The Clarifai Organizations feature offers the following capabilities:

- **Centralize management of your Clarifai operations**

Clarifai Organizations enables you to bring your collaborators, teams, applications, and other resources within Clarifai under a single umbrella.

For example, if you’re an administrator of an organization, you can invite existing Clarifai users to be members of your organization, which allows you to manage their accounts from a central point. 

This centralized control makes it easy to track your usage of the Clarifai platform and get the most out of it. 

- **Consolidate billing for all members of an organization**

Clarifai Organizations lets you consolidate the billing for all member accounts so that you can conveniently pay for them. Having one bill across your organization allows you to monitor the charges across multiple accounts and streamline payment processing. 

As an administrator, you can track the account activity of every member of your organization. This allows you to monitor the billing activities associated with each account and optimize the cost performance of your organization. 

- **Enact Access Policies**

As an administrator, you can set up policies that dictate how users can access the resources within your organization. You can enable a password policy that enhances the security of your organization’s resources by motivating users to create and employ strong passwords.

You can also enact role-based security to restrict access to resources based on a member’s role within the organization. You can allow members only to access the applications necessary to perform their assigned duties effectively.

- **Set up siloed access permissions**

As an administrator, you can set up various teams and attach different access permissions to them. You can specify which applications and individual actions the users in each team can access. 

For example, if you have members within your organization who must access only the resources that meet certain data regulatory requirements, you can aggregate those accounts in their own team. You then define a policy that prevents members of that team from accessing resources that do not comply with those regulatory standards.

:::tip

If you want to access any feature of Clarifai Organizations via the API, you must use a [PAT](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens). 

:::

## Getting Started With Clarifai Organizations

To get started with Clarifai Organizations, follow these steps:

1. Sign in to the [Clarifai Community Portal](https://clarifai.com/explore).
2. Click your user’s profile icon at the top-right section of the navigation bar and click the **+ Add an Organization** button on the drop-down list.

![Add an organization](/img/clarifai_orgs/add_an_organization.png)

3. On the dialog box that appears, provide the details of your organization.

![Create an organization](/img/clarifai_orgs/create_organization.png)

- **Organization Name:** Enter a unique name for your organization, such as _test-org_.
- **Organization ID:** Enter a unique identifier for your organization, such as _123455_. This is what will appear in the URL when browsing the Community platform as an organization.  
- **Billing Email:** Enter your billing email, such as test-org@example.com. 

Click the **Confirm** button.

That’s how to create a Clarifai organization!

## Managing Your Clarifai Organization

After creating a Clarifai organization, you can begin interacting with the Community platform as an organization—just like a normal user would, albeit with some other added capabilities.

To start accessing the Community platform with your organization’s profile, click your user’s profile icon at the top-right section of the navigation bar and select your organization’s profile on the drop-down list.
 
![Select your organization’s profile ](/img/clarifai_orgs/select_organization_profile.png)

You’ll notice that your user’s profile will change to your organization’s profile. 

If you click your organization’s profile icon at the top-right section of the navigation bar, you’ll find various items on the drop-down list that let you manage various aspects of your Clarifai organization.

![Organization profile drop-down list](/img/clarifai_orgs/organization_profile_drop_down_list.png)

- **My Apps**—Allows you to create and manage your organization’s applications and organize all your content, including models, workflows, inputs, and more.
- **Collaborations**—Allows you to manage the collaborations associated with your organization. 
- **Starred**—Allows you to easily manage all the models and workflows you’ve starred inside your apps.
- **Account**—Allows you to update your organization’s profile, delete the account information related to your organization, or leave the organization. 
- **Billing**—Allows you to manage the consolidated billing associated with your organization account. 
- **Security**—Allows you to enforce the security of your Clarifai organization. 
- **Sign Out**—Allows you to sign out of the Community platform, which includes your user and organization accounts.

## How to Create and Manage Apps

To create an app, click your organization’s profile at the top-right section of the navigation bar and select the **My Apps** option on the drop-down list. 
The ensuing page lets you create apps and carry out various app management tasks. With an app, you can organize all your content, including models, workflows, inputs, and more.

If you’ve not created any app before, just click the **+ Create an App** button to create an app for your organization. 

Or, you can click the **+** sign on the top-right section of the navigation bar. 

![Create app](/img/clarifai_orgs/create_app.png)

Next, on the dialog box that appears, provide the details of your new application and click the **Confirm** button. 

![Create app dialog box](/img/clarifai_orgs/dialog_create_app.png)

The newly created app will then be listed under the **Apps** tab. If you create models and workflows, they will also be listed under the **Models** and **Workflows** tabs, respectively. 

![App listing page](/img/clarifai_orgs/app_listing_page.png)

You can click the pin icon located within the listed app to highlight it among the rest of your other applications. If you have many apps, pinning an app lets it rise to the top of the page so that you can access and manage it easily. 

You can also click the series of dots located within the listed app to duplicate the app, copy its ID, or delete it.

The listed apps page also enables you to accomplish the following:

- Use the search box to look for a specific app you require by filtering it by name. 
- List apps by either grid view or list view.
- Sort your apps by various parameters, including last updated, app name, ascending order, or descending order. 

If you click on any listed app, you’ll be redirected to its individual page, where you can accomplish several tasks, including editing the app’s details, uploading and searching inputs, creating models, creating workflows, and more. 

![Individual app page](/img/clarifai_orgs/individual_app_page.png)

For example, click the **Inputs** button on the collapsible left sidebar to upload inputs to the app. Next, click the **Upload Inputs** button and upload the inputs you want to add to the app. 

![App upload inputs](/img/clarifai_orgs/upload_inputs.png)

## How to Create and Manage Models

To create a model, start by navigating to the individual page of your app, as illustrated earlier. Then, select the **App Models** option on the collapsible left sidebar. 

![App models](/img/clarifai_orgs/app_models.png)

You’ll be redirected to the models’ listing page, where you can see a list of models available in your app and also create new ones. 

:::tip

On the models’ listing page, you can also complete several other tasks, such as searching models, editing a model, and deleting a model. 

:::

Click the **Create Model** button on the top-right corner of the page.

![Create model](/img/clarifai_orgs/create_model.png)
 
Next, choose the type of model you want to create. In this example, let’s choose a **Text Classifier**. 

![Create new text classifier](/img/clarifai_orgs/create_new_model_text_classifier.png)

On the ensuing page, provide the details required to create a text classifier model. 

![Create text classifier](/img/clarifai_orgs/create_text_classifier.png)

Click the **Create Model** button to finalize the process. 

![Create model button](/img/clarifai_orgs/create_model_button.png)

You’ll then be redirected to the newly created model’s page. As you can see on the screenshot below, the individual model’s page allows you to complete various model management tasks, including:

![Newly created model page](/img/clarifai_orgs/newly_created_model_page.png)

- Click the star icon to highlight the model. It will then appear on the **Starred** page. 
- Click the **Edit Visibility** button to edit the model’s visibility to either private or public.
- Click the **Train Model** button to train the model. 
- Click the **Use Model** button to use the model in an API request or add it to a workflow.  
- Click the series of vertical dots at the top-right, endmost section of the page to delete the model. 
- Under the **Overview** tab, you can complete various actions, such as editing the model’s details and predicting with the model.
- Under the **Versions** tab, you can copy the model’s version ID, delete the model version, and more. 
- Under the **Concepts** tab, you can view the concepts available in your model, search for concepts, and more. 

## How to Create and Manage Workflows

To create a workflow, start by navigating to the individual page of your app, as illustrated earlier. Then, select the **App Workflows** option on the collapsible left sidebar. 

![App workflows](/img/clarifai_orgs/app_workflows.png)

You’ll be redirected to the workflows’ listing page, where you can see a list of workflows available in your app and also create new ones. 

:::tip

On the workflows’ listing page, you can also complete several other tasks, such as searching workflows, duplicating a workflow, and deleting a workflow. 

:::

Click the **Create Workflow** button on the top-right corner of the page.

![Create workflow](/img/clarifai_orgs/create_workflow.png)

You’ll be redirected to a new page that has a visual graph you can use to create your new workflow. You can simply drag and connect the components of your workflow. 

:::tip

You can [click here](https://www.clarifai.com/blog/creating-workflows-in-clarifai-community) to read more on how to create a workflow in the Clarifai Community. 

:::

After finishing creating your workflow, click the **Save Workflow** button. 

![Save workflow](/img/clarifai_orgs/save_workflow.png)

You’ll then be redirected to the newly created workflow’s page. As you can see on the screenshot below, the individual workflow’s page allows you to complete various workflow management tasks, including:

![Newly created workflow page](/img/clarifai_orgs/newly_created_workflow_page.png)

- Click the star icon to highlight the workflow. It will then appear on the **Starred** page. 
- Click the **Edit Visibility** button to edit the workflow’s visibility to either private or public.
- Click the **Edit Workflow** button to edit the workflow. 
- Click the **Use Workflow** button to use the workflow in an app or in an API request.  
- Click the series of vertical dots at the top-right, endmost section of the page to delete the workflow. 
- On the same page, you can also complete several other tasks, such as editing the workflow’s details, such as its description, and making predictions with the workflow.

## How to Add and Manage Members 

To add new members to your organization, start by clicking your organization’s profile icon at the top-right section of the navigation bar. On the drop-down list that follows, select the **Account** option. 

![Account option](/img/clarifai_orgs/account_option.png)

You’ll be redirected to your organization’s settings page. 

On the left sidebar, select the **Members** option. 

![Organization settings page](/img/clarifai_orgs/organization_settings_page.png)

You’ll be redirected to the **Members** page, where you can add new members and carry out various member management tasks. 

To add a new team member to your organization, you need to send them an invitation first. Click the **Invite Member** button to do so. 

![Invite members button](/img/clarifai_orgs/invite_members_button.png)

On the dialog box that appears, enter the invitee’s email address and select a role you wish to assign to them.

![Invite member dialog box](/img/clarifai_orgs/invite_member_dialog_box.png)

You can assign any of the following roles:

- **Team Contributor (select apps)**—the invitee will be available to contribute only to some selected applications.
- **Organization Contributor (all apps)**—the invitee will be able to contribute to all the apps within the organization. 
- **Admin**—the invitee will have administrative privileges in the organization. 

After providing the details, click the **Confirm** button. 

When you send an invitation, the invitee will receive the invitation in their email address for them to decide whether to accept or decline the request. 
If they do not already have an account with Clarifai, they will need to register first before joining your organization. 

You can track the invitations on the **Pending Invitations** section of the page. If you want to rescind any pending invitations, you can also delete them from there.

![Pending Invitations](/img/clarifai_orgs/pending_invitation.png)

:::info

Every user is currently limited to one organization only. So, a user can only belong to one organization at a time. If you’ve invited an existing Clarifai user who already belongs to another organization, they will need to exit their current one before joining yours. 

:::

Once invitees have accepted your invitation, their details will appear under the **Current Members** section of the page. From there, you can search for team members, reassign roles, or delete members. 

![Current members section](/img/clarifai_orgs/current_members_section.png)

## How to Add and Manage Teams

Teams allow you to bring different members of your organization together to accomplish specific tasks. For example, you can aggregate users with the same access privileges to certain apps together in a single team.

To add a new team to your organization, start by clicking your organization’s profile icon at the top-right section of the navigation bar. On the drop-down list that follows, select the **Account** option. 

![Account option](/img/clarifai_orgs/account_option.png)

You’ll be redirected to your organization’s settings page. 

On the left sidebar, select the **Teams** option. 

![Organization teams](/img/clarifai_orgs/organization_teams.png)

You’ll be redirected to the **Teams** listing page, where you can create new teams and carry out various team management tasks. 

Click the **Create Team** button to add a new team to your organization.

![Create teams](/img/clarifai_orgs/create_teams.png)

Enter the team’s ID and name on the dialog box that appears.

![Create team dialog box](/img/clarifai_orgs/create_team_dialog_box.png)

Click the **Confirm** button.

Your newly created team will appear on the **Teams** listing page. You can also search for teams and delete them on that page.

![Teams listing page](/img/clarifai_orgs/teams_listing_page.png)

If you click on any listed team’s name, you’ll be redirected to its individual page, where you can accomplish several tasks, including editing its name, adding members to it, deleting members from it, deleting the team itself, and more. 

To delete a team, click the **Delete Team** button.

To add members to your team, click the **Add Members** button. 

![Individual team page](/img/clarifai_orgs/individual_team_page.png)

On the dialog box that appears, search for a member(s) of your organization and click the **Confirm** button to add them to the team. Note that you can only add existing members of your organization to a team. 

![Add members to your team](/img/clarifai_orgs/add_team_members_dialog_boix.png)

## How to Enforce the Security of Your Clarifai Organization

At Clarifai, we take the security of your organization seriously—it’s the highest priority. We’ve built our platform to meet the needs of the most security-conscious companies. You can also take some actions to augment the security of your organization at Clarifai.

To access the security settings of your organization, start by clicking your organization’s profile icon at the top-right section of the navigation bar. On the drop-down list that follows, select the **Security** option. 

![Security organization settings](/img/clarifai_orgs/security_option.png)

On the **Security** page, you can view the password policies associated with your organization’s account. You can also create and view identity providers to reinforce the security of your organization. 

For example, if you want to add a security identity provider, such as SAML (Security Assertion Markup Language), click the **Create Identity Provider** button. 

![Security page](/img/clarifai_orgs/security_page.png)

On the next page, provide its details and click the **Create** button to finalize the process. 

![Create identity provider](/img/clarifai_orgs/create_identity_provider.png)

SAML is a reliable mechanism that can add to the security of your organization’s account by ensuring authentication and authorization data are securely transferred between parties. 

<<<<<<< Updated upstream:docs/community/clarifai-organizations.md
## How to Transfer Your App to an Organization
=======
## How to Transfer Your Personal Account's App to an Organization
>>>>>>> Stashed changes:docs/community/guides/clarifai-organizations.md

You can transfer an app you own to an organization you belong to and have the permission to create apps. This would greatly enhance collaboration and boost your productivity.

To do so, start by clicking your personal user’s profile icon at the top-right section of the navigation bar. Then, select the **My Apps** option on the drop-down list.

You’ll be redirected to a page that lists the apps you own. 

![List apps you own](/img/clarifai_orgs/transfer_app_org_1.png)

Next, click on the app you want to transfer to an organization. You’ll be redirected to the app’s individual page. 

Select the **App Setting** option on the collapsible left sidebar. 

![App setting](/img/clarifai_orgs/transfer_app_org_2.png)

On the ensuing **App Settings** page, scroll down to the **Transfer ownership** section and click the **Transfer** button.

![Transfer app ownership](/img/clarifai_orgs/transfer_app_org_3.png)

On the dialog box that appears, select the app’s destination organization and give it a new name, if you want to. 

![Give app a new name](/img/clarifai_orgs/transfer_app_org_4.png)

Click the **Confirm** button to finalize the transfer. 

The app will be successfully moved to the organization you selected, and it will no longer appear under your listed apps. 



