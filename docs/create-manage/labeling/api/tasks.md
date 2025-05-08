---
description: Group your labeling work into tasks that can be delegated.
sidebar_position: 4
---

# Tasks : Create, Get, Update, Delete

**Group your labeling work into tasks that can be delegated**
<hr />

Task is the work that needs to be done for labeling the inputs in an app. It's a powerful way to help your team annotate inputs fast and efficiently.

These are some parameters you can specify when working with tasks:

- **Task type** — It can be:   
    - `CONCEPTS_CLASSIFICATION` — Concepts classification tasks annotate [concepts](https://docs.clarifai.com/api-guide/concepts/) for the overall image, frame of video, or section of text.
    - `BOUNDING_BOX_DETECTION` — Bounding box detection tasks annotate rectangular bounding box regions around each concept in an image, frame of video, or section of text.
    - `POLYGON_DETECTION` — Polygon detection tasks annotate free-form regions around concepts in an image, frame of video, or section of text.
    - `TYPE_NOT_SET` — This is the default task type. It should be used when creating an auto-annotation task. 
- **Worker** — Task worker includes information about the workers who will work on the task. For manual labeling tasks, the workers can only be users; no limitation on number of workers. For auto-annotation tasks, the worker can be either a model or a workflow; currently only supports 1 worker.
- **Concepts** — List of concept IDs used in the work on the task. The concepts should already be existing in your app. 
- **Task worker strategy** — It can be:
    - `DYNAMIC` —  Each worker will dynamically get 10 inputs assigned at a time. No inputs are assigned at task creation. It's the recommended way to set a task worker strategy. 
    - `PARTITIONED` — The inputs will be partitioned in several partitions. Each worker will label one or more input partitions.  All inputs are assigned at task creation.
    - `FULL` — Each worker will label all inputs from the input source. All inputs are assigned at task creation.
- **Input source** — It can be: 
    - `ALL_INPUTS` — Use all inputs in the app.  
    - `DATASET` — Use inputs from a [dataset](https://docs.clarifai.com/api-guide/data/datasets/).
- **[`sample_ms`](https://docs.clarifai.com/api-guide/predict/video#configuring-fps)** — Used in video model predictions. It specifies the sample delay for video predictions (1 frame per N milliseconds). 
- **Review strategy** — It can be: 
    - `NONE` — No review is needed.
    - `MANUAL` — Manual review strategy.
    - `CONSENSUS` — Consensus review strategy.
- **Partitioned strategy info** — It can be:    
    - `EVENLY` — Each worker will label (approximately) the same number of inputs.
    - `WEIGHTED` — Each worker will have an assigned weight.
- **Workers per input** — The number of workers who will label each input. 
- **Auto-annotation config** - The concepts configurations for setting up an auto-annotation labeling task using a model or a workflow. You can set:    
    - `annotation_data_types` — An integer for filtering annotations by their annotation data type. It's a bit-mask field that holds multiple annotation data type values that are combined in an OR fashion. For example, if `annotation_data_types = 34`, then we filter annotations that appear as a mask or a bounding box, because `MASK = 32` and `BOUNDING_BOX = 2`. You can look for the various annotation data types values [here](https://github.com/Clarifai/clarifai-go-grpc/blob/master/proto/clarifai/api/resources.pb.go). For example, `annotation_data_types=1` corresponds to `AnnotationDataType_TAG`. 
    - `threshold_range` — It specifies a range of predictions values based on the lower and upper bounds, and it defines whether these bounds are inclusive or exclusive. For example, if you set `is_lower_inclusive = true`, `is_upper_inclusive = true`, `lower = 0.7` and `upper = 1.0`, it is interpreted as the prediction range includes all values from 0.7 to 1.0, including both 0.7 and 1.0.
    - `status_code` — It specifies the [code](https://docs.clarifai.com/api-guide/advanced-topics/status-codes#annotation-related-codes-24xxx) related to the status of the annotation. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PyAssignedTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/assigned_task.py";
import PyTaskPartitionedWorkerStrategy from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.py";
import PyConsensusReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.py";
import PyGetTaskByID from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.py";
import PyListAllTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.py";
import PyListTasksAssignedUser from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.py";
import PyListTasksAssignedUserReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.py";
import PyUpdateTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/update_task.py";
import PyDeleteMultipleTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.py";
import PyAutoAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/auto_annotation.py";

import JSAssignedTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/assigned_task.html";
import JSTaskPartitionedWorkerStrategy from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.html";
import JSConsensusReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.html";
import JSGetTaskByID from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.html";
import JSListAllTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.html";
import JSListTasksAssignedUser from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.html";
import JSListTasksAssignedUserReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.html";
import JSUpdateTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/update_task.html";
import JSDeleteMultipleTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.html";
import JSAutoAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/auto_annotation.html";

import NodeAssignedTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/assigned_task.js";
import NodeTaskPartitionedWorkerStrategy from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.js";
import NodeConsensusReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.js";
import NodeDeleteMultipleTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.js";
import NodeGetTaskByID from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.js";
import NodeListAllTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.js";
import NodeListTasksAssignedUser from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.js";
import NodeListTasksAssignedUserReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.js";
import NodeAutoAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/auto_annotation.js";

import JavaAssignedTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/assigned_task.java";
import JavaTaskPartitionedWorkerStrategy from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.java";
import JavaConsensusReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.java";
import JavaUpdateTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/update_task.java";
import JavaDeleteMultipleTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.java";
import JavaGetTaskByID from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.java";
import JavaListAllTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.java";
import JavaListTasksAssignedUser from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.java";
import JavaListTasksAssignedUserReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.java";
import JavaAutoAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/auto_annotation.java";

import PHPTaskPartitionedWorkerStrategy from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.php";
import PHPConsensusReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.php";
import PHPGetTaskByID from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.php";
import PHPListAllTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.php";
import PHPListTasksAssignedUser from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.php";
import PHPListTasksAssignedUserReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.php";
import PHPAssignedTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/assigned_task.php";
import PHPUpdateTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/update_task.php";
import PHPDeleteMultipleTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.php";
import PHPAutoAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/auto_annotation.php";

import CurlAssignedTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/assigned_task.sh";
import CurlTaskPartitionedWorkerStrategy from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_partitioned_worker_strategy.sh";
import CurlConsensusReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_consensus_review.sh";
import CurlGetTaskByID from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/get_task_by_id.sh";
import CurlListAllTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_all_tasks.sh";
import CurlListTasksAssignedUser from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user.sh";
import CurlListTasksAssignedUserReview from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/list_tasks_assigned_user_review.sh";
import CurlUpdateTask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/update_task.sh";
import CurlDeleteMultipleTasks from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/delete_multiple_tasks.sh";
import CurlAutoAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/auto_annotation.sh";

import JSTaskAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_annotations.html";
import CurlTaskAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_annotations.sh";
import PyTaskAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_annotations.py";
import JavaTaskAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_annotations.java";
import PHPTaskAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_annotations.php";
import NodeTaskAnnotations from "!!raw-loader!../../../../code_snippets/api-guide/annotate/tasks/task_annotations.js";

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::


## Create

To create a new task in your app, you `POST` the task information to the `v2/task` endpoint.

### Assigned Task

A task should be assigned to a list of users. These users will do the labeling work, so they're also called workers. A task may also be assigned to a list of users for review purposes.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAssignedTask}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAssignedTask}</CodeBlock>
</TabItem>

</Tabs>

<!--
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
-->
<!--
<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>
-->

<!--
<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTaskPartitionedWorkerStrategy}</CodeBlock>
</TabItem>

</Tabs>

:::info

* It is not required for the weights to add up to 100. For example, the weights \[9, 1\] are equivalent with weights \[90, 10\].
* The partitioning is approximate. This means that the number of assigned inputs to each worker may have a small error margin, but it will be close to the assigned weight percentage.

:::
-->

### Task With Consensus Review

You can also create tasks with `CONSENSUS` review strategy. When enough workers label an input in the same way, it will automatically be approved, with no need for the reviewer to spend time to check. In this way, the reviewer will be able to focus on the inputs where the workers don't agree.

Note that an approval threshold must be set. It is the number of labelers that need to agree in order to automatically approve an annotation. 

For example, in case of 3 workers and `approval_threshold` set to 2, if an input is labeled in the same way by 2 workers, they form a majority and the group reaches a consensus.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPConsensusReview}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlConsensusReview}</CodeBlock>
</TabItem>

</Tabs>

### Auto-Annotation Task

You can create an auto-annotation task and automatically label the inputs in your dataset. You need to specify a model or a workflow you want to use its predictions to automatically generate annotations or labels for your data.

:::tip

You can learn how to perform auto-annotation via the UI [here](https://docs.clarifai.com/portal-guide/annotate/auto-annotation). 

:::

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyAutoAnnotation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAutoAnnotation}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAutoAnnotation}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAutoAnnotation}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAutoAnnotation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAutoAnnotation}</CodeBlock>
</TabItem>

