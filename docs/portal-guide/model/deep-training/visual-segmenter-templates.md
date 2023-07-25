---
description: Learn about our visual segmenter templates
sidebar_position: 4
---

# Visual Segmenter Templates

**Learn about our visual segmenter templates**
<hr />

Visual segmenter templates are predefined models or patterns used in computer vision tasks to perform image segmentation. Image segmentation involves dividing an image into different regions or segments based on their visual characteristics, such as color, texture, or object boundaries.

:::tip

You can customize most hyperparameters by specifying the following values:

- `minimum`—the minimum value a given parameter can take.
- `maximum`—the maximum value a given parameter can take.
- `step`—determines how much you can increment or decrement the minimum or maximum value in a single click/change.

:::

## MMSegmentation_SegFormer

This is a deep learning visual segmenter template that has configurations, datasets, and training and evaluation pipelines for various visual segmentation tasks, including semantic segmentation, instance segmentation, panoptic segmentation, and more. It is designed to be highly modular and flexible, allowing researchers and practitioners to easily experiment with different models and datasets.

Visual segmentation, also known as semantic segmentation, is a computer vision task that involves dividing an image into meaningful regions or segments and assigning each pixel within the image to a particular class or category.

MMSegmentation is a visual segmentation toolbox based on the OpenMMLab ecosystem. OpenMMLab is an open-source project that aims to provide a comprehensive set of modularized and state-of-the-art computer vision algorithms and tools. MMSegmentation is one of the sub-projects within OpenMMLab, specifically focused on visual segmentation tasks.

SegFormer is a deep learning model that has been proposed for visual segmentation. It is based on the Transformer architecture, which is originally designed for natural language processing tasks but has been successfully adapted to computer vision tasks as well. SegFormer utilizes the Transformer encoder-decoder architecture to perform pixel-wise segmentation on images. By leveraging self-attention mechanisms, the model can capture global contextual information while maintaining fine-grained spatial details.

With the **MMSegmentation_SegFormer** template, you can carry out a wide range of visual segmentation tasks. It provides you with a rich set of resources, tools, and workflows to facilitate research and development in the field of computer vision.

The **MMSegmentation_SegFormer** template supports the following hyperparameters:

- **Image size**—This is the image size for training and inference. When a single value is specified, it typically means that the images will be resized so that the minimum side (either width or height) of each image matches that value. On the other hand, when more than one value is provided, it means that the images will be resized to the exact width and height specified.
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `16`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.   
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The **lrate** (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Pretrained weights**—This specifies whether to init the model with pre-trained weights. You can choose either `None` or `ade20k` (default) for this parameter. 

