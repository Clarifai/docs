---
description: Multilingual predictions.
sidebar_position: 5
---

# Multilingual Classification

**Make multilingual predictions**
<hr />

The Clarifai API supports [many languages in addition to English](https://docs.clarifai.com/api-guide/concepts/languages/). When making a [predict API request](https://docs.clarifai.com/api-guide/predict/), you can pass in the language you would like the concepts returned in. 

When you create a new Application, you must specify a default language, which will be the language of the returned concepts, if not specified in the predict request.

## Predict By Specific Language

You can predict concepts in a language other than the Application's default, by explicitly passing in the language. 

Below is an example of how you would predict concepts in Chinese.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/python/multilingual_classification_specific_language.py";
import PythonSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/multilingual_classification_search_concepts.py";

import JavaScriptBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/js/multilingual_classification_specific_language.html";
import JavaScriptSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/multilingual_classification_search_concepts.html";

import NodeJSBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/node/multilingual_classification_specific_language.js";
import NodeJSSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/multilingual_classification_search_concepts.js";

import JavaBySpecificLanguage from "!!raw-loader!../../../code_snippets/api-guide/predict/java/multilingual_classification_specific_language.java";
import JavaSearchConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/multilingual_classification_search_concepts.java";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSBySpecificLanguage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaBySpecificLanguage}</CodeBlock>
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
// Output configuration can be specified by the OutputConfig object.
//
$outputConfig = new OutputConfig([
    'language' => 'zh' // Chinese
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
        "language":"zh"
      }
    }
  }
}'\
  https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs

# Above is model ID of the publicly available General model.
```

</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

```text
Predicted concepts:
	铁路列车 1.00
	铁路 1.00
	地铁 1.00
	站 1.00
	火车 1.00
	运输系统 1.00
	旅游 0.99
	通勤 0.98
	平台 0.98
	光 0.97
	铁路车站 0.97
	模煳 0.97
	城市 0.96
	马路 0.96
	城市的 0.96
	交通 0.96
	街道 0.95
	公共 0.93
	有轨电车（工业） 0.93
	商业 0.93
```
</details>

<details>
  <summary>JSON Output Example</summary>

```javascript
id: "778a108718564b3cb1b0afe01c538f39"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643812243
  nanos: 518818153
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
  notes: "**General Information**\n\n- Purpose: Classifier for a variety of concepts, common objects, etc. This model is a great all-purpose solution for most visual recognition needs with industry-leading performance.\n\n- Architecture: Customized InceptionV2\n\n- Intended Use: image indexing by tags, filtering, cascade routing\n\n- Limitations: works well when content is prevalent in the image\n\n\n\n **\nTraining/Test Data**\n\nThe model was trained and tested on an internal dataset with approximately 10,000 concepts and 20M images, with multiple concepts per image. The class distributions on train and validation sets are long-tailed. The validation set was annotated using a combination of originally curated labels 
