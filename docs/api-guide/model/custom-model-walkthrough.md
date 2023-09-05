---
description: Develop your own custom models using transfer learning
sidebar_position: 3
---

# Custom Transfer Learning Models

**Develop your own custom models using transfer learning**
<hr />

You do not need many images to get started creating a custom model using our world-class [transfer learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/) technology. We recommend starting with 10 and adding more as needed. 

Before you create and train your first model, you need to [create an application](https://docs.clarifai.com/clarifai-basics/applications/#create-an-application) and select **Image/Video** as the primary input type. The Base Workflow will be automatically selected for you. 

![](/img/illustration-training.png)

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonAddImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/py/add_images_with_concepts.py";
import PythonCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/py/create_model.py";
import PythonTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/py/train_model.py";
import PythonPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/py/predict_with_model.py";

import JSAddImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/js/add_images_with_concepts.html";
import JSCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/js/create_model.html";
import JSTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/js/train_model.html";
import JSPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/js/predict_with_model.html";

import NodeAddImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/node/add_images_with_concepts.js";
import NodeCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/node/create_model.js";
import NodeTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/node/train_model.js";
import NodePredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/node/predict_with_model.js";

import JavaAddImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/java/add_images_with_concepts.java";
import JavaCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/java/create_model.java";
import JavaTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/java/train_model.java";
import JavaPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/java/predict_with_model.java";

import CurlAddImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/curl/add_images_with_concepts.sh";
import CurlCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/curl/create_model.sh";
import CurlTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/curl/train_model.sh";
import CurlPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/curl/predict_with_model.sh";

import ExampleAddImagesConcepts from "!!raw-loader!../../../code_snippets/api-guide/model/code_output_examples/add_images_with_concepts.js";
import ExampleCreateModel from "!!raw-loader!../../../code_snippets/api-guide/model/code_output_examples/create_model.js";
import ExampleTrainModel from "!!raw-loader!../../../code_snippets/api-guide/model/code_output_examples/train_model.js";
import ExamplePredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/code_output_examples/predict_with_model.js";
import ExampleTextPredictModel from "!!raw-loader!../../../code_snippets/api-guide/model/code_output_examples/predict_with_model.txt";

## Add Images With Concepts

:::tip

This walkthrough example assumes that you've selected a Classification Base Workflow. If you choose a Detection Base Workflow, then this **Add Images With Concepts** example could throw an error message, such as `Adding/patching inputs with pre-tagged concepts is not allowed for apps with a detection model in their base workflow. Please use Post or Patch Annotations instead.` If you get such an error, you should first upload the inputs without any concepts attached and then use the [Annotations endpoint](https://docs.clarifai.com/api-guide/annotate/annotations/#add-annotations) to label the inputs.

:::

To get started training your own model, you need to first add images that already contain the concepts you want your model to see.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaAddImagesConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAddImagesConcepts}</CodeBlock>
</TabItem>

<!--<TabItem value="javascript" label="Javascript">

```javascript

app.inputs.create({
  url: "https://samples.clarifai.com/puppy.jpeg",
  concepts: [
    {
      id: "charlie",
      value: true
    }
  ]
});
```
</TabItem>-->

<!--<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
from clarifai.rest import Image as ClImage

app = ClarifaiApp(api_key='YOUR_API_KEY')

# add multiple images with concepts
img1 = ClImage(url="https://samples.clarifai.com/puppy.jpeg", concepts=['charlie'], not_concepts=['our_wedding'])
img2 = ClImage(url="https://samples.clarifai.com/wedding.jpg", concepts=['our_wedding'], not_concepts=['cat','charlie'])

app.inputs.bulk_create_images([img1, img2])
```
</TabItem>-->

<!--<TabItem value="java" label="Java">

```java
client.addInputs()
    .plus(
        ClarifaiInput.forImage("https://samples.clarifai.com/puppy.jpeg")
            .withConcepts(Concept.forID("charlie"))
    )
    .executeSync();
