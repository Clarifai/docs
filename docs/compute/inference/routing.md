---
description: How Clarifai routes prediction requests across nodepools and replicas
sidebar_position: 8
---

# Request Routing

**How Clarifai routes prediction requests for optimal performance**
<hr />

When you send a prediction request to a deployed model, Clarifai's routing system determines where that request is processed. 

Routing happens at two levels: 

- First selecting the right nodepool (which hardware);
- Then, selecting the right replica (which pod within that hardware).

This page covers both levels, what Clarifai optimizes automatically, and what you can configure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import PredictionCaching from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/prediction_caching.txt";
import KVCaching from "!!raw-loader!../../../code_snippets/python-sdk/compute-orchestration/kv_caching.txt";

## Nodepool Selection

When a request arrives, Clarifai picks a nodepool in this order:

1. **Explicit routing** — If you specify a `deployment_id` (or `compute_cluster_id` + `nodepool_id`) in the request, the request goes directly to that nodepool.
2. **Deployment lookup** — If you don't specify routing, Clarifai finds active deployments for the model version and picks the best nodepool based on queue depth and latency.
3. **Shared compute fallback** — For Clarifai-owned models with no user deployment, the request falls back to Clarifai's shared infrastructure.

### Multi-Nodepool Deployments

A single deployment can span multiple nodepools with priority ordering. When you add nodepools to a deployment, you assign each a priority rank (1 being highest). 

Requests are routed to the highest-priority nodepool that has available capacity, with overflow spilling to the next.

