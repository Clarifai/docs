---
description: Search your data based on concepts or visual similarity
sidebar_position: 4
---

# Rank

**Search your data based on concepts or visual similarity**
<hr />

Rank Order your search results with the intuitive insights of AI. Your model can identify concepts in your data and rank your search results by how confident it is that a given concept is present. 

You can even rank search results by how similar one input is to another input or region of the input model detected. The search results will return the input and also the annotation, which includes the region.

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonAppConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/by_clarifaimain_app_concepts.py";
import PythonCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/by_custom_concepts.py";
import PythonClarifaiCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/rank/by_clarifaimain_custom_concepts.py";
import PythonConceptLanguage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/by_concept_another_language.py";
import PythonSearchImage from "!!raw-loader!../../../code_snippets/api-guide/search/rank/search_by_image_url.py";
import PythonImageBytes from "!!raw-loader!../../../code_snippets/api-guide/search/rank/search_by_image_bytes.py";
import PythonInputID from "!!raw-loader!../../../code_snippets/api-guide/search/rank/by_input_id.py";

## Search by Concepts

Once your images are indexed, you can search for them by concepts.

### By Clarifai/main App Concepts

When you add an input, it automatically gets predictions from the models in your base workflow, which are typically models from the Clarifai/main app, such as the General model. You can search by those predictions.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAppConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder().addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                            Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                            Concept.newBuilder()
                                .setId("people")  // You could search by concept Name as well.
                                .setValue(1f)  // Value of 0 will search for images that don't have the concept.
                        )
                    )
                )
            )
        )    
    )
    .build()
);

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    ranks: [
                        {
                            annotation: {
                                data: {
                                    concepts: [  // You can search by multiple concepts.
                                        {
                                            id: "people",  // You could search by concept Name as well.
                                            value: 1  // Value of 0 will search for images that don't have the concept
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
#
# Value of 0 will search for images that don't have the concept.
#
# Instead of "id" you can search by "name" as well.

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
                "data": {
                "concepts": [
                    {
                    "id":"people",
                    "value": 1
                    }
                ]
                }
            }
            }
        ]
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/annnotations/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "searches": [
    {
      "query": {
      "ranks": [
          {
          "annotation": {
              "data": {
              "concepts": [
                  {
                  "id":"people",
                  "value": 1
                  }
              ]
              }
          }
          }
      ]
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

fetch(`https://api.clarifai.com/v2/annnotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### By Custom Concepts

After you have added inputs, annotated the inputs, and tried a custom model, you can search by those concepts.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder().addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                            Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                            Concept.newBuilder()
                                .setId("people")  // You could search by concept Name as well.
                                .setValue(1f)  // Value of 0 will search for images that don't have the concept.
                        )
                    )
                )
            )
        )    
    )
    .build()
);

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    ranks: [
                        {
                            annotation: {
                                data: {
                                    concepts: [  // You can search by multiple concepts.
                                        {
                                            id: "people",  // You could search by concept Name as well.
                                            value: 1  // Value of 0 will search for images that don't have the concept
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```text
#
# Value of 0 will search for images that don't have the concept.
#
# Instead of "id" you can search by "name" as well.

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
                "data": {
                "concepts": [
                    {
                    "id":"people",
                    "value": 1
                    }
                ]
                }
            }
            }
        ]
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/annnotations/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "searches": [
    {
      "query": {
      "ranks": [
          {
          "annotation": {
              "data": {
              "concepts": [
                  {
                  "id":"people",
                  "value": 1
                  }
              ]
              }
          }
          }
      ]
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

fetch(`https://api.clarifai.com/v2/annnotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### By Clarifai/main and Custom Concepts

You can combine a search to find inputs that have concepts you have supplied as well as predictions from your model.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonClarifaiCustomConcepts}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

// Here we search for images which we labeled with "cat" and for which the General prediction model does not find
// a "dog" concept.
MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder().addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                            Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                            Concept.newBuilder()
                                .setId("cat")  // You could search by concept Name as well.
                                .setValue(1f)  // Value of 0 will search for images that don't have the concept.
                        )
                    )
                )
            )
            .addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                            Data.newBuilder().addConcepts(  // You can search by multiple concepts.
                            Concept.newBuilder()
                                .setId("dog")  // You could search by concept Name as well.
                                .setValue(0f)  // Value of 0 will search for images that don't have the concept.
                        )
                    )
                )
            )
        )    
    )
    .build()
);

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

// Here we search for images which we labeled with "cat" and for which the General prediction model does not find
// a "dog" concept.

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    ranks: [
                        {
                            annotation: {
                                data: {
                                    concepts: [  // You can search by multiple concepts.
                                        {
                                            id: "cat",  // You could search by concept Name as well.
                                            value: 1  // Value of 0 will search for images that don't have the concept
                                        }
                                    ]
                                }
                            }
                        }, {
                            annotation: {
                                data: {
                                    concepts: [  // You can search by multiple concepts.
                                        {
                                            id: "dog",  // You could search by concept Name as well.
                                            value: 0  // Value of 0 will search for images that don't have the concept
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
#
# Value of 0 will search for images that don't have the concept.
#
# Instead of "id" you can search by "name" as well.

# Here we search for images which we labeled with "cat" and for which the General prediction model does not find
# a "dog" concept.

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
                "data": {
                "concepts": [
                    {
                    "id":"cat",
                    "value": 1
                    }
                ]
                }
            }
            }, {   
            "annotation": {
                "data": {
                "concepts": [
                    {
                    "id":"dog",
                    "value": 0
                    }
                ]
                }
            }
            }
        ]
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/annnotations/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "searches": [
    {
      "query": {
      "ranks": [
          {
          "annotation": {
              "data": {
              "concepts": [
                  {
                  "id":"cat",
                  "value": 1
                  }
              ]
              }
          }
          }, {   
          "annotation": {
              "data": {
              "concepts": [
                  {
                  "id":"dog",
                  "value": 0
                  }
              ]
              }
          }
          }
      ]
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

fetch(`https://api.clarifai.com/v2/annnotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### By Concept in Another Language

Concepts that have a translation into another language can be searched for in that language, even without having the default language for your app being in that language. This uses Clarifai's knowledge graph to lookup the translation and then perform the search. 

For example, if you app is in English and you want to search for "dog" in Japanese, then you could search with `language="ja"` and `name="犬"`.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonConceptLanguage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder().addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
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
    )
    .build()
);

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    ranks: [
                        {
                            annotation: {
                                data: {
                                    concepts: [  // You can search by multiple concepts.
                                        {
                                            name: "犬",  // You could search by concept Id as well.
                                            language: "ja", // japanese
                                            value: 1  // Value of 0 will search for images that don't have the concept
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
#
# Value of 0 will search for images that don't have the concept.
#
# Instead of "name" you can search by "id" as well.

curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
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
      }
    ]
  }'\
  https://api.clarifai.com/v2/annnotations/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "searches": [
    {
      "query": {
      "ranks": [
          {
          "annotation": {
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

fetch(`https://api.clarifai.com/v2/annnotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## Search by Visual Similarity

You can use images to search through your collection. The API will return ranked results based on how similar the results are to the image you provided in your query.

### Search by Image URL

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonSearchImage}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder().addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
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

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

stub.PostAnnotationsSearches(
    {
        searches: [
            {
            query: {
                ranks: [
                    {
                        annotation: {
                            data: {
                                image: {
                                    url: "{YOUR_IMAGE_URL}"
                                }
                            }
                        }
                    }
                ]
            }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
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
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
                "data": {
                "image": {
                    "url": "{YOUR_IMAGE_URL}"
                }
                }
            }
            }
        ]
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/annnotations/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "searches": [
    {
      "query": {
      "ranks": [
          {
          "annotation": {
              "data": {
              "image": {
                  "url": "{YOUR_IMAGE_URL}"
              }
              }
          }
          }
      ]
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

fetch(`https://api.clarifai.com/v2/annnotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Search by Image Bytes

You can also search for an input by URL.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonImageBytes}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;
import com.google.protobuf.ByteString;
import java.io.File;
import java.nio.file.Files;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder().addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                        Data.newBuilder().setImage(
                            Image.newBuilder()
                                .setBase64(ByteString.copyFrom(Files.readAllBytes(
                                    new File("{YOUR_IMAGE_LOCATION}").toPath()
                                ))
                            )
                        )
                    )
                )
            )
        )    
    )
    .build()
);

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

const fs = require("fs");
const imageBytes = fs.readFileSync("{YOUR_IMAGE_LOCATION}");

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    ranks: [
                        {
                            annotation: {
                                data: {
                                    image: {
                                        base64: imageBytess
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
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
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
                "data": {
                "image": {
                    "base64": '"`base64 /home/user/image.jpeg`"'"
                }
                }
            }
            }
        ]
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/annnotations/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "searches": [
    {
      "query": {
      "ranks": [
          {
          "annotation": {
              "data": {
              "image": {
                "base64": '"`base64 /home/user/image.jpeg`"'"
              }
            }
          }
        }
      ]
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

fetch(`https://api.clarifai.com/v2/annnotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### By Input ID

If the input has been indexed, we can use the input ID. If there are multiple embeddings \(for example multiple regions\), we will average the embeddings.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonInputID}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(
    PostAnnotationsSearchesRequest.newBuilder().addSearches(
        Search.newBuilder().setQuery(
            Query.newBuilder().addRanks(
                Rank.newBuilder().setAnnotation(
                    Annotation.newBuilder().setInputId("{input_id}")    
                )
            )
        )    
    )
    .build()
);

if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {
  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());
}

System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");
for (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {
    System.out.printf("\tScore %.2f for annotation % of input %s\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    ranks: [
                        {
                            annotation: {
                                input_id: "{input_ids}"
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
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
    "searches": [
      {
        "query": {
          "ranks": [
            {
              "annotation": {
                "data": {
                  "image": {
                    "url": "{YOUR_IMAGE_URL}"
                  }
                }
              }
            }
          ]
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/annnotations/searches
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "searches": [
    {
      "query": {
        "ranks": [
          {
            "annotation": {
              "data": {
                "image": {
                  "url": "{YOUR_IMAGE_URL}"
                }
              }
            }
          }
        ]
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

fetch(`https://api.clarifai.com/v2/annnotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

