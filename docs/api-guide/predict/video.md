---
description: Make predictions on video inputs
sidebar_position: 2
---

# Video

**Make predictions on video inputs**
<hr />

With a video input, the Predict API response will return a list of predicted concepts for every frame of a video. By default, video is processed at 1 frame per second \(but this is configurable in the predict request\). This means you will receive a list of concepts for every second of your video.

You can run Predict on your video using a select number of [Clarifai Models](https://www.clarifai.com/models). The models that are currently supported are: 
+ Apparel
+ Food
+ General
+ NSFW
+ Travel
+ Wedding

You can make an API call by providing the `{model-id}` parameter and specifying your data parameter as `video` instead of `image`.

**Video limits**

The Predict API has limits to the length and size it can support. A video, uploaded through URL, can be anywhere up to 80MB in size or 10mins in length. When a video is sent through by bytes, the Predict API can support 10MB in size.

If your video exceeds the limits, please follow our [tutorial](https://www.clarifai.com/blog/splitting-video-into-smaller-pieces) on how to break up a large video into smaller components, and send those into the Video API. Otherwise, the processing will time out and you will receive an error response.

## Via URL

Below is an example of how you would send video URLs and receive predictions from the `general` model.

Note that the initialization code used here is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import CodePythonViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/python/video_via_url.py";
import CodePythonViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/python/video_via_bytes.py";

import CodeJavaScriptViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/js/video_via_url.html";
import CodeJavaScriptViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/js/video_via_bytes.html";

import CodeNodeJSViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/node/video_via_url.js";
import CodeNodeJSViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/node/video_via_bytes.js";

import CodeJavaViaURL from "!!raw-loader!../../../code_snippets/api-guide/predict/java/video_via_url.java";
import CodeJavaViaBytes from "!!raw-loader!../../../code_snippets/api-guide/predict/java/video_via_bytes.java";


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
// In the Clarifai platform a video is defined by a special Video object.
// There are several ways in which an Video object can be populated including
// by url and video bytes (base64).
//
$video = new Video([
    'url' => 'https://samples.clarifai.com/beer.mp4'
]);

//
// After a Video object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional video independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'video' => $video
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
// we loop through all of the frames of the video and print out the predicted 
// concepts for each along with their numerical prediction value (confidence).
//
foreach ($output->getData()->getFrames() as $frame) {
    echo "Predicted concepts on frame " . $frame->getFrameInfo()->getTime() . ":";
    foreach ($frame->getData()->getConcepts() as $concept) {
        echo "   " . $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
    }
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
          "video": {
            "url": "https://samples.clarifai.com/beer.mp4"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs

# Model version ID is optional. It defaults to the latest model version.
```

</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>

  ```text
  Predicted concepts on frame 500:
	beer 1.00
	glass 1.00
	foam 1.00
	drink 1.00
	lager 1.00
	alcohol 0.99
	brewery 0.99
	liquid 0.98
	cold 0.98
	ale 0.98
	bubble 0.98
	full 0.98
	bar 0.98
	pub 0.97
	pint 0.97
	foamy 0.95
	mug 0.95
	refreshment 0.94
	cool 0.94
	intoxicated 0.94
Predicted concepts on frame 1500:
	beer 1.00
	glass 1.00
	foam 1.00
	lager 1.00
	drink 1.00
	alcohol 1.00
	brewery 1.00
	ale 0.99
	cold 0.99
	pint 0.99
	pub 0.99
	bar 0.99
	full 0.99
	foamy 0.98
	liquid 0.98
	amber 0.98
	liquor 0.98
	bubble 0.97
	brew 0.97
	sketch out 0.97
Predicted concepts on frame 2500:
	glass 1.00
	drink 0.99
	foam 0.99
	beer 0.99
	cold 0.98
	no person 0.98
	liquid 0.97
	alcohol 0.96
	full 0.95
	lager 0.95
	bar 0.93
	refreshment 0.91
	thirst 0.91
	liquor 0.89
	pub 0.88
	cool 0.87
	bubble 0.87
	brewery 0.86
	intoxicated 0.85
	foamy 0.85
Predicted concepts on frame 3500:
	drink 0.99
	glass 0.99
	no person 0.98
	foam 0.97
	alcohol 0.97
	beer 0.97
	liquid 0.96
	cold 0.94
	refreshment 0.92
	food 0.89
	full 0.89
	vertical 0.89
	gold 0.88
	bubble 0.88
	bar 0.86
	health 0.85
	bottle 0.84
	sparkling 0.84
	lager 0.82
	translucent 0.82
Predicted concepts on frame 4500:
	beer 1.00
	no person 0.99
	foam 0.99
	glass 0.97
	drink 0.96
	lager 0.96
	brewery 0.94
	bar 0.93
	cold 0.92
	alcohol 0.91
	pint 0.91
	full 0.90
	foamy 0.90
	food 0.90
	refreshment 0.87
	mug 0.86
	vertical 0.84
	liquor 0.84
	ale 0.82
	liquid 0.79
Predicted concepts on frame 5500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	lager 0.98
	drink 0.97
	brewery 0.97
	cold 0.95
	full 0.95
	bar 0.95
	pint 0.94
	alcohol 0.94
	foamy 0.93
	ale 0.90
	pub 0.89
	mug 0.88
	refreshment 0.88
	liquor 0.87
	food 0.85
	liquid 0.85
Predicted concepts on frame 6500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	drink 0.98
	lager 0.98
	brewery 0.96
	bar 0.95
	alcohol 0.94
	cold 0.94
	pint 0.94
	full 0.93
	foamy 0.91
	ale 0.89
	mug 0.88
	pub 0.88
	refreshment 0.88
	food 0.86
	liquid 0.85
	liquor 0.85
Predicted concepts on frame 7500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	lager 0.98
	drink 0.98
	brewery 0.97
	cold 0.96
	bar 0.95
	pint 0.95
	alcohol 0.94
	full 0.94
	foamy 0.92
	ale 0.91
	pub 0.90
	liquor 0.89
	mug 0.88
	food 0.86
	refreshment 0.86
	liquid 0.84
Predicted concepts on frame 8500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	lager 0.98
	drink 0.98
	brewery 0.97
	cold 0.96
	bar 0.95
	pint 0.95
	alcohol 0.94
	full 0.94
	foamy 0.92
	ale 0.91
	pub 0.90
	liquor 0.89
	mug 0.88
	food 0.86
	refreshment 0.86
	liquid 0.84

  ```

</details>

<details>
  <summary>JSON Output Example</summary>

```javascript
id: "79ab98ef65534efa9d71c31428ec44b4"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643285191
  nanos: 303509944
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
  id: "7fb8e93a47df430d8eb6d03cd4c412a3"
  data {
    video {
      url: "https://samples.clarifai.com/beer.mp4"
    }
  }
}
data {
  frames {
    frame_info {
      time: 500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9988051652908325
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9982008934020996
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9973153471946716
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9968197345733643
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9958932399749756
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9947922825813293
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9894191026687622
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.981312096118927
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9799724221229553
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9794926047325134
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9781787991523743
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9775476455688477
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9774224758148193
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9717299938201904
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9698840975761414
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9536985158920288
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9475905895233154
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9417927265167236
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.9395936727523804
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.9375916123390198
        app_id: "main"
      }
    }
    id: "faa9f3d5c8569123d8bea365ea478031"
  }
  frames {
    frame_info {
      index: 1
      time: 1500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9997990727424622
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9992085099220276
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9991655349731445
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9990026354789734
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9977992177009583
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9972625970840454
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9962783455848694
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9941165447235107
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9934180974960327
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9922869205474854
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9907853603363037
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9899360537528992
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9871671795845032
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.984533429145813
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9825930595397949
        app_id: "main"
      }
      concepts {
        id: "ai_n1b6R1vv"
        name: "amber"
        value: 0.9777848720550537
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9757136106491089
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9743807911872864
        app_id: "main"
      }
      concepts {
        id: "ai_4Dlsldjg"
        name: "brew"
        value: 0.9738532304763794
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.9724686741828918
        app_id: "main"
      }
    }
    id: "8e5f8672bdda2f2682d59ccc019d48c0"
  }
  frames {
    frame_info {
      index: 2
      time: 2500
    }
    data {
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9965206384658813
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9949583411216736
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9936542510986328
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.988069474697113
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9829316735267639
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9772725105285645
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9673009514808655
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.960793137550354
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9534621834754944
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9493317008018494
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9254936575889587
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9130513072013855
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9126085042953491
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8912835121154785
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.879002571105957
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.8719608783721924
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8683509826660156
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.8581545948982239
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.8477959036827087
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.8463982939720154
        app_id: "main"
      }
    }
    id: "3f4cd8b6cbe2361de2d3a3f84906723c"
  }
  frames {
    frame_info {
      index: 3
      time: 3500
    }
    data {
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9926630258560181
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9923473596572876
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9764698147773743
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9728322625160217
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.966442883014679
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9658946990966797
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9584060311317444
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9354620575904846
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9240690469741821
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8922897577285767
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.8912531137466431
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.890453040599823
        app_id: "main"
      }
      concepts {
        id: "ai_7qwGxLch"
        name: "gold"
        value: 0.8823112845420837
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8816878795623779
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.862342119216919
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.8497162461280823
        app_id: "main"
      }
      concepts {
        id: "ai_12dz73B9"
        name: "bottle"
        value: 0.8430662751197815
        app_id: "main"
      }
      concepts {
        id: "ai_8zbKXvD7"
        name: "sparkling"
        value: 0.842933177947998
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.8230189085006714
        app_id: "main"
      }
      concepts {
        id: "ai_rlLtJVWx"
        name: "translucent"
        value: 0.8191360235214233
        app_id: "main"
      }
    }
    id: "049f7331f17764126fa433ccc7eb27a6"
  }
  frames {
    frame_info {
      index: 4
      time: 4500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9961544871330261
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9909304976463318
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9882357120513916
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9710526466369629
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9644208550453186
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9598450660705566
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.94231778383255
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9267554879188538
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9237532615661621
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.910051167011261
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9066912531852722
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.8988522887229919
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.8987897634506226
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8952534198760986
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8680539131164551
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8612155318260193
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8379439115524292
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8370608687400818
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8213710784912109
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.7925900220870972
        app_id: "main"
      }
    }
    id: "a815862119825cfb037834ec5dc24619"
  }
  frames {
    frame_info {
      index: 5
      time: 5500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9980643391609192
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9935665726661682
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9905995726585388
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.982948899269104
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9775984287261963
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.97336745262146
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.965510368347168
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9463648200035095
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.945787250995636
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9453830718994141
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9434540867805481
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9397314786911011
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9338845610618591
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9008448719978333
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8929358124732971
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8799080848693848
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8764391541481018
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8716399669647217
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.852960467338562
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8480190634727478
        app_id: "main"
      }
    }
    id: "14572f138018d23fcd39a87f0c51880e"
  }
  frames {
    frame_info {
      index: 6
      time: 6500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9978025555610657
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9900859594345093
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.989570140838623
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9801958203315735
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.976635217666626
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9750798344612122
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9616800546646118
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9454798102378845
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9426078200340271
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9405171871185303
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9403313994407654
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9268600344657898
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.914089560508728
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8905293345451355
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.881027102470398
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8808913230895996
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8798633217811584
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8592641949653625
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8535290956497192
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8499879837036133
        app_id: "main"
      }
    }
    id: "7790d9923639183be7213e8330736ea5"
  }
  frames {
    frame_info {
      index: 7
      time: 7500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9986417889595032
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9933319687843323
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9932761192321777
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9835835099220276
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9804980754852295
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9756208062171936
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9704380035400391
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9604755640029907
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9517722129821777
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9517138004302979
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.93982994556427
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9397101998329163
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9207385778427124
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9087189435958862
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9011164307594299
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.885781466960907
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8845415115356445
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8642757534980774
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8598712086677551
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8406236171722412
        app_id: "main"
      }
    }
    id: "32224efe9c43139c9f3070930bae4e6c"
  }
  frames {
    frame_info {
      index: 8
      time: 8500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9986417889595032
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9933319687843323
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9932761192321777
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9835835099220276
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9804980754852295
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9756208062171936
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9704380035400391
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9604755640029907
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9517722129821777
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9517138004302979
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.93982994556427
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9397101998329163
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9207385778427124
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9087189435958862
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9011164307594299
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.885781466960907
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8845415115356445
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8642757534980774
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8598712086677551
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8406236171722412
        app_id: "main"
      }
    }
    id: "0c4dd5d602afa6754bcfd441998412af"
  }
}

