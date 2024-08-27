---
description: Learn about our algorithmic predict operators
sidebar_position: 7
---

# Algorithmic Predict

**Learn about our algorithmic predict operators**
<hr />

Algorithmic Predict refers to a category of operators that leverage predefined algorithms to make predictions or generate outputs based on input data.

You can use the prediction results to understand, classify, or organize your data. You can also use them to drive behaviors in other nodes in your workflow.

These operators take specific input types and then return predictions about things like concepts, regions, characters, words, or the abstract visual characteristics of your inputs.

:::tip

Since the algorithmic predict operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows [here](https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow). 

:::

## Regex-Based Classifier 

**Input**: Text

**Output**: Concepts

This operator allows you to classify text using regular expressions. When the specified regex pattern matches the text, the text is assigned to one of the predefined concepts. 

Let's demonstrate how you can use the Regex-Based Classifier, alongside [a Prompter template](https://docs.clarifai.com/portal-guide/agent-system-operators/prompter), to efficiently classify text. 

**1**. Go to the workflow builder page. Then, search for the **prompter** template node in the left sidebar and drag and drop it onto the empty workspace.

 Use the pop-up that appears on the right sidebar to set up the template text. For this example, let's use this template text: 

```text
<s>[INST]<<SYS>>Classify the following description into one of the following classes: ["cat," "dog," "cheetah," "lion"]. Respond only with one of the provided classes.<</SYS>>[/INST]\n{data.text.raw} 
```
     
:::note

Since we'll use the [llama2-13b-chat](https://clarifai.com/meta/Llama-2/models/llama2-13b-chat) model to help with the classification, we format the prompt text using the special tokens it requires for the specific structure of its prompts. We also include the `{data.text.raw}` placeholder to meet the requirements of the **Prompter** template format.

:::

**2**. Search for the **text-to-text** node in the left sidebar and drag and drop it onto the workspace. Then, search for the **llama2-13b-chat** model on the right sidebar and connect it to the prompter model. 

**3**. Search for the **regex-based classifier** node in the left sidebar and drag and drop it onto the workspace. On the right sidebar, click the **SELECT CONCEPTS** button and use the pop-up that appears to select the relevant [concepts](https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete) already existing in your application. 

For this example, we select the following concepts: `cat, dog, cheetah, lion`. After selecting the concepts, click the **OK** button. 

![](/img/others/regex_1_1.png)

In the **regex** field, provide the regex pattern that will be used to classify the text. If the pattern matches, the text will be classified as the selected concept. 

For this example, we provide `\bcat\b`, which would match the word "cat" in instances where it appears as a whole word, surrounded by word boundaries.

**4**. Connect the **text-to-text** model with the **regex-based classifier**. 

Lastly, click the **Save Workflow** button to save your workflow.

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

Then, the Regex-Based Classifier will categorize the response into one of the provided concepts, which you can feed into other downstream tasks, such as an [Annotation Writer](https://docs.clarifai.com/portal-guide/agent-system-operators/push#annotation-writer) to create annotations for inputs.

## Language Identification Operator 

**Input**: Text

**Output**: Concepts

The Language Identification Operator is designed to automatically detect the language of a given text. It takes in text input, which can be in any form — paragraphs, sentences, or even shorter phrases. It then analyzes the text to automatically determine which language it is written in. 

The output of the operator is typically a language code (e.g., `en` for English, `fr` for French, `es` for Spanish) that corresponds to the detected language.

The operator leverages either of the following libraries:

- `langdetect` — It's an open-source tool for language detection. This library is known for its ability to recognize a broad range of languages based on text samples. It uses algorithms that compare the text against language profiles created from a large corpus of multilingual data. It assigns a probability score to each language, which helps to identify the most likely language for the given text.

- `fastText` — Developed by Facebook's AI Research (FAIR) lab, this open-source library provides efficient language identification capabilities. It can recognize a large number of languages and is particularly fast, making it suitable for processing large volumes of text. It is based on word embeddings and character-level n-grams, which allows it to handle short or informal texts well.

To use the operator, go to the workflow builder page and search for the `language-id-operator` node in the left sidebar. Drag and drop it onto the empty workspace and connect it to the `IN` element.

You can use the right sidebar to set up the following output configurations:

- **library** — Select the library you want to use for the language identification — either `langdetect` or `fastText`. 
- **topk** — Set the maximum number of predicted languages. 
- **threshold** — Set a confidence score that determines the likelihood that the detected language is correct. Languages with a confidence level above the set threshold will be returned. 
- **lowercase** — If set to true, the provided text will be converted to lowercase letters. 

Lastly, click the **Save Workflow** button to save your workflow.

![](/img/agent-system-operators/language-identification-operator.png)

To observe it in action, navigate to the operator's individual page and click the **+** button to input your text.

For this example, let's provide [this text](https://samples.clarifai.com/model-gallery/Text/text-romance-french.txt).

The operator will process the text and identify its language. 

![](/img/agent-system-operators/language-identification-operator-1.png)

## Barcode Operator

**Input**: Image

**Output**: regions[…].data.text

The Barcode Operator is used to detect and recognize a wide range of barcode types within images. It processes image inputs and detects barcodes contained in them. 

It works by recognizing and decoding the information encoded within each barcode. This includes reading the patterns of bars and spaces or, in the case of QR codes, interpreting the matrix of squares.

For each detected barcode, the operator assigns a specific region within the image that contains the barcode text. This helps in isolating and extracting the exact area of the image where the barcode is located. 

It then outputs the recognized text or data from the barcode alongside the region information, which allows for easy extraction and use of the barcode data.

It supports the following types of barcodes:

- **EAN/UPC** — Commonly used in retail for product identification.
- **Code 128** — A versatile barcode often used in logistics and packaging.
- **Code 39** — Frequently used in inventory management and non-retail settings.
- **Interleaved 2 of 5** — Typically used for encoding numeric information in industries like warehousing.
- **QR Code** — A matrix barcode that can encode a variety of data types, including URLs, text, and more.

To use the operator, go to the workflow builder page and search for the `barcode-operator` node in the left sidebar. Drag and drop it onto the empty workspace and connect it to the `IN` element.

Lastly, click the **Save Workflow** button to save your workflow.

![](/img/agent-system-operators/barcode-operator.png)

To observe it in action, navigate to the operator's individual page and click the **+** button to input your image.

For this example, let's provide [this image](https://samples.clarifai.com/model-gallery/images/QRcode-001.jpeg).

The operator will process the image and detect the QR code. 

![](/img/agent-system-operators/barcode-operator-1.png)