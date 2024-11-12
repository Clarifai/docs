---
description: Learn how to manage members and teams 
sidebar_position: 1
---

# Manage Members and Teams

**Learn how to manage members and teams**

<hr />

Having members and teams within your Clarifai organization enhances productivity, ensures efficient task management, and supports the collaborative development of your machine learning projects.

Let's illustrate how to manage members and teams within your Clarifai organization. 

## How to Add and Manage Members 

To add new members to your organization, start by clicking your organization’s profile icon at the upper-right section of the navigation bar. In the drop-down list that follows, select the **Account** option. 

![Account option](/img/clarifai_orgs/account_option.png)

<br/>

You’ll be redirected to your organization’s settings page. 

On the left sidebar, select the **Members** option. You’ll be redirected to the **Members** page, where you can add new members and carry out various member management tasks. 

To add a new team member to your organization, you need to send them an invitation first. Click the **Invite Members** button to do so. 

![Organization settings page](/img/clarifai_orgs/organization_settings_page.png)

On the dialog box that appears, enter the invitee’s email address and select a role you wish to assign to them.

![Invite member dialog box](/img/clarifai_orgs/invite_member_dialog_box.png)

You can assign any of the following roles:

- **Team Contributor (select apps)** — the invitee will be available to contribute only to some selected applications.
- **Organization Contributor (all apps)** — the invitee will be able to contribute to all the apps within the organization. 
- **Admin** — the invitee will have administrative privileges in the organization. 

:::tip

[Click here](https://docs.clarifai.com/portal-guide/clarifai-organizations/security#scopes-and-access-levels-of-organization-members) to learn more about the scopes and access levels allowed for each user type within a Clarifai organization. 

:::

After providing the details, click the **Confirm** button. 

When you send an invitation, the invitee will receive a notification in their email address as well as in the platform's notification bar for them to decide whether to accept or decline the request. If they do not already have an account with Clarifai, they will need to register first before joining your organization. 

You can track the invitations on the **Pending invitations** section of the page. If you want to rescind any pending invitations, you can also delete them from there.

![Pending Invitations](/img/clarifai_orgs/pending_invitation.png)

:::warning multi-org membership

We offer a multi-org membership functionality. Users can create, join, and engage with multiple organizations. A user’s membership is not limited to only one organization at any given time. 

:::

Once invitees have accepted your invitation, their details will appear under the **Organization members** section of the table. From there, you can search for team members, reassign roles, or delete members. 

![Current members section](/img/clarifai_orgs/current_members_section.png)

## How to Add and Manage Teams

Teams allow you to bring different members of your organization together to accomplish specific tasks. For example, you can aggregate users with the same access privileges to certain apps together in a single team.

To add a new team to your organization, start by clicking your organization’s profile icon at the upper-right section of the navigation bar. In the drop-down list that follows, select the **Account** option — as earlier highlighted. 

You’ll be redirected to your organization’s settings page. 

On the left sidebar, select the **Teams** option. You’ll be redirected to the **Teams** listing page, where you can create new teams and carry out various team management tasks. 

Click the **Create Team** button to add a new team to your organization.

![Organization teams](/img/clarifai_orgs/organization_teams.png)

In the dialog box that appears, enter the team ID, team name, and set default permissions for the team. 

![Create team dialog box](/img/clarifai_orgs/create_team_dialog_box.png)

Click the **Confirm** button.


### Permission Types

The "Team Permissions" dropdown currently offers four distinct permission levels, each tailored to different roles and responsibilities within Apps assigned. These levels ensure proper access control and security while enabling team members to perform their tasks effectively. As our needs evolve, we may introduce additional roles in the future to provide even more flexibility.

These permissions follow the below hierarchy: 


   <pre>   
   **Full Access**
      
         &nbsp; &nbsp;&nbsp; &nbsp;├──Model Trainer

          &nbsp; &nbsp;&nbsp; &nbsp;├── Labeler Lead

          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; └── Labeler Worker
            </pre>



![Teams listing page](/img/clarifai_orgs/gs_1.png)


Each of them is discussed below:


#### 1. Full Access

The highest level of access that provides complete control over all aspects of the application. It has following capabilities:



* 
* Access to App’s features and functionalities
* Full access to features and CRUD operations on all resources

**Note**: Full Access should be granted only to team members who require complete administrative control.


#### 2. Model Trainer

Designed for team members focused on model development and training operations. It has following capabilities:



* View all models
* Create new models
* Update existing models
* Delete models
* Train models
* Access model metrics and performance data
* View inputs and concepts
* Access datasets

**Best Practice**: Grant Model Trainer access to team members responsible for developing and maintaining AI models.


#### 3. Labeler Lead

Enhanced labeling permissions with additional task management capabilities.It has following capabilities:



* All Labeler Worker permissions, plus:
* Create new labeling tasks
* Assign tasks to team members
* Monitor task progress
* View team member details (First/Last names)
* Access task analytics
* Review annotations
* Provide feedback on labeling quality

**Important**: Labeler Leads serve as supervisors for labeling operations and quality control.


#### 4. Labeler Worker

Basic access level focused on performing labeling tasks. It has the following capabilities:



* Access assigned labeling tasks
* Read access to:
    * Concepts within tasks
    * Input data for assigned tasks
    * Task instructions and guidelines
* Write access to:
    * Annotations
    * Task status updates
    * Progress reports
* Evaluate and assess workers’ completed work to ensure quality and consistency.


Your newly created team will appear on the **Teams** listing page. You can search for other teams you've added and delete them on that table.

![Teams listing page](/img/clarifai_orgs/teams_listing_page.png)

If you click on any listed team’s name, you’ll be redirected to its individual page, where you can accomplish several management tasks, including adding and managing team members and apps. 

Let's demonstrate how you can achieve some of the tasks. 

### How to Manage a Team

To edit a team's name, click the **Edit Team Name** button and provide your new team's name. To delete a team, click the **Delete Team** button.

![manage a team](/img/clarifai_orgs/how_to_manage_team.png)

### How to Add and Manage Team Members

To add members to a team, first select the **Members** tab. Then, click the **Add Members** button. 

![Individual team page](/img/clarifai_orgs/individual_team_page.png)

In the dialog box that appears, search for a member(s) of your organization and click the **Add users** button to add them to the team. Note that you can only add existing members of your organization to a team. 

![Add members to your team](/img/clarifai_orgs/add_team_members_dialog_box.png)

The newly added member will appear on the **Members** listing page. You can also search for other members you've added and delete them on that page.

![newly added member](/img/clarifai_orgs/newly_added_member.png)

### How to Add and Manage Team Apps

To assign an app to a team, first select the **Apps** tab. Then, click the **Add App** button at the upper-right section of the page. 

![add app  to team](/img/clarifai_orgs/add_app_to_team.png)

In the dialog box that appears, search for the app(s) you want to add to your team. Note that you can only add the existing apps that belong to your organization to a team. You can also define a role the app should have. 

Click the **Confirm** button to add the app(s) you've selected to the team. 

![Add apps to your team](/img/clarifai_orgs/apps_dialog_box.png)

While selecting the apps, access can be modified. Read about different access types [here](https://docs.clarifai.com/portal-guide/clarifai-organizations/members-teams#permission-types).

![newly added app](/img/clarifai_orgs/gs_2.png)

The newly added app will appear on the **Apps** listing page. You can also search for other apps you've added and delete them on that page.

![newly added app](/img/clarifai_orgs/gs_3.png)

You can also browse Team access and configuration from individual App’s Settings page.

![newly added app](/img/clarifai_orgs/gs_4.png)

