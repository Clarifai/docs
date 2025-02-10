---
description: Learn about the instance types we support
sidebar_position: 4
pagination_next: null
---

# Supported Cloud Instances

**Learn about the instance types we support**
<hr />

We offer a range of Amazon Web Services (AWS) and Google Cloud Platform (GCP) instance types, which are designed to handle a variety of machine learning workloads. 

These instances vary in their CPU, RAM (Random Access Memory), and GPU configurations, which allow you to orchestrate the right balance of performance and cost for your use case.

:::info

You can [contact us](https://www.clarifai.com/explore/contact-us) to unlock access to our most powerful instances, including NVIDIA A100 and H100 GPUs.

:::

## AWS Cloud Instances

### t3a Instances 

The `t3a` series is designed for cost-effective, general-purpose workloads that do not require GPU acceleration. It offers a balanced combination of CPU and memory, making it ideal for lightweight applications.

|Instance Type       |GPUs            | Total GPU RAM  |   CPU         |  RAM          |
|--------------------|----------------|----------------|---------------|---------------| 
| `t3a.medium`         |      -         | -              |  2x CPU       |   4GiB        |              
| `t3a.large`          |    -           | -               | 2x CPU        |   8GiB        |
| `t3a.xlarge`         |  -             |   -             | 4x CPU        |   16GiB        |
| `t3a.2xlarge`        |     -          |    -            |  8x CPU       |   32GiB        |

**Key Features**

- vCPUs (virtual CPUs) — Burstable performance for intermittent, compute-heavy tasks. Ideal for CPU-intensive operations like running traditional models or pre-processing pipelines.  For example, `t3a.medium` offers two vCPUs, while `t3a.2xlarge` offers eight vCPUs. 

- RAM — Determines the capacity for handling data in memory. It ranges from 4 GiB to 32 GiB, allowing you to handle lightweight, data-intensive workloads without requiring GPU acceleration.

**Example Use Case**

- Running simple models for classification tasks.

### g4dn Instances

The `g4dn` series is designed for moderate GPU-accelerated workloads, making it suitable for small-to-medium-scale machine learning tasks.

|Instance Type       |GPUs            | Total GPU RAM  |   CPU         |  RAM          |
|--------------------|----------------|----------------|---------------|---------------| 
| `g4dn.xlarge`        |    1x  NVIDIA-T4      |    16GiB        |   4x CPU      | 16GiB              |              

**Key Features**

- NVIDIA T4 GPUs — Optimized for inference and light model training, offering a balance of performance and cost.

- vCPUs and RAM — Includes four vCPUs and 16 GiB of RAM for data processing and workload orchestration.

**Example Use Cases**

- Inference workloads, such as running NLP models like BERT-base for text summarization and question answering.

- Fine-tuning pre-trained models for specific tasks like object detection or sentiment analysis.

### g5 Instances 

The `g5` series delivers enhanced GPU capabilities and is designed for tasks requiring higher memory and computational power, such as large-scale deep learning model training.

|Instance Type       |GPUs            | Total GPU RAM  |   CPU         |  RAM          |
|--------------------|----------------|----------------|---------------|---------------| 
|  `g5.xlarge`       | 1x  NVIDIA-A10G        |  24GiB         | 4x CPU        |   16GiB       |              
|  `g5.2xlarge`      |  1x  NVIDIA-A10G       | 24GiB          |  8x CPU       |   32GiB       |

**Key Features**

- NVIDIA A10G GPUs — High memory bandwidth and compute power for complex deep learning models and advanced workloads.

- vCPUs and RAM — Increased CPU and memory for tasks involving heavy data processing alongside GPU computation.

**Example Use Cases**

- Training mid-sized NLP models like GPT-2 or T5 for text generation, or training image segmentation models like UNet or Mask R-CNN for medical imaging. 

- Running object tracking or pose estimation workflows in real-time video analysis.

### g6 Instances

The `g6` series offers next-generation GPU technologies and is designed for the most demanding machine learning workloads, including large-scale model training and high-performance simulations. Each instance type in the `g6` series is tailored to specific workloads.

|Instance Type       |GPUs            | Total GPU RAM  |   CPU         |  RAM          |
|--------------------|----------------|----------------|---------------|---------------| 
|  `g6.xlarge`         | 1x  NVIDIA-L4          |  24GiB         |  4x CPU       |  16GiB        |              
|  `g6.2xlarge`        |  1x  NVIDIA-L4         | 24GiB          |  8x CPU       |   32GiB            |
|  `g6e.xlarge`       |  1x  NVIDIA-L40S        | 48GiB          |   4x CPU      |    32GiB           |
|   `g6e.12xlarge`    | 4x  NVIDIA-L40S         |  192GiB        | 48x CPU       |    384GiB           |

**Key Features**

- Next-Gen GPUs — NVIDIA L4 and L40S GPUs deliver exceptional performance for training and inference tasks, with GPU memory scaling from 24 GiB to 192 GiB.

- High vCPU & RAM Configurations —  Ideal for handling massive datasets and parallel processing for complex workflows.

**Example Use Cases**

- The `g6.xlarge` and `g6.2xlarge` instances support mid-tier workloads, such as fine-tuning the BERT-large model or running computer vision tasks like text-to-image generation.

- The `g6e.xlarge` and `g6e.12xlarge` instances support high-end workloads, such as training large-scale language models like GPT-4 or T5-XL for multi-modal tasks. 

<!--
 
## GCP Cloud Instances 

### N2-Standard Instances

The N2-Standard series is designed for cost-effective, general-purpose workloads that do not require GPU acceleration. These instances provide a balanced combination of CPU and memory, making them ideal for lightweight applications.  

| Instance Type      | GPUs | Total GPU RAM | CPU     | RAM   |  
|--------------------|------|--------------|---------|-------|  
| n2-standard-2     | -    | -            | 2x CPU  | 8 GiB  |  
| n2-standard-4     | -    | -            | 4x CPU  | 16 GiB |  
| n2-standard-8     | -    | -            | 8x CPU  | 32 GiB |  
| n2-standard-16    | -    | -            | 16x CPU | 64 GiB |  

**Key Features**

- vCPUs (Virtual CPUs) — Optimized for CPU-intensive operations like running traditional models or pre-processing pipelines.  
- RAM — Ranges from 8 GiB to 64 GiB, allowing efficient handling of lightweight, data-intensive workloads.  

**Example Use Case**  

- Running small-scale machine learning models or serving simple inference workloads.  

### G2-Standard Instances 

The G2-Standard series is designed for moderate GPU-accelerated workloads, making it ideal for small-to-medium-scale machine learning tasks.  

| Instance Type     | GPUs         | Total GPU RAM | CPU     | RAM   |  
|------------------|-------------|--------------|---------|-------|  
| g2-standard-4   | 1x NVIDIA-L4 | 24 GiB       | 4x CPU  | 16 GiB |  
| g2-standard-8   | 1x NVIDIA-L4 | 24 GiB       | 8x CPU  | 32 GiB |  
| g2-standard-12  | 1x NVIDIA-L4 | 24 GiB       | 12x CPU | 48 GiB |  
| g2-standard-16  | 1x NVIDIA-L4 | 24 GiB       | 16x CPU | 64 GiB |  
| g2-standard-32  | 1x NVIDIA-L4 | 24 GiB       | 32x CPU | 128 GiB |  

**Key Features**  

- NVIDIA L4 GPUs — Optimized for inference and light model training, offering a balance of performance and cost.  
- Scalable vCPUs and RAM — Supports larger data processing and orchestration workloads.  

**Example Use Cases**  

- Running NLP models like BERT-base for text summarization.  
- Fine-tuning small vision models for object detection.  

### A2 & A3 High-Performance Instances

For large-scale deep learning and AI workloads, the A2 and A3 series provide cutting-edge GPUs with high memory bandwidth.  

| Instance Type      | GPUs          | Total GPU RAM | CPU     | RAM    |  
|-------------------|--------------|--------------|---------|--------|  
| a2-ultragpu-1g   | 1x NVIDIA-A100 | 80 GiB       | 12x CPU | 170 GiB |  
| a3-highgpu-1g    | 1x NVIDIA-H100 | 80 GiB       | 26x CPU | 234 GiB |  

**Key Features**

- NVIDIA A100 & H100 GPUs — Designed for high-end AI and deep learning tasks, including large-scale model training.  
- High CPU & RAM Configurations — Enables parallel processing for massive datasets and complex workflows.  

**Example Use Cases**  

- Training large language models like GPT-4 or T5-XL.  
- Running real-time AI applications, such as video analytics or autonomous systems.  

-->

