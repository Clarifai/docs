---
description: Group your labeling work into tasks that can be delegated.
sidebar_position: 4
---

# Tasks

**Group your labeling work into tasks that can be delegated**
<hr />

Tasks are a powerful tool that can help your team to annotate inputs from your application.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import JSNonAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/non_assigned_task.html";
import JSAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/assigned_task.html";
import JSTaskPartitionedWorkerStrategy from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.html";
import JSConsensusReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.html";
import JSGetTaskByID from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.html";
import JSListAllTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.html";
import JSListTasksAssignedUser from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.html";
import JSListTasksAssignedUserReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.html";
import JSUpdateTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/update_task.html";
import JSDeleteMultipleTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.html";

import CurlNonAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/non_assigned_task.sh";
import CurlAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/assigned_task.sh";
import CurlTaskPartitionedWorkerStrategy from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.sh";
import CurlConsensusReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.sh";
import CurlGetTaskByID from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.sh";
import CurlListAllTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.sh";
import CurlListTasksAssignedUser from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.sh";
import CurlListTasksAssignedUserReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.sh";
import CurlUpdateTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/update_task.sh";
import CurlDeleteMultipleTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.sh";

## Create

To create a new task in your app, you `POST` the task information to `v2/task` endpoint.

### Non-Assigned Task

A task should be assigned to a list of users, but it's not required. The following code will create a non-assigned task.

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlNonAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSNonAssignedTask}</CodeBlock>
</TabItem>

</Tabs>

### Assigned Task

A task should be assigned to a list of users. These users will do the work, so they're also called workers. A task may also be assigned to a list of users for review.

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAssignedTask}</CodeBlock>
</TabItem>

</Tabs>

## Task With Partitioned Worker Strategy

The previous tasks were created with full worker strategy.

```javascript
{
    "strategy": "FULL"
}
```

In case of `FULL` worker strategy, each worker will work on all inputs selected in the input source.

If you wish the work to be distributed between workers, then you can select the `PARTITIONED` worker strategy.

In the following example, there are two workers:

* `workers_per_input`: each input will be assigned to 1 worker
* `weights.user_id_1`: the first worker will get 90% of inputs
* `weights.user_id_2`: the second worker will get 10% of inputs

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

</Tabs>

:::info

* It is not required for the weights to add up to 100. For example, the weights \[9, 1\] are equivalent with weights \[90, 10\].
* The partitioning is approximate. This means that the number of assigned inputs to each worker may have a small error margin, but it will be close to the assigned weight percentage.

:::

## Task With Consensus Review

The previous tasks were created with no review or manual review strategy.

```javascript
{
  "strategy": "MANUAL"
}
```

We recommend to create tasks with `CONSENSUS` review strategy. When enough workers label an input in the same way, it will automatically be approved, with no need for the reviewer to spend time to check. In this way, the reviewer will be able to focus on the inputs where the workers don't agree.

Note that an approval threshold must be set. For example, in case of 3 workers and `approval_threshold` set to 2, if an input is labeled in the same way by 2 workers, they form a majority and the group reaches a consensus.

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSConsensusReview}</CodeBlock>
</TabItem>

</Tabs>

## Get

### Get Task by ID

You can get a singular task by its ID. The ID was automatically generated when it was created.

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetTaskByID}</CodeBlock>
</TabItem>

</Tabs>

### List All Tasks

You can get a list of tasks within your app with a `GET` call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAllTasks}</CodeBlock>
</TabItem>

</Tabs>

### List Tasks Assigned to User

Get only the tasks assigned to a specific user for work.

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListTasksAssignedUser}</CodeBlock>
</TabItem>

</Tabs>

### List Tasks Assigned to User for Review

Get only the tasks assigned to a specific user for review.

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListTasksAssignedUserReview}</CodeBlock>
</TabItem>

</Tabs>

## Update

Currently, we only support updating a task by providing all information at once.

### Update Task

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateTask}</CodeBlock>
</TabItem>

</Tabs>

## Delete

### Delete Multiple Tasks

You can delete tasks using their IDs.

<Tabs>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteMultipleTasks}</CodeBlock>
</TabItem>

</Tabs>

