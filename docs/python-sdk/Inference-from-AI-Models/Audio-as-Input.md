---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAudioText from "!!raw-loader!../../../code_snippets/python-sdk/inference/audio_to_text.py";



import CodeOutputAudioText from "!!raw-loader!../../../code_snippets/python-sdk/inference/outputs/audio_to_text.txt";

# Audio as Input

The Clarifai Python SDK for Audio Processing provides a comprehensive set of tools and functionalities, enabling you to process audio inputs with unparalleled ease and efficiency. Whether you're working on applications related to voice recognition, sound classification, or speech-to-text conversion, our SDK streamlines the development process, allowing you to focus on building cutting-edge functionalities.


## Audio to Text

Harness the power of the Predict API to seamlessly transform audio files into text-based formats using our advanced Automatic Speech Recognition (ASR) [model](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22audio-to-text%22%5D%7D%5D). With this functionality, you can effortlessly transcribe spoken words from audio, opening up possibilities for diverse applications such as transcription services, voice command processing, and more.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAudioText}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputAudioText}</CodeBlock>
</details>
