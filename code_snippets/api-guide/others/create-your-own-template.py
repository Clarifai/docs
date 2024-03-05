# Base Configuration File
# This configuration file extends an existing YOLOF model configuration.

_base_ = '/mmdetection/configs/yolof/yolof_r50_c5_8x8_1x_coco.py'

# Model Configuration
model = dict(
    type='YOLOF',  # Specify the YOLOF model
    pretrained='torchvision://resnet50',  # Pretrained model (if available)
    backbone=dict(
        type='ResNet',  # Specify the backbone network (e.g., 'ResNet')
        depth=50  # Specify the depth of the backbone (e.g., ResNet-50)
    ),
    neck=dict(
        type='YOLOFNeck',  # Specify the neck architecture (e.g., 'YOLOFNeck')
        in_channels=[256, 512, 1024, 2048],  # Input channels from the backbone
        out_channels=256,  # Output channels for the neck
        num_csp_blocks=4  # Number of CSP blocks in the neck
    ),
    bbox_head=dict(
        type='YOLOFHead',
        num_classes=80,  # Number of object classes in your dataset. It must be included with any value, and it will be updated based on your dataset's number of classes
        in_channels=256,  # Number of input channels from the neck
        num_levels=5,  # Number of levels used in the detection head
        reg_decoded_bbox=True,  # Whether to decode bounding box regression targets
        loss_bbox=dict(type='CIoULoss', loss_weight=1.0),  # Specify the bounding box loss type
        loss_conf=dict(type='CIoULoss', loss_weight=1.0)  # Specify the confidence loss type
        roi_feat_size=7,  # RoI feature size
        roi_out_channels=256,  # RoI feature output channels
    )
)

# Data Configuration
# This section should include 'train' and 'val' sections, each with 'ann_file', 'img_prefix', and 'classes' fields with empty strings as values
# These values will be overwritten to be compatible with Clarifai's system, but must be included in the imported config
data = dict(
    # Data Loader Configuration
    samples_per_gpu=4,  # Number of samples processed on each GPU
    workers_per_gpu=4,  # Number of data-loading workers per GPU
    train=dict(
        dataset=dict(            
            ann_file='',  # Path to training dataset annotations
            img_prefix='',  # Directory containing training images
            classes=''  # List of class names in your dataset
        ), 
    ),
    val=dict(
        dataset=dict(            
            ann_file='',  # Path to validation dataset annotations
            img_prefix='',  # Directory containing validation images
            classes=''  # List of class names in your dataset
        ),
    ),
    
)

# Optimizer Configuration
optimizer = dict(
    _delete_=True,  # Delete existing optimizer settings
    type='Adam',  # Use the Adam optimizer
    lr=0.0001,  # Set the learning rate
    weight_decay=0.0001  # Weight decay for regularization
)

# Learning Rate Schedule Configuration
lr_config = dict(
    _delete_=True,  # Delete existing learning rate schedule settings
    policy='CosineAnnealing',  # Learning rate schedule policy
    warmup='linear',  # Warm-up strategy
    warmup_iters=1000,  # Number of warm-up iterations
    warmup_ratio=0.1,  # Ratio for warm-up learning rate
    min_lr_ratio=1e-5  # Minimum learning rate ratio
)

# Runner Configuration
runner = dict(
    _delete_=True,  # Delete existing runner settings
    type='EpochBasedRunner',  # Training based on the number of epochs
    max_epochs=1  # Maximum number of training epochs
)