```

</details>

## Via Bytes

Below is an example of how you would send the bytes of a video and receive predictions from the `general` model.

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

<TabItem value="java" label="Java">
  <CodeBlock className="language-java">{CodeJavaViaBytes}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
# Insert here the initialization code as outlined on this page:
# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

//
// For this example, the bytes of a video are needed and can be read in
// using PHP provided functions.
//
video = "https://samples.clarifai.com/beer.mp4";
$videoData = file_get_contents($image); // Get the video data from the URL

///////////////////////////////////////////////////////////////////////////////
// Specifying the Request Data
///////////////////////////////////////////////////////////////////////////////
//
// In the Clarifai platform a video is defined by a special Video object.
// There are several ways in which an Video object can be populated including
// by url and video bytes (base64).
//
$video = new Video([
    'base64' => $videoData
]);

//
// After a Video object is created, a Data object is constructed around it.
// The Data object offers a container that contains additional image independent
// metadata.  In this particular use case, no other metadata is needed to be
// specified.
//
$data = new Data([
    'video' => $video
]);

//
// The Data object is then wrapped in a Video object in order to meet the
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
// we loop through all of the frames of the video and print out the predicted 
// concepts for each along with their numerical prediction value (confidence).
//
foreach ($output->getData()->getFrames() as $frame) {
    echo "Predicted concepts on frame " . $frame->getFrameInfo()->getTime() . ":";
    foreach ($frame->getData()->getConcepts() as $concept) {
        echo "   " . $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
    }
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
          "video": {
            "base64": "'"$(base64 video_file_path.mp4)"'"
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs

# The model version ID is optional. It defaults to the latest model version.
```
</TabItem>

