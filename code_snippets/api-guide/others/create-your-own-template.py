# Base Configuration File
# This configuration file extends an existing YOLOF model configuration.

_base_ = '/mmdetection/configs/yolof/yolof_r50-c5_8xb8-1x_coco.py'

# Load from a checkpoint
load_from = 's3://clarifai-data/training/checkpoint/mmdetection/yolof_r50_c5_8x8_1x_coco_20210425_024427-8e864411.pth'

# Minimum number of samples per epoch
min_samples_per_epoch = 30

# Dataset configuration
dataset_type = 'CocoDataset'

# Model configuration
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

# Optimizer configuration
optim_wrapper = dict(
    type='OptimWrapper',  # Type of optimizer wrapper, you can switch to AmpOptimWrapper to enable mixed precision training
    optimizer=dict(  # Optimizer configuration, supports various PyTorch optimizers, please refer to https://pytorch.org/docs/stable/optim.html#algorithms
        type='SGD',  # SGD
        lr=0.001875,  # Base learning rate
        momentum=0.9,  # SGD with momentum
        weight_decay=0.0001,  # Weight decay
    ),
    paramwise_cfg=dict(
        norm_decay_mult=0.0, custom_keys=dict(backbone=dict(lr_mult=0.3333))
    ),
    clip_grad=dict(
        max_norm=8, norm_type=2
    ),  # Configuration for gradient clipping, set to None to disable. For usage, please see https://mmengine.readthedocs.io/en/latest/tutorials/optimizer.html
)

# Parameter scheduler configuration
param_scheduler = [
    dict(
        type='LinearLR',  # Use linear learning rate warmup
        start_factor=0.00066667,  # Coefficient for learning rate warmup
        by_epoch=False,  # Update the learning rate during warmup at each iteration
        begin=0,  # Start updating the parameters from the first iteration
        end=500,  # End the warmup at the 500th iteration
    ),
    dict(
        type='MultiStepLR',  # Use multi-step learning rate strategy during training
        by_epoch=True,
        begin=0,
        end=12,  # Ending at the 12th epoch
        milestones=[8, 12],  # Learning rate decay at which epochs
        gamma=0.1,  # Learning rate decay coefficient
    ),
]

# Hook configuration
custom_hooks = [
    dict(type='CheckInvalidLossHook', interval=50)
]  # Regularly checks if the loss is valid during training; checks every 50 iterations

# Dataset and evaluator configuration
train_pipeline = [  # Training data processing pipeline
    dict(type='LoadImageFromFile'),  # First pipeline to load images from file path
    dict(type='LoadAnnotations', with_bbox=True),  # Second pipeline to load annotations for current image
    dict(type='Resize', scale=(768, 512), keep_ratio=1.5),  # Pipeline that resizes the images and their annotations
    dict(type='RandomFlip', prob=0.5),  # Augmentation pipeline that flips the images and their annotations
    dict(type='RandomShift', prob=0.5, max_shift_px=32),
    dict(type='PackDetInputs'),  # Pipeline that formats the annotation data and decides which keys in the data should be packed into data_samples
]

test_pipeline = None  # Testing data processing pipeline

train_dataloader = dict(  # Train dataloader config
    batch_size=16,  # Batch size of a single GPU
    persistent_workers=True,  # If True, the dataloader will not shut down the worker processes after an epoch end, which can accelerate training speed
    sampler=dict(
        type='DefaultSampler', shuffle=True
    ),  # Default sampler, supports both distributed and non-distributed training
    batch_sampler=dict(
        type='AspectRatioBatchSampler'
    ),  # Default batch_sampler, used to ensure that images in the batch have similar aspect ratios, so as to better utilize graphics memory
    dataset=dict(  # Train dataset config
        type=dataset_type,
        data_root='',
        ann_file='',  # Path of annotation file
        data_prefix=dict(img=''),  # Prefix of image path
        metainfo=dict(classes=()),
        filter_cfg=dict(
            filter_empty_gt=True, min_size=32
        ),  # Config of filtering images and annotations
        pipeline=train_pipeline,
    ),
)
# In version 3.x, validation and test dataloaders can be configured independently
val_dataloader = None  # Validation dataloader config

val_evaluator = None  # Validation evaluator config

# Training and testing configuration
train_cfg = dict(
    type='EpochBasedTrainLoop',  # Type of training loop, please refer to https://github.com/open-mmlab/mmengine/blob/main/mmengine/runner/loops.py
    max_epochs=15,  # Maximum number of training epochs
    val_interval=1,  # Validation intervals. Run validation every epoch
)

default_hooks = dict(
    checkpoint=dict(type='CheckpointHook', max_keep_ckpts=2)
)  # CheckpointHook is a default hook that saves checkpoints at specified intervals. To limit the number of saved checkpoints, use the max_keep_ckpts parameter, which deletes older checkpoints once the limit is exceeded

test_cfg = dict(type='TestLoop')  # Type of testing loop

val_cfg = None  # Type of validation loop
