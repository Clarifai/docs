---
description: Evaluate segmentation models
sidebar_position: 5
draft: true
---

# Visual Segmentation Models

**Evaluate segmentation models**
<hr />

[Visual segmentation](https://docs.clarifai.com/portal-guide/model/model-types/visual-segmenter) models are machine learning models designed to analyze images and assign a label to each pixel, effectively dividing the image into segments based on predefined categories. These models are a key tool in computer vision, enabling precise understanding of visual scenes.

Evaluating visual segmentation models involves assessing their ability to accurately assign labels to every pixel in an image, typically for tasks like object segmentation, medical imaging, or scene understanding. 

## Performing Evaluation

You can evaluate a specific version of your custom visual segmentation model. To do so, navigate to the versions table of your model and locate the version of the model you want to evaluate.

The **Evaluation Dataset** column in the table allows you to select a [dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) to use to assess the performance of your model version. If you click the field, a drop-down list emerges, enabling you to select a dataset to perform the evaluation.

This selection can include datasets within your current application or those from another application under your ownership, which facilitates cross-app evaluation. This means that you can assess how well your model performs across various contexts or use cases by leveraging datasets from separate applications.

:::tip Prepare the Evaluation Dataset

You need to use a separate dataset that was not used during training for the evaluation. You should ensure the dataset has high-quality annotations (pixel-level ground truth) and is representative of the real-world data the model will encounter. It's important to include edge cases like occluded objects, varying lighting conditions, and challenging perspectives.

:::

![](/img/community/evaluate/segmenter_1.png)

Also, if you click the **Evaluate with a new Dataset** button, a small window will pop up. Within this window, you can choose a new dataset not included in the drop-down list, along with its version, for conducting the evaluation. 

If you do not select a dataset version, the latest one will be automatically used.

![](/img/community/evaluate/segmenter_2.png)

After selecting the dataset you want to use for the evaluation, click the **Evaluate** button. 

You will then be redirected to the **Evaluation results** page.  Click the **Evaluate** button to start the evaluation process.

:::info How Segmentation Evaluation Works

The trained model processes each image in the evaluation dataset, producing segmentation masks. Each pixel in the mask is assigned a label corresponding to the predicted class. Then, the predicted segmentation mask is compared to the ground truth mask for each image. This evaluates performance at the pixel level and for each class.

:::

![](/img/community/evaluate/segmenter_3.png)

## Evaluation Metrics

The **Evaluation results** page allows you to gain a comprehensive understanding of your model's performance across different scenarios and datasets.

Let’s talk about the key metrics used in the evaluation of segmentation models.

![](/img/community/evaluate/segmenter_4.png)

### Intersection over Union (IoU)

The Intersection over Union (IoU) is a key metric for evaluating the accuracy of segmentation models. It provides a clear indication of how well the model captures the target regions. It measures the degree of overlap between the predicted segmentation mask and the ground truth mask. 

This is how it's calculated: 

`IoU = Area of Overlap / Area of Union`

- **Area of Overlap** – The region where the predicted segmentation and ground truth masks coincide
- **Area of Union** – The total area covered by both masks, including their overlap

The IoU score ranges from 0.0 to 1. A value of 0.0 indicates no overlap between the predicted mask and the ground truth mask; that is a completely incorrect prediction or poor segmentation performance. And a value of 1.0 indicates perfect overlap where the predicted mask equally matches the ground truth mask; that is perfect segmentation performance.

In many cases, a threshold IoU value (such as 0.5) is set to determine whether a prediction is considered correct, making it an essential tool for benchmarking segmentation models.

:::info mIoU

IoU is calculated separately for each class in the segmentation task, and these values are averaged across all classes to compute the Mean IoU (mIoU). The mIoU serves as an average IoU across all classes and provides an overall performance measure for multi-class segmentation tasks.

:::

### Dice Coefficient 

The Dice Coefficient is another essential metric for evaluating segmentation models. It measures the similarity between the predicted segmentation mask and the ground truth mask, emphasizing the overlap relative to the total size of both masks.

This is how it's calculated: 

`Dice Coefficient = 2 x Area of Overlap / Total Pixels in Both Masks`

- **Area of Overlap** – The region where the predicted segmentation matches the ground truth
- **Total Pixels in Both Masks** – The sum of pixels in the predicted mask and the ground truth mask

The Dice coefficient is calculated separately for each class, providing an intuitive and interpretable measure of segmentation quality. 

Its values range from 0, indicating no overlap, to 1, indicating the two sets are identical. A high value indicates a high level of similarity between the predicted and ground truth masks, implying that the model is performing well. On the other hand, a low value indicates poor segmentation performance.

This metric is particularly useful in scenarios where accurately identifying segmented areas is more critical than focusing on non-segmented regions. It's effective for imbalanced datasets where some target regions, such as small objects or rare classes, occupy only a minor portion of the image. 

:::warning IoU vs. Dice 

IoU and Dice differ in their approach and sensitivity. IoU focuses on the area of union, making it ideal for understanding model performance in tasks requiring precise boundary delineation. Dice balances overlap relative to the combined size of the masks, making it more sensitive to smaller target regions. By leveraging both metrics, you gain a comprehensive understanding of your segmentation model's performance across different scenarios and datasets.

:::