> **Note:** You can configure multi-nodepool deployments in the [UI](https://docs.clarifai.com/compute/deployments/deploy-model#step-4-set-dynamic-routing-optional) by dragging nodepools into your preferred priority order, or via the [API](https://docs.clarifai.com/compute/deployments/clusters-nodepools#multi-nodepool-deployment) using `deployment_nodepools` with `sequence` values.

This enables several powerful patterns:

- **Cross-cloud failover** — Place nodepools in different cloud providers (AWS, GCP) so traffic fails over automatically if one region has issues.
- **Cross-hardware routing** — Since Clarifai's Compute Orchestration supports any hardware, you can route between NVIDIA and AMD GPUs, or even between GPU and CPU nodepools, within a single deployment. This means you can mix x86 and ARM architectures, or combine spot and on-demand instances for cost optimization.
- **Tiered performance** — Use a high-performance GPU nodepool as primary and a cheaper instance as overflow.


### Explicit Request-Level Routing

You can override the default routing behavior for individual requests by specifying a particular [deployment ID or nodepool](https://docs.clarifai.com/compute/inference/clarifai/api#set-up-dedicated-deployment).

<Tabs groupId="code">
<TabItem value="python" label="Python SDK">
    ```python
    # Route to a specific deployment
    response = model.predict(inputs, deployment_id="my-deployment")

    # Route to a specific nodepool
    response = model.predict(inputs, compute_cluster_id="my-cluster", nodepool_id="my-nodepool")
    ```
</TabItem>
</Tabs>



## Automatic Replica Optimization

Once a nodepool is selected, Clarifai intelligently routes the request to the replica most likely to deliver the fastest response. 

This is fully automatic — you don't configure it, but understanding what it does helps you design better deployments.

### KV Cache Routing (Prefix Cache Routing)

For models backed by inference engines with KV caching (such as vLLM and SGLang), Clarifai detects shared prompt prefixes and routes requests to replicas that already hold those prefixes in their KV cache. 

This avoids redundant recomputation of attention keys and values, resulting in higher throughput and lower time-to-first-token (TTFT).

> **Note:** This is fully automatic — no configuration or code changes required.

This is especially effective for:

- **Shared system prompts** — Multiple users hitting the same model with the same system instruction share the same prefix. Rather than recomputing it on every replica, requests are routed to replicas that already have that prefix cached.
- **RAG pipelines** — Users querying the same knowledge base receive similar retrieved-document prefixes, which are automatically reused across requests.
- **Multi-turn conversations** — Follow-up messages share the prior conversation as a prefix, so subsequent turns reuse cached state from earlier turns.

When a matching prefix is found, the request routes to the best-matched replica. When no prefix match exists, the system falls back gracefully — there is no performance penalty compared to routing without this feature.

<details>
    <summary>Example Output</summary>
        <CodeBlock className="language-text">{KVCaching}</CodeBlock>
</details>

### Session Awareness

Clarifai tracks which replicas have recently served each user and favors routing subsequent requests from the same user to the same replica. 

This improves cache reuse for conversational workloads without any client-side session management.

KV cache routing (prefix cache routing) and session awareness work together in a priority chain: **prefix cache match → session affinity → random selection**. 

Prefix cache routing handles shared prefixes *across* users (e.g., shared system prompts), while session awareness handles reuse *within* a single user's conversation. 

If neither signal applies, the system falls back to random selection with no degradation.

## Autoscaling

Autoscaling controls how many replicas are running within a nodepool. You configure this per-nodepool within a deployment:

| Setting | Default | Description |
|---|---|---|
| **Min Replicas** | `0` | Minimum instances always running. Set `≥ 1` to avoid cold starts |
| **Max Replicas** | `5` | Ceiling for autoscaling |
| **Scale Up Delay** | `300s` | Wait before adding replicas after traffic increases |
| **Scale Down Delay** | `300s` | Wait before removing replicas after traffic drops |
| **Scale to Zero Delay** | `1800s` | Idle time before scaling to zero (only when min replicas = 0) |
| **Traffic History** | `300s` | How far back to look at traffic data for scaling decisions |
| **Disable Packing** | `false` | When `true`, restricts to one replica per node for isolation |

> **Note:** You can configure autoscaling in the [UI](https://docs.clarifai.com/compute/deployments/clusters-nodepools/#step-3-set-node-autoscaling-range) during deployment, via the [Python SDK](https://docs.clarifai.com/compute/deployments/clusters-nodepools/#3-deployment_configyaml), or via the [CLI](https://docs.clarifai.com/compute/deployments/deploy-model#autoscaling). For advanced autoscaling settings (scale-to-zero delays, traffic history, packing), use the UI deployment flow or the API.


<Tabs groupId="code">
<TabItem value="bash" label="CLI">
    ```bash
        clarifai model deploy ./my-model --min-replicas 1 --max-replicas 10
    ```
</TabItem>
</Tabs>


:::tip Cold Start Reduction

Clarifai pre-warms popular instance types automatically so new replicas are ready faster when traffic increases or spills across nodepools. For specific GPU types not covered by default, set `min_replicas ≥ 1` on your deployment to keep your preferred hardware warm and eliminate cold starts entirely.

:::

More replicas means more capacity and better cache distribution across your deployment.

:::info Cache and Scaling

When new replicas scale up, they start with an empty [KV cache](#kv-cache-routing-prefix-cache-routing) — prefix cache routing effectiveness improves as replicas warm up over time. When replicas scale down, cached state on those replicas is lost. For latency-sensitive workloads, setting `min_replicas ≥ 1` ensures you always have warm replicas with populated caches.

:::

## Prediction Caching

Prediction caching stores and reuses previously computed model outputs for identical requests, eliminating redundant inference and significantly reducing latency and compute costs.

For repeated requests with the same input, model, and model version, you can bypass inference entirely by enabling prediction caching.

<Tabs groupId="code">
<TabItem value="bash" label="cURL">

```curl
curl -X POST "https://api.clarifai.com/v2/users/moonshotai/apps/chat-completion/models/Kimi-K2_6/outputs" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [
      {
        "data": {
          "text": {
            "raw": "How do I check if a Python object is an instance of a class?"
          }
        }
      }
    ],
    "use_predict_cache": true
  }'
```
</TabItem>
</Tabs>

<details>
    <summary>Example Output</summary>
        <CodeBlock className="language-text">{PredictionCaching}</CodeBlock>
</details>

When enabled, Clarifai caches the full prediction response for identical `input + model + version` combinations. Subsequent matching requests are served directly from cache without invoking model compute.

> **Note:** Prediction caching is different from KV cache routing (prefix cache routing).
>
> * Prediction caching skips inference entirely by returning a previously computed response.
> * Prefix cache routing still performs inference, but accelerates it by reusing cached prompt state.

## Inference Cost Savings and Cache Hits

For requests using KV cache routing, if a request is routed to a replica that already contains cached prompt state, the cached portion of the prompt is billed at a **90% discount** (10% of standard prompt token pricing).

The Clarifai Python SDK automatically extracts `cached_tokens` from the model response metadata and forwards it to the output proto.

If `cached_tokens` is absent or zero, the field is omitted from the output. You can therefore treat the presence of `cached_tokens` as a reliable indicator that a cache hit occurred.

If you're unsure whether a specific model reports cached tokens, [contact us](https://www.clarifai.com/company/contact) for confirmation.

