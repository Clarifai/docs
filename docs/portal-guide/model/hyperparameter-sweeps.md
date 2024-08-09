---
description: Learn about our hyperparameter sweeps module.
sidebar_position: 3
---

# Hyperparameter Sweeps

**Learn about our hyperparameter sweeps module.**
<hr />


Choosing optimal hyperparameters is crucial for training machine learning models effectively. The Hyperparameter Sweeps module in Clarifai allows users to automate the process of testing different hyperparameter values and their combinations, enhancing the ability to identify the most effective settings for model training. By systematically testing a range of configurations, you can significantly enhance the performance of your machine-learning models, ensuring that they are as effective and efficient as possible.




### **Getting Started**




1. To use the hyperparameter sweeps module in your application, navigate to the **Manage Installed Modules** section within your Clarifai app. This option can be found in the left sidebar under the **Modules** tab. In the **Install a Module by URL** section, provide the URL `https://clarifai.com/clarifai/ml/modules/module-hyperparameter_sweeps` of the Hyperparameter Sweeps module to add it to your app and press enter.


![alt text](</static/img/agent-system-operators/HS 1.png>)




2. Select the visibility and click **Install to this App.**


![alt text](</static/img/agent-system-operators/HS 2.png>)


::info

App has to be made public to make the module public.

:::


Once the module is installed you can input the details of the model you intend to train and configure it.


### **Configuring the Module**




1. **Model Details**: In the first section of the module, input the details of the model you intend to train. This includes selecting the base model and specifying any initial configurations.


![alt text](</static/img/agent-system-operators/HS 3.png>)


2. **Checkpoint Model Details** (Optional): If you want to use a checkpoint model as a starting point for training, specify this in the second section. This step is optional and depends on whether you wish to continue training from a previously saved state.


![alt text](</static/img/agent-system-operators/HS 4.png>)




3. **Training Parameters**: In the third section, enter training-related parameters. These parameters are designed to provide granular control over the data quality and selection process in the Hyperparameter Sweeps module, enhancing the user's ability to fine-tune model training according to specific requirements and constraints.
   * **Invalid Data Tolerance Percentage**: Defines the maximum percentage of invalid data allowed in the training set without being considered for training, allowing for flexibility in data cleanliness standards.
   * **Training Dataset**: Allows selection of the dataset to be used for training, enabling the model to learn from the most relevant and updated data available.
   * **Training Dataset Version**: Specifies the version of the training dataset to be used, ensuring consistency and control over the data used in different training runs.




![alt text](</static/img/agent-system-operators/HS 5.png>)




4. **Output Parameters**: In the fourth section, define what output you expect from the training. These parameters are designed to provide granular control over the data quality and selection process in the Hyperparameter Sweeps module, enhancing the user's ability to fine-tune model training according to specific requirements and constraints.
   * **List of concepts**:Allows users to select specific concepts that the model should focus on during the training process.
   * **Maximum Concepts**: Sets a limit on the number of concepts the model will consider during each training iteration.
   * **Min Value**: Establishes a minimum threshold value for the prediction confidence of concepts during training.




![alt text](</static/img/agent-system-operators/HS 6.png>)


