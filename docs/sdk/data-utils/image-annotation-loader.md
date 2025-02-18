---
description: Load existing annotated image datasets and convert between supported formats
sidebar_position: 1
---

# Image Annotation Loader

**Load existing annotated image datasets and convert between supported formats**
<hr />

The [Image Annotation Loader](https://github.com/Clarifai/examples/blob/main/Data_Utils/Image%20Annotation/image_annotation_loader.ipynb) framework, part of the Data Utils library, enables you to load already annotated image datasets and upload them to the Clarifai platform. 

This framework eliminates the hurdle of format incompatibility by supporting a wide range of industry-standard annotation formats; you can also use it to convert between different annotation formats. 

This allows seamless integration of existing labeled datasets, regardless of the initial annotation tool used. It also facilitates a smooth upload process, enabling you to leverage the Clarifai platform's infrastructure for various use cases.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

import CreateDataset from "!!raw-loader!../../../code_snippets/python-sdk/datautils/create_dataset.py";
import GetDatasetInfo from "!!raw-loader!../../../code_snippets/python-sdk/datautils/get_dataset_info.py";
import UploadToClarifai from "!!raw-loader!../../../code_snippets/python-sdk/datautils/upload_to_clarifai.py";
import DownloadFromKaggle from "!!raw-loader!../../../code_snippets/python-sdk/datautils/download_from_kaggle.py";
import UploadFromKaggle from "!!raw-loader!../../../code_snippets/python-sdk/datautils/upload_from_kaggle.py";
import ConvertDataset from "!!raw-loader!../../../code_snippets/python-sdk/datautils/convert_dataset.py";
import ExportClarifai1 from "!!raw-loader!../../../code_snippets/python-sdk/datautils/export_clarifai_1.py";
import ExportClarifai2 from "!!raw-loader!../../../code_snippets/python-sdk/datautils/export_clarifai_2.py";
import SupportedFormats from "!!raw-loader!../../../code_snippets/python-sdk/datautils/supported_formats.py";
import FormatDetection from "!!raw-loader!../../../code_snippets/python-sdk/datautils/format_detection.py";

import Example1 from "!!raw-loader!../../../code_snippets/python-sdk/datautils/example_1.txt";
import Example2 from "!!raw-loader!../../../code_snippets/python-sdk/datautils/example_2.txt";
import Example3 from "!!raw-loader!../../../code_snippets/python-sdk/datautils/example_3.txt";

:::tip

Run the following command to clone the repository containing various examples for using the Data Utils library: `git clone https://github.com/Clarifai/examples.git`. After cloning, navigate to the **Data_Utils** folder to follow along with this tutorial.

::::

## Prerequisites

### Install Python SDK and Data Utils 

Install the latest version of the `clarifai` Python SDK package. Also, install the Data Utils library.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-text">
    pip install --upgrade clarifai
    pip install clarifai-datautils
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

[Create a dataset](https://docs.clarifai.com/sdk/managing-datasets#creating-datasets) on the Clarifai platform to use for uploading your annotated image datasets.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CreateDataset}</CodeBlock>
</TabItem>
</Tabs>


## Utility Features​

### Supported Formats

You can retrieve and display all the annotation formats that the Image Annotation Loader framework supports. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{SupportedFormats}</CodeBlock>
</TabItem>
</Tabs>

Note that:

- The `ImageAnnotations` class is imported from the `clarifai_datautils.image` package. This class provides utilities for working with annotated image datasets.

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{Example2}</CodeBlock>
</details> 

Here is a table that illustrates the annotation formats that the framework supports. 


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

### Format Detection​

You can identify the annotation format that a dataset uses. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{FormatDetection}</CodeBlock>
</TabItem>
</Tabs>

Note that:

- The `LOCAL_FOLDER_PATH` parameter specifies the local directory path where the annotated dataset is stored.

<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{Example3}</CodeBlock>
</details> 

### Dataset Information​

You can get the details of a dataset you want to upload to the Clarifai platform. 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{GetDatasetInfo}</CodeBlock>
</TabItem>
</Tabs>

Note that:

- The `import_from` method of the `ImageAnnotations` class is used to load the dataset from the specified local folder.

- The `format` parameter specifies the format of the annotations. You can specify any supported annotation type. 


<details>
  <summary>Output Example</summary>
    <CodeBlock className="language-text">{Example1}</CodeBlock>
</details> 

## Uploading to Clarifai

To upload a pre-labeled dataset from your local environment to the Clarifai platform, you need to initialize the `Dataset` object and specify where the dataset will be uploaded — using the Python SDK library. 

Then, call the `upload_dataset()` method on the `Dataset` object. This method takes a `dataloader` as an argument, which iterates over the dataset and yield data in a format compatible with the Clarifai platform.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{UploadToClarifai}</CodeBlock>
</TabItem>
</Tabs>

## Uploading From Kaggle to Clarifai

You can download a dataset from [Kaggle](https://www.kaggle.com/datasets) and upload it to the Clarifai platform. To begin, install the `opendatasets` Python package, which enables direct dataset downloads from Kaggle.

<Tabs>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-text">
    pip install -q opendatasets
</CodeBlock>
</TabItem>
</Tabs>

Next, download the dataset from Kaggle. For example, here is how you could download this [dogs-vs-wolves](https://www.kaggle.com/datasets/harishvutukuri/dogs-vs-wolves) dataset.  

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{DownloadFromKaggle}</CodeBlock>
</TabItem>
</Tabs>

Then, you can upload it to Clarifai.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{UploadFromKaggle}</CodeBlock>
</TabItem>
</Tabs>

## Convert Between Supported Formats

You can convert datasets between various annotation formats in your local development environment. For example, you can convert a dataset from COCO format to VOC format.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ConvertDataset}</CodeBlock>
</TabItem>
</Tabs>

## Export a Clarifai Dataset to Another Format

You can export a dataset version from the Clarifai platform and convert it into various formats. This process involves two simple steps.

First, use the Clarifai SDK to export the dataset from the platform. The dataset will be downloaded as a ZIP file to your specified local directory. If the directory does not already exist, it will be automatically created for you.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ExportClarifai1}</CodeBlock>
</TabItem>
</Tabs>

Next, extract the contents of the ZIP file to a folder. Then, pass the folder path to `ImageAnnotations` and convert the dataset into your desired format.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{ExportClarifai2}</CodeBlock>
</TabItem>
</Tabs>