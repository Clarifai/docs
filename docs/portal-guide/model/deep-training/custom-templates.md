---
description: Learn how to create your own custom deep trained template
sidebar_position: 6
keywords: [custom training templates, deep learning custom templates, AI custom training, custom model training, deep training custom models machine learning custom templates, custom AI models, pre-trained custom templates, custom model development, custom deep learning templates, training custom AI models]
---

# Create Your Own Template

**Learn how to create your own custom deep trained template**
<hr />

The Clarifai platform empowers advanced users to create their deep trained templates. You can customize your own templates to suit your specific needs and tasks. 

This flexibility allows you to leverage Clarifai's advanced machine learning capabilities and customize various template hyperparameters—such as head, neck, backbone, and loss functions—to influence “how” your model learns. 

If you select any of the following barebone templates:

- **MMDetection**;
- **MMClassification**; or,
- **MMSegmentation**.

Then, clicked the **Show Training Settings (optional)** button, a **Custom config** field will appear that allows you to provide a Python file that details the configurations of your template. 

![](/img/others/create_custom_template_1.png)

<br />

If you click the pencil icon within the **Custom Config** field, a development environment will appear, enabling you to configure your template seamlessly without navigating away from the current screen. Additionally, you have the option to utilize the upload button, which allows you to upload a pre-configured Python file.

:::info

Choosing non-barebone templates like **MMDetection_YoloF**, **MMClassification_ResNet_50_RSB_A1**, and **MMSegmentation_SegFormer** grants you access to pre-configured templates. These templates come with default settings, allowing you to use them as is or conveniently customize their settings on the UI to align with your specific use case.

:::

