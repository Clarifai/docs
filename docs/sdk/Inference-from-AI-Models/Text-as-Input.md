---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeTextClassifier from "!!raw-loader!../../../code_snippets/python-sdk/inference/text_classifier.py";
import CodeTextClassifierTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/textClassifier.ts";

import CodeTextGenLLM from "!!raw-loader!../../../code_snippets/python-sdk/inference/text_gen_llm.py";
import CodeTextGenLLMInference from "!!raw-loader!../../../code_snippets/python-sdk/inference/text_gen_llm_inference.py";
import CodeTextGenLLMTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/textGenerationUsingLLM.ts";

import CodeTextClassLLM from "!!raw-loader!../../../code_snippets/python-sdk/inference/text_class_llm.py";
import CodeTextClassLLMTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/textClassifierUsingLLM.ts";


import CodeTextImage from "!!raw-loader!../../../code_snippets/python-sdk/inference/text_to_image.py";
import CodeTextImageTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/textToImage.ts";

import CodeTextAudio from "!!raw-loader!../../../code_snippets/python-sdk/inference/text_to_audio.py";
import CodeTextAudioTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/textToAudio.ts";

import CodeTextEmbedder from "!!raw-loader!../../../code_snippets/python-sdk/inference/text_embedder.py";
import CodeTextEmbedderTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/textEmbedder.ts";

import CLITextClassifier from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/text_classifier.sh";
import CLITextGenLLMInference from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/text_gen_llm_inference.sh";
import CLITextGenLLM from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/text_gen_llm.sh";
import CLITextClassLLM from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/text_class_llm.sh";
import CLITextImage from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/text_to_image.sh";
import CLITextAudio from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/text_to_audio.sh";
import CLITextEmbedder from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/text_embedder.sh";


import CodeOutputTextClassifier from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/text_classifier.txt";
import CodeOutputTextGenLLM from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/text_gen_llm.txt";
import CodeOutputTextClassLLM from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/text_class_llm.txt";
import CodeOutputTextEmbedder from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/text_embedder.txt";



# Text as Input

**Learn how to perform inference with text as input using Clarifai SDKs**
<hr />

Unlock the potential of Clarifai's state-of-the-art text-based AI features, allowing you to elevate your applications with unparalleled accuracy and efficiency. Dive into a comprehensive suite of tools designed to simplify the integration of Clarifai's AI capabilities, empowering developers to unleash the potential of text-driven applications across various domains. Discover a robust and developer-friendly SDKs that streamlines the incorporation of advanced text-based AI models, making it easier than ever to implement powerful natural language processing solutions.

:::tip Clarifai CLI 

Learn how to use the Clarifai CLI (Command Line Interface) tool [here](https://docs.clarifai.com/sdk/cli).

:::

## Text Classifier 

Empower your applications with text classification [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-classifier%22%5D%7D%5D) using Clarifai's Predict API for Text. By providing input text to your preferred classification model, you can gain valuable insights into the content's nature. This API offers flexibility, allowing you to provide data through URLs or files for seamless text classification.


:::note
The file size of each text input should be less than 20MB. Learn more [here](https://docs.clarifai.com/sdk/managing-inputs#api-upload-limits).
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextClassifier}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextClassifier}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextClassifierTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLITextClassifier}</CodeBlock>
</TabItem>
</Tabs>






## Text Generation Using LLM

Empower your applications with dynamic text creation using the robust capabilities of the Clarifai Predict API. This API leverages cutting-edge text generation [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D) to generate textual content dynamically based on user-defined prompts, providing a versatile and powerful tool for various applications.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextGenLLM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextGenLLM}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextGenLLMTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLITextGenLLM}</CodeBlock>
</TabItem>
</Tabs>

### Set Inference Parameters 

When making predictions using LLMs on our platform, some models offer the ability to specify various inference parameters to influence their output. These parameters control the behavior of the model during the generation process, affecting aspects like creativity, coherence, and the diversity of the generated text.

You can learn more about them [here](https://docs.clarifai.com/portal-guide/ppredict/generative-ai). 

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextGenLLMInference}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLITextGenLLMInference}</CodeBlock>
</TabItem>
</Tabs>

## Text Classifier Using LLM

Dive into the realm of text classification with Clarifai's Predict API, where you can leverage Language [Models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D) (LLM) to categorize text based on carefully constructed prompts.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextClassLLM}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextClassLLM}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextClassLLMTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLITextClassLLM}</CodeBlock>
</TabItem>
</Tabs>



## Text  to Image

Leverage the power of the Predict API to seamlessly transform textual input into vibrant and expressive images. With the Text to Image [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-image%22%5D%7D%5D), you can effortlessly generate visually compelling content by providing text as input.




<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextImage}</CodeBlock>
    <details>
  <summary>Output</summary>
    <img src="/img/python-sdk/text_to_image.png" />
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextImageTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLITextImage}</CodeBlock>
</TabItem>
</Tabs>



## Text to Audio

The Text to Audio [models](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22text%22%5D%7D%2C%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22speech-synthesis%22%2C%22text-to-speech%22%5D%7D%5D), powered by our Predict API, seamlessly transforms provided textual content into an audio file using advanced speech synthesis models. This capability allows users to effortlessly convert written text into a natural and expressive audio experience.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextAudio}</CodeBlock>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextAudioTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLITextAudio}</CodeBlock>
</TabItem>
</Tabs>



## Text Embedder

The Predict API offers a versatile set of capabilities, including the conversion of text into embedding vectors through the Text Embedder [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-embedder%22%5D%7D%5D). This powerful functionality serves various purposes, making it an invaluable tool for applications such as Semantic Similarity Analysis, Content Recommendation Systems, Anomaly Detection, and Document Clustering.


<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTextEmbedder}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTextEmbedder}</CodeBlock>
</details> 
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeTextEmbedderTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLITextEmbedder}</CodeBlock>
</TabItem>
</Tabs>




