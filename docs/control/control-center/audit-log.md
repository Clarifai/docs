---
description: Track what was performed, who did it, and the results
sidebar_position: 4
---

# Audit Logging via API

**Track what was performed, who did it, and the results**
<hr />

Clarifai's Audit Logging feature helps you monitor platform activities for better visibility, security, and governance. It captures detailed logs of operations so you can know what was done, who did it, and the results.

With Audit Logging, you can assess the actions performed on users and their resources, track resource changes to identify potential security issues, and maintain comprehensive activity logs to meet regulatory requirements.

:::tip

To learn how to perform audit tracking via the UI, see [Teams & Logs](teams-logs.md) within the Control Center. 

:::

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions)

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonListAuditLogs from "!!raw-loader!../../../code_snippets/api-guide/audit-log/list_audit_logs.py";
import JSListAuditLogs from "!!raw-loader!../../../code_snippets/api-guide/audit-log/list_audit_logs.html";
import NodeListAuditLogs from "!!raw-loader!../../../code_snippets/api-guide/audit-log/list_audit_logs.js";
import CURLListAuditLogs from "!!raw-loader!../../../code_snippets/api-guide/audit-log/list_audit_logs.sh";


import PythonOperation from "!!raw-loader!../../../code_snippets/api-guide/audit-log/operation.py";
import JSOperation from "!!raw-loader!../../../code_snippets/api-guide/audit-log/operation.html";
import NodeOperation from "!!raw-loader!../../../code_snippets/api-guide/audit-log/operation.js";
import CURLOperation from "!!raw-loader!../../../code_snippets/api-guide/audit-log/operation.sh";


import PythonTime from "!!raw-loader!../../../code_snippets/api-guide/audit-log/time.py";
import JSTime from "!!raw-loader!../../../code_snippets/api-guide/audit-log/time.html";
import NodeTime from "!!raw-loader!../../../code_snippets/api-guide/audit-log/time.js";
import CURLTime from "!!raw-loader!../../../code_snippets/api-guide/audit-log/time.sh";


import PythonUser from "!!raw-loader!../../../code_snippets/api-guide/audit-log/user.py";
import JSUser from "!!raw-loader!../../../code_snippets/api-guide/audit-log/user.html";
import NodeUser from "!!raw-loader!../../../code_snippets/api-guide/audit-log/user.js";
import CURLUser from "!!raw-loader!../../../code_snippets/api-guide/audit-log/user.sh";


import PythonTarget from "!!raw-loader!../../../code_snippets/api-guide/audit-log/target.py";
import JSTarget from "!!raw-loader!../../../code_snippets/api-guide/audit-log/target.html";
import NodeTarget from "!!raw-loader!../../../code_snippets/api-guide/audit-log/target.js";
import CURLTarget from "!!raw-loader!../../../code_snippets/api-guide/audit-log/target.sh";

import PythonSuccess from "!!raw-loader!../../../code_snippets/api-guide/audit-log/success.py";
import JSSuccess from "!!raw-loader!../../../code_snippets/api-guide/audit-log/success.html";
import NodeSuccess from "!!raw-loader!../../../code_snippets/api-guide/audit-log/success.js";
import CURLSuccess from "!!raw-loader!../../../code_snippets/api-guide/audit-log/success.sh";

import PythonSource from "!!raw-loader!../../../code_snippets/api-guide/audit-log/source.py";
import JSSource from "!!raw-loader!../../../code_snippets/api-guide/audit-log/source.html";
import NodeSource from "!!raw-loader!../../../code_snippets/api-guide/audit-log/source.js";
import CURLSource from "!!raw-loader!../../../code_snippets/api-guide/audit-log/source.sh";


import PythonSort from "!!raw-loader!../../../code_snippets/api-guide/audit-log/sort.py";
import JSSort from "!!raw-loader!../../../code_snippets/api-guide/audit-log/sort.html";
import NodeSort from "!!raw-loader!../../../code_snippets/api-guide/audit-log/sort.js";
import CURLSort from "!!raw-loader!../../../code_snippets/api-guide/audit-log/sort.sh";

import PythonPage from "!!raw-loader!../../../code_snippets/api-guide/audit-log/page.py";
import JSPage from "!!raw-loader!../../../code_snippets/api-guide/audit-log/page.html";
import NodePage from "!!raw-loader!../../../code_snippets/api-guide/audit-log/page.js";
import CURLPage from "!!raw-loader!../../../code_snippets/api-guide/audit-log/page.sh";

import OutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/audit-log/output-1.json";

## List Audit Log Events

Here is how you can list all the supported audit log events performed by a user on the Clarifai platform.

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListAuditLogs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAuditLogs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeListAuditLogs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLListAuditLogs}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{OutputExample1}</CodeBlock>
</details>

## Filter Searches

You can optionally refine your searches to retrieve only the operations of interest. This enables targeted audit trails for the activities performed on the Clarifai platform.

### Operation-Based Filtering

You can apply filters to target specific operation types. 

The Audit Logging feature currently supports tracking the following critical resource operations (_we're planning to support more resources in the future_):

- **Organization and team membership activities** — Includes creating, updating, or deleting organizations and teams, sending invitations, and managing team users and applications.
- **Compute Orchestration** – Cover creating, modifying, deleting clusters, nodepools, deployments 
- **Module activities** — Tracks the creation, updating, and deletion of modules. 
- **Model activities** — Tracks actions such as creating, training, publishing, and deleting models.  
- **Workflow activities** — Covers the creation, publishing, updating, and deletion of workflows.  
- **Application activities** — Includes creating, updating, duplicating, and deleting applications.  
- **Collaborator activities** — Includes adding collaborators, editing their scopes, and removing them. 

<details>
  <summary>**Operations Event Types Supported**</summary>
   <Tabs groupId="code">

<TabItem value="default" label="Default">

|Event Type                            |Code                |Description                |
|--------------------------------------|--------------------|---------------------------|
| `EVENT_TYPE_NOT_SET`                 |   0                 |     Event type is not specified, lists all the supported audit log events                      |

</TabItem>


<TabItem value="text" label="Organization Memberships and Teams">

|Event Type                            |Code                |Description                    |
|--------------------------------------|--------------------|---------------------------|
|   `ORGANIZATION_MEMBER_ADD`          |     100            | Organization members added |
|`ORGANIZATION_MEMBER_CHANGE`          | 101                | Organization members' roles changed                          |
|  `ORGANIZATION_MEMBER_REMOVE`        |   102             |    Organization members removed                       |
| `ORGANIZATION_MEMBER_INVITATION_CREATE` |  103           |   Organization member invitations created                        |
| `ORGANIZATION_MEMBER_INVITATION_CANCEL`  |  104                  |  Organization member invitations canceled                         |
| `ORGANIZATION_MEMBER_INVITATION_ACCEPT`         |     105               |   Organization member invitations accepted                        |
|  `ORGANIZATION_MEMBER_INVITATION_DECLINE`   |     106               |  Organization member invitations declined                         |
|  `ORGANIZATION_TEAM_CREATE`     |      107              |   Organization teams created                        |
|  `ORGANIZATION_TEAM_UPDATE`   |  108               | Organization teams updated                          |
|  `ORGANIZATION_TEAM_DELETE` | 109             |Organization teams deleted                           |
|  `ORGANIZATION_TEAM_MEMBER_ADD`   |  110                  |   Organization team members added                        |
|  `ORGANIZATION_TEAM_MEMBER_REMOVE`   | 111                   | Organization team members removed                          |
|  `ORGANIZATION_TEAM_APP_ADD`        |   112            | Organization team applications added                          |
|   `ORGANIZATION_TEAM_APP_REMOVE`   |  113             | Organization team applications removed                          |

</TabItem>

<TabItem value="modules" label="Modules">

|Event Type                            |Code                |Description                    |
|--------------------------------------|--------------------|---------------------------|
| `MODULE_CREATE`                      |     200            | Modules created           |
|   `MODULE_UPDATE`                    |   201              |   Modules updated         |
|   `MODULE_DELETE`                    |  202               |  Modules deleted          |
|    `MODULE_VERSION_CREATE`           |  203               | Module versions created                          |
|   `MODULE_VERSION_UPDATE`            | 204                |  Module versions updated                         |
|   `MODULE_VERSION_DELETE`            |  205                  |   Module versions deleted                        |

</TabItem>

<TabItem value="models" label="Models">

|Event Type                            |Code                |Description                    |
|--------------------------------------|--------------------|---------------------------|
|    `MODEL_CREATE`                 | 300                   |Models created                           |
|     `MODEL_UPDATE`                 |  301                  |  Models updated                         |
|    `MODEL_DELETE`            |    302                | Models deleted                          |
|    `MODEL_VERSION_CREATE`       |    303                |   Model versions created                        |
|   `MODEL_VERSION_UPDATE`        |   304                 | Model versions updated                          |
|  `MODEL_VERSION_DELETE`      |    305              |  Model versions deleted                         |

</TabItem>

<TabItem value="workflows" label="Workflows">

|Event Type                            |Code                |Description                    |
|--------------------------------------|--------------------|---------------------------|
| `WORKFLOW_CREATE`   |  400                  |      Workflows created                     |
|    `WORKFLOW_UPDATE`     |   401                 | Workflows updated                           |
|   `WORKFLOW_DELETE`   |    402                | Workflows deleted                           |
|    `WORKFLOW_VERSION_CREATE`    |  403                  | Workflow versions created                          |
|    `WORKFLOW_VERSION_UPDATE`     |    404                | Workflow versions updated                           |
|    `WORKFLOW_VERSION_DELETE`      |    405                |   Workflow versions deleted                        |

</TabItem>

<TabItem value="applications" label="Applications">

|Event Type                            |Code                |Description                    |
|--------------------------------------|--------------------|---------------------------|
|   `APPLICATION_CREATE`      |   600                 |    Applications created                       |
|   `APPLICATION_UPDATE`     | 601                   |   Applications updated                        |
|   `APPLICATION_DELETE`    |  602          |  Applications deleted                         |

</TabItem>

<TabItem value="collaborators" label="Collaborators">

|Event Type                            |Code                |Description                    |
|--------------------------------------|--------------------|---------------------------|
|    `COLLABORATOR_ADD`                |   700              | Collaborators added       |
|    `COLLABORATOR_UPDATE`            |  701               |  Collaborators updated                         |
|    `COLLABORATOR_REMOVE`        |    702                | Collaborators removed                          |

</TabItem>

<TabItem value="users" label="Users">

|Event Type                            |Code                |Description                    |
|--------------------------------------|--------------------|---------------------------|
|    `USER_UPDATE`                  | 800                   |Users updated                           |

</TabItem>

</Tabs>  
</details>


<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonOperation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSOperation}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeOperation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLOperation}</CodeBlock>
</TabItem>

