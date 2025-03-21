---
description: Train new models with the click of a button.
sidebar_position: 3.1
---

# Training Basics

**Train new models with the click of a button**
<hr />

When you train a model, you are telling the system to look at all the inputs with concepts you've provided and learn from them. Then, when the model encounters new inputs, it could correctly generate predictions by applying the learned knowledge.

The train operation is asynchronous. It may take some time for your model to be fully trained and ready. Your model will be trained on all inputs that have been processed, and a new version will be created. 

## Train a Transfer Learning Model

To train a [transfer learning model](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/), start by navigating to the individual page of your app. Then, select the **Models** option on the collapsible left sidebar.

You’ll be redirected to the models’ listing page, where you can see a list of models available in your app. 

![models listing page](/img/community_2/training_basics_models_page.png)

Select the model you like to train. 

On the individual model's page, click the **Create New Model Version** button on the page's upper right-hand corner.  

![train model](/img/community_2/custom_model_created_model_page.png)

You'll be redirected to a page where you can set up the details for training your transfer learning model. 

![train transfer learning model](/img/community_2/update_transfer_learning_classifier_model.png)

- **Dataset**—Select a [dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete), and its version, for training the model. Otherwise, if there's no dataset, all compatible labeled inputs in your app will be used as a default dataset. 
- **Base embed_model**—Select the base model version to use for embeddings, which has to be one of the embed models in the app workflow. This allows you to specify the specific model in case the default workflow of your app has multiple embedding models present in it.
- **Concepts**—Select the concepts that you want this model version to predict. These should be concepts that are in your training dataset with labels.
- **Concepts mutually_exclusive**—Turn this on if there is no overlap between any of your concepts. 
- **Enrich dataset**—If it's enabled (set to `Automatic`), it lets you enrich the model with supplemental data from pre-built datasets of negative embeddings, which improves the model's accuracy. Otherwise, setting it to `Disabled` lets you not to use the negative embeddings whether they are available or not.
- **Inference settings**—Optionally, you may configure the inference settings to enhance the performance of your model.

After configuring the settings, click the **Train Model** button to begin training the model. 

## Train a Deep Fine-Tuned Model

To train a [deep fine-tuned](https://docs.clarifai.com/portal-guide/model/deep-training/) model, navigate to the individual page of your model and click the **Create New Model Version** button—as was illustrated previously. 

On the ensuing page, set up the details for training your deep fine-tuned model.

![train deep fine-tuned model](/img/community_2/train_deep_fine_tuned_model.png)

- **Dataset**—Select a dataset, and its version, for training the model. Otherwise, if there's no dataset, all compatible labeled inputs in your app will be used as a default dataset. 
- **Concepts**—Select the concepts that you want this model version to predict. These should be concepts that are in your training dataset with labels.
- **Invalid data_tolerance_percent**—Set a percentage value (0 to 100) of user's tolerance level to invalid inputs among all training inputs. Training will be stopped with error thrown if actual percent of invalid inputs is higher than this.
- **Template**—select a [template](https://docs.clarifai.com/portal-guide/model/deep-training/#template-types) you want to use to train your model. 
- **Training and inference settings**—Optionally, you may configure the training and inference settings to enhance the performance of your model.

After configuring the settings, click the **Train Model** button to begin training the model. 

### Training Time Estimator

Before initiating the training of a deep fine-tuned model, you will get an estimate outlining the anticipated duration of the training process. This offers transparency in expected training costs. We currently charge $4 per hour.

The estimate is displayed above the **Train Model** button (check the above screenshot), rounded down to the nearest hour with 15-minute increments. 

The exact training time estimate depends on the following:

- Model type;
- Model configuration details;
- Dataset statistics;
- Hardware.

Clarifai’s Training Time Estimator is carefully designed to balance trade-offs between simplicity, generalization, and accuracy. 

Notably, some model configurations and dataset statistics affect training time much more than others. For example, the number of items in the dataset directly affects the number of training steps in most configs, while the learning rate has no impact. 

In addition, some parameters affect the time linearly (e.g. number of items), while others may be quadratic (e.g. image size), and others approximately linear, quadratic, or subquadratic—depending on the model (e.g. number of tokens in each input). 

The current version of the Training Time Estimator provides estimates only for each template’s default parameter configuration, and we plan to include other parameter configurations in the upcoming releases. 

The exact calculation based on the current AWS A10 GPU is:

```text
training time = int(round(A * num_inputs * num_epochs + B)) 
```

_Where A and B are parameter coefficients estimated specific to the template of each model type._