5. **[Model Template](https://docs.clarifai.com/portal-guide/model/deep-training/#template-types)**: Select a model template that suits your training needs. This template will decide the architectural foundation of your model.




![alt text](</static/img/agent-system-operators/HS 7.png>)




6. **Sweepable Parameters**: Sweepable parameters are adjustable during model training to optimize performance, like learning rate and batch size. They're varied in systematic sweeps to determine the most effective settings that enhance the model's accuracy and efficiency. Based on the template selected, this section will list sweepable parameters for that template.


   For any parameter you wish to experiment with; check the **Try a range of values** checkbox, define the minimum and maximum values for the range, and set the step size to determine how incrementally the module will test between the min and max values.




   The below list describes all the sweepable parameters associated with all the templates.


   * **logreg**: Determines the activation function used in the model, where selecting `1` uses sigmoid units and `0` uses softmax.
   * **batch_size**: Specifies the number of samples processed before the model is updated.
   * **init_epochs**: Sets the initial number of complete passes through the training dataset.
   * **step_epochs**: Defines the number of epochs for each step in a hyperparameter sweep, allowing gradual adjustment.
   * **per_item_lrate**: Establishes the learning rate on a per-item basis, adjusting how much the model weights are updated during training.
   * **lrate (Learning Rate)**: Sets the step size at which the model weights are updated during training.
   * **average_horizontal_flips**: If enabled, averages the embeddings from the original image and a horizontal flip of the image to produce the final embedding vectors.
   * **weight_decay**: Reduces the model's weights slightly each training step to prevent overfitting.
   * **momentum**: Accelerates the model's learning and helps to navigate along the relevant directions during training.
   * **flip_probability**: Determines the likelihood of the image being flipped horizontally or vertically during data augmentation.
   * **flip_direction**: Specifies the axis on which the image flips are performed during preprocessing, enhancing model generalization.




![alt text](</static/img/agent-system-operators/HS 8.png>)




7. **Non-Sweepable Parameters**: Non-sweepable parameters remain fixed throughout the training process and are not typically included in optimization sweeps, such as model architecture or data preprocessing methods. Their constancy supports stability and consistency in model training conditions.


   Below list describes all the non - sweepable parameters associated with all the templates.


   * **image_size**: Sets the dimensions to which all input images are resized before processing.
   * **base_gradient_multiplier**: Adjusts the learning rate multiplier for the base network, influencing the speed and stability of training.
   * **num_epochs**: Specifies the total number of training cycles through the entire dataset.
   * **num_items_per_epoch**: Determines how many items are processed in each epoch.
   * **seed**: Sets the initial random seed for training reproducibility.
   * **num_gpus**: Specifies the number of GPUs to be used for training.
   * **pretrained_weights**: Selects pretrained model weights to initialize the network, aiding in faster convergence.
   * **concepts_mutually_exclusive**: Indicates whether each input should be tagged with only one concept, ensuring that concepts do not overlap.
   * **per_item_min_lrate**: Sets the minimum learning rate for each training item, ensuring that learning does not stagnate.
   * **warmup_iters**: Specifies the number of iterations at the beginning of training where the learning rate is gradually increased to prevent early divergences.
   * **warmup_ratio**: Determines the ratio of the learning rate used during the initial warmup phase compared to the normal learning rate.
   * **pretrained_weights**: Selects pretrained model weights to initialize the network, aiding in faster convergence.
   * **concepts_mutually_exclusive**: Indicates whether each input should be tagged with only one concept, ensuring that concepts do not overlap.
   * **model_cfg**: Specifies the configuration of the model architecture to be used, such as 'resnext'.
   * **preinit**: Selects a pre-initialized setting or version for the model configuration, like 'general-v1.5'.
   * **inference_crop_type**: Chooses the type of cropping to apply during model inference, such as 'sorta2'.
   * **embeddings_layer**: Specifies the network layer from which embeddings are extracted for analysis or further processing.






![alt text](</static/img/agent-system-operators/HS 9.png>)




### **Running the Sweeps**




1. **Generating Combinations**: Based on the input from previous sections, the module generates all possible combinations of hyperparameter values. These are displayed in the eighth section of the module interface.


![alt text](</static/img/agent-system-operators/HS 10.png>)


2. **Selection and Cost Estimation**: Review the generated combinations and select which ones you want to proceed with. The module will display the estimated cost for training each combination per hour.


3. **Submission**: After selecting the desired combinations and reviewing the associated costs, click on **Submit** to initiate the training process. The module will create model versions for each combination in the "Models" section of your app.




### **Monitoring and Evaluation**




1. **Training and Testing Details**: You can monitor the progress of model training and testing from the "Models" page in your app.


![alt text](</static/img/agent-system-operators/HS last.png>)


2. **Performance Review**: To evaluate the performance of each model version, visit the Model Training Page. This interface allows you to compare results across different hyperparameter settings to determine which configuration yields the best results.
