---
description: Label your data.
sidebar_position: 2
---


# List Annotations

You can get a list of annotations within your app with a GET call. Annotations will be returned from oldest to newest.

These requests are [paginated](https://docs.clarifai.com/resources/api-overview/pagination/). By default each page will return 20 annotations.

### List All User Created Annotations in Your App

Below is an example of how to list all your user labelled annotations.

:::important note

This will not show annotations by models in your workflow. To include model created annotations, you need to set `list_all_annotations` to `True`.

:::

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonlistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSlistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodelistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavalistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPlistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurllistUserCreatedAnnotationsApp}</CodeBlock>
</TabItem>

</Tabs>

### List All Annotations in Your App

Below is an example of how to list all annotations, including those created by models.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListAllAnnotationsApp}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAllAnnotationsApp}</CodeBlock>
</TabItem>

</Tabs>

### List User Created Annotations by Input IDs

Below is an example of how to list all user created annotations for certain input \(one or several\) by providing a list of input IDs.

:::important note

This will not show annotations by models in your workflow. To include model created annotations, you need to set `list_all_annotations` to `True`.

:::

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListUserCreatedAnnotationsInputIds}</CodeBlock>
</TabItem>

</Tabs>

### List Annotations by Input IDs and Annotation IDs

You can list annotations by input IDs and their corresponding annotation IDs. Number of input IDs and annotation IDs should be the same. Since we are finding annotation by IDs, this will match any user or model created annotations.

Below is an example of how to do that.

:::tip

- When listing annotations, both input IDs and annotation IDs are optional. If you do not provide any input ID or annotation ID, we will return all annotations based on the creation time of each input. 

- You can also list annotations by providing input IDs only. 

- However, if you want to list annotations by providing annotation IDs, then input IDs are also required so that we know the inputs that correspond to the annotation IDs provided in the request. In this case, the number of input IDs should be equal to the number of annotation IDs. 

:::

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAnnotationsInputAnnotationIds}</CodeBlock>
</TabItem>

</Tabs>

### List Annotations by User IDs

An annotation is created by either a user or a model. You can list annotations created by specific user\(s\) by providing their user IDs.

Below is an example of how to do that.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListAnnotationsUserIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAnnotationsUserIds}</CodeBlock>
</TabItem>

</Tabs>

### List Annotations by Model Version IDs

An annotation is created by either a user or a model. For example, if your workflow has a detection model, when you add an input, the model will detect objects in your input. You can see these detected objects by listing the annotations created in the detection model. 

You can also label these regions by using `Post annotation` with the region ID returned from this call.

Below is an example of how to list annotations by model version IDs.

<Tabs>

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListAnnotationsModelVersionIds}</CodeBlock>
</TabItem>

</Tabs>





import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonListAllAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/list_all_annotations_app.py";
import PythonListAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/list_annotations_input_annotation_ids.py";
import PythonListAnnotationsModelVersionIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/list_annotations_model_version_ids.py";
import PythonListAnnotationsUserIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/list_annotations_user_ids.py";
import PythonlistUserCreatedAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/list_user_created_annotations_app.py";
import PythonListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/list_user_created_annotations_input_ids.py";

import JSListAllAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/list_all_annotations_app.html";
import JSListAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/list_annotations_input_annotation_ids.html";
import JSListAnnotationsModelVersionIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/list_annotations_model_version_ids.html";
import JSListAnnotationsUserIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/list_annotations_user_ids.html";
import JSlistUserCreatedAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/list_user_created_annotations_app.html";
import JSListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/list_user_created_annotations_input_ids.html";

import NodeListAllAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/list_all_annotations_app.js";
import NodeListAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/list_annotations_input_annotation_ids.js";
import NodeListAnnotationsModelVersionIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/list_annotations_model_version_ids.js";
import NodeListAnnotationsUserIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/list_annotations_user_ids.js";
import NodelistUserCreatedAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/list_user_created_annotations_app.js";
import NodeListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/list_user_created_annotations_input_ids.js";

import JavaListAllAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/list_all_annotations_app.java";
import JavaListAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/list_annotations_input_annotation_ids.java";
import JavaListAnnotationsModelVersionIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/list_annotations_model_version_ids.java";
import JavaListAnnotationsUserIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/list_annotations_user_ids.java";
import JavalistUserCreatedAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/list_user_created_annotations_app.java";
import JavaListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/list_user_created_annotations_input_ids.java";

import PHPListAllAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/list_all_annotations_app.php";
import PHPListAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/list_annotations_input_annotation_ids.php";
import PHPListAnnotationsModelVersionIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/list_annotations_model_version_ids.php";
import PHPListAnnotationsUserIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/list_annotations_user_ids.php";
import PHPlistUserCreatedAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/list_user_created_annotations_app.php";
import PHPListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/list_user_created_annotations_input_ids.php";

import CurlListAllAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/list_all_annotations_app.sh";
import CurlListAnnotationsInputAnnotationIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/list_annotations_input_annotation_ids.sh";
import CurlListAnnotationsModelVersionIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/list_annotations_model_version_ids.sh";
import CurlListAnnotationsUserIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/list_annotations_user_ids.sh";
import CurllistUserCreatedAnnotationsApp from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/list_user_created_annotations_app.sh";
import CurlListUserCreatedAnnotationsInputIds from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/list_user_created_annotations_input_ids.sh";

import PythonAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/py/annotate_mask.py";
import JavascriptAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/js/annotate_mask.html";
import NodeAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/node/annotate_mask.js";
import JavaAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/java/annotate_mask.java";
import PHPAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/php/annotate_mask.php";
import CURLAnnotateMask from "!!raw-loader!../../../../code_snippets/api-guide/annotate/curl/annotate_mask.sh";
