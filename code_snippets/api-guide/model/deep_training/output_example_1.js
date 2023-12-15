model_type_fields {
  path: "train_info.params.num_gpus"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "[internal_only] the number of gpus to train with."
  placeholder: "num_gpus"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.logreg"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "Whether to use sigmoid units (logreg=1) or softmax (logreg=0)."
  placeholder: "logreg"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: RANGE
  default_value {
    number_value: 256.0
  }
  description: "Input image size (minimum side dimension)."
  placeholder: "image_size"
  internal_only: true
  model_type_range_info {
    min: 32.0
    max: 1024.0
    step: 16.0
  }
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 128.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 128.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.lrate"
  field_type: NUMBER
  default_value {
    number_value: 0.1
  }
  description: "the learning rate (per minibatch)"
  placeholder: "lrate"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.base_gradient_multiplier"
  field_type: NUMBER
  default_value {
    number_value: 0.001
  }
  description: "learning rate multipler applied to the pre-initialized backbone model weights"
  placeholder: "base_gradient_multiplier"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 20.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_items_per_epoch"
  field_type: NUMBER
  default_value {
    number_value: 0.0
  }
  description: "number of input images that constitute an \"epoch\".  Default is the number of images in the dataset."
  placeholder: "num_items_per_epoch"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.embeddings_layer"
  field_type: STRING
  default_value {
    string_value: "mod5B.concat"
  }
  description: "the embedding layer to use as output from this model."
  placeholder: "embeddings_layer"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.average_horizontal_flips"
  field_type: BOOLEAN
  default_value {
    bool_value: true
  }
  description: "if true then average the embeddings from the image and a horizontal flip of the image to get the final embedding vectors to output."
  placeholder: "average_horizontal_flips"
  internal_only: true
}
internal_only: true

id: "classification_basemodel_v1"
description: "A training template that uses Clarifais training implementation. "
model_type_fields {
  path: "train_info.params.num_gpus"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "[internal_only] the number of gpus to train with."
  placeholder: "num_gpus"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.model_cfg"
  field_type: STRING
  default_value {
    string_value: "resnext"
  }
  description: "the underlying model configuration to use."
  placeholder: "model_cfg"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.preinit"
  field_type: STRING
  default_value {
    string_value: "general-v1.5"
  }
  description: "specifies pre-initialized net to use."
  placeholder: "preinit"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.logreg"
  field_type: NUMBER
  default_value {
    number_value: 1.0
  }
  description: "Whether to use sigmoid units (logreg=1) or softmax (logreg=0)."
  placeholder: "logreg"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: RANGE
  default_value {
    number_value: 256.0
  }
  description: "Input image size (minimum side dimension)."
  placeholder: "image_size"
  internal_only: true
  model_type_range_info {
    min: 32.0
    max: 1024.0
    step: 16.0
  }
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 64.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 128.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.init_epochs"
  field_type: RANGE
  default_value {
    number_value: 25.0
  }
  description: "number of epochs to run at the initial learning rate."
  placeholder: "init_epochs"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.step_epochs"
  field_type: RANGE
  default_value {
    number_value: 7.0
  }
  description: "the number of epochs between learning rate decreases."
  placeholder: "step_epochs"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 65.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_lrate"
  field_type: NUMBER
  default_value {
    number_value: 7.8125e-05
  }
  description: "the initial learning rate per item. The overall learning rate (per step) is set to lrate = batch_size * per_item_lrate"
  placeholder: "per_item_lrate"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.num_items_per_epoch"
  field_type: NUMBER
  default_value {
    number_value: 0.0
  }
  description: "number of input images that constitute an \"epoch\".  Default is the number of images in the dataset."
  placeholder: "num_items_per_epoch"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.inference_crop_type"
  field_type: STRING
  default_value {
    string_value: "sorta2"
  }
  description: "the crop type to use for inference (used when evaluating the model)."
  placeholder: "inference_crop_type"
  internal_only: true
}
internal_only: true

id: "classification_cifar10_v1"
description: "A runner optimized for cifar10 training. Not to be used in real use cases. "
model_type_fields {
  path: "train_info.params.num_gpus"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "the number of gpus to train with."
  placeholder: "num_gpus"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: RANGE
  default_value {
    number_value: 32.0
  }
  description: "the image size to train on. This is for the minimum dimension."
  placeholder: "image_size"
  internal_only: true
  model_type_range_info {
    min: 32.0
    max: 1024.0
    step: 16.0
  }
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 128.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 128.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 65.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.inference_crop_type"
  field_type: STRING
  default_value {
    string_value: "sorta2"
  }
  description: "the crop type to use for inference (used when evaluating the model)."
  placeholder: "inference_crop_type"
  internal_only: true
}
internal_only: true

