---
description: Frequently asked questions on model training and evaluation
sidebar_position: 6
---

# Model Training and Evaluation FAQs

**Frequently asked questions on model training and evaluation**
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

## How can I improve concept performance?

Concepts that perform well tend to be the ones that are annotated in images photographed in a consistent and unique way. 

Concepts that tend to perform poorly are those:

-	a) trained on data with inconsistent compositions;
-	b) the photos require outside context (relationships to people in portraits, etc.); and/or,
-	c) the subject matter is subtle.

Keep in mind the model has no concept of language; so, in essence, “what you see is what you get.”
 
Let’s take a case of a false positive prediction made by a model in the process of training to recognize wedding imagery.

Here is an example of an image of a married couple, which had a **false positive** prediction for a person holding a bouquet of flowers, even though there is no bouquet in the photo. 

What’s going on here?

 ![concept performance](/img/community/training_evaluation_faqs/wedding_imagery.jpg)
 
A photo’s composition and the combination of elements therein could confuse a model.

All the images below were labeled with the **‘Bouquet_Floral_Holding’** concept. 

![images for concept performance](/img/community/training_evaluation_faqs/concept_performance_1.png)

In this very rare instance, the image in question has:
-	A _veiled_ bride
-	The bride & groom kissing/their heads close together
-	Greenery over their heads
-	Large, recognizable flowers

The model sees _the combination_ of all these individual things _in lots of photos labeled_ ‘Bouquet_Floral_Holding’; and thus, that is the top result.

|![images for concept performance](/img/community/training_evaluation_faqs/concept_performance_1.png)|![images for concept performance](/img/community/training_evaluation_faqs/concept_performance_2.png)|                    
|-------------------------------|------------------|

One way to fix this is to **narrow** the training data for ‘Bouquet_Floral_Holding’ to images in which the bouquet is the focal point, rather than any instance of the bouquet being held. 

This way, the model can focus on the anchoring theme/object within the dataset more easily.

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

## What is the ROC AUC score, and how does it relate to prediction accuracy?
 
![closed-set and open-set recognition](/img/community/training_evaluation_faqs/roc_auc.png)
*Above table is available in model evaluation page in the legacy Clarifai’s Explorer UI*

The **ROC AUC** (Concept Accuracy Score) is the concept’s prediction performance score, defined by the area under the Receiver Operating Characteristic curve. This score gives us an idea of how well we have separated our different classes, or concepts. 

ROC AUC is generated by plotting the True Positive Rate (y-axis) against the False Positive Rate (x-axis) as you vary the threshold for assigning observations to a given class. The AUC, or **A**rea **U**nder the **C**urve of these points, is (arguably) the best way to summarize a model’s performance in a single number. 

You can think of AUC as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation, and thus it is a useful metric even for datasets with highly unbalanced classes. 

A score of 1 represents a perfect model; a score of .5 represents a model that would be no better than random guessing, and this wouldn’t be suitable for predictions and should be re-trained. 

Note that the ROC AUC is _not_ dependent on the prediction threshold.

## How do we read a concept-by-concept matrix?

![concept-by-concept matrix](/img/community/training_evaluation_faqs/concept_by_concept_matrix.png) 
*Above table is available in model evaluation page in the legacy Clarifai’s Explorer UI*

A concept-by-concept matrix is a graphic flattening of data to show what has been labeled for a concept. This tool is another way of visualizing the performance of a model. 

It allows us to review where we see true positives, or correctly predicted inputs (the diagonal row). Simply put, this is an excellent tool for telling us where our model gets things right or wrong. 

Each row represents the subset of the test set that was actually labeled as a concept, e.g., “dog.” As you go across the row, each cell shows the number of times those images were predicted as each concept, noted by the column name.

## Along with AUC, what other insights can a confusion matrix provide?

- **Accuracy**—Overall, how often is the model correct?
- **Misclassification Rate**—Overall, how often is it wrong?
- **True Positive Rate**—When it's actually yes, how often does it predict yes?
- **False Positive Rate**—When it's actually no, how often does it predict yes?
- **Specificity**—When it's actually no, how often does it predict no?
- **Precision**—When it predicts yes, how often is it correct?
- **Prevalence**—How often does the yes condition actually occur in our sample?

The diagonal cells represent True Positives, i.e., correctly predicted inputs. You’d want this number to be as close to the Total Labeled as possible.

Depending on how your model was trained, the off-diagonal cells could include both correct and incorrect predictions. In a non-mutually exclusive concepts environment, you can label an image with more than 1 concept.

For example, an image labeled as both “hamburger” and “sandwich” would be counted in both the “hamburger” row and the “sandwich” row. If the model correctly predicts this image to be both “hamburger” and “sandwich,” then this input will be counted in both on and off-diagonal cells.

![concept-by-concept matrix](/img/community/training_evaluation_faqs/concept_by_concept_matrix.png) 
*Above table is available in model evaluation page in the legacy Clarifai’s Explorer UI*

 
This is a sample confusion matrix for a model. The Y-axis `Actual Concepts` are plotted against the X-axis `Predicted Concepts.` The cells display average prediction probability for a certain concept, and for a group of images that were labeled as a certain concept. 


