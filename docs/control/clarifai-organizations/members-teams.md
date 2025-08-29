---
description: Learn how to manage members and teams 
sidebar_position: 1
toc_max_heading_level: 4
---

# Members and Teams

**Learn how to add and manage members and teams**

<hr />

Having members and teams within your Clarifai organization enhances productivity, ensures efficient task management, and supports the collaborative development of your machine learning projects.

Let's illustrate how to add and manage members and teams within your Clarifai organization. 

## Organization Members

Organization members are individuals who have been invited to join an organization. They are assigned specific roles that define their level of access, responsibilities, and permissions within the organization. 

### How to Add Members 

[Log into](README.mdx#how-to-use-an-org) your organization’s account, click the menu in the upper-right corner of the navigation bar, and select **Members** from the drop-down list.

![Account option](/img/clarifai_orgs/account_option.png)

You’ll be redirected to the **Members** page, where you can add new members and carry out various member management tasks. 

![Organization settings page](/img/clarifai_orgs/organization_settings_page.png)

To add a new team member to your organization, you need to send them an invitation first. Click the **Invite Members** button to do so. 

In the dialog box that appears, enter the invitee’s email address and select a role you wish to assign to them, [as described below](#roles-for-members).

![Invite member dialog box](/img/clarifai_orgs/invite_member_dialog_box.png)

After providing the details, click the **Confirm** button. 

> When you send an invitation, the invitee will receive a notification in their email address as well as in the platform's notification bar for them to decide whether to accept or decline the request. If they do not already have an account with Clarifai, they will need to register first before joining your organization. 

> You can track the invitations in the **Pending invitations** tab. If you want to rescind any pending invitations, you can also delete them from there.

> ![Pending Invitations](/img/clarifai_orgs/pending_invitation.png)

:::note 

#### Roles for Members

| **Role**                         | **Permissions Description**                                                                                                                                                                                                                  |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Admin**                        | The invitee will have administrative privileges in the organization                                                                                                                                                           |
| **Financial Manager**            | The invitee will have access to key [financial data](https://docs.clarifai.com/control/control-center/costs), including current spending based on the organization's pricing plan and budget settings, enabling better financial oversight and management |
| **Organization Contributor (all apps)** | The invitee will be able to contribute to all the apps within the organization, but without some admin privileges                                                                                                             |
| **Organization User (all apps)** | The invitee will have access privileges similar to those of an Organization Contributor for all apps, but with view-only permissions without ability to perform certain CRUD operations — create, update, or delete resources                                                                                           |
| **Team Contributor (select apps)** | The invitee will be able to contribute only to some selected applications                                                                                                                                                      |
| **Infrastructure Manager**       | The invitee will be able to create, modify, and delete [clusters and nodepools](https://docs.clarifai.com/compute/deployments/clusters-nodepools)                                                                                                                                                  |


:::

:::tip

[Click here](security.md#scopes-and-access-levels-of-organization-members) to learn more about the scopes and access levels allowed for each user type within a Clarifai organization. 

:::

### How to Manage Members 

Once invitees have accepted your invitation, their details will appear in the **Organization members** tab. From there, you can view team members, reassign roles, or delete members. 

![Current members section](/img/clarifai_orgs/current_members_section.png)

:::warning multi-org membership

We offer a multi-org membership functionality. Users can create, join, and engage with multiple organizations. A user’s membership is not limited to only one organization at any given time. 

:::

## Organization Teams

Teams allow you to bring different members of your organization together to accomplish specific tasks. For example, you can aggregate users with the same access privileges to certain apps together in a single team.

### How to Add Teams

[Log into](README.mdx#how-to-use-an-org) your organization’s account, click the menu in the upper-right corner of the navigation bar, and select **Teams** from the drop-down list.

![ ](/img/clarifai_orgs/organization_teams_1.png)

You’ll be redirected to the **Teams** page, where you can create new teams and carry out various team management tasks. 

![Organization teams](/img/clarifai_orgs/organization_teams.png)

Click the **Create Team** button to add a new team to your organization. In the dialog box that appears, enter the team ID, team name, and set the permissions for the team (the permissions are [described below](#permission-types-for-teams)). 

![Create team dialog box](/img/clarifai_orgs/create_team_dialog_box.png)

Click the **Confirm** button to finalize creating the team. 

Your newly created team will appear on the **Teams** listing page. You can view other teams you've added and delete them from that table.

![Teams listing page](/img/clarifai_orgs/teams_listing_page.png)

:::note 

#### Permission Types for Teams

| **Role**          | **Description**                                                                 | **Capabilities**                                                                                                                                                                                                                   | **Notes / Best Practices**                                                                 |
|-------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| **Full Access**   | Highest level of access with complete administrative control over the app      | <ul><li>Access to all app features and functionalities</li><li>Full CRUD (Create, Read, Update, & Delete) operations on all resources</li></ul>                                                                                                                     | Should only be granted to team members requiring full administrative control              |
| **Model Trainer** | For team members focused on model development and training                     | <ul><li>View all models</li><li>Create, update, delete models</li><li>Train models</li><li>Access model metrics & performance data</li><li>View inputs & concepts</li><li>Access datasets</li><li>Deploy and view models in clusters</li><li>View clusters and nodepools</li></ul>                               | Assign to members responsible for developing and maintaining AI models      |
| **Labeler Lead**  | Supervisory role for labeling operations and quality control                  | <ul><li>All <b>Labeler Worker</b> permissions, plus:</li><li>Create labeling tasks</li><li>Assign tasks</li><li>Monitor task progress</li><li>View team member details (first/last names)</li><li>Access task analytics</li><li>Review annotations</li><li>Provide feedback</li><li>Create, modify, delete concepts</li></ul> | Serves as supervisors for labeling operations and ensures quality control                 |
| **Labeler Worker**| Basic role focused on performing labeling tasks                               | <ul><li>Access assigned labeling tasks</li><li><b>Read</b> access to: concepts within tasks, input data for assigned tasks, task instructions, and guidelines</li><li><b>Write</b> access to: annotations, task status updates, progress reports</li><li>Evaluate & assess completed work for quality and consistency</li></ul> | Entry-level labeling role with limited permissions                                        |


:::

### How to Manage a Team

When you click on a team from the **Teams** listing page, you’ll be taken to its individual page, where you can manage and perform various team-related tasks.

For example, click the three-dot menu in the upper-right corner to open a drop-down list, where you can select either **Edit Team Name** to rename the team or **Delete Team** to remove it.

![manage a team](/img/clarifai_orgs/how_to_manage_team.png)

#### Add and Manage Team Members

To add members to a team, first select the **Members** tab. Then, click the **Add Members** button at the upper-right section of the page. 

![Individual team page](/img/clarifai_orgs/individual_team_page.png)

In the dialog box that appears, search for a member(s) of your organization and click the **Add users** button to add them to the team. Note that you can only add existing members of your organization to a team. 

![Add members to your team](/img/clarifai_orgs/add_team_members_dialog_box.png)

The newly added member will appear in the **Members** tab, where you can also view all existing members and remove them if needed.

#### Add and Manage Team Apps

To assign an app to a team, first select the **Apps** tab. Then, click the **Add App** button at the upper-right section of the page. 

![add app  to team](/img/clarifai_orgs/add_app_to_team.png)

> **Note**: You can set the default access level for your team members when adding apps — Full Access, Labeler Worker, Labeler Lead, or Model Trainer, [as explained previously](#permission-types-for-teams). Use the drop-down menu on the right side of the apps listing page to set these permissions, which you can always customize later if needed.

In the dialog box that appears, search for the app(s) you want to add to your team. Note that you can only add apps that already belong to your organization — either those you created or those [transferred](apps-models-workflows.md#transfer-an-app) into it. From the same dialog, you can also set the permissions for the added app(s).

Next, click the **Add apps** button in the dialog box to add the app(s) you've selected to the team. 

![Add apps to your team](/img/clarifai_orgs/apps_dialog_box.png)

The newly added app will appear on the apps listing page, where you can also view other apps, edit their permissions, or delete them.

![newly added app](/img/clarifai_orgs/gs_3.png)

:::note tip

On the **App Settings** page of an organization app, you can view the teams that have access to the app, edit their permissions, or add new teams.

![newly added app](/img/clarifai_orgs/gs_4.png)

:::

