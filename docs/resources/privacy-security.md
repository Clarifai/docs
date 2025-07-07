---
description: Learn how we secure and handle your data
sidebar_position: 11
---

# Data Privacy and Security

**Learn how we secure and handle your data**
<hr />

At Clarifai, we uphold the highest standards of data privacy and security, backed by our SOC 2 Type 2 compliance. Your data is always treated as private and confidential by default. 

:::tip Trust Center

Visit our [Trust Center](https://trust.clarifai.com/) to view our compliance documentation, including certifications, attestations, and audit reports aligned with global standards.

:::

## Default Data Handling and User Control

Clarifai is designed to provide you with a rich, interactive platform where you can access your inputs and view prediction history. To enable this, we securely store the data you send to our platform. 

However, you remain in complete control of its retention.

Here’s how we handle your data:

- **Secure Storage by Default:** When you send inputs (such as images, text, or video) to your application, the data and its resulting predictions are stored securely. This allows you to review, search, and manage your data directly within the Clarifai Portal.

- **Your Data is Not Used for Training:** We do not use your private data to train our models or any other models on the platform unless you explicitly choose to share your inputs and annotations with the "Community."

- **Full Control Over Retention:** You can configure data retention policies to meet your specific security and privacy needs. This can be done via the API, allowing you to set a specific retention period (e.g., 30 days) after which your data will be automatically purged.


## How to Opt-Out of Data Storage

For use cases where storing inputs is not desired, you have the option to prevent data from being written to persistent storage.

Here’s how you can control that behavior:

- **API Control:** When making an API call, you can specify that the input data should not be stored. In this case, the data is used only to generate a prediction and is not retained.

## Metadata Usage and Analytics Practices

To deliver and improve our service, we log non-sensitive metadata for operational purposes.

We handle the metadata for:

- **Operational Logging:** We log metadata required for billing, platform monitoring, and providing the service, such as the number of requests or compute usage.

- **Platform Improvement:** For our proprietary models, we may analyze usage patterns and performance in aggregate to enhance model accuracy and efficiency. This analysis does not use your private input data. Any features that might involve more detailed logging will require your explicit opt-in.