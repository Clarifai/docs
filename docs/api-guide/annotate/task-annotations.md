---
description: This is a page about performing task annotations with the Clarifai API.
sidebar_position: 5
---

# Task Annotations 

**Perform task annotations**
<hr />

In order to keep track of each user's work assigned to a task, all the annotations of this user related to this task should be linked to the task ID.

Therefore, when a user creates an annotation, the task ID should be provided as below:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import JSTaskAnnotations from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_annotations.html";
import CurlTaskAnnotations from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_annotations.sh";
import PyTaskAnnotations from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_annotations.py";
import JavaTaskAnnotations from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_annotations.java";
import PHPTaskAnnotations from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_annotations.php";
import NodeTaskAnnotations from "!!raw-loader!../../../code_snippets/api-guide/annotate/tasks/task_annotations.js";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PyTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTaskAnnotations}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTaskAnnotations}</CodeBlock>
</TabItem>

</Tabs>

