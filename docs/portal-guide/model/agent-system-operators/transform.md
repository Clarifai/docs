---
description: Learn about our transform operators
sidebar_position: 2
---

# Transform

**Learn about our transform operators**
<hr />

Transform operators are a specific type of agent system operators that are specialized for data transformation tasks. These operators are responsible for modifying and/or augmenting your data as it passes through the workflow.

They can be used to crop out regions of an image, align an image based on the pose of a face, or even map predictions from one model to another.

:::tip

Since the transform operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow). 

:::

## Prompter

**Output**: Text

A prompt template serves as a pre-configured piece of text used to instruct a text-to-text model. It acts as a structured query or input that guides the model in generating the desired response.

Your prompt template should include at least one instance of the placeholder `{data.text.raw}`. When you input your text data at inference time, all occurrences of  `{data.text.raw}` within the template will be replaced with the provided text.
 
To create a prompter model on the workflow builder:

**1**. Search for the **prompter** template option in the left-hand sidebar of the workflow builder and drag it onto the empty workspace.

**2**. Use the pop-up that appears on the right-hand sidebar to define the template text. For instance, you might use a template like `Explain {data.text.raw}:`.

![](/img/others/prompter_1.png)

**3**. You can then connect the prompter model with a text-to-text model like `gpt4-1692119087`. 

**4**. Save your workflow.

To observe it in action, navigate to the workflow's individual page and click the **+** button to input your text. For example, you could input `the worth of $5` as your text and click the **Submit** button.

Once the model has completed processing your input, you'll see the results, starting with the earlier template text, now adapted to your input. In this case, the prompter text becomes `Explain the worth of $5:`.

![](/img/others/prompter_2.png)

:::info

You can learn how to use the prompter template with the regex-based classifier [here](https://docs.clarifai.com/portal-guide/model/agent-system-operators/algorithmic-predict#regex-based-classifier). 

:::

## Image Cropper

**Output**: Regions

Allows you to crop the input image according to each input region that is present in the input. When used in a workflow, this model can look back along the graph of the workflow to find the input image if the preceding model does not output an image itself so that you can do `image->detector->cropper` type of workflow easily.

## Image Align 

**Output**: Image

Allows you to align images using key points.

## Image Tiling Operator 

**Output**: Regions

This is an operator for tiling images into a fixed number of equal-sized images. 

## Image-to-Image

