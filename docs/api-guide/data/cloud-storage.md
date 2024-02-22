---
description: Learn how to extract inputs from cloud platforms to Clarifai
sidebar_position: 3
---

# Add Inputs From Cloud Storage 

**Learn how to extract inputs from cloud platforms to Clarifai**
<hr />

You can add inputs from various cloud storage platforms, such as S3 (Amazon Simple Storage Service) and GCP (Google Cloud Platform), by simply providing their corresponding URLs. In cases where access credentials are necessary, you can include them as part of the request.

This simplifies the process of adding inputs to our platform, offering a more efficient alternative to the conventional method of using the **PostInputs** endpoint for users who already have data stored in the cloud platforms.

:::note

This functionality has been introduced starting from the [10.1 release](https://docs.clarifai.com/product-updates/changelog/release101#api).

:::


:::info

- Image files stored in the cloud platforms will be treated as image inputs, video files as video inputs, etc. Archives will be extracted, and their contents will also be processed like this. 

- We do not support extraction of archives located inside other archives. 

- The cloud URL will serve as a filter prefix. For instance, in the case of an S3 URL like `s3:/bucket/images_folder/abc`, files within the `images_folder` will be processed starting with `abc`, or within a subfolder beginning with `abc`. For example, files such as `bucket/images_folder/abcImage.png` or `bucket/images_folder/abc-1/Data.zip` will be processed accordingly.

:::


## Add Inputs via Cloud Storage URLs

Below is an example of pulling inputs from a subfolder of an S3 bucket. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCloudStorageURLs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.py";
import JSCloudStorageURLs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.html";
import NodeCloudStorageURLs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.js";
import JavaCloudStorageURLs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.java";
import PHPCloudStorageURLs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.php";
import CurlCloudStorageURLs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.sh";

import PythonTrackUploadProcess from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.py";
import JSTrackUploadProcess from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.html";
import NodeTrackUploadProcess from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.js";
import JavaTrackUploadProcess from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.java";
import PHPTrackUploadProcess from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.php";
import CurlTrackUploadProcess from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.sh";

import PythonListInputsJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.py";
import JSListInputsJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.html";
import NodeListInputsJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.js";
import JavaListInputsJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.java";
import PHPListInputsJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.php";
import CurlListInputsJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.sh";

import PythonCancelJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.py";
import JSCancelJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.html";
import NodeCancelJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.js";
import JavaCancelJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.java";
import PHPCancelJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.php";
import CurlCancelJobs from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cancel_jobs.sh";

import PythonConceptsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.py";
import JSConceptsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.html";
import NodeConceptsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.js";
import JavaConceptsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.java";
import PHPConceptsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.php";
import CurlConceptsDatasets from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.sh";

import OutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/cloud-storage-urls.txt";
import OutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/track-upload-process.txt";
import OutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/list_inputs_jobs.txt";
import OutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/data/cloud-storage/concepts_datasets.txt";


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCloudStorageURLs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCloudStorageURLs}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample1}</CodeBlock>
</details>

## Track Upload Process

After starting to pull the inputs from a cloud storage service, you can track the progress of the exercise. Note that we’ll use the `inputs_extraction_job_id` returned after running the extraction job. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPTrackUploadProcess}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrackUploadProcess}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample2}</CodeBlock>
</details>

## List Inputs Extraction Jobs 

You can list all your inputs extraction jobs and get their details. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPListInputsJobs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlListInputsJobs}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample3}</CodeBlock>
</details>

## Cancel Extraction Jobs

You can cancel the process of extraction of inputs from a cloud storage service. Note that we’ll use the `inputs_extraction_job_id` returned after starting the extraction process. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPCancelJobs}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCancelJobs}</CodeBlock>
</TabItem>

</Tabs>

## Add Inputs With Concepts and Datasets

You can also add inputs from cloud storage platforms while attaching relevant concepts, assigning them to an already existing [dataset](https://docs.clarifai.com/api-guide/data/datasets/dataset-basics), or adding other metadata information to them. 

The `input_template` parameter allows you to do that. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPConceptsDatasets}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlConceptsDatasets}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-javascript">{OutputExample4}</CodeBlock>
</details>