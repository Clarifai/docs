---
description: Changelog for Clarifai Release 10.1
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -52
pagination_next: product-updates/changelog/release102
pagination_prev: product-updates/changelog/release100
---

# Release 10.1

**Release Date:** February 6th, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |


## API

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) **[API-only]**|Introduced incremental training of model versions | <ul> <li>You can now update existing models with new data without retraining from scratch. After training a model version, a checkpoint file is automatically saved. And you can initiate incremental training from that previously trained version checkpoint. Alternatively, you provide the URL of a checkpoint file from a supported 3rd party toolkit like HuggingFace or MMCV.</li></ul>   |
|![new-feature](/img/new_feature.jpg) **[API-only]** |Introduced ability to add inputs through cloud storage URLs|<ul><li>You can now provide URLs from cloud storage platforms such as S3, GCP, and Azure, accompanied by the requisite access credentials. This functionality simplifies the process of adding inputs to our platform, offering a more efficient alternative to the conventional method of utilizing PostInputs for individual inputs.</li></ul>|

## Evaluation

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Enhanced the evaluation process for detector models|<ul><li>Enriched the metrics by introducing additional fields, namely "Total Predicted," "True Positives," "False Negatives," and "False Positives." These additional metrics provide a more comprehensive and detailed assessment of a detector performance.</li><li>Previously, a multi-selector was used for the selection of an Intersection over Union (IoU). We replaced that confusing selection with a radio button format, emphasizing a single, mutually exclusive choice for IoU selection. </li><li>We also made other minor UI/UX improvements to ensure consistency with the evaluation process for classification models.</li></ul>|

## Devtools Integrations

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Integrated Clarifai into DSPy|<ul><li>This integration, now part of the recently released DSPy version 2.1.7, empowers DSPy users to consume Clarifai's LLM models and utilize Clarifai's apps to retrieve Clarifai's vector search engine. Notably, Clarifai is the only provider enabling users to harness multiple LLM models. You can get started on how to use DSPy with Clarifai [here](https://github.com/stanfordnlp/dspy/tree/main/examples/integrations). </li></ul>|


