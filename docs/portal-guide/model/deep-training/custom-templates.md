---
description: Learn how to create your own custom deep fine-tuned template
sidebar_position: 6
keywords: [custom training templates, deep learning custom templates, AI custom training, custom model training, deep training custom models machine learning custom templates, custom AI models, pre-trained custom templates, custom model development, custom deep learning templates, training custom AI models]
---

# Advanced Config

**Learn how to create your own custom deep fine-tuned template**
<hr />

The Clarifai platform empowers advanced users to create their deep fine-tuned templates. You can customize your own templates to suit your specific needs and tasks. 

This flexibility allows you to leverage Clarifai's advanced machine learning capabilities and customize various template hyperparameters to influence “how” your model learns. 

If you select any of the following barebone templates when setting up a visual detection, visual classification, or  visual segmentation model:

- **MMDetection_AdvancedConfig**;
- **MMClassification_AdvancedConfig**; or,
- **MMSegmentation_AdvancedConfig**.

Then, click the **Show Training Settings (optional)** button, a **Custom config** field will appear that allows you to provide a Python file that details the configurations of your template. 

![](/img/others/create_custom_template_1.png)

<br />

If you click the pencil icon within the **Custom Config** field, a development environment will appear, enabling you to configure your template seamlessly without navigating away from the current screen. You can also click the upload button to upload a pre-configured Python file.

:::warning info

