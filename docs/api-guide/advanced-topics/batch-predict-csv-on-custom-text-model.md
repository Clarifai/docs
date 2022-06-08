---
description: Enjoy the convenience of working with CSV files and text.
sidebar_position: 4
---

# Batch Predict CSV on Custom Text Model

**Enjoy the convenience of working with CSV files and text**
<hr />

Below is a script that can be used to run predictions on a batch of text/sentences stored in a CSV file, using your custom text model.

To start, you'll need to create your own Custom Text Model, either via [our Portal](https://docs.clarifai.com/portal-guide/model/pcustom-model-walkthrough/) or [using the API](https://docs.clarifai.com/api-guide/model/custom-model-walkthrough/).

Make sure to record the model ID and version ID that you want to use \(each model gets a version ID after being successfully trained\), as well as the API key of the application in which the model exists.

This script assumes that you have a CSV file which has one column named "text" where the text you want to run predictions on is. It'll output another CSV file containing the predicted concepts for each text, together with confidence values.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonBatchPredict from "!!raw-loader!../../../code_snippets/api-guide/advanced_topics/batch_predict_csv.py";

<Tabs>
<TabItem value="nlp_model_predicts.py" label="nlp_model_predicts.py" default>
    <CodeBlock className="language-python">{PythonBatchPredict}</CodeBlock>
</TabItem>

</Tabs>

## Example Usage

Let's say you have the following CSV file, and you want to predict whether the sentence is grammatically positive or negative for each text in a row. You first build a custom text model that was created to map text into two concepts: "positive" and "negative. 

See our [Custom Text Model walkthrough](https://docs.clarifai.com/api-guide/model/custom-text-model-walkthrough/) on how to do that via our API.

<Tabs>
<TabItem value="my_data.csv" label="my_data.csv" default>

```bash
number,text
1,"We have never been to Asia, nor have we visited Africa."
2,"I am never at home on Sundays."
3,"One small action would change her life, but whether it would be for better or for worse was yet to be determined."
4,"The waitress was not amused when he ordered green eggs and ham."
5,"In that instant, everything changed."
```

With that, you can run the script on the CSV file in the following manner, which will produce a new CSV file.

```bash
python nlp_model_predicts.py --api_key YOUR_API_KEY --model_id YOUR_MODEL_ID --model_version YOUR_MODEL_VERSION_ID --csv_file my_data.csv --top_n 2
```
</TabItem>
</Tabs>

<Tabs>
<TabItem value="my_data_results.csv" label="my_data_results.csv" default>

```bash
text,predict_1_concept,predict_1_value,predict_2_concept,predict_2_value
"We have never been to Asia, nor have we visited Africa.",negative,1.000,positive,0.000
I am never at home on Sundays.,negative,1.000,positive,0.000
"One small action would change her life, but whether it would be for better or for worse was yet to be determined.",positive,1.000,negative,0.000
The waitress was not amused when he ordered green eggs and ham.,negative,1.000,positive,0.000
"In that instant, everything changed.",positive,0.998,negative,0.002
```
</TabItem>
</Tabs>