</Tabs>

<details>
    <summary>Code Output Example</summary>

```text
Predicted concepts on frame 500:
	beer 1.00
	glass 1.00
	foam 1.00
	drink 1.00
	lager 1.00
	alcohol 0.99
	brewery 0.99
	liquid 0.98
	cold 0.98
	ale 0.98
	bubble 0.98
	full 0.98
	bar 0.98
	pub 0.97
	pint 0.97
	foamy 0.95
	mug 0.95
	refreshment 0.94
	cool 0.94
	intoxicated 0.94
Predicted concepts on frame 1500:
	beer 1.00
	glass 1.00
	foam 1.00
	lager 1.00
	drink 1.00
	alcohol 1.00
	brewery 1.00
	ale 0.99
	cold 0.99
	pint 0.99
	pub 0.99
	bar 0.99
	full 0.99
	foamy 0.98
	liquid 0.98
	amber 0.98
	liquor 0.98
	bubble 0.97
	brew 0.97
	sketch out 0.97
Predicted concepts on frame 2500:
	glass 1.00
	drink 0.99
	foam 0.99
	beer 0.99
	cold 0.98
	no person 0.98
	liquid 0.97
	alcohol 0.96
	full 0.95
	lager 0.95
	bar 0.93
	refreshment 0.91
	thirst 0.91
	liquor 0.89
	pub 0.88
	cool 0.87
	bubble 0.87
	brewery 0.86
	intoxicated 0.85
	foamy 0.85
Predicted concepts on frame 3500:
	drink 0.99
	glass 0.99
	no person 0.98
	foam 0.97
	alcohol 0.97
	beer 0.97
	liquid 0.96
	cold 0.94
	refreshment 0.92
	food 0.89
	full 0.89
	vertical 0.89
	gold 0.88
	bubble 0.88
	bar 0.86
	health 0.85
	bottle 0.84
	sparkling 0.84
	lager 0.82
	translucent 0.82
Predicted concepts on frame 4500:
	beer 1.00
	no person 0.99
	foam 0.99
	glass 0.97
	drink 0.96
	lager 0.96
	brewery 0.94
	bar 0.93
	cold 0.92
	alcohol 0.91
	pint 0.91
	full 0.90
	foamy 0.90
	food 0.90
	refreshment 0.87
	mug 0.86
	vertical 0.84
	liquor 0.84
	ale 0.82
	liquid 0.79
Predicted concepts on frame 5500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	lager 0.98
	drink 0.97
	brewery 0.97
	cold 0.95
	full 0.95
	bar 0.95
	pint 0.94
	alcohol 0.94
	foamy 0.93
	ale 0.90
	pub 0.89
	mug 0.88
	refreshment 0.88
	liquor 0.87
	food 0.85
	liquid 0.85
Predicted concepts on frame 6500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	drink 0.98
	lager 0.98
	brewery 0.96
	bar 0.95
	alcohol 0.94
	cold 0.94
	pint 0.94
	full 0.93
	foamy 0.91
	ale 0.89
	mug 0.88
	pub 0.88
	refreshment 0.88
	food 0.86
	liquid 0.85
	liquor 0.85
Predicted concepts on frame 7500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	lager 0.98
	drink 0.98
	brewery 0.97
	cold 0.96
	bar 0.95
	pint 0.95
	alcohol 0.94
	full 0.94
	foamy 0.92
	ale 0.91
	pub 0.90
	liquor 0.89
	mug 0.88
	food 0.86
	refreshment 0.86
	liquid 0.84
Predicted concepts on frame 8500:
	beer 1.00
	foam 0.99
	no person 0.99
	glass 0.98
	lager 0.98
	drink 0.98
	brewery 0.97
	cold 0.96
	bar 0.95
	pint 0.95
	alcohol 0.94
	full 0.94
	foamy 0.92
	ale 0.91
	pub 0.90
	liquor 0.89
	mug 0.88
	food 0.86
	refreshment 0.86
	liquid 0.84
```
</details>

