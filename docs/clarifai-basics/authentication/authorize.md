---
description: Set up authentication to make API calls
sidebar_position: 3
---

# Authorize

**Authorize before securely making API requests**
<hr />
 

After creating your access credentials, you are ready to make API calls. Most of our API clients require setting up authentication during initialization; though, it can be changed for particular requests, if needed. 

If you are using a REST API, you will need to add the `Authorization` header as illustrated in the cURL example below.

## Authorization Keys

The key used for authorization can either be:

* [A Personal Access Token \(PAT\)](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens), which is tied to a user; or,
* [An API Key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys), which is tied to a specific application.

:::important IMPORTANT NOTE

- PAT is the primary authentication mechanism we use. 

:::

Using a PAT is more powerful than an API Key. A PAT represents you when accessing the Clarifai API. It allows you to access multiple applications with a single key.

With a PAT, you can access your own apps as well as any other apps you have permissions to use, such as public apps, apps you're added as a collaborator, or apps belonging to your organization's team. Also, certain endpoints support only PATs, such as creating a new application or a new API Key. 

When using a PAT to call the API, you need to specify your user ID alongside the application ID to which the request should be applied. 

On the other hand, an API Key restricts your access only to a single app. So, it could be suitable for accessing resources that are specifically locked down to a single app.

When using an app-specific API Key, you do not need to specify either the user ID or the application ID as they are already part of the API Key. 

:::tip

Clarifai provides various clients you can use to access the API in your favorite programming language. Learn how to install your preferred client [here](https://docs.clarifai.com/api-guide/api-overview/api-clients/). 

:::


## Authorization Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="python" label="Python">

```python
###############################################################################################
# Initialize the gRPC-based client to communicate with the Clarifai platform.
###############################################################################################

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
/////////////////////////////////////////////////////////////////////////////////////////////
// Initialize the gRPC-based client to communicate with the Clarifai platform.
////////////////////////////////////////////////////////////////////////////////////////////

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

<TabItem value="cURL" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_CLARIFAI_PAT_HERE" \
  -H "Content-Type: application/json" \  
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using System.Threading.Tasks;
using Clarifai.API;
namespace YourNamespace
{
    public class YourClassName
    {
        public static async Task Main()
        {
            var client = new ClarifaiClient("YOUR_API_KEY");
        }
    }
}
```
</TabItem>

<TabItem value="objective-c" label="Objective-C">

```objectivec
ClarifaiApp *app = [[ClarifaiApp alloc] initWithApiKey:@"YOUR_API_KEY"];
```
</TabItem>

</Tabs>

:::caution

- If your PAT or API Key does not have the required scope\(s\) to execute a given request, you will get an error message reporting the missing scopes and/or endpoints that are needed to execute the request.
- An invalid PAT or API Key may be reported as 'API key not found'. 
- Failure to include the required PAT or API Key may result in 'Invalid request'.

:::
