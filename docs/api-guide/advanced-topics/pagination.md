---
description: Paginate your data batches.
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pagination

Many API calls are paginated. You can provide `page` and `per_page` params to the API. In the example below we are getting all inputs and specifying to start at page 2 and get back 20 results per page.

<Tabs>
<TabItem value="java" label="Java" default>

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse listInputsResponse = stub.listInputs(
    ListInputsRequest.newBuilder()
        .setPage(2)
        .setPerPage(20)
        .build()
);

if (listInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("List inputs failed, status: " + listInputsResponse.getStatus());
}

for (Input input : listInputsResponse.getInputsList()) {
    System.out.println(input);
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS" default>

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.ListInputs(
    {page: 2, per_page: 20},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List inputs failed, status: " + response.status.description);
        }

        for (const input of response.inputs) {
            console.log(JSON.stringify(input, null, 2));
        }
    }
);
```
</TabItem>

<TabItem value="python" label="Python" default>

```python
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

list_inputs_response = stub.ListInputs(
    service_pb2.ListInputsRequest(page=2, per_page=20),
    metadata=metadata
)

if list_inputs_response.status.code != status_code_pb2.SUCCESS:
    raise Exception("List inputs failed, status: " + list_inputs_response.status.description)

for input_object in list_inputs_response.inputs:
    print(input_object)
```
</TabItem>

<TabItem value="curl" label="cURL" default>

```bash
curl -X GET \
  -H "Authorization: Key YOUR_API_KEY" \
  https://api.clarifai.com/v2/inputs?page=2&per_page=20
```
</TabItem>
</Tabs>

