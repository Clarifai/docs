---
description: >-
  Use AI to help you build AI. Auto annotation uses your model predictions to
  label your training data.
sidebar_position: 2
---

# Auto-Annotation

**Use AI to help you build AI. Auto annotation uses your model predictions to label your training data**
<hr />

This tutorial demonstrates how auto-annotation workflows can be configured within the Clarifai platform. With auto-annotation, you can use model predictions to label your inputs. Auto-annotation can help you to prepare training data, or assign other useful labels and metadata to your inputs.

When a concept is predicted by a model, it is predicted with a confidence score between 0 and 1. For example, when your model predictions are confident \(close to 1\), you can have your data automatically labeled with that concept. When your predictions are less-than-confident, you can have your input sent to a human being for review.

This enables you to speed-up and scale-up your annotation process while ensuring quality standards.

:::tip Workflows

In the Clarifai platform, the outputs from one model can be used as inputs to another model. This forms a workflow. Different models accept and produce different types of inputs and outputs.

:::

![](/img/community/auto-annotation/auto_annotation.jpg)


:::warning objective

In this tutorial, we'll create a workflow that detects bounding box regions in images of cats and dogs. Once a certain threshold is met, the workflow will automatically generate annotations for these detected regions. If the threshold is not met, the annotation will be marked as pending review. 

:::

Here's what our final workflow will look like:

![](/img/community/auto-annotation/auto-annotation-9.png)

## Prerequisites

