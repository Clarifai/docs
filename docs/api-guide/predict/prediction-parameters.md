---
description: Learn about model prediction parameters.
sidebar_position: 6
---

# Prediction Parameters

**Learn about model prediction parameters**
<hr />

You can set additional parameters to gain flexibility in the predict operation.

## Select Concepts

By putting this additional parameter on your predict calls, you can receive predict value\(s\) for **only** the concepts that you want to. You can specify particular concepts by either their id and/or their name. 

The concept names and ids are case sensitive; and so, these must be exact matches.

:::tip

To retrieve an entire list of concepts from a given model, and get their ids and names, use the [`GetModelOutputInfo`](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete#get-model-output-info-by-id) endpoint.

:::

:::caution

If you submit a request with not an exact match of the concept id or name, you will receive an invalid model argument error. However, if one or more matches while one or more do not, the API will respond with a Mixed Success.

:::


Below is an example of how you would select concepts and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. 

:::info

The initialization code used in the following examples is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_by_model_version_id.py";
import PythonMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_max_concepts.py";
import PythonMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_min_predict_value.py";
import PythonSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/python/prediction_parameters_select_concepts.py";

import JavaScriptByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_by_model_version_id.html";
import JavaScriptMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_max_concepts.html";
import JavaScriptMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_min_predict_value.html";
import JavaScriptSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/js/prediction_parameters_select_concepts.html";

import NodeJSByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_by_model_version_id.js";
import NodeJSMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_max_concepts.js";
import NodeJSMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_min_predict_value.js";
import NodeJSSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/node/prediction_parameters_select_concepts.js";

import JavaByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_by_model_version_id.java";
import JavaMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_max_concepts.java";
import JavaMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_min_predict_value.java";
import JavaSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/java/prediction_parameters_select_concepts.java";

import PHPByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_by_model_version_id.php";
import PHPMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_max_concepts.php";
import PHPMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_min_predict_value.php";
import PHPSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/php/prediction_parameters_select_concepts.php";

import CurlByModelVersion from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_by_model_version_id.sh";
import CurlMaxConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_max_concepts.sh";
import CurlMinPredictValue from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_min_predict_value.sh";
import CurlSelectConcepts from "!!raw-loader!../../../code_snippets/api-guide/predict/curl/prediction_parameters_select_concepts.sh";

import CodeOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_select_concepts.txt";
import JSONOutputExample1 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_select_concepts.js";
import CodeOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_max_concepts.txt";
import JSONOutputExample2 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_max_concepts.js";
import CodeOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_min_predict_value.txt";
import JSONOutputExample3 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_min_predict_value.js";
import CodeOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_model_version_id.txt";
import JSONOutputExample4 from "!!raw-loader!../../../code_snippets/api-guide/predict/code_output_examples/prediction_parameters_model_version_id.js";


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPSelectConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlSelectConcepts}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample1}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample1}</CodeBlock>
</details>


## Maximum Concepts

Setting the `max_concepts` parameter will customize how many concepts and their corresponding probability scores the predict endpoint will return. If not specified, the predict endpoint will return the top 20 concepts. 

You can currently set the max concepts parameter to any number in the range of \[1-200\]. 

If your use case requires more concepts, please contact [Support](mailto:support@clarifai.com).

Below is an example of how you would set maximum concepts and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. 

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPMaxConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlMaxConcepts}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample2}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample2}</CodeBlock>
</details>

## Minimum Prediction Value

This parameter lets you set a minimum probability threshold for the outputs you want to view for the Predict operation. 

For example if you want to see all concepts with a probability score of .95 or higher, this parameter will allow you to accomplish that. 

Also note that if you don't specify the number of `max_concepts`, you will only see the top 20. If your result can contain more values you will have to increase the number of maximum concepts as well.

Below is an example of how you would set a minimum probability threshold and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. 


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPMinPredictValue}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlMinPredictValue}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample3}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample3}</CodeBlock>
</details>

## By Model Version ID

Every time you train a custom model, it creates a new model version. By specifying `version_id` in your predict call, you can continue to predict on a previous version, for consistent prediction results. Clarifai also updates its pre-built models on a regular basis.

If you are looking for consistent results from your predict calls, use `version_id`. If the model `version_id` is not specified, predict will default to the most current model.

Below is an example of how you would set a model version ID and receive predictions from Clarifai's [`general-image-recognition`](https://clarifai.com/clarifai/main/models/general-image-recognition) model. 


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JavaScriptByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeJSByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">
    <CodeBlock className="language-java">{JavaByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP">
    <CodeBlock className="language-php">{PHPByModelVersion}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlByModelVersion}</CodeBlock>
</TabItem>

</Tabs>

<details>
  <summary>Code Output Example</summary>
    <CodeBlock className="language-text">{CodeOutputExample4}</CodeBlock>
</details>

<details>
  <summary>JSON Output Example</summary>
    <CodeBlock className="language-javascript">{JSONOutputExample4}</CodeBlock>
</details>