```
</TabItem>-->

<!--
<TabItem value="csharp" label="C#">

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Inputs;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.AddInputs(
                    new ClarifaiURLImage(
                        "https://samples.clarifai.com/puppy.jpeg",
                        positiveConcepts: new List<Concept> {new Concept(id: "charlie")}))
                .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiImage *image = [[ClarifaiImage alloc] initWithURL:@"https://samples.clarifai.com/puppy.jpeg" andConcepts:@"cute puppy"];
[_app addInputs:@[image] completion:^(NSArray<ClarifaiInput *> *inputs, NSError *error) {
    NSLog(@"inputs: %@", inputs);
}];
```
</TabItem>-->

<!--
<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Inputs\ClarifaiURLImage;
use Clarifai\DTOs\Predictions\Concept;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->addInputs(
        (new ClarifaiURLImage('https://samples.clarifai.com/puppy.jpeg'))
        ->withAllowDuplicateUrl(true)
        ->withPositiveConcepts([new Concept('charlie')]))
    ->executeSync();

if ($response-> isSuccessful()) {
    echo "Response is successful.\n";
} else {
    echo "Response is not successful. Reason: \n";
    echo $response->status()->description() . "\n";
    echo $response->status()->errorDetails() . "\n";
    echo "Status code: " . $response->status()->statusCode();
}
```
</TabItem>
-->

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{ExampleAddImagesConcepts}</CodeBlock>
</details>


## Create a Model

After adding images with concepts, you are now ready to create a custom transfer learning model (also called an "embedding-classifier"). You need to provide a name for the model. 

Take note of the `model id` that is returned in the response. We'll need that for the next two steps.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCreateModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCreateModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCreateModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaCreateModel}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCreateModel}</CodeBlock>
</TabItem>

<!--<TabItem value="javascript" label="Javascript">

```javascript
app.models.create(
  "pets",
  [
    { "id": "charlie" }
  ]
).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>-->

<!--<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_API_KEY')

model = app.models.create('pets', concepts=['charlie'])
```
</TabItem>-->

<!--<TabItem value="java" label="Java">

```java
client.createModel("pets")
    .withOutputInfo(ConceptOutputInfo.forConcepts(
        Concept.forID("charlie")
    ))
    .executeSync();
```
</TabItem>-->

<!--
<TabItem value="csharp" label="C#">

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.CreateModel(
                    "pets",
                    concepts: new List<Concept> {new Concept("charlie")})
                .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--<TabItem value="objective-c" label="Objective-C">

```objectivec
[app createModel:@[concept] name:modelName conceptsMutuallyExclusive:NO closedEnvironment:NO
      completion:^(ClarifaiModel *model, NSError *error) {
        NSLog(@"model: %@", model);
}];
```
</TabItem>-->

<!--
<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Predictions\Concept;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->createModel('pets')
    ->withConcepts([new Concept('charlie')])
    ->executeSync();

if ($response-> isSuccessful()) {
    echo "Response is successful.\n";
} else {
    echo "Response is not successful. Reason: \n";
    echo $response->status()->description() . "\n";
    echo $response->status()->errorDetails() . "\n";
    echo "Status code: " . $response->status()->statusCode();
}
```
</TabItem>
-->

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{ExampleCreateModel}</CodeBlock>
</details>

## Train the Model

Now that you've added images with concepts, then created a model, the next step is to train the model. When you train a model, you are telling the system to look at all the images with concepts you've provided and learn from them. 

This train operation is asynchronous. It may take a few seconds for your model to be fully trained and ready.

Take note of the `model_version id` in the response. We'll need that for the next section when we predict with the model.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonTrainModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTrainModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeTrainModel}</CodeBlock>
</TabItem>

<!--
<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaTrainModel}</CodeBlock>
</TabItem>
-->

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTrainModel}</CodeBlock>
</TabItem>

