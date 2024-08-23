---
description: Learn about our ML predict operators
sidebar_position: 6
---

# ML Predict

**Learn about our ML predict operators**
<hr />

ML Predict operators are specifically designed to take in data inputs and produce predictions or inferences based on a pre-trained machine learning model. 

:::tip

Since the ML Predict operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow).

:::

## Tesseract Operator

**Input**: Image

**Output**: Text

The Tesseract operator is designed to perform Optical Character Recognition (OCR) using the Tesseract OCR engine. It takes in image inputs, which could be in various formats (e.g., JPEG, PNG, TIFF) containing text. This text might be handwritten, printed, or typed, and could be in various languages.

Then, using the Tesseract OCR libraries, the operator processes these images to extract the text content. Tesseract is a well-known open-source OCR engine that supports multiple languages and can recognize and convert the text within images into usable, editable digital text.

To use the operator, go to the workflow builder page and search for the `tesseract-operator` node in the left sidebar. Drag and drop it onto the empty workspace and connect it to the `IN` element. 

The search box in the right sidebar lets you choose the language for optical character recognition. The operator supports multiple languages, allowing you to select your preferred language for the output configuration.

Lastly, click the **Save Workflow** button to save your workflow. 

![](/img/agent-system-operators/tesseract-operator.png)

To observe it in action, navigate to the operator's individual page and click the **+** button to input your image. 

For this example, let's provide [this image](https://samples.clarifai.com/featured-models/model-ocr-scene-text-las-vegas-sign.png).

The operator will process the image and extract its text content.

![](/img/agent-system-operators/tesseract-operator-1.png)