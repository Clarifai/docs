---
description: Clarifai API provides clients in the most popular languages.
---

# Clarifai API Clients

** Clarifai API provides clients in the most popular languages**
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

:::tip

Learn how to set up authorization with the various API clients [here](https://docs.clarifai.com/clarifai-basics/authentication/authorize). 

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
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