<details>
    <summary>JSON Output Example</summary>

```javascript
id: "498ebd8730c94fc3a04c086bef2c5941"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643298675
  nanos: 539564513
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
  id: "200d1a3088ac413e8b0e14c6ae93b97f"
  data {
    video {
      url: "https://samples.clarifai.com/placeholder.gif"
      base64: "true"
    }
  }
}
data {
  frames {
    frame_info {
      time: 500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9988051652908325
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9982008934020996
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9973153471946716
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9968197345733643
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9958932399749756
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9947922825813293
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9894189834594727
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.981312096118927
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9799723029136658
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9794925451278687
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9781786799430847
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9775475263595581
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9774225950241089
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9717299938201904
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9698840975761414
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9536982774734497
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9475905895233154
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9417927265167236
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.9395936131477356
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.9375916123390198
        app_id: "main"
      }
    }
    id: "faa9f3d5c8569123d8bea365ea478031"
  }
  frames {
    frame_info {
      index: 1
      time: 1500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9997990727424622
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9992085099220276
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9991655349731445
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9990026354789734
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9977992177009583
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9972625970840454
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9962783455848694
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9941165447235107
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9934180974960327
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9922869205474854
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9907853603363037
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9899360537528992
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9871671795845032
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.984533429145813
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9825929403305054
        app_id: "main"
      }
      concepts {
        id: "ai_n1b6R1vv"
        name: "amber"
        value: 0.9777848720550537
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9757136106491089
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9743807911872864
        app_id: "main"
      }
      concepts {
        id: "ai_4Dlsldjg"
        name: "brew"
        value: 0.9738532304763794
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.9724686741828918
        app_id: "main"
      }
    }
    id: "8e5f8672bdda2f2682d59ccc019d48c0"
  }
  frames {
    frame_info {
      index: 2
      time: 2500
    }
    data {
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9965206384658813
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9949584603309631
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9936542510986328
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.988069474697113
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9829317331314087
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9772723913192749
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.967301070690155
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9607932567596436
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9534623026847839
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9493318796157837
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9254936575889587
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.913051426410675
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9126086831092834
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8912835121154785
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8790027499198914
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.8719612956047058
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8683512210845947
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.8581551909446716
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.8477963209152222
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.8463988900184631
        app_id: "main"
      }
    }
    id: "3f4cd8b6cbe2361de2d3a3f84906723c"
  }
  frames {
    frame_info {
      index: 3
      time: 3500
    }
    data {
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9926630258560181
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9923473596572876
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9764698147773743
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9728322625160217
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9664429426193237
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9658945798873901
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9584061503410339
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.935462236404419
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9240690469741821
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.892289936542511
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.8912532329559326
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8904528617858887
        app_id: "main"
      }
      concepts {
        id: "ai_7qwGxLch"
        name: "gold"
        value: 0.8823111653327942
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8816881775856018
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.862342119216919
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.8497164249420166
        app_id: "main"
      }
      concepts {
        id: "ai_12dz73B9"
        name: "bottle"
        value: 0.8430662751197815
        app_id: "main"
      }
      concepts {
        id: "ai_8zbKXvD7"
        name: "sparkling"
        value: 0.842933177947998
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.8230187296867371
        app_id: "main"
      }
      concepts {
        id: "ai_rlLtJVWx"
        name: "translucent"
        value: 0.8191360831260681
        app_id: "main"
      }
    }
    id: "049f7331f17764126fa433ccc7eb27a6"
  }
  frames {
    frame_info {
      index: 4
      time: 4500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9961544871330261
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9909304976463318
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9882357120513916
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9710526466369629
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.964420735836029
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9598450660705566
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.942317545413971
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9267554879188538
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9237532615661621
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.910051167011261
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9066911935806274
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.8988523483276367
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.8987899422645569
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8952536582946777
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8680537343025208
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8612155318260193
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8379440307617188
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.837060809135437
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8213710188865662
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.7925897240638733
        app_id: "main"
      }
    }
    id: "a815862119825cfb037834ec5dc24619"
  }
  frames {
    frame_info {
      index: 5
      time: 5500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9980643391609192
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9935665726661682
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9905995726585388
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.982948899269104
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9775985479354858
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9733675122261047
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9655104875564575
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9463649392127991
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9457871317863464
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9453830718994141
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9434543251991272
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9397315979003906
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9338845610618591
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9008452892303467
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.892936110496521
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8799083232879639
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8764392733573914
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.871640145778656
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8529603481292725
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8480191230773926
        app_id: "main"
      }
    }
    id: "14572f138018d23fcd39a87f0c51880e"
  }
  frames {
    frame_info {
      index: 6
      time: 6500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9978025555610657
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9900859594345093
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.989570140838623
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9801958203315735
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.976635217666626
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9750798344612122
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9616801738739014
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9454798102378845
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9426078796386719
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9405170679092407
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9403313994407654
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9268599152565002
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9140898585319519
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8905293345451355
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8810272812843323
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8808915615081787
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8798631429672241
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8592639565467834
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8535292148590088
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.849987804889679
        app_id: "main"
      }
    }
    id: "7790d9923639183be7213e8330736ea5"
  }
  frames {
    frame_info {
      index: 7
      time: 7500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9986417889595032
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9933319687843323
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9932761192321777
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9835835099220276
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9804979562759399
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9756208062171936
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9704380035400391
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9604755640029907
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9517720937728882
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9517136812210083
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9398297071456909
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9397101402282715
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9207383990287781
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9087187051773071
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9011161923408508
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8857810497283936
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8845416307449341
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8642756938934326
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8598712086677551
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8406236171722412
        app_id: "main"
      }
    }
    id: "32224efe9c43139c9f3070930bae4e6c"
  }
  frames {
    frame_info {
      index: 8
      time: 8500
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9986417889595032
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9933319687843323
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9932761192321777
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9835835099220276
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9804979562759399
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9756208062171936
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9704380035400391
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9604755640029907
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9517720937728882
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9517136812210083
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9398297071456909
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9397101402282715
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9207383990287781
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9087187051773071
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9011161923408508
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8857810497283936
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8845416307449341
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8642756938934326
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8598712086677551
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8406236171722412
        app_id: "main"
      }
    }
    id: "0c4dd5d602afa6754bcfd441998412af"
  }
}
```

</details>

