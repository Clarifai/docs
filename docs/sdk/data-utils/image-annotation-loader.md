---
description: Load annotated image datasets and convert between supported annotation formats 
sidebar_position: 1
draft: true
---

# Image Annotation Loader

**Load annotated image datasets and convert between supported annotation formats**
<hr />

The [Image Annotation Loader](https://github.com/Clarifai/examples/blob/main/Data_Utils/Image%20Annotation/image_annotation_loader.ipynb) framework enables you to load already annotated image datasets and export them directly to the Clarifai platform. It also supports converting between different annotation formats, ensuring compatibility and flexibility for your projects.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CreateDataset from "!!raw-loader!../../../code_snippets/python-sdk/datautils/create_dataset.py";
import GetDatasetInfo from "!!raw-loader!../../../code_snippets/python-sdk/datautils/get_dataset_info.py";

import Example1 from "!!raw-loader!../../../code_snippets/python-sdk/datautils/example_1.txt";


:::tip

Run the following command to clone the repository containing various examples for using the Data Utils library: `git clone https://github.com/Clarifai/examples.git`. After cloning, navigate to the **Data_Utils** folder to follow along with this tutorial.

::::

## Prerequisites

### Install Data Utils library

To begin, install the Data Utils library.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-text">
    pip install clarifai-datautils
</CodeBlock>
</TabItem>
</Tabs>

### Install Python SDK

Install the latest version of the `clarifai` Python SDK package.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-text">
    pip install --upgrade clarifai
</CodeBlock>
</TabItem>
</Tabs>

### Install Extra Dependencies

The Image Annotation Loader requires additional libraries to function properly. To keep the core library lightweight, we moved these optional dependencies under `annotations`. _(Python extras allow projects to specify additional dependencies for optional functionality.)_

To install them, run:  

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-text">
    pip install clarifai-datautils[annotations]
</CodeBlock>
</TabItem>
</Tabs>

The above command also installs [Datumaro](https://github.com/openvinotoolkit/datumaro), a dataset management framework essential for the Image Annotation Loader. Note that Datumaro requires a [Rust compiler](https://www.rust-lang.org/) to be installed on your machine for a smooth installation.

### Get a PAT

You need a PAT (Personal Access Token) key to authenticate your connection to the Clarifai platform. You can generate it in your Personal Settings page by navigating to the [Security section](https://clarifai.com/settings/security).

Then, set it as an environment variable in your script.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">
    import os
    os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE" # replace with your own PAT key 
</CodeBlock>
</TabItem>
</Tabs>

### Create a Dataset

[Create a dataset](https://docs.clarifai.com/sdk/managing-datasets#creating-datasets) on the Clarifai platform to upload your annotated image datasets.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CreateDataset}</CodeBlock>
</TabItem>
</Tabs>


## Supported Formats

Here is a table that illustrates the annotation formats that the Image Annotation Loader framework supports. 


| Annotation Type      | Format             | TASK          |
|------------------------|--------------------|--------------|
| [ImageNet](http://image-net.org/)         | imagenet           | classification |
| [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html)         | cifar              | classification |
| [MNIST](http://yann.lecun.com/exdb/mnist/)            | mnist              | classification |
| [VGGFace2](https://github.com/ox-vgg/vgg_face2)         | vgg_face2          | classification |
| [LFW](http://vis-www.cs.umass.edu/lfw/)             | lfw                | classification |
| [PASCAL VOC](http://host.robots.ox.ac.uk/pascal/VOC/voc2012/htmldoc/index.html)      | voc_detection      | detection      |
| [YOLO](https://github.com/AlexeyAB/darknet#how-to-train-pascal-voc-data)            | yolo               | detection      |
| [COCO](http://cocodataset.org/#format-data)            | coco_detection     | detection      |
| [CVAT](https://opencv.github.io/cvat/docs/manual/advanced/xml_format/)            | cvat               | detection      |
| [Kitti](http://www.cvlibs.net/datasets/kitti/index.php)           | kitti              | detection      |
| [LabelMe](http://labelme.csail.mit.edu/Release3.0)         | label_me           | detection      |
| [Open Images](https://storage.googleapis.com/openimages/web/download.html)     | open_images        | detection      |
| [Clarifai](https://github.com/Clarifai/examples/tree/main/Data_Utils)        | clarifai           | detection      |
| [COCO(segmentation)](http://cocodataset.org/#format-data) | coco_segmentation | segmentation  |
| [Cityscapes](https://www.cityscapes-dataset.com/)      | cityscapes         | segmentation  |
| [ADE](https://ade20k.csail.mit.edu/)            | ade20k2017         | segmentation  |

## Get Info About a Dataset

You can get the details of a dataset you want to upload to the Clarifai platform. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{GetDatasetInfo}</CodeBlock>
</TabItem>
</Tabs>

Note that:

- The `ImageAnnotations` class is imported from the `clarifai_datautils.image` package. This class provides utilities for working with annotated image datasets.

- The `LOCAL_FOLDER_PATH` parameter specifies the local directory path where the annotated dataset is stored.

- The `ANNOTATION_FORMAT` parameter specifies the format of the annotations. You can specify any supported annotation type. 

- The `import_from method` of the `ImageAnnotations` class is used to load the dataset from the specified local folder.


<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{Example1}</CodeBlock>
</details> 

## Upload to Clarifai