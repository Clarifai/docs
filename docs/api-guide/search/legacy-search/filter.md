---
description: Select a subset of your data based on useful filters.
sidebar_position: 2
---

# Filter

**Select a subset of your data based on useful filters**
<hr />

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/by_custom_metadata.py";
import PythonInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/add_inputs_longitude_latitude.py";
import PythonOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/perform_search_one_geo_point.py";
import PythonTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/perform_search_two_geo_point.py";

import NodeCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/by_custom_metadata.js";
import NodeInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/add_inputs_longitude_latitude.js";
import NodeOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/perform_search_one_geo_point.js";
import NodeTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/perform_search_two_geo_point.js";

import JavaCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/java/by_custom_metadata.java";
import JavaInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/java/add_inputs_longitude_latitude.java";
import JavaOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/java/perform_search_one_geo_point.java";
import JavaTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/java/perform_search_two_geo_point.java";

import CurlCustomMetadata from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/curl/by_custom_metadata.sh";
import CurlInputsLongitude from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/curl/add_inputs_longitude_latitude.sh";
import CurlOneGeoPoint from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/curl/perform_search_one_geo_point.sh";
import CurlTwoGeoPoints from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/curl/perform_search_two_geo_point.sh";

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

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaCustomMetadata}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlCustomMetadata}</CodeBlock>
</TabItem>

<!--
<TabItem value="javascript" label="Javascript">

```javascript
// Search with only metadata
app.inputs.search({
  input: {
    metadata: {
      key: 'value'
    }
  }
}).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);

// Search with nested metadata
app.inputs.search({
  input: {
    metadata: {
      parent: {
        key: 'value'
      }
    }
  }
}).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);

// Search with metadata and concepts or input source
app.inputs.search([
  {
    input: { metadata: { key: 'value' } }
  },
  {
    concept: { name: 'cat' }
  },
  {
    concept: { type: 'output', name: 'group', value: false }
  }
]).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>
-->

<!--
<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp, InputSearchTerm, OutputSearchTerm, SearchQueryBuilder
app = ClarifaiApp(api_key='YOUR_API_KEY')

# search with simple metadata only
app.inputs.search_by_metadata(metadata={'name':'bla'})

# search with nested metadata only
app.inputs.search_by_metadata(metadata={'my_class1': { 'name' : 'bla' }})

# search with metadata combined with others
query = SearchQueryBuilder()
query.add_term(InputSearchTerm(concept='cat'))
query.add_term(InputSearchTerm(metadata={'name':'value'}))
query.add_term(OutputSearchTerm(concept='group', value=False))

app.inputs.search(query)
```
</TabItem>
-->

<!--
<TabItem value="java" label="Java">

```java
JsonObject metadata = new JsonObject();
metadata.addProperty("isPuppy", true);

List<SearchHit> hits = client
  .searchInputs(SearchClause.matchMetadata(metadata))
  .executeSync();
```
</TabItem>
-->

<!--
<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Searches;
using Newtonsoft.Json.Linq;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            var metadata = new JObject();
            metadata.Add("isPuppy", true);
            await client.SearchInputs(
                    SearchBy.Metadata(metadata))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--
<TabItem value="objective-c" label="Objective-C">

```objectivec
// Search by metadata only.
[_app searchByMetadata:@{@"my_key": @[@"my", @"values"]} page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  // Print output of first search result.
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of input matching search query: %@", results[0].score);
}];

// Search metadata in conjunction with other ClarifaiSearchTerms. For example, the
// following will search for inputs with predicted tag "fast" and matching metadata.
ClarifaiConcept *conceptFromGeneralModel = [[ClarifaiConcept alloc] initWithConceptName:@"fast"];
ClarifaiSearchTerm *searchTerm1 = [ClarifaiSearchTerm searchByPredictedConcept:conceptFromGeneralModel];

ClarifaiSearchTerm *searchTerm2 = [ClarifaiSearchTerm searchInputsWithMetadata:@{@"my_key": @[@"my", @"values"]}];

[app search:@[searchTerm1, searchTerm2] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  // Print output of first search result.
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of input matching search query: %@", results[0].score);
}];
```
</TabItem>
-->

