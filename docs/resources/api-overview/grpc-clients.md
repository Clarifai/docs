---
description: Clarifai API provides gRPC clients in the most popular languages
sidebar_position: 4
---

# gRPC API Clients

**Clarifai API provides gRPC clients in the most popular languages**
<hr />

You can access the Clarifai API through clients in many of the most popular programming languages. Our clients are built on [gRPC](https://grpc.io/) and are accessible through HTTP+JSON channels as well as gRPC channels. 

## Official Clients

| Available Clients |
| :--- |
| [Clarifai Python](https://github.com/Clarifai/clarifai-python-grpc/) |
| [Clarifai Java](https://github.com/Clarifai/clarifai-java-grpc/) |
| [Clarifai NodeJS](https://github.com/Clarifai/clarifai-nodejs-grpc) |
| [Clarifai C\#](https://github.com/Clarifai/clarifai-csharp-grpc/) |
| [Clarifai PHP](https://github.com/Clarifai/clarifai-php-grpc/) |
| [Clarifai Swift](https://github.com/Clarifai/clarifai-swift-grpc) |
| [Clarifai Rust](https://github.com/Clarifai/clarifai-rust-grpc) |
| [Clarifai Go](https://github.com/Clarifai/clarifai-go-grpc) |
| [Clarifai C++](https://github.com/Clarifai/clarifai-cpp-grpc) |

## Manually-built Clients \(deprecated\)

| Deprecated Clients |
| :--- |
| [C\#](https://github.com/Clarifai/clarifai-csharp) |
| [Java](https://github.com/Clarifai/clarifai-java) |
| [JavaScript](https://github.com/Clarifai/clarifai-javascript) \([Reference Docs](https://sdk.clarifai.com/js/latest/index.html)\) |
| [PHP](https://github.com/Clarifai/clarifai-php) |

## Client Installation Instructions

Here are the installation instructions and the initialization code for some of our most commonly used clients. 

For information on installing our other clients, please follow the links above.

:::tip authorization

Learn how to set up authorization with the various API clients [here](https://docs.clarifai.com/clarifai-basics/authentication/authorize). 

:::

:::warning CORS Policy Error

Learn how to resolve CORS errors in your JavaScript application(s) [here](https://docs.clarifai.com/clarifai-basics/authentication/authorize/#cors-policy).

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="code">
<TabItem value="python" label="Python">

```python
##############################################################################################
# Installation
##############################################################################################

python -m pip install clarifai-grpc

##############################################################################################
# Initialize the gRPC-based client to communicate with the Clarifai platform.
##############################################################################################

# Import the Clarifai gRPC-based objects needed
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_pb2, status_code_pb2

# Construct the communications channel 
channel = ClarifaiChannel.get_grpc_channel()
# Construct the V2Stub object for accessing all the Clarifai API functionality
stub = service_pb2_grpc.V2Stub(channel)

##############################################################################################
# This is where you set up the metadata object that's used to authenticate. 
# This authorization will be used by every Clarifai API call.
# Change the following authorization key to your own credentials
# Example: metadata = (('authorization', 'Key ' + 'a123457612345678'),)
##############################################################################################
 
metadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_PAT_HERE'),)
# Or, if you were to use an API Key:
# metadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_API_KEY_HERE'),)
# Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key

##############################################################################################
# A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: 
# user_id (your user id) and app_id (app id that contains the model of interest). 
# Both of them are specified as string values.
##############################################################################################

userDataObject = resources_pb2.UserAppIDSet(user_id='YOUR_USER_ID_HERE', app_id='YOUR_APPLICATION_ID_HERE')
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
///////////////////////////////////////////////////////////////////////////////
// Installation
///////////////////////////////////////////////////////////////////////////////

npm install clarifai-nodejs-grpc

/////////////////////////////////////////////////////////////////////////////////////////////
// Initialize the gRPC-based client to communicate with the Clarifai platform.
////////////////////////////////////////////////////////////////////////////////////////////

// Import the Clarifai gRPC-based client
const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");

// Construct the stub object for accessing all the Clarifai API functionality
const stub = ClarifaiStub.grpc();

////////////////////////////////////////////////////////////////////////////////////////////
// This is where you set up the Metadata object that's used to authenticate. 
// This authorization will be used by every Clarifai API call.
// Change the following authorization key to your own credentials
// Example: metadata.set("authorization", "Key " + "a123457612345678");
////////////////////////////////////////////////////////////////////////////////////////////

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + "YOUR_CLARIFAI_PAT_HERE");
// Or, if you were to use an API Key:
// metadata.set("authorization", "Key " + "YOUR_CLARIFAI_API_KEY_HERE");
// Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key

/////////////////////////////////////////////////////////////////////////////////////////////
// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: 
// user_id (your user id) and app_id (app id that contains the model of interest). 
// Both of them are specified as string values.
/////////////////////////////////////////////////////////////////////////////////////////////

user_app_id: {
    "user_id": "YOUR_USER_ID_HERE",
    "app_id": "YOUR_APPLICATION_ID_HERE"
}
```
</TabItem>

<TabItem value="java" label="Java">

```java
//////////////////////////////////////////////////////////////////////////////////////////////
// Installation
/////////////////////////////////////////////////////////////////////////////////////////////

Via Gradle:

repositories {
    mavenCentral()
}

dependencies {
    implementation 'com.clarifai:clarifai-grpc:LATEST_VERSION_HERE'
}

Via Maven:

<repositories>
    <repository>
        <id>mavenCentral</id>
        <name>mavenCentral</name>
        <url>https://repo1.maven.org/maven2</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.clarifai</groupId>
        <artifactId>clarifai-grpc</artifactId>
        <version>LATEST_VERSION_HERE</version>
    </dependency>
</dependencies>

/////////////////////////////////////////////////////////////////////////////////////////////
// Initialize the gRPC-based client to communicate with the Clarifai platform.
////////////////////////////////////////////////////////////////////////////////////////////

// Import the Clarifai gRPC-based objects needed
import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

/////////////////////////////////////////////////////////////////////////////////////////////
// Construct the communications channel.
// Construct the stub object for accessing all the Clarifai API functionality.
// Set up the authorization that will be used by every Clarifai API call.
/////////////////////////////////////////////////////////////////////////////////////////////

Channel channel = ClarifaiChannel.INSTANCE.getGrpcChannel();

V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(channel)
.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_PAT_HERE"));

// Or, if you were to use an API Key:
//.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_API_KEY_HERE"));

/////////////////////////////////////////////////////////////////////////////////////////////
// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: 
// user_id (your user id) and app_id (app id that contains the model of interest). 
// Both of them are specified as string values.
/////////////////////////////////////////////////////////////////////////////////////////////

.setUserAppId(UserAppIDSet.newBuilder().setUserId("YOUR_USER_ID_HERE").setAppId("YOUR_APPLICATION_ID_HERE"))
```
</TabItem>

<TabItem value="php" label="PHP">

```php
//////////////////////////////////////////////////////////////////////////////
// Installation     
//////////////////////////////////////////////////////////////////////////////

composer require clarifai/clarifai-php-grpc

// gRPC for PHP extension is required to use the Clarifai gRPC PHP client
// Check how to add gRPC to your PHP installation here: https://github.com/grpc/grpc/tree/master/src/php

////////////////////////////////////////////////////////////////////////////////
// Set Clarifai Namespace
//     - A variety of standard objects are provided in the Clarifai namespace
//       from the client library. The ones that are necessary depend on the
//       specific RPC call being made. The namespaces used in the example
//       code throughout this documentation are included below for reference, 
 //      although you likely won't need all of them in your application. 
////////////////////////////////////////////////////////////////////////////////

// Various data structures that are used in the RPC calls to the Clarifai Platform
// These operate as standardization wrappers for various types of data.

//    Data Types
use Clarifai\Api\Image;
use Clarifai\Api\Text;
use Clarifai\Api\Video;

//    ML Structures
use Clarifai\Api\Concept;
use Clarifai\Api\Model;

//    Wrapper Types
use Clarifai\Api\Data;
use Clarifai\Api\Input;

// Various Request objects. These specify the structure of the actual RPC request between
// the client and the platform.
use Clarifai\Api\PostModelOutputsRequest;
use Clarifai\Api\PostConceptsSearchesRequest;


use Clarifai\Api\ConceptQuery;

// Output configuration objects
use Clarifai\Api\OutputInfo;
use Clarifai\Api\OutputConfig;

// The request status code object.  This contains information on the success or failure of
// the API operation.
use Clarifai\Api\Status\StatusCode;

/////////////////////////////////////////////////////////////////////////////////////////////
// Initialize the gRPC-based client to communicate with the Clarifai platform.
////////////////////////////////////////////////////////////////////////////////////////////

// The Clarifai PHP Client repository includes an autoload.php helper file that needs to be included
require __DIR__ . '/vendor/autoload.php';

// Enable use of the ClarifaiClient object from the Clarifai namespace
use Clarifai\ClarifaiClient;  

// Construct the initialization object for accessing all the Clarifai API functionality
$client = ClarifaiClient::grpc();

////////////////////////////////////////////////////////////////////////////////////////////
// This is where you set up the Metadata object that's used to authenticate. 
// This authorization will be used by every Clarifai API call.
// Change the following authorization key to your own credentials
// Example: $metadata = ['Authorization' => ['Key a123457612345678']];
////////////////////////////////////////////////////////////////////////////////////////////

$metadata = ['Authorization' => ['Key YOUR_CLARIFAI_PAT_HERE']];

// Or, if you were to use an API Key:
// $metadata = ['Authorization' => ['Key YOUR_CLARIFAI_API_KEY_HERE']];
// Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key

/////////////////////////////////////////////////////////////////////////////////////////////
// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: 
// user_id (your user id) and app_id (app id that contains the model of interest). 
// Both of them are specified as string values.
/////////////////////////////////////////////////////////////////////////////////////////////

use Clarifai\Api\UserAppIDSet;

$userDataObject = new UserAppIDSet([
    'user_id' => 'YOUR_USER_ID_HERE', 
    'app_id' => 'YOUR_APPLICATION_ID_HERE' 
]);

```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp

///////////////////////////////////////////////////////////////////////////////
// Installation
///////////////////////////////////////////////////////////////////////////////
dotnet add package ClarifaiGrpc

///////////////////////////////////////////////////////////////////////////////
// Initialize client
///////////////////////////////////////////////////////////////////////////////
using System;
using System.Collections.Generic;
using Clarifai.Api;
using Clarifai.Channels;
using Grpc.Core;
using StatusCode = Clarifai.Api.Status.StatusCode;

var client = new V2.V2Client(ClarifaiChannel.Grpc());

var metadata = new Metadata
{
    {"Authorization", "Key {YOUR_PERSONAL_TOKEN}"}
};
```
</TabItem>

</Tabs>


## gRPC vs HTTP Channels


The Clarifai API offers you an encrypted gRPC channel, as well as an HTTPS+JSON channel for making requests. Why the different options? 

Learn about the many convenient benefits of using the Clarifai API built on gRPC. 

### Why did we build our API on gRPC in the first place?

![grpc vs http clarifai](/img/grpc-vs-http.png)

#### Cutting edge performance

Clarifai gRPC is built to deliver lightweight microservices. This is one of the keys to Clarifai Amada’s ability to load and balance thousands of different instances of machine learning models, and deliver MLOps at scale. With low latency and high throughput communication, we can deliver high performance machine learning services anywhere you are.  
  
Clarifai also uses gRPC to reduce network constraints. Our API messages are serialized using Protobuf, a compact, binary \(though non human-readable\) message format that is always smaller than the equivalent JSON. gRPC Protobuf serializes very quickly on the server and client. 

gRPC is specifically designed for HTTP/2, a major revision of HTTP that provides significant performance benefits over HTTP. The HTTP/2 protocol is efficient both when sending and receiving messages. HTTP/2 also eliminates head-of-line blocking by allowing multiplexing of multiple HTTP/2 calls over a single TCP connection. 

#### Clean code and resource management

There simply is no formal definition of how to build an HTTP API with JSON, and there is ongoing debate about the best format for URLs, HTTP verbs, and response codes. The gRPC specification is prescriptive about the format a gRPC service must follow, which means that behavior is consistent across platforms and implementations.

Resource management is also made easier by virtue of the fact that gRPC also allows clients to specify how long they are willing to wait for an RPC to complete. The deadline is sent to the server, and the server has the ability to “timeout” in-progress gRPC/HTTP/database requests.

#### A gift for languages

 Clarifai is a global, multi-lingual organization. We offer multi-lingual support for our models, and our API is a “polyglot” as well. Clarifai takes advantage of the fact that gRPC tooling supports all popular development languages, and we offer clients in many of the most popular programming languages.

Code generation of the client creates a strongly-typed client, and eliminates duplication of messages on the client and server. Clarifai automatically creates RESTful JSON Web APIs from gRPC services. This allows us to support both gRPC and JSON web APIs, without duplicating effort of building separate services for both.

#### Streaming capabilities

Two-way real-time communication is needed for many promising ML use cases. gRPC offers support for bi-directional streaming, allowing gRPC services to push messages in real-time without polling. All streaming combinations are natively supported when using our gRPC clients: unary \(no streaming\), server to client streaming, client to server streaming and bi-directional streaming. 

### When to use the HTTP Channel

We recommend using the encrypted gRPC channel for most of our customers in most use cases, but the HTTP+JSON channel does have its advantages:

#### Familiarity

Working with a RESTful JSON Web API will be familiar to many developers. In these cases, you may want to evaluate the tradeoff between development time and the additional performance offered by the gRPC channel.

#### Browser support

It's impossible to directly call a gRPC service from a browser today. gRPC uses HTTP/2 features which major browsers currently do not support.

#### Human readability

HTTP API requests are sent as text and can be read and created by humans. gRPC messages are encoded with Protobuf by default. While serializing Protobuf is more efficient and the payloads are smaller, its binary format isn't human readable. Additional tooling is required to analyze Protobuf payloads and to compose requests by hand.
