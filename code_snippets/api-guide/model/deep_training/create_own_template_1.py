_base_ = '/mmdetection/configs/yolof/yolof_r50_c5_8x8_1x_coco.py'
model=dict(
  bbox_head=dict(num_classes=0))
data=dict(
  train=dict(
    ann_file='',
    img_prefix='',
    classes=''
    ),
  val=dict(
    ann_file='',
    img_prefix='',
    classes=''))
optimizer=dict(
  _delete_=True,
  type='Adam',
  lr=0.0001,
  weight_decay=0.0001)
lr_config = dict(
  _delete_=True,
  policy='CosineAnnealing',
  warmup='linear',
  warmup_iters=1000,
  warmup_ratio=0.1,
  min_lr_ratio=1e-5)
runner = dict(
  _delete_=True,
  type='EpochBasedRunner',
  max_epochs=10)