## Models 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Made improvements to LLM fine-tuning|<ul><li>Added support for CSV upload for streamlined data integration.</li><li>Added more training templates to tailor the fine-tuning process to diverse use cases.</li><li>Added advanced configuration options, including quantization parameters via GPTQ, which further empowers users to fine-tune models with heightened precision and efficiency.</li></ul>|
|![improvement](/img/improvement.jpg)|Improved the Model-Viewer's version table|<ul><li>Cross-app evaluation is now supported in the model version tab to have a more cohesive experience with the Leaderboard. </li><li>Users, and collaborators with access permissions, can also select datasets or dataset versions from org apps, ensuring a comprehensive evaluation across various contexts. </li><li>This improvement allows users to view both training and evaluation data across different model versions in a centralized location, enhancing the overall version tracking experience.</li> </ul> | 
|![improvement](/img/improvement.jpg)|Improved the management of model annotations and associated assets |<ul><li>Previously, when a model annotation was deleted, the corresponding model assets remained unaffected. If you now delete a model annotation, a simultaneous action would mark the associated model assets as deleted. This ensures that the deletion process is comprehensive, avoiding any lingering or orphaned assets. </li></ul> |

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published several new, ground-breaking models|<ul><li>Published [Phi-2]( https://clarifai.com/microsoft/text-generation/models/phi-2), a Clarifai-hosted, 2.7 billion-parameter large language model (LLM) achieving state-of-the-art performance in QA, chat, and code tasks. It is focused on high-quality training data and has demonstrated improved behavior in toxicity and bias. </li><li>Wrapped [Deepgram Nova-2](https://clarifai.com/deepgram/transcribe/models/audio-trascription). It sets a new benchmark in speech-to-text with 30% lower error rates, and unmatched speed, making it the superior choice in automatic speech recognition. </li><li>Wrapped [Deepgram Audio Summarization](https://clarifai.com/deepgram/transcribe/models/audio-summarization). It offers efficient and accurate summarization of audio content, automating call notes, meeting summaries, and podcast previews with superior transcription capabilities. </li><li>Wrapped [Text-Embedding-3-Large](https://clarifai.com/openai/embed/models/text-embedding-3-large), a high-performance, flexible text embedding model with up to 3072 dimensions, outperforming its predecessor. </li><li>Wrapped [Text-Embedding-3-Small](https://clarifai.com/openai/embed/models/text-embedding-3-small), a highly efficient, flexible model with improved performance over its predecessor, Text-Embedding-ADA-002, in various natural language processing tasks.</li><li>Wrapped [CodeLlama-70b-Instruct](https://clarifai.com/meta/Llama-2/models/codeLlama-70b-Instruct), a state-of-the-art AI model specialized in code generation and understanding based on natural language instructions.</li><li>Wrapped [CodeLlama-70b-Python](https://clarifai.com/meta/Llama-2/models/codeLlama-70b-Python), a state-of-the-art AI model specialized in Python code generation and understanding, excelling in accuracy and efficiency.</li></ul>|

## Mobile

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved the mobile version of the onboarding flow| <ul><li>Updated the "create an app" guided tour modal for mobile platforms.</li><li>Made other improvements such as updating the "Add a Model" modal and the "Find a Pre-Trained model" modal for mobile platforms.</li></ul> |  

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Integrated the RAG-Prompter operator model | <ul><li>You can now use the RAG-Prompter operator (agent system operator) in the SDK to perform [retrieval-augmented generation](https://www.clarifai.com/blog/what-is-rag-retrieval-augmented-generation) (RAG) tasks.</li></ul>  |

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Added ability to minimally review existing image mask annotations on the Input-Viewer|<ul><li>You can view your image mask annotations uploaded via the API.</li><li>You can delete an entire image mask annotation on an input</li><li>You can view the mask annotation items displayed on the Input-Viewer sidebar.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with annotating polygons on the Input-Viewer|Previously, when zooming in, the polygon editing points and the associated tag would scale up, resulting in undesired effects. We fixed the issue, and both elements now adhere to a consistent 100% scale, irrespective of the zoom level. <br /><br />We also made these improvements: <br /><br /><ul><li>Polygon editing points (also known as polygon handles) now match the size of the polygon line itself, both in edit and drawing mode.</li><li>The size of the polygon line is now adjusted to adhere to a fixed 100% scale, irrespective of the zoom level. This provides a clear and well-defined boundary for the polygon. </li><li>The text box containing the concept name now remains at a 100% scale consistently, unaffected by the scale of the polygon or bounding box. This ensures readability and avoids text becoming too small or large at different magnifications. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue that caused unintended zooming of the browser window when using the zoom in / zoom out hotkeys (CMD + / CMD -) on the Input-Viewer screen|<ul><li>Previously, executing these hotkeys not only affected the canvas area but also triggered a zoom in / zoom out action on the entire browser window. We fixed the issue, and pressing them now exclusively zooms the canvas area while avoiding any impact on the overall browser window. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with an undesired cursor pointer behavior in drawing mode, specifically in bounding box mode|<ul><li>Previously, if you selected the “select” tool and clicked the border of a bounding box, the cursor remained in the default state when moved inside the bounding box. This was confusing as it failed to indicate the ability to drag the bounding box. We fixed the issue, and the cursor now appropriately changes to a hand icon when hovering inside the bounding box.</li></ul>|

## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg)|Fixed an issue with selecting a text in the smart search field during a visual search|<ul><li>Previously, if you provided an invalid text in the smart search field and clicked CTRL / CMD + A, it could undesirably select all inputs. We fixed the issue, and clicking CTRL / CMD + A when the search field is in a focused state successfully selects the intended text. </li></ul>|
| ![bug](/img/bug.jpg)|Fixed an issue with an infinite cycle occurrence when performing a smart rank search within the Input-Manager |<ul><li>Previously, an infinite loading icon could appear when consecutively performing a smart rank search using the first listed input. This resulted in the backend not receiving the expected search request. We fixed the issue. </li></ul> |
| ![bug](/img/bug.jpg) |Fixed an issue with the upload job monitor in the Input-Manager|<ul><li>Previously, there was an issue wherein the percentage displayed in the job monitor occasionally exceeded 100%. We fixed the issue, ensuring that the percentage displayed in the job monitor aligns precisely with the actual progress of the job, eliminating any misleading overestimations.</li></ul>|
|![bug](/img/bug.jpg) |Fixed an issue that resulted in the closure of the inputs upload pop-up window |  <ul><li>Previously, when attempting to upload inputs through the pop-up window and selecting a concept, users sometimes experienced an unexpected closure of the window. We fixed it. </li> </ul>  |

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) |Made minor enhancements to the Workflow builder UI|<ul><li>Rectified the alignment discrepancy in some left-side models to ensure uniform left alignment. </li><li>Introduced an X or Close/Cancel button for improved user interaction and clarity. </li><li>Ensured that users can easily straighten the line connecting two nodes.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with adjusting concept thresholder node levels|<ul><li>Previously, when creating workflows, it was not possible to adjust the concept thresholder node in some cases. We fixed the issue. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the [Demographics](https://clarifai.com/clarifai/main/workflows/Demographics) workflow |<ul><li> Previously, if you were logged in, the Demographics workflow page could crash, and failed to give predictions. The workflow now works as intended for logged-in users. </li></ul>|     
|![bug](/img/bug.jpg)|Fixed an issue where the RAG-Prompter model template failed to update in the workflow UI|<ul><li>Previously, when a custom template was created for the RAG-Prompter model and subsequently assigned in a workflow through the PostWorkflow API call, the API call indicated a successful update of the prompter model template. However, the workflow UI did not reflect this updated template. We fixed the issue, ensuring synchronization between the API call results and the workflow UI display. </li></ul>|

## Apps

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Added ability to copy an app to an organization|<ul><li>Previously, in the **Copy / Duplicate App** modal, the dropdown for selecting users lacked an option for organizations. You can now select an organization directly from the dropdown list of potential destinations when copying or duplicating an app.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where it was not possible to perform face searches|<ul><li>Previously, attempting visual search or face search in an app with the base workflow set as “Face” resulted in an inability to retrieve inputs, yielding no search results. We fixed the issue. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the selection of the “Text/Document” input type during the creation of a new app|<ul><li>The selection button is by default enabled with the “Image/Video” option chosen. Previously,  changing it to the “Text/Document” option led to a malfunction, requiring users to cancel and retry the selection process. We fixed the issue, ensuring an error-free experience when opting for the “Text/Document” input type during app creation. </li></ul>|

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with editing a bounding box | <ul><li>Previously, there was an issue that hindered editing bounding box sizes or modifying concepts within the labeler screen. We fixed it. </li></ul>  |
|![bug](/img/bug.jpg) |Fixed an issue where inputs were incorrectly assigned to the task creator instead of the designated labeler(s) |<ul><li>Previously, when a user created a labeling task and assigned it to another labeler, the task creator sometimes observed the "Label" button being enabled for themselves, despite not being assigned as a labeler. This led to inadvertent assignment of inputs to the task creator, causing an obstruction for the assigned labeler in accessing the tasks. We fixed the issue. </li></ul> |

## Community
 
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved the search behavior within of the `use_cases` field|<ul><li>Previously, the `use_cases` field within the ListModels feature was configured as an AND search, unlike other fields such as `input_fields` and `output_fields`. We improved the `use_cases` attribute to operate with an OR logic, just like the other fields. This adjustment broadens the scope of search results, accommodating scenarios where models may be applicable to diverse use cases. </li></ul>|
|![improvement](/img/improvement.jpg)|Changed the thumbnails for listing resources to use small versions of cover images|<ul><li>Previously, the thumbnails for listing resources used the large versions of cover images. We changed them to use the small versions—just like for other resources like Apps, Models, Workflows, Modules, and Datasets. We also made the change to the left sidebars. </li></ul>|
|![improvement](/img/improvement.jpg)|Implemented a modification to facilitate a more user-friendly experience for non-logged-in users interacting with text-to-image models|<ul><li>Clicking the “Generate” button now triggers a login/sign-up pop-up modal. This guides users who are not currently logged in through the necessary authentication steps, ensuring a smoother transition into utilizing the model's functionality. </li></ul>|
|![bug](/img/bug.jpg) |Fixed an issue where altering a user ID resulted in a disruption of model access| <ul><li>Previously, when a user modified their profile user ID, this change failed to reflect in model responses where the `user_id` was referenced. Consequently, the model responses retained the previous user ID, triggering a 'Resource had been moved' error. We fixed it. </li></ul>|

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) |Fixed an issue where a user could get added multiple times to the same organization|<ul><li>We implemented safeguards against the unintended duplication of users within an organization. Previously, if a user clicked the "Accept" button on the organization invitation page multiple times, they could be redundantly registered within the same organization. Consequently, the user interface exhibited multiple instances of the same organization. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue with selecting the focus organization on the left sidebar |<ul><li>Previously, attempting to switch the organizational focus in the left sidebar did not effectively update the corresponding organization details on the rest of the page. The details of the previous organization persisted, causing a misalignment. We fixed the issue, ensuring that changing the organization in the left sidebar now accurately populates the corresponding details throughout the rest of the page. </li></ul> |

## Modules

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved the module installation process |<ul><li>The modal has been refined to use app IDs, eliminating reliance on deprecated app names. Previously, the pop-up modal for installing a module into an app retained the usage of deprecated app names. </li></ul> |
|![improvement](/img/improvement.jpg)|Improved the relevance of the link to GitHub on the module page| <ul><li>Previously, there was a small GitHub button at the top of any module’s overview page. We relocated it to the right-hand side, aligning it with other metadata such as description, thereby improving its clarity as a clickable link.</li></ul> |