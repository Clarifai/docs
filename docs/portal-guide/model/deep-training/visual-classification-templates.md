---
description: Learn about our visual classification templates
sidebar_position: 1
---

# Visual Classification Templates

**Learn about our visual classification templates**
<hr />

Clarifai visual classification templates let you train a model to classify objects in your image inputs. Each template comes with its own hyperparameters, which you can tune to influence “how” your model learns. With hyperparameters, you can customize and fine-tune a template to suit your specific tasks and achieve better performance.


:::tip

You can customize most hyperparameters by specifying the following values:

- `minimum`—the minimum value a given parameter can take.
- `maximum`—the maximum value a given parameter can take.
- `step`—determines how much you can increment or decrement the minimum or maximum value in a single click/change.

:::

## MMClassification_ResNet_50_RSB_A1

This template is a customized variant of the ResNet-50 architecture for multimodal classification tasks. Let’s break down the components in the naming of the deep learning model architecture:

- **MMClassification:** This refers to the [MMClassification toolkit](https://github.com/open-mmlab/mmpretrain/tree/main) that is designed for image classification tasks. 

- **ResNet_50:** This refers to a specific variant of the Residual Network (ResNet) architecture. ResNet is a popular deep neural network architecture known for its skip connections that help alleviate the vanishing gradient problem. The number "50" typically denotes the depth or number of layers in the ResNet model.

- **RSB_A1:** This refers to a particular modification, adaptation, or variant of the ResNet architecture.

The **MMClassification_ResNet_50_RSB_A1** template supports the following hyperparameters:

- **Image size**—This is the image size for training and inference. ResNet uses square images. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy.
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `256`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `600`—with an incremental or decremental step of `1`. 
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The **lrate** (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Weight decay**—This is the weight decay value. It is used to prevent overfitting by penalizing large weights in the model. The minimum value it supports for customization is `0.0`, while the maximum is `1`. 
- **Per item_min_lrate**—This is the minimum learning (per item) at the end of training using the cosine schedule. The minimum value it supports for customization is `0.0`. 
- **Warmup iters**—This is the number of steps in the warmup phase, during which the learning rate gradually increases before reaching its specified value.  The minimum value it supports for customization is `0.0`. 
- **Warmup ratio**—The warmup phase learning rate multiplier, which scales the learning rate during the warmup phase.
- **Pretrained weights**—This specifies whether to init the model with pre-trained weights. You can choose either `None` or `ImageNet-1k` (default) for this parameter. 
- **Flip probability**—This is the probability that an image will be randomly flipped during training. Flipping images horizontally or vertically can augment the dataset and improve model generalization. The minimum value it supports for customization is `0.0`, while the maximum is `1`. 
- **Flip direction**—This is the direction to randomly flip during training. You can choose either `horizontal` (default) or `vertical` for this parameter. 

## Clarifai_InceptionBatchNorm

This is an image classifier template based on the Inception architecture, which has been pre-trained on a combination of the ImageNet-21K dataset and additional image classification data.

The Inception architecture, initially introduced by Google, is known for its effectiveness in image classification tasks. It utilizes various convolutional layers and pooling operations to extract hierarchical features from images, enabling accurate classification.

By leveraging transfer learning, the pretrained Inception model can be used as a starting point for training an image classifier on a specific dataset or task.

In this case, the model has been pre-trained on the ImageNet-21K dataset, which consists of millions of labeled images from a wide range of categories. This dataset serves as a general-purpose pretraining source, providing the model with a foundation of knowledge about various visual concepts and features.

Additionally, the model has been further trained or fine-tuned on additional image classification data. This suggests that specific image datasets related to the intended classification task or domain have been utilized to enhance the model's performance and adapt it to the specific context.

The template is implemented using the Batch Normalization technique. The Batch Normalization method is a normalization technique that helps accelerate training and improve model performance by reducing internal covariate shift.

By incorporating Batch Normalization into the Inception architecture, the **Clarifai_InceptionBatchNorm** classifier achieves better generalization and stability during training. It allows for efficient and accurate classification of images, leveraging the rich pretraining on the ImageNet-21K dataset and the additional image classification data.

The **Clarifai_InceptionBatchNorm** template supports the following hyperparameters:

- **Logreg**—This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is `0`, while the maximum is `1`—with an incremental or decremental step of `1`.  
- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is `32`, while the maximum is `1024`—with an incremental or decremental step of `16`. 
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `128`—with an incremental or decremental step of `1`.  
- **Init epochs**—This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Step epochs**—This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`. 
- **Num items_per_epoch**—This is the number of input images per "epoch." The default value is the number of images in the dataset.

## Clarifai_InceptionV2

This template is an implementation of the InceptionV2 architecture without any modifications, starting with randomly initialized weights. This means that the model does not utilize any pretraining on large-scale datasets like ImageNet or any other specific initialization method.

Instead, it begins with random parameter values for all the layers in the InceptionV2 network. This allows for training the model from scratch or adapting it to a specific task or dataset by optimizing the weights based on the provided training data.

The InceptionV2 architecture is a variant of the Inception architecture, which was introduced by researchers at Google as a deep convolutional neural network (CNN) for image classification tasks. InceptionV2 is an improvement upon the original Inception architecture, also known as InceptionV1.

The main goal of the InceptionV2 architecture, like its predecessor, is to efficiently capture multi-scale information from images by utilizing various convolutional layers with different receptive field sizes. This allows the network to handle objects of different scales and capture both fine-grained and high-level features simultaneously.

The **Clarifai_InceptionV2** template supports the following hyperparameters:

- **Logreg**—This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is `0`, while the maximum is `1`—with an incremental or decremental step of `1`. 
- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is `32`, while the maximum is `1024`—with an incremental or decremental step of `16`. 
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `128`—with an incremental or decremental step of `1`. 
- **Init epochs**—This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.  
- **Step epochs**—This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`. 
- **Num items_per_epoch**—This is the number of input images per "epoch." The default value is the number of images in the dataset.

## Clarifai_ResNext

This template combines the power of the ResNeXt architecture, pre-trained on ImageNet-21K, with fine-tuning on domain-specific image classification data, and tailored modifications to meet Clarifai's unique requirements.

[ResNeXt](https://github.com/open-mmlab/mmpretrain/tree/main/configs/resnext), short for "Residual Next," is a deep convolutional neural network (CNN) architecture that extends the ResNet (Residual Network) architecture. It was introduced by researchers at Facebook AI Research (FAIR) as an advancement in the field of computer vision.

ResNeXt introduces the concept of "cardinality" to enhance the representational power of the network. The cardinality represents the number of parallel paths within each network block, and it captures different types of feature interactions. Unlike the original ResNet architecture, which focuses on increasing depth or width, 
ResNeXt achieves higher model capacity by increasing the number of parallel branches, thus allowing for richer and more diverse feature representations.

The main idea behind ResNeXt is to provide a flexible and scalable architecture that can be easily adjusted based on available computational resources and requirements. By varying the cardinality parameter, ResNeXt can be customized to balance model complexity and performance.

ResNeXt architectures have demonstrated superior performance on various computer vision tasks, particularly image classification, by leveraging the power of deep residual connections, which enable efficient training of very deep networks. These networks have achieved state-of-the-art results on benchmark datasets, such as ImageNet.

This implementation is pre-trained on the ImageNet-21K dataset, which encompasses millions of labeled images across a diverse range of categories. By leveraging this large-scale pretraining, **Clarifai_ResNext** benefits from learning rich and generalizable visual representations from the vast and diverse ImageNet-21K dataset.

Additionally, **Clarifai_ResNext** has been further trained or fine-tuned on additional image classification data specific to the target domain or task. This additional training ensures that the model is adapted to the nuances and characteristics of the specific image classification problem, further improving its performance and accuracy within the desired context.

The **Clarifai_ResNext** template supports the following hyperparameters:

- **Logreg**—This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is `0`, while the maximum is `1`—with an incremental or decremental step of `1`. 
- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is `32`, while the maximum is `1024`—with an incremental or decremental step of `16`.  
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `128`—with an incremental or decremental step of `1`. 
- **Init epochs**—This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.  
- **Step epochs**—This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Num items_per_epoch**—This is the number of input images per "epoch." The default value is the number of images in the dataset.

## Clarifai_InceptionTransferEmbedNorm

This template is an advanced image classifier that leverages the power of the Inception architecture as its foundation. It has been pre-trained on the vast and diverse ImageNet-21K dataset, which provides a comprehensive understanding of various visual concepts. Additionally, to enhance its capabilities further, the model has been exposed to additional image classification data, enabling it to handle a broader range of tasks.

To adapt the pretrained model for transfer learning, the classification head and hyperparameters have undergone careful modifications and tuning. The classification head refers to the top layers of the network responsible for mapping the learned representations to specific classes or categories. By customizing this component, **Clarifai_InceptionTransferEmbedNorm** can effectively transfer its knowledge from the source domain (ImageNet-21K) to new, target domains with different sets of classes.

Furthermore, the hyperparameters of the model have been fine-tuned to optimize its performance for transfer learning tasks. Hyperparameters are adjustable settings that govern the learning process, such as learning rate, batch size, and regularization parameters. Through meticulous experimentation and validation, the hyperparameters of **Clarifai_InceptionTransferEmbedNorm** have been carefully chosen to strike a balance between preserving the general knowledge from the source domain and adapting to the unique characteristics of the target domain.

By combining the powerful Inception architecture, pre-trained on ImageNet-21K, with the tailored modifications and hyperparameter tuning for transfer learning, **Clarifai_InceptionTransferEmbedNorm** offers an effective and efficient solution for various image classification tasks, providing accurate predictions and insights.

The **Clarifai_InceptionTransferEmbedNorm** template supports the following hyperparameters:

- **Logreg**—This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is `0`, while the maximum is `1`—with an incremental or decremental step of `1`. 
- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is `32`, while the maximum is `1024`—with an incremental or decremental step of `16`. 
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `128`—with an incremental or decremental step of `1`. 
- **lrate**—This is the learning rate per minibatch. It is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The minimum value it supports for customization is `0.0`.
- **Base gradient_multiplier**—This sets the learning rate of the pre-initialized base (also sometimes called "backbone") model that generates embeddings. Learning rate controls how the weights of our network are adjusted with respect to the loss gradient. The lower the value, the slower the trip along the downward slope. A low learning rate can help ensure that local minima are not missed, but can take a long time to converge, especially if the model gets stuck on a plateau region.
- **Num epochs**—This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Num items_per_epoch**—This is the number of input images per "epoch." The default value is the number of images in the dataset.
- **Average horizontal_flips**—If set to true, the template will average the embeddings from the original image and a horizontal flip of the image to get the final embedding vectors to output.
