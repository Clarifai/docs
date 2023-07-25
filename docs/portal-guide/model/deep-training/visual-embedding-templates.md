---
description: Learn about our visual embedding templates
sidebar_position: 3
---

# Visual Embedding Templates

**Learn about our visual embedding templates**
<hr />

Embedding models can be useful in their own right (for applications like clustering and visual search), or as an input to a machine learning model for a supervised task. In effect, embedding templates enable you to create your own "base models" that you can then use in your workflows.

:::tip

You can customize most hyperparameters by specifying the following values:

- `minimum`—the minimum value a given parameter can take.
- `maximum`—the maximum value a given parameter can take.
- `step`—determines how much you can increment or decrement the minimum or maximum value in a single click/change.

:::

## Clarifai_ResNet_AngularMargin

This is a powerful deep learning visual embedding template derived from the ResNet101 architecture. It incorporates the angular margin loss function, which is inspired by ArcFace, to enhance the discriminative power of the learned embeddings.

The ResNet101 architecture is a deep convolutional neural network (CNN) that belongs to the ResNet (Residual Network) family. ResNet101 is specifically designed to address the challenge of training very deep neural networks by introducing residual connections or skip connections.

ResNet101 comprises 101 layers, including convolutional layers, pooling layers, fully connected layers, and residual blocks. The network's depth facilitates the learning of highly complex features and hierarchical representations from input images. With more layers, ResNet101 can capture intricate patterns and details, making it particularly effective in tasks such as image classification, object detection, and image segmentation.

ArcFace is a face recognition method that utilizes angular margin loss to enhance the discriminative power of the learned face embeddings. It was introduced as an improvement over traditional softmax-based approaches for face recognition tasks.

In face recognition, the goal is to learn a feature representation (embedding) for each face image that captures its unique characteristics while maximizing the inter-class variations and minimizing the intra-class variations. ArcFace achieves this by introducing an angular margin loss function that explicitly encourages greater angular separability between different classes.

By leveraging ResNet101's exceptional feature extraction capabilities and combining it with the angular margin loss, **Clarifai_ResNet_AngularMargin** achieves state-of-the-art performance in various visual recognition tasks such as face recognition, object detection, and image retrieval.

The **Clarifai_ResNet_AngularMargin** template supports the following hyperparameters:

- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is `32`, while the maximum is `1024`—with an incremental or decremental step of `16`.  
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `128`—with an incremental or decremental step of `1`. 
- **Init epochs**—This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.  
- **Step epochs**—This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`.  
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Num items_per_epoch**—This is the number of input images per "epoch." The default value is the number of images in the dataset.
- **Angular scale**—This is the radius hyperparameter used in Angular Margin Loss, which is a variation of the popular Softmax Loss used in deep learning tasks, particularly in face recognition problems. It is the hyperparameter that controls the margin or angular gap between different class embeddings in the angular space. This margin is used to enhance the discriminative power of the learned embeddings, allowing for better class separation during training. The minimum value it supports for customization is `16`, while the maximum is `128`—with an incremental or decremental step of `16`. 
- **Angular margin**—This is a margin hyperparameter used in Angular Margin Loss. It aims to enhance the discriminative power of the learned embeddings by enforcing larger angular separations between different classes. This helps to ensure that the model learns to distinguish between different classes. The minimum value it supports for customization is `0.1`, while the maximum is `0.9`. 
- **Embeddings size**—This is the embedding dimension to use as output from the selected model. It determines the length of the feature vectors produced by the model, which represent the learned representations of the input data. It is essential to strike a balance when selecting the embedding dimension. A smaller dimension may lead to loss of information, while a very large dimension can lead to overfitting and increased computational costs. Ultimately, the optimal embedding dimension should be determined through experimentation and evaluation of the specific task and dataset at hand.

## Clarifai_InceptionBatchNorm

This template’s model architecture is built upon the embeddings extracted from the intermediate layer of the **Clarifai_InceptionBatchNorm** classifier. These embeddings serve as a compact and meaningful representation of the input data, capturing important features and patterns.

The **Clarifai_InceptionBatchNorm** classifier itself is a deep learning model that has been trained on a large dataset for various recognition tasks, such as image classification or object detection. It is based on the InceptionBatchNorm architecture, which is a variant of the Inception architecture designed to incorporate batch normalization for improved training and generalization performance.

By extracting embeddings from the intermediate layer of the **Clarifai_InceptionBatchNorm** classifier, the deep learning template model can leverage the rich representations learned by the classifier. These embeddings encapsulate the semantic information about the input data, enabling the template model to perform various tasks efficiently, such as similarity matching, clustering, or retrieval.

The architecture of the deep learning template model takes these embeddings as input and builds upon them to solve specific problems. It may consist of additional layers, such as fully connected layers, convolutional layers, or recurrent layers, depending on the task at hand. These layers are typically fine-tuned or trained from scratch to adapt the embeddings to the specific requirements of the target task.

Overall, the **Clarifai_InceptionBatchNorm** deep learning template model architecture benefits from the powerful feature representation provided by the embeddings extracted from the intermediate layer of the **Clarifai_InceptionBatchNorm** classifier. This approach combines the strengths of pre-trained models with the flexibility of custom model architectures, allowing for efficient and effective solutions to a wide range of machine learning problems.

The **Clarifai_InceptionBatchNorm** template supports the following hyperparameters:

- **Logreg**—This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is `0`, while the maximum is `1`—with an incremental or decremental step of `1`. 
- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is `32`, while the maximum is `1024`—with an incremental or decremental step of `16`. 
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `128`—with an incremental or decremental step of `1`. 
- **Init epochs**—This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Step epochs**—This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`. 
- **Num items_per_epoch**—This is the number of input images per "epoch." The default value is the number of images in the dataset.

## Clarifai_ResNext

This template uses embeddings extracted from the intermediate layer of the **Clarifai_ResNext** classifier to enhance the capabilities of computer vision systems. These embeddings capture high-level representations of images that encode semantic information about the visual content. By leveraging these embeddings, Clarifai_ResNext empowers various use cases, such as image recognition, object detection, and image similarity search, with enhanced accuracy and robustness.

The intermediate layer of the **Clarifai_ResNext** classifier serves as a feature extractor, transforming raw image data into a compact and meaningful representation. This layer contains a set of neurons that are specifically designed to capture relevant visual patterns and features. Each neuron in the intermediate layer represents a specific aspect or concept within an image, such as edges, textures, or shapes. By combining the activations of these neurons, the embeddings formed in the intermediate layer provide a holistic representation of the image.

Once these embeddings are obtained, they can be used for a variety of downstream tasks. For example, in image recognition, the embeddings can be fed into a softmax classifier to predict the most likely labels or categories for the input images. Similarly, in object detection, the embeddings can be utilized by a bounding box regression algorithm to accurately localize and identify objects within an image.

Furthermore, the embeddings from **Clarifai_ResNext** can be employed for image similarity search. By comparing the embeddings of different images, it is possible to measure their similarity and retrieve visually similar images from a database. This enables various use cases, such as content-based image retrieval, recommendation systems, and image clustering.

The **Clarifai_ResNext** template supports the following hyperparameters:

- **Logreg**—This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is `0`, while the maximum is `1`—with an incremental or decremental step of `1`. 
- **Image size**—This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is `32`, while the maximum is `1024`—with an incremental or decremental step of `16`. 
- **Batch size**—The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is `1`, while the maximum is `128`—with an incremental or decremental step of `1`. 
- **Init epochs**—This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Step epochs**—This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Num epochs**—This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is `1`, while the maximum is `200`—with an incremental or decremental step of `1`. 
- **Per item_lrate**—This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by `lrate = batch_size * per_item_lrate`. The minimum value it supports for customization is `0.0`.
- **Num items_per_epoch**—This is the number of input images per "epoch." The default value is the number of images in the dataset.