For this example, we’ll demonstrate how you can create your own template using the MMDetection open source toolbox for [visual detection](https://docs.clarifai.com/portal-guide/model/deep-training/visual-detection-templates/) tasks. 

## MMDetection Configurations

[MMDetection](https://mmdetection.readthedocs.io/en/latest/overview.html), developed by OpenMMLab, is a user-friendly toolbox based on PyTorch for object detection, instance segmentation, and panoptic segmentation tasks. It is designed to facilitate research and development in the field of object detection and instance segmentation. 

MMDetection provides a comprehensive collection of state-of-the-art models, datasets, and evaluation metrics, making it a valuable resource for both academic and industrial applications.

You can configure the MMDetection toolbox and create a unique model template with its own hyperparameters. By tweaking the various settings, you can tailor the template to match your specific tasks and improve its performance.

When configuring a MMDetection file, you need to set up the following basic component types under `config/_base_`:

- Model
- Dataset
- Learning rate schedule
- Runtime

Let’s talk about each of them, and other associated components. 

### Base Configuration

To make the configuration as easy as possible, MMDetection provides base configurations for many models, which you can then customize. If used, the base config is specified by the `_base_` variable, which points to a config file relative to the parent directory `/mmdetection/`. 

You can find all available pre-build configs [here](https://github.com/open-mmlab/mmdetection/tree/v3.1.0/configs).

Here is an example:

```
_base_ = '/mmdetection/configs/yolof/yolof_r50_c5_8x8_1x_coco.py'
```

In the above example, the `_base_` field indicates that this configuration file is based on another existing configuration file located at `/mmdetection/configs/yolof/yolof_r50_c5_8x8_1x_coco.py`. 

This means that the current [configuration file](https://mmdetection.readthedocs.io/en/dev/tutorials/config.html) inherits settings and parameters from the base configuration file, and any modifications made in the current file will override or extend the base configuration. This base configuration file serves as a template or starting point, providing the fundamental settings and components for the detector model.

In this particular instance, the base configuration file defines the overall architecture of a YOLOv5 detector model, including the backbone network, neck, head, and other components.

By inheriting from this base configuration, the current file can leverage all these predefined settings and focus on modifying specific aspects of the model, such as hyperparameters, training settings, or inference options.

### Model

MMDetection contains high-quality codebases for many popular models and task-oriented modules. You can find a list of all pre-built models supported by MMDetection [here](https://github.com/open-mmlab/mmdetection/blob/main/docs/en/model_zoo.md).

MMDetection lets you categorize model components into the following different parts.

- **Backbone**—This is the part of the architecture that transforms the input images into raw feature maps. It is typically a pre-trained model, such as ResNet or MobileNet, that has been trained on a large dataset of images.
- **Neck**—This is the component that connects the backbone with heads and performs reconfigurations and refinements on the raw feature maps so that heads can further process them. 
- **DenseHead (AnchorHead/AnchorFreeHead)** —This part processes the dense locations of the feature maps fed by the neck.
- **RoIExtractor**—This part identifies the region of interest (RoI) and extracts RoI features from the feature maps.
- **RoIHead (BBoxHead/MaskHead)** —This part takes RoI features as its input and makes predictions, such as bounding boxes classification or mask prediction as per the task assigned.  To adapt the number of classes for your dataset, consider modifying the `num_classes` parameter within the `bbox_head`.
- **Loss**— This is the part in the head that measures the difference between the predictions of the model and the ground truth labels, such as GHMLoss, F1Loss, and FocalLoss. 

![](/img/others/create_custom_template_2.png)

The whole network is built as a series of pipelines so that end-to-end training is made simple with any kind of network. During training, the whole network is traversed in the forward and backward directions over iterations. 

![](/img/others/create_custom_template_3.png)

### Dataset

The data configuration section in an MMDetection file is meant to define how data is loaded and processed during training and validation. 

It specifies the number of samples processed per GPU, the number of data-loading workers, and the paths to annotation files, image directories, and class names for training and validation datasets. 

### Learning Rate Schedule

The learning rate schedule is specified in the `lr_config` section of the MMDetection configuration file. It controls how the learning rate changes during the training process.

You need to set the [learning rate scheduling policy](https://mmclassification.readthedocs.io/en/latest/tutorials/schedule.html#learning-rate-decay) to use. 

For example, you can set it to `CosineAnnealing`, which means the learning rate will follow a cosine annealing schedule. Cosine annealing is a popular learning rate schedule where the learning rate decreases and increases in a cosine-like manner over the course of training epochs. It is often used to help the model converge more effectively.

You can also incorporate a warmup strategy into the training process. This technique is used to stabilize training in the early stages. It gradually increases the learning rate from a minimal value to the desired target value, preventing large oscillations in the loss function and leading to more stable and reliable convergence. 

### Runtime

In the MMDetection configuration file, the `runner` section defines runtime-related settings for the training process. 

It specifies how the training process is organized, including details about the type of runner used, number of training epochs, and other runtime-related parameters. 

### Optimizer

In an MMDetection file, the optimizer settings are specified in the `optimizer` section. The optimizer is a crucial component of training deep learning models, responsible for updating the model's weights during the training process. 

MMDetection already supports all the [optimizers implemented in PyTorch](https://mmdetection.readthedocs.io/en/dev/tutorials/customize_runtime.html). So, you can conveniently adjust the optimizer choice, learning rate, and other hyperparameters in the `optimizer` field.

:::tip

Sometimes it's necessary to delete all the existing keys in a dictionary and replace them with a new set of keys. In MMDetection, this can be achieved by setting the `_delete_=True` flag in the target field. This flag instructs the configuration system to remove all keys in the dictionary except for the ones explicitly defined in the new configuration. If not used, the dict that is being defined is merged to the `_base_` config, which might define an invalid configuration.

:::

## Example

Here is an example of a `config.py` file for creating a custom deep-trained template using the MMDetection toolbox. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import Template1 from "!!raw-loader!../../../../code_snippets/api-guide/others/create-your-own-template.py";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Template1}</CodeBlock>
</TabItem>

</Tabs>