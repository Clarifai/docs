---
description: Understand Clarifai’s API responses
sidebar_position: 4
draft: true
---

# API Outputs

**Understand Clarifai’s API responses**
<hr />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import Output1 from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/api-outputs.json";
import Output2 from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/rest-outputs.json";

Clarifai’s API responses are designed to provide clear and structured feedback to help you easily interpret results and effectively debug your code. Each API response adheres to a well-defined, nested, hierarchical structure, where data is organized into distinct messages and fields. 

The responses are delivered in different data formats depending on your request, but they can be processed in a similar manner programmatically. 

- [REST API](https://docs.clarifai.com/api-guide/api-overview/api-clients/grpc-vs-http-channels#when-to-use-the-http-channel) requests deliver responses in JSON, characterized by the `{ "key": "value" }` syntax. 

- For gRPC requests, typically made through our [Python SDK](https://docs.clarifai.com/sdk/python-installation) or other [client libraries](https://docs.clarifai.com/api-guide/api-overview/api-clients/), responses are provided in Protocol Buffers (protobuf), a binary serialization format optimized for speed and size. Protobuf uses the `key: value` syntax in its text format.

The specific content within a response varies based on the API endpoint you've used. For example, a response from a [model prediction](https://docs.clarifai.com/api-guide/predict/images#predict-via-url) request will differ significantly from one obtained when [creating a concept](https://docs.clarifai.com/api-guide/concepts/create-get-update/#add-concepts).

<details>
  <summary>Example response from REST API request</summary>
    <CodeBlock className="language-json">{Output2}</CodeBlock>
</details>

<details>
  <summary>Example response from gRPC API request</summary>
    <CodeBlock className="language-json">{Output1}</CodeBlock>
</details>

Typically, the response consists of several key sections, including:

- **Id** — The `id` is a unique identifier assigned to an API operation or resource. It serves as a reference that allows tracking, retrieval, and management of the request or resource in future interactions. Example: `id: "a6fbf0c4f4bf4bb09f2158ad3f8dfc4e"`. 
- **Status** — Indicates the overall success or failure of the request.
- **Outputs** — Contains details about the data processed by the API (such as images, videos, or text) and the results of the analysis, such as timestamps, resource information, and other relevant details.
-  **Results** — This section, which is mostly found within the outputs section, contains the core results of the API call, such as predictions or analysis data.

## Status Section

The top-level `status` section provides information about the outcome of the API request. It includes:

- `code` — A numeric or string code indicating the status (such as 10000 or SUCCESS for a successful response). See a list of all the Clarifai’s status codes [here](https://docs.clarifai.com/api-guide/api-overview/status-codes). 
- `description` — A human-readable message describing the status (such as "Ok", "Download pending").
- `req_id` — A unique identifier for the request, useful for debugging and tracking.

Below is an example of a successful response from a gRPC API request:

```text
status {
  code: SUCCESS
  description: "Ok"
  req_id: "a6073f6b81df496faa084355a05f81f0"
}
```

Below is an example of a successful response from a REST API request:

```text
"status": {
    "code": 10000,
    "description": "Ok",
    "req_id": "20ab5bcf0566429f9b350e50372456ce"
    },
```

Below is an example of a failed response from a gRPC API request:

```text
code: MODEL_DOES_NOT_EXIST
description: "Model does not exist"
details: "Model does not exist"
req_id: "4d6cf25f4e0c48b19ff3ec1755ac1b29"
```

Below is an example of a failed response from a REST API request:

```text
"status": {
    "code": 21200,
    "description": "Model does not exist",
    "details": "Model does not exist",
    "req_id": "09715165a0d24a109f3951b61d73dfe8"
}
```

 ## Outputs Section

Beyond the `status` output, the content of the response varies depending on the type of operation you performed. 

Below are some of the most common details found in API responses.

### Resource Details

The response can include details about the resource involved in the request, such as an input, model, workflow, or application.

For example, when analyzing an image input, you can find the `id`, `name`, and other relevant details of the model used for processing.

```text
"model": {
    "id": "general-image-recognition",
    "name": "Image Recognition",
    "model_version": {
        "id": "aa7f35c01e0642fda5cf400f543e7c40",
            "created_at": "2018-03-06T21:10:24.454834Z",
            "status": {
                "code": 21100,
                "description": "Model is trained and ready for deployment"
            },
    }
}
```

### Timestamps

Timestamps provide important information about when a resource was created and last modified. These timestamps are crucial for tracking changes, auditing, and understanding the lifecycle of resources in your Clarifai projects.

These are the timestamps outputted in a successful response:

- `created_at` — Indicates the exact date and time when a resource or an operation was first created or first performed, respectively.
- `modified_at` — Indicates the exact date and time when a resource was last modified.

Below is an example response from a gRPC API request:

:::info

The gRPC response includes timestamps in Unix epoch time, which represents the number of seconds since January 1, 1970 (UTC). For example, a `created_at` field of `1457543499` seconds and `608845000` nanoseconds converts to March 9, 2016, at 10:11:39.608845 AM UTC. The `nanos` field adds precision by representing fractional seconds.

:::

```text
model {
    id: "general-image-recognition",
    name: "Image Recognition",
    created_at {
        seconds: 1457543499,
        nanos: 608845000
        },
    modified_at {
        seconds: 1739900944,
        nanos: 809517000
    },
}
```

Below is an example response from a REST API request:

:::info

In REST API responses, [timestamps](https://github.com/protocolbuffers/protobuf/blob/0bfe41b27e3dd8a30ae383210d7af10c28a642ea/src/google/protobuf/timestamp.proto#L108-L144) are converted to the [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) standard. The standard represents date and time as a string in this format: `{year}-{month}-{day}T{hour}:{minute}:{second}[.{fractional_seconds}]Z`.

These are the key formatting rules:

- Year (`{year}`) is always four digits (such as `2025`).
- Month, day, hour, minute, and second are zero-padded to two digits each (such as `02`, `09`, `17`).
- Fractional seconds (optional) can go up to 9 digits, supporting up to nanosecond resolution (such as `.608845`).
- The "Z" suffix indicates the UTC time zone (such as `2025-02-18T17:49:04.809517Z`).

:::

```text
"model": {
    "id": "general-image-recognition",
    "name": "Image Recognition",
    "created_at": "2016-03-09T17:11:39.608845Z",
    "modified_at": "2025-02-18T17:49:04.809517Z",
}
```

## Results Section

When you make a successful API call to Clarifai, the "results" section is where the real action happens. It's the payload containing the information you requested — the insights, predictions, or data derived from your input.

The exact content of the "results" section varies significantly depending on the API endpoint you're using.

Below are some common elements you might encounter across different Clarifai API endpoints (_the examples are for REST API requests_): 

- **Image recognition requests** — The `outputs` field is a common container for storing the core results of prediction or analysis tasks. Inside `outputs`, the `data` field includes the actual results, such as recognized `concepts` ([labels](https://docs.clarifai.com/portal-guide/inputs-manager/concepts)) and their confidence scores. 

```text
{
  "outputs": [
    {
      "data": {
        "concepts": [
          { "id": "dog", "name": "dog", "value": 0.98 },
          { "id": "pet", "name": "pet", "value": 0.95 }
        ]
      }
    }
  ]
}
```

- **Concepts creation requests** — The `concepts` field contains the details of the newly created concept, including its ID, name, and other relevant attributes.

```text
{
  "concepts": [
    {
      "id": "charlie",
      "name": "Charlie",
      "app_id": "test-app"
    }
  ]
}
```

- **Object detection requests** — The `regions` field contains information about the [detected objects](https://docs.clarifai.com/api-guide/predict/images#visual-detection) within an image or video. This includes bounding box coordinates, associated `concepts`, and their corresponding confidence scores.

```text
{
  "outputs": [
    {
      "data": {
        "regions": [
          {
            "region_info": { "bounding_box": { "top_row": 0.1, "left_col": 0.2, "bottom_row": 0.5, "right_col": 0.6 } },
            "data": {
              "concepts": [{ "id": "cat", "name": "cat", "value": 0.97 }]
            }
          }
        ]
      }
    }
  ]
}
```

- **Workflow execution requests** — The results contain the outputs of each step in the [workflow](https://docs.clarifai.com/api-guide/workflows/workflow-predict#images) execution. 

```text
{
  "results": [
    {
      "outputs": [
        {
          "model": { "id": "general-image-recognition" },
          "data": {
            "concepts": [{ "id": "tree", "name": "tree", "value": 0.92 }]
          }
        }
      ]
    }
  ]
}
```

