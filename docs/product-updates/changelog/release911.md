---
description: Changelog for Clarifai Release 9.11
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -50
pagination_next: null
pagination_prev: product-updates/changelog/release910
---

# Release 9.11

**Release Date:** December 6th, 2023

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## API

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Added flexible API key selection | <ul><li>For third-party wrapped models, like those provided by OpenAI, Anthropic, Cohere, and others, you can now choose to utilize their API keys as an option, in addition to using the default Clarifai keys. This flexibility allows you to integrate your preferred services and APIs into your workflow, enhancing the versatility of our platform.</li></ul> |

## Training Time Estimator

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Introduced a Training Time Estimator for both the API and the Portal| <ul><li>This feature provides users with approximate training time estimates before initiating the training process. The estimate is displayed above the "train" button, rounded down to the nearest hour with 15-minute increments.</li><li>It offers users transparency in expected training costs. We currently charge $4 per hour.</li></ul> |

## Billing

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Expanded access to the deep fine-tune feature|<ul><li>Previously exclusive to professional and enterprise plans, the deep fine-tune feature is now accessible for all pay-as-you-grow plans.</li><li>Additionally, to provide more flexibility, all users on pay-as-you-grow plans now receive a monthly free 1-hour quota for deep fine-tuning. </li></ul>|
|![new-feature](/img/new_feature.jpg)|Added an invoicing table to the billing section of the user’s profile | <ul><li>This new feature provides you with a comprehensive and organized view of your invoices, allowing you to easily track, manage, and access billing-related information.</li></ul> |  
|![improvement](/img/improvement.jpg)|Enabled all users (all billing plans) to add collaborators |<ul><li>Previously, users on the Community plan were restricted from adding collaborators to their apps. All users can now add collaborators to their apps.</li></ul>|

## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Published several new, ground-breaking models|<ul><li>Wrapped [Cohere Embed-v3](https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0), a state-of-the-art embedding model that excels in semantic search and retrieval-augmentation generation systems, offering enhanced content quality assessment and efficiency.</li><li>Wrapped [Cohere Embed-Multilingual-v3](https://clarifai.com/cohere/embed/models/cohere-embed-multilingual-v3_0), a versatile embedding model designed for multilingual applications, offering state-of-the-art performance across various languages.</li><li>Wrapped [Dalle-3](https://clarifai.com/openai/dall-e/models/dall-e-3), a text-to-image generation model that allows you to easily translate ideas into exceptionally accurate images.</li><li>Wrapped [OpenAI TTS-1](https://clarifai.com/openai/tts/models/openai-tts-1), a versatile text-to-speech solution with six voices, multilingual support, and applications in real-time audio generation across various use cases.</li><li>Wrapped [OpenAI TTS-1-HD](https://clarifai.com/openai/tts/models/openai-tts-1-hd), which comes with improved audio quality as compared to OpenAI TTS-1.</li><li>Wrapped [GPT-4 Turbo](https://clarifai.com/openai/chat-completion/models/gpt-4-turbo), an advanced language model, surpassing GPT-4 with a 128K context window, optimized performance, and knowledge incorporation up to April 2023.</li><li> Wrapped [GPT-3_5-turbo](https://clarifai.com/openai/chat-completion/models/GPT-3_5-turbo), an OpenAI’s generative language model that provides insightful responses. It’s a new version supporting a default 16K context window with improved instruction following capabilities. </li><li>Wrapped [GPT-4 Vision](https://clarifai.com/openai/chat-completion/models/gpt-4-vision), which extends GPT-4's capabilities regarding understanding and answering questions about images—expanding its capabilities beyond just processing text.</li><li>Wrapped [Claude 2.1](https://clarifai.com/anthropic/completion/models/claude-2_1), an advanced language model with a 200K token context window, a 2x decrease in hallucination rates, and improved accuracy.</li></ul> |
|![improvement](/img/improvement.jpg)| Improved the [color-recognition](https://clarifai.com/clarifai/main/models/color-recognition) model | <ul><li>We enhanced the UI of the color recognition model for superior performance and accuracy.</li></ul>  |

## Multimodal-to-Text

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Introduced multimodal-to-text model type | <ul><li>This model type handles both text and image inputs, and generates text outputs. For example, you can use the [openai-gpt-4-vision](https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision) model to process both text and image inputs (via the API) and image inputs (via the UI). </li></ul>|

## Text Generation

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Added Llama2 and Mistral base models for text generation fine-tuning |<ul><li>We've renamed the text-to-text model type to "Text Generator" and added Llama2 7/13B and Mistral models with GPTQ-Lora, featuring enhanced support for quantized/mixed-precision training techniques.</li></ul>| 

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Added model training to the Python SDK| <ul><li>You can now use the SDK to perform model training tasks. Example notebooks for model training and evaluation are available [here](https://github.com/Clarifai/examples/tree/main/models/model_train). </li></ul> |  
|![improvement](/img/improvement.jpg)|Added CRUD operations for runners| <ul><li>We’ve added CRUD (Create, Read, Update, Delete) operations for runners. Users can now easily manage runners, including creating, listing, and deleting operations, providing a more comprehensive and streamlined experience within the Python SDK.</li></ul> |  

## Apps

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Added a section on the App Overview page that shows the number of inputs | <ul><li>Similar to other resource counts, we added a count for the number of inputs in your app. Since the number of inputs could be huge, we round the displayed number to the nearest thousand or nearest decimal. Nonetheless, there is a tooltip that you can hover over to show the exact number of inputs within your app. </li></ul> |
|![improvement](/img/improvement.jpg)|Optimized loading time for applications with large inputs| <ul><li>Previously, applications with an extensive number of inputs, such as 1.3 million images, experienced prolonged loading times. Users can now experience faster and more efficient loading of applications even when dealing with substantial amounts of data.</li></ul> |  
|![improvement](/img/improvement.jpg)|Improved the functionality of the concept selector | <ul><li>We’ve enhanced the concept selector such that pasting a text replaces spaces with hyphens. We’ve also restricted user inputs to alphabetic characters and allowed manual entry of dashes.</li><li>The changes apply to various locations within an application for consistent and improved behavior.</li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue where it was not possible to patch the cover image of a default workflow|<ul><li>You can now successfully update the cover image of an application’s default workflow without any issues. </li></ul> | 

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue with the workflow builder | <ul><li>Previously, if you tried to connect models incorrectly within the workflow view, a modal window appeared that was unresponsive to closure. We fixed the issue. </li></ul> |  


## Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved the Model-Viewer's version table|<ul><li>Cross-app evaluation is now supported in the model version tab to have a more cohesive experience with the leaderboard. </li><li>Users, and collaborators with access permissions, can also select datasets or dataset versions from org apps, ensuring a comprehensive evaluation across various contexts. </li><li>This improvement allows users to view both training and evaluation data across different model versions in a centralized location, enhancing the overall version tracking experience.</li> </ul> | 
|![bug](/img/bug.jpg)| Fixed an issue with displaying cover images | <ul><li>We fixed an issue where cover images were not displayed on the sidebar for Text-to-Image and Prompter model types. </li></ul> |  |
|![bug](/img/bug.jpg)|Fixed an issue with the loss of a selected license on page refresh | <ul><li>Previously, adding a license type on a model and subsequently refreshing the page would result in the selected license being removed, displaying as 'None'. We fixed the issue. </li></ul> |
|![bug](/img/bug.jpg)|Removed cover image upload component from the onboarding dialog  | <ul><li>In the onboarding dialog for creating a new model by selecting a pre-trained model, the cover image upload component was previously visible for non-owners/non-collaborators. The dialog now only displays the already uploaded image instead of providing the option to upload a new one.</li></ul>  |
|![bug](/img/bug.jpg)|Fixed a CORS issue that prevented image loading for Paddle OCR model| <ul><li>Previously, there was an issue with the Paddle OCR model where the image was not loading onto the canvas due to a CORS (Cross-Origin Resource Sharing) problem. Although the model correctly displayed predictions, the image itself was not visible on the canvas. We fixed the issue. </li></ul> |
|![bug](/img/bug.jpg)|Fixed an issue where switching between deep fine-tuned templates caused the training settings section to disappear| <ul><li>Previously, if you created a deep fine-tuned model—either a visual classifier or detector—and selected a template; and if you chose a different template from the dropdown list, it caused the optional training setting section to disappear. We fixed it. </li></ul> |  

## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)|Fixed an issue with editing workflows|You can edit a model in a workflow by selecting the “Select a Model” search box in the sidebar that appears on the right side of the workflow builder. Also, if you click the “VIEW ALL” button, a modal appears, allowing you to select other models for your workflow.<br /><br /><ul><li>Previously, you could not close the modal that pops up. This resulted in the loss of unsaved edits when you went back to editing your workflow or refreshed the page. We fixed the issue.</li></ul>|  

## Community

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Removed pinning of resources | <ul><li>With the advancement of the starring functionality, pinning is no longer necessary. We removed it. </li></ul>  |
|![improvement](/img/improvement.jpg)|Added ability to delete a cover image|<ul><li>You can now remove a cover image from any resource—apps, models, workflows, datasets, and modules.</li></ul>|

## Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Improved bulk labeling notifications in the Input-Manager| <ul><li>Users now receive a prompt toast message pop-up, confirming the successful labeling of selected inputs. This improvement ensures users receive immediate feedback, providing confidence and transparency in the bulk labeling process.</li></ul> |  
|![improvement](/img/improvement.jpg)|Enabled deletion of annotations directly from [smart search](https://docs.clarifai.com/portal-guide/psearch/visual-search#smart-image-search-by-visual-similarity) results in the Input-Manager| <ul><li>After conducting a ranked search (search by image) and switching to Object Mode, the delete icon is now active on individual tiles. Additionally, for users opting for bulk actions with two or more selected tiles, the delete button is now fully functional. </li></ul> | 
|![improvement](/img/improvement.jpg)|Added a pop-up toast for successful label addition or removal| <ul><li>Implemented a pop-up toast message to confirm the successful addition or removal of labels when labeling inputs via grid view. The duration of the message has been adjusted for optimal visibility, enhancing user feedback and streamlining the labeling experience.</li></ul> |  
|![improvement](/img/improvement.jpg)|Allowed users to edit or remove objects directly from smart search results in the user interface (UI)| <ul><li>Previously, users were limited to only viewing annotations from a smart object search, with the ability to edit or remove annotations disabled. Now, users have the capability to both edit and remove annotations directly from smart object search results. </li><li>Users can now have a consistent and informative editing experience, even when ranking is applied during annotation searches.</li></ul> |  
|![improvement](/img/improvement.jpg)|Improved the stability of search results in the Input-Manager| <ul><li>Previously, users encountered flaky search results in the Input-Manager, specifically when performing multiple searches and removing search queries. For example, if they searched for terms like #apple and #apple-tree, removed all queries, and then attempted to search for #apple again, it would be missing from the search results. </li><li>Users can now expect stable and accurate search results even after removing search queries. </li></ul> | 
|![bug](/img/bug.jpg)|Improved pagination handling during multiple input deletion in the Input-Manager| <ul><li>Previously, there was an issue of pagination fetch inconsistencies after deleting multiple inputs or annotations. Now, when you delete a selection of inputs or annotations, the pagination mechanism resets to ensure a more accurate and streamlined retrieval of pages.</li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue with missing annotation tags in Object Mode | <ul><li>Previously, after performing an image search in Input Mode and switching to Object Mode, annotation tags were occasionally not displayed. The fix ensures consistent visibility of annotation tags in Object Mode following an image search in Input Mode.</li></ul> | 
|![bug](/img/bug.jpg)|Fixed an issue with duplicate search results in concept select dropdown after page refresh| <ul><li>Previously, there was an issue where refreshing the page in the Input-Manager led to duplicate search results for the concept select dropdown. For example, users would search for "#apple," refresh the page, and then attempt to search for "#apple" again, but it could result in duplicate select entries. After refreshing the page, users no longer encounter duplicate search results for the concept select dropdown. </li></ul> |

## Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![enterprise](/img/enterprise.jpg)|Fixed an issue that caused anomalies with annotations and annotators in the Input-Viewer | Previously, a peculiar issue affected the functionality of the Input-Viewer, causing unexpected behavior related to annotations and annotators. Specifically, when you exported annotations in JSON format from the Datasets page, you could observe some irregularities. <br /><br /><ul><li>The number of annotations was inconsistent. In some instances, the count exceeded the number of inputs in situations where one annotation was expected per input.</li><li>On the Input-Viewer, there were instances where annotations appeared to be duplicated multiple times when reviewing inputs. Such duplication was inconsistent with the actions of labelers.</li><li> Also, when selecting "ALL" to view all annotators, that action unexpectedly removed all visible annotations.</li></ul>We fixed all the issues, and the Input-Viewer now works as expected. |
|![bug](/img/bug.jpg)|Fixed an issue with the Zoom-In/Zoom-Out functionality in the Input-Viewer| <ul><li>Previously, there was an issue where the shortcuts for zooming in or out propagated to the browser, affecting the entire page instead of the canvas image. We fixed the issue, ensuring that the zoom-in/zoom-out events are now isolated to the canvas, providing a more intuitive and controlled zoom experience.</li></ul> | 
|![bug](/img/bug.jpg)|Introduced persisted model/workflow selection via localStorage in [AI Assist](https://docs.clarifai.com/portal-guide/annotate/ai-assist/#2-choose-a-model-or-workflow)| <ul><li>When selecting a model or workflow you want to get its predictions, the choice is now persisted in the localStorage. Now, users won't have to repeatedly select the model or workflow after refreshing the page. </li><li>We also fixed an issue that caused incorrect states in the model/workflow selector component. The fix includes displaying an empty message and ensuring that the component behaves as expected, even when searching rapidly.</li></ul> |  
|![bug](/img/bug.jpg)|Added a delay for Input-Viewer action bar controls| <ul><li>We have introduced a deliberate delay when hovering over controls in the Input-Viewer action bar. This delay prevents unintentional display of information tooltips, reducing the likelihood of user frustration. </li></ul> | 

## Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![enterprise](/img/enterprise.jpg)| Added a multi-org membership functionality | <ul><li>Users can now create, join, and engage with multiple organizations. Previously, a user’s membership was limited to only one organization at any given time.</li></ul> |
|![improvement](/img/improvement.jpg)|Added Org initials on the icon invites|<ul><li>Organization’s initials are now appearing on the icon for inviting new members to join the organization. We replaced the generic blue icon with the respective organization initials for a more personalized representation—just like in the icons for user/org circles. </li></ul>|
|![bug](/img/bug.jpg)| Fixed an issue with abruptly switching to a “user” account | <ul><li>Previously, if you clicked an organizational app, you could be inadvertently switched to a “user” account. Additionally, the list of organizational accounts was not consistently displayed. We fixed the issues. </li></ul> | 

## Labeling Tasks

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Added ability to fetch the labeling metrics specifically tied to a designated task on a given dataset| To access the metrics for a specific task, simply click on the ellipsis icon located at the end of the row corresponding to that task on the Tasks page. Then, select the "View Task metrics" option. <br /><br /><ul><li>This introduced functionality empowers labeling task managers with a convenient method to gauge task progress and evaluate outcomes. It enables efficient monitoring of label view counts, providing valuable insights into the effectiveness and status of labeling tasks within the broader dataset context.</li></ul> |  
|![improvement](/img/improvement.jpg)|Improved the [partitioned worker](https://docs.clarifai.com/portal-guide/annotate/create-a-task/#add-collaborators) labeling strategy | <ul><li>In the task creation screen, when a user selects `Worker Strategy = Partitioned`, we now hide the `Review Strategy` dropdown, set `task.review.strategy = CONSENSUS`, and set `task.review.consensus_strategy_info.approval_threshold = 1`.</li><li>Users now have the flexibility to conduct task consensus reviews with an approval threshold set to 1.</li><li>We have optimized the assignment logic for partitioned tasks by ensuring that each input is assigned to only one labeler at a time, enhancing the efficiency and organization of the labeling process.</li></ul> |  
|![improvement](/img/improvement.jpg)|Enhanced submit button functionality for improved user experience |In labeling mode, processing inputs too quickly could lead to problems, and there could also be issues related to poor network performance. Therefore, we’ve made the following improvements to the "Submit" button:<br /><br /><ul><li>Upon clicking the button, it is immediately disabled, accompanied by a visual change in color. </li><li>The button remains disabled while the initial labels are still loading and while the labeled inputs are still being submitted. In the latter case, the button label dynamically changes to “Submitting.” </li><li>The button is re-enabled promptly after the submitted labels have been processed and the page is fully prepared for the user's next action.</li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue where double-clicking the "Submit" button resulted in duplicated annotations|<ul><li>Previously, in the context of a visual detection task involving bounding box labeling, double-clicking the submit button caused each bounding box to be duplicated, leading to potential input skipping. We fixed it.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue that triggered an error during label review| <ul><li>When using AI Assist for labeling, a situation arose where, upon submission for review, the reviewer could successfully accept labels meeting the specified threshold. However, an error would occur after approving a certain number of inputs. We fixed it. </li></ul> |
|![bug](/img/bug.jpg)|Improved input carousel navigation and canvas display when approving labels| <ul><li>Previously, when approving labels, the carousel input would progress, updating the thumbnail carousel and loading annotations for the current input. However, the main image canvas failed to display the corresponding image, showing the previous one instead. We fixed the issue and incorporated a safety logic into the "Approve" button to ensure a smoother and more accurate approval process.</li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue where reviewer changes did not seem to persist | <ul><li>Previously, issues arose where reviewer edits or changes didn't appear to persist reliably. We’ve introduced a loading overlay that temporarily restricts other user actions during the app's loading or submission processes, preventing unintended calls and race conditions. This enhancement ensures that reviewer changes are now consistently applied and successfully retained.</li></ul> | 
|![bug](/img/bug.jpg)|Fixed an issue with labeling out-of-bounds bounding boxes| <ul><li>Previously, attempting to save a bounding box positioned out of bounds resulted in an error. Specifically, drawing a bounding box beyond the defined bounds while labeling any input triggered an issue upon saving the annotation. We fixed the issue. </li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue with not pulling new batches of inputs consistently|This problem persisted across labeling task creation scenarios, whether it's a full task for a single labeler or a partitioned task.<br /><br /><ul><li>Previously, after labeling 5-10 inputs, the labeler unexpectedly reverted to the first input instead of fetching new inputs from the stack, leading to repetitive labeling of the same set. Also, after closing the labeler screen, the “LABEL” button on the “Tasks” page could still appear but was no longer clickable. We fixed the issue.</li></ul> | 
|![bug](/img/bug.jpg)|Fixed issues with annotation of bounding boxes | <ul><li>Previously, there was an issue preventing the successful annotation of bounding boxes when utilizing concepts containing capital letters or dashes. We fixed the issue. </li><li>We fixed an issue where it was not possible to delete AI-assisted bounding box labels that remain unaccepted or rejected.</li><li>Previously, users were unable to change the concept of a bounding box within a labeling task. This constraint applied to both manually created bounding boxes and those generated through accepted or rejected AI-assist predictions. We fixed the issue.</li><li>We fixed an issue where it was not possible to adjust a bounding box touching the edge.</li><li>We fixed an issue where the confidence threshold for filtering predictions in AI-assist bounding box labeling did not work as intended.</li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue where it was not possible to edit and add concepts to an existing labeling task| <ul><li>Previously, if you created a labeling task, began annotating an input, and later revisited the labeling task to include additional concepts, the newly added concepts did not reflect in the list when returning to label inputs. We fixed the issue.</li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue with adjusting the threshold of AI-assist suggestions| <ul><li>Previously, there was an issue where moving the threshold beyond the score of an accepted AI-assist suggestion resulted in the hiding of the annotation. This affected both the concept list and the image canvas—though the annotations created were still successfully processed upon input submission. We fixed the issue. </li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue that led to an app crashing when clicking the "X" icon on a region| <ul><li>This error occurred specifically when following a sequence of actions: creating an app with the base workflow as Universal, adding images to a dataset, creating concepts, creating a labeling task, and attempting to make a region negative by clicking the "X" button on the first image. We fixed it. </li></ul> |  
|![bug](/img/bug.jpg)|Fixed an issue where a collaborator could not assign an app owner as a labeler when creating a task|<ul><li>Previously, if an app collaborator attempted to create a task, they could not add the app owner as a worker to the task. We fixed the issue. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where adding a collaborator in a labeling task was not accurately reflected|<ul><li>In the process of creating a labeling task, the option to assign a collaborator was functioning correctly—confirmations, such as email notifications, were sent appropriately. However, upon editing the task subsequently, there was an incorrect display of "No" under the collaborator option. We fixed it. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where deleting a collaborator completely broke the labeling tasks screen|<ul><li>Previously, removing a collaborator disrupted the functionality of labeler tasks. We fixed the issue. </li></ul>|

## Modules

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Introduced automatic retrying on MODEL_DEPLOYING status in LLM modules| <ul><li>This improvement enhances the reliability of predictions in LLM modules. Now, when a MODEL_DEPLOYING status is received, a retry mechanism is automatically initiated for predictions. This ensures a more robust and consistent user experience by handling deployment status dynamically and optimizing the prediction process in LLM modules.</li></ul> | 
|![improvement](/img/improvement.jpg)|Improved caching in Geoint module using app state hash| <ul><li>We’ve enhanced the overall caching mechanism for the Geoint module for visual searches. </li></ul> |
|![improvement](/img/improvement.jpg)|Revamped the [face visual search](https://clarifai.com/mansi_k/VisualSearchPOC/modules/face_search) module|<ul><li>We improved the module for a more refined and enhanced user experience.</li></ul>|
|![bug](/img/bug.jpg)|Fixed a bug in the LLM Battleground module | <ul><li>Previously, there was a "Resource does not exist" bug in the module. We fixed it. </li></ul> 
|![bug](/img/bug.jpg)|Fixed an issue with the [data-augmentation](https://clarifai.com/clarifai/data/modules/data-augmentation) module| <ul><li>Previously, users were unable to create or store inputs when submitting an augmentation job through the module. We fixed it. </li></ul> |  

 