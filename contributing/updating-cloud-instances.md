# Updating the Cloud Instances Page

**File:** `docs/compute/deployments/cloud-instances.md`

This guide explains how to discover available instance types and their prices so you can keep the cloud instances reference page up to date.

---

## Discovering Available Instances

Instance types are available via the Clarifai `ListInstanceTypes` API. Each `InstanceType` proto returns:

- `id` — instance name (e.g. `g5.xlarge`)
- `price` — raw per-second price (see conversion below)
- `compute_info` — CPU, memory, GPU type, GPU count, GPU memory
- `cloud_provider` — `aws`, `gcp`, `vultr`, `oracle`
- `region` — e.g. `us-east-1`, `us-east4`, `us-chicago-1`

You can also use the Clarifai Python SDK to query this directly:

```python
from clarifai.client import ClarifaiClient

client = ClarifaiClient()
response = client.stub.ListInstanceTypes(ListInstanceTypesRequest())
for instance in response.instance_types:
    print(instance.id, instance.price, instance.compute_info)
```

---

## Pricing

### Conversion Formula

Prices in the API are stored **per second** in units of **10 microdollars**. To convert to $/hr:

```
price_per_hr = raw_price × 3600 × 0.00001
```

**Example:** raw value `42.0` → `42 × 3600 × 0.00001 = $1.51/hr`

### Placeholder Prices

Some instances return a placeholder raw price of `65.0` (= `$2.34/hr` after conversion). This is not a real price — it means pricing hasn't been set yet in the system. Show these as **"Contact Us"** in the docs, not a dollar amount.

As of the last update (Feb 2026), placeholder instances include: all Oracle instances, all GCP TPUs, AWS T4G, and `g6e.xlarge`.

---

## What to Include / Exclude

| Cloud          | Status                                      |
|----------------|---------------------------------------------|
| AWS            | Include — fully public                      |
| GCP            | Include — fully public                      |
| Vultr          | Include — fully public                      |
| Oracle         | Include — fully public                      |
| Azure          | **Exclude** — internal availability only    |

---

## Table Formatting Rules

- Order rows **most-powerful-first** (highest GPU memory, then CPU count).
- Columns: `Instance Type | GPU | GPU MEMORY | CPU | Price/hr`
  - For TPU instances, use `Accelerators | Accelerator Memory` instead of GPU columns.
- CPU format: `X.X cores (Y.YYGi)` — fractional cores are baseline vCPU allocations.
- GPU memory format: use `Gi` (not `GB`), pulled directly from `compute_info.accelerator_memory`.
- GPU count format: `Nx GPU-TYPE (MemGi)` e.g. `4x NVIDIA-L40S (44.99Gi)`.

---

## Branch and Publishing Notes

- Changes to the instance table are safe to publish on their own branch (e.g. `docs/cloud-instances-update`).
- Do **not** document CLI flags or features (`--instance-info`, `clarifai model deploy`, etc.) until those features have shipped in the `main` branch of [clarifai-python](https://github.com/Clarifai/clarifai-python).
