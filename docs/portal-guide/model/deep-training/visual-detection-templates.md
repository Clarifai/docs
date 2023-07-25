---
description: Learn about our visual detection templates
sidebar_position: 2
---

# Visual Detection Templates

**Learn about our visual detection templates**
<hr />

Detection templates make it easy to build models that can identify objects within a region of your images or videos. Detection models return concepts and bounding boxes.

Each template comes with its own hyperparameters, which you can tune to influence “how” your model learns. With hyperparameters, you can customize and fine-tune a template to suit your specific tasks and achieve better performance.

:::tip

You can customize most hyperparameters by specifying the following values:

- `minimum`—the minimum value a given parameter can take.
- `maximum`—the maximum value a given parameter can take.
- `step`—determines how much you can increment or decrement the minimum or maximum value in a single click/change.

:::

## MMDetection_YoloF

This is a deep learning template model from MMDetection that focuses on object detection using the YOLO (You Only Look Once) framework.

MMDetection, short for "OpenMMLab Detection Toolbox and Benchmark," is an open-source software framework developed by OpenMMLab. It is designed to facilitate research and development in the field of object detection and instance segmentation. MMDetection provides a comprehensive collection of state-of-the-art models, datasets, and evaluation metrics, making it a valuable resource for both academic and industrial applications.

The **MMDetection_YoloF** template leverages the power of convolutional neural networks (CNNs) and advanced techniques like anchor-based prediction and feature pyramid networks to accurately detect and localize objects in images or videos.

With its robust architecture and pretrained weights, **MMDetection_YoloF** provides a strong foundation for developers and researchers to build custom object detection solutions for various use cases.

The **MMDetection_YoloF** template supports the following hyperparameters:

- **Image size**—This is the image size for training and inference. When a single value is specified, it typically means that the images will be resized so that the minimum side (either width or height) of each image matches that value. On the other hand, when more than one value is provided, and it is combined with "keep_aspect_ratio=False", it means that the images will be resized to the exact width and height specified.
- **Max aspect_ratio**—When "keep_aspect_ratio" is set to True, it is used to control the maximum length of the longer side of an image relative to the shorter side during image resizing. The minimum value it supports for customization is `1.0`, while the maximum is `5.0`.
- **Keep aspect_ratio**—This is a boolean that determines whether to keep the original aspect ratio of the image during resizing. If set to True (default, recommended), the aspect ratio of the image will be preserved when resizing. The image will be resized, maintaining the same aspect ratio, to fit within the desired dimensions. If set to False, non-aspect-preserving resizes will be used. In this case, the image may be distorted as it is resized to exactly match the specified dimensions, ignoring the original aspect ratio.
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `32`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.  
- **Min samples_per_epoch**—For very small datasets, this specifies the minimum number of samples processed in one epoch during training. When dealing with very small datasets, it's essential to be cautious about the number of samples per epoch to avoid overfitting and unstable training. For small datasets, a common approach is to repeat the dataset multiple times to increase the number of effective epochs.
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The **lrate** (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Pretrained weights**—This specifies whether to init the model with pre-trained weights. You can choose either `None` or `coco` (default) for this parameter. 
- **Frozen stages**—This specifies the backbone network stages to keep frozen during training. The minimum value it supports for customization is `1`, while the maximum is `4`—with an incremental or decremental step of `1`. 

## MMDetection_SSD

This template is an implementation of the SSD object detection algorithm within the MMDetection framework, offering a convenient and powerful tool for object detection tasks. The Single Shot MultiBox Detector (SSD) architecture is a popular object detection algorithm that offers a good trade-off between accuracy and speed.

The SSD model in MMDetection is designed to detect and localize objects in images using a single deep neural network. It achieves this by dividing the input image into a grid of cells and predicting object bounding boxes and class probabilities within each cell. SSD incorporates multiple convolutional layers of different scales to capture objects of various sizes and aspect ratios, allowing it to detect objects at different scales in a single pass.

**MMDetection_SSD** provides a pre-configured implementation of the SSD architecture along with trained weights on standard benchmark datasets such as COCO and VOC. This allows users to utilize the model out of the box for various object detection tasks or as a starting point for further customization and fine-tuning.

By leveraging the MMDetection framework, users can take advantage of its data pre-processing, model training, and evaluation capabilities to train and evaluate the **MMDetection_SSD** model on their own datasets. The framework also provides tools for visualizing and analyzing the detection results.

The **MMDetection_SSD** template supports the following hyperparameters:

- **Image size**—This is the image size for training and inference. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. 
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `32`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.  
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The **lrate** (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Pretrained weights**—This specifies whether to init the model with pre-trained weights. You can choose either `None` or `coco` (default) for this parameter.  

## MMDetection_FasterRCNN

**MMDetection_FasterRCNN** refers to a specific model implemented in the MMDetection framework that is based on the Faster R-CNN (Region-based Convolutional Neural Networks) architecture. Faster R-CNN is a widely used and highly effective object detection algorithm.

The Faster R-CNN algorithm consists of two main components: a region proposal network (RPN) and a region-based CNN for detection. The RPN generates potential object bounding box proposals, and the region-based CNN classifies and refines these proposals to produce the final detection results.

In MMDetection, the **MMDetection_FasterRCNN** model provides a pre-configured implementation of the Faster R-CNN architecture along with pre-trained weights on standard benchmark datasets like COCO and VOC. It allows users to utilize the model out of the box for object detection tasks or as a starting point for further customization and fine-tuning.

**MMDetection_FasterRCNN** leverages the MMDetection framework's capabilities for data preprocessing, model training, and evaluation. Users can train the model on their own datasets, adjust hyperparameters, and analyze the detection results using the provided tools.

The Faster R-CNN algorithm has been proven to achieve excellent performance in terms of accuracy, making **MMDetection_FasterRCNN** a valuable tool for a wide range of object detection applications.

The **MMDetection_FasterRCNN** template supports the following hyperparameters:

- **Image size**—This is the image size for training and inference. When a single value is specified, it typically means that the images will be resized so that the minimum side (either width or height) of each image matches that value. On the other hand, when more than one value is provided, it means that the images will be resized to the exact width and height specified.
- **Random resize_lower**—This is the lower limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or larger than this lower limit. It uses the same one or two element format as `image_size`. And if it's empty, it uses `image_size`.  If the original image size is smaller than the lower limit, it will not be resized, and the original size will be used.
- **Random resize_upper**—This is the upper limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or smaller than this upper limit. It uses the same one or two element format as `image_size`. And if it's empty, it uses `image_size`. If the original image size is already smaller than the upper limit, it will not be resized, and the original size will be used.
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `32`—with an incremental or decremental step of `1`.  
- **Num epochs**—This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.   
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The **lrate** (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Pretrained weights**—This specifies whether to init the model with pre-trained weights. You can choose either `None` or `coco` (default) for this parameter. 

## Clarifai_InceptionV4

This is a visual detector template based on RetinaNet, a popular object detection framework, that utilizes the InceptionV4 architecture as its backbone.

[InceptionV4](https://arxiv.org/abs/1602.07261) is a variant of the Inception architecture, which was originally introduced by Google for image classification tasks. The InceptionV4 model is a convolutional neural network (CNN) that is designed to extract high-level features from images for tasks such as object recognition, classification, and detection. It incorporates various innovative techniques, including inception modules with multiple parallel branches, factorized convolutions, and residual connections, to enhance its performance and efficiency.

**Clarifai_InceptionV4** template leverages the strengths of InceptionV4 by applying it at multiple image scales, allowing for robust detection across a range of object sizes.

Compared to InceptionV2, **Clarifai_InceptionV4** sacrifices speed for increased accuracy. While InceptionV2 is faster, **Clarifai_InceptionV4** is slower but offers improved precision in object detection tasks. This makes it well-suited for applications that prioritize accuracy over real-time inference.

**Clarifai_InceptionV4** is pretrained on either the COCO (Common Objects in Context) dataset or the OpenImages dataset. COCO is a widely used benchmark dataset for object detection, while OpenImages is a large-scale dataset with a diverse range of object categories. Pretraining on these datasets enables the model to learn general representations of objects, improving its ability to detect and classify objects accurately.

By combining the strengths of the RetinaNet framework, the powerful InceptionV4 backbone, and pretrained weights on COCO or OpenImages, **Clarifai_InceptionV4** provides a robust and accurate solution for object detection tasks, making it a valuable tool for various computer vision applications.

The **Clarifai_InceptionV4** template supports the following hyperparameters:

- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The valid choices you can provide are: `320, 512, or 800`.
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `16`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.  
- **Use perclass_regression**—This is a boolean that specifies whether to use separate coordinate regressors for each class, or one set for all classes. Per-class regression refers to the process of using separate box coordinate regressors for each class in the dataset. This means that for each object class, there is a dedicated set of regression parameters that are learned during the training process to predict the bounding box coordinates (e.g., x, y, width, and height) specific to that class.
- **Anchor ratios**—Anchor boxes are predefined bounding boxes of different shapes and sizes that act as reference templates for detecting objects of various scales and aspect ratios in an image. The anchor ratios refer to the width (w) to height (h) ratios of these anchor boxes. They determine the shape of the anchor boxes, allowing the object detector to handle objects with different aspect ratios effectively.
- **Use focal_loss**—This is a boolean that specifies whether to use focal loss during training or Online Hard Example Mining (OHEM). Focal loss is a modification of the standard cross-entropy loss that addresses the issue of class imbalance during training. It introduces a modulating factor to downweight the contribution of easy examples while focusing more on hard examples. OHEM is a technique used to alleviate the problem of class imbalance by focusing on challenging samples during training. Instead of using all samples in a batch, OHEM selects the hardest examples (e.g., the ones with the highest loss) and only uses those for backpropagation. By doing so, it gives more importance to the difficult examples, which can lead to more effective learning, especially when dealing with a large number of easy background samples.
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The **lrate** (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.

## Clarifai_InceptionV2

This is a visual detector template based on RetinaNet using the Inception V2 backbone architecture, which is applied at multiple image scales. It offers a balance between speed and accuracy. Compared to InceptionV4, InceptionV2 is faster but provides slightly lower accuracy.

The model can be pre-trained on either the COCO (Common Objects in Context) dataset or the OpenImages dataset. These datasets contain a wide range of labeled images, enabling the model to learn to detect various objects and entities in images. The choice of dataset for pretraining depends on the specific application and the types of objects or entities you want the model to detect.

**Clarifai_InceptionV2** serves as an efficient deep learning template that leverages the Inception V2 backbone architecture, providing a good trade-off between speed and accuracy for object detection tasks.

The **Clarifai_InceptionV2** template supports the following hyperparameters:

- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The valid choices you can provide are: `320, 512, or 800`.
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `16`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Use perclass_regression**—This is a boolean that specifies whether to use separate coordinate regressors for each class, or one set for all classes. Per-class regression refers to the process of using separate box coordinate regressors for each class in the dataset. This means that for each object class, there is a dedicated set of regression parameters that are learned during the training process to predict the bounding box coordinates (e.g., x, y, width, and height) specific to that class.
- **Anchor ratios**—Anchor boxes are predefined bounding boxes of different shapes and sizes that act as reference templates for detecting objects of various scales and aspect ratios in an image. The anchor ratios refer to the width (w) to height (h) ratios of these anchor boxes. They determine the shape of the anchor boxes, allowing the object detector to handle objects with different aspect ratios effectively.
- **Use focal_loss**—This is a boolean that specifies whether to use focal loss during training or Online Hard Example Mining (OHEM). Focal loss is a modification of the standard cross-entropy loss that addresses the issue of class imbalance during training. It introduces a modulating factor to downweight the contribution of easy examples while focusing more on hard examples. OHEM is a technique used to alleviate the problem of class imbalance by focusing on challenging samples during training. Instead of using all samples in a batch, OHEM selects the hardest examples (e.g., the ones with the highest loss) and only uses those for backpropagation. By doing so, it gives more importance to the difficult examples, which can lead to more effective learning, especially when dealing with a large number of easy background samples.
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The **lrate** (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.