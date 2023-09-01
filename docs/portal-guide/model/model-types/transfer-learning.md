---
description: Learn about our transfer learning model type
sidebar_position: 1
---

# Transfer Learning 

**Learn about our transfer learning model type**
<hr />

**Input**: Images, videos, and texts

**Output**: [Concepts]( https://docs.clarifai.com/portal-guide/concepts)

A transfer-learning model, which we previously called an "embedding-classifier", is a type of machine learning model that uses an embedding layer to represent images, videos, or texts as low-dimensional vectors, and then uses a classifier layer to predict the class of the input.

The embedding layer takes the input image, video, or text, and converts it into a vector of numbers, where each number represents the similarity of the input to a particular word or concept. The classifier layer then takes the embedding vector as input and predicts the class of the input.

A key advantage of transfer-learning models is that they can be trained on large datasets of images, videos, or texts without requiring a lot of computational resources. This is because the embedding layer can be pre-trained on a large dataset of images, videos, or texts, and then the classifier layer can be trained on a smaller dataset of labeled images, videos, or texts.

Essentially, transfer learning leverages the knowledge gained from a pre-trained model to facilitate the learning process of a new model for a related problem. The pre-trained embedding model serves as a feature extractor that has already learned useful features from a large dataset. This knowledge is transferred to the classifier layers, enabling effective classification with minimal training data.

With transfer-learning models, you can transfer the learnings from existing models to your own custom models. This means that you can come up with your own set of custom concepts and quickly train a new model with relatively few training samples.

You may choose the transfer learning model type if you want to:

- Seamlessly transfer the knowledge gained from recognizing common objects and concepts in inputs to solve classification problems without having to train a new model from scratch.

- Take advantage of a model that has been trained on a similar task, such as object recognition in images. Then, fine-tune this pre-trained model to recognize the specific classes that align with your objectives.

- Get results in seconds, not minutes or hours—allowing you to achieve significant progress with minimal training data.

## Example use case

A security company wants to use face verification as part of its two-factor identification system. They would train a model to recognize the identities of permitted individuals. They would accomplish that by simply uploading images of the people they want to identify, adding individual names as concepts, and then training a model using the transfer learning classifier model type.