</Tabs>

### Time-Based Filtering

You can specify precise time ranges for your queries to track exactly when operations were performed.

Note that for HTTP+JSON requests, timestamps are formatted as `2024-08-25T00:00:00Z`. And for gRPC requests, timestamps use separate `seconds` and `nanos` fields, as detailed here: [Protobuf Timestamp Reference](https://protobuf.dev/reference/protobuf/google.protobuf/#timestamp).  

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonTime}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTime}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeTime}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLTime}</CodeBlock>
</TabItem>

</Tabs>

### User-Based Filtering

You can define specific users or groups in your queries to track who performed each operation.

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUser}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUser}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeUser}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLUser}</CodeBlock>
</TabItem>

</Tabs>

### Target-Based Filtering

You can define the target of your query; that is, specify the resource on which an operation recorded in the audit log was performed.

<details>
  <summary>**Target Types Supported**</summary>


| Target           |
|-----------------|
|    `User user`       |        
|   `Role role`              |        
|     `Team team`            |        
|     `App app`            |        
|       `Module module`          |        
|       `ModuleVersion module_version`          |         
|     `Workflow workflow`            |           
|      `WorkflowVersion workflow_version `           |     
|        `Model model`         |     
|        `ModelVersion model_version`         |     

 
</details>

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonTarget}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTarget}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeTarget}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLTarget}</CodeBlock>
</TabItem>

</Tabs>

### Success-Based Filtering

You can filter logs based on the operation outcome, such as whether it was successful. This also enables you to identify failed attempts and take appropriate action. 

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSuccess}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSuccess}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeSuccess}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLSuccess}</CodeBlock>
</TabItem>

</Tabs>

### Source-Based Filtering

You can filter logs based on the IP address where the request originated from. 

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSource}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSource}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeSource}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLSource}</CodeBlock>
</TabItem>

</Tabs>

## Sorting Logs

You can specify the sorting options for the audit logs.

- If `true`, logs are sorted by timestamp in ascending order (oldest to newest).  
- If `false`, logs are sorted in descending order (newest to oldest).  

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonSort}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSSort}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodeSort}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLSort}</CodeBlock>
</TabItem>

</Tabs>

## Pagination

You can split the results into [pages](https://docs.clarifai.com/api-guide/advanced-topics/pagination), which makes it easier to navigate and review the data.

<Tabs groupId="code">
<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonPage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
 <CodeBlock className="language-javascript">{NodePage}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CURLPage}</CodeBlock>
</TabItem>

</Tabs>