<!--<TabItem value="javascript" label="Javascript">

```javascript
app.models.train("{model_id}").then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);

// or if you have an instance of a model

model.train().then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>-->

<!--<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp

app = ClarifaiApp(api_key='YOUR_API_KEY')

model = app.models.get('{model_id}')
model.train()
```
</TabItem>-->

<!--<TabItem value="java" label="Java">

```java
client.trainModel("{model_id}").executeSync();
```
</TabItem>-->

<!--
<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.TrainModel<Concept>("{model_id}")
                .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiImage *image = [[ClarifaiImage alloc] initWithURL:@"https://samples.clarifai.com/puppy.jpeg"]
[app getModel:@"{id}" completion:^(ClarifaiModel *model, NSError *error) {
    [model train:^(ClarifaiModel *model, NSError *error) {
        NSLog(@"model: %@", model);
    }];
}];
```
</TabItem>-->

<!--
<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Models\ModelType;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->trainModel(ModelType::concept(), 'MODEL_ID')
    ->executeSync();

if ($response-> isSuccessful()) {
    echo "Response is successful.\n";
} else {
    echo "Response is not successful. Reason: \n";
    echo $response->status()->description() . "\n";
    echo $response->status()->errorDetails() . "\n";
    echo "Status code: " . $response->status()->statusCode();
}
```
</TabItem>
-->

</Tabs>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{ExampleTrainModel}</CodeBlock>
</details>

## Predict With the Model

Now that we have trained the model, we can start making predictions with it. In our predict call, we specify three items: the `model id`, `model version id` \(optional, defaults to the latest trained version if omitted\), and the `input` we want a prediction for.

:::tip

You can repeat the above steps as often as you like. By adding more images with concepts and training, you can get the model to predict exactly how you want it to.

:::

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonPredictModel}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSPredictModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodePredictModel}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaPredictModel}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlPredictModel}</CodeBlock>
</TabItem>

<!--<TabItem value="javascript" label="Javascript">

```javascript
let app = new Clarifai.App({apiKey: 'YOUR_API_KEY'});

app.models.predict({id:'MODEL_ID', version:'MODEL_VERSION_ID'}, "https://samples.clarifai.com/metro-north.jpg").then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>-->

<!--<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_API_KEY')

model = app.models.get('MODEL_ID')
model.model_version = 'MODEL_VERSION_ID'  # This is optional. Defaults to the latest model version.

response = model.predict_by_url('https://samples.clarifai.com/metro-north.jpg')
```
</TabItem>-->

<!--<TabItem value="java" label="Java">

```java
ModelVersion modelVersion = client.getModelVersionByID("MODEL_ID", "MODEL_VERSION_ID")
        .executeSync()
        .get();

    client.predict("MODEL_ID")
        .withVersion(modelVersion)
        .withInputs(ClarifaiInput.forImage("https://samples.clarifai.com/metro-north.jpg"))
        .executeSync();
```
</TabItem>-->

<!--
<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Inputs;
using Clarifai.DTOs.Predictions;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

                 var response = await Client.Predict<Concept>(
                    "YOUR_MODEL_ID",
                    new ClarifaiURLImage("https://samples.clarifai.com/metro-north.jpg"),
                    modelVersionID: "MODEL_VERSION_ID")
                  .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiImage *image = [[ClarifaiImage alloc] initWithURL:@"https://samples.clarifai.com/puppy.jpeg"]
[app getModel:@"{id}" completion:^(ClarifaiModel *model, NSError *error) {
    [model predictOnImages:@[image]
                completion:^(NSArray<ClarifaiSearchResult *> *outputs, NSError *error) {
                    NSLog(@"outputs: %@", outputs);
                }];
}];
```
</TabItem>-->

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-js">{ExampleTextPredictModel}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-js">{ExamplePredictModel}</CodeBlock>
</details>
