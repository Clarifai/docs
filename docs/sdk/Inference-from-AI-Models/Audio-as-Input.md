---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAudioText from "!!raw-loader!../../../code_snippets/python-sdk/inference/audio_to_text.py";
import CodeAudioTextTS from "!!raw-loader!../../../code_snippets/python-sdk/inference/audioToText.ts";

import CLIAudioText from "!!raw-loader!../../../code_snippets/python-sdk/inference/cli/audioToText.sh";

import CodeOutputAudioText from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/audio_to_text.txt";

# Audio as Input

**Learn how to perform inference with audio as input using Clarifai SDKs**
<hr />

The Clarifai SDKs for Audio Processing provides a comprehensive set of tools and functionalities, enabling you to process audio inputs with unparalleled ease and efficiency. Whether you're working on applications related to voice recognition, sound classification, or speech-to-text conversion, our SDK streamlines the development process, allowing you to focus on building cutting-edge functionalities.

:::tip Clarifai CLI 

Learn how to use the Clarifai CLI (Command Line Interface) tool [here](https://docs.clarifai.com/sdk/cli).

:::


## Audio to Text

Harness the power of the Predict API to seamlessly transform audio files into text-based formats using our advanced Automatic Speech Recognition (ASR) [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22audio-to-text%22%5D%7D%5D). With this functionality, you can effortlessly transcribe spoken words from audio, opening up possibilities for diverse applications such as transcription services, voice command processing, and more.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAudioText}</CodeBlock>
    <details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioText}</CodeBlock>
</details>
</TabItem>
<TabItem value="typescript" label="Typescript">
    <CodeBlock className="language-typescript">{CodeAudioTextTS}</CodeBlock>
</TabItem>
<TabItem value="bash" label="Bash">
    <CodeBlock className="language-bash">{CLIAudioText}</CodeBlock>
</TabItem>
</Tabs>


