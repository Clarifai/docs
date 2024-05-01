---
description: Changelog for Clarifai Release 10.4
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -55
pagination_next: null
pagination_prev: product-updates/changelog/release103
draft: true
---

# Release 10.4

**Release Date:** May 7th, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Added symmetric and asymmetric search capabilities within the Input-Manager | <ul><li> Symmetric search allows users to find text inputs that closely resemble other text inputs, facilitating easy identification of similar content. On the other hand, asymmetric search empowers users to search for text inputs that effectively answer specific query questions, enhancing the precision and relevance of search results. </li></ul>|

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published new models <br/><br/>_(Clarifai-hosted models are the ones we host within our Clarifai Cloud. Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys)_|  <ul><li>Wrapped [Command-R+](https://clarifai.com/cohere/generate/models/command-r-plus), a highly efficient, multilingual, enterprise-grade LLM optimized for real-world business applications, boasting advanced RAG capabilities and a 128k-token context window. </li><li>Wrapped [Gemini 1.5 Pro](https://clarifai.com/gcp/generate/models/gemini-1_5-pro), a powerful, efficient LLM with 1 million long-context window, enabling advanced reasoning and comprehension across various data types. </li><li>Wrapped [Mixtral-8x22B](https://clarifai.com/mistralai/completion/models/mixtral-8x22B), the latest and largest Mixture of Expert LLM from Mistral AI. It's a state-of-the-art machine learning model using Mixture 8 of Experts (MoE) 22b models. </li><li>Wrapped [Qwen1.5-32B](https://clarifai.com/qwen/qwenLM/models/qwen1_5-32B-chat), a model that provides competitive AI performance with optimized efficiency, making it a strong choice for diverse, multilingual applications. </li><li>Clarifai-hosted [Gemma-1.1-7b-it](https://clarifai.com/gcp/generate/models/gemma-1_1-7b-it), a lightweight, decoder-only LLM trained on 6 trillion tokens of diverse text data, suitable for various text generation tasks with improved quality and safety measures. </li><li>Clarifai-hosted [Llama-3-8B-Instruct](https://clarifai.com/meta/Llama-3/models/Llama-3-8B-Instruct). Llama 3 instruction-tuned models are optimized for dialogue use cases and outperform many of the available open source chat LLMs on common industry benchmarks.  </li><li>Wrapped [Llama-3-70B-Instruct](https://clarifai.com/meta/Llama-3/models/llama-3-70B-Instruct), an advanced, scalable language model designed for diverse applications, offering state-of-the-art performance in coding, reasoning, and multi-use conversational capabilities. </li><li>Wrapped [Llama-3-70B](https://clarifai.com/meta/Llama-3/models/llama-3-70B). Llama-3 is a state-of-the-art large language model designed for enhanced reasoning and coding. It has a  broad application across multiple languages and tasks. </li></ul>| 

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Enabled deletion of associated model assets when removing a model annotation| <ul><li>Now, when deleting a model annotation, the associated model assets are also marked as deleted.</li></ul> |

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed issues with playing a video input within the Input-Viewer| <ul><li> Previously, users experienced limitations when trying to control video playback, such as navigating to specific points, skipping forward or backward, or performing any interactive actions. Any such attempt to scroll through a video could result in it snapping back to the starting point unexpectedly. We fixed these issues. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed issues with renaming concepts in the Input-Viewer| While on the Input-Viewer screen, you can rename a concept listed in the right sidebar, which also establishes a relation for it.<br/><br/><ul><li>Previously, renaming a concept prevented you from using the **Filter by concept** field to search for the new name. We have fixed this issue, and you can now search for both the original concept and the new relation created for it.</li><li>Previously, when creating a new relation for a concept that already had a previous relation, the new relation could be added without removing the old one. We fixed this issue, and now, before creating new relations, old ones are removed automatically.</li> <li>We also fixed an issue with entering the same name of a concept. For example, previously, if you generated predictions from classifications — let’s say one of the predicted concepts is “sky.” If you edited “sky” to “wall,” a new relation was created. However, if you edited the concept name again to “sky,” a new relation was erroneously created. We fixed the issue, and now since the relation and the originally predicted concept are the same, we remove the “wall” relation.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue with the gearbox icon in the Input-Viewer|<ul><li>Previously, opening the gearbox popover, selecting a model or workflow, and then closing the popover resulted in the gearbox icon remaining gray, indicating that nothing was selected inside the popover. </li><li>We fixed the issue, and now the gearbox icon turns blue when an item is selected within its popover.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with managing object-track annotations for video inputs on the Input-Viewer|<ul><li>Previously, the timeline next to the left of the scrollbar of a video input represented seconds instead of frames. We fixed the issue, and it now accurately represents frames, as intended. Additionally, we addressed an issue that prevented the slider from reaching the last frame of a video input.</li></ul>|


## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with visual searches| <ul><li> Previously, visual searches for inputs on the Input-Manager was sometimes slow. We fixed it. </li></ul> |


|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|   |   |  |