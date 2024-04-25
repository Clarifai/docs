---
description: Group your labeling work into tasks that can be delegated.
sidebar_position: 4
---

# Tasks : Create, Get, Update, Delete

**Group your labeling work into tasks that can be delegated**
<hr />

Task is the work that needs to be done for labeling the inputs in an app. It's a powerful way to help your team annotate inputs fast and efficiently.

These are some parameters you can specify when working with tasks:

- Task type — It can be:
    - `CONCEPTS_CLASSIFICATION` — Concepts classification tasks annotate concepts for the overall image, frame of video, or section of text.
    - `BOUNDING_BOX_DETECTION` — Bounding box detection tasks annotate rectangular bounding box regions around each concept in an image, frame of video, or section of text.
    - `POLYGON_DETECTION` — Polygon detection tasks annotate free-form regions around concepts in an image, frame of video, or section of text.
- Worker — Task worker includes information about the workers that will work on the task. 
- Concept IDs — List of concept IDs used in the work on the task. The concepts should already be existing in your app. 
- Task worker strategy — It can be:
    - `PARTITIONED` — The inputs will be partitioned in several partitions. Each worker will label one or more input partitions.
    - `FULL` — Each worker will label all inputs from the input source.
- Input source — It can be: 
    - `ALL_INPUTS` — Use all inputs in the app.
    - `SAVED_SEARCH` — Use the inputs from a saved search. You also need to specify the `id` of the saved search.
    - `DATASET` — Inputs from a dataset.
- [`sample_ms`](https://docs.clarifai.com/api-guide/predict/video#configuring-fps) — Used in video model predictions. It specifies the sample delay for video predictions (1 frame per N milliseconds). 
- Review strategy — It can be: 
    - `NONE` — No review is needed.
    - `MANUAL` — Manual review strategy.
    - `CONSENSUS` — Consensus review strategy.
- Partitioned strategy info — It can be:    
    - `EVENLY` — Each worker will label (approximately) the same number of inputs.
    - `WEIGHTED` — Each worker will have an assigned weight.
- Workers per input — How many workers will label each input. 

:::info

The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PyNonAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/non-assigned_task.py";
import PyAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/assigned_task.py";
import PyTaskPartitionedWorkerStrategy from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.py";
import PyConsensusReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.py";
import PyGetTaskByID from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.py";
import PyListAllTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.py";
import PyListTasksAssignedUser from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.py";
import PyListTasksAssignedUserReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.py";
import PyUpdateTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/update_task.py";
import PyDeleteMultipleTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.py";

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

import NodeNonAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/non_assigned_task.js";
import NodeAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/assigned_task.js";
import NodeDeleteMultipleTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.js";
import NodeGetTaskByID from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.js";
import NodeListAllTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.js";
import NodeListTasksAssignedUser from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.js";
import NodeListTasksAssignedUserReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.js";

import JavaNonAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/non-assigned_task.java";
import JavaUpdateTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/update_task.java";
import JavaDeleteMultipleTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.java";
import JavaGetTaskByID from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.java";
import JavaListAllTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.java";
import JavaListTasksAssignedUser from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.java";
import JavaListTasksAssignedUserReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.java";

import PHPNonAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/non_assigned_task.php";
import PHPGetTaskByID from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.php";
import PHPListAllTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.php";
import PHPListTasksAssignedUser from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.php";
import PHPListTasksAssignedUserReview from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.php";
import PHPAssignedTask from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/assigned_task.php";
import PHPDeleteMultipleTasks from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.php";

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

To create a new task in your app, you `POST` the task information to the `v2/task` endpoint.

### Non-Assigned Task

A task should be assigned to a list of users, but it's not required. The following code will create a non-assigned task.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyNonAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSNonAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeNonAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaNonAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPNonAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlNonAssignedTask}</CodeBlock>
</TabItem>


</Tabs>

### Assigned Task

A task should be assigned to a list of users. These users will do the work, so they're also called workers. A task may also be assigned to a list of users for review.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAssignedTask}</CodeBlock>
</TabItem>

</Tabs>

### Task With Partitioned Worker Strategy

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

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

</Tabs>

:::info

* It is not required for the weights to add up to 100. For example, the weights \[9, 1\] are equivalent with weights \[90, 10\].
* The partitioning is approximate. This means that the number of assigned inputs to each worker may have a small error margin, but it will be close to the assigned weight percentage.

:::

### Task With Consensus Review

The previous tasks were created with no review or manual review strategy.

```javascript
{
  "strategy": "MANUAL"
}
```

We recommend to create tasks with `CONSENSUS` review strategy. When enough workers label an input in the same way, it will automatically be approved, with no need for the reviewer to spend time to check. In this way, the reviewer will be able to focus on the inputs where the workers don't agree.

Note that an approval threshold must be set. It is the number of labelers that need to agree in order to automatically approve an annotation. 

For example, in case of 3 workers and `approval_threshold` set to 2, if an input is labeled in the same way by 2 workers, they form a majority and the group reaches a consensus.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlConsensusReview}</CodeBlock>
</TabItem>

</Tabs>

## Get

### Get Task by ID

You can get the details of a single task by its ID, which is automatically generated upon task creation. You can output the API response to obtain this task ID. 

Alternatively, you can also locate the task ID within the [Clarifai platform's user interface](https://docs.clarifai.com/portal-guide/annotate/create-a-task#tasks-listing).

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetTaskByID}</CodeBlock>
</TabItem>

</Tabs>

### List All Tasks

You can get a list of tasks within your app with a `GET` call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAllTasks}</CodeBlock>
</TabItem>

</Tabs>

### List Tasks Assigned to User

Get only the tasks assigned to a specific user for work.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListTasksAssignedUser}</CodeBlock>
</TabItem>

</Tabs>

### List Tasks Assigned to User for Review

Get only the tasks assigned to a specific user for review.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListTasksAssignedUserReview}</CodeBlock>
</TabItem>

</Tabs>

## Update

Currently, we only support updating a task by providing all information at once.

### Update Task

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateTask}</CodeBlock>
</TabItem>

</Tabs>

## Delete

You can delete a task by specifying its ID. You can also delete multiple tasks by specifying a list of their IDs. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPDeleteMultipleTasks}</CodeBlock>
</TabItem>

<!--
<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteMultipleTasks}</CodeBlock>
</TabItem>
-->

</Tabs>

