---
description: Learn about our visual embedding templates
sidebar_position: 3
---

# Visual Embedding Templates

**Learn about our visual embedding templates**
<hr />

Embedding models can be useful in their own right (for applications like clustering and visual search), or as an input to a machine learning model for a supervised task. In effect, embedding templates enable you to create your own "base models" that you can then use in your workflows.

## Clarifai_ResNet_AngularMargin

This is a powerful deep learning visual embedding template derived from the ResNet101 architecture. It incorporates the angular margin loss function, which is inspired by ArcFace, to enhance the discriminative power of the learned embeddings.

The ResNet101 architecture is a deep convolutional neural network (CNN) that belongs to the ResNet (Residual Network) family. ResNet101 is specifically designed to address the challenge of training very deep neural networks by introducing residual connections or skip connections.

ResNet101 comprises 101 layers, including convolutional layers, pooling layers, fully connected layers, and residual blocks. The network's depth facilitates the learning of highly complex features and hierarchical representations from input images. With more layers, ResNet101 can capture intricate patterns and details, making it particularly effective in tasks such as image classification, object detection, and image segmentation.

ArcFace is a face recognition method that utilizes angular margin loss to enhance the discriminative power of the learned face embeddings. It was introduced as an improvement over traditional softmax-based approaches for face recognition tasks.

In face recognition, the goal is to learn a feature representation (embedding) for each face image that captures its unique characteristics while maximizing the inter-class variations and minimizing the intra-class variations. ArcFace achieves this by introducing an angular margin loss function that explicitly encourages greater angular separability between different classes.

By leveraging ResNet101's exceptional feature extraction capabilities and combining it with the angular margin loss, Clarifai_ResNet_AngularMargin achieves state-of-the-art performance in various visual recognition tasks such as face recognition, object detection, and image retrieval.

## Clarifai_InceptionBatchNorm

This template’s model architecture is built upon the embeddings extracted from the intermediate layer of the Clarifai_InceptionBatchNorm classifier. These embeddings serve as a compact and meaningful representation of the input data, capturing important features and patterns.

The Clarifai_InceptionBatchNorm classifier itself is a deep learning model that has been trained on a large dataset for various recognition tasks, such as image classification or object detection. It is based on the InceptionBatchNorm architecture, which is a variant of the Inception architecture designed to incorporate batch normalization for improved training and generalization performance.

By extracting embeddings from the intermediate layer of the Clarifai_InceptionBatchNorm classifier, the deep learning template model can leverage the rich representations learned by the classifier. These embeddings encapsulate the semantic information about the input data, enabling the template model to perform various tasks efficiently, such as similarity matching, clustering, or retrieval.

The architecture of the deep learning template model takes these embeddings as input and builds upon them to solve specific problems. It may consist of additional layers, such as fully connected layers, convolutional layers, or recurrent layers, depending on the task at hand. These layers are typically fine-tuned or trained from scratch to adapt the embeddings to the specific requirements of the target task.

Overall, the Clarifai_InceptionBatchNorm deep learning template model architecture benefits from the powerful feature representation provided by the embeddings extracted from the intermediate layer of the Clarifai_InceptionBatchNorm classifier. This approach combines the strengths of pre-trained models with the flexibility of custom model architectures, allowing for efficient and effective solutions to a wide range of machine learning problems.

## Clarifai_ResNext

This template uses embeddings extracted from the intermediate layer of the Clarifai_ResNext classifier to enhance the capabilities of computer vision systems. These embeddings capture high-level representations of images that encode semantic information about the visual content. By leveraging these embeddings, Clarifai_ResNext empowers various use cases, such as image recognition, object detection, and image similarity search, with enhanced accuracy and robustness.

The intermediate layer of the Clarifai_ResNext classifier serves as a feature extractor, transforming raw image data into a compact and meaningful representation. This layer contains a set of neurons that are specifically designed to capture relevant visual patterns and features. Each neuron in the intermediate layer represents a specific aspect or concept within an image, such as edges, textures, or shapes. By combining the activations of these neurons, the embeddings formed in the intermediate layer provide a holistic representation of the image.

Once these embeddings are obtained, they can be used for a variety of downstream tasks. For example, in image recognition, the embeddings can be fed into a softmax classifier to predict the most likely labels or categories for the input images. Similarly, in object detection, the embeddings can be utilized by a bounding box regression algorithm to accurately localize and identify objects within an image.

Furthermore, the embeddings from Clarifai_ResNext can be employed for image similarity search. By comparing the embeddings of different images, it is possible to measure their similarity and retrieve visually similar images from a database. This enables various use cases, such as content-based image retrieval, recommendation systems, and image clustering.

