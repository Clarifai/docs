---
description: Select a subset of your data based on useful filters.
sidebar_position: 1
---

# Filter

**Select a subset of your data based on useful filters**
<hr />

You can filter and customize your search results to find exactly what you want. Filtering helps you reduce the amount of data returned in search results by removing irrelevant content, or by allowing you to select a specific subset of your data.

In annotation search, `Filter` is a list of `Annotation` objects.

:::info

Before using the [Python SDK](https://docs.clarifai.com/additional-resources/api-overview/python-sdk), [Node.js SDK](https://docs.clarifai.com/additional-resources/api-overview/nodejs-sdk), or any of our [gRPC clients](https://docs.clarifai.com/additional-resources/api-overview/grpc-clients), ensure they are properly installed on your machine. Refer to their respective installation guides for instructions on how to install and initialize them.

:::

:::tip

You can learn how to paginate your API requests results [here](https://docs.clarifai.com/additional-resources/api-overview/pagination). 

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/by_custom_concepts.py";
import PythonUserID from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/by_user_id.py";
import PythonAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/by_annotation_status.py";
import PythonInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/add_inputs_longitude_latitude.py";
import PythonOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/perform_search_one_geo_point.py";
import PythonTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/perform_search_two_geo_point.py";
import PythonCustomAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/by_custom_annotation_info.py";
import PythonAnnotationInfo from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/py/by_annotation_info.py";

import JSCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/by_custom_concepts.html";
import JSUserID from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/by_user_id.html";
import JSAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/by_annotation_status.html";
import JSInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/add_inputs_longitude_latitude.html";
import JSOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/perform_search_one_geo_point.html";
import JSTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/perform_search_two_geo_point.html";
import JSCustomAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/by_custom_annotation_info.html";
import JSAnnotationInfo from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/js/by_annotation_info.html";

import NodeCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/by_custom_concepts.js";
import NodeUserID from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/by_user_id.js";
import NodeAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/by_annotation_status.js";
import NodeInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/add_inputs_longitude_latitude.js";
import NodeOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/perform_search_one_geo_point.js";
import NodeTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/perform_search_two_geo_point.js";
import NodeCustomAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/by_custom_annotation_info.js";
import NodeAnnotationInfo from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/node/by_annotation_info.js";

import JavaCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/by_custom_concepts.java";
import JavaUserID from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/by_user_id.java";
import JavaAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/by_annotation_status.java";
import JavaInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/add_inputs_longitude_latitude.java";
import JavaOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/perform_search_one_geo_point.java";
import JavaTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/perform_search_two_geo_point.java";
import JavaCustomAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/by_custom_annotation_info.java";
import JavaAnnotationInfo from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/java/by_annotation_info.java";

import PHPCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/by_custom_concepts.php";
import PHPUserID from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/by_user_id.php";
import PHPAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/by_annotation_status.php";
import PHPInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/add_inputs_longitude_latitude.php";
import PHPOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/perform_search_one_geo_point.php";
import PHPTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/perform_search_two_geo_point.php";
import PHPCustomAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/by_custom_annotation_info.php";
import PHPAnnotationInfo from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/php/by_annotation_info.php";

import CurlCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/by_custom_concepts.sh";
import CurlUserID from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/by_user_id.sh";
import CurlAnnotationStatus from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/by_annotation_status.sh";
import CurlInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/add_inputs_longitude_latitude.sh";
import CurlOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/perform_search_one_geo_point.sh";
import CurlTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/perform_search_two_geo_point.sh";
import CurlCustomAnnotation from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/by_custom_annotation_info.sh";
import CurlAnnotationInfo from "!!raw-loader!../../../../code_snippets/api-guide/search/filter/curl/by_annotation_info.sh";

import CodeIT from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/fl_it.py";
import CodeITTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/filterWithInputType.ts";

import CodeMD from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/fl_md.py";
import CodeMDTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/filterWithMetadata.ts";


import CodeGP from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/fl_gp.py";
import CodeGPTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/filterWithGeoPoint.ts";


import CodeIS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/fl_is.py";
import CodeISTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/filterWithInputStatusCode.ts";

import CodeData from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/fl_data.py";
import CodeDataTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/filterWithDatasetID.ts";

import CodeMM from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/fl_mm.py";
import CodeMMTS from "!!raw-loader!../../../../code_snippets/python-sdk/Search/filters/multiModalFiltering.ts";




## By Input Type

You can specify that search results should only include inputs of a particular data type, such as images, videos, or text.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIT}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeITTS}</CodeBlock>
</TabItem>
</Tabs>

## By Custom Concepts

After you annotate inputs with custom concepts, you can filter by concepts.

:::caution train a model

When performing a search with custom concepts, ensure that these concepts are first trained using an `embedding-classifier` model ([transfer-learning](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/) model). Without this training, the search query will result in an error.

Training a model generates embeddings for each custom concept. These concept embeddings are then utilized in the search process.

:::

