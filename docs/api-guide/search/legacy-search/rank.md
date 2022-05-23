---
description: Search your data based on concepts or visual similarity
sidebar_position: 3
---

# Rank

**Search your data based on concepts or visual similarity**
<hr />

Rank Order your search results with the intuitive insights of AI. Your model can identify concepts in your data and rank your search results by how confident it is that a given concept is present. You can even rank search results by how similar one input is to another input.

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](../../api-overview/api-clients#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/by_clarifaimain_app_concepts.py";
import PythonCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/by_custom_concepts.py";
import PythonClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/by_clarifaimain_custom_concepts.py";
import PythonConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/by_concept_another_language.py";
import PythonSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/search_by_image.py";
import PythonSearchURL from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/py/search_by_url.py";

import NodeAppConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/by_clarifaimain_app_concepts.js";
import NodeCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/by_custom_concepts.js";
import NodeClarifaiCustomConcepts from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/by_clarifaimain_custom_concepts.js";
import NodeConceptLanguage from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/by_concept_another_language.js";
import NodeSearchImage from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/search_by_image.js";
import NodeSearchURL from "!!raw-loader!../../../../code_snippets/api-guide/search/legacy_search/node/search_by_url.js";

## Search by Concepts

Once your images are indexed, you can search for them by concepts.

### By Clarifai/main App Concepts

When you add an input, it automatically gets predictions from the models in your default, which are typically models from the Clarifai/main app, such as the General model. You can search by those predictions.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiSearchResponse postSearchesResponse = stub.postSearches(
    PostSearchesRequest.newBuilder().setQuery(
        Query.newBuilder().addAnds(
            And.newBuilder().setOutput( // Setting Output indicates we search for images that have the concept(s)
                                        // which were predicted by the General model.
                Output.newBuilder().setData(
                    Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                        Concept.newBuilder()
                            .setName("people")  // You could search by concept ID as well.
                            .setValue(1f)  // Value of 0 will search for images that don't have the concept.
                    )
                )
            )
        )
    )
    .build()
);

if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");
for (Hit hit : postSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for %s\n", hit.getScore(), hit.getInput().getId());
}
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.search([
  {
    concept: {
      name: 'cat'
    }
  },
  {
    concept: {
      name: 'dog'
    }
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

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_CLARIFAI_KEY')

# search by single concept name
app.inputs.search_by_predicted_concepts(concept='cat')

# search by single concept id
app.inputs.search_by_predicted_concepts(concept_id='ai_mFqxrph2')

# search by multiple concepts with name
app.inputs.search_by_predicted_concepts(concepts=['cat', 'cute'])

# search by multiple concepts with ids
app.inputs.search_by_predicted_concepts(concept_ids=['ai_mFqxrph2', 'ai_4CRlSvbV'])

# search by multiple concepts with not logic
app.inputs.search_by_predicted_concepts(concepts=['cat', 'dog'], values=[True, False])
```
</TabItem>

<TabItem value="java" label="Java">

```java
// Search concept by name
client.searchInputs(SearchClause.matchConcept(Concept.forName("cat")))
    .getPage(1)
    .executeSync();

// Search concept by ID
client.searchInputs(SearchClause.matchConcept(Concept.forID("ai_mFqxrph2")))
    .getPage(1)
    .executeSync();

// Search multiple concepts
client.searchInputs(SearchClause.matchConcept(Concept.forID("cat")))
    .and(SearchClause.matchConcept(Concept.forID("cute")))
    .getPage(1)
    .executeSync();

// Search NOT by concept
client.searchInputs(SearchClause.matchConcept(Concept.forID("cat").withValue(false)))
    .getPage(1)
    .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Searches;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            // Search concept by name
            await client.SearchInputs(SearchBy.ConceptName("cat"))
                .Page(1)
                .ExecuteAsync();

            // Search concept by ID
            await client.SearchInputs(SearchBy.ConceptID("cat"))
                .Page(1)
                .ExecuteAsync();

            // Search multiple concepts
            await client.SearchInputs(
                    SearchBy.ConceptID("cat"),
                    SearchBy.ConceptID("cute"))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```text
// First create a search term with a concept you want to search.
ClarifaiConcept *conceptFromGeneralModel = [[ClarifaiConcept alloc] initWithConceptName:@"fast"];
ClarifaiSearchTerm *searchTerm = [ClarifaiSearchTerm searchByPredictedConcept:conceptFromGeneralModel];

[app search:@[searchTerm] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  // Print output of first search result.
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of input matching search query: %@", results[0].score);
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Searches\SearchBy;
use Clarifai\DTOs\Searches\SearchInputsResult;

$client = new ClarifaiClient('YOUR_API_KEY');

// Search concept by name
$response = $client->searchInputs(SearchBy::conceptName('cat'))
    ->executeSync();

/*
// Search concept by ID
$response = $client->searchInputs(SearchBy::conceptID('cat'))
    ->executeSync();
*/

/*
// Search multiple concepts
$response = $client->searchInputs([SearchBy::conceptID('cat'), SearchBy::conceptID('cute')])
    ->executeSync();
*/

if ($response->isSuccessful()) {
    echo "Response is successful.\n";

    /** @var SearchInputsResult $result */
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

<TabItem value="curl" label="cURL">

```text
# Setting "output" indicates we search for images that have the concept(s) which were predicted by
# the General model.
#
# Value of 0 will search for images that don't have the concept.
#
# Instead of "name" you can search by "id" as well.

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
                  "name":"people",
                  "value": 1
                }
              ]
            }
          }
        }
      ]
    }
  }'\
  https://api.clarifai.com/v2/searches
