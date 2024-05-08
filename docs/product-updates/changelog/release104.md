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
|![new-feature](/img/new_feature.jpg) | Added symmetric and asymmetric text search capabilities within the Input-Manager | <ul><li> Symmetric search allows users to find text inputs that closely resemble other text inputs, facilitating easy identification of similar content. On the other hand, asymmetric search empowers users to search for text inputs that effectively answer specific query questions, enhancing the precision and relevance of search results. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with visual searches| <ul><li> Previously, visual searches for inputs on the Input-Manager were sometimes slow. We fixed it. </li></ul> |
|![bug](/img/bug.jpg)|Fixed issues with concepts used for searching inputs on the Input-Manager|<ul><li>The tags or concepts used for performing searches had undergone visual changes. Additionally, it was not possible to delete tags individually; the only way was to remove the entire string in the search field. We fixed these issues.</li></ul>|

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published new models <br/><br/>_(Clarifai-hosted models are the ones we host within our Clarifai Cloud. Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys)_|  <ul><li>Wrapped [Command-R+](https://clarifai.com/cohere/generate/models/command-r-plus), a highly efficient, multilingual, enterprise-grade LLM optimized for real-world business applications, boasting advanced RAG capabilities and a 128k-token context window. </li><li>Wrapped [Gemini 1.5 Pro](https://clarifai.com/gcp/generate/models/gemini-1_5-pro), a powerful, efficient LLM with 1 million long-context window, enabling advanced reasoning and comprehension across various data types. </li><li>Wrapped [Mixtral-8x22B](https://clarifai.com/mistralai/completion/models/mixtral-8x22B), the latest and largest Mixture of Expert LLM from Mistral AI. It's a state-of-the-art machine learning model using Mixture 8 of Experts (MoE) 22b models. </li><li>Wrapped [Qwen1.5-32B](https://clarifai.com/qwen/qwenLM/models/qwen1_5-32B-chat), a model that provides competitive AI performance with optimized efficiency, making it a strong choice for diverse, multilingual applications. </li><li>Clarifai-hosted [Gemma-1.1-7b-it](https://clarifai.com/gcp/generate/models/gemma-1_1-7b-it), a lightweight, decoder-only LLM trained on 6 trillion tokens of diverse text data, suitable for various text generation tasks with improved quality and safety measures. </li><li>Clarifai-hosted [Llama-3-8B-Instruct](https://clarifai.com/meta/Llama-3/models/Llama-3-8B-Instruct). Llama 3 instruction-tuned models are optimized for dialogue use cases and outperform many of the available open source chat LLMs on common industry benchmarks.  </li><li>Wrapped [Llama-3-70B-Instruct](https://clarifai.com/meta/Llama-3/models/llama-3-70B-Instruct), an advanced, scalable language model designed for diverse applications, offering state-of-the-art performance in coding, reasoning, and multi-use conversational capabilities. </li><li>Wrapped [Llama-3-70B](https://clarifai.com/meta/Llama-3/models/llama-3-70B). Llama-3 is a state-of-the-art large language model designed for enhanced reasoning and coding. It has a  broad application across multiple languages and tasks. </li><li>Clarifai-hosted [LLaVA-v1.6-Mistral-7B](https://clarifai.com/liuhaotian/llava/models/llava-v1_6-mistral-7b), a high-performance, efficient, and cross-lingual large multimodal model, boasting state-of-the-art capabilities in visual reasoning, OCR, and zero-shot Chinese multimodal understanding. </li><li>Clarifai-hosted [LLaVA-1.5-7b](https://clarifai.com/liuhaotian/llava/models/llava-1_5-7b), a state-of-the-art language vision model that represents a significant advancement in the field of multimodal artificial intelligence. </li></ul>| 

## New Published Templates

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg)  | Published new [app templates](https://docs.clarifai.com/clarifai-basics/app-templates)   | <ul><li>Published [Text Moderation Template](https://clarifai.com/clarifai/text-moderation), which provides ready-to-use workflows and models, leveraging NLP Models and LLMs to automatically monitor and detect inappropriate or harmful text content.</li><li>Published [Sentimental Analysis Template](https://clarifai.com/clarifai/sentiment-analysis), which provides a guide for sentimental analysis and comes with several ready-to-use sentimental analysis workflows and models dealing with different use cases, leveraging different NLP models and LLMs.</li><li>Published [Chatbot Template](https://clarifai.com/clarifai/chatbot-template), which allows you to develop AI chatbots swiftly using Clarifai LLMs, offering personalized assistance and integrating external data with RAG framework for enhanced capabilities. </li><li>Published [Image Moderation Template](https://clarifai.com/clarifai/image-moderation), which provides diverse AI-powered workflows for automatically filtering and categorizing inappropriate or harmful images based on various criteria. </li><li>Published [Content Generation Template](https://clarifai.com/clarifai/content-generation-template), which empowers users to efficiently create diverse, tailored text, from emails and blogs to social media content and stories, enhancing communication and creativity. </li><li> Published [Document Summarization Template](https://clarifai.com/clarifai/document-summarization), which is an app template for document summarization — supports 3 levels that start with Novice and end up with Expert.</li><li> Published [RAG Template](https://clarifai.com/clarifai/rag-template), which streamlines the creation of Retrieval-Augmented Generation (RAG) applications with Clarifai, enhancing LLMs with external knowledge for accurate, up-to-date information generation. </li></ul> |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|  ![new-feature](/img/new_feature.jpg) | Added new features. Learn more about them [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md).  | <ul><li>We added a flag to download a model. If the `export_dir` parameter is provided in `Model().export()`, the exported model will be saved in the specified directory. Otherwise, the export status will be shown. </li><li>Added support for Label IDs in Dataloaders (using the `label_ids` parameter) and `get_proto` functions in the Inputs class.</li><li>Implemented pagination feature in Search. Added `pagination` parameter in the `Search()` class and included `per_page` and `page_no` parameters in the `Search().query()` method.</li><li>Added algorithm parameter to `Search()`. </li><li>Added root certificate support to establish secure gRPC connections by including a `root_certificates_path` parameter in all relevant classes and authentication helpers. Also, updated gRPC to the latest version.</li><li>Added missing VERSION and `requirements.txt` files to `setup.py.`</li></ul> |
| ![improvement](/img/improvement.jpg) | Made some improvements | <ul><li>Changed logger for `Inputs().upload_annotations` to display full details of failed annotations. </li><li>Updated the model upload CLI documentation.</li><li>Limited the maximum upload batch size for `Inputs().upload_inputs()` function. Also addressed the inconsistency in the model version ID parameter between `App.model()` and `Model()`.</li><li>Removed runners from the SDK.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed some bugs   | <ul><li>Fixed RAG upload bug by updating llama-index-core version to 0.10.24 in the `ImportError` message. </li> <li>Fixed a `RAG.setup()` bug where if a specific workflow was deleted and another workflow with the same ID was created, by adding a timestamp while creating a new prompter model.</li> <li>Fixed `RAG.upload()` to support uploading a folder of text files.</li> <li>Fixed the training status bug by removing the constraint of users specifying `model_type_id` for training_logs and instead using `load_info()` to get model version details.</li> <li>Fixed a create workflow bug that occurred due to the change in the model version ID parameter.</li> <li>Fixed unnecessary infra alerts by adding a wait time before deleting a model in model training tests.</li> </ul>  |


## Node SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added some features | <ul><li> Added a new `Dataset` class with several methods for handling datasets, including creating and deleting versions, listing versions, and uploading data from a folder or a CSV file.</li><li> Added several new methods to the `Input` class for handling inputs, including methods for bulk uploading, waiting for inputs, deleting failed inputs, and retrying uploads.</li><li>Added several new methods and properties to the `Search` class, including support for different search algorithms and metrics, and improved handling of queries and pagination.</li></ul> |
| ![improvement](/img/improvement.jpg) | Made an improvement| <ul><li> Since the `uuidv4` package has been deprecated in npm, we replaced it with the recommended `uuid` package.</li></ul> |

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Enabled deletion of associated model assets when removing a model annotation| <ul><li>Now, when deleting a model annotation, the associated model assets are also marked as deleted.</li></ul> |

## Community

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Added ability to browse the resources in a template  |<ul><li> You can now access a modal popup on a template’s overview page that allows you to easily view the resources available in it, including inputs, datasets, models, workflows, and modules.</li></ul>|
| ![improvement](/img/improvement.jpg)| Introduced an easier way to add collaborators |<ul><li>We added an option to add app collaborators from the App Overview screen. </li></ul>|
| ![improvement](/img/improvement.jpg) | Introduced underscores for creating an app ID  | <ul><li> You can now use underscores when creating an app ID. </li></ul> |
|![improvement](/img/improvement.jpg)  | Moved app templates and starred apps to their own paths  |<ul><li> Previously, we implemented this as parameter filters. We relocated templates and starred filters to separate URLs. You can now access templates at `apps/templates` and starred apps at `apps/starred`.</li></ul>|
|  ![improvement](/img/improvement.jpg) | Disabled **Use Model** button for models with no versions   |<ul><li>As it's not possible to send API calls to models with no versions, we've disabled the **Use Model** button if no version exists. Therefore, you'll need to create a version first before using a model. </li></ul>|
|  ![improvement](/img/improvement.jpg)  |  Increased font size for various texts in mobile view |<ul><li> We enhanced the readability of texts in various areas, such as app IDs, user IDs, and field placeholders, by increasing their font size in mobile view.</li></ul>|
| ![improvement](/img/improvement.jpg) |  Added resource pricing on the Model-Viewer page for some types of models |<ul><li> We added pricing information for these model types: `text-to-text`, `image-to-text`, and `multimodal-to-text`.  </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with filtering [templates](https://docs.clarifai.com/clarifai-basics/app-templates/) |<ul><li> Previously, when selecting a template from the app creation modal, toggling between the "All" and "Starred" menu bar options didn't function correctly. We fixed the issue. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with excessively truncated model names|<ul><li>The long model names are now truncated less aggressively, particularly on desktop devices.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the app switcher feature for collaborators|The app switcher feature, located in the collapsible left sidebar, allows you to effortlessly switch between different apps. Clicking it reveals a drop-down menu displaying your own apps as well as those you have access to. <br/><br/> <ul><li>Previously, the app switcher feature produced an error for users in a collaborated app. We fixed this issue, and it now works as intended.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the browser's "Back" button during user onboarding |<ul><li> Previously, during user onboarding, the "Back" button didn't allow users to navigate from the Model-Viewer page back to the Community listing page. We fixed this issue. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where modules’ IDs appeared in the collapsed sidebar|<ul><li> Previously, when you collapsed the left sidebar, the IDs of installed modules in your app could be visible there. We fixed the issue. </li></ul>|
|![bug](/img/bug.jpg)| Fixed an issue where log-in steps sometimes resulted in a "page not found" error |<ul><li>Users can now log in without encountering any errors. </li></ul>|
|![bug](/img/bug.jpg) | Fixed an issue with “Use Model” modal during the onboarding flow   | If you click the “Use Model” button on a Model-Viewer page, a modal will pop up with code snippets for using the model in a workflow. <br/><br/><ul><li>Previously, creating a workflow this way was not working properly during a user onboarding; it resulted in multiple redirects. We fixed the issue. </li></ul>|
| ![bug](/img/bug.jpg)  |  Fixed an issue where some essential scopes were missing for collaborators |<ul><li> We fixed the issue where essential scopes were missing for collaborators, ensuring proper access to apps.  </li></ul>|

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Improved organization invitation emails  |<ul><li> We improved organization invitation emails by adding details of the person who sent the invitation. The email now includes their user ID and user name, which enhances the legitimacy of the invitation.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where it was not possible to patch an app after transferring its ownership to an organization|<ul><li>Previously, if you transferred an app to an organization, you couldn't patch it. For example, you could not edit the org app’s description. We fixed it. </li></ul> |

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed issues with playing a video input within the Input-Viewer| <ul><li> Previously, users experienced limitations when trying to control video playback, such as navigating to specific points, skipping forward or backward, or performing any interactive actions. Any such attempt to scroll through a video could result in it snapping back to the starting point unexpectedly. We fixed these issues. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed issues with renaming concepts in the Input-Viewer| While on the Input-Viewer screen, you can rename a concept listed in the right sidebar, which also establishes a relation for it.<br/><br/><ul><li>Previously, renaming a concept prevented you from using the **Filter by concept** field to search for the new name. We have fixed this issue, and you can now search for both the original concept and the new relation created for it.</li><li>Previously, when creating a new relation for a concept that already had a previous relation, the new relation could be added without removing the old one. We fixed this issue, and now, before creating new relations, old ones are removed automatically.</li> <li>We also fixed an issue with entering the same name of a concept. For example, previously, if you generated predictions from classifications — let’s say one of the predicted concepts is “sky.” If you edited “sky” to “wall,” a new relation was created. However, if you edited the concept name again to “sky,” a new relation was erroneously created. We fixed the issue, and now since the relation and the originally predicted concept are the same, we remove the “wall” relation.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue with the gearbox icon in the Input-Viewer|<ul><li>Previously, opening the gearbox popover, selecting a model or workflow, and then closing the popover resulted in the gearbox icon remaining gray, indicating that nothing was selected inside the popover. </li><li>We fixed the issue, and now the gearbox icon turns blue when an item is selected within its popover.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with managing object-track annotations for video inputs on the Input-Viewer|<ul><li>Previously, the timeline next to the left of the scrollbar of a video input represented seconds instead of frames. We fixed the issue, and it now accurately represents frames, as intended. Additionally, we addressed an issue that prevented the slider from reaching the last frame of a video input.</li></ul>|
| ![bug](/img/bug.jpg) |Fixed an issue with the canvas Zoom In/Out functionality on the Input-Viewer | <ul><li> Previously, it was extremely laggy and unusable when using the CMD/CTRL button with the mouse wheel up/down or when using a trackpad. Now, when the user presses the CMD/CTRL button and scrolls the mouse wheel up/down, the action is performed at a normal speed, depending on how the user is scrolling. </li> </ul>|

## Labeling Tasks​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with displaying concepts on the task listing page|<ul><li>A list of concepts is now visibly and correctly displayed within the task listing page.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue that caused the concept list to flicker|<ul><li>Previously, when creating a new labeling task, the concept list could flicker while scrolling to the bottom of the page with the concept list open. We fixed the issue.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue that caused the design to break when adding many collaborators|<ul><li>Previously, when attempting to add many collaborators while creating a new labeling task, the section for adding collaborators could break its design. We fixed the issue.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where selecting a collaborator persisted the selection in the text field| <ul><li>Previously, when adding a collaborator while creating a new labeling task, their name could appear both in the select list and outside the text field, causing confusion, especially when attempting to remove the collaborator by clicking the **X** button. We fixed the issue, and now the added collaborator’s name no longer appears duplicated in the input field.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue with displaying more concepts when creating a new labeling task| <ul><li>Previously, clicking “show 50 more” in the concept select list resulted in nothing being loaded, preventing users from seeing the full list of concepts. We fixed this issue, and now the full list of concepts is loaded after clicking “show 50 more”.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue where changing the dataset while creating a new task did not update the task name |<ul><li>Now, on the task creation page, switching between different datasets correctly updates the task name field to match the currently selected dataset, unless the user has manually edited the field before.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where a user was unable to proceed with task creation after selecting a dataset| <ul><li>Previously, if you selected “yes” in the auto annotation field, chose a dataset, and then clicked outside the field, you could encounter an error preventing you from proceeding with the task creation. We fixed this issue, and now after selecting a dataset, the task creation process proceeds smoothly without any errors.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue where the label/review buttons were breaking|<ul><li>The label/review buttons with percentage signs on the tasks listing page were not being displayed as intended. We fixed the issue.</li></ul>|

