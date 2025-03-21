---
description: Frequently asked questions on model training 
sidebar_position: 4
---

# Model Training FAQs

**Frequently asked questions on model training**
<hr />

## Framing the right problem: what should I predict? 

It’s critical to create visually distinctive concepts with a curated taxonomy (aka oncology) based on the business problem, data collected, and success measures derived from model performance metrics.  

|![framing the right problem](/img/community/training_evaluation_faqs/framing_right_problem.png)|![framing the right problem concepts](/img/community/training_evaluation_faqs/framing_right_problem_concepts.png)|                    
|-------------------------------|------------------|

For example, if you take a look at the above image marked with client metadata, you can see that the data was labeled for the presence of something, rather than the subject of the entire image. 

This is perfect for humans, but definitely not a scenario in which a model would easily discern concepts.

## What are the key steps in the model building process?

These are the six key steps in the process for building new models:

1. **Gathering data**—Involves collecting data either from Clarifai’s data reserves or collecting your own unique datasets.
2. **Building a visual dictionary**—Involves defining the process and the success criteria.
3. **Preparing or ‘cleaning’ the data**—This step prepares the data for use in training the model. You can recognize important variables or visual features, and check for data imbalances that could impact the predictions of your model.
4. **Training the model**—Involves using a process called training to “teach” the model what it will eventually predict on, based on the data you prepared. This happens over many interactions, improving accuracy.
5. **Evaluating or testing the model**—Similar to how someone learns any skill, practice makes perfect, and this step involves using evaluation data that the model has never seen before to test its effectiveness.
6. **Tuning parameters**—Often considered more of an art than a hard-and-fast scientific or mathematical ruling, this step involves choosing the best prediction thresholds, or parameters, to determine what is a “correct” or “incorrect” prediction.

## What are the differences between the various model types?

- **Visual classification model**—Predicts and then assigns classification of one or more objects | _“This is an image of an eagle and an octopus.”_

- **Visual detection model**—Given an image, allows a user to classify and find the location of an object | _“The octopus is located at this bounding box in the image.”_

- **Visual search model**—Allows a user to detect an object or subject in different scenarios and settings, and then define the object | _“I will use this image of an octopus to find other octopuses.”_

- **Visual segmentation model**—Given an image, allows a user to find all pixels (instead of a bounding box in the case of detection model) | _“The octopus’s precise shape (aka mask) is defined by all pixels in the image.”_

- **Visual anomaly model**—Allow users to find anomalous examples with only normal examples in training | _“I will find an octopus holding spaghetti and meatballs among all images of octopuses (with very similar ocean background).”_

- **Text classification model**—Given a piece of a text passage, allows a user to classify one or more categories | _“Octopus is very intelligent” = good; “Octopus is very stupid” = bad_

## What is a “good” training dataset, and how do data quality and quantity affect model performance?

A training dataset refers to the data that is used as positive inputs for concepts in a model. A “good” training dataset will set the model to make predictions as close to the world as a user would see it.  

Data **quality**, in the context of machine learning, is data that:
-	visually adheres to concept descriptions laid out in a taxonomy, and;
-	reflects the expected user’s data for the model’s intended use case.

Data **quantity** casts a wider net for model understanding. With more data, we can be more specific and more granular with our concepts.

**Example:**

For a Guinness beer’s “Perfect Pint” model, the client had a few thousand images of professionally photographed pints of beer in different stages of pour appearance on bar tops taken in daylight. The model was meant to see a photo of a pint of beer, and return a judgment on how the pint of beer looks compared to the “perfect” looking pint of beer.

Unfortunately, because the images used to initially train the model did not look _**qualitatively**_ similar to the user-generated content (UGC), **and** the user data was photographed in _**more**_ scenarios than bars, the model needed improvement in the form of:
-	1) more data to capture the breadth of scenarios, and;
-	2) data that reflected the quality of smartphone cameras. 

After applying these changes, the model performance improved.

## What is the difference between bias and variance in model training?

**Bias** occurs when the scope of your training data is _too narrow._ If you only see green apples, you’ll assume that all apples are green and think red apples are another kind of fruit. If the training data contains only a small number of examples, it’ll react accordingly, taking it as truth. Small datasets make for a smaller worldview.

**Variance**, on the other hand, occurs when your training set is _cast too wide._ If you train a concept of too many different kinds of images, and they are all visually different, the training set will become noisy. This will make it difficult for the model to find visually distinct qualities to learn from. 

The key to avoiding both of these pitfalls is building a dataset with the quality _and_ quantity of content kept in mind. 

## Is there a checklist I can use for training custom models?

Here is a checklist you can use to help you make the most out of training your own models. 

|                               |                  |
|-------------------------------|------------------|
| <ul><li>Are the images visually distinct?</li></ul> | Ensure the images have visually noticeable qualities. They should not be too subtle for humans to pick up on, and they should also be able to be picked up through the noise of a photo. Also, look for whether or not those noticeable qualities are distinct enough to be repeatable across inputs.|
| <ul><li>Are the ideal/not ideal inputs defined?</li></ul> | Create a visual dictionary of what each concept’s training data will and will not be trained for. Determine the best resolution and image size for optimal data throughput. Remember to set aside evaluation data at the start of each project. A split of 80% training data to 20% evaluation data should be good to start. |
| <ul><li>Are the labels semantically clear?</li></ul> | Make sure the labels for concepts reflect what the photo is of, not just what is in the photo. |
| <ul><li>Is the training data UGC optimized?</li></ul> | You need to ensure the training and test data match the reality of the use case appertaining to user-generated content (UGC). Your evaluation test set should reflect this. |
| <ul><li>Do you have the assets ready?</li></ul> | Have model versions and API keys on-hand for testing and for running scripts, if applicable. |
| <ul><li>Do you track labels?</li></ul> | Keep track of the number of images labeled, either via JIRA or any docs platform. |

## What is “ground truth” and how do we use it to dictate model building?

Ground truth is the mutual understanding of a concept based solely on visual criteria. We work with clients to define ground truth early in the model building process in order to be sure that we are speaking the same language when it comes to choosing training data for a concept. 

We are asking not what the meaning of a concept is, but how a concept appears in the worldview of our models.

We will not be able to determine the accuracy of a model if we do not have ground truth. Once we know what a model _should_ be predicting, then we can move forward in determining the model’s accuracy.

## How do we train for closed-set and open-set recognition?

When we have a multi-class recognition model, there is no hard and fast “rule” as to how one should build its training set, but how one should approach training depends on the use-case of your model.

In closed-set recognition, all concepts are known at training time. In open-set recognition, an incomplete knowledge of the world is present at the time of training your model, and unknown concepts can be submitted to the model during testing.

![closed-set and open-set recognition](/img/community/training_evaluation_faqs/negatives_and_positives.png)
*From Statistical Methods for Open Set Recognition [[1]](https://www.wjscheirer.com/misc/openset/cvpr2016-open-set-part1.pdf)*

More often than not, open-set problems are found in nearly every case where visual recognition algorithms are used. 



