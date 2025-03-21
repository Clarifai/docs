
import TOCInline from '@theme/TOCInline';

<div className="toc-inline">
  <TOCInline toc={toc} maxHeadingLevel={2}  
  />
</div>

The Teams & Logs tab allows you to monitor platform operations by capturing detailed audit logs, helping you track what activities were performed, who performed them, and their outcomes. 

It provides the ability to assess user actions and resource changes, identify potential security issues, maintain comprehensive logs to meet regulatory requirements, and monitor request origins to troubleshoot failed operations effectively.  

:::tip

[Click here](https://docs.clarifai.com/api-guide/audit-log/) to learn how to perform audit tracking via the API. 

:::

:::info

This feature is currently only available to users on our Professional and Enterprise subscription [plans](https://www.clarifai.com/pricing). 

:::

## Supported Operations

You can use the Teams & Logs tab to track the following critical resource operations (_we're planning to support more resources in the future_):

- **Organization and team membership activities** — Includes creating, updating, or deleting organizations and teams, sending invitations, and managing team users and applications.  
- **Collaborator activities** — Includes adding collaborators, editing their scopes, and removing them. 
- **Application activities** — Includes creating, updating, duplicating, and deleting applications. 
- **Model activities** — Tracks actions such as creating, training, publishing, and deleting models. 
- **Workflow activities** — Covers the creation, publishing, updating, and deletion of workflows.  
- **Module activities** — Tracks the creation, updating, and deletion of modules. 


## Audit Log Details

To access the tab, go to the Control Center and select the **Teams & Logs** option in the collapsible left sidebar.

![](/img/community/control-center/teams_logs_1.png)

You can get details of the following activity logs:

- **When** — Timestamp of the operation.  
- **Who** — Identity of the user performing the action.  
- **What** — Description of the operation. Note that if you 
- **Where** — IP address where the request originated from.  
- **Status** — Success or failure results of the operation.  

## Filter by Apps 

By default, the page displays activities across all your apps. You can customize the view by selecting specific app(s) using the dropdown menu in the upper-right corner.

![](/img/community/control-center/teams_logs_2.png)

## Filter by Dates

You can filter and view data for specific time periods using the date range selector in the upper-right corner. If you click the tool, a calendar will drop down, which allows you to specify a date range to narrow down the activity logs. _Note that the current date is not selected by default._ 

You can learn more about the date range tool [here](https://docs.clarifai.com/portal-guide/control-center/#date-ranges). 

![](/img/community/control-center/teams_logs_3.png)

## Collapsible Operation Details

The **Operation** column includes collapsible fields that allow you to expand or collapse details for each logged event. When expanded, the field reveals additional information about the specific action taken and the IDs of the resources impacted. 

Conversely, when collapsed, only a summarized description of the operation is visible, helping to maintain a cleaner and more organized view of the logs. You can toggle this view by clicking the small arrow icon next to each operation entry.

![](/img/community/control-center/teams_logs_4.png)