<Tabs groupId="code">

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCustomConcepts}</CodeBlock>
</TabItem>

</Tabs>

## By User ID

If you have collaborators in your app and they helped you annotate your inputs, you can also filter annotations by their user ID.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonUserID}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSUserID}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeUserID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaUserID}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPUserID}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlUserID}</CodeBlock>
</TabItem>

</Tabs>

## By Dataset ID

You can include a dataset ID in the filter to narrow the search results to only inputs or data entries within that specific dataset.

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeData}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeDataTS}</CodeBlock>
</TabItem>
</Tabs>

## By Status Code

You can refine search results based on the [status](https://docs.clarifai.com/additional-resources/api-overview/status-codes) of the input data, such as whether it has been successfully processed, is pending processing, or has encountered errors.

You can also filter the annotations by their status. 

<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeIS}</CodeBlock>
 
</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeISTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotationStatus}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotationStatus}</CodeBlock>
</TabItem>

</Tabs>

## By Geo Location

Search by geo location allows you to restrict your search results to a bounding box based on longitude and latitude points. There are two ways you can provide longitude/latitude points. You can provide one point and a radius or you can provide two points.

It is important to note that a search by geo location acts as a filter and returns results ranked by any other provided search criteria, whether that is a visual search, concept search, or something else. If no other criterion is provided, results will return in the order the inputs were created, NOT by their distance to the center of the search area.

If you are providing one point and a radius, the radius can be in "mile", "kilometer", "degree", or "radian", marked by keywords `withinMiles`, `withinKilometers`, `withinDegrees`, or `withinRadians` respectively.

If you are providing two points, a box will be drawn from the uppermost point to the lowermost point, and the leftmost point to the rightmost point.

Before you perform a search by geo location, make sure you have added inputs with longitude and latitude points.

### Add Inputs With Longitude and Latitude Points

Provide a geo point to an input. The geo point is a JSON object consisting of a longitude and a latitude in GPS coordinate system \(SRID 4326\). There can be at most one single geo point associated with each input.

<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeGP}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeGPTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlInputsLongitude}</CodeBlock>
</TabItem>

</Tabs>

### Perform a Search With One Geo Point and Radius in Kilometers

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-javascript">{JavaOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlOneGeoPoint}</CodeBlock>
</TabItem>

</Tabs>

### Perform a Search With Two Geo Points

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTwoGeoPoints}</CodeBlock>
</TabItem>

</Tabs>

## By Custom Metadata

After you have added inputs with custom metadata, you can search by that metadata.

Below is an example of searching over custom metadata. You can exact match any `key`: `value` pair no matter how nested it is.

For example, if the metadata on an input is:

```javascript
{
  "keyname": "value1",
  "somelist": [1,2,3],
  "somenesting": {
     "keyname2":"value2",
     "list2":[4,5]
   }
}
```

Then the following searches will find this:

```javascript
{
  "keyname": "value1"
}
```

```javascript
{
  "somelist": [1,2,3]
}
```

```javascript
{
  "somelist": [1,2]
}
```

```javascript
{
  "somenesting": {"keyname2":"value2"}
}
```

```javascript
{
  "somenesting": {"list2":[5]}
}
```

How to perform searches:

<Tabs groupId="code">

<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMD}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeMMTS}</CodeBlock>
</TabItem>

<TabItem value="python2" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonCustomAnnotation}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSCustomAnnotation}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeCustomAnnotation}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaCustomAnnotation}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPCustomAnnotation}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCustomAnnotation}</CodeBlock>
</TabItem>

</Tabs>

## By Annotation Info

Each annotation has annotation info. Similar to metadata, you have full control of this field and can be any arbitrary JSON.

<Tabs groupId="code">

<TabItem value="python" label="Python (gRPC)">
    <CodeBlock className="language-python">{PythonAnnotationInfo}</CodeBlock>
</TabItem>

<TabItem value="js_rest" label="JavaScript (REST)">
    <CodeBlock className="language-javascript">{JSAnnotationInfo}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="Node.js (gRPC)">
    <CodeBlock className="language-javascript">{NodeAnnotationInfo}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java (gRPC)">
    <CodeBlock className="language-java">{JavaAnnotationInfo}</CodeBlock>
</TabItem>

<TabItem value="php" label="PHP (gRPC)">
    <CodeBlock className="language-php">{PHPAnnotationInfo}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlAnnotationInfo}</CodeBlock>
</TabItem>

</Tabs>

## Multimodal Filtering

Multimodal filtering allows you to refine search results based on a combination of visual and textual criteria. 

Unlike unimodal filtering, which limits filtering to a single data type — such as images or text — multimodal filtering enables more comprehensive queries by considering multiple modalities at once. 

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    <CodeBlock className="language-python">{CodeMM}</CodeBlock>

</TabItem>
<TabItem value="typescript" label="Node.js SDK">
    <CodeBlock className="language-typescript">{CodeMMTS}</CodeBlock>
</TabItem>
</Tabs>