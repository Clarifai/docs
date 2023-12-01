---
description: Changelog for Clarifai Release 9.10
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -49
pagination_next: null
pagination_prev: product-updates/changelog/release99
---

# Release 9.10

**Release Date:** November 7th, 2023

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## API

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Improved the Platform Tracker performance with a detect-track workflow | <ul><li>Introduced the state-of-the-art [BYTE-Track](https://arxiv.org/abs/2110.06864), an online multi-object tracking system built upon the principles of [Simple Online and Realtime Tracking](https://arxiv.org/abs/1602.00763) (SORT). With BYTE-Track, users can seamlessly integrate it into their detect-track workflows, unlocking advanced capabilities for efficient object tracking.</li></ul> |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Added model [inference parameters](https://github.com/Clarifai/examples/blob/main/models/model_predict.ipynb) customization| <ul><li>You can now configure inference parameters such as temperature, max tokens, and more, depending on the specific model you are using, for both text-to-text and text-to-image generative tasks. This empowers you to customize and fine-tune your model interactions to better suit your individual needs.</li></ul> |
|![new-feature](/img/new_feature.jpg)| Added a robust search interface within the Python SDK for image and text inputs |The SDK now supports vector search (ranking) capabilities and offers advanced filtering options by parameters. <br /><br /><ul><li>You can flexibly refine search results using a variety of criteria, including concepts, image bytes, image URLs, text descriptions, embedded metadata tags, and geo points (longitude and latitude, with radius limits). </li><li>The search interface also supports AND and OR operators for complex queries.</li><li>The SDK has also been updated to include schema validation checks to ensure data integrity and search accuracy.</li></ul>You can get examples of how the search functionality works [here](https://github.com/Clarifai/examples/blob/main/search/cross_modal_search.ipynb).|
|![bug](/img/bug.jpg)|Fixed SDK model output info parameters bugs related to clarifai-grpc version 9.9.0| <ul><li> This update ensures the SDK  resolves the model output info error when invoking the 'postmodel' endpoint with specific parameters.</li></ul>  |
|![bug](/img/bug.jpg)|Fixed the issue of duplicate input IDs when uploading two similar datasets to the same app|<ul><li>We now append a random value to each input ID during dataset upload. This ensures that input IDs remain unique, allowing users to work with similar inputs across multiple datasets within the same app without encountering conflicts.  </li></ul>|

## Integrations

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Introduced Clarifai and Databricks integration | This integration is achieved via the Clarifai Python SDK and it is available [here](https://github.com/Clarifai/clarifai-pyspark).<br /><br /><ul><li>This integration enables developers to efficiently manage unstructured data and computing tasks while leveraging Clarifai's computer vision and natural language capabilities.</li><li>It facilitates seamless data ingestion and movement between Databricks and Clarifai.</li></ul> |

## PAT

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) |Added ability to automatically generate a Personal Access Token (PAT) when you create an account |<ul><li> Previously, only app-specific keys were automatically generated when you created an app. A PAT will also now be generated for you during account creation. </li></ul>  |

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published several new, ground-breaking models|<ul><li>Wrapped [Nougat-base](https://clarifai.com/facebook/nougat/models/nougat-base), a Meta AI-developed visual transformer model that converts document images, including complex math equations, into structured text, offering advancements in academic paper parsing.</li><li>Wrapped [Mistral-7B-OpenOrca](https://clarifai.com/mistralai/completion/models/mistral-7B-OpenOrca), a high-performing large language model achieved by fine-tuning the Mistral-7B base model using the OpenOrca dataset.</li><li>Wrapped [Zephyr-7B-alpha](https://clarifai.com/huggingface-research/zephyr/models/zephyr-7B-alpha), a 7 billion parameter model, fine-tuned on Mistral-7b and outperformed the Llama2-70B-Chat on MT Bench. </li><li>Wrapped [OpenHermes-2-mistral-7B](https://clarifai.com/mistralai/completion/models/openHermes-2-mistral-7B), a 7 billion LLM fine-tuned on Mistral with 900,000 entries of primarily GPT-4 generated data from open datasets.</li><li>Wrapped [Whisper-large-v2](https://clarifai.com/openai/whisper/models/whisper-large-v2), a versatile pre-trained ASR and speech translation model trained on multilingual data without requiring fine-tuning.</li><li>Wrapped [SSD-1B](https://clarifai.com/segmind/segmind-stable-diffusion/models/ssd-1b), a diffusion-based text-to-image model—it's 50% smaller and 60% faster than SDXL 1.0.</li><li>Wrapped [Jina-embeddings-v2](https://clarifai.com/jinaai/jina-embeddings/models/jina-embeddings-v2-base-en), an English text embedding model by Jina AI. It’s based on the Bert architecture with an 8192-sequence length, outperforming OpenAI's embedding model in various metrics.</li></ul> |

## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Improved `min_value` range for consistency across all model types | <ul><li> For embedding-classifiers, we’ve standardized `min_value` to have a range of 0 to 1 with a step size of .01. For most of the other model types, we’ve standardized it to have a range of 0 to 100 with a step size of .1.   </li></ul> |
|![improvement](/img/improvement.jpg)|Made time information changes to the Centroid Tracker model|<ul><li>We’ve made significant improvements to the Centroid Tracker, specifically within the "time_info" section. We added "start_time" and "end_time" to provide precise information regarding when an object was detected and when detection ceased.</li></ul>|
|![improvement](/img/improvement.jpg)|Made improvements to the Model-Viewer’s version table|<ul><li>We made the changes to make the table more consistent with the [evaluation leaderboard]( https://docs.clarifai.com/product-updates/changelog/release98#evaluation-leaderboard). It now provides users with a cohesive and familiar interface.</li><li>We relocated evaluation actions from a separate module to the table to enhance the user experience. </li></ul>|
|![improvement](/img/improvement.jpg)|Made significant improvements to enhance the dataset and concept selection process when training models | <ul><li>Model builders who haven't yet created datasets or dataset versions can now conveniently choose the 'app default dataset' in the model training editor screen. This option provides visibility into the labeled input counts, allowing users to verify their data before initiating the training process.</li><li>The concept selection interface now displays the labeled input count for each concept. This feature helps users prevent training concepts without adequate labeled inputs and simplifies the process of identifying data imbalances, all without the need to navigate away from the screen.</li></ul>  |
|![bug](/img/bug.jpg)| Fixed a modal reappearance issue | If you click the “Use Model” button on an individual model’s page, the “Call by API / Use in a Workflow” modal appears. You can then click the “Copy Code” button to copy the displayed code for integration into your own use case. <br /><br /><ul><li>Previously, if you clicked “Copy Code” and clicked “Use Model” again, the modal would not reappear. We fixed the issue. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed an issue with selecting a model version on the publish screen| <ul><li>Previously, if you tried choosing a different model version on the publish screen, it resulted in a failure. It occurred when trying to edit the visibility of models with multiple versions. We fixed the issue. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed an issue where the model page closed unexpectedly|<ul><li>Previously, if you clicked the “View JSON” button to view the prediction output of embedding models in the onboarding flow, the model pop-up could close unexpectedly. We fixed the issue.</li></ul>|

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with processing videos using the Universal workflow| <ul><li>The [Universal](https://clarifai.com/clarifai/main/workflows/Universal) workflow now processes videos as desired. </li></ul>  |
|![bug](/img/bug.jpg)| Fixed an issue where it was not possible to copy a workflow without first changing its ID | <ul><li>Previously, you could successfully copy a workflow only after changing the copied workflow ID. You can now copy an existing workflow, even if you keep the same workflow name during the copying process, such as from "(workflow name)-copy" to "(workflow name)-copy." </li></ul> |

## Listing Resources

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Added ability to view whether a resource is available publicly or privately|<ul><li>When listing your own resources, such as models, we've added an icon that clearly indicates whether they are private or shared within the Community.</li></ul>|
|![improvement](/img/improvement.jpg)|Added starring option to modules|<ul><li>Similar to other resources, you can now mark modules as favorites by using the star icon.</li></ul>|
|![improvement](/img/improvement.jpg)|Improved the accessibility of starred resources| <ul><li>Previously, you could only access starred resources by navigating to the top-right profile menu and selecting the “starred” option. You can now easily access both your own and Community resources by choosing either the “All” or “Starred” view on the main screen for listing resources, making it more intuitive to find what you need.</li></ul>  |

## License Types

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Added several new license types| <ul><li>If you want to select a license type for your resource, we've expanded your options to provide a diverse range that can cater to your unique preferences.</li></ul> |

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) |Enhanced searching for organization members| <ul><li>You can now search for organization members using both their first name and last name, individually or in combination.</li></ul>  |
|![improvement](/img/improvement.jpg)|Adjusted a team's app view of organization apps |<ul><li>We removed 'App name,' added a non-sortable 'App description' with a maximum of two lines, introduced 'Date created,' and optionally included 'Last updated' if the information is available via the API.</li></ul>|

## Search 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Made searchability enhancements on the Community platform | <ul><li> You can now enjoy an upgraded experience when searching by resource ID, user ID, short description, and even [markdown notes](https://docs.clarifai.com/product-updates/changelog/release99#markdown-search). These enhancements ensure that you can find the exact information you need more efficiently and accurately. </li></ul>  |

## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Implemented caching of input thumbnails throughout Input-Manager and Input-Viewer | <ul><li>This caching mechanism significantly enhances the overall efficiency of our system by minimizing the need to repeatedly load or generate thumbnails, resulting in faster response times and smoother interactions for our users.</li></ul> |
|![improvement](/img/improvement.jpg)| Enhanced user experience during smart searches | <ul><li>Instead of blocking user actions, we now display a non-intrusive loading overlay. This overlay will be visible during search requests within the Input-Manager, ensuring that the search grid results remain accessible without disruption.</li><li>Fixed an the issue where `getBaseWorkflowHasMultimodalEmbedder` erroneously returned 'false' when the component was not loaded. We modified the component’s behavior and it now returns 'undefined' when it is not loaded. When the return value is 'undefined,' we now disable the search bar to ensure users can only conduct searches of the correct type.</li></ul> |
|![improvement](/img/improvement.jpg)| Improved the behavior of the input upload job monitor in the Input-Manager | If you upload inputs on the Input-Manager, a small sidebar window appears at the bottom-right corner of the screen, providing you with real-time status updates on the upload process. There is also a checkbox in the pop-up window, allowing you to tailor your monitoring preferences to better suit your needs. <br /><br /><ul><li>If the checkbox is checked, the upload monitor will initiate polling. It will also immediately update the input list as new inputs become available.</li><li>If the checkbox is unchecked, polling will continue. However, the input list will only be updated once ALL jobs have been completed. Previously, there was an issue where unchecking the checkbox would halt polling, preventing updates.</li></ul> |
|![improvement](/img/improvement.jpg)|Prevented manual page refresh during input uploads|<ul><li>We now prevent users from refreshing the page while inputs are still uploading. We display a modal that prompts the user to confirm whether they want to reload the page or not. This ensures users are aware of ongoing uploads and helps avoid unintended disruptions caused by manual page refreshes.</li></ul>|
|![bug](/img/bug.jpg)|Fixed issues with fetching input counts| <ul><li>We resolved issues related to the REST API request for fetching counts, which previously lacked proper filters as validated by the backend. The problems led to error responses (400/500 errors).</li></ul>  |
|![bug](/img/bug.jpg)| Fixed an issue that caused a "No inputs found" message to appear | <ul><li>Previously, if you conducted an image search in the Input-Manager, selected "unlabeled" in the Labels menu, and then refreshed the page, you could get the error message. We fixed it. </li></ul>  | 
|![bug](/img/bug.jpg)| Fixed a "Duplicate input ID" error that was preventing the creation of datasets  | <ul><li>This issue occurred when attempting to bulk add 25+ inputs to a dataset by selecting all of them in the Input-Manager page using the checkbox at the top, leading to an error message despite no actual duplicates being present. Notably, the error did not occur when you created a dataset before uploading the inputs and subsequently adding the same inputs from the 'upload inputs' modal. We fixed the issue.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue when using the OR operator to filter inputs in the Input-Manager| The OR operator lets you filter inputs that do not match the given value.<br /><br /><ul><li>Previously, when the operator was selected, the z-index of the menu overlay could disrupt the user interface elements. We fixed the issue.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with showing annotations on the Object Mode in the Input-Manager| <ul><li>Previously, after conducting an image search in the Input Mode and subsequently switching to the Object Mode, the annotation tags failed to display as expected. We fixed the issue. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed an issue where newly created concepts could not be deselected|You can create a new concept in the “Labels” section of the Input-Manager. The newly created concept will be automatically selected. <br /><br /><ul><li>Previously, you could not deselect the newly created concept unless you selected another concept first. We fixed the issue and you can now unselect a concept that you have just created. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with showing error message when uploading inputs|<ul><li>If a user is unable to upload an image, we now clearly communicate the cause of the CORS error.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the clear button in the “Labels” section of the Input-Manager|<ul><li>Previously, the clear button could not deselect selected concepts. We fixed the issue and you can now use it to reset and remove all selected concepts.</li></ul>|

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue with the Input-Viewer gallery | <ul><li>Previously, if you selected an item with index 0 in the Input-Manager and then accessed the Input-Viewer, scrolling down on the left sidebar failed to load subsequent inputs in the gallery. We fixed the issue. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed an issue that caused delayed loading of video thumbnails in the Input-Viewer| <ul><li> We've implemented various actions to ensure video thumbnails in the Input Viewer's left-side gallery do not experience significant delays when retrieved from the server. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed an issue that caused unintended closure of model/workflow selection modal in AI Assist|If you want to choose a model or workflow to assist in input labeling within the Input-Viewer, navigate to the settings for [AI Assist](https://docs.clarifai.com/portal-guide/annotate/ai-assist/). Click the “Select Model or Workflow” search box, and then click the “View all” button. A modal window will open, enabling you to search for your desired model or workflow. <br /><br /><ul><li> Previously, that modal could close inadvertently and the page could be refreshed. We fixed the issue and the modal now remains open without any unexpected closures. You can type in the search bar without triggering unintended events in other components. </li></ul>|
|![bug](/img/bug.jpg)|Fixed incorrect overlay display in Predict mode in Input-Viewer |<ul><li>The background overlay is now correctly displayed only when a user is in Annotate mode and in drawing mode without selecting a concept from the top bar.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue where the tip popover meant for region annotations appeared when you switched to Predict mode|<ul><li>The popover is now shown exclusively when you’re in Annotate mode and you’ve not created any annotations within your application.</li></ul>|

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue that caused duplicated AI-assisted suggestions in the right-hand sidebar of the Labeling Tasks screen|<ul><li>Prediction suggestions in the Labeler’s right-hand sidebar are no longer duplicated.</li><li>We also fixed an issue that caused discrepancies between the API predictions and those displayed in the right-hand panel.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue that prevented suggestions with scores exceeding 0.995 from being displayed in the Labeling Tasks screen | <ul><li>High-quality prediction suggestions are now visible within the Labeler, allowing you to make informed and accurate labeling decisions.</li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue that caused a mismatch between bounding box predictions and actual labels|<ul><li>Previously, there was an inconsistency between the concepts listed in the right-hand sidebar and the corresponding bounding boxes visible in the Labeler's canvas area. We fixed the issue to ensure that the concepts and bounding boxes are now in perfect synchronization.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the [partitioned worker](https://docs.clarifai.com/portal-guide/annotate/create-a-task/#add-collaborators) labeling strategy|<ul><li>Previously, there were problems with labeling results when tasks were distributed among multiple workers. We fixed the issue, ensuring accurate and consistent labeling outcomes in such scenarios.</li></ul>|
|![bug](/img/bug.jpg)|Fixed issues regarding the malfunction of the "APPROVE ALL" button and the uncertainty surrounding the functionality of the "APPROVE USER" button in labeler review-annotation mode| <ul><li>The buttons now operate as expected, and uncertainties regarding the approval status have been eliminated. This enhancement ensures a smoother and more reliable user experience during the process of reviewing annotations. </li></ul>  |
|![bug](/img/bug.jpg)|Fixed an issue where it was not possible to submit labeled inputs for some labeling tasks | <ul><li> Previously, you could not submit labeled inputs for certain labeled tasks. When working on some labeling tasks, if you loaded the input, selected the relevant concepts, and attempted to submit your labeled input, you could encounter an error. We fixed the issue. </li></ul> |

## Onboarding Flow

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) |Reordered the 'Use Model' and 'Use Workflow' tabs in the onboarding flow|<ul><li>In the 'Use Model' or 'Use Workflow' pop-up, we moved 'Call by API' to the top position and made 'Python' the first choice.</li><li>We applied the changes within the 'Use Model' pop-up, 'Use Workflow'  pop-up, and in the onboarding version of 'Use Model.' </li></ul>|