- Create an [application](https://docs.clarifai.com/clarifai-basics/applications/create-an-application), add images of cats and dogs to a [dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete) in the app, and add [bounding box labels](https://docs.clarifai.com/portal-guide/annotate/label-types#detection) of `cat` and `dog` to the images, respectively. 
You could use the following images:
```text
https://samples.clarifai.com/dog1.jpeg
https://samples.clarifai.com/dog2.jpeg
https://samples.clarifai.com/dog3.jpeg
https://samples.clarifai.com/cat1.jpeg
https://samples.clarifai.com/cat2.jpeg
https://samples.clarifai.com/cat3.jpeg
```
- Create a [visual detector](https://docs.clarifai.com/portal-guide/model/model-types/visual-detector) model and train it with the `cat` and `dog` concepts. 
- Create a [labeling task](https://docs.clarifai.com/portal-guide/annotate/create-a-task/). Remember to choose `Detection` as the modeling objective. Then, go to the **Tasks** listing page and copy the ID of the task.

## Step 1: Set up Visual Detector

:::caution visual detector 

**Input**: `image`

**Output**:  `regions[…].data.concepts`, `regions[…].region_info.bounding_box`

The visual detector model will detect bounding box regions in images and then classify objects within the boxes. 

:::

**a.** Go to the [workflow builder](https://docs.clarifai.com/portal-guide/workflows/working-with-workflows/) page. 

**b.** Search for the `visual-detector` node in the left sidebar of the page. 

**c.** Drag it onto the empty workspace and connect it to the `IN` element. 

**d.** Use the pop-up that appears in the right sidebar to search for the detection model you created and add it to the node. After selecting the model, we'll use the default settings for the other output configuration options for the purpose of this illustration.

:::note

You can use the tools on the left side of the workspace pane to manage the workflow creation process. These tools allow you to zoom in and out, fit the view, arrange the workflow, reset the workspace, and more.

:::

![](/img/community/auto-annotation/auto-annotation-1.png)

## Step 2: Set up Region Thresholder

:::caution Region Thresholder

**Input**: `regions[…].data.concepts`

**Output**:  `regions[…].data.concepts`

This operator allows you to filter regions based on the concepts they contain using specific thresholds for each concept and an overall operator (>, >=, =, \<=, or \<). In this example, we use the " > " (`GREATER_THAN`) threshold type. Thus, only the `cat` and `dog` concepts outputted by the visual detector model above a certain threshold will be processed further downstream.

:::

**a.** Search for the `region-thresholder` node in the left sidebar and drag it onto the workspace. Connect it to the `visual-detector` node.

![](/img/community/auto-annotation/auto-annotation-2.png)

**b.** Click the **SELECT CONCEPTS** button in the right sidebar. 

In the window that appears, select the relevant concepts already existing in your application. For this example, let's select the `cat` and `dog` concepts, and use the slider to set their threshold values to 0.95 each. This threshold will determine which annotations are accepted and which are set aside for follow-up review.

![](/img/community/auto-annotation/auto-annotation-3.png)

Click the **OK** button to save the changes. You'll see the selected concepts highlighted in the right sidebar, along with their threshold values. 

![](/img/community/auto-annotation/auto-annotation-4.png)

**c.** Select the `concept_threshold_type` as `GREATER_THAN`. Keep the other configuration options set to their default values.

## Step 3: Set up Annotation Writer

:::caution Annotation Writer

**Input**: `Any`

**Output**:  `Any`

Annotation writer allows you to write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation.

:::

**a.** Search for the `annotation-writer` node in the left sidebar and drag it onto the workspace. Connect it to the `region-thresholder` node.

**b.** In the right sidebar, set up the following output configurations:

- Set the `annotation_status` as `ANNOTATION_SUCCESS`. This will write the annotations with the [`ANNOTATION_SUCCESS`](https://docs.clarifai.com/api-guide/advanced-topics/status-codes#annotation-related-codes-24xxx) status. 
- Set the `annotation_user_id`. This is the `user_id`for which to write the annotations on their behalf as if they manually did the work themselves. You could also choose your own `user_id`. 
- In this example, let's leave the `annotation_info` field empty. 
- Set the `task_id`. This is the ID the task annotation work belongs to. You can retrieve it from the **Tasks** listing page — as earlier mentioned. 

![](/img/community/auto-annotation/auto-annotation-5.png)

## Step 4: Set up Low Confidence Score Flow

In the flow described above, the visual detector model identifies bounding box regions for the provided inputs. These regions are then sent to the region thresholder node. The `GREATER_THAN` operator filters out regions that do not meet the threshold and forwards the remaining regions to the annotation writer model. Bounding boxes that pass this filter are written to the input with an `ANNOTATION_SUCCESS` status.

To capture predictions with low prediction scores, we'll set up a separate region thresholder node that uses the `LESS_THAN` operator. This operator will filter out regions with prediction scores below the threshold and write these regions to the input with an `ANNOTATION_AWAITING_REVIEW` status.

**a.** Search for the `region-thresholder` node in the left sidebar and drag it onto the workspace. Connect it to the `visual-detector` node. Also, click the **SELECT CONCEPTS** button in the right sidebar, and set the threshold values for the `cat` and `dog`concepts to 0.95 each. Lastly, set the `concept_threshold_type` as `LESS_THAN_OR_EQUAL`. 

![](/img/community/auto-annotation/auto-annotation-6.png)

:::caution LESS_THAN_OR_EQUAL

The `LESS_THAN_OR_EQUAL` (\<=) operator ensures that all values that are either less than or exactly equal to the specified threshold are included in the result. In this case, if we set a threshold of 0.95 using the operator, any value that is 0.95 or lower will meet the condition.

:::

**b.** Search for another `region-thresholder` node in the left sidebar and drag it onto the workspace. Connect it to the previous `region-thresholder` node. 

Also, click the **SELECT CONCEPTS** button in the right sidebar, and set the threshold values for the `cat` and `dog`concepts to 0.50 each. Lastly, set the `concept_threshold_type` as `GREATER_THAN`. This ensures that only values that are higher than the 0.50 threshold are included in the result. 

![](/img/community/auto-annotation/auto-annotation-7.png)

**c.** Search for an `annotation-writer` node in the left sidebar and drag it onto the workspace. Connect it to the previous `region-thresholder` node. 

In the right sidebar, set up `annotation_status` as `ANNOTATION_AWAITING_REVIEW`. This will write the annotations with a pending review status. Also, set the values for `annotation_user_id` and `task_id` — as earlier described. 

![](/img/community/auto-annotation/auto-annotation-8.png)

## Step 5: Save Workflow

Lastly, click the **Save Workflow** button at the upper-right corner of the page. 

![](/img/community/auto-annotation/auto-annotation-9.png)

Your workflow is now ready for use!

## Step 6: Use Workflow

Go to your app's settings page and [change the Base Workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/#how-to-change-a-base-workflow) to the workflow you just created. This ensures that the workflow runs every time you add an input to your app. 

For example, adding a new image of a dog will trigger the auto-annotation process Then, a bounding box label will be added to the image and it will be assigned with the `dog` concept.
 
You can view the annotation in the Input-Viewer page:

![](/img/community/auto-annotation/auto-annotation-10.png)

That's it!