The diagonal cells are the average probability for true positives, and any cells off the horizontal cells contain the average probability for non-true positives. From this confusion matrix, we can see that each concept is distinct from one another, with a few areas of overlap, or clustering.

Concepts that co-occur, or are similar, may appear as a cluster on the matrix. 

![concepts co-occurence](/img/community/training_evaluation_faqs/co_occurence_gratin_baked.png)

In the above sample matrix for a food model trained to predict the cooking preparation for foods, we see a cluster around ‘Gratin’ and ‘Baked’. Without the context of what these concepts mean or how the training data appears, we can assume that the training data looks very similar, and it is (‘Gratin’ is a variant of baked preparation, only with cheese).

And so, clusters aren’t necessarily a bad thing; and sometimes they are absolutely correct if the subject matter is naturally similar.  

At Clarifai, we can work with you to determine if the cluster or area of confusion is appropriate for the final model. 

Here is an example of a noisy matrix:

| Hair Volume - Version I | Hair Volume - Version II |                    
|-------------------------------|-|
|![hair volume 1](/img/community/training_evaluation_faqs/noisy_matrix_1.png)|![hair volume 2](/img/community/training_evaluation_faqs/noisy_matrix_2.png)|  

- **1-2 concept model (left)**: Hair Volume is graded as it appears from root to tip, either voluminous, or not voluminous.
- **1-4 concept model (right)**: Hair Volume is tiered depending on where it exists from the root, ends of the hair, and hair length. Level 4 is the most distinct because it is dependent on the shortest hair length.

The matrix on the right is an example of a noisy matrix, compared to the binary model on the left, which has a more clearly defined diagonal line. 

Concepts trained with data that is too similar, too subtle to differentiate, or labeled across different concepts, will muddle the distinction between concepts, and will not form a clean diagonal line in a confusion matrix. 

In this case, the model on the left would be considered the ideal concept distinction.

## How can I improve a model by drilling down to “problematic cells” in a confusion matrix?

 ![problematic cells in a confusion matrix](/img/community/training_evaluation_faqs/problematic_cells.png)

## What is the importance of recall and precision rate?

Recall rate refers to the proportion of the images labeled as the concept that were predicted as the concept. It is calculated as True Positives divided by Total Labeled. Also known as “sensitivity” or “true positive rate.”

Precision rate refers to the proportion of the images predicted as a concept that had been actually labeled as the concept. It is calculated as True Positives divided by Total Predicted. Also known as “positive predictive value.”

You can think of precision and recall in the context of what we want to calibrate our model towards. Precision and recall are inversely correlated; so, ultimately the ratio of false positives to false negatives is up to the client according to their goal.

We’re asking one of the following of our model:

-	That the guesses are correct, while missing some concepts (high precision);

Or,

-	That most things are considered to be predicted as a concept, while having some wrong predictions (high recall).

**Example:**  

Precision = tp÷(tp+fp)

_I guess for X, and my guess is correct, although I may miss another X._

Or,

Recall = tp ÷ (tp+fn)

_I guess all the X as X, but occasionally predict other subjects that are not X as X._

## How do we choose a prediction threshold? 

A threshold is the “sweet spot” numerical score that is dependent on the objective of your prediction for recall and/or precision. In practice, there are multiple ways to define “accuracy” when it comes to machine learning, and the threshold is the number we use to gauge our preferences.

You might be wondering how you should set your classification threshold, once you are ready to use it to predict out-of-sample data. This is more of a business decision, in that you have to decide whether you would rather minimize your [false positive rate or maximize your true positive rate](#along-with-auc-what-other-insights-can-a-confusion-matrix-provide). 

If our model is used to predict concepts that lead to a high-stakes decision, like a diagnosis of a disease or moderation for safety, we might consider a few false positives as forgivable (better to be safe than sorry!). In this case, we might want **high precision**.

If our model is used to predict concepts that lead to a suggestion or flexible outcome, we might want **high recall** so that the model can allow for exploration. 

In either scenario, we will want to ensure our model is trained and tested with data that best reflects its use case.

Once we have determined the goal of our model (high precision or high recall), we can use test data that our model has never seen before to evaluate how well our model predicts according to the standards we have set.

## Once a model is trained and evaluated, how do we determine its accuracy?

The goal of any model is to get it to see the world as you see it.

In **multi-class classification,** accuracy is determined by the number of correct predictions divided by the total number of examples.

In **binary classification,** or for mutually exclusive classes, accuracy is determined by the number of true positives added to the number of true negatives, divided by the total number of examples.

Once we have established the goal we are working towards with the ground truth, we begin to assess your model’s prediction returns. This is a completely subjective question, and most clients simply want to know that their models will perform to their standards once it is in the real world.

We begin by running a test set of images through the model and reading their precision and recall scores. The test set of images should be:
-	a) inputs that the model has not been trained with, and;
-	b) be the same kind of data we would expect to see in the model’s particular use case. 

Once we have our precision or recall scores, we will compare these to the model’s recall or precision thresholds for .5 and .8, respectively. 