Choosing non-barebone templates like [**MMDetection_YoloF**](https://docs.clarifai.com/portal-guide/model/deep-training/visual-detection-templates), [**MMClassification_ResNet_50_RSB_A1**](https://docs.clarifai.com/portal-guide/model/deep-training/visual-classification-templates), or [**MMSegmentation_SegFormer**](https://docs.clarifai.com/portal-guide/model/deep-training/visual-segmenter-templates) grants you access to pre-configured templates. These templates come with default settings, allowing you to use them as is or conveniently customize their settings on the UI to align with your specific use case.

:::

---

:::note

In this example, we’ll demonstrate how to create your own template using the MMDetection open-source toolbox for visual detection tasks. You can also adapt these steps to create customized templates for visual classification and visual segmentation tasks.

:::

---

## MMDetection 

[MMDetection](https://mmdetection.readthedocs.io/en/latest/overview.html) is a powerful open-source toolbox developed as part of the OpenMMLab project. It is based on PyTorch and provides a flexible and extensible framework for object detection and instance segmentation tasks.

You can configure the MMDetection toolbox and create a unique model template with its own hyperparameters. By tweaking the various settings, you can tailor the template to match your specific object detection tasks.

Let's demonstrate how you can leverage MMDetection's flexibility to create a custom training configuration file for the [YOLOF](https://github.com/open-mmlab/mmdetection/tree/v3.1.0/configs/yolof) model, tailored to a specific dataset and training requirements.

You can check the completed Python configuration file at the bottom of this page.

:::tip

[Click here](https://mmdetection.readthedocs.io/en/dev-3.x/user_guides/config.html) to learn more about how to configure the MMDetection toolbox.

:::

### Base Configuration

MMDetection uses a modular configuration system that allows you to easily customize and extend configurations. It provides base configurations for many models, which you can then customize conveniently. You can find all available pre-build configs [here](https://github.com/open-mmlab/mmdetection/tree/v3.1.0/configs).

You can base your custom configurations on existing ones by using the ` _base_` variable, which points to a config file relative to the parent directory `/mmdetection/`. This inheritance mechanism lets you leverage tried-and-tested configurations while customizing specific components.

Here is an example:

```python
_base_ = '/mmdetection/configs/yolof/yolof_r50-c5_8xb8-1x_coco.py'
```

In the above example, the `_base_` field indicates that this configuration file is based on another existing configuration file located at `/mmdetection/configs/yolof/yolof_r50-c5_8xb8-1x_coco.py`. This means that the current [configuration file](https://mmdetection.readthedocs.io/en/dev/tutorials/config.html) inherits settings and parameters from the existing YOLOF model with a ResNet-50 backbone trained on the COCO dataset. 

This base configuration file serves as a template or starting point, providing the fundamental settings and components for the detector model — and any modifications made in the current file will override or extend the base configuration.

### Load From a Checkpoint

You can specify a source URL to load a model checkpoint as a pre-trained model. This allows you to initialize your model with pre-trained weights, accelerating training and leveraging existing knowledge.

> After training a model version, a checkpoint file is typically created. You can then perform [incremental training](https://docs.clarifai.com/api-guide/model/deep-training/#incrementally-train-a-model) using this checkpoint, updating your model with new data without retraining from scratch.

You can upload your own pre-trained checkpoint to a URL and load it as follows:

```python
load_from='<url_with_checkpoint_file>'
```

### Minimum Samples Per Epoch

You can specify the minimum number of samples to be processed in one epoch during training, particularly useful for very small datasets. This ensures that a sufficient number of samples are processed in each epoch to provide meaningful training updates.

Here is an example:

```python
min_samples_per_epoch = 30
``` 

### Dataset Configuration

You can define the type of dataset to be used. For this example, let's set it to 'CocoDataset', which is a common dataset format for object detection tasks.

```python
dataset_type = 'CocoDataset'
```

### Model Configuration

This is the most vital part of the detection model. It defines the architecture and various key components of the deep learning model.

Here are some of the neural network components you can set using the `model` field: 

- **type** — MMDetection contains high-quality codebases for many popular models and task-oriented modules, which you can specify to customize your detection model. You can find a list of all the pre-built model types it supports [here](https://github.com/open-mmlab/mmdetection/blob/main/docs/en/model_zoo.md).
- **data_preprocessor** — Specifies how images are preprocessed before feeding them to the model. It's responsible for processing a batch of data output by the dataloader. Examples of attributes you can specify include mean subtraction, standard deviation normalization, converting BGR images to RGB, and padding masks.
- **backbone** — This is the part of the architecture that transforms the input images into raw feature maps. It is typically a pre-trained model, such as ResNet-50 or MobileNet, that has been trained on a large dataset of images. 
- **neck** — This is the component that connects the backbone with heads and performs reconfigurations and refinements on the raw feature maps so that heads can further process them.
- **bbox_head** — Defines the head of the model responsible for bounding box predictions. The `num_classes` field, which specifies the number of object classes in your dataset for classification, must be included with any value in order to be compatible with Clarifai's system.

Here is an example:

```python
model = dict(
    type='YOLOF',  # Specifies that the model type is YOLOF
    data_preprocessor=dict(
        type='DetDataPreprocessor',  # Specifies the type of data preprocessor
        mean=[123.675, 116.28, 103.53],  # Mean values used to pre-train the backbone models, ordered in R, G, B
        std=[1.0, 1.0, 1.0],  # Standard variance used to pre-train the backbone models, ordered in R, G, B
        bgr_to_rgb=True,  # Whether to convert image from BGR to RGB
        pad_mask=True,  # Whether to pad instance masks
        pad_size_divisor=32,  # The size of the padded image should be divisible by pad_size_divisor, ensuring compatibility with the network's downsampling operations
    ),
    backbone=dict(
        type='ResNet',  # Specifies the backbone network (e.g., 'ResNet')
        depth=50,  # Specify the depth of the backbone (e.g., ResNet-50)
        frozen_stages=1,  # The first stage of the backbone will not be updated during training, helping to preserve low-level features
        init_cfg=dict(),  # Indicates how the weights of the backbone network are initialized
    ),
    neck=dict(
        block_dilations=[2, 4, 6, 8],
        block_mid_channels=128,
        in_channels=2048,
        num_residual_blocks=4,
        out_channels=512,
        type='DilatedEncoder'
    ),
    bbox_head=dict(
        anchor_generator=dict(
            ratios=[1.0],
            scales=[1, 2, 4, 8, 16],
            strides=[32],
            type='AnchorGenerator'
        ),
        bbox_coder=dict(
            add_ctr_clamp=True,
            ctr_clamp=32,
            target_means=[0.0, 0.0, 0.0, 0.0],
            target_stds=[1.0, 1.0, 1.0, 1.0],
            type='DeltaXYWHBBoxCoder'
        ),
        in_channels=512,
        loss_bbox=dict(loss_weight=1.0, type='GIoULoss'),
        loss_cls=dict(
            alpha=0.25,
            gamma=2.0,
            loss_weight=1.0,
            type='FocalLoss',
            use_sigmoid=True
        ),
        num_classes=80,
        reg_decoded_bbox=True,
        type='YOLOFHead'
    ),
)
```
### Optimizer Configuration

In an MMDetection file, the optimizer settings are specified using the `optim_wrapper` field. The optimizer is a crucial component of training deep learning models, and is responsible for updating the model's weights during the training process. 

MMDetection already supports all the [optimizers implemented in PyTorch](https://mmdetection.readthedocs.io/en/dev/tutorials/customize_runtime.html). So, you can conveniently adjust the optimizer choice, learning rate, and other hyperparameters.

Here is an example:

```python
optim_wrapper = dict(
    type="OptimWrapper",  # Type of optimizer wrapper, you can switch to AmpOptimWrapper to enable mixed precision training
    optimizer=dict(  # Optimizer configuration, supports various PyTorch optimizers, please refer to https://pytorch.org/docs/stable/optim.html#algorithms
        type="SGD",  # SGD
        lr=0.001875,  # Base learning rate
        momentum=0.9,  # SGD with momentum
        weight_decay=0.0001,
    ),  # Weight decay
    paramwise_cfg=dict(
        norm_decay_mult=0.0, custom_keys=dict(backbone=dict(lr_mult=0.3333))
    ),
    clip_grad=dict(
        max_norm=8, norm_type=2
    ),  # Configuration for gradient clipping, set to None to disable. For usage, please see https://mmengine.readthedocs.io/en/latest/tutorials/optimizer.html
)

```
### Parameter Scheduler Configuration

The [`param_scheduler`](https://mmengine.readthedocs.io/en/latest/tutorials/param_scheduler.html) field in MMDetection is used to configure the strategies for adjusting optimization hyperparameters during training, such as learning rate and momentum. By specifying different types of schedulers, you can control how these parameters change over time to improve training efficiency and model performance. 

You can combine multiple schedulers, such as linear warmup and multi-step decay, to create a tailored parameter adjustment strategy that suits your specific training requirements. This flexibility allows for fine-tuning of the learning process, helping to achieve better convergence and more accurate models.

Here is an example:

```python
param_scheduler = [
    dict(
        type='LinearLR',  # Use linear learning rate warmup
        start_factor=0.00066667, # Coefficient for learning rate warmup
        by_epoch=False,  # Update the learning rate during warmup at each iteration
        begin=0,  # Start updating the parameters from the first iteration
        end=500),  # End the warmup at the 500th iteration
    dict(
        type='MultiStepLR',  # Use multi-step learning rate strategy during training
        by_epoch=True,  
        begin=0,   
        end=12,  # Ending at the 12th epoch
        milestones=[8,12],  # Learning rate decay at which epochs
        gamma=0.1  # Learning rate decay coefficient
        )  
]
```
### Hook Configuration

[Hooks](https://mmengine.readthedocs.io/en/latest/tutorials/hook.html) in MMDetection allow you to set specific mount points in your code where additional functions can be executed. When the program reaches these points, all methods registered to the hook are automatically called.

If the built-in hooks provided by the MMEngine do not meet your needs, you can create custom hooks.

For example, you can create a custom hook to check whether the loss value is valid (i.e., not infinite) during training. This check will be performed after each training iteration. 

```python
custom_hooks = [dict(type='CheckInvalidLossHook', interval=50)]  # Regularly checks if the loss is valid during training; checks every 50 iterations
```

This configuration ensures that the loss validity is monitored at regular intervals, helping to detect and address any issues promptly during training.

### Dataset and Evaluator Configuration

In the MMEngine's training pipeline, [datasets and dataloaders](https://mmengine.readthedocs.io/en/latest/tutorials/dataset.html) are essential components. Dataloaders are needed for training, validation, and testing of the runner. To build a dataloader, you need to configure both the dataset and the data pipeline.

These concepts are derived from and consistent with PyTorch. Typically:

- **Dataset**: Defines the quantity, parsing, and preprocessing of the data.
- **Dataloader**: Iteratively loads data based on settings such as `batch_size`.

Datasets are encapsulated with dataloaders, and they together constitute the data source for the model.

[Evaluators](https://mmengine.readthedocs.io/en/latest/tutorials/evaluation.html) are used to compute metrics for the trained model on the validation and testing datasets. Quantitative evaluation of model accuracy during validation and testing is crucial. This is done by specifying the evaluation metrics in the configuration file. 

Here is an example:

```python
train_pipeline = [ # Training data processing pipeline
    dict(type='LoadImageFromFile'), # First pipeline to load images from file path
    dict(type='LoadAnnotations', with_bbox=True), # Second pipeline to load annotations for current image
    dict(type='Resize', scale=(768,512), keep_ratio=1.5), # Pipeline that resizes the images and their annotations
    dict(type='RandomFlip', prob=0.5), # Augmentation pipeline that flips the images and their annotations
    dict(type='RandomShift', prob=0.5, max_shift_px=32),
    dict(type='PackDetInputs') # Pipeline that formats the annotation data and decides which keys in the data should be packed into data_samples
]

test_pipeline = None  # Testing data processing pipeline

train_dataloader = dict( # Train dataloader config
    batch_size=16, # Batch size of a single GPU
    persistent_workers=True,  # If True, the dataloader will not shut down the worker processes after an epoch end, which can accelerate training speed
    sampler=dict(type='DefaultSampler', shuffle=True),  # Default sampler, supports both distributed and non-distributed training
    batch_sampler=dict(type='AspectRatioBatchSampler'),  # Default batch_sampler, used to ensure that images in the batch have similar aspect ratios, so as to better utilize graphics memory
    dataset=dict( # Train dataset config
        type=dataset_type,
        data_root='',
        ann_file='', # Path of annotation file
        data_prefix=dict(img=''), # Prefix of image path
        metainfo=dict(classes=()),
        filter_cfg=dict(filter_empty_gt=True, min_size=32), # Config of filtering images and annotations
        pipeline=train_pipeline)
    )
# In version 3.x, validation and test dataloaders can be configured independently
val_dataloader = None  # Validation dataloader config

val_evaluator = None # Validation evaluator config

```

### Training and Testing Configuration 

The MMEngine’s runner uses `Loop` to control the training, validation, and testing processes. This modular configuration allows users to set parameters like the maximum number of training epochs and validation intervals. 

Here is an example:

```python
train_cfg = dict(
    type='EpochBasedTrainLoop',  # Type of training loop, please refer to https://github.com/open-mmlab/mmengine/blob/main/mmengine/runner/loops.py
    max_epochs=15,  # Maximum number of training epochs
    val_interval=1  # Validation intervals. Run validation every epoch
)

default_hooks = dict(checkpoint=dict(type='CheckpointHook', max_keep_ckpts=2)) # CheckpointHook is default hook that saves checkpoints at specified intervals. To limit the number of saved checkpoints, use the max_keep_ckpts parameter, which deletes older checkpoints once the limit is exceeded

test_cfg = dict(type='TestLoop')  # Type of testing loop

val_cfg = None  # The type of validation loop
```

## Configuration File Example

Here is the final `config.py` file from the previous steps for creating an advanced configuration template using the MMDetection toolbox.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import Template1 from "!!raw-loader!../../../../code_snippets/api-guide/others/create-your-own-template.py";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{Template1}</CodeBlock>
</TabItem>

</Tabs>