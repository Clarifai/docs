---
description: Make predictions on image inputs
sidebar_position: 1
---

# Images

**Make predictions on image inputs**
<hr />

To get predictions for an input, you need to supply an image and the model you'd like to get predictions from. You can supply an image either with a publicly accessible URL or by directly sending bytes. 

You can send up to 128 images in one API call. You specify the model you'd like to use with the `{model-id}` parameter.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/images_via_url.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/images_via_bytes.py";
import CodeJavaScriptViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/images_via_url.html"
import CodeJavaScriptViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/images_via_bytes.html"

import CodeNodeJSViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/images_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/images_via_bytes.js";

import CodeJavaViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/images_via_url.java";

## Via URL

Below is an example of how you would send image URLs and receive predictions from the `general` model. 

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaURL}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
 <CodeBlock className="language-javascript">{CodeJavaScriptViaURL}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
 <CodeBlock className="language-javascript">{CodeNodeJSViaURL}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
 <CodeBlock className="language-java">{CodeJavaViaURL}</CodeBlock>
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
            "image": {
              "url": "https://samples.clarifai.com/metro-north.jpg"
            }
          }
        }
      ]
    }'
    https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs
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
id: "c1064364b2c64740874d714c70db6351"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643219050
  nanos: 357487464
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
  id: "03722c867ba74e25870d81d90975a490"
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
    value: 0.9889795780181885
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
    value: 0.9603424668312073
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
    value: 0.9343122839927673
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
    value: 0.9294138550758362
    app_id: "main"
  }
}
```

</details>

## Via Bytes

Below is an example of how you would send the bytes of an image and receive predictions from the `general` model.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodePythonViaBytes}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
   <CodeBlock className="language-javascript">{CodeJavaScriptViaBytes}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{CodeNodeJSViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

//
// For this example, the bytes of an image are needed and can be read in
// using PHP provided functions.
//
$image = "https://samples.clarifai.com/dog2.jpeg";
$imageData = file_get_contents($image); // Get the image data from the URL

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform an image is defined by a special Image object.
// There are several ways in which an Image object can be populated including
// by url and image bytes (base64).
//
$image = new Image([
    'base64' => $imageData
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
                Data.newBuilder().setImage(
                    Image.newBuilder()
                        .setBase64(ByteString.copyFrom(Files.readAllBytes(
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
          "image": {
            "base64": "'"$(base64 /home/user/image.jpeg)"'"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/outputs

// Larger Files (Greater than 195 KB)

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d @- https://api.clarifai.com/v2/models/{model-id}/outputs << FILEIN
  {
    "inputs": [
      {
        "data": {
          "image": {
            "base64": "$(base64 /home/user/image.png)"
          }
        }
      }
    ]
  }
FILEIN
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
id: "72d8af665de44822a5e26fe75ab7f84c"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643218577
  nanos: 52063722
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
  id: "8b57a8364ed9494aa200af2d422b3fee"
  data {
    image {
      url: "https://samples.clarifai.com/placeholder.gif"
      base64: "true"
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
    value: 0.9889795780181885
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
    value: 0.959934651851654
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "street"
    value: 0.9474143981933594
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
    value: 0.9318978190422058
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