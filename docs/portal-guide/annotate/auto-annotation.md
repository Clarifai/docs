---
description: Learn how to automatically label inputs with ease
sidebar_position: 2.1
---

# Auto-Annotation

**Learn how to automatically label inputs with ease**

<hr />

Auto-annotation, also known as automatic annotation or automated labeling, refers to the use of machine learning techniques to automatically generate annotations or labels for data. 

Clarifai’s innovative auto-annotation feature comes with several ground-breaking capabilities, including:

- **Annotate with a single click**: Annotate all the inputs in your dataset with just one click, regardless of its size.
- **Fully automated annotation**: Utilize a completely automated approach without relying on the semi-automated, human-in-the-loop method of [AI-assist](https://docs.clarifai.com/portal-guide/annotate/create-a-task#step-5-turn-off-or-enable-ai-assist).
- **Set confidence thresholds**: Determine which concepts to annotate automatically and which to review manually based on user-defined confidence thresholds.
- **Targeted review**: Review only those inputs that fall below your specified accuracy thresholds.
- **Customizable model selection**: Choose the model or workflow that best suits your dataset during the labeling task creation process.
- **Partitioned review**: Assign inputs to multiple reviewers, allowing for faster review processes and minimizing single points of dependence.
- **Efficient review process**: Easily review, accept, or reject inputs annotated by a specific labeler. 
- **Enhanced user experience**: Access key information such as "% Reviewed" and "Labeled by" to streamline the user experience.

:::warning Supported Label Types

Auto-annotation is a versatile feature designed to streamline data labeling processes by supporting various [data types](https://docs.clarifai.com/portal-guide/annotate/label-types), including classification, bounding boxes, and polygons for images, as well as text. This capability is compatible with all models and workflows, including foundation models and large language models (LLMs). 

:::

Here is a video that showcases how to perform auto-annotation:

<div style={{ "position":"relative","width": "100%","overflow": "hidden","padding-top": "56.25%"}}>
<iframe width="900" height="500" style={{"position": "absolute","top": "0","left": "0","bottom": "0","right": "0","width": "100%","height": "100%",}} src="https://www.youtube.com/embed/CD25FaeqVRc" title="Auto Annotate Your Entire Data with a Single Click: Auto Annotation Explained!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br/><br/>

Let’s demonstrate how you can set up auto-annotation when creating labeling tasks. 

## Prerequisites

- [An application](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/)
- [A dataset](https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete/) containing the inputs you want to label. For this example, we’ll create a dataset containing a few images of pants, shirts, shoes, shorts, and skirts sourced from this [clothing dataset](https://www.kaggle.com/datasets/agrigorev/clothing-dataset-full/data)
- [A model](https://docs.clarifai.com/portal-guide/model/pcustom-model-walkthrough) or [workflow](https://docs.clarifai.com/portal-guide/workflows/). You can create your own models or workflows, or choose from those publicly available in the Community

## Step 1: Start the Labeling Task

Select **Labeling Tasks** from the collapsible left sidebar, then click the **New Labeling Task** button located in the upper-right corner of the **Labeling Tasks** page.

![](/img/images1/auto-annotation-1.png)

## Step 2: Select Dataset

You'll be redirected to the **New Labeling Task** page, where you can provide the details for creating a new task. 

Start by selecting the dataset containing the inputs you want to label automatically. To do so, click the **Select a dataset** search box and choose the dataset you want to use.

![](/img/images1/auto-annotation-2.png)

If you don't already have a dataset, click the **Create new Dataset with all inputs** button. Then, provide the name for the new dataset in the drop-down that appears. All the inputs in your app will be added to this new dataset.

![](/img/images1/auto-annotation-2-1.png)

## Step 3: Enable Auto-Annotation

Select the **Yes** button to enable auto-annotation. 

![](/img/images1/auto-annotation-3.png)

## Step 4: Select a Workflow

Select a model or workflow you want to use for the auto-annotation task. You can select your own models or workflows, or choose from those publicly available in the Community. 

For this example, let’s select the [General-Detection](https://clarifai.com/clarifai/main/workflows/General-Detection) workflow that detects a variety of common objects in images by drawing bounding boxes around them. 

:::caution

Use only workflows or models that output concepts; otherwise, they will not be suitable for the auto-annotation task.

:::

![](/img/images1/auto-annotation-4.png)

Next, select the concepts you want to be automatically assigned to your inputs. Note that the concepts you choose must be those already included in the workflow or model.

For this example, let’s select these concepts: `pants`, `shirt`, `shoe`, `short`, and `skirt`. 

## Step 5: Set Decision Threshold

Set the decision threshold to specify the limit at which predictions will be automatically approved or flagged for human review. You can configure the threshold in two ways:

- **Globally**: This applies to all concepts. Use the slider to set the threshold values, as described below.

![](/img/images1/auto-annotation-5.png)

- **Per concept**: This applies to each concept individually. If you choose this option, click the **Set thresholds** button. A pop-up will appear, allowing you to set the threshold values for each concept individually, as described below.

![](/img/images1/auto-annotation-7.png)

![](/img/images1/auto-annotation-6.png)

After setting the individual values, click the **Save Changes** button. 

#### Using the Slider

The slider allows you to set the threshold either by moving it or by typing the value manually in the provided field.

- **Upper limit**: Sets the value for automatically approving predictions. For example, if set to 0.90, any prediction between 0.90 and 1.0 (marked in green) will be automatically approved and used for annotation.
- **Lower limit**: Sets the value for automatically flagging predictions for further human review. For example, if set to 0.50, any prediction between 0.50 and 0.90 (marked in orange) will be flagged for human review before being accepted as an annotation. 

In this case, the predictions below the lower limit; that is, below 0.50, will be discarded, as they do not meet the set threshold.

## Step 6: Set Reviewers

Adding human review adds a critical layer of verification and validation, ensuring that the annotations are both accurate and reliable. The annotations that do not meet the set decision threshold will be passed automatically for human review. 

So, you can assign yourself as the reviewer or specify if there will be any other app collaborator(s) working on the reviewing task. 

If you click the **New collaborator** button, a pop-up will appear, allowing you to add new collaborators to the app as well as to the reviewing task. You can learn how to add a collaborator [here](https://docs.clarifai.com/clarifai-basics/applications/collaboration/). 

![](/img/images1/auto-annotation-8.png)

:::warning Review Partitioning

Distributing inputs across multiple reviewers allows you to automatically assign labeled assets to multiple reviewers. This approach improves the speed of the review process and reduces the risk of a single point of dependence. The labeled inputs will be evenly partitioned among all reviewers without duplication of the reviewing work.

:::

## Step 7: Set Task Name

Specify the name of the task to facilitate easy identification.

![](/img/images1/auto-annotation-9.png)

## Step 8: Configure Advanced Settings

You can optionally expand the **Advanced Settings** section to configure additional options for the auto-annotation task.

Within the settings, you can assign one of the following priority levels:

- **Low** — The task is of low priority.
- **Medium (default)** — The task is of medium priority.
- **High** — The task is of high priority.

![](/img/images1/auto-annotation-9-1.png)

## Step 9: Create Labeling Task

Click the **Create Labeling Task** button to create the auto-annotation task. Or, click the **Cancel** button to cancel the process. Once the task is created, the dataset will be processed through the workflow, and annotations will be generated automatically.

You’ll be redirected to the **Labeling Tasks** page, where you can see the newly created task listed in a table. You can monitor the progress of the auto-annotation in the “Labeling Status” column, where the status percentage will be displayed. Once the process is complete, the status will change to "Complete." 

![](/img/images1/auto-annotation-10.png)

You can also view other details of the auto-annotation exercise, including:

- The reviewing status;
- The dataset used;
- Priority level for the task;
- The concepts applied; 
- The labelers involved.

If you click the ellipsis icon at the end of the row for your selected task, a drop-down menu will appear. This menu allows you to perform various task management activities, such as:

- Copying the task ID;
- Creating a new dataset version;
- Editing the task;
- Deleting the task.

If you check the Input-Viewer page, you’ll notice that the bounding box annotations that met the set threshold were automatically created, without any manual intervention. 

![](/img/images1/auto-annotation-11.png)

## Step 10: Review the Annotations

As mentioned earlier, manual review ensures that the annotations created automatically meet the required quality standards and are accurate. 

To review and edit the annotations that did not meet the set decision threshold, click the **Review** button on the **Labeling Tasks** page. 

:::note

- After completing the review process, the **Review** button will become inactive, preventing further clicks.
- If there are remaining inputs requiring labeling, the **Label** button will remain active, allowing you to click it to proceed with labeling.

:::

You’ll be redirected to the tasks reviewing page, where you can start reviewing the annotations.

![](/img/images1/auto-annotation-15-1.png)

[Click here](https://docs.clarifai.com/portal-guide/annotate/review) to learn how to review the annotations created automatically.

## Step 11: Manage the Annotations

You can carry out various management actions on the created annotations on the Input-Manager page. 

To do so, select the **Inputs** option from the collapsible left sidebar, then click the **Object Mode** button at the upper-right section of the page. The **Object Mode** is a gallery that shows the objects that have been labeled on your inputs.

![](/img/images1/auto-annotation-18.png)

If you hover over an input and select it by clicking the small empty box in its upper-left corner, several options will appear, allowing you to perform various management tasks.

![](/img/images1/auto-annotation-19.png)

- The search icon appearing on the left side of the input allows you to use it to perform [Smart Object Search](https://docs.clarifai.com/portal-guide/psearch/prank) and retrieve annotated objects within other images based on their content and similarity.
- The delete icon allows you to delete the input from your app.
- The **Add Concepts** button that appears at the bottom of the page allows you to create new object annotations with the selected concepts.
- The **Remove Annotations** button that appears at the bottom of the page allows you to remove the annotation from the input.

Additionally, clicking the ellipsis next to the **Labels** section will reveal various options for filtering the display of your inputs on the page.

![](/img/images1/auto-annotation-20.png)

You can filter the display by:

- Operator — `or` or `and`
- Labeler
- [Status](https://docs.clarifai.com/api-guide/advanced-topics/status-codes#annotation-related-codes-24xxx) —  `Success`, `Awaiting Review`, `Awaiting Consensus Review`, or `Pending`