with incomplete annotations, where were further completed by adding additional labels proposed a newer version of this model (aa7f35c01e0642fda5cf400f543e7c40) at a low threshold and verified by human annotators. "
  modified_at {
    seconds: 1634831222
    nanos: 80260000
  }
  import_info {
  }
}
input {
  id: "9d3583dff67a41b9825edff444f93fcd"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "\351\223\201\350\267\257\345\210\227\350\275\246"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "\351\223\201\350\267\257"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "\345\234\260\351\223\201"
    value: 0.9982514977455139
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "\347\253\231"
    value: 0.9980105757713318
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "\347\201\253\350\275\246"
    value: 0.9972571730613708
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "\350\277\220\350\276\223\347\263\273\347\273\237"
    value: 0.9969801306724548
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "\346\227\205\346\270\270"
    value: 0.988979697227478
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "\351\200\232\345\213\244"
    value: 0.9808752536773682
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "\345\271\263\345\217\260"
    value: 0.9806439876556396
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "\345\205\211"
    value: 0.9742040634155273
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "\351\223\201\350\267\257\350\275\246\347\253\231"
    value: 0.9687402844429016
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "\346\250\241\347\205\263"
    value: 0.9672204256057739
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "\345\237\216\345\270\202"
    value: 0.9614799618721008
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "\351\251\254\350\267\257"
    value: 0.9613829851150513
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "\345\237\216\345\270\202\347\232\204"
    value: 0.9603424668312073
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "\344\272\244\351\200\232"
    value: 0.9599347710609436
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "\350\241\227\351\201\223"
    value: 0.9474143981933594
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "\345\205\254\345\205\261"
    value: 0.9343124032020569
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "\346\234\211\350\275\250\347\224\265\350\275\246\357\274\210\345\267\245\344\270\232\357\274\211"
    value: 0.931897759437561
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "\345\225\206\344\270\232"
    value: 0.9294139742851257
    app_id: "main"
  }
}
```
</details>

## Search Concepts in Languages 

You can search for concepts in other languages even if the default language of your application is English. When you add inputs to your application, concepts are predicted for every language. 

Below is an example of how your would search for '人', which is simplified Chinese for 'people'.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSearchConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions


///////////////////////////////////////////////////////////////////////////////
// Specifying Concept Search Parameters 
///////////////////////////////////////////////////////////////////////////////
//
// The ConceptQuery object contains the concept restrictions for the search. 
//
$conceptQuery = new ConceptQuery([
    'name' => "人",
    'language' => "zh"
])

///////////////////////////////////////////////////////////////////////////////
// Creating the request object 
///////////////////////////////////////////////////////////////////////////////
//
// Finally, the request object itself is created.  This object carries the request
// along with the request status and other metadata related to the request itself.
// In this example we populate:
//    - the `user_app_id` field with the UserAppIDSet constructed above
//    - the `concept_query` field contains the search restrictions above
//
$request = new PostConceptsSearches([
    'user_app_id' => $userDataObject, // This is defined above
    'concept_query' => $conceptQuery
]);

///////////////////////////////////////////////////////////////////////////////
// Making the RPC Call
///////////////////////////////////////////////////////////////////////////////
//
// Once the request object is constructed, we can call the actual request to the
// Clarifai platform.  This uses the opened gRPC client channel to communicate the
// request and then wait for the response.
//
[$response, $status] = $client->PostConceptsSearches(
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
foreach ($response->getConcepts() as $concept) {
    echo $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
}
?>
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "query": {
      "ands": [
        {
          "output": {
            "data": {
              "concepts": [
                {
                  "name": "人"
                }
              ]
            }
          }
        }
      ],
      "language": "zh"
    }
  }'\
  https://api.clarifai.com/v2/searches
```
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

```text
Found concepts:
	人 1.00
	人 1.00
```

</details>

<details>
  <summary>Code Output Example</summary>

```javascript
id: "ca0c4b59c97840578fbe826664476fcb"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643811840
  nanos: 183608592
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
  id: "08f57897f43f4a32bf4665df16f96de7"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "\351\223\201\350\267\257\345\210\227\350\275\246"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "\351\223\201\350\267\257"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "\345\234\260\351\223\201"
    value: 0.9982514977455139
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "\347\253\231"
    value: 0.9980105757713318
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "\347\201\253\350\275\246"
    value: 0.9972571730613708
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "\350\277\220\350\276\223\347\263\273\347\273\237"
    value: 0.9969801306724548
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "\346\227\205\346\270\270"
    value: 0.988979697227478
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "\351\200\232\345\213\244"
    value: 0.9808752536773682
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "\345\271\263\345\217\260"
    value: 0.9806439876556396
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "\345\205\211"
    value: 0.9742040634155273
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "\351\223\201\350\267\257\350\275\246\347\253\231"
    value: 0.9687402844429016
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "\346\250\241\347\205\263"
    value: 0.9672204256057739
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "\345\237\216\345\270\202"
    value: 0.9614799618721008
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "\351\251\254\350\267\257"
    value: 0.9613829851150513
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "\345\237\216\345\270\202\347\232\204"
    value: 0.9603424668312073
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "\344\272\244\351\200\232"
    value: 0.9599347710609436
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "\350\241\227\351\201\223"
    value: 0.9474143981933594
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "\345\205\254\345\205\261"
    value: 0.9343124032020569
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "\346\234\211\350\275\250\347\224\265\350\275\246\357\274\210\345\267\245\344\270\232\357\274\211"
    value: 0.931897759437561
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "\345\225\206\344\270\232"
    value: 0.9294139742851257
    app_id: "main"
  }
}
```

</details>