</Tabs>

## Get

### Get Task by ID

You can get the details of a single task by its ID, which is automatically generated upon task creation. You can output the API response to obtain this task ID. 

Alternatively, you can also locate the task ID within the [Clarifai platform's user interface](https://docs.clarifai.com/portal-guide/annotate/create-a-task#tasks-listing).

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPGetTaskByID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlGetTaskByID}</CodeBlock>
</TabItem>

</Tabs>

### List All Tasks

You can get a list of tasks within your app with a `GET` call. This call supports [pagination](https://docs.clarifai.com/api-guide/advanced-topics/pagination/).

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListAllTasks}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAllTasks}</CodeBlock>
</TabItem>

</Tabs>

### List Tasks Assigned to User

Get only the tasks assigned to a specific user for work.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListTasksAssignedUser}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListTasksAssignedUser}</CodeBlock>
</TabItem>

</Tabs>

### List Tasks Assigned to User for Review

Get only the tasks assigned to a specific user for review.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListTasksAssignedUserReview}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
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

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUpdateTask}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUpdateTask}</CodeBlock>
</TabItem>

</Tabs>


## Task Annotations 

In order to keep track of each user's work assigned to a task, all the annotations of this user related to this task should be linked to the task ID.

Therefore, when a user creates an annotation, the task ID should be provided as below:

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTaskAnnotations}</CodeBlock>
</TabItem>

</Tabs>


## Delete

You can delete a task by specifying its ID. You can also delete multiple tasks by specifying a list of their IDs. 

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PyDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPDeleteMultipleTasks}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlDeleteMultipleTasks}</CodeBlock>
</TabItem>

</Tabs>

