---
description: Manage and scale pipelines across their entire lifecycle
sidebar_position: 2
unlisted: true
---

# Manage Pipelines

**Manage and scale pipelines across their entire lifecycle**
<hr />

Managing your Clarifai Pipelines across their lifecycle keeps them organized and production-ready, so you can scale confidently and maintain consistent performance.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


## List Pipelines

The `list` (or `ls`) command displays all pipelines available in your specified application. This is useful for verifying that your pipeline was successfully uploaded to the Clarifai platform and discovering pipelines across different apps.

It has the following options:

- `--app_id` — Only list pipelines from a specific app
- `--page_no` — (Optional) Page number to display (useful when there are many pipelines)                                 
- `--per_page` — (Optional) Number of pipelines to return per page                                                        


### List All Pipelines

Run the following command to list all the pipelines for the user.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    # List pipelines from a specific app
    clarifai pipeline list --app_id my-app

    # List pipelines with pagination
    clarifai pipeline list --app_id my-app --page_no 2 --per_page 10
    ```
</TabItem>
</Tabs>


<details>
  <summary>Example Output</summary>

    ```text
clarifai pipeline list --app_id pipelines-1                          
ID                    USER_ID    APP_ID       VERSION_ID                        DESCRIPTION    CREATED_AT            MODIFIED_AT
hello-world-pipeline  alfrick    pipelines-1  48862434906f482e94a2ec638a4233a1                 2025-11-26T14:15:51Z  2025-11-26T14:15:51Z

clarifai pipeline list --app_id pipelines-1 --page_no 1 --per_page 10
ID                    USER_ID    APP_ID       VERSION_ID                        DESCRIPTION    CREATED_AT            MODIFIED_AT
hello-world-pipeline  alfrick    pipelines-1  48862434906f482e94a2ec638a4233a1                 2025-11-26T14:15:51Z  2025-11-26T14:15:51Z
```

</details>

### List All Pipeline Steps

Run the following command to list only the [pipeline steps](create-api.md#pipeline-steps) for the user.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
    # 
    clarifai pipelinestep list --app_id my-app

    # Or:
    clarifai ps ls --app_id my-app
    ```
</TabItem>
</Tabs>


<details>
  <summary>Example Output</summary>

```text
    PIPELINE_STEP_ID    USER_ID    APP_ID       VERSION_ID                        DESCRIPTION            CREATED_AT            MODIFIED_AT
stepA               alfrick    pipelines-1  e7b2839d02b0463e8a45e7a37afc767b  Pipeline step version  2025-11-28T05:23:46Z  2025-11-28T05:23:53Z
stepB               alfrick    pipelines-1  5e93c74ef8ae456ab353aa5e60e46f97  Pipeline step version  2025-11-26T14:15:36Z  2025-11-26T14:15:43Z
stepA               alfrick    pipelines-1  36e752e546334fa28d73bcbdc86d37a7  Pipeline step version  2025-11-26T14:14:02Z  2025-11-26T14:15:29Z
 ```

</details>


## Validate Lock File

The `validate-lock` command verifies that your root [`config-lock.yaml`](create-api.md#step-4-upload-the-pipeline) file matches the expected schema. It checks that all referenced steps, versions, and configurations are valid.

You can use this command before re-uploading or running your pipeline to catch configuration errors early and ensure everything is consistent.

<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
# Validate lock file in the current directory
clarifai pipeline validate-lock

# Validate a specific lock file
clarifai pipeline validate-lock ./my-pipeline/config-lock.yaml
    ```
</TabItem>
</Tabs>

> **Note:** If no path is provided, the CLI automatically looks for a `config-lock.yaml` file in your current working directory.

<details>
  <summary>Example Output</summary>

    ```text
clarifai pipeline validate-lock
[INFO] 15:45:54.415983 ✅ Lockfile config-lock.yaml is valid |  thread=8329666752 
[INFO] 15:45:54.416070 Pipeline: hello-world-pipeline |  thread=8329666752 
[INFO] 15:45:54.416102 User: alfrick |  thread=8329666752 
[INFO] 15:45:54.416129 App: pipelines-1 |  thread=8329666752 
[INFO] 15:45:54.416149 Version: 48862434906f482e94a2ec638a4233a1 |  thread=8329666752 
```

</details>



