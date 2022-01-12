---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authorize

After creating your `API Key`, you are ready to make API calls. Most
clients set up authentication when initializing the client, it can be
changed for particular requests if needed. If you are using the REST
API, you will need to add the `Authorization` header as described in
the cURL example.

<Tabs>
<TabItem value="js" label="Javascript" default>

```javascript
// Authentication done at gRPC stub initialization time see:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions
metadata.set("authorization", "Key YOUR_CLARIFAI_API_KEY");
```
</TabItem>

<TabItem value="python" label="Python">

```python
metadata = (('authorization', 'Key YOUR_API_KEY'),)
# Yes the word 'Key' appears in addition to the alphanumeric API_KEY
```
</TabItem>

<TabItem value="java" label="Java">

```java
// Authentication done at grpc stub initialization time see:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions
V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
    .withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_API_KEY"));
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

<TabItem value="php" label="PHP">

```php
use Clarifai\API\ClarifaiClient;
$client = new ClarifaiClient('YOUR_API_KEY');
```
</TabItem>

<TabItem value="cURL" label="cURL">

```bash
curl -X POST \
  -H 'Authorization: Key YOUR_API_KEY' \
  -H "Content-Type: application/json" \
  -d '
```
</TabItem>
</Tabs>

If the API Key does not have the required scope\(s\) to execute a
given request, you will get an error message reporting the missing
scopes and/or endpoints that your key needs to execute this
request. An invalid key may be reported as 'API key not
found'. Failure to include a required key may result simple in
'Invalid request'.
