---
description: Learn about our push operators
sidebar_position: 4
---

# Push

**Learn about our push operators**
<hr />

Push operators help you to automate processes. You can trigger a wide variety of actions based on predictions made by models in your workflow. For example, you can automatically add a label to an image based on predicted concepts.

:::tip

Since the push operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow). 

:::

## Annotation Writer 

**Input**: Any

**Output**: Any

Annotation Writer allows you to write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation. 

We'll demonstrate how to use the Annotation Writer to automatically annotate text and image inputs in your app.

### How to Annotate Text Inputs

Let's start by demonstrating how you can use an Annotation Writer, alongside a [Regex-Based Classifier](https://docs.clarifai.com/portal-guide/agent-system-operators/algorithmic-predict#regex-based-classifier), to automatically label text inputs.


:::caution Regex-Based Classifier

**Input**: Text

**Output**: Concepts

This operator allows you to classify text using regular expressions. When the specified regex pattern matches the text, the text is assigned to one of the predefined concepts.

:::

**1.** Create a concept that you want to be automatically assigned to your input. You can learn how to create concepts [here](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete). For this demonstration, let's create the `bucket` concept. 

**2.** Create a [labeling task](https://docs.clarifai.com/portal-guide/annotate/create-a-task). Remember to choose `Classification` as the modeling objective. Then, go to the **Tasks** listing page and copy the ID of the task. 

![](/img/others/annotation_writer_1.png)

**3.** Go to the [workflow builder](https://docs.clarifai.com/portal-guide/workflows/workflow-builder/) page. Search for the `regex-based-classifier` node in the left-hand sidebar and drag and drop it onto the empty workspace.

![](/img/others/annotation_writer_1_1.png)

In the right-hand sidebar, click the **SELECT CONCEPTS** button and use the pop-up that appears to select the relevant concept(s) already existing in your application. For this example, we select the `bucket` concept. 

In the **regex** field, provide the regex pattern that will be used to classify the text. If the pattern matches, the text will be classified as the selected concept. For this example, we provide `\bbucket\b`, which would match the word "bucket" in instances where it appears as a whole word, surrounded by word boundaries.

**4.** Search for the **annotation-writer** node in the left-hand sidebar and drag and drop it onto the workspace. Within the right-hand sidebar, specify the output configuration values:

![](/img/others/annotation_writer_2.png)

- Set the `annotation_status` as `ANNOTATION_SUCCESS`. This will write the annotations with the annotation success status.
- Set the `annotation_user_id`. This is the `user_id` for which to write the annotations on their behalf as if they manually did the work themselves. You could also choose your own `user_id`.
- For this example, let's leave the `annotation_info` field empty.
- Set the `task_id`. This is the ID the task annotation work belongs to. You can retrieve it from the **Tasks** listing page — as mentioned earlier.

:::warning Annotation Status

The **annotation_status** field lets you specify the [status of the annotation](https://docs.clarifai.com/api-guide/advanced-topics/status-codes#annotation-related-codes-24xxx) that will be created. These are the possible values:

- `ANNOTATION_SUCCESS` (code 24150) — The annotation is created successfully. 
- `ANNOTATION_PENDING` (code 24151) — The annotation status is pending.
- `ANNOTATION_AWAITING_REVIEW` (code 24157) — Annotation is still waiting for review before it's finalized.
- `ANNOTATION_AWAITING_CONSENSUS_REVIEW` (code 24159) — Annotation is still waiting for a consensus review before it's finalized.

:::

**5.** Connect the operators and save your workflow. 

**6.** Go to your app's settings page and change the [Base Workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/#how-to-change-a-base-workflow) to the workflow you just created. 

**7.** [Upload a text input](https://docs.clarifai.com/portal-guide/data/#upload-inputs) into your app, such as `I'm looking for a bucket list`. If you go to the Input-Viewer page, you'll notice that the text input has been automatically labeled with the `bucket` concept. 

![](/img/others/annotation_writer_3.png)

The Regex-Based Classifier successfully classified the input and forwarded it to the Annotation Writer for labeling. 

### How to Annotate Image Inputs

Next, let's demonstrate how you can use an Annotation Writer to automatically label image inputs. For this demonstration, we'll create a workflow that automatically classifies images of dogs and cats, assigning them the appropriate labels.

**1.** Create the concepts that you want to be automatically assigned to your input. You can learn how to create concepts [here](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete). For this demonstration, let's create `cat` and `dog` concepts. 

**2.** Create a [visual classification](https://docs.clarifai.com/portal-guide/model/model-types/visual-classifier) model and train it with the `cat` and `dog` concepts. You can learn how to create the model [here](https://docs.clarifai.com/portal-guide/model/deep-training/#how-to-fine-tune-a-model).

**3.** Create a [labeling task](https://docs.clarifai.com/portal-guide/annotate/create-a-task). Remember to choose `Classification` as the modeling objective. Then, go to the **Tasks** listing page and copy the ID of the task — as mentioned earlier. 

**4.**  Go to the [workflow builder](https://docs.clarifai.com/portal-guide/workflows/workflow-builder/) page. Search for the `visual-classifier` node in the left-hand sidebar and drag and drop it onto the empty workspace. Connect it to the `IN` element.

:::caution visual classifier

**Input**: Image

**Output**: Concepts

It allows you to classify images into a set of concepts. 

:::
 
![](/img/others/annotation_writer_4.png)

Use the pop-up that appears in the right sidebar to search for the classification model you created and add it to the node. After selecting the model, we'll use the default settings for the other output configuration options for the purpose of this illustration.

**5.** Search for the `concept-thresholder` node in the left sidebar and drag it onto the workspace. Connect it to the `visual-classifier` node.

:::caution concept-thresholder

**Input**: Concepts

**Output**: Concepts

This operator allows you to threshold input concepts according to both a threshold and an overall operator (>, >=, =, <=, or <). For this example, we use the " > " (GREATER_THAN) threshold type. Thus, only the `cat` and `dog` concepts outputted by the visual classifier model above a certain threshold will be processed further downstream. 

:::

![](/img/others/annotation_writer_5.png)

Click the **SELECT CONCEPTS** button in the right sidebar.

In the window that appears, select the relevant concepts already existing in your application. For this example, let's select the `cat` and `dog` concepts, and use the slider to set their threshold values to 0.80 each. This threshold will determine which concepts are accepted to be used for the auto-annotation.

Click the **OK** button to save the changes. You'll see the selected concepts highlighted in the right sidebar, along with their threshold values.

Lastly, select the `concept_threshold_type` as `GREATER_THAN`. Keep the other configuration options set to their default values.

**6.** Search for the **annotation-writer** node in the left-hand sidebar and drag and drop it onto the workspace. Within the right-hand sidebar, specify the output configuration values:

![](/img/others/annotation_writer_6.png)

- Set the `annotation_status` as `ANNOTATION_SUCCESS`. This will write the annotations with the annotation success status.
- Set the `annotation_user_id`. This is the `user_id` for which to write the annotations on their behalf as if they manually did the work themselves. You could also choose your own `user_id`.
- For this example, let's leave the `annotation_info` field empty.
- Set the `task_id`. This is the ID the task annotation work belongs to. You can retrieve it from the **Tasks** listing page — as mentioned earlier.

**7.** Click the **Save Workflow** button to save your workflow. 

**8.** Go to your app's settings page and change the [Base Workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/#how-to-change-a-base-workflow) to the workflow you just created. 

**9.** [Upload an image input](https://docs.clarifai.com/portal-guide/data/#upload-inputs) into your app, such as [this image](https://samples.clarifai.com/cat1.jpeg
) of a cat. If you go to the Input-Viewer page, you'll notice that the image input has been automatically labeled with the `cat` concept. 

![](/img/others/annotation_writer_7.png)

The model successfully classified the input, the thresholder filtered the concepts, and the filtered concept was forwarded to the Annotation Writer for automatic labeling. 