<!--
<TabItem value="php" label="PHP">

```php
// Coming soon
```
</TabItem>
-->

</Tabs>

## By Geo Location

Search by geo location allows you to restrict your search results to a bounding box based on longitude and latitude points. There are two ways you can provide longitude/latitude points. You can provide one point and a radius or you can provide two points.

It is important to note that a search by geo location acts as a filter and returns results ranked by any other provided search criteria, whether that is a visual search, concept search, or something else. If no other criteria is provided, results will return in the order the inputs were created, NOT by their distance to the center of the search area.

If you are providing one point and a radius, the radius can be in "mile", "kilometer", "degree", or "radian", marked by keywords `withinMiles`, `withinKilometers`, `withinDegrees`, or `withinRadians` respectively.

If you are providing two points, a box will be drawn from the uppermost point to the lowermost point, and the leftmost point to the rightmost point.

Before you perform a search by geo location, make sure you have added inputs with longitude and latitude points.

### Add Inputs With Longitude and Latitude Points

Provide a geo point to an input. The geo point is a JSON object consisting of a longitude and a latitude in GPS coordinate system \(SRID 4326\). There can be at most one single geo point associated with each input.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlInputsLongitude}</CodeBlock>
</TabItem>

<!--
<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.create({
  url: "https://samples.clarifai.com/puppy.jpeg",
  geo: { longitude: 116.2317, latitude: 39.5427},
}).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>
-->

<!--
<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp, Geo, GeoPoint
app = ClarifaiApp(api_key='YOUR_API_KEY')

geo_p1 = Geo(geo_point=GeoPoint(116.2317,39.5427))

app.inputs.create_image_from_url(url="https://samples.clarifai.com/puppy.jpeg", geo=geo_p1)
```
</TabItem>
-->

<!--
<TabItem value="java" label="Java">

```java
client.addInputs().plus(ClarifaiInput.forImage("https://samples.clarifai.com/puppy.jpeg")
    .withGeo(PointF.at(116.2317F, 39.5427F))).executeSync();
```
</TabItem>
-->

<!--
<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs;
using Clarifai.DTOs.Inputs;

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
                        geo: new GeoPoint(116.2317M, 39.5427M)))
                .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--
<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiImage *image = [[ClarifaiImage alloc] initWithURL:@"https://samples.clarifai.com/metro-north.jpg"];
image.location = [[ClarifaiLocation alloc] initWithLatitude:116.2317 longitude:39.5427];

[_app addInputs:@[image] completion:^(NSArray<ClarifaiInput *> *inputs, NSError *error) {
  NSLog(@"%@",inputs);
}];
```
</TabItem>
-->

<!--
<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\GeoPoint;
use Clarifai\DTOs\Inputs\ClarifaiURLImage;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->addInputs(
        (new ClarifaiURLImage('https://samples.clarifai.com/puppy.jpeg'))
            ->withGeo(new GeoPoint(116.2317, 39.5427)))
    ->executeSync();

if ($response->isSuccessful()) {
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

### Perform a Search With One Geo Point and Radius in Kilometers

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaOneGeoPoint}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlOneGeoPoint}</CodeBlock>
</TabItem>

<!--
<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.search({
  input: {
    geo: {
      longitude: 116.2317,
      latitude: 39.5427,
      type: 'withinKilometers',
      value: 1
    }
  }
}).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>
-->

<!--
<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp, GeoPoint, GeoLimit
app = ClarifaiApp(api_key='YOUR_API_KEY')

geo_p = GeoPoint(116.2317, 39.5427)
geo_l = GeoLimit(limit_type='kilometer', limit_range=1)

imgs = app.inputs.search_by_geo(geo_point=geo_p, geo_limit=geo_l)
```
</TabItem>
-->

<!--
<TabItem value="java" label="Java">

```java
client.searchInputs(SearchClause.matchGeo(PointF.at(59F, 29.75F), Radius.of(500, Radius.Unit.KILOMETER)))
            .getPage(1)
            .executeSync();
