---
description: Select a subset of your data based on useful filters.
sidebar_position: 3
---

# Filter

**Select a subset of your data based on useful filters**
<hr />

You can filter and customize your search results to find exactly what you want. Filtering helps you reduce the amount of data returned in search results by removing irrelevant content, or by allowing you to select a specific subset of your data.

:::info
The initialization code used in the following examples is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonCustomConcepts from "!!raw-loader!../../../code_snippets/api-guide/search/filter/by_custom_concepts.py";
import PythonUserID from "!!raw-loader!../../../code_snippets/api-guide/search/filter/by_user_id.py";
import PythonAnnotationStatus from "!!raw-loader!../../../code_snippets/api-guide/search/filter/by_annotation_status.py";
import PythonInputsLongitude from "!!raw-loader!../../../code_snippets/api-guide/search/filter/add_inputs_longitude_latitude.py";
import PythonOneGeoPoint from "!!raw-loader!../../../code_snippets/api-guide/search/filter/perform_search_one_geo_point.py";
import PythonTwoGeoPoints from "!!raw-loader!../../../code_snippets/api-guide/search/filter/perform_search_two_geo_point.py";
import PythonCustomAnnotation from "!!raw-loader!../../../code_snippets/api-guide/search/filter/by_custom_annotation_info.py";
import PythonAnnotationInfo from "!!raw-loader!../../../code_snippets/api-guide/search/filter/by_annotation_info.py";

## By Custom Concepts

