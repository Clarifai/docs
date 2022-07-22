---
description: Capture information from an organization's form that are stored as PDF documents.
sidebar_position: 5
---

# Intelligent Document Processing

**Capture information from an organization's form that are stored as PDF documents**
<hr />

## Introduction

In this series of posts, advanced users at Clarifai will present working solutions to help you kick-start your own AI solutions.

### The Use Case

There is a problem facing many organizations as they attempt to modernize: digitizing documents.
In order to effectively gain insights from their old paper records, organizations must transform them into digital versions.

Now, simply making a digital copy of a document is actually rather easy⁠—simply scan it or take its photo.
The problem, though, is that while this changes how the document is stored, it doesn't give you any real improvements to accessing the data therein.

Previously, this required a laborious, manual, data entry process. Someone would have to transcribe the documents one-by-one, and enter each field into the books.
This presents a problem to organizations that potentially have thousands and thousands of documents in their records, which can be intractable when it comes to the time and cost of the effort.
Luckily, there's a middle-ground.

Using Clarifai's publicly available Optical Character Recognition (OCR) models, organizations can leverage Artifical Intelligence to both do this in a quick and cost-effective manner, and without sacrificing the insights they would have from recording every single value.  

### Assumptions

Before we begin, let us make some assumptions:

1. The forms are standardized with static regions for fixed values; for example, the "name" field will always appear in the same location across all forms;
1. All the entries will be in English, using the Roman alphabet;
1. The organizations have a simple means of converting their paper documents to pdf documents, and storing them to a local file system, which is a common feature on most commercial print stations;
1. All the forms will be type-filled, not handwritten, so as to make generating examples easier.

These assumptions were largely made to make this example succinct and easily digestable.

## Setup

Before we get to the implementation, let's take a moment to provide an overview thereof.

First off, the broad strokes have already been laid out: convert pdf to image, use Clarifai for OCR, and from that you'll have the text, which you then store in order to access later.
Clearly, there are some gaps that need to be filled in though⁠—the largest of which is just _how_ the document will be processed.

Working backwards a bit, the way in which the information will be recorded will be highly dependent on the organization's data policies.
So to simplify things, we will utilize Clarifai's platform to store the annotated documents.

Given assumption 1 above, we know that the fields will be in fixed locations.
This means we can define those ahead of time, and here we've chosen to do so using a JSON file, in which we define the document's structure in a manner similar to:

```json
{
    "field_1": [0.25, 0.25, 0.50, 0.50],
    "field_2": [0.50, 0.25, 0.75, 0.50],
    .
    .
    .
    "field_n": [0.25, 0.75, 0.50, 1.00]
}
```

Each key-value pair in the JSON file corresponds to the field name, the key (`"field_n"`), and the region coordinates in the form of $[x_0, y_0, x_1, y_1]$.

:::important note
All the region coordinates on Clarifai are relative, not pixel values. This is important, as other image processing libraries might use the pixel values instead.
We will address converting between these values below.
:::

Given that we know the name of the field, and where it is on the image, we can easily iterate through all of these field values, and annotate the corresponding region on the image. Having the coordinate values will also let us take sub-crops of the document to use the OCR model to predict on; isolating the text associated with a given field.

With this, we have a more fleshed out plan:

> We assume that the user is already familiar with basic platform usage, and has an account.
> If more information is needed here, please find the appropriate section of the document in order to access more in-depth information.

1. Convert PDF to Image, and upload it on the Clarifai platform for storage.
1. Read values from the JSON where the form's fields and their locations are defined.
1. For each field and region:
    - Extract a sub-crop for the field;
    - Use Clarifai's OCR model to predict the text associated with the field;
    - Write the predicted text back to the input as an annotation.

Now let's dive into the implementation:

Starting with the conversion of a PDF document to an image, we can handle this with the open-source library `pdf2image`, which does exactly what the name suggests.

In order to be a bit more defensive with our programming, we will wrap the call to the `pdf2image.convert_from_path` method in a separate function, and do some quick sanity checking to make sure the PDF file exists.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonSetup from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/intelligent_document_processing_setup.py";
import PythonFullImplementation from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/intelligent_document_processing_full_implementation.py";



<Tabs>

<TabItem value="python" label="Python" default>
    <CodeBlock className="language-python">{PythonSetup}</CodeBlock>
</TabItem>

</Tabs>

This will return iterable images that correspond to the individual pages of the document.

:::important note
For simplicity's sake, our form only has one page.
:::

## Full implementation

<Tabs>

<TabItem value="intelligent_document_processing.py" label="intelligent_document_processing.py">
    <CodeBlock className="language-python">{PythonFullImplementation}</CodeBlock>
</TabItem>

</Tabs>