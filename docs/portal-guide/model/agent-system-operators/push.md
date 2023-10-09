---
description: Learn about our push operators
sidebar_position: 3
---

# Push

**Learn about our push operators**
<hr />

Push operators help you to automate processes. You can trigger a wide variety of actions based on predictions made by models in your workflow. You can automatically add a label to an image based on predicted concepts, send an SMS message when a certain object is detected, and more.

:::tip

Since the push operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow). 

:::

## Annotation Writer 

**Output**: Any

Annotation Writer allows you to write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation. 

Let's demonstrate how you can use an Annotation Writer, alongside a [Regex-Based Classifier](https://docs.clarifai.com/portal-guide/model/agent-system-operators/algorithmic-predict/#regex-based-classifier), to automatically label inputs.

**1.** Create a labeling [task](https://docs.clarifai.com/portal-guide/annotate/create-a-task). Then, go to the **Tasks** listing page and copy the ID of the task. 

![](/img/others/annotation_writer_1.png)

**2.** Go to the workflow builder. Search for the `regex-based-classifier` option in the left-hand sidebar and drag and drop it onto the empty workspace.

In the right-hand sidebar, click the **SELECT CONCEPTS** button and use the pop-up that appears to select the relevant [concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) already existing in your application. For this example, we select the `bucket` concept. 

In the **regex** field, provide the regex pattern that will be used to classify the text. If the pattern matches, the text will be classified as the selected concept. For this example, we provide `\bbucket\b`, which would match the word "bucket" in instances where it appears as a whole word, surrounded by word boundaries.

**3.** Search for the **annotation-writer** option in the left-hand sidebar and drag and drop it onto the workspace. Within the right-hand sidebar, specify the values for **annotation_status**, **annotation_user_id**, and **task_id** (the task ID you previously copied). 

![](/img/others/annotation_writer_2.png)

**4.** Connect the operators and save your workflow. 

**5.** Go to your app's settings page and change the [Base Workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) to the workflow you just created. 

**6.** [Upload a text input](https://docs.clarifai.com/portal-guide/data/#upload-inputs) into your app, such as `I'm looking for a bucket list`. If you go to the Input-Viewer page, you'll notice that the text input has been automatically labeled with the `bucket` concept. 

The Regex-Based Classifier successfully classified the input and forwarded it to the Annotation Writer to annotate it. 

![](/img/others/annotation_writer_3.png)

## Status Push 

**Output**: Any

This model pushes the processing status of a batch of inputs ingested through vendor/inputs endpoint in one request.

## Results Push 

**Output**: Any

This model pushes Clarifai’s prediction results in an external format.

## Email Alert

**Output**: Any

This model will send an email if there are any data fields input to the specified model.

## SMS Alert 

**Output**: Any

This model will send an SMS if there are any data fields input to the specified model.
