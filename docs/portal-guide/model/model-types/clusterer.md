---
description: Learn about our clusterer model type
sidebar_position: 7
---

# Clusterer 

**Learn about our clusterer model type**
<hr />

**Input**: Images and videos

**Output**: Clusters

Clusterer is a type of deep fine-tuned model designed to identify and group similar images or video frames within a dataset. The primary goal of clustering is to discover patterns or relationships among data points based on their inherent characteristics or features, without requiring explicit labels or predefined categories.

Cluster models are often used in conjunction with embedding models to perform visual searches. This is done by first using an embedding model to represent each image as a vector in a lower-dimensional space. The cluster model then uses the mathematical structure of this space to determine which images are "clustered together."

The cluster model type can be used in a wide range of applications, including:

- **Customer segmentation in marketing**: Cluster models can be used to group customers with similar purchasing behaviors, demographics, or preferences.
- **Anomaly detection in network security**: Cluster models can identify unusual patterns in network traffic data, helping detect potential security threats or cyberattacks. Unusual clusters can indicate unauthorized access or malicious activity.
- **Document clustering in natural language processing**: In textual data analysis, cluster models can group similar documents based on their content. This aids in tasks like topic modeling, content summarization, and document organization.

You may choose a visual classifier model type in cases where:

- You want to perform visual searches accurately, quickly, and easily. Cluster models and embedding models do not require any labels or custom concepts to be trained. This makes them much more scalable and flexible than traditional methods for visual search, which often require a large amount of labeled data to train.
- You need a cluster model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your [workflows](https://docs.clarifai.com/portal-guide/workflows/).
- You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.

## Example use case

If you want to find all images of cats in your dataset, you can simply use the cluster model to find all images that are clustered together with the embedding of a cat image.
