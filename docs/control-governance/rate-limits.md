---
description: Learn about our API rate limits
sidebar_position: 1
---

# Rate Limits

**Learn about our API rate limits**
<hr />

Our API has restrictions that limit the rate at which requests are made. These measures help us maintain the health, fairness, and security of our API. 

:::info

Our default rate limit is **15 requests per second** for all users, regardless of the pricing plan. You need to contact us if you need a customized API rate limit.

:::

We control the number of requests that can be made to our API within a given timeframe. 

This helps to:

-	**Maintain the stability and reliability of our API** — With rate limits, we ensure our service is not overwhelmed with excessive requests from a single entity, providing smooth and fair access for all our users. 
-	**Better handle increased demand on our infrastructure** — With rate limits, we can handle a sudden surge in API requests and distribute the increased load on our infrastructure more evenly. 
-	**Enhance the security of our API** — With rate limits, we can mitigate the risk of abuse, denial-of-service attacks, and other malicious activities.

## Mitigating Rate Limits

You may bump into the API rate limit if you make requests exceeding your quota within the specified time frame. When the limit is reached, the API temporarily halts processing additional requests until a designated time interval has elapsed. 

The error response could look like this:

```text
{
  "status": {
    "code": "CONN_THROTTLED",
    "description": "Making too many requests",
    "details": "exceeded limit of 15 requests per second",
    "req_id": "..."
  },
  ...
}
```

As you can see above, the response includes the `CONN_THROTTLED` error, whose corresponding [status code](https://docs.clarifai.com/api-guide/advanced-topics/status-codes) is 11005. 

It’s a best practice to mitigate the rate limit errors in your code to ensure smooth access to the Clarifai API. For example, you can implement a back-off strategy, where you wait for 15 seconds before retrying the requests. 

Here are HTTP-based code samples on how you could list Clarifai's [model types](https://docs.clarifai.com/api-guide/model/create-get-update-and-delete#list-model-types) and also handle rate limit errors.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PythonRateLimits from "!!raw-loader!../../code_snippets/api-guide/others/api-rate-limits.py";
import NodeRateLimits from "!!raw-loader!../../code_snippets/api-guide/others/api-rate-limits.js";


<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonRateLimits}</CodeBlock>
</TabItem>

<TabItem value="nodejs" label="NodeJS">
    <CodeBlock className="language-javascript">{NodeRateLimits}</CodeBlock>
</TabItem>

</Tabs>


