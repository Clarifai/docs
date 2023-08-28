---
description: Learn about our algorithmic predict operators
sidebar_position: 6
---

# Algorithmic Predict

**Learn about our algorithmic predict operators**
<hr />

Prediction models are the "intelligent" part of your AI workflows. Predictions help you to understand, classify, and organize your data. Predictions can be used to drive behaviors in other nodes in your workflow.

Predictions take specific input types and then return predictions about things like the concepts, regions, poses, characters, words, and the abstract visual characteristics of your inputs.

:::tip

Since the algorithmic predict operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow). 

:::

## Regex-Based Classifier 

This operator allows you to classify text using regular expressions. When the specified regex pattern matches the text, the text is assigned to one of the predefined concepts. 

Let's demonstrate how you can use the Regex-Based Classifier, alongside [a Prompter template](https://docs.clarifai.com/portal-guide/model/agent-system-operators/transform#prompter), to efficiently classify text. 

**1**. Go to the workflow builder. Then, search for the **prompter** template option in the left-hand sidebar and drag it onto the empty workspace.

 Use the pop-up that appears on the right-hand sidebar to set up the template text. For this example, let's use this template text: 

```text
<s>[INST]<<SYS>>Classify the following description into one of the following classes: ["cat", "dog", "cheetah", "lion"]. Respond only with one of the provided classes.<</SYS>>[/INST]\n{data.text.raw} 
```
     
:::note

Since we'll use the [llama2-13b-chat](https://clarifai.com/meta/Llama-2/models/llama2-13b-chat) model to help with the classification, we format the prompt text using the special tokens it requires for the specific structure of its prompts. We also include the `{data.text.raw}` placeholder to meet the requirements of the **Prompter** template.

:::

**2**. Search for the **text-to-text** option in the left-hand sidebar and drag it onto the workspace. Then, search for the **llama2-13b-chat** model on the right-hand sidebar and connect it to the prompter model. 

**3**. Search for the **regex-based classifier** option in the left-hand sidebar and drag it onto the workspace. On the right-hand sidebar, click the **SELECT CONCEPTS** button and use the pop-up that appears to select the relevant concepts already existing in your application. For this example, we select the following concepts: `cat, dog, cheetah, lion`.

In the **regex** field, provide the regex pattern that will be used to classify the text. If the pattern matches, the text will be classified as the selected concept. For this example, we provide `\bcat\b`, which would match the word "cat" in instances where it appears as a whole word, surrounded by word boundaries.

**4**. Connect the **text-to-text** model with the **regex-based classifier** and save your workflow. 

![](/img/others/regex_1.png)

To observe it in action, navigate to the workflow's individual page and click the **+** button to input your text. 

For this example, let's provide the following input: 

```text
A small, four-legged mammal with soft fur, typically characterized by its whiskers, sharp retractable claws, and acute senses. Known for its independent and curious nature, it often displays a variety of behaviors such as grooming itself, purring, and occasionally hunting. What is this animal?
```

This is the prompt text we get for the model:

```text
<s>[INST]<<SYS>>Classify the following description into one of the following classes: [''cat'', ''dog'', ''cheetah'', ''lion'']. Respond only with one of the provided classes.<</SYS>>[/INST]\nA small, four-legged mammal with soft fur, typically characterized by its whiskers, sharp retractable claws, and acute senses. Known for its independent and curious nature, it often displays a variety of behaviors such as grooming itself, purring, and occasionally hunting. What is this animal?[/INST]
```

The model will process the input and classify the description into one of the provided classes. 

![](/img/others/regex_2.png)

Then, the Regex-Based Classifier will categorize the response into one of the provided concepts, which you can feed into other downstream tasks, such as [an Annotation Writer](http://localhost:3000/portal-guide/model/agent-system-operators/push#annotation-writer) to create annotations for inputs.

## KNN Classifier

**Output**: Concepts

Use k-nearest neighbors (KNN) search and plurality voting amongst the nearest neighbors to classify new instances. Recommended when you only have a small dataset, like one image per concept. 

## Language Identification Operator

**Output**: Concepts

Operator for language identification using the langdetect library.

## Cross-App Input Searcher

**Output**: Hits

Triggers a visual search in another app based on the model config, if concept(s) are found in images and returns the matched search hits as regions.



## Isolation Operator

**Output**: Regions

This is an operator that computes the distance between detections and assigns an isolation label.

## Barcode Operator

**Output**: Regions

This is an operator that detects and recognizes barcodes from an image. It assigns regions with barcode text for each detected barcode. Supports EAN/UPC, Code 128, Code 39, Interleaved 2 of 5, and QR Code.

## Custom Code Operator 

**Output**: Any

This model expects a Python 3.9 driver function with the following signature: `def main(req):`. Here, "req" is a dictionary with a single key "inputs" that holds a list of "Input" objects from `clarifai_grpc.grpc.api.service_pb2` —these inputs are normally sent in API prediction requests. 

The available libraries for importing are: NumPy, SciPy, PIL, and Clarifai gRPC. The response should be a Python dictionary whose nested structure mirrors that of `MultiOutputResponse` in `clarifai_grpc.grpc.api.service_pb2`. 

IDs in inputs should be forwarded to outputs 1-to-1. You can also provide helpers to reference in your main implementation. All the code must be passed in via `output_info.params.operator_code`. 

Each execution can last up to 50 seconds and consume 256 MBs of memory.

## AWS Lambda

**Output**: Any

This model sends data to an AWS lambda function so you can implement any arbitrary logic to be handled within a model prediction or workflow. 
The request our API sends is a `PostModelOutputsRequest` in the 'request' field, and the response we expect is a `MultiOutputResponse` response in the `response` field. 

## Input Searcher

## Image Color Recognizer