---
description: Changelog for Clarifai Release 10.3
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -54
pagination_next: null
pagination_prev: product-updates/changelog/release102
---

# Release 10.3

**Release Date:** April 2nd, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## App Creation

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Introduced app templates for streamlined app creation | <ul><li>We now provide pre-built, ready-to-use templates that expedite the app creation process. Each template comes with a range of resources, such as datasets, models, workflows, and modules, allowing you to quickly hit the ground running with your app creation process.</li></ul> |

## Node SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) **(Developer Preview)** | Released a new [Node SDK](https://github.com/Clarifai/clarifai-nodejs) | <ul><li>We released the first open source version (for developer preview) of a Node SDK for JavaScript/TypeScript developers focused on creating web services and web apps consuming AI models. </li> <li> It is designed to offer a simple, fast, and efficient way to experience the power of Clarifai’s AI platform — all with just a few lines of code.</li><li>You can check its documentation [here](https://docs.clarifai.com/nodejs-sdk/installation-guide/).</li></ul>|

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published new models <br/><br/>_(Clarifai-hosted models are the ones we host within our Clarifai Cloud. Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys)_|<ul><li>Clarifai-hosted [Mxbai-embed-large-v1](https://clarifai.com/mixedbread-ai/embed/models/mxbai-embed-large-v1), a state-of-the-art, versatile, sentence embedding model trained on a unique dataset for superior performance across a wide range of NLP tasks. It also tops the [MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard). </li><li> Clarifai-hosted [Genstruct 7B]( https://clarifai.com/nousresearch/instruction-generation/models/genstruct-7b ), an instruction-generation LLM, designed to create valid instructions given a raw text corpus. It enables the creation of new, partially synthetic instruction fine-tuning datasets from any raw-text corpus. </li><li>Wrapped [Deepgram’s Aura Text-to-Speech](https://clarifai.com/deepgram/tts/models/aura-tts) model, which offers rapid, high-quality, and efficient speech synthesis, enabling lifelike voices for AI agents across various applications. </li> <li>Wrapped [Mistral-Large](https://clarifai.com/mistralai/completion/models/mistral-large), a flagship LLM developed by Mistral AI, and renowned for its robust multilingual capabilities, advanced reasoning skills, mathematical prowess, and proficient code generation abilities.</li><li>Wrapped [Mistral-Medium](https://clarifai.com/mistralai/completion/models/mistral-medium), Mistral AI's medium-sized model. It supports a context window of 32k tokens (around 24000 words) and outperforms Mixtral 8x7B and Mistral-7b on benchmarks across the board.</li><li>Wrapped [Mistral-Small](https://clarifai.com/mistralai/completion/models/mistral-small), a balanced, efficient large language model offering high performance across various tasks with lower latency and broad application potential.</li> <li>Wrapped [DBRX-Instruct](https://clarifai.com/databricks/drbx/models/dbrx-instruct), a state-of-the-art, efficient, open LLM by Databricks. It’s capable of handling input length of up to 32K tokens. The model excels at a broad set of natural language tasks, such as text summarization, question-answering, extraction, and coding. </li></ul>|

## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Added ability to import datasets via archive files with ease | <ul><li>Within the Input-Manager, users can now seamlessly upload archive or zipped files containing diverse data types such as texts, images, and more. </li></ul>|

## Devtools Integrations

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Integrated the `unstructured` Python library with Clarifai as a target destination connector | <ul><li>[The `unstructured` library](https://pypi.org/project/unstructured/) provides open-source components for ingesting and pre-processing images and text documents. We’ve integrated it with Clarifai to allow our users streamline and optimize the data processing pipelines for LLMs. </li></ul> |

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![enterprise](/img/enterprise.jpg) **[Enterprise-only]** | Added support for exporting your own trained models  | <ul><li>You can now export the models you own from our platform to a pre-signed URL. Upon export, you'll receive model files accessible via pre-signed URLs or private cloud buckets, along with access credentials. </li><li>Please note that we only support exporting trainable model types. Models such as `embedding-classifiers`, `clusterers`, and `agent system operators` are not eligible for export. </li></ul> |
|![improvement](/img/improvement.jpg) |Improved the Model-Viewer UI of multimodal models | <ul><li>For multimodal models like [GPT4-V](https://clarifai.com/openai/chat-completion/models/gpt-4-vision), users can provide input text prompts, include images, and optionally adjust inference settings. The output consists of generated text. </li><li>They also support the use of [3rd party API keys](https://docs.clarifai.com/api-guide/predict/text#use-third-party-api-keys) (for Enterprise Customers). </li></ul> |
|![improvement](/img/improvement.jpg)|Made improvements to the [local model upload](https://docs.clarifai.com/portal-guide/model/local-model-upload) functionality |<ul><li>We now provide users with a pre-signed URL for uploading models.</li><li>We added educational materials and tooltips to the local model upload UI. </li><li>We made other improvements to make the process of uploading models simple and intuitive. </li></ul>|
|![improvement](/img/improvement.jpg)|Enhanced the functionality of the **Actions** column within a model’s versions table|<ul><li>We refactored the column into an intuitive context menu. Now, when a user clicks on the three dots, a dropdown menu presents various options, optimizing user experience and accessibility.</li></ul>|
|![improvement](/img/improvement.jpg)|Enabled deletion of associated model assets when removing a model annotation|<ul><li>Now, when deleting a model annotation, the associated model assets are also marked as deleted.</li></ul>|

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved the functionality of the [Face workflow](http://clarifai.com/clarifai/main/workflows/Face)|<ul><li>You can now use the Face workflow to effectively generate face landmarks and perform face visual searches within your applications.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue with changing an app’s base workflow for users subscribed to the Community pricing plan |  <ul><li>Previously, users on the Community plan encountered errors when changing an app's base workflow to trigger re-indexing of the app’s inputs. We fixed the issue.</li></ul>|

## Community UI

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Added Python SDK code snippets to the **Use Model / Workflow** modal window | If you want to use a model or a workflow for making API calls, you need to click the **Use Model / Workflow** button at the upper right corner of the individual page of a model or workflow. The modal that pops up has snippets in various programming languages, which you can copy and use. <br/> <br/>  <ul><li>We introduced Python SDK code snippets as a primary tab. Users can now conveniently access and copy the Python SDK code snippets directly from the modal. </li></ul>|
|![improvement](/img/improvement.jpg)| Revamped the resource filtering experience on desktop devices | <ul><li>We relocated the filtering sidebar from the right to the left side of the screen, optimizing accessibility and user flow.</li><li>We also made other improvements to the filtering feature, such as using chevrons to mark the collapsible sections, enhancing the alignment of the clear button, and enhancing the appearance of the divider line.</li> <li>We also added `Multimodal-to-text`, `Multimodal-embedder`, and `text-to-audio` filtering options.</li></ul>  |
|![improvement](/img/improvement.jpg)|Revamped mobile resource filters with a fresh design |<ul><li> Implemented a new and improved design for resource filters on mobile platforms.</li></ul>|
|![improvement](/img/improvement.jpg)| Added ability to sort apps listed on the collapsible left sidebar of your individual app page | <ul><li>You can now sort the apps alphabetically (from A to Z) or by "Last Updated." This lets you find the apps you need quickly and efficiently. </li></ul> |
|![improvement](/img/improvement.jpg)|Enhanced markdown template functionality with custom variables|<ul><li>We have introduced a feature that allows users to insert custom variables such as `{{user_id}}` and `{{app_id}}` into markdown templates, particularly in sections like the Notes section of a model. These variables are dynamically replaced with the corresponding `user_id` and `app_id` extracted from the URL, allowing you to personalize content within your templates. </li><li>For example, within the Notes section of a model, you can now add `{{user_id}}` to dynamically display the user who created the model.</li> </ul> |
|![improvement](/img/improvement.jpg)|Improved responsiveness for 13-inch MacBooks|<ul><li>We improved responsiveness issues to ensure an optimal viewing experience for 13-inch MacBook devices with a viewport of 1440px × 900px dimensions. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with repeated consent requests for users with Google accounts| <ul><li>Previously, users logging into the Community platform using their Google accounts encountered an issue where they were repeatedly prompted to give consent upon each login. The user consent is now stored and persisted, eliminating the need for repetitive requests.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue where an undesirable background appeared when a login session expired on a public page|<ul><li>Now, when a session expires on a public page, a modal login window will appear while you're still on the same page. This allows you to easily log back in and continue where you left off. Also, closing the modal by clicking the "X" button or successfully logging in will keep you on the same public page, eliminating unnecessary navigation. </li></ul>|
| ![bug](/img/bug.jpg) |Fixed an issue with editing the scopes of a collaborator on the App Settings page| <ul><li>Previously, it was not possible to deselect scopes when editing a collaborator’s role on the App Settings page. We fixed the issue.</li><li>We also fixed an issue where some essential scopes were missing for collaborators.</li></ul> |
| ![bug](/img/bug.jpg) |Fixed an image flicker behavior issue on the Feature page| <ul><li>Previously, users experienced disruptive flickering when navigating the page, impacting the overall user experience negatively. The images now load smoothly and without any flickering.</li></ul>|
| ![bug](/img/bug.jpg)| Fixed an issue that made bullets or numbers to be invisible | <ul><li>Previously, the bullets or numbers in a list were not getting rendered properly when applying them in the Notes section of a resource. We fixed the issue. </li></ul>  |


## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) |Added support for exporting models| <ul><li>You can now use the Python SDK to [export](https://github.com/Clarifai/clarifai-python/pull/304) your own trained models to an external environment. </li></ul> |
|![new-feature](/img/new_feature.jpg)|Introduced improvements to the dataloader module | <ul><li>We added [retry mechanisms](https://github.com/Clarifai/clarifai-python/pull/307) for failed uploads and introduced systematic handling of failed inputs. These improvements optimize the data import process and minimize errors within the dataloader module.</li></ul> |
|![new-feature](/img/new_feature.jpg)|Added support for dataset version ID| <ul><li>Previously, it was not possible to access or interact with specific versions of a dataset within the Python SDK. This update introduces support for dataset versions in several key areas as detailed [here](https://github.com/Clarifai/clarifai-python/pull/315). </li></ul>|
|![improvement](/img/improvement.jpg)|Made enhancements to the RAG (Retrieval Augmented Generation) feature|<ul><li>Enhanced the RAG SDK's `upload()` function to accept the `dataset_id` parameter.</li> <li>Enabled custom workflow names to be specified in the RAG SDK's `setup()` function.</li> <li>Added support for chunk sequence numbers in the metadata when uploading chunked documents via the RAG SDK.</li></ul> |

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg) |Fixed an issue where it was not possible to end a labeling task in the Labeler tool  |<ul><li>Previously, it wasn't possible to end and track the progress of a labeling task in the Labeler. This sometimes led to duplicate labeling efforts and difficulty managing large datasets. We fixed the issue and now provide a way to gauge the progress of a labeling task. </li></ul>|

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg) |Cleaned up Organization pages for improved layout and readability| <ul><li>We removed excess white spaces that were appearing in various sections across the Organization pages, specifically on the Member and Team pages. This update optimizes the presentation and readability of the content. </li></ul> |

