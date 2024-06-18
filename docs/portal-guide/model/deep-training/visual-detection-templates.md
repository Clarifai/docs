---
description: Learn about our visual detection templates
sidebar_position: 2
keywords: [visual detection templates, deep learning visual detection, AI visual detection, object detection templates, deep training visual detection, machine learning visual detection, custom visual detection models, pre-trained visual detection templates, image detection AI, deep learning object detection ]
---

# Visual Detection Templates

**Learn about our visual detection templates**

<hr />

Our visual detection templates are essentially configuration files and scripts that serve as starting points or blueprints for creating, training, and evaluating object detection models. They streamline the process of building models that can accurately identify objects within specific regions of your images or videos. 

With these training templates, you can quickly and efficiently create detection models that return concepts and bounding boxes for the identified objects.

![](/img/images1/visual-detection-templates.png)

## MMDetection Templates

[MMDetection](https://mmdetection.readthedocs.io/en/latest/overview.html), is a powerful open-source toolbox developed as part of the OpenMMLab project. It is based on PyTorch and provides a flexible and extensible framework for object detection and instance segmentation tasks. 

MMDetection offers a rich set of templates and resources that simplifies the process of developing and deploying advanced object detection and instance segmentation models. 

We provide support for the following MMDetection templates to accelerate your development efforts and ensure you achieve state-of-the-art results. 

:::warning info

We currently support MMDetection v3.3.0. 

:::

### MMDetection_YOLOX

The **MMDetection_YOLOX** template is a configuration in the MMDetection framework for utilizing the advanced [YOLOX](https://github.com/Megvii-BaseDetection/YOLOX) model, part of the YOLO (You Only Look Once) family of object detection models. 

YOLOX introduces several improvements over previous YOLO versions, including:

- **Anchor-free design** — Eliminates the need for predefined anchors (reference boxes for bounding box prediction). Absence of hand-crafted anchors allows the model to predict bounding boxes directly. This makes the model more flexible and efficient in handling objects of various shapes and sizes.
- **Multi positives with center sampling** — Enhances positive sample selection by focusing on bounding box centers, improving feature learning and detection accuracy.
- **Decoupled head**: Separates the tasks of object classification and bounding box regression into two branches, which is a significant departure from the single-head design in the previous YOLO models. Decoupled head leads to more accurate predictions and faster model convergence.
- **SimOTA label assignment** — Assigns positive or negative labels to objects based on their Intersection over Union (IoU) with ground truth boxes, ensuring more accurate and context-aware label assignments.
- **Advanced data augmentations** — Uses advanced techniques to improve the model's generalization (working on new data) by exposing it to diverse object arrangements and conditions.

This template leverages these advanced features to create highly efficient and accurate object detection pipelines, facilitating quick setup and customization for various applications.

### MMDetection_YOLOF

**MMDetection_YOLOF** is a configuration provided by the MMDetection framework specifically designed to utilize the [YOLOF](https://arxiv.org/abs/2103.09460) model, which stands for "You Only Look One-level Feature." YOLOF is a simplified, efficient variant of the YOLO (You Only Look Once) series tailored for real-time object detection tasks. 

Here are the key features of the template:

- **One-level feature extraction** — YOLOF uses a single-level feature map for detection, unlike multi-scale feature maps used in more complex models. This simplified architecture reduces computational overhead, making it suitable for real-time applications where speed is crucial.
- **Anchor-free design** — Similar to YOLOX, YOLOF adopts an anchor-free approach, eliminating the need for predefined anchor boxes and allowing for more straightforward bounding box predictions.
-	**High efficiency** — YOLOF is designed to ensure rapid inference and low latency.

This template facilitates quick setup and customization, enabling efficient deployment of object detection models in various real-world applications requiring speed and accuracy.

### MMDetection_SSD

The **MMDetection_SSD** template is a configuration provided by the MMDetection framework for utilizing the [SSD](https://arxiv.org/abs/1512.02325 ) (Single Shot MultiBox Detector) model. SSD is an efficient and straightforward object detection model known for its balance of speed and accuracy, making it suitable for real-time applications.

SSD is designed to detect objects in images using a single deep neural network. It eliminates the need for a separate proposal generation stage, making it faster and more efficient than some other object detection models.

Here are the key features of the template:
-	**Single shot detection** — Detects objects and their bounding boxes in a single forward pass of the network, as opposed to two-stage detectors like Faster R-CNN. The one-step process significantly reduces the computational complexity and increases the speed of detection.
-	**Multi-scale feature maps** — SSD uses multiple feature maps at different scales to detect objects of various sizes. This approach allows SSD to effectively handle objects at different resolutions and aspect ratios.
-	**Default boxes (anchors)** — Predicts offsets and confidences for predefined anchor boxes of different shapes and sizes.
-	**Hard negative mining** — Uses hard negative mining during training to handle the class imbalance between the background and object classes. This technique helps in focusing the training on difficult examples, improving the overall accuracy of the detector.

### MMDetection_FasterRCNN

The **MMDetection_FasterRCNN** template is a configuration provided by the MMDetection framework for utilizing the [Faster R-CNN](https://arxiv.org/abs/1506.01497) model, which is a popular and highly effective object detection model. Faster R-CNN stands for Faster Region-based Convolutional Neural Network and is known for its high accuracy in detecting objects within images.

Here are the key features of the template:

- **Two-stage detection** — Uses an RPN (Region Proposal Network) for generating region proposals (potential object bounding boxes) and a Fast R-CNN detector for performing object classification and bounding box regression on the proposed regions.
- **Shared convolutional layers** — The RPN and the Fast R-CNN detection network share convolutional features, improving efficiency.
- **Anchor boxes** — Uses predefined anchor boxes of different scales and aspect ratios at each sliding window location to handle objects of various shapes and sizes. Predicts offsets to these anchors to refine the bounding box locations. 
- **End-to-end training** — The entire Faster R-CNN model, including the RPN and the detection network, is trained end-to-end, enhancing performance.

## Clarifai Templates

Clarifai’s templates are our own configurations designed to streamline common object detection and instance segmentation tasks. These templates provide essential settings and structures, offering a solid foundation for building custom detection and segmentation pipelines. 

We offer the following visual detection templates. 

### Clarifai_InceptionV4

The **Clarifai_InceptionV4** template is a pre-configured setup provided by Clarifai, leveraging the [InceptionV4](https://arxiv.org/abs/1602.07261) model for visual recognition tasks such as object detection and instance segmentation.

InceptionV4 is a convolutional neural network architecture that builds on the success of the earlier Inception models (also known as GoogLeNet), designed by researchers at Google. InceptionV4 combines the strengths of InceptionV3 and Residual Networks (ResNet) to achieve high accuracy and efficiency in visual recognition tasks.

Here are the key features of the template:

-  **Hybrid architecture** — Combines inception modules and residual connections for comprehensive feature extraction and efficient training.
-  **High accuracy** — Achieves high precision in visual recognition tasks due to its deep and complex architecture.
-  **Efficient training** — Designed to be trained efficiently on large datasets, making it suitable for tasks requiring detailed feature extraction and high precision.

### Clarifai_InceptionV2

This is a visual detector template based on RetinaNet using the Inception V2 backbone architecture, which is applied at multiple image scales. It offers a balance between speed and accuracy. Compared to InceptionV4, InceptionV2 is faster but provides slightly lower accuracy.

The model can be pre-trained on either the COCO (Common Objects in Context) dataset or the OpenImages dataset. These datasets contain a wide range of labeled images, enabling the model to learn to detect various objects and entities in images. The choice of dataset for pretraining depends on the specific application and the types of objects or entities you want the model to detect.

**Clarifai_InceptionV2** serves as an efficient deep learning template that leverages the Inception V2 backbone architecture, providing a good trade-off between speed and accuracy for object detection tasks.

## Other Templates

We also support the following additional templates. 

### Detection_MSC10

The **Detection_MSC10** template provides an excellent starting point for building and deploying sophisticated object detection and instance segmentation models. With its blend of accuracy, efficiency, and customizability, the template can significantly enhance the development process for various visual detection applications.

For example, you can customize it with the MSCOCO (Microsoft Common Objects in Context) dataset, a large-scale object detection, segmentation, and captioning dataset. You can also customize it with the InceptionV4 architecture, a state-of-the-art architecture known for handling complex image recognition and detection tasks. This allows it to achieve faster convergence and better performance on related tasks.

## Hyperparameters

Each visual detection template comes with its own hyperparameters, which you can tune to influence “how” your model learns. With hyperparameters, you can customize and fine-tune a template to suit your specific tasks and achieve better performance.

:::warning Customize values

You can customize most hyperparameters by specifying the following values:

- `minimum` — The minimum value a given parameter can take;
- `maximum` — The maximum value a given parameter can take;
- `step` — Determines how much you can increment or decrement the minimum or maximum value in a single click/change.

:::

### Image Size

The image size hyperparameter defines the dimensions of the input images used for training and inference. It is crucial because it affects the model's performance, memory consumption, and computational requirements.

- **Lower values:** Use less memory and enable faster processing but might reduce detection accuracy due to fewer pixels.
- **Higher values:** Provide more pixel information, potentially increasing detection accuracy but require more memory and computational power.

:::tip

Choosing the appropriate image size involves balancing the need for detailed image information with the constraints of memory and computational resources. Selecting the right size can enhance model performance and detection accuracy.

:::

You can specify either a single value or multiple values:

- **Single value:** When a single value is specified, images are resized so that the minimum side (either width or height) matches that value. The aspect ratio is maintained by adjusting the other dimension proportionally.
- **Multiple values:** When more than one value is specified, and combined with the "keep_aspect_ratio=False" hyperparameter (if supported by the template), images are resized to the exact width and height specified, regardless of the original aspect ratio.

For example, the valid choices for the image size hyperparameter you can specify for the Clarifai_InceptionV4 template are 320, 512, or 800.

### Max Aspect Ratio

When "keep_aspect_ratio" is set to True, this hyperparameter controls the maximum ratio between the longer side and the shorter side of an image during resizing. You can customize this ratio to ensure that the longer side of the image is no more than a specified multiple of the shorter side. The allowed range for this parameter is from 1.0 to 5.0.

### Keep Aspect Ratio

This boolean hyperparameter determines whether to preserve the original aspect ratio of an image during resizing. 

- **True (default, recommended):** The aspect ratio of the image will be maintained, ensuring the image is resized proportionally to fit within the desired dimensions without distortion.
- **False:** The image will be resized to exactly match the specified dimensions, disregarding the original aspect ratio. This may result in distortion as the image's proportions are altered.

### Batch Size

This hyperparameter specifies the number of images used in each training iteration, directly affecting how often the model parameters are updated based on the gradient of the loss function.

- **Larger batch size:** Provides more data per update, resulting in more stable and accurate gradient estimates. However, it requires more memory and computational resources.

- **Smaller batch size:** Uses less memory and computational power, allowing for faster updates. However, it introduces more noise and variance in the gradient estimates, which can lead to less stable training.

The batch size can be customized with values ranging from 1 to 32, adjusted in increments of 1. Selecting the appropriate batch size involves balancing the trade-offs to optimize training efficiency and performance.

### Num Epochs

This hyperparameter specifies the total number of epochs for training. An epoch is defined as one complete pass over the entire dataset. One epoch corresponds to a single pass through the full training dataset.

Increasing the number of epochs allows the model to learn from the data for a longer period, potentially leading to a more robust and accurate model. Since more epochs will result in longer training times, it’s important to monitor the model’s performance to avoid overfitting, which can occur if the model is trained for too many epochs.

The number of epochs can be customized with values ranging from 1 to 200, adjustable in increments of 1.

### Min Samples Per Epoch

This hyperparameter specifies the minimum number of samples processed in one epoch during training, particularly useful for very small datasets. It ensures that a sufficient number of samples are processed in each epoch to provide meaningful training updates.

It's essential to manage this hyperparameter carefully to prevent overfitting and maintain stable training. For very small datasets, a common approach is to repeat the dataset multiple times within an epoch, effectively increasing the number of training iterations and improving model learning without overfitting.
  
By setting an appropriate value for this hyperparameter, you can ensure effective training even with limited data, enhancing model performance and stability.

### Per Item Lrate

This is the initial learning rate per item; it's the rate that the model weights are changed per item. The lrate (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function.

The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is 0.0.

Properly adjusting the per item learning rate allows fine-tuning of the model’s convergence speed and stability, essential for effective training.

### Pretrained Weights

This hyperparameter specifies whether to initialize the model with pre-trained weights. You can choose from the following options:

- **None:** The model will not be initialized with weights.

- **coco (default):** The model will be initialized with weights pre-trained on the COCO (Common Objects in Context) dataset, which can accelerate training and improve performance by leveraging prior knowledge from a large and diverse dataset.

### Frozen Stages

This hyperparameter specifies which stages of the backbone network should remain frozen (i.e., their weights do not get updated) during training. Freezing certain stages can help retain pre-trained features and reduce the risk of overfitting, especially when fine-tuning a model on a new dataset.

You can choose to freeze between 1 and 4 stages, adjustable in increments of 1. By selecting the appropriate number of frozen stages, you can balance retaining valuable pre-trained features and adapting the model to new data.

### Random Resize Lower

This is the lower limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or larger than this lower limit. 

It uses the same one or two element format as `image_size`. And if it's empty, it uses `image_size`. If the original image size is smaller than the lower limit, it will not be resized, and the original size will be used.

By setting an appropriate lower limit, you can ensure that input images are resized within a desirable range, which helps in augmenting the training data and improving model robustness.

### Random Resize Upper

This is the upper limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or smaller than this upper limit. 

It uses the same one or two element format as `image_size`. And if it's empty, it uses `image_size`. If the original image size is already smaller than the upper limit, it will not be resized, and the original size will be used.

Setting an appropriate upper limit helps ensure that input images are resized within a desired range, enhancing data augmentation and contributing to more effective model training.

### Load From

This hyperparameter specifies the source path from which to load a model checkpoint as a pre-trained model.

- **Empty:** Leave this field empty to train a model from scratch.
- **coco:** Enter "coco" to load the pre-trained model from the COCO (Common Objects in Context) dataset.
- **URL:** Enter a URL to load the pre-trained model from a specified path.

Using this hyperparameter, you can easily initialize your model with pre-trained weights to accelerate training and leverage existing knowledge, or opt to start training from scratch as needed.

### Use Perclass Regression

This boolean hyperparameter determines whether to use separate coordinate regressors for each class or a single set for all classes.

- **True:** Enables per-class regression, where separate box coordinate regressors are used for each class. This means that each object class has its own dedicated set of regression parameters, allowing for more tailored and potentially accurate predictions of bounding box coordinates (e.g., x, y, width, height) specific to each class.
- **False:** A single set of box coordinate regressors is used for all classes, which simplifies the model and reduces computational complexity.

By setting this hyperparameter, you can choose between increased specificity with per-class regressors and a more streamlined model with shared regressors.

### Anchor Ratios

These define the width (w) to height (h) ratios of anchor boxes, which are predefined bounding boxes of various shapes and sizes used as reference templates in object detection.

Anchor boxes help detect objects of different scales and aspect ratios in an image. The anchor ratios determine the shapes of these boxes, enabling the object detector to effectively handle objects with diverse aspect ratios.
  
By configuring anchor ratios appropriately, you can improve the object detector's ability to accurately detect and localize objects of varying shapes and sizes within images.

### Use Focal Loss

This boolean parameter specifies whether to use focal loss or Online Hard Example Mining (OHEM) during training.

- **Focal Loss (True):** Focal loss is a modification of the standard cross-entropy loss that addresses class imbalance by introducing a modulating factor. This factor downweights the contribution of easy examples and focuses more on hard examples, improving the training of imbalanced datasets by giving more importance to challenging samples.

- **OHEM (False):** Online Hard Example Mining (OHEM) is a technique that also addresses class imbalance. Instead of using all samples in a batch, OHEM selects the hardest examples (those with the highest loss) for backpropagation. This focuses training on difficult samples, enhancing learning efficiency and effectiveness, especially when dealing with many easy background samples.

By setting this hyperparameter, you can choose between focal loss and OHEM to handle class imbalance, focusing training efforts on more challenging and informative examples.

### Pretrain Base Data

This hyperparameter specifies the pre-initialization weights for the base model. For instance, "mscoco" refers to using weights pre-trained on the Microsoft COCO dataset.

This setting allows you to initialize your model with weights trained on a large and diverse dataset like COCO, leveraging learned features and accelerating training on your specific task or dataset.

### Base Model

This refers to the foundational architecture used for the detector. Pre-trained architectures enable transfer learning, where models trained on large datasets can be fine-tuned for specific tasks with smaller datasets, saving time and resources.

Choosing the appropriate base model architecture is crucial as it forms the backbone of your detector, determining its overall performance, speed, and capability to handle various tasks.

### Continue From Eid

If specified, this parameter initializes the model with weights from a checkpoint identified by the Eid (Experiment ID).

This allows you to resume training or initialize a model with specific weights stored in a checkpoint corresponding to a particular experiment ID (Eid).