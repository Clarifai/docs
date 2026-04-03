---
description: How Clarifai routes prediction requests across nodepools and replicas
sidebar_position: 8
---

# Request Routing

**How Clarifai routes prediction requests for optimal performance**
<hr />

When you send a prediction request to a deployed model, Clarifai's routing system determines where that request is processed. Routing happens at two levels: first selecting the right **nodepool** (which hardware), then selecting the right **replica** (which pod within that hardware).

This page covers both levels, what Clarifai optimizes automatically, and what you can configure.

## Nodepool Selection

When a request arrives, Clarifai picks a nodepool in this order:

1. **Explicit routing** — If you specify a `deployment_id` (or `compute_cluster_id` + `nodepool_id`) in the request, the request goes directly to that nodepool.
2. **Deployment lookup** — If you don't specify routing, Clarifai finds active deployments for the model version and picks the best nodepool based on queue depth and latency.
3. **Shared compute fallback** — For Clarifai-owned models with no user deployment, the request falls back to Clarifai's shared infrastructure.

### Multi-Nodepool Deployments

A single deployment can span **multiple nodepools** with priority ordering. When you add nodepools to a deployment, you assign each a priority rank (1 being highest). Requests are routed to the highest-priority nodepool that has available capacity, with overflow spilling to the next.

This enables several powerful patterns:

- **Cross-cloud failover** — Place nodepools in different cloud providers (AWS, GCP) so traffic fails over automatically if one region has issues.
- **Cross-hardware routing** — Since Clarifai's Compute Orchestration supports any hardware, you can route between **NVIDIA and AMD GPUs**, or even between **GPU and CPU** nodepools, within a single deployment. This means you can mix x86 and ARM architectures, or combine spot and on-demand instances for cost optimization.
- **Tiered performance** — Use a high-performance GPU nodepool as primary and a cheaper instance as overflow.

Configure multi-nodepool deployments in the UI by dragging nodepools into your preferred priority order, or via the API using `deployment_nodepools` with `sequence` values.

### Request-Level Routing

You can override the default routing on a per-request basis using the `runner_selector` field on `PostModelOutputsRequest`:

```python
# Route to a specific deployment
response = model.predict(inputs, deployment_id="my-deployment")

# Route to a specific nodepool
response = model.predict(inputs, compute_cluster_id="my-cluster", nodepool_id="my-nodepool")
```

## Automatic Replica Optimization

Once a nodepool is selected, Clarifai intelligently routes the request to the replica most likely to deliver the fastest response. This is fully automatic — you don't configure it, but understanding what it does helps you design better deployments.

### KV Cache Affinity

For models backed by inference engines with KV caching (such as vLLM and SGLang), Clarifai routes requests to replicas that already have relevant **KV cache state** loaded in memory. This avoids redundant recomputation of attention keys and values, resulting in higher throughput and lower time-to-first-token (TTFT).

This is especially effective for:

- **Shared system prompts** — Multiple users hitting the same model with the same system instruction benefit from cache reuse across all requests, not just their own.
- **RAG pipelines** — Users querying the same knowledge base share cached context automatically.
- **Multi-turn conversations** — Follow-up messages reuse cached state from earlier turns.

### Session Awareness

Clarifai tracks which replicas have recently served each user and favors routing subsequent requests from the same user to the same replica. This further improves cache reuse for conversational workloads without any client-side session management.

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

Configure autoscaling in the UI during deployment, or via the CLI:

```bash
clarifai model deploy ./my-model --min-replicas 1 --max-replicas 10
```

> For advanced autoscaling settings (scale-to-zero delays, traffic history, packing), use the [UI deployment flow](https://docs.clarifai.com/compute/deployments/deploy-model#step-4-set-autoscaling) or the API.

More replicas means more capacity and better cache distribution across your deployment.

## Prediction Caching

For identical requests, you can skip inference entirely by enabling the prediction cache:

```python
response = model.predict(inputs, use_predict_cache=True)
```

When enabled, Clarifai caches the full response for identical input+model+version combinations. Subsequent identical requests return the cached result instantly without hitting compute.

This is separate from KV cache routing — prediction caching avoids compute entirely, while KV cache routing optimizes the compute that does happen.