id: "Clarifai_InceptionTransferEmbedNorm"
description: "A custom visual classifier template inspired by Inception networks and tuned for speed with\nother optimizations for transfer learning. "
model_type_fields {
  path: "train_info.params.logreg"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "Whether to use sigmoid units (logreg=1) or softmax (logreg=0)."
  placeholder: "logreg"
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: RANGE
  default_value {
    number_value: 256.0
  }
  description: "Input image size (minimum side dimension)."
  placeholder: "image_size"
  model_type_range_info {
    min: 32.0
    max: 1024.0
    step: 16.0
  }
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 128.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  model_type_range_info {
    min: 1.0
    max: 128.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.lrate"
  field_type: NUMBER
  default_value {
    number_value: 0.1
  }
  description: "the learning rate (per minibatch)"
  placeholder: "lrate"
}
model_type_fields {
  path: "train_info.params.base_gradient_multiplier"
  field_type: NUMBER
  default_value {
    number_value: 0.001
  }
  description: "learning rate multipler applied to the pre-initialized backbone model weights"
  placeholder: "base_gradient_multiplier"
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 20.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_items_per_epoch"
  field_type: NUMBER
  default_value {
    number_value: 0.0
  }
  description: "number of input images that constitute an \"epoch\".  Default is the number of images in the dataset."
  placeholder: "num_items_per_epoch"
}
model_type_fields {
  path: "train_info.params.average_horizontal_flips"
  field_type: BOOLEAN
  default_value {
    bool_value: true
  }
  description: "if true then average the embeddings from the image and a horizontal flip of the image to get the final embedding vectors to output."
  placeholder: "average_horizontal_flips"
}

id: "Clarifai_ResNext"
description: "A custom visual classifier template inspired by ResNext networks. "
model_type_fields {
  path: "train_info.params.logreg"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "Whether to use sigmoid units (logreg=1) or softmax (logreg=0)."
  placeholder: "logreg"
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: RANGE
  default_value {
    number_value: 256.0
  }
  description: "Input image size (minimum side dimension)."
  placeholder: "image_size"
  model_type_range_info {
    min: 32.0
    max: 1024.0
    step: 16.0
  }
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 64.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  model_type_range_info {
    min: 1.0
    max: 128.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.init_epochs"
  field_type: RANGE
  default_value {
    number_value: 25.0
  }
  description: "number of epochs to run at the initial learning rate."
  placeholder: "init_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.step_epochs"
  field_type: RANGE
  default_value {
    number_value: 7.0
  }
  description: "the number of epochs between learning rate decreases."
  placeholder: "step_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 65.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_lrate"
  field_type: NUMBER
  default_value {
    number_value: 7.8125e-05
  }
  description: "the initial learning rate per item. The overall learning rate (per step) is set to lrate = batch_size * per_item_lrate"
  placeholder: "per_item_lrate"
}
model_type_fields {
  path: "train_info.params.num_items_per_epoch"
  field_type: NUMBER
  default_value {
    number_value: 0.0
  }
  description: "number of input images that constitute an \"epoch\".  Default is the number of images in the dataset."
  placeholder: "num_items_per_epoch"
}

id: "Clarifai_InceptionV2"
description: "A custom visual classifier template inspired by Inception-V2 networks. "
model_type_fields {
  path: "train_info.params.logreg"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "Whether to use sigmoid units (logreg=1) or softmax (logreg=0)."
  placeholder: "logreg"
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: RANGE
  default_value {
    number_value: 256.0
  }
  description: "Input image size (minimum side dimension)."
  placeholder: "image_size"
  model_type_range_info {
    min: 32.0
    max: 1024.0
    step: 16.0
  }
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 64.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  model_type_range_info {
    min: 1.0
    max: 128.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.init_epochs"
  field_type: RANGE
  default_value {
    number_value: 25.0
  }
  description: "number of epochs to run at the initial learning rate."
  placeholder: "init_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.step_epochs"
  field_type: RANGE
  default_value {
    number_value: 7.0
  }
  description: "the number of epochs between learning rate decreases."
  placeholder: "step_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 65.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_lrate"
  field_type: NUMBER
  default_value {
    number_value: 7.8125e-05
  }
  description: "the initial learning rate per item. The overall learning rate (per step) is set to lrate = batch_size * per_item_lrate"
  placeholder: "per_item_lrate"
}
model_type_fields {
  path: "train_info.params.num_items_per_epoch"
  field_type: NUMBER
  default_value {
    number_value: 0.0
  }
  description: "number of input images that constitute an \"epoch\".  Default is the number of images in the dataset."
  placeholder: "num_items_per_epoch"
}

id: "Clarifai_InceptionBatchNorm"
description: "A custom visual classifier template inspired by Inception networks tuned for speed. "
model_type_fields {
  path: "train_info.params.logreg"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "Whether to use sigmoid units (logreg=1) or softmax (logreg=0)."
  placeholder: "logreg"
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: RANGE
  default_value {
    number_value: 256.0
  }
  description: "Input image size (minimum side dimension)."
  placeholder: "image_size"
  model_type_range_info {
    min: 32.0
    max: 1024.0
    step: 16.0
  }
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 64.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  model_type_range_info {
    min: 1.0
    max: 128.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.init_epochs"
  field_type: RANGE
  default_value {
    number_value: 25.0
  }
  description: "number of epochs to run at the initial learning rate."
  placeholder: "init_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.step_epochs"
  field_type: RANGE
  default_value {
    number_value: 7.0
  }
  description: "the number of epochs between learning rate decreases."
  placeholder: "step_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 65.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_lrate"
  field_type: NUMBER
  default_value {
    number_value: 7.8125e-05
  }
  description: "the initial learning rate per item. The overall learning rate (per step) is set to lrate = batch_size * per_item_lrate"
  placeholder: "per_item_lrate"
}
model_type_fields {
  path: "train_info.params.num_items_per_epoch"
  field_type: NUMBER
  default_value {
    number_value: 0.0
  }
  description: "number of input images that constitute an \"epoch\".  Default is the number of images in the dataset."
  placeholder: "num_items_per_epoch"
}

id: "MMClassification"
description: "A training template that uses the MMClassification toolkit and a custom configuration "
model_type_fields {
  path: "train_info.params.seed"
  field_type: NUMBER
  default_value {
    number_value: -1.0
  }
  description: "[internal_only] the random seed to init training. If seed < 0, it is not set"
  placeholder: "seed"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.custom_config"
  field_type: PYTHON_CODE
  default_value {
    string_value: "\n_base_ = \'/mmclassification/configs/resnext/resnext101_32x4d_b32x8_imagenet.py\'\nrunner = dict(type=\'EpochBasedRunner\', max_epochs=60)\ndata = dict(\n    train=dict(\n        data_prefix=\'\',\n        ann_file=\'\',\n        classes=\'\'),\n    val=dict(\n        data_prefix=\'\',\n        ann_file=\'\',\n        classes=\'\'))\n"
  }
  description: "custom mmclassification config, in python config file format. Note that the \'_base_\' field, if used, should be a config file relative to the parent directory \'/mmclassification/\', e.g. \"_base_ = \'/mmclassification/configs/efficientnet/efficientnet-b8_8xb32-01norm_in1k.py\'\". The \'num_classes\' field must be included somewhere in the config. The \'data\' section should include \'train\' and \'val\' sections, each with \'ann_file\', \'data_prefix\', and \'classes\' fields with empty strings as values. These values will be overwritten to be compatible with Clarifai\'s system, but must be included in the imported config."
  placeholder: "custom_config"
}
model_type_fields {
  path: "train_info.params.concepts_mutually_exclusive"
  field_type: BOOLEAN
  default_value {
    bool_value: false
  }
  description: "whether the concepts are mutually exclusive. If true then each input is expected to only be tagged with a single concept."
  placeholder: "concepts_mutually_exclusive"
}
model_type_fields {
  path: "train_info.params.num_gpus"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "[internal_only] the number of gpus to train with."
  placeholder: "num_gpus"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: ARRAY_OF_NUMBERS
  default_value {
    list_value {
      values {
        number_value: 320.0
      }
    }
  }
  description: "the image size for inference (the training image size is defined in the mmcv config). If a single value, specifies the size of the min side."
  placeholder: "image_size"
}

id: "MMClassification_EfficientNet"
description: "A training template that uses the MMClassification toolkit and EfficientNet-B8 configuration "
model_type_fields {
  path: "train_info.params.seed"
  field_type: NUMBER
  default_value {
    number_value: -1.0
  }
  description: "[internal_only] the random seed to init training. If seed < 0, we will not set it."
  placeholder: "seed"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.num_gpus"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "[internal_only] the number of gpus to train with."
  placeholder: "num_gpus"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: NUMBER
  default_value {
    number_value: 336.0
  }
  description: "the image size for training and inference. EfficientNet works on square images."
  placeholder: "image_size"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 4.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 256.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 30.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 200.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_lrate"
  field_type: NUMBER
  default_value {
    number_value: 0.000390625
  }
  description: "the initial learning rate per item. The overall learning rate (per step) is set to lrate = batch_size * per_item_lrate"
  placeholder: "per_item_lrate"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.weight_decay"
  field_type: RANGE
  default_value {
    number_value: 0.0001
  }
  description: "the weight decay value"
  placeholder: "weight_decay"
  internal_only: true
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.momentum"
  field_type: RANGE
  default_value {
    number_value: 0.9
  }
  description: "the momentum value for the SGD optimizer"
  placeholder: "momentum"
  internal_only: true
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.pretrained_weights"
  field_type: ENUM
  default_value {
    string_value: "ImageNet-1k"
  }
  description: "whether to use pretrained weights."
  placeholder: "pretrained_weights"
  model_type_enum_options {
    id: "None"
  }
  model_type_enum_options {
    id: "ImageNet-1k"
  }
  internal_only: true
}
model_type_fields {
  path: "train_info.params.flip_probability"
  field_type: RANGE
  default_value {
    number_value: 0.5
  }
  description: "the probability an image will be flipped during training"
  placeholder: "flip_probability"
  internal_only: true
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.flip_direction"
  field_type: ENUM
  default_value {
    string_value: "horizontal"
  }
  description: "the direction to randomly flip during training."
  placeholder: "flip_direction"
  model_type_enum_options {
    id: "horizontal"
  }
  model_type_enum_options {
    id: "vertical"
  }
  internal_only: true
}
model_type_fields {
  path: "train_info.params.concepts_mutually_exclusive"
  field_type: BOOLEAN
  default_value {
    bool_value: false
  }
  description: "whether the concepts are mutually exclusive. If true then each input is expected to only be tagged with a single concept."
  placeholder: "concepts_mutually_exclusive"
  internal_only: true
}
internal_only: true

id: "MMClassification_ResNet_50_RSB_A1"
description: "A training template that uses the MMClassification toolkit and ResNet-50 (rsb-a1) configuration "
model_type_fields {
  path: "train_info.params.seed"
  field_type: NUMBER
  default_value {
    number_value: -1.0
  }
  description: "[internal_only] the random seed to init training. If seed < 0, we will not set it."
  placeholder: "seed"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.num_gpus"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "[internal_only] the number of gpus to train with."
  placeholder: "num_gpus"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: NUMBER
  default_value {
    number_value: 224.0
  }
  description: "the image size for training and inference. ResNet uses square images."
  placeholder: "image_size"
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 64.0
  }
  description: "the batch size to use during training."
  placeholder: "batch_size"
  model_type_range_info {
    min: 1.0
    max: 256.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 60.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  model_type_range_info {
    min: 1.0
    max: 600.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_lrate"
  field_type: NUMBER
  default_value {
    number_value: 1.953125e-05
  }
  description: "the initial learning rate per item. The overall learning rate (per step) is set to lrate = batch_size * per_item_lrate"
  placeholder: "per_item_lrate"
}
model_type_fields {
  path: "train_info.params.weight_decay"
  field_type: RANGE
  default_value {
    number_value: 0.01
  }
  description: "the weight decay value"
  placeholder: "weight_decay"
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_min_lrate"
  field_type: NUMBER
  default_value {
    number_value: 1.5625e-08
  }
  description: "The minimum learning (per item) at end of training using cosine schedule."
  placeholder: "per_item_min_lrate"
}
model_type_fields {
  path: "train_info.params.warmup_iters"
  field_type: NUMBER
  default_value {
    number_value: 100.0
  }
  description: "The number of steps in the warmup phase"
  placeholder: "warmup_iters"
}
model_type_fields {
  path: "train_info.params.warmup_ratio"
  field_type: NUMBER
  default_value {
    number_value: 0.0001
  }
  description: " Warmup phase learning rate multiplier"
  placeholder: "warmup_ratio"
}
model_type_fields {
  path: "train_info.params.pretrained_weights"
  field_type: ENUM
  default_value {
    string_value: "ImageNet-1k"
  }
  description: "whether to use pretrained weights."
  placeholder: "pretrained_weights"
  model_type_enum_options {
    id: "None"
  }
  model_type_enum_options {
    id: "ImageNet-1k"
  }
}
model_type_fields {
  path: "train_info.params.flip_probability"
  field_type: RANGE
  default_value {
    number_value: 0.5
  }
  description: "the probability an image will be flipped during training"
  placeholder: "flip_probability"
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.flip_direction"
  field_type: ENUM
  default_value {
    string_value: "horizontal"
  }
  description: "the direction to randomly flip during training."
  placeholder: "flip_direction"
  model_type_enum_options {
    id: "horizontal"
  }
  model_type_enum_options {
    id: "vertical"
  }
}
model_type_fields {
  path: "train_info.params.concepts_mutually_exclusive"
  field_type: BOOLEAN
  default_value {
    bool_value: false
  }
  description: "whether the concepts are mutually exclusive. If true then each input is expected to only be tagged with a single concept."
  placeholder: "concepts_mutually_exclusive"
}
recommended: true

id: "MMClassification_ResNet_50"
description: "A training template that uses the MMClassification toolkit and ResNet-50 configuration "
model_type_fields {
  path: "train_info.params.seed"
  field_type: NUMBER
  default_value {
    number_value: -1.0
  }
  description: "[internal_only] the random seed to init training. If seed < 0, we will not set it."
  placeholder: "seed"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.num_gpus"
  field_type: RANGE
  default_value {
    number_value: 1.0
  }
  description: "[internal_only] the number of gpus to train with."
  placeholder: "num_gpus"
  internal_only: true
  model_type_range_info {
    max: 1.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.image_size"
  field_type: NUMBER
  default_value {
    number_value: 224.0
  }
  description: "the image size for training and inference. ResNet works on square images."
  placeholder: "image_size"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.batch_size"
  field_type: RANGE
  default_value {
    number_value: 64.0
  }
  description: "the batch size to use per gpu during training."
  placeholder: "batch_size"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 256.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.num_epochs"
  field_type: RANGE
  default_value {
    number_value: 60.0
  }
  description: "the total number of epochs to train for."
  placeholder: "num_epochs"
  internal_only: true
  model_type_range_info {
    min: 1.0
    max: 600.0
    step: 1.0
  }
}
model_type_fields {
  path: "train_info.params.per_item_lrate"
  field_type: NUMBER
  default_value {
    number_value: 0.000390625
  }
  description: "the initial learning rate per item. The overall learning rate (per step) is set to lrate = batch_size * per_item_lrate"
  placeholder: "per_item_lrate"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.learning_rate_steps"
  field_type: ARRAY_OF_NUMBERS
  default_value {
    list_value {
      values {
        number_value: 30.0
      }
      values {
        number_value: 40.0
      }
      values {
        number_value: 50.0
      }
    }
  }
  description: "epoch schedule for stepping down learning rate"
  placeholder: "learning_rate_steps"
  internal_only: true
}
model_type_fields {
  path: "train_info.params.weight_decay"
  field_type: RANGE
  default_value {
    number_value: 0.0001
  }
  description: "the weight decay value"
  placeholder: "weight_decay"
  internal_only: true
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.momentum"
  field_type: RANGE
  default_value {
    number_value: 0.9
  }
  description: "the momentum value for the SGD optimizer"
  placeholder: "momentum"
  internal_only: true
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.pretrained_weights"
  field_type: ENUM
  default_value {
    string_value: "ImageNet-1k"
  }
  description: "whether to use pretrained weights."
  placeholder: "pretrained_weights"
  model_type_enum_options {
    id: "None"
  }
  model_type_enum_options {
    id: "ImageNet-1k"
  }
  internal_only: true
}
model_type_fields {
  path: "train_info.params.flip_probability"
  field_type: RANGE
  default_value {
    number_value: 0.5
  }
  description: "the probability an image will be flipped during training"
  placeholder: "flip_probability"
  internal_only: true
  model_type_range_info {
    max: 1.0
  }
}
model_type_fields {
  path: "train_info.params.flip_direction"
  field_type: ENUM
  default_value {
    string_value: "horizontal"
  }
  description: "the direction to randomly flip during training."
  placeholder: "flip_direction"
  model_type_enum_options {
    id: "horizontal"
  }
  model_type_enum_options {
    id: "vertical"
  }
  internal_only: true
}
model_type_fields {
  path: "train_info.params.concepts_mutually_exclusive"
  field_type: BOOLEAN
  default_value {
    bool_value: false
  }
  description: "whether the concepts are mutually exclusive. If true then each input is expected to only be tagged with a single concept."
  placeholder: "concepts_mutually_exclusive"
  internal_only: true
}
internal_only: true
