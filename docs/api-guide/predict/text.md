---
description: Make predictions on passages of text
sidebar_position: 3
---

# Text

**Make predictions on text inputs**
<hr />

To get predictions for an input, you need to supply the text and the model you'd like to get predictions from. You can supply the text via a publicly accessible URL, a local text file, or in the raw format. 

You specify the model you'd like to use with the `{model-id}` parameter.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/text_via_url.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/text_via_bytes.py";
import CodePythonViaRaw from "!!raw-loader!../../../code_snippets/api-guide/predict/text_via_raw.py";

## Via URL 

Below is an example of how you would make predictions on passages of text hosted on the web from the `product-review-sentiment-multi` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaURL}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform a text is defined by a special Text object.
// There are several ways in which a Text object can be populated including
// by url and raw string.
//
$text = new Text([
    'url' => 'https://samples.clarifai.com/negative_sentence_12.txt'
]);

//
// After an Text object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional text independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'text' => $text
]);

//
// The Data object is then wrapped in an Input object in order to meet the
// API specification.  Additional fields are available to populate in the Input
// object, but for the purposes of this example we can send in just the
// Data object.
//
$input = new Input([
    'data' => $data
]);

///////////////////////////////////////////////////////////////////////////////
// Creating the request object 
///////////////////////////////////////////////////////////////////////////////
//
// Finally, the request object itself is created.  This object carries the request
// along with the request status and other metadata related to the request itself.
// In this example we populate:
//    - the `user_app_id` field with the UserAppIDSet constructed above
//    - the `model_id` field with the ID of the model we are referencing
//    - the `inputs` field with an array of input objects constructed above 
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input]
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC call
///////////////////////////////////////////////////////////////////////////////
//
// Once the request object is constructed, we can call the actual request to the
// Clarifai platform.  This uses the opened gRPC client channel to communicate the
// request and then wait for the response.
//
[$response, $status] = $client->PostModelOutputs(
    $request,
    $metadata
)->wait();

///////////////////////////////////////////////////////////////////////////////
// Handling the Response
///////////////////////////////////////////////////////////////////////////////
//
// The response is returned and the first thing we do is check the status of it.
// A successful response will have a status code of 0, otherwise there is some 
// reported error.
//
if ($status->code !== 0) throw new Exception("Error: {$status->details}");

//
// In addition to the RPC response status, there is a Clarifai API status that
// reports if the operationo was a success or failure (not just that the commuunication)
// was successful.
//
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " .
        $response->getStatus()->getDetails());
}

