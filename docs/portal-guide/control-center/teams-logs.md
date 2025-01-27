---
description: Gain insights into platform activities with enhanced visibility, security, and governance
pagination_next: null
sidebar_position: 3
draft: true
---

# Teams & Logs Tab

**Gain insights into platform activities with enhanced visibility, security, and governance**
<hr />

The Teams & Logs tab allows you to monitor platform operations by capturing detailed audit logs, helping you track what activities were performed, who performed them, and their outcomes. 

It provides the ability to assess user actions and resource changes, identify potential security issues, maintain comprehensive logs to meet regulatory requirements, and monitor request origins to troubleshoot failed operations effectively.  

You can use the tab to track the following critical resource operations (_we're planning to support more resources in the future_):

- **Organization and team membership activities** — Includes creating, updating, or deleting organizations and teams, sending invitations, and managing team users and applications.  
- **Module activities** — Tracks the creation, updating, and deletion of modules. 
- **Model activities** — Tracks actions such as creating, training, publishing, and deleting models.  
- **Workflow activities** — Covers the creation, publishing, updating, and deletion of workflows.  
- **Application activities** — Includes creating, updating, duplicating, and deleting applications.  
- **Collaborator activities** — Includes adding collaborators, editing their scopes, and removing them. 

:::note

[Click here](https://docs.clarifai.com/api-guide/audit-log/) to learn how to perform audit tracking via the API. 

:::

:::info

This feature is currently only available to users on our **Professional** and **Enterprise**  subscription [plans](https://www.clarifai.com/pricing). 

:::

<br/>

To access the tab, go to the Control Center and select the Teams & Logs option in the collapsible left sidebar.

![](/img/community/control-center/teams_logs_1.png)

You can get details of the following activity logs:

- **When** — Timestamp of the operation.  
- **Who** — Identity of the user performing the action.  
- **What** — Description of the operation.  
- **Where** — IP address where the request originated from.  
- **Status** — Success or failure results of the operation.  

By default, the page displays activities across all your apps. You can customize the view by selecting specific app(s) using the dropdown menu in the upper-right corner.

![](/img/community/control-center/teams_logs_2.png)

Additionally, you can filter and view data for specific time periods using the date range selector in the upper-right corner. If you click the tool, a calendar will drop down, which allows you to specify a date range to narrow down the activity logs. 

You can learn more about the date range tool [here](https://docs.clarifai.com/portal-guide/control-center/#date-ranges). 

![](/img/community/control-center/teams_logs_3.png)

