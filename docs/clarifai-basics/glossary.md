---
description: Glossary of key terminology to know when working with the Clarifai Platform
sidebar_position: 2
---

# Key Terminology to Know

**Glossary of key terminology to know when working with the Clarifai Platform**
<hr />

## A/B Testing

A statistical way of comparing techniques. A/B testing aims to determine not only which technique performs better but also to understand whether the difference is statistically significant.

## API Key

Essentially a “password” for accessing the API. Accounts are billed for API calls, and this helps us keep track of activity.

## Accuracy 

The fraction of correct predictions a model got right. The goal of any model is to get it to see the world as you see it.

- In Multi-class classification, accuracy is determined by the number of correct predictions divided by the total number of examples.
- In Binary classification, or for two mutually exclusive classes, accuracy is determined by the number of true positives added to the number of true negatives, divided by the total number of examples.

## AI Lake

A centralized platform designed to consolidate, organize, and manage all your AI assets, including models, annotations, datasets, workflows, and user interfaces. It enables seamless collaboration between teams, fostering AI adoption and reusability across the enterprise. With AI-powered indexing, it automatically organizes massive amounts of data objects and makes them easily searchable. 

The platform supports dataset versioning and lineage tracking for all AI assets, ensuring control over access, modifications, and deletions. AI Lakes aim to make AI applications reproducible by allowing users to recreate results using input data, code, and configurations. 

Built on enterprise-grade infrastructure with 99.999% uptime, it integrates seamlessly with major cloud providers like AWS, GCP, and Azure, as well as on-premises and air-gapped systems. AI Lakes accelerate AI development by providing data scientists with the necessary tools to build accurate models without redundant efforts, promoting collaboration and making AI assets easily findable and reusable. Furthermore, AI Lakes enhance AI governance by offering auditable and reproducible AI solutions with comprehensive provenance and change history tracking.

## Application

An application is literally what it sounds like: an application of AI to an existing challenge. It’s a self-contained project for storing and handling, data, annotations, models, concepts, datasets, workflows (chaining of models together), and searches.

An operation performed in one application will return results from data within that application, but will be blind to data in other applications. You can create as many applications as you like and can divide your use among them to segment data into collections and manage access accordingly. Usually, you would create a new application for each new set of related tasks you want to accomplish.

## Backpropagation 

The main algorithm used for performing gradient descent on neural networks. Short for "backward propagation of errors," it’s an algorithm for supervised learning of artificial neural networks using gradient descent. Given an artificial neural network and an error function, the method calculates the gradient of the error function with respect to the neural network weights.

## Base workflow

When you add an input to your app, the base workflow of your app computes the outputs from all the models in that workflow and indexes those outputs. Those indexed outputs are what incur your monthly indexing fee, and enable search and training on top of the base workflow models.

## Bias

Occurs when the scope of your training data is *too narrow*. If you only see green apples, you’ll assume that all apples are green and think red apples were another kind of fruit. If the training data contains only a small number of examples, it’ll react accordingly, taking it as truth. Small datasets make for a smaller worldview.

## Binary Classification/Mutually Exclusive 

A type of classification task that outputs one of two mutually exclusive classes. For example, a machine learning model that evaluates email messages and outputs either "spam" or "not spam" is a binary classifier. 

**Mutual Exclusivity** means the outcomes are disjoint if they cannot both be true. When classes are referred to as “mutually exclusive”, this means that the neural network will only predict an input as a single concept, and no other classes or concepts. 

In this case, there is no intersection between any of the classes for a model. For instance, a network may classify an image as a cat or dog, but not both.

If the goal of a model is to recognize only ONE concept for an input, making the concepts in your model mutually exclusive will give you stronger, more accurate predictions.

## Bucketing 

Converting a feature into multiple binary features called buckets or bins, typically based on value range. For example, concepts can be moved into “bins” of outcomes, based on prediction return values.

## Calibration Layer

