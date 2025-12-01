---
description: Learn about the instance types we support
sidebar_position: 5
---

# Supported Cloud Instances

**Learn about the instance types we support**
<hr />

We offer a range of instance types designed to handle a variety of machine learning workloads. These cloud instances vary in their CPU, RAM (Random Access Memory), and GPU configurations, which allow you to orchestrate the right balance of performance and cost for your use case.

:::info pricing

To learn more about pricing for each instance type, see the [pricing page](https://www.clarifai.com/pricing).

:::

## Amazon Web Services (AWS) Instances

### T3A Instances 

The AWS T3A series is intended for cost‑effective, general‑purpose workloads that do not require GPU acceleration. It provides a balanced mix of CPU and memory, making it suitable for lightweight use cases.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |  
|--------------------|----------------|----------------|---------------|
| `t3a.medium`         |      -         | -              |  1.5 cores (2.89Gi)     |         
| `t3a.large`          |    -           | -               | 1.5 cores (6.4Gi)       |   
| `t3a.xlarge`         |  -             |   -             | 3.5 cores (13.55Gi)        |   
| `t3a.2xlarge`        |     -          |    -            |  7.5 cores (28.35Gi)      |   

**Key Features**

- vCPU (virtual CPUs) performance — Burstable performance that adapts to workload spikes. For example, `t3a.medium` provides ~1.5 vCPUs, while `t3a.2xlarge` scales up to ~7.5 vCPUs.

- Memory — Ranges from 2.89 GiB to 28.35 GiB, enabling efficient in-memory data handling for lightweight to moderately intensive workloads.

- Efficiency — Optimized for cost savings compared to other instance families, making them budget-friendly for everyday use.

**Example Use Case**

- Running simple models such as for classification or regression tasks.

> **Note**: The CPU values (e.g., 1.5 cores) are baseline vCPU allocations expressed as fractional units. The instance can burst up to its full vCPU count (e.g., 2 vCPUs for `t3a.medium`) by consuming CPU credits.

### G4DN Instances

The AWS G4dn series is built for GPU-accelerated workloads at a moderate scale. These instances combine NVIDIA T4 GPUs with balanced CPU and memory resources, making them well-suited for small-to-medium machine learning and inference tasks.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |  
|--------------------|----------------|----------------|---------------|
| `g4dn.xlarge`        |    1x NVIDIA-T4 (15Gi)     |    15Gi        |   3.5 cores (13.86Gi)     |           

**Key Features**

- NVIDIA T4 GPU — Designed for inference and light training, offering strong efficiency for workloads at a lower cost compared to heavier GPU families.

- vCPUs and RAM — Provides ~3.5 vCPUs (baseline) and ~13.86 GiB memory, giving enough capacity to manage GPU-accelerated tasks, preprocessing, and orchestration.

- Balanced performance — Ideal when you need GPU acceleration without the overhead of large, expensive GPU instances.

**Example Use Cases**

- Inference workloads, such as running NLP models such as BERT-base for summarization, classification, or question answering.

- Light training smaller models or experimenting with prototypes before scaling to larger GPU families.

### G5 Instances 

The AWS G5 series provides high-performance GPU capabilities for workloads that demand more memory and compute power. These instances are optimized for deep learning training, large-scale inference, and advanced computer vision tasks.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |  
|--------------------|----------------|----------------|---------------|
|  `g5.xlarge`       | 1x NVIDIA-A10G (22.49Gi)        |  22.49Gi        | 3.5 cores (13.55Gi)      |            
|  `g5.2xlarge`      |  1x NVIDIA-A10G (22.49Gi)      | 22.49Gi         |  7.5 cores (28.35Gi)      |   

**Key Features**

- NVIDIA A10G GPU — High compute throughput and memory bandwidth, enabling faster training for deep learning and support for more complex models compared to T4 GPUs.

- Scalable CPU & memory — From ~3.5 to ~7.5 vCPUs and 13.55 to 28.35 GiB of RAM, supporting data-heavy preprocessing, augmentation, and orchestration alongside GPU tasks.

- Balanced design — Efficient for both training and inference, bridging the gap between lightweight GPU instances (like G4dn) and specialized multi-GPU clusters.

**Example Use Cases**

- Training mid-sized NLP models like GPT-2 or T5 for text generation, or training image segmentation models like UNet or Mask R-CNN for medical imaging. 

- Running object tracking, pose estimation, or other GPU-accelerated pipelines for video analytics.

:::tip How to Choose the Best GPU 

- [NVIDIA A10 or NVIDIA L40S?](https://www.clarifai.com/blog/nvidia-a10-vs-l40s-gpus-for-ai-workloads) 
- [NVIDIA A10 or NVIDIA A100?](https://www.clarifai.com/blog/nvidia-a10-vs-a100-choosing-the-right-gpu-for-ai-workloads)
- [NVIDIA B200 or NVIDIA H100?](https://www.clarifai.com/blog/nvidia-b200-vs-h100)
- [NVIDIA A100 or NVIDIA H100?](https://www.clarifai.com/blog/nvidia-a100-vs.-h100-choosing-the-right-gpu-for-your-ai-workloads)

:::

### G6 Instances

The AWS G6 series introduces next-generation NVIDIA GPUs for the most demanding machine learning and simulation workloads. These instances scale from single-GPU mid-tier setups to multi-GPU, high-memory configurations capable of handling large-scale model training.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |   
|--------------------|----------------|----------------|---------------|
|  `g6.xlarge`         | 1x NVIDIA-L4 (22.49Gi)          |  22.49Gi         |  3.5 cores (13.55Gi)      |              
|  `g6.2xlarge`        |  1x NVIDIA-L4 (22.49Gi)        | 22.49Gi         |  7.5 cores (28.35Gi)       |   
|  `g6e.xlarge`       |  1x NVIDIA-L40S (44.99Gi)      | 44.99Gi          |   3.5 cores (28.35Gi)     |    
|   `g6e.2xlarge`    | 1x NVIDIA-L40S (44.99Gi)       |  44.99Gi        | 7.5 cores (57.95Gi)      |    
|   `g6e.12xlarge`    | 4x NVIDIA-L40S (44.99Gi)       |  179.95Gi        | 47.4 cores (351.44Gi)      | 

**Key Features**

- Next-Gen GPUs — NVIDIA L4 GPUs target efficient inference and fine-tuning, while L40S GPUs deliver high throughput for large-scale training.

- Scalable GPU memory — From 22.49 GiB (L4) to nearly 180 GiB (multi-L40S), supporting workloads from mid-sized tasks to multi-modal foundation models.

- High vCPU & RAM options — Up to 47.4 cores and 351 GiB RAM in `g6e.12xlarge`, enabling massive parallelism and data-heavy preprocessing.

- Flexible tiers — Ranges from cost-efficient single-GPU instances to powerful multi-GPU setups.

**Example Use Cases**

- G6 (L4 instances) support mid-tier workloads such as fine-tuning BERT-large, or computer vision tasks like text-to-image generation and object recognition.

- G6e (L40S instances) support advanced training workloads, including large-scale language models (e.g., GPT-4, T5-XL) or multi-modal tasks requiring both vision and language.

## Google Cloud Platform (GCP) Instances 

### N2-Standard Instances

The GCP N2-Standard series offers cost-effective, general-purpose compute for workloads that don’t require GPU acceleration. These instances balance CPU and memory, making them well-suited for lightweight applications, preprocessing, and small-scale model deployment.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |  
|--------------------|------|--------------|---------| 
| `n2-standard-2`     | -    | -            | 1.4 cores (5.42Gi) | 
| `n2-standard-4`     | -    | -            | 3.4 cores (12.63Gi) | 
| `n2-standard-8`     | -    | -            | 7.3 cores (27.67Gi)  | 
| `n2-standard-16`    | -    | -            | 15.3 cores (57.75Gi) | 

**Key Features**

- vCPUs — Baseline performance scales from ~1.4 to ~15.3 cores, with the ability to burst to the full allocation (2 to 16 vCPUs). Optimized for CPU-intensive tasks, such as running traditional models.

- Memory (RAM) — From 5.42 GiB to 57.75 GiB, supporting in-memory data handling for lightweight to moderately intensive workloads.

- Cost efficiency — Designed to deliver consistent performance at a lower cost, ideal for everyday compute tasks without GPU requirements..  

**Example Use Case**  

- Running small-scale machine learning models or serving simple inference workloads.  

### G2-Standard Instances 

The GCP G2-Standard series provides GPU acceleration with NVIDIA L4 GPUs, designed for moderate machine learning and inference workloads. These instances scale from small setups to larger configurations, balancing cost with performance for small-to-medium tasks.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |  
|------------------|-------------|--------------|---------| 
| `g2-standard-4`   | 1x NVIDIA-L4 (22.49Gi) | 22.49Gi     | 3.4 cores (12.63Gi) | 
| `g2-standard-8`   | 1x NVIDIA-L4 (22.49Gi) | 22.49Gi      | 7.3 cores (27.67Gi)  |  
| `g2-standard-12`  | 1x NVIDIA-L4 (22.49Gi)| 22.49Gi      | 11.3 cores (42.71Gi)| 
| `g2-standard-16`  | 1x NVIDIA-L4 (22.49Gi) |  22.49Gi       | 15.3 cores (57.75Gi) | 
| `g2-standard-32`  | 1x NVIDIA-L4 (22.49Gi) | 22.49Gi       | 31.3 cores (118.07Gi)| 

**Key Features**  

- NVIDIA L4 GPUs — Optimized for inference and light training, delivering strong efficiency for vision and NLP tasks at lower cost compared to heavier GPU families.

- CPU & memory scaling — From ~3.4 to ~31.3 cores and 12.63 GiB to 118.07 GiB RAM, allowing smooth orchestration of preprocessing, data loading, and GPU-bound tasks.

- Cost-performance balance — A versatile option for teams that need GPU acceleration without the expense of A100/H100-based instances.

**Example Use Cases**  

- Running transformer-based models like BERT-base for summarization, classification, or Q&A.
- Fine-tuning smaller computer vision models for object detection or image classification.

### A2 & A3 High-Performance Instances

The A2 and A3 series are GCP’s flagship high-performance GPU instances, designed for large-scale deep learning, high-performance inference, and real-time AI workloads. With NVIDIA A100 and H100 GPUs, they scale from single-GPU setups to multi-GPU powerhouse configurations capable of training foundation models.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |   
|-------------------|--------------|--------------|---------|  
| `a2-ultragpu-1g`   | 1x NVIDIA-A100 (80Gi) | 80Gi       | 11.3 cores (159.23Gi) | 
| `a3-highgpu-1g`    | 1x NVIDIA-H100 (79.65Gi) | 79.65Gi       | 25.3 cores (221.95Gi) | 
| `a3-highgpu-8g`    | 8x NVIDIA-H100 (79.65Gi) | 637.18Gi      | 206.8 cores (1,827.19Gi) | 

**Key Features**

- Next-generation GPUs — A100 (80 GiB) excels at large-scale training with strong throughput and memory bandwidth. H100 (80 GiB) delivers significant improvements for transformer-based models, enabling faster training and inference. Multi-GPU (`a3-highgpu-8g`) configurations scale this power dramatically.

- vMassive CPU & RAM scaling — From 11.3 cores / 159 GiB RAM in `a2-ultragpu-1g` to 206.8 cores / 1.8 TiB RAM in `a3-highgpu-8g`, ensuring parallel data pipelines can keep pace with GPU compute.

- Flexible tiers — Options for single-GPU tasks or multi-GPU clusters, matching workloads of different scales and budgets.

**Example Use Cases**  

- Single-GPU (A2 / A3-1g) can be used for training or fine-tuning mid-to-large language models (e.g., GPT-3, T5-XL) or advanced vision models.

- Multi-GPU (A3-8g) can be used for training large-scale, next-generation foundation models (e.g., GPT-4, PaLM, multi-modal transformers) where scale and GPU memory aggregation are critical.

- Deploying video analytics, autonomous systems, or robotics pipelines that demand real-time, ultra-low latency.


### TPU v5e & v5p High-Performance Instances

Google’s cloud TPU v5e and v5p instances are purpose-built accelerators optimized for deep learning training and inference. Unlike GPUs, TPUs (Tensor Processing Units) are specialized for matrix-heavy tensor operations, making them ideal for transformer-based models and large-scale distributed training.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |   
|-------------------|--------------|--------------|---------|  
| `ct5lp-hightpu-4t`   | 4x GOOGLE-TPU-v5e (-Gi) |   -    | 111.1 cores (180.79Gi) | 
| `ct5lp-hightpu-1t`    | 1x GOOGLE-TPU-v5e (-Gi)|    -   | 23.3 cores (42.71Gi) | 
| `ct5p-hightpu-4t`    | 4x GOOGLE-TPU-v5p (-Gi)|   -    | 206.8 cores (431.67Gi) | 

**Key Features**

- Specialized Tensor Processing Units (TPUs) — TPU v5e provides a balanced design optimized for cost-efficiency in large-scale training and inference, which is great for productionizing ML workloads where throughput matters. TPU v5p provides higher-performance generation with faster interconnects and larger scaling potential, designed for frontier model training.

- Scalable CPU & memory — From 23.3 cores / 42.71 GiB RAM in the 1-core v5e instance to 206.8 cores / 431.67 GiB RAM in the 4-core v5p, ensuring sufficient orchestration power for massive training workloads.

- No exposed GPU memory — TPU memory is not presented like GPU VRAM but is instead managed by the TPU runtime for high-efficiency tensor operations.

**Example Use Cases**

- TPU v5e (1t, 4t) can be used for cost-efficient training of language models (e.g., BERT, T5-small/XL) and vision transformers (ViT).
- TPU v5p (4t) can be used for training large foundation models such as PaLM, Gemini-like multi-modal architectures, or massive LLMs where performance and throughput at scale are critical.

## Vultr Cloud Servers Instances

### VC2 Instances

The Vultr VC2 series provides general-purpose compute instances optimized for workloads that do not require GPU acceleration. With a balance of CPU and memory, these instances are best suited for lightweight use cases. 

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |   
|------------------|-------------|--------------|---------| 
| `vc2-2c-4gb`       |       -      |    -       |   1.4 cores (3.54Gi)  | 
| `vc2-4c-8gb `      |       -      |    -       |   3.4 cores (7.34Gi)     | 
|`vc2-6c-16gb`       |       -      |    -       |   5.4 cores (14.94Gi)     | 
| `vc2-8c-32gb`      |       -      |    -       |   7.4 cores (30.14Gi)   | 
| `vc2-16c-64gb`      |       -      |    -       |   15.4 cores (60.54Gi)    | 
|  `vc2-24c-96gb`      |       -      |    -       |   23.4 cores (90.94Gi)     | 

**Key Features**  

- Scalable CPU and RAM — Configurations range from 1.4 cores / 3.54 GiB RAM (`vc2-2c-4gb`) up to 23.4 cores / 90.94 GiB RAM (`vc2-24c-96gb`).

- Cost-effective — Optimized for environments where GPU acceleration is unnecessary, making them a good fit for traditional compute workloads.

- Flexibility — Suitable for a broad range of general-purpose tasks, with instance sizes that scale from small testing environments to larger services.

**Example Use Cases**  

- Suitable for lightweight applications as well as development and testing environments.

### VCG Instances

The Vultr VCG series provides instances with dedicated NVIDIA GPUs, enabling acceleration for deep learning, inference, and GPU-intensive applications. These instances scale from entry-level GPU setups to multi-GPU clusters, making them versatile for workloads ranging from experimentation to frontier AI model training.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |   
|------------------|-------------|--------------|---------| 
|`vcg-a16-6c-64g-16vram` |  1x NVIDIA-A16 (16Gi) |  16Gi  | 5.4 cores (60.54Gi)  |  
| `vcg-a100-12c-120g-80vram` | 1x NVIDIA-A100 (80Gi)  | 80Gi    | 11.4 cores (113.74Gi) | 
|  `vcg-l40s-16c-180g-48vram`|  1x NVIDIA-L40S (44.99Gi)    | 44.99Gi     | 15.4 cores (170.74Gi)       |  
|  `vcg-b200-248c-2826g-1536vram`| 8x NVIDIA-B200 (179.06Gi)   | 1,432.49Gi     | 255.4 cores (1,945.34Gi)      |  

**Key Features**  

- Range of NVIDIA GPUs — From the A16 (lightweight inference) to the A100 (high-performance training), L40S (next-gen accelerated workloads), and B200 clusters (frontier-scale AI with 8 GPUs).

- High vCPU and RAM configurations — Scales from 5.4 cores / 60 GiB RAM in entry-level instances to 255 cores / 1.9 TiB RAM in multi-GPU setups, ensuring GPU workloads are matched with sufficient CPU and memory.

- Scalable GPU memory — Ranges from 16 GiB (A16) for smaller tasks up to 1.4 TiB (8 × B200) for extreme AI training.

**Example Use Cases**  

- High-performance training and inference for large-scale deep learning models.
- Running AI inference workloads with optimized GPU acceleration.

### GH200 & MI300X High-Performance GPU Instances

Vultr offers high-performance GPU instances powered by NVIDIA and AMD accelerators. These instances are built for AI training, inference, and HPC (high-performance computing) workloads that demand extreme compute and memory bandwidth.

|Instance Type       |GPU           | GPU MEMORY  |   CPU         |   
|-------------------|--------------|--------------|---------|  
| `vbm-72c-480gb-gh200-gpu`   | 1x NVIDIA-GH200 (95.58Gi) | 95.58Gi    | 71.4 cores (455.74Gi) | 
| `vbm-256c-2048gb-8-mi3000x-gpu`    | 8x AMD-MI300X (127.82Gi)| 1,022.53Gi   | 255.4 cores (1,945.34Gi)| 

**Key Features**

- NVIDIA GH200 superchip — Combines Hopper GPU architecture with Grace CPU integration, delivering ultra-fast memory bandwidth and low-latency compute, ideal for training massive AI models and real-time inference.

- AMD MI300X GPUs — Designed for frontier AI workloads, offering huge HBM3 memory (128 GiB per GPU) and scaling efficiency with 8 GPUs per instance. Excellent for distributed training of very large models.

- High CPU & RAM configurations — From 71 cores / 455 GiB RAM (GH200) up to 255 cores / 1.9 TiB RAM (MI300X cluster), ensuring orchestration and preprocessing don’t bottleneck GPU performance.

**Example Use Cases**  

- NVIDIA GH200 (single GPU instance) can be used for training and inference for large language models (e.g., LLaMA 2–70B, GPT-3 scale). It can also be used for real-time multi-modal use cases requiring tight GPU-CPU integration, such as speech-to-speech AI assistants or interactive robotics.

- AMD MI300X (8-GPU cluster instance) can be used for training frontier LLMs and multi-modal models (GPT-4, Gemini-class, or open LLMs at >100B parameters).

## Oracle Distributed Cloud Instances

### NVIDIA-A10G GPU Instances

The Oracle A10G series provides NVIDIA GPUs optimized for inference, visualization, and moderate ML training tasks. These instances combine consistent vCPU allocations with scalable GPU configurations, from single-GPU VMs to multi-GPU bare metal nodes.

| Instance Type  | GPU                         | GPU Memory | CPU                         |
| -------------- | --------------------------- | ---------- | --------------------------- |
| `VM.GPU.A10.1` | 1 × NVIDIA-A10G (22.49Gi) | 22.49Gi  | 14.8 cores (227.41Gi) |
| `BM.GPU.A10.4` | 4 × NVIDIA-A10G (22.49Gi) | 89.95Gi | 14.8 cores (227.41Gi) |

**Key Features**

- NVIDIA A10G GPUs with 22.49 GiB memory each.
- Same CPU allocation (14.8 cores / 227 GiB RAM) across single- and four-GPU configurations.

**Example Use Cases**  

- VM.A10.1 (single GPU) can be used for small-scale ML inference, 3D rendering, and graphics-heavy applications.
- BM.A10.4 (four GPUs) can be used for larger inference workloads, distributed graphics rendering, or multi-GPU training of medium-sized models.

### AMD-MI300X GPU Instances

The Oracle MI300X family provides cutting-edge AMD Instinct MI300X GPUs, purpose-built for large-scale AI training and HPC (high-performance computing) workloads. These instances feature massive GPU memory and CPU scaling, supporting frontier use cases. 

| Instance Type     | GPU                         | GPU Memory   | CPU                            |
| ----------------- | --------------------------- | ------------ | ------------------------------ |
| `BM.GPU.MI300X.8` | 8 × AMD-MI300X (127.82Gi) | 1,022.53Gi | 111.5 cores (1,945.01Gi) |

**Key Features**

- 8 × AMD MI300X GPUs, each with 128 GiB HBM3 memory (over 1 TiB GPU memory total).
- Extremely high CPU scaling, 111.5 cores, and nearly 2 TiB of system RAM.
- Suited for frontier-scale AI training and supercomputing-class workloads.

**Example Use Cases**  

- Training LLMs and multi-modal models (>100B parameters).
- High-performance computing simulations, such as weather forecasting and scientific modeling.

### Standard CPU-Only Instances

The Oracle E6 Flex series provides CPU-only instances for workloads that do not require GPU acceleration. 

| Instance Type         | GPU | GPU Memory | CPU                       |
| --------------------- | --- | ---------- | ------------------------- |
| `VM.Standard.E6.Flex` | –   | –          | 0.8 cores (14.61Gi) |

**Key Features**

- No GPU, pure vCPU, and memory resources.
- 0.8 cores and 14.61 GiB RAM, suitable for supporting tasks.
- Cost-efficient for non-GPU workloads.

**Example Use Cases**  

- Running control-plane services or lightweight applications alongside GPU clusters.
- Workloads requiring basic compute and memory without acceleration.

