---
description: Changelog for Clarifai Release 9.5
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -44
pagination_next: product-updates/changelog/release96
pagination_prev: product-updates/changelog/release94
---

# Release 9.5

<h2>Date: June 5th, 2023 </h2>

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Old Portal

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| **Deprecation** |  Our old portal is officially entering early deprecation and will no longer be actively maintained | <ul><li> The legacy portal will be decommissioned and it will no longer be accessible after July 3rd, 2023.</li><li>We encourage our users to switch to the new portal for a better experience.</li></ul> |

## Community  

### Large Language Models (LLMs)

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added more LLM model options to allow our users to unleash the power of the latest developments in Generative AI | We've wrapped several LLM models from various vendors into our platform. You can use them to perform a wide range of tasks, including text summarization, text generation, text embedding, text language detection, text-to-image conversion, text-to-audio conversion, transcription, translation, and image upscaling. <br /><br /><ul><li> We've wrapped the following models from Cohere: `cohere-summarize`, `cohere-generate`, `cohere-embed`, `cohere-multilingual-embed`, `cohere-detect-language` (text-to-text, text-to-embeddings).</li><li>We've wrapped the following models from AI21 Labs: `Jurassic2-Large`, `Jurassic2-Grande`, `Jurassic2-Grande-Instruct`,`Jurassic2-Jumbo-Instruct`, `Summarize-API` (text-to-text).</li><li>We've wrapped the following models from OpenAI: `GPT-3.5`, `GPT-4` (text-to-text), `openai-embed` (text- to-embed).</li></ul> |
| ![new-feature](/img/new_feature.jpg) | Unleashed increased capabilities with LLMs | <ul><li> Added ability to perform transfer learning on top of LLMs.</li><li>Added ability to perform auto-labeling with GPT3.5/4 and large LLM wrappers.</li></ul>  |

### Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Published a new model type called Python Regex-Based Classifier | <ul><li>The new model type allows you to classify text using regex. If the regex matches, the text is classified as the provided concepts. </li><li>If you're a Python coder who needs to do pattern-matching text classification (such as text moderation, LLM-based zero-shot, or auto-labeling), you can provide concepts and tag text inputs with the Regex-Based Classifier. Optionally, you can chain it together with many other models and operators in a workflow.</li></ul> |
|![improvement](/img/improvement.jpg)| Updated the default params values for the MMDetection__YoloF deep training template  | <ul><li>The deep training template now has updated default parameter values. </li></ul> |
|![improvement](/img/improvement.jpg)| Replaced the “Train Model” button with a “Create New Model Version” button on the model viewer screen| <ul><li>The new button now more explicitly points to what you can achieve if you click it. </li></ul> |
|![improvement](/img/improvement.jpg)| Added a missing gear icon at the upper-right section of the model viewer page | <ul><li>Previously, there was a missing gear icon on the model viewer page. The icon is used to cache public preview predictions.</li><li>The gear icon is now available, and you can use it to add public preview examples for non-logged-in users to see.</li></ul> |
|![improvement](/img/improvement.jpg)| Added preset inputs to appear on the left side of the Model-Viewer screen | <ul><li>If you open a model, inputs (thumbnails) now appear on the left side. </li></ul> |
|![improvement](/img/improvement.jpg)| Improved the design of the model version table and the training log monitor | If you create a model and hit the "train" button, you'll be redirected to the model version screen. <br /> <br /> <ul><li> You can click the pencil button to edit a model version description and save it on the fly.</li><li>You can get information about the status of the evaluation—the spinning wheel lets you check the status. You can also view the status message, view the training log monitor (for deep trained models only), retrain with a new version, and cancel the training.</li><li>We've also added various action buttons for copying, deleting, and viewing a trained model version.</li></ul> |
|![improvement](/img/improvement.jpg) | Improved the design of the model versions dropdown list and "See versions table" button on the Model-Viewer screen| <ul><li>Model version selection is now more prominent than the previous semi-hidden view on the predict pane.</li> <li>If you select a model version, the predictions of that version will be rendered on the predict pane. </li> <li>You can also click the "See versions table" button to see the history of a model version.</li></ul> |
|![bug](/img/bug.jpg) | Fixed an issue where confusion matrix items appeared clogged in the evaluation results for datasets with many concepts, which complicated their viewing and interpretation | <ul><li> If you go to the evaluation results page to evaluate the performance of a model version, the items in the confusion matrix do not now appear clogged when you select many concepts. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where model training log details showed as loading even when training logs were not available | <ul><li>Previously, when the status for training a model showed as trained, the monitor kept showing that the training logs were being loaded. This happened because the embed-classifier model type does not have training logs. <li>Currently, “View Logs” is only shown when logs are available.</li> </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the prediction pane in the model viewer page of successfully user-trained models disappeared  | <ul><li>The prediction pane of user-trained models now works as expected.</li><li> The "Add Preview Images" and "Try Your Input" buttons are now working as expected. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the initial prediction results of Clarifai's text models could not be rendered | <ul><li>Clarifai's text models now render first prediction results appropriately.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the segmentation output mask size did not match the input image | <ul><li>If you open a visual segmentation model, the segmentation output mask size now matches the input image. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the "Try your own Input" pop-up modal disappeared immediately | If you navigate to any visual-classifier or visual-detector model, either in your own app or Community, click the blue "+" icon on the left-hand side of the screen, a modal will appear asking you to upload an image to try the model. <br /><br /><ul><li> Previously, the modal could disappear immediately. After fixing the issue, the modal now stays open and waits for the user to choose an image.</li></ul> |

### Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added ability to customize non-user owned model output config in workflows   | <ul><li> You can now customize the output config settings of a model belonging to another user, and use that model in a workflow, such as in auto-annotation tasks. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the workflow editor gave an "Invalid Version” error when a community model was selected | <ul><li>Previously, if you selected the "Visual Classifier" model type when editing a workflow, and then chose any image classification model from the Community, an "Invalid Version" error could be displayed. We've fixed the issue.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the workflow editor failed to respect the range definition of an operator argument | <ul><li>The range definition of an operator argument now works well when editing a workflow.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the select concepts pop-up modal on the workflow editor failed to disappear | <ul><li>Previously, if you wanted to edit a concept-thresholder model type and clicked the "SELECT CONCEPTS" button, the ensuing pop-up modal could not disappear from the workflow editor screen.</li><li>The select concepts modal now gets closed if you navigate to a previous page.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where editing and updating a workflow wiped out the preview examples | <ul><li>The uploaded preview input examples are now saved and remain public even after editing a workflow.</li></ul> |

### Header and Sidebar 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Improved the design of the navigation bar | <ul><li> We've improved the design of the navigation bar. For example, we've fixed an issue where the styling for all the buttons in the navigation bar appeared to be wrong after refreshing or hard reloading the page. </li></ul> |
|![improvement](/img/improvement.jpg) | Made the thumbnail of an app on the collapsible left sidebar to use the app's uploaded image | <ul><li>If a user has uploaded an app's image on the app overview page, it will now also appear as the app's thumbnail on the collapsible left sidebar.</li></ul> |

### Apps

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) |  Published a new type of Base Workflow for apps called "Roberta-embedder"  | <ul> <li>When creating a new application, you can now choose the new type of Base Workflow for your app. The workflow lets you perform transfer learning on text inputs. </li></ul> |
|![improvement](/img/improvement.jpg)| Restricted the visibility of the settings page of public apps| <ul><li>Modified the visibility of the app settings page for non-logged-in users, regular logged-in users, app collaborators, app owners, organization admins, organization members, and team members. </li><li>The app settings page is now not visible to users without the necessary permissions. </li></ul> |
|![improvement](/img/improvement.jpg)| Removed a duplicate language understanding workflow that appeared when a user created a new app | <ul><li>When a user created a new application, a duplicate language understanding workflow appeared in the dropdown list for selecting the app's Base Workflow. It has now been removed.</li></ul> |
|![bug](/img/bug.jpg) |Fixed an issue where making a model public caused the app associated with it to crash | <ul><li> Publicizing a model now works as expected. </li></ul> |

### Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Exposed the app settings section to members of an organization  | <ul><li>We've removed the API section on the page.</li><li>All roles—admins, organization contributors, and team contributors—now have access to every item on the collapsible left sidebar.</li><li>All roles now have access to the “Create a Model” and “Create a Workflow” buttons.</li></ul> |
|![improvement](/img/improvement.jpg)| Introduced the use of the logged-in user's PAT (Personal Access Token) when showing the Call by API code samples | <ul><li>Previously, using an organization's PAT in the Call by API code samples gave an error from the backend. Therefore, we now always fetch the logged-in user’s PAT to be used in the Call by API samples. </li></ul> | 
|![bug](/img/bug.jpg) | Fixed an issue that prevented organization members from assigning themselves to Tasks on the Task-Editor| <ul><li>Previously, an organization member could not assign themself to an organization app as a labeler—without using collaborators.</li><li>Labeling tasks are now created successfully.</li></ul> |
|![bug](/img/bug.jpg) | Fixed an issue that prevented organization members from accessing assigned tasks on the Task-Manager | <ul><li>An organization member can now assign a task to themself and label the task from the listed labeling actions.</li></ul> |

### Datasets

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Fixed an issue that prevented creating a new version of a dataset if the dataset had no inputs | <ul><li> Previously, if you created a new dataset with no inputs, and you tried to create a version for it, that action broke the empty dataset and produced errors. We've fixed the issue.</li></ul> |
|![bug](/img/bug.jpg)| Fixed a broken link on the datasets manager page that did not point correctly to the dataset documentation | <ul><li>Previously, the "Learn more" link on the datasets manager page that pointed to the dataset documentation was broken. The link now works correctly. </li></ul> |

### Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Improved the working of the Smart Search feature | <ul><li>If you now perform a Smart Search and then clear out the search input field, and hit the enter button, the search results will be reset.</li><li>We've replaced the placeholder text in the Smart Search bar with the following help text: `Begin typing to Smart Search (press # to add a Concept) text`.</li></ul> |
|![improvement](/img/improvement.jpg) | Added hover-over tooltips for clickable elements on the Input-Manager | <ul><li>Added tooltips to the **Datasets** section and the negate (or invert) labels.</li><li>Added popovers with descriptions and "Learn More" links to the **Select or add concepts** filter field and the **Metadata** section. </li></ul> |
|![improvement](/img/improvement.jpg)| Added support for importing a batch of video inputs on the Input-Manager  | <ul><li> You can now easily add a batch of video inputs. </li></ul> |
|![improvement](/img/improvement.jpg)| Implemented a toggle functionality when uploading inputs | <ul><li> We've added the ability to toggle and automatically refresh the input grid while actively importing inputs.</li><li>We've also updated the icon and the styles of the input upload monitor window. </li></ul> |
|![bug](/img/bug.jpg)| Fixed some issues with the Smart Search feature| <ul><li>If you type a text search in the input field, spaces in the texts are now not automatically converted into dashes.</li><li>You can now manually insert dashes into tags to freely search by concepts, without automatic conversion. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that caused an incorrect status count for input import jobs | <ul><li>The input upload monitor now displays a correct status count when uploading inputs.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that caused input import jobs containing large images to fail | <ul><li> Inputs of large images are now uploaded successfully. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that caused the import job "Uploading..." status to appear to stop at 50%  | <ul><li>The input upload processing now shows in %, and it goes up to 100%.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that caused the import job monitor to suddenly disappear after all jobs are inactive  | <ul><li> After the input import jobs are finished, the window is now still kept open so that a user can see that the upload process has succeeded. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that caused import jobs containing both images and videos to fail | <ul><li>You can now upload bulk inputs of images and videos without noticing any errors.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where trained concepts appeared in the completion list twice | <ul><li>Previously, requests happened in parallel without canceling each other. The issue has been fixed. </li></ul> |
|![bug](/img/bug.jpg) | Fixed an issue that prevented the second page of inputs from being loaded when some inputs got a FAILED upload status  | <ul><li> The second page of inputs is now loaded as desired.</li></ul> |

### Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Added a help message before a user draws a bounding box or a polygon | <ul><li>Added the "you must select a concept before drawing bbox / polygon" help message to be shown every time a user wants to draw a bounding box or a polygon.</li></ul> |
| ![improvement](/img/improvement.jpg)| Added ability to move between inputs on the Input-viewer with hotkey(s) | <ul><li>You can now use the keys to move between inputs: `up/down + left/right`. </li></ul> |
| ![improvement](/img/improvement.jpg)| Added hover-over tooltips for clickable elements on the Input-Viewer | <ul><li> We've added popovers to various buttons on the Input-Viewer. This lets you know what each button does before clicking it.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed some issues that prevented successfully creating a polygon on an input | <ul><li>Previously, clicking the initial point of a polygon could not close it. You can now finish creating a polygon by clicking the initial point.</li><li>Previously, creating a polygon could sometimes close or finish abruptly without warning or intent. You now need to deliberately click on the initial point to close the polygon. </li></ul> |
|![bug](/img/bug.jpg) | Fixed an issue that prevented SDH (Secure Data Hosting) images from rendering on the input viewer page| SDH refers to an approach we use to store and manage inputs in a secure environment. All the input URLs are backed by an input hosting server with token-based authorization. The inputs are fetched from the hosted URLs only with an authorized token. <br/><br/><ul><li> Canvas image rendering for SDH is now working properly. </li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that when SDH was enabled, the backend service returned an SDH URL, which could not be processed for predictions | <ul><li>Previously, when SDH was enabled, the backend service returned an SDH URL, which was not the URL of the input. However, the backend does not support making predictions using an SDH URL directly—because if we predict using the URL, we download the user-provided inputs directly.</li><li>We've fixed the issue by removing the URL from the request whenever an input ID is present in the data block. In case there is no ID in the request, we'll use the URL as a fallback.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that allowed the frontend to send the entire `image` object when running model or workflow predictions  | <ul><li>Previously, the frontend sent the entire `image` object returned from the API response, implying that the `image.url` was actually the user provided URL, not the hosted URL.</li><li> Currently, when we make predictions from a user input, the request only has `image.url`, and it's the hosted origin URL built from the API response, without any other fields. The same rule applies to the other input types. </li></ul> |
|![bug](/img/bug.jpg) | Fixed an issue where the concept dropdown list still remained visible even when a user navigated away from it | If you go to the Input-Viewer screen, and select the **Annotate** mode option, you can add concepts to an input from the list that drops down after clicking the concepts search box. <br /><br /> <ul><li>Previously, that dropdown list still remained visible even after clicking the outside of it. We've fixed the issue.</li></ul> |

### Task-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue where errors were displayed on the tasks listing table | <ul><li>The tasks listing table now displays labeling tasks correctly with no errors.</li></ul> |

### Search

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue that caused the model or the workflow selector to return incorrect search results  | <ul><li>If you type in the inputs selector and search for a model or a workflow, it now returns the correct search results.</li><li>We also fixed an issue that caused incorrect states when using the model or the workflow selector component.</li></ul> |

### Email 

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an error shown in the verification link of a secondary email | <ul><li>Previously, when a user added a secondary email to their account, and clicked the verification and login link sent to their inbox, they could get an error. We've fixed the issue. </li></ul> |

## Clarifai-Python-Utils

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added more utilities and examples to the [Clarifai-Python-Utils](https://github.com/Clarifai/clarifai-python-utils) SDK  | Clarifai-Python-Utils offers a comprehensive set of utilities and tools that simplifies and enhances the integration of Clarifai's powerful AI capabilities into your Python projects. <br /><br /><ul><li>We've added more utilities and examples for building common tasks so that you can leverage the full potential of Clarifai's AI technology.</li><li>For example, you can now use the SDK to perform data uploads in xView and ImageNet dataset formats while displaying the updated progress of the upload process.</li></ul> |
|![new-feature](/img/new_feature.jpg)|Created a Python script that generates an images archive from an export archive, and added it to the Clarifai-Python-Utils repository | <ul><li> Created a Python class that delivers various functionalities via an SDK to a user, including downloading URLs, unarchiving ZIP files, and iterating over all the inputs in an export archive.</li><li>The script is useful for users who export dataset versions and want to process them further.</li></ul> |