After you annotate inputs with custom concepts, you can filter by concepts.

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
            Query.newBuilder().addFilters(
                Filter.newBuilder().setAnnotation(
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
                    filters: [
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
    "searches": [{
      "query": {
        "filters": [
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
    }]

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
  "searches": [{
    "query": {
      "filters": [
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
  }]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/annotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## By User ID

If you have collaborators in your app and they helped you annotate your inputs, you can also filter annotations by their user ID.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonUserID}</CodeBlock>
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
            Query.newBuilder().addFilters(
                Filter.newBuilder().setAnnotation(
                    Annotation.newBuilder().setUserId("{user_id}")
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
                    filters: [
                        {
                            annotation: {
                                user_id: "{user_id}"
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
    "searches": [{
      "query": {
        "filters": [
          {
            "annotation": {
              "user_id": "{user_id}"
            }
          }
        ]
      }
    }]
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
  "searches": [{
    "query": {
      "filters": [
        {
          "annotation": {
            "user_id": "{user_id}"
          }
        }
      ]
    }
  }]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/annotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## By Annotation Status

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotationStatus}</CodeBlock>
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
            Query.newBuilder().addFilters(
                Filter.newBuilder().setAnnotation(
                    Annotation.newBuilder()
                    .setStatus(
                        Status.newBuilder()
                            .setCodeValue(StatusCode.ANNOTATION_SUCCESS_VALUE)
                            .build()
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
                    filters: [
                        {
                            annotation: {
                                status: {
                                    code: 24150
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
    "searches": [{
      "query": {
        "filters": [
          {
            "annotation": {
              "status": {
                "code": "ANNOTATION_SUCCESS"
              }          
            }
          }
        ]
      }
    }]
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
  "searches": [{
    "query": {
      "filters": [
        {
          "annotation": {
            "status": {
              "code": "ANNOTATION_SUCCESS"
            }          
          }
        }
      ]
    }
  }]
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/annotations/searches`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

## By Geo Location

Search by geo location allows you to restrict your search results to a bounding box based on longitude and latitude points. There are two ways you can provide longitude/latitude points. You can provide one point and a radius or you can provide two points.

It is important to note that a search by geo location acts as a filter and returns results ranked by any other provided search criteria, whether that is a visual search, concept search, or something else. If no other criteria is provided, results will return in the order the inputs were created, NOT by their distance to the center of the search area.

If you are providing one point and a radius, the radius can be in "mile", "kilometer", "degree", or "radian", marked by keywords `withinMiles`, `withinKilometers`, `withinDegrees`, or `withinRadians`.

If you are providing two points, a box will be drawn from the uppermost point to the lowermost point, and the leftmost point to the rightmost point.

Before you perform a search by geo location, make sure you have added inputs with longitude and latitude points.

### Add Inputs With Longitude and Latitude Points

Provide a geo point to an input. The geo point is a JSON object consisting of a longitude and a latitude in GPS coordinate system \(SRID 4326\). There can be at most one single geo point associated with each input.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonInputsLongitude}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder().addInputs(
        Input.newBuilder().setData(
            Data.newBuilder()
                .setImage(
                    Image.newBuilder()
                        .setUrl("https://samples.clarifai.com/dog.tiff")
                        .setAllowDuplicateUrl(true)
                )
                .setGeo(
                    Geo.newBuilder().setGeoPoint(
                        GeoPoint.newBuilder()
                            .setLongitude(-30)
                            .setLatitude(40)
                    )
                )
        )
    ).build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

stub.PostInputs(
    {
        inputs: [
            {
                data: {
                    image: {url: "https://samples.clarifai.com/dog.tiff", allow_duplicate_url: true},
                    geo: {
                        geo_point: {
                            longitude: -30,
                            latitude: 40
                        }
                    }
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
            throw new Error("Post inputs failed, status: " + response.status.description);
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
            "url": "https://samples.clarifai.com/dog.tiff",
            "allow_duplicate_url": true
          },
          "geo": {
            "geo_point": {
              "longitude": -30,
              "latitude": 40
            }
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/inputs
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
          "url": "https://samples.clarifai.com/dog.tiff",
          "allow_duplicate_url": true
        },
        "geo": {
          "geo_point": {
            "longitude": -30,
            "latitude": 40
          }
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

fetch(`https://api.clarifai.com/v2/inputs`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

### Perform a Search With One Geo Point and Radius in Kilometers

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonOneGeoPoint}</CodeBlock>
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
            Query.newBuilder().addFilters(
                Filter.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                            Data.newBuilder().setGeo(
                                Geo.newBuilder()
                                    .setGeoPoint(
                                        GeoPoint.newBuilder()
                                            .setLongitude(-29)
                                            .setLatitude(40)
                                    )
                                    .setGeoLimit(
                                        GeoLimit.newBuilder()
                                            .setType("withinKilometers")
                                            .setValue(150.0f)
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

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    filters: [
                        {
                            annotation: {
                                data: {
                                    geo: {
                                        geo_point: {
                                            longitude: -29,
                                            latitude: 40
                                        },
                                        geo_limit: {
                                            type: "withinKilometers",
                                            value: 150.0
                                        }
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
          "filters": [
            {
            "annotation": {
                "data": {
                "geo": {
                    "geo_point": {
                    "longitude": -29.0,
                    "latitude": 40.0
                    },
                    "geo_limit": {
                    "type": "withinKilometers",
                    "value": 150
                    }
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
        "filters": [
          {
          "annotation": {
              "data": {
              "geo": {
                  "geo_point": {
                  "longitude": -29.0,
                  "latitude": 40.0
                  },
                  "geo_limit": {
                  "type": "withinKilometers",
                  "value": 150
	              }
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

### Perform a Search With Two Geo Points

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonTwoGeoPoints}</CodeBlock>
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
            Query.newBuilder().addFilters(
                Filter.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                            Data.newBuilder().setGeo(
                                Geo.newBuilder()
                                    .addGeoBox(
                                        GeoBoxedPoint.newBuilder().setGeoPoint(
                                            GeoPoint.newBuilder()
                                                .setLongitude(-31)
                                                .setLatitude(42)
                                        )
                                    )
                                    .addGeoBox(
                                        GeoBoxedPoint.newBuilder().setGeoPoint(
                                            GeoPoint.newBuilder()
                                                .setLongitude(-29)
                                                .setLatitude(39)
                                        ).build()
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

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    filters: [
                        {
                            annotation: {
                                data: {
                                    geo: {
                                        geo_box: [
                                            {
                                                geo_point: {
                                                    longitude: -31,
                                                    latitude: 42
                                                }
                                            },
                                            {
                                                geo_point: {
                                                    longitude: -29,
                                                    latitude: 39
                                                }
                                            }
                                        ]
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
        "filters": [
            {
            "annotation": {
                "data": {
                "geo": {
                    "geo_box": [
                    {
                        "geo_point": {
                        "latitude": 42,
                        "longitude": -31
                        }
                    },
                    {
                        "geo_point": {
                        "latitude": 39,
                        "longitude": -29
                        }
                    }
                    ]
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
      "filters": [
          {
          "annotation": {
              "data": {
              "geo": {
                  "geo_box": [
                  {
                      "geo_point": {
                      "latitude": 42,
                      "longitude": -31
                      }
                  },
                  {
                      "geo_point": {
                      "latitude": 39,
                      "longitude": -29
                      }
                  }
                  ]
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

## By Custom Annotation Info

After you have added inputs with custom metadata, you can search by that metadata.

Below is an example of searching over custom metadata. You can exact match any `key`: `value` pair no matter how nested it is. For example, if the metadata on an input is:

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

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonCustomAnnotation}</CodeBlock>
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
            Query.newBuilder().addFilters(
                Filter.newBuilder().setAnnotation(
                    Annotation.newBuilder().setData(
                        Data.newBuilder().setMetadata(
                            Struct.newBuilder()
                                .putFields("type", Value.newBuilder().setStringValue("animal").build())
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
                    filters: [
                        {
                            annotation: {
                                data: {
                                    metadata: {
                                        "type": "animal"
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
        "filters": [
            {
            "annotation": {
                "data": {
                "metadata": {
                    "type": "animal"
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
      "filters": [
          {
          "annotation": {
              "data": {
              "metadata": {
                  "type": "animal"
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

## By Annotation Info

Each annotation has annotation info. Similar to metadata, you have full control of this field and can be any arbitrary JSON.

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonAnnotationInfo}</CodeBlock>
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
            Query.newBuilder().addFilters(
                Filter.newBuilder().setAnnotation(
                    Annotation.newBuilder().setAnnotationInfo(
                        Struct.newBuilder()
                            .putFields("type", Value.newBuilder().setStringValue("animal").build())
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

<TabItem value="grpc_nodejs" label="gRPC NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview

stub.PostAnnotationsSearches(
    {
        searches: [
            {
                query: {
                    filters: [
                        {
                            annotation: {
                                annotation_info: {
                                    "type": "animal"
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
        "filters": [
            {
            "annotation": {
                "annotation_info": {
                "type": "animal"
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
      "filters": [
          {
          "annotation": {
              "annotation_info": {
              "type": "animal"
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