```
</TabItem>
</Tabs>

### By Custom Concepts

After you have added inputs with concepts, you can search by those concepts.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiSearchResponse postSearchesResponse = stub.postSearches(
    PostSearchesRequest.newBuilder().setQuery(
        Query.newBuilder().addAnds(
            And.newBuilder().setInput( // Setting Input indicates we search for images that have the concept(s)
                                       // which we added to the input manually.
                Input.newBuilder().setData(
                    Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                        Concept.newBuilder()
                            .setName("people")  // You could search by concept ID as well.
                            .setValue(1f)  // Value of 0 will search for images that we marked not to have the concept.
                    )
                )
            )
        )
    )
    .build()
);

if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");
for (Hit hit : postSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for %s\n", hit.getScore(), hit.getInput().getId());
}
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.search([
  {
    concept: {
      type: 'input',
      name: 'cat'
    }
  },
  {
    concept: {
      type: 'input',
      name: 'dog'
    }
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

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_CLARIFAI_KEY')

# search by single concept name
app.inputs.search_by_annotated_concepts(concept='cat')

# search by single concept id
app.inputs.search_by_annotated_concepts(concept_id='ai_mFqxrph2')

# search by multiple concepts with name
app.inputs.search_by_annotated_concepts(concepts=['cat', 'cute'])

# search by multiple concepts with ids
app.inputs.search_by_annotated_concepts(concept_ids=['ai_mFqxrph2', 'ai_4CRlSvbV'])

# search by multiple concepts with not logic
app.inputs.search_by_annotated_concepts(concepts=['cat', 'dog'], values=[True, False])
```
</TabItem>

<TabItem value="java" label="Java">

```java
// Search concept by name
client.searchInputs(SearchClause.matchUserTaggedConcept(Concept.forName("cat")))
    .getPage(1)
    .executeSync();

// Search concept by ID
client.searchInputs(SearchClause.matchUserTaggedConcept(Concept.forID("ai_mFqxrph2")))
    .getPage(1)
    .executeSync();

// Search multiple concepts
client.searchInputs(SearchClause.matchUserTaggedConcept(Concept.forID("cat")))
    .and(SearchClause.matchUserTaggedConcept(Concept.forID("cute")))
    .getPage(1)
    .executeSync();

// Search NOT by concept
client.searchInputs(SearchClause.matchUserTaggedConcept(Concept.forID("cat").withValue(false)))
    .getPage(1)
    .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Searches;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            // Search concept by name
            await client.SearchInputs(SearchBy.UserTaggedConceptName("cat")
                )
                .Page(1)
                .ExecuteAsync();

            // Search concept by ID
            await client.SearchInputs(SearchBy.UserTaggedConceptID("ai_mFqxrph2")
                )
                .Page(1)
                .ExecuteAsync();

            // Search multiple concepts
            await client.SearchInputs(
                    SearchBy.UserTaggedConceptID("cat"),
                    SearchBy.UserTaggedConceptID("cute"))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```text
// If you have previously added inputs tagged with "dog", you can search for them by the same tag.
ClarifaiConcept *concept = [[ClarifaiConcept alloc] initWithConceptName:@"dog"];
ClarifaiSearchTerm *term = [ClarifaiSearchTerm searchInputsByConcept:concept];