A post-prediction adjustment, usually to account for [bias](#bias).

## Classification Model 

A type of machine learning model for distinguishing among two or more discrete classes.

## Classification Threshold 

A value used to separate the positive class from the negative class of predictions.

## Collaboration

Collaboration is a functionality that provides you with the ability to share your apps so that you can work with your team members to label data, create models, and more. This feature comes with full control of the permissions available in your apps, which allows you to manage the capabilities and information available to each user.

## Commands 

The actions that enable a user to execute a task.

## Community

The Clarifai Community is a low-code, no-code platform that allows you to discover, build, and share AI models, workflows, and app components with confidence. It’s a modern portal that is built for the needs, challenges, and opportunities of today’s AI industry.

## Concept

A concept is something that describes an entity in the physical world, similar to a “tag” or “keyword”. Concepts are also known as "classes" in the field of machine learning.

You can use a concept to annotate an input if that input has that entity. You can also add it to a model if you want that model to be able to recognize that entity. The data in these concepts give the model something to “observe” about the keyword, and learn from.

## Confusion Matrix 

A nxn table that summarizes how successful a classification model's predictions were; that is, the correlation between the label and the model's classification. Concepts that co-occur, or are similar, may appear as cluster on the matrix. On the other hand, exclusive or dissimilar concepts should not form a cluster. 

## Convolution

Means spiral, or, mathematically, two functions that produce a third function, which can be a modification of one of the originals. In Deep Learning, this is the step that extracts features from the input image. This step allows our algorithm to take these features and plot them in a vector—effectively allowing it to “see” these features.

<p align="center">

![Convolution](/img/glossary_convolution.gif)

Source: Deep Learning Methods for Vision [[2](https://cs.nyu.edu/~fergus/tutorials/deep_learning_cvpr12/)]

</p>

## Embeddings

A low-dimensional representation of a model’s input that has rich semantic information. It involves conversions of data to a feature representation where certain properties can be represented by notions of distance in a neural network. In other words, the translation of data to a continuous, fixed-length representation of something that is otherwise difficult to represent.

## Endpoint 

A task or end-goal for a machine learning model. 

For example, we might get this question: 

**Question**: “Is X Endpoint doable in your models?” 

**Answer**: Reference Clarifai’s API documentation to review endpoints and determine if we can do something. Our explorer tool is essentially translating our API prediction scripts.

## False Negative 

Something that was not supposed to be predicted as a negative, but was predicted as a negative. 

## False Positive

Something that was not supposed to be predicted as a positive, but was predicted as a positive. 

## Indexing

Indexing collects, parses, and stores your inputs to facilitate fast and accurate information retrieval. Indexing happens automatically every time you add new inputs to your app. Indexing enables responsive visual search, data clustering, concept search and model training.

## Input

An input is the data you're providing into the platform. Inputs and their predictions are indexed so that they can be used for search. You can also add your own concepts to inputs to use when training your own model. When you upload data to an app that is known as "POSTing" inputs. You can also send inputs to a model to get a model's outputs with PostModelOutputs.

## Input Function 

A function that provides input data for insight into model predictions. 

## LOPQ 

**L**ocally **O**ptimized **P**roduct **Q**uantization is used to find the different embeddings for search, which we implement instead of the General model. This is a more bespoke approach to building Visual Search Models. 

## Layers

The parts that make up the composition of a neural network.

## Logistic Regression 

A type of regression model that outputs a continuous value from a linear combination of input features. Unlike Classification models, regression provides an answer to a question of *quantity*. 

**Classification** is the task of predicting a discrete class label.

**Regression** is the task of predicting a continuous quantity.

## Model

Models convert inputs to outputs. They generate predictions based on the patterns extracted from the input data in concepts. Clarifai provides many different models that each ‘see’ the world differently—with a unique group of concepts. 

Clarifai has built some great models for you to use, but there are times when you wish you had a model that sees the world the way you see it—with your own concepts. You can use your own model by adding images with concepts, training it, and then specifying it when making predictions.

## Multi-Class Classification 

A model that provides classification of concepts, which distinguishes among more than two classes. 

## Neural Network 

These are statistical models, which are collections of algorithms directly inspired by, and partially modeled on biological neural networks. They are capable of modeling and processing non-linear relationships between inputs and outputs.

In machine learning, the “neurons” are instead mathematical models that simulate transmitting information the way that neurons do in the human brain—instead of electrical and chemical signals, like we have in human brains, these artificial points take numbers in and spit numbers out.

## Operation

An operation is an action that is performed via our API or User Interface. It can include actions such as predictions, searches, input uploads, training custom models, model evaluations and more.

## Organization

Clarifai Organizations is a feature within the Community platform that lets you consolidate multiple Clarifai accounts into an organization. It allows you to manage your company’s projects centrally, enhance collaboration within your team, and drive better results with your AI-powered software solutions.

## Output

An output, usually in the form of a prediction or predictions, is the data returned to you when you send an input into a model. Because of their close relationship, the terms "outputs" and "predictions" are sometimes used interchangeably.

<p align="center">

![Inputs to outputs](/img/glossary_inputs_outputs.png)

</p>

## Overfitting 

In bias, when a model recognizes an unrelated feature as a positive aspect for a concept.

## Pooling 

It's also known as downsampling. It reduces the dimensionality of each feature map, but retains the most important information for that image. In the end, pooling makes it possible to recognize elements no matter where they are located. The goal of this step is to progressively reduce the spatial size of the input representation, making it more manageable to process. 

## Portal

Portal is a web application that allows you to preview your Clarifai apps. You can view all the inputs you have added, perform searches, and train new models.

## Prediction

A prediction is an answer to the question “What can you tell me about this input?”. When you call predict on an input, you will receive one or more predictions of different concepts that apply to that image. Predictions vary based on the concepts included in a given model.

## Private

The term “private” refers to resources within the Clarifai platform that you own and are not available for everyone to access. They can be apps, models, workflows, or other resources that are only accessible to you or anyone within your team.

## Public

The term “public” refers to resources within the Clarifai platform that are generally accessible to all users. They can be apps, models, workflows, or other resources that any user can interact with and integrate into their own use case.

## Scripts 

An aggregation of several commands that when executed together, perform specific actions.

## Search

All of the images in your app are indexed by both the concepts applied by the app’s default model, and by their own visual properties. Search, in the context of Clarifai, refers to finding relevant images in your app by text \(match concepts\), reverse image search \(similar-looking images\), or both.

## TensorFlow

A large-scale, distributed, machine learning platform that serves as a virtual “sandbox” for testing machine learning prediction parameters. 

## Train

Train is when you update a model to “learn” from all the annotated concepts on your inputs. Any time you add or update image concepts, you can use train again to create a new model version, fit to the latest information.

## Workflow

Workflows enables users to make predictions on one or more pre-trained or custom models, with a single API call.

