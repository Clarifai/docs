---
description: Learn about model prediction parameters.
sidebar_position: 4
---

# Prediction Parameters

**Learn about model prediction parameters**
<hr />


:::note

You can set additional parameters to gain flexibility in the predict operation.

:::


## Select Concepts

By putting this additional parameter on your predict calls, you can receive predict value\(s\) for **only** the concepts that you want to. You can specify particular concepts by either their id and/or their name. The concept names and ids are case sensitive, and so, these must be exact matches.

To retrieve an entire list of concepts from a given model use the `GET /v2/models/{model_id}/output_info` endpoint. Check out the [Advanced Models](https://github.com/Clarifai/docs/tree/5882f46bd17affcd85ed3e2ec98f4d6f355b58a9/models.md#get-model-output-info-by-id) section for how to use with any of the API clients.


:::info

If you submit a request with not an exact match of the concept id or name, you will receive an invalid model argument error. However, if one or more matches while one or more do not, the API will respond with a Mixed Success.

:::


Below is an example of how you would select concepts and receive predictions from the `general-image-recognition` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/prediction_parameters_by_model_version_id.py";
import PythonMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/prediction_parameters_max_concepts.py";
import PythonMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/prediction_parameters_min_predict_value.py";
import PythonSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/prediction_parameters_select_concepts.py";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSelectConcepts}</CodeBlock>
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
// In the Clarifai platform an image is defined by a special Image object.
// There are several ways in which an Image object can be populated including
// by url and image bytes (base64).
//
$image = new Image([
    'url' => 'https://samples.clarifai.com/dog2.jpeg'
]);

//
// After an Image object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'image' => $image
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
// Specifying Output Configuration 
///////////////////////////////////////////////////////////////////////////////
//
// Output configuration can be specified by the OutputConfig object.  Here
// we specify a concept by both the name and the id for what we want to narrow
// down to in the results.
//
$outputConfig = new OutputConfig([
    'select_concepts' => [
        new Concept(['name' => 'train']),
        new Concept(['id' => 'ai_6kTjGfF6'])
    ]
])

//
// The OutputInfo object is a wrapper around the OutputConfig object
// 
$outputInfo = new OutputInfo([
    'output_config' => $outputConfig
])

//
// The model object is a wrapper around the OutputInfo object.  This is the
// final part needed to define an output configuration.
//
$model = new Model([
    'output_info' => $outputInfo
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
//    - the `model` field with the output configuration specified above
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input],
    'model' => $model
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC Call
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
import com.clarifai.grpc.api.status.StatusCode;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
    PostModelOutputsRequest.newBuilder()
        .setModelId("aaa03c23b3724a16a56b629203edc62c")  // This is model ID of the clarifai/main General model.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setImage(
                    Image.newBuilder().setUrl("https://samples.clarifai.com/metro-north.jpg")
                )
            )
        )
        .setModel(
            Model.newBuilder().setOutputInfo(
                OutputInfo.newBuilder().setOutputConfig(
                    OutputConfig.newBuilder()
                        // When selecting concepts, value is ignored, so no need to specify it.
                        .addSelectConcepts(Concept.newBuilder().setName("train"))
                        .addSelectConcepts(Concept.newBuilder().setId("ai_6kTjGfF6")
                        )
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
        model_id: "aaa03c23b3724a16a56b629203edc62c",  // This is model ID of the clarifai/main General model.
        inputs: [
            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
        ],
        // When selecting concepts, value is ignored, so no need to specify it.
        model: {output_info: {output_config: {select_concepts: [{name: "train"}, {id: "ai_6kTjGfF6"}]}}}
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
curl -X POST \
  -H 'authorization: Key YOUR_API_KEY' \
  -H 'content -type: application/json' \
  -d '{
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ],
  "model": {
    "output_info": {
      "output_config": {
        "select_concepts": [
          {"name": "train"},
          {"id": "ai_6kTjGfF6"}
        ]
      }
    }
  }
}'\
https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs

# Above is model ID of the publicly available General model.
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
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ],
  "model": {
    "output_info": {
      "output_config": {
        "select_concepts": [
          {"name": "train"},
          {"id": "ai_6kTjGfF6"}
        ]
      }
    }
  }
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs", requestOptions)
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
train 1.00
station 1.00
```

</details>


<details>
  <summary>JSON Output Example</summary>

```javascript
id: "9c43849f2ead4ff0bfba37ab70c85a37"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643792042
  nanos: 215003702
}
model {
  id: "general-image-recognition"
  name: "general"
  created_at {
    seconds: 1457543499
    nanos: 608845000
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
    id: "aa7f35c01e0642fda5cf400f543e7c40"
    created_at {
      seconds: 1520370624
      nanos: 454834000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  display_name: "general-visual-classifier"
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "image"
        value {
          string_value: "images"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "visual-classifier"
  visibility {
    gettable: PUBLIC
  }
  description: "Image recognition model for identifying different concepts in images and video including objects, themes, moods, and more."
  metadata {
  }
  notes: "**General Information**\n\n- Purpose: Classifier for a variety of concepts, common objects, etc. This model is a great all-purpose solution for most visual recognition needs with industry-leading performance.\n\n- Architecture: Customized InceptionV2\n\n- Intended Use: image indexing by tags, filtering, cascade routing\n\n- Limitations: works well when content is prevalent in the image\n\n\n\n **\nTraining/Test Data**\n\nThe model was trained and tested on an internal dataset with approximately 10,000 concepts and 20M images, with multiple concepts per image. The class distributions on train and validation sets are long-tailed. The validation set was annotated using a combination of originally curated labels with incomplete annotations, where were further completed by adding additional labels proposed a newer version of this model (aa7f35c01e0642fda5cf400f543e7c40) at a low threshold and verified by human annotators. "
  modified_at {
    seconds: 1634831222
    nanos: 80260000
  }
  import_info {
  }
}
input {
  id: "979f534672624dd5ac44db862555b154"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "train"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "station"
    value: 0.9980105757713318
    app_id: "main"
  }
}
```

</details>


## Maximum Concepts

Setting the `max_concepts` parameter will customize how many concepts and their corresponding probability scores the predict endpoint will return. If not specified, the predict endpoint will return the top 20 concepts. 

You can currently set the max concepts parameter to any number in the range: \[1-200\]. 

If your use case requires more concepts, please contact [Support](mailto:support@clarifai.com).

Below is an example of how you would set maximum concepts and receive predictions from the `general-image-recognition` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonMaxConcepts}</CodeBlock>
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
// In the Clarifai platform an image is defined by a special Image object.
// There are several ways in which an Image object can be populated including
// by url and image bytes (base64).
//
$image = new Image([
    'url' => 'https://samples.clarifai.com/dog2.jpeg'
]);

//
// After an Image object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'image' => $image
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
// Specifying Output Configuration 
///////////////////////////////////////////////////////////////////////////////
//
// Output configuration can be specified by the OutputConfig object.  Here
// we specify the max number of concepts to return at 3.
//
$outputConfig = new OutputConfig([
    'max_concepts' => 3
])

//
// The OutputInfo object is a wrapper around the OutputConfig object
// 
$outputInfo = new OutputInfo([
    'output_config' => $outputConfig
])

//
// The model object is a wrapper around the OutputInfo object.  This is the
// final part needed to define an output configuration.
//
$model = new Model([
    'output_info' => $outputInfo
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
//    - the `model` field with the output configuration specified above
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input],
    'model' => $model
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC Call
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
        .setModelId("aaa03c23b3724a16a56b629203edc62c")  // This is model ID of the clarifai/main General model.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setImage(
                    Image.newBuilder().setUrl("https://samples.clarifai.com/metro-north.jpg")
                )
            )
        )
        .setModel(
            Model.newBuilder().setOutputInfo(
                OutputInfo.newBuilder().setOutputConfig(
                    OutputConfig.newBuilder().setMaxConcepts(3)
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
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

stub.PostModelOutputs(
    {
        model_id: "aaa03c23b3724a16a56b629203edc62c",  // This is model ID of the clarifai/main General model
        inputs: [
            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
        ],
        model: {output_info: {output_config: {max_concepts: 3}}}
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
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg"
          }
        }
      }
    ],
    "model":{
      "output_info":{
        "output_config":{
          "max_concepts": 3
        }
      }
    }
  }'\
  https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs
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
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ],
  "model":{
    "output_info":{
      "output_config":{
        "max_concepts": 3
      }
    }
  }
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs", requestOptions)
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
train 1.00
railway 1.00
subway system 1.00
```

</details>

<details>
  <summary>JSON Output Example</summary>

```javascript
id: "0248198a8fd44077afcd2bc56be413ba"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643794231
  nanos: 147923521
}
model {
  id: "general-image-recognition"
  name: "general"
  created_at {
    seconds: 1457543499
    nanos: 608845000
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
    id: "aa7f35c01e0642fda5cf400f543e7c40"
    created_at {
      seconds: 1520370624
      nanos: 454834000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  display_name: "general-visual-classifier"
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "image"
        value {
          string_value: "images"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "visual-classifier"
  visibility {
    gettable: PUBLIC
  }
  description: "Image recognition model for identifying different concepts in images and video including objects, themes, moods, and more."
  metadata {
  }
  notes: "**General Information**\n\n- Purpose: Classifier for a variety of concepts, common objects, etc. This model is a great all-purpose solution for most visual recognition needs with industry-leading performance.\n\n- Architecture: Customized InceptionV2\n\n- Intended Use: image indexing by tags, filtering, cascade routing\n\n- Limitations: works well when content is prevalent in the image\n\n\n\n **\nTraining/Test Data**\n\nThe model was trained and tested on an internal dataset with approximately 10,000 concepts and 20M images, with multiple concepts per image. The class distributions on train and validation sets are long-tailed. The validation set was annotated using a combination of originally curated labels with incomplete annotations, where were further completed by adding additional labels proposed a newer version of this model (aa7f35c01e0642fda5cf400f543e7c40) at a low threshold and verified by human annotators. "
  modified_at {
    seconds: 1634831222
    nanos: 80260000
  }
  import_info {
  }
}
input {
  id: "98eed12013334f3a80bad386d6fa391b"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "train"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "railway"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "subway system"
    value: 0.9982514977455139
    app_id: "main"
  }
}

```

</details>

## Minimum Prediction Value

This parameter lets you set a minimum probability threshold for the outputs you want to view for the Predict operation. 

For example if you want to see all concepts with a probability score of .95 or higher, this parameter will allow you to accomplish that. 

Also note that if you don't specify the number of `max_concepts`, you will only see the top 20. If your result can contain more values you will have to increase the number of maximum concepts as well.

Below is an example of how you would set a minimum probability threshold and receive predictions from the `general-image-recognition` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonMinPredictValue}</CodeBlock>
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
// In the Clarifai platform an image is defined by a special Image object.
// There are several ways in which an Image object can be populated including
// by url and image bytes (base64).
//
$image = new Image([
    'url' => 'https://samples.clarifai.com/dog2.jpeg'
]);

//
// After an Image object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'image' => $image
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
// Specifying Output Configuration 
///////////////////////////////////////////////////////////////////////////////
//
// Output configuration can be specified by the OutputConfig object.  Here
// we specify the minimum threshold value to 0.95.
//
$outputConfig = new OutputConfig([
    'min_value' => 0.95
])

//
// The OutputInfo object is a wrapper around the OutputConfig object
// 
$outputInfo = new OutputInfo([
    'output_config' => $outputConfig
])

//
// The model object is a wrapper around the OutputInfo object.  This is the
// final part needed to define an output configuration.
//
$model = new Model([
    'output_info' => $outputInfo
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
//    - the `model` field with the output configuration specified above
//
$request = new PostModelOutputsRequest([
    'user_app_id' => $userDataObject, // This is defined above
    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.
    'inputs' => [$input],
    'model' => $model
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC Call
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
        .setModelId("aaa03c23b3724a16a56b629203edc62c")  // This is model ID of the clarifai/main General model.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setImage(
                    Image.newBuilder().setUrl("https://samples.clarifai.com/metro-north.jpg")
                )
            )
        )
        .setModel(
            Model.newBuilder().setOutputInfo(
                OutputInfo.newBuilder().setOutputConfig(
                    OutputConfig.newBuilder().setMinValue(0.95f)
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
        model_id: "aaa03c23b3724a16a56b629203edc62c",  // This is model ID of the clarifai/main General model
        inputs: [
            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
        ],
        model: {output_info: {output_config: {min_value: 0.95}}}
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
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg"
          }
        }
      }
    ],
    "model":{
      "output_info":{
        "output_config":{
          "min_value": 0.95
        }
      }
    }
  }'\
  https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs
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
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
        }
      }
    }
  ],
  "model":{
    "output_info":{
      "output_config":{
        "min_value": 0.95
      }
    }
  }
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
  body: raw
};

fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs", requestOptions)
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
train 1.00
railway 1.00
subway system 1.00
station 1.00
locomotive 1.00
transportation system 1.00
travel 0.99
commuter 0.98
platform 0.98
light 0.97
train station 0.97
blur 0.97
city 0.96
road 0.96
urban 0.96
traffic 0.96
```

</details>

<details>
  <summary>JSON Output Example</summary>

```javascript
id: "6a23c0c0893d42b5a7f5973dcc4a2757"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643800207
  nanos: 69912867
}
model {
  id: "general-image-recognition"
  name: "general"
  created_at {
    seconds: 1457543499
    nanos: 608845000
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
    id: "aa7f35c01e0642fda5cf400f543e7c40"
    created_at {
      seconds: 1520370624
      nanos: 454834000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  display_name: "general-visual-classifier"
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "image"
        value {
          string_value: "images"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "visual-classifier"
  visibility {
    gettable: PUBLIC
  }
  description: "Image recognition model for identifying different concepts in images and video including objects, themes, moods, and more."
  metadata {
  }
  notes: "**General Information**\n\n- Purpose: Classifier for a variety of concepts, common objects, etc. This model is a great all-purpose solution for most visual recognition needs with industry-leading performance.\n\n- Architecture: Customized InceptionV2\n\n- Intended Use: image indexing by tags, filtering, cascade routing\n\n- Limitations: works well when content is prevalent in the image\n\n\n\n **\nTraining/Test Data**\n\nThe model was trained and tested on an internal dataset with approximately 10,000 concepts and 20M images, with multiple concepts per image. The class distributions on train and validation sets are long-tailed. The validation set was annotated using a combination of originally curated labels with incomplete annotations, where were further completed by adding additional labels proposed a newer version of this model (aa7f35c01e0642fda5cf400f543e7c40) at a low threshold and verified by human annotators. "
  modified_at {
    seconds: 1634831222
    nanos: 80260000
  }
  import_info {
  }
}
input {
  id: "76a59b937b9943adbcba4a54b9a079fe"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "train"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "railway"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "subway system"
    value: 0.9982514977455139
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "station"
    value: 0.9980105757713318
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "locomotive"
    value: 0.9972571730613708
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "transportation system"
    value: 0.9969801306724548
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "travel"
    value: 0.988979697227478
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "commuter"
    value: 0.9808752536773682
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "platform"
    value: 0.9806439876556396
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "light"
    value: 0.9742040634155273
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "train station"
    value: 0.9687404036521912
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "blur"
    value: 0.9672204256057739
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "city"
    value: 0.9614798426628113
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "road"
    value: 0.9613829851150513
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "urban"
    value: 0.9603424072265625
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "traffic"
    value: 0.9599347710609436
    app_id: "main"
  }
}
```

</details>

## By Model Version ID

Every time you train a custom model, it creates a new model version. By specifying `version_id` in your predict call, you can continue to predict on a previous version, for consistent prediction results. Clarifai also updates its pre-built models on a regular basis.

If you are looking for consistent results from your predict calls, use `version_id`. If the model `version_id` is not specified, predict will default to the most current model.

Below is an example of how you would set a model version ID and receive predictions from the `general-image-recognition` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
    PostModelOutputsRequest.newBuilder()
        .setModelId("aaa03c23b3724a16a56b629203edc62c")  // This is model ID of the clarifai/main General model.
        .setVersionId("aa7f35c01e0642fda5cf400f543e7c40")  // This is optional. Defaults to the latest model version.
        .addInputs(
            Input.newBuilder().setData(
                Data.newBuilder().setImage(
                    Image.newBuilder().setUrl("https://samples.clarifai.com/metro-north.jpg")
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
        model_id: "aaa03c23b3724a16a56b629203edc62c",  // This is model ID of the clarifai/main General model
        version_id: "aa7f35c01e0642fda5cf400f543e7c40",  // This is optional. Defaults to the latest model version.
        inputs: [
            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
        ],
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
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs

# Above is model ID of the publicly available General model.
# Version ID is optional. It defaults to the latest model version.
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
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg"
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

fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{YOUR_MODEL_VERSION_ID}outputs", requestOptions)
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
train 1.00
railway 1.00
subway system 1.00
station 1.00
locomotive 1.00
transportation system 1.00
travel 0.99
commuter 0.98
platform 0.98
light 0.97
train station 0.97
blur 0.97
city 0.96
road 0.96
urban 0.96
traffic 0.96
street 0.95
public 0.93
tramway 0.93
business 0.93
```
</details>

<details>
  <summary>JSON Output Example</summary>

```javascript
id: "f2885a9eda0e42c5b264ee344cf80152"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643803135
  nanos: 222744005
}
model {
  id: "general-image-recognition"
  name: "general"
  created_at {
    seconds: 1457543499
    nanos: 608845000
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
    id: "aa7f35c01e0642fda5cf400f543e7c40"
    created_at {
      seconds: 1520370624
      nanos: 454834000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  display_name: "general-visual-classifier"
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "image"
        value {
          string_value: "images"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "visual-classifier"
  visibility {
    gettable: PUBLIC
  }
  description: "Image recognition model for identifying different concepts in images and video including objects, themes, moods, and more."
  metadata {
  }
  notes: "**General Information**\n\n- Purpose: Classifier for a variety of concepts, common objects, etc. This model is a great all-purpose solution for most visual recognition needs with industry-leading performance.\n\n- Architecture: Customized InceptionV2\n\n- Intended Use: image indexing by tags, filtering, cascade routing\n\n- Limitations: works well when content is prevalent in the image\n\n\n\n **\nTraining/Test Data**\n\nThe model was trained and tested on an internal dataset with approximately 10,000 concepts and 20M images, with multiple concepts per image. The class distributions on train and validation sets are long-tailed. The validation set was annotated using a combination of originally curated labels with incomplete annotations, where were further completed by adding additional labels proposed a newer version of this model (aa7f35c01e0642fda5cf400f543e7c40) at a low threshold and verified by human annotators. "
  modified_at {
    seconds: 1634831222
    nanos: 80260000
  }
  import_info {
  }
}
input {
  id: "be28eb8cdfd34d199e2f69981cc827aa"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "train"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "railway"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "subway system"
    value: 0.9982514977455139
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "station"
    value: 0.9980105757713318
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "locomotive"
    value: 0.9972571730613708
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "transportation system"
    value: 0.9969801306724548
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "travel"
    value: 0.988979697227478
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "commuter"
    value: 0.9808752536773682
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "platform"
    value: 0.9806439876556396
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "light"
    value: 0.9742040634155273
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "train station"
    value: 0.9687404036521912
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "blur"
    value: 0.9672204256057739
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "city"
    value: 0.9614798426628113
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "road"
    value: 0.9613829255104065
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "urban"
    value: 0.9603424072265625
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "traffic"
    value: 0.959934651851654
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "street"
    value: 0.9474142789840698
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "public"
    value: 0.9343124032020569
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "tramway"
    value: 0.9318979382514954
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "business"
    value: 0.9294139742851257
    app_id: "main"
  }
}
```
</details>