```
</TabItem>
-->

<!--
<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs;
using Clarifai.DTOs.Searches;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.SearchInputs(
                    SearchBy.Geo(
                        new GeoPoint(59M, 29.75M),
                        new GeoRadius(500, GeoRadius.RadiusUnit.WithinKilometers)))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--
<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiLocation *loc = [[ClarifaiLocation alloc] initWithLatitude:116.2317 longitude:39.5427];
ClarifaiGeo *geoFilterKilos = [[ClarifaiGeo alloc] initWithLocation:loc radius:50.0 andRadiusUnit:ClarifaiRadiusUnitKilometers];
ClarifaiSearchTerm *term = [ClarifaiSearchTerm searchInputsWithGeoFilter:geoFilterKilos];

[_app search:@[term] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of predicted concept: %@", results[0].score);
}];
```
</TabItem>
-->

<!--
<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\GeoPoint;
use Clarifai\DTOs\GeoRadius;
use Clarifai\DTOs\GeoRadiusUnit;
use Clarifai\DTOs\Searches\SearchBy;
use Clarifai\DTOs\Searches\SearchInputsResult;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->searchInputs(
        SearchBy::geoCircle(
            new GeoPoint(3, 0),
            new GeoRadius(500, GeoRadiusUnit::withinKilometers())))
    ->executeSync();

if ($response->isSuccessful()) {
    echo "Response is successful.\n";

    // @var SearchInputsResult $result 
    $result = $response->get();

    foreach ($result->searchHits() as $searchHit) {
        echo $searchHit->input()->id() . ' ' . $searchHit->score() . "\n";
    }
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

### Perform a Search With Two Geo Points

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">
    <CodeBlock className="language-java">{JavaTwoGeoPoints}</CodeBlock>
</TabItem>

<TabItem value="curl" label="cURL">
    <CodeBlock className="language-bash">{CurlTwoGeoPoints}</CodeBlock>
</TabItem>

<!--
<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.search({
  input: {
    geo: [{
      latitude: 116.2316,
      longitude: 39.5426
    }, {
      latitude: 116.2318,
      longitude: 39.5428
    }]
  }
}).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>
-->

<!--
<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp, GeoBox, GeoPoint
app = ClarifaiApp(api_key='YOUR_API_KEY')

p1 = GeoPoint(116.2316, 39.5426)
p2 = GeoPoint(116.2318, 39.5428)
box1 = GeoBox(point1=p1, point2=p2)

imgs = app.inputs.search_by_geo(geo_box=box1)
```
</TabItem>
-->

<!--
<TabItem value="java" label="Java">

```java
client.searchInputs(SearchClause.matchGeo(PointF.at(3F, 0F), PointF.at(70, 30F)))
            .getPage(1)
            .executeSync()
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs;
using Clarifai.DTOs.Searches;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.SearchInputs(
                    SearchBy.Geo(
                        new GeoPoint(3M, 0M),
                        new GeoPoint(70M, 30M)))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>
-->

<!--
<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiLocation *startLoc = [[ClarifaiLocation alloc] initWithLatitude:50 longitude:58];
ClarifaiLocation *endLoc = [[ClarifaiLocation alloc] initWithLatitude:32 longitude:-30];
ClarifaiGeo *geoBox = [[ClarifaiGeo alloc] initWithGeoBoxFromStartLocation:startLoc toEndLocation:endLoc];

[_app search:@[term] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of predicted concept: %@", results[0].score);
}];
```
</TabItem>
-->

<!--
<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\GeoPoint;
use Clarifai\DTOs\Searches\SearchBy;
use Clarifai\DTOs\Searches\SearchInputsResult;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->searchInputs(
        SearchBy::geoRectangle(new GeoPoint(3, 0), new GeoPoint(70, 30)))
    ->executeSync();

if ($response->isSuccessful()) {
    echo "Response is successful.\n";

    // @var SearchInputsResult $result 
    $result = $response->get();

    foreach ($result->searchHits() as $searchHit) {
        echo $searchHit->input()->id() . ' ' . $searchHit->score() . "\n";
    }
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