[app search:@[term] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  // Print output of first search result.
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of input matching search query: %@", results[0].score);
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Searches\SearchBy;
use Clarifai\DTOs\Searches\SearchInputsResult;

$client = new ClarifaiClient('YOUR_API_KEY');

// Search concept by name
$response = $client->searchInputs(SearchBy::userTaggedConceptName('cat'))
    ->executeSync();

/*
// Search concept by ID
$response = $client->searchInputs(SearchBy::userTaggedConceptID('cat'))
    ->executeSync();
*/

/*
// Search multiple concepts
$response = $client->searchInputs([SearchBy::userTaggedConceptName('cat'),
        SearchBy::userTaggedConceptID('dog')])
    ->executeSync();
*/

if ($response->isSuccessful()) {
    echo "Response is successful.\n";

    /** @var SearchInputsResult $result */
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

<TabItem value="curl" label="cURL">

```text
# Setting "input" indicates we search for images that have the concept(s) which we added to the
# input manually.
#
# Value of 0 will search for images that don't have the concept.
#
# Instead of "name" you can search by "id" as well.

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "query": {
      "ands": [
        {
          "input": {
            "data": {
              "concepts": [
                {
                  "name":"people",
                  "value": 1
                }
              ]
            }
          }
        }
      ]
    }
  }'\
  https://api.clarifai.com/v2/searches
```
</TabItem>
</Tabs>

### By Clarifai/main and Custom Concepts

You can combine a search to find inputs that have concepts you have supplied as well as predictions from your model.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

// Here we search for images which we labeled with "cat" and for which the General prediction model does not find
// a "dog" concept.
MultiSearchResponse postSearchesResponse = stub.postSearches(
    PostSearchesRequest.newBuilder().setQuery(
        Query.newBuilder()
            .addAnds(
                And.newBuilder().setInput( // Setting Input indicates we search for images that have the concept(s)
                                           // which we added to the input manually.
                    Input.newBuilder().setData(
                        Data.newBuilder().addConcepts(
                            Concept.newBuilder()
                                .setName("cat")
                                .setValue(1f)
                        )
                    )
                )
            )
            .addAnds(
                And.newBuilder().setOutput(  // Setting Output indicates we search for images that have the concept(s)
                                             // which were predicted by the General model.
                    Output.newBuilder().setData(
                        Data.newBuilder().addConcepts(
                            Concept.newBuilder()
                                .setName("dog")
                                .setValue(0f)  // Because of 0, the dog must not be present in the image.
                        )
                    )
                )
            )
    )
    .build()
);

if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");
for (Hit hit : postSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for %s\n", hit.getScore(), hit.getInput().getId());
}
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.search([
  // this is the public concept
  {
    concept: {
      name: 'cat'
    }
  },
  // this is the user-supplied concept
  {
    concept: {
      type: 'input',
      name: 'dog'
    }
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

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp, InputSearchTerm, OutputSearchTerm, SearchQueryBuilder
app = ClarifaiApp(api_key='YOUR_API_KEY')

term1 = InputSearchTerm(concept='cat')
term2 = OutputSearchTerm(concept='dog', value=False)
query = SearchQueryBuilder()
query.add_term(term1)
query.add_term(term2)

app.inputs.search(query)
```
</TabItem>

<TabItem value="java" label="Java">

```java
client.searchInputs()
    // Matches images we tagged as "cat", and that the API tagged as not having "dog"
    .ands(
        SearchClause.matchUserTaggedConcept(Concept.forName("cat")),
        SearchClause.matchConcept(Concept.forName("dog").withValue(false))
    )
    .getPage(1)
    .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Searches;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.SearchInputs(
                    SearchBy.UserTaggedConceptName("cat"),
                    SearchBy.ConceptID("dog"))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```text
ClarifaiConcept *conceptFromGeneralModel = [[ClarifaiConcept alloc] initWithConceptName:@"fast"];
ClarifaiConcept *conceptFromTrainedCustomModel = [[ClarifaiConcept alloc] initWithConceptName:@"dog"];

ClarifaiSearchTerm *term1 = [ClarifaiSearchTerm searchByPredictedConcept:conceptFromGeneralModel];
ClarifaiSearchTerm *term2 = [ClarifaiSearchTerm searchByPredictedConcept:conceptFromTrainedCustomModel];

[_app search:@[term1, term2] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  // Print output of first search result.
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of input matching search query: %@", results[0].score);
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Searches\SearchBy;
use Clarifai\DTOs\Searches\SearchInputsResult;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->searchInputs([SearchBy::userTaggedConceptName('cat'),
        SearchBy::conceptID('dog')])
    ->executeSync();

if ($response->isSuccessful()) {
    echo "Response is successful.\n";

    /** @var SearchInputsResult $result */
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

<TabItem value="curl" label="cURL">

```text
# Here we search for images which we labeled with "cat" and for which the General prediction model
# does not find a "dog" concept.

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
-d '
{
  "query": {
    "ands": [
      {
        "input": {
          "data": {
            "concepts": [
              {
                "name": "cat",
                "value": 1
              }
            ]
          }
        }
      },
      {
        "output": {
          "data": {
            "concepts": [
              {
                "name": "dog",
                "value": 0
              }
            ]
          }
        }
      }
    ]
  }
}'\
https://api.clarifai.com/v2/searches
```
</TabItem>
</Tabs>

### By Concept in Another Language

Concepts that have a translation into another language can be searched for in that language, even without having the default language for your app being in that language. This uses Clarifai's knowledge graph to lookup the translation and then perform the search. 

For example, if you app is in English and you want to search for "dog" in Japanese, then you could search with `language="ja"` and `name="犬"`.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiSearchResponse postSearchesResponse = stub.postSearches(
    PostSearchesRequest.newBuilder().setQuery(
        Query.newBuilder().addAnds(
            And.newBuilder().setOutput( // Setting Output indicates we search for images that have the concept(s)
                                        // which were predicted by the General model.
                Output.newBuilder().setData(
                    Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                        Concept.newBuilder()
                            .setName("犬")  // You could search by concept ID as well.
                            .setLanguage("ja") // japanese
                            .setValue(1f)  // Value of 0 will search for images that don't have the concept.
                    )
                )
            )
        )
    )
    .build()
);

if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");
for (Hit hit : postSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for %s\n", hit.getScore(), hit.getInput().getId());
}
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
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
                  "name":"犬",
                  "language": "ja",
                  "value": 1
                }
              ]
            }
          }
        }
      ]
    }
  }'\
  https://api.clarifai.com/v2/searches
```
</TabItem>
</Tabs>

## Search by Visual Similarity

You can use images to search through your collection. The API will return ranked results based on how similar the results are to the image you provided in your query.

### By Image

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonSearchImage}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeSearchImage}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiSearchResponse postSearchesResponse = stub.postSearches(
    PostSearchesRequest.newBuilder().setQuery(
        Query.newBuilder().addAnds(
            And.newBuilder().setOutput(
                Output.newBuilder().setInput(
                    Input.newBuilder().setData(
                        Data.newBuilder().setImage(
                            Image.newBuilder()
                                .setUrl("{YOUR_IMAGE_URL}")
                        )
                    )
                )
            )
        )
    )
    .build()
);

if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");
for (Hit hit : postSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for %s\n", hit.getScore(), hit.getInput().getId());
}
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.search(
  {
    input: {
      url: 'https://samples.clarifai.com/puppy.jpeg'
    }
  }
).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_CLARIFAI_KEY')

# search by image url
app.inputs.search_by_image(url="https://samples.clarifai.com/metro-north.jpg")

# search by existing input id
input_id = "some_existing_input_id"
app.inputs.search_by_image(image_id=input_id)

# search by raw bytes
data = "image_raw_bytes"
app.inputs.search_by_image(imgbytes=data)

# search by base64 bytes
base64_data = "image_bytes_encoded_in_base64"
app.inputs.search_by_image(base64bytes=base64_data)

# search by local filename
filename="filename_on_local_disk.jpg"
app.inputs.search_by_image(filename=filename)

# search from fileio
fio = open("filename_on_local_disk.jpg", 'rb')
app.inputs.search_by_image(fileobj=fio)
```
</TabItem>

<TabItem value="java" label="Java">

```java
// Search by image URL (String or java.net.URL)
client.searchInputs(SearchClause.matchImageVisually(ClarifaiImage.of("https://samples.clarifai.com/metro-north.jpg")))
    .getPage(1)
    .executeSync();

// Search by local image (java.io.File or byte[])
client.searchInputs(SearchClause.matchImageVisually(ClarifaiImage.of(new File("image.png"))))
    .getPage(1)
    .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.IO;
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Searches;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            // Search by image URL
            await client.SearchInputs(
                    SearchBy.ImageVisually("https://samples.clarifai.com/metro-north.jpg"))
                .Page(1)
                .ExecuteAsync();

            // Search by local image
            await client.SearchInputs(
                    SearchBy.ImageVisually(File.ReadAllBytes("image.png")))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```text
ClarifaiSearchTerm *searchTerm = [ClarifaiSearchTerm searchVisuallyWithImageURL:@"https://samples.clarifai.com/metro-north.jpg"];

[app search:@[searchTerm] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  // Print output of first search result.
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of input matching search query: %@", results[0].score);
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Searches\SearchBy;
use Clarifai\DTOs\Searches\SearchInputsResult;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->searchInputs(
        SearchBy::urlImageVisually('https://samples.clarifai.com/metro-north.jpg'))
    ->executeSync();

if ($response->isSuccessful()) {
    echo "Response is successful.\n";

    /** @var SearchInputsResult $result */
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

<TabItem value="curl" label="cURL">

```text
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "query": {
      "ands": [
        {
          "output":{
            "input":{
              "data": {
                "image": {
                  "url": "{YOUR_IMAGE_URL}"
                }
              }
            }
          }
        }
      ]
    }
  }'\
  https://api.clarifai.com/v2/searches
```
</TabItem>
</Tabs>

### By URL

You can also search for an input by URL.

<Tabs>

<TabItem value="grpc_python" label="gRPC Python">
    <CodeBlock className="language-python">{PythonSearchURL}</CodeBlock>
</TabItem>

<TabItem value="grpc_nodejs" label="gRPC NodeJS">
    <CodeBlock className="language-javascript">{NodeSearchURL}</CodeBlock>
</TabItem>

<TabItem value="grpc_java" label="gRPC Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiSearchResponse postSearchesResponse = stub.postSearches(
    PostSearchesRequest.newBuilder().setQuery(
        Query.newBuilder().addAnds(
            And.newBuilder().setInput(
                Input.newBuilder().setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                            .setUrl("{YOUR_IMAGE_URL}")
                    )
                )
            )
        )
    )
    .build()
);

if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");
for (Hit hit : postSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for %s\n", hit.getScore(), hit.getInput().getId());
}
```
</TabItem>

<TabItem value="javascript" label="Javascript">

```javascript
app.inputs.search(
  {
    input: {
      type: 'input',
      url: 'https://samples.clarifai.com/puppy.jpeg'
    }
  }
).then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);
```
</TabItem>

<TabItem value="python" label="Python">

```python
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='YOUR_API_KEY')

meta = {"url":"https://samples.clarifai.com/metro-north.jpg"}
app.inputs.search_by_metadata(meta)
```
</TabItem>

<TabItem value="java" label="Java">

```java
// Lookup images with this URL
client.searchInputs(SearchClause.matchImageURL(ClarifaiImage.of("https://samples.clarifai.com/puppy.jpeg")))
    .getPage(1)
    .executeSync();
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
using Clarifai.DTOs.Searches;

namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");

            await client.SearchInputs(
                    SearchBy.ImageURL("https://samples.clarifai.com/metro-north.jpg"))
                .Page(1)
                .ExecuteAsync();
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```text
// Lookup images with this URL
ClarifaiSearchTerm *term = [ClarifaiSearchTerm searchInputsWithImageURL:@"https://samples.clarifai.com/metro-north.jpg"];

[app search:@[term] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {
  // Print output of first search result.
  NSLog(@"inputID: %@", results[0].inputID);
  NSLog(@"URL: %@", results[0].mediaURL);
  NSLog(@"probability of input matching search query: %@", results[0].score);
}];
```
</TabItem>

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
use Clarifai\DTOs\Searches\SearchBy;
use Clarifai\DTOs\Searches\SearchInputsResult;

$client = new ClarifaiClient('YOUR_API_KEY');

$response = $client->searchInputs(
        SearchBy::imageURL('https://samples.clarifai.com/metro-north.jpg'))
    ->executeSync();

if ($response->isSuccessful()) {
    echo "Response is successful.\n";

    /** @var SearchInputsResult $result */
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

<TabItem value="curl" label="cURL">

```text
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "query": {
      "ands": [
        {
          "input":{
            "data": {
              "image": {
                "url": "{YOUR_IMAGE_URL}"
              }
            }
          }
        }
      ]
    }
  }'\
  https://api.clarifai.com/v2/searches
```
</TabItem>
</Tabs>