//
// The output of a successful call can be used in many ways.  In this example,
// we loop through all of the predicted concepts and print them out along with
// their numerical prediction value (confidence).
//
echo "Predicted concepts:\n";
foreach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {
    echo $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
}
?>
```
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
    PostModelOutputsRequest.newBuilder()
        .setModelId("{THE_MODEL_ID}")
        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setText(
                    Text.newBuilder().setUrl("https://samples.clarifai.com/negative_sentence_12.txt")
                )
            )
        )
        .build()
);

if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
}

// Since we have one input, one output will exist here.
Output output = postModelOutputsResponse.getOutputs(0);

System.out.println("Predicted concepts:");
for (Concept concept : output.getData().getConceptsList()) {
    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModelOutputs(
    {
        model_id: "{THE_MODEL_ID}",
        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.
        inputs: [
            {data: {text: {url: "https://samples.clarifai.com/negative_sentence_12.txt"}}}
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        console.log("Predicted concepts:");
        for (const concept of output.data.concepts) {
            console.log(concept.name + " " + concept.value);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST
    -H 'Authorization: Key YOUR_API_KEY'
    -H "Content-Type: application/json"
    -d '
    {
      "inputs": [
        {
          "data": {
            "text": {
              "url": "https://samples.clarifai.com/negative_sentence_12.txt"
            }
          }
        }
      ]
    }'
    https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "text": {
          "url": "https://samples.clarifai.com/negative_sentence_12.txt"
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

<details>
    <summary>Code Output Example</summary>

```text
Predicted concepts:
5 stars 0.87
4 stars 0.12
3 stars 0.01
1 star 0.00
2 stars 0.00
```
</details>

<details>
    <summary>JSON Output Example</summary>

```javascript
Predicted concepts:
id: "6575509feeb34e7ab881918a5a8a6e72"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643377570
  nanos: 986312649
}
model {
  id: "91ff804429654ce25e93e710beea82ea"
  name: "product-review-sentiment-multi"
  created_at {
    seconds: 1617956285
    nanos: 315594000
  }
  app_id: "main"
  output_info {
    output_config {
    }
    message: "Show output_info with: GET /models/{model_id}/output_info"
    fields_map {
      fields {
        key: "concepts"
        value {
          string_value: "softmax"
        }
      }
    }
  }
  model_version {
    id: "79fa197706da4212a6e74afcd919d5a5"
    created_at {
      seconds: 1617956285
      nanos: 327678000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PRIVATE
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "text"
        value {
          string_value: "text"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "text-classifier"
  visibility {
    gettable: PRIVATE
  }
  metadata {
  }
  modified_at {
    seconds: 1617956285
    nanos: 315594000
  }
  import_info {
  }
}
input {
  id: "732dfaee2ed74b7aa8c596081ae29db3"
  data {
    text {
      url: "https://alfrickopidi.com/test.txt"
    }
  }
}
data {
  concepts {
    id: "ai_372MvFLZ"
    name: "5 stars"
    value: 0.866517961025238
    app_id: "main"
  }
  concepts {
    id: "ai_qbKLQz68"
    name: "4 stars"
    value: 0.11985281109809875
    app_id: "main"
  }
  concepts {
    id: "ai_xhvBFMxc"
    name: "3 stars"
    value: 0.009703087620437145
    app_id: "main"
  }
  concepts {
    id: "ai_1l3VDCQM"
    name: "1 star"
    value: 0.002005926100537181
    app_id: "main"
  }
  concepts {
    id: "ai_dRpwfL86"
    name: "2 stars"
    value: 0.0019201975082978606
    app_id: "main"
  }
}

```

</details>

## Via Local Files

Below is an example of how you would provide text inputs via local text files and receive predictions from the `product-review-sentiment-multi` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import com.google.protobuf.ByteString;
import java.io.File;
import java.nio.file.Files;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
    PostModelOutputsRequest.newBuilder()
        .setModelId("{THE_MODEL_ID}")
        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setText(
                    Text.newBuilder()
                        .setRaw(ByteString.copyFrom(Files.readAllBytes(
                            new File("{YOUR_IMAGE_FILE_LOCATION}").toPath()
                        )))
                )
            )
        )
        .build()
);

if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());
}

// Since we have one input, one output will exist here.
Output output = postModelOutputsResponse.getOutputs(0);

System.out.println("Predicted concepts:");
for (Concept concept : output.getData().getConceptsList()) {
    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

const fs = require("fs");
const imageBytes = fs.readFileSync("{YOUR_IMAGE_FILE_LOCATION}");

stub.PostModelOutputs(
    {
        model_id: "{THE_MODEL_ID}",
        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.
        inputs: [
            {data: {text: {raw: textFile}}}
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        console.log("Predicted concepts:");
        for (const concept of output.data.concepts) {
            console.log(concept.name + " " + concept.value);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
// Smaller files (195 KB or less)

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "text": {
            "raw": "'"$(raw /home/user/image.jpeg)"'"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/outputs
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
	"user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "text": {
          "raw": "{YOUR_RAW_TEXT}"
        }
      }
    }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

```text
Predicted concepts:
5 stars 0.87
4 stars 0.12
3 stars 0.01
1 star 0.00
2 stars 0.00
```

</details>

<details>
  <summary>JSON Output Example</summary>

```javascript
Predicted concepts:
id: "dde301bab8324380a8ee54beb29db326"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643372278
  nanos: 17467714
}
model {
  id: "91ff804429654ce25e93e710beea82ea"
  name: "product-review-sentiment-multi"
  created_at {
    seconds: 1617956285
    nanos: 315594000
  }
  app_id: "main"
  output_info {
    output_config {
    }
    message: "Show output_info with: GET /models/{model_id}/output_info"
    fields_map {
      fields {
        key: "concepts"
        value {
          string_value: "softmax"
        }
      }
    }
  }
  model_version {
    id: "79fa197706da4212a6e74afcd919d5a5"
    created_at {
      seconds: 1617956285
      nanos: 327678000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PRIVATE
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "text"
        value {
          string_value: "text"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "text-classifier"
  visibility {
    gettable: PRIVATE
  }
  metadata {
  }
  modified_at {
    seconds: 1617956285
    nanos: 315594000
  }
  import_info {
  }
}
input {
  id: "9530f43d439046e6876f0646760c7071"
  data {
    text {
      raw: "I love your product very much"
      url: "https://samples.clarifai.com/placeholder.gif"
    }
  }
}
data {
  concepts {
    id: "ai_372MvFLZ"
    name: "5 stars"
    value: 0.866517961025238
    app_id: "main"
  }
  concepts {
    id: "ai_qbKLQz68"
    name: "4 stars"
    value: 0.11985281109809875
    app_id: "main"
  }
  concepts {
    id: "ai_xhvBFMxc"
    name: "3 stars"
    value: 0.009703087620437145
    app_id: "main"
  }
  concepts {
    id: "ai_1l3VDCQM"
    name: "1 star"
    value: 0.002005926100537181
    app_id: "main"
  }
  concepts {
    id: "ai_dRpwfL86"
    name: "2 stars"
    value: 0.0019201975082978606
    app_id: "main"
  }
}


```

</details>

## Via Raw Text

Below is an example of how you would provide raw text inputs and receive predictions from the `product-review-sentiment-multi` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaRaw}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
</TabItem>

<TabItem value="java" label="Java">
</TabItem>

<TabItem value="nodejs" label="NodeJS">
</TabItem>

<TabItem value="curl" label="cURL">
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">
</TabItem>

</Tabs>

<details>
    <summary>Code Output Example</summary>

```text
Predicted concepts:
5 stars 0.87
4 stars 0.12
3 stars 0.01
1 star 0.00
2 stars 0.00

```

</details>

<details>
    <summary>JSON Output Example</summary>

```javascript
Predicted concepts:
id: "5f4db88d798e442aa6f8a006efd27ef5"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643367419
  nanos: 631443555
}
model {
  id: "91ff804429654ce25e93e710beea82ea"
  name: "product-review-sentiment-multi"
  created_at {
    seconds: 1617956285
    nanos: 315594000
  }
  app_id: "main"
  output_info {
    output_config {
    }
    message: "Show output_info with: GET /models/{model_id}/output_info"
    fields_map {
      fields {
        key: "concepts"
        value {
          string_value: "softmax"
        }
      }
    }
  }
  model_version {
    id: "79fa197706da4212a6e74afcd919d5a5"
    created_at {
      seconds: 1617956285
      nanos: 327678000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PRIVATE
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "text"
        value {
          string_value: "text"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "text-classifier"
  visibility {
    gettable: PRIVATE
  }
  metadata {
  }
  modified_at {
    seconds: 1617956285
    nanos: 315594000
  }
  import_info {
  }
}
input {
  id: "ebd63f00c1a540df897427e16005631d"
  data {
    text {
      raw: "I love your product very much"
      url: "https://samples.clarifai.com/placeholder.gif"
    }
  }
}
data {
  concepts {
    id: "ai_372MvFLZ"
    name: "5 stars"
    value: 0.866517961025238
    app_id: "main"
  }
  concepts {
    id: "ai_qbKLQz68"
    name: "4 stars"
    value: 0.11985281109809875
    app_id: "main"
  }
  concepts {
    id: "ai_xhvBFMxc"
    name: "3 stars"
    value: 0.009703087620437145
    app_id: "main"
  }
  concepts {
    id: "ai_1l3VDCQM"
    name: "1 star"
    value: 0.002005926100537181
    app_id: "main"
  }
  concepts {
    id: "ai_dRpwfL86"
    name: "2 stars"
    value: 0.0019201975082978606
    app_id: "main"
  }
}

```

</details>