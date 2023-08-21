---
description: Changelog for Clarifai Release 9.7
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -46
pagination_next: null
pagination_prev: product-updates/changelog/release96
---

# Release 9.7

**Release Date:** August 15th, 2023

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Old Portal

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| **Decommissioned** |  The old portal has now been decommissioned  | <ul><li> The old portal is no longer publicly accessible. You can contact our support department if you still need to access the unmaintained old portal (at your own risk). </li><li>All visitors to `portal.clarifai.com` (old portal) will be hard redirected to `clarifai.com/explore` (new portal).</li></ul> |

## API

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Enabling [Secure Data Hosting](https://docs.clarifai.com/product-updates/upcoming-api-changes/secure-data-hosting) (SDH) feature for all users |<ul><li> SDH is now enabled for all users. This is a **critical, breaking change**. See [here](https://docs.clarifai.com/product-updates/upcoming-api-changes/secure-data-hosting#what-you-need-to-do) for more information.</li></ul> |

## Community  

### Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Published several new, ground-breaking models |<ul><li>Published [**General-English-Image-Caption-Blip-2**](https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip-2), a scalable multimodal pre-training method that enables any Large Language Models (LLMs) to ingest and understand images. It unlocks the capabilities of zero-shot image-to-text generation.</li><li>Published [**Falcon-7B-Instruct**](https://clarifai.com/clarifai/LLM-OpenSource-Models-Training-Inference-Test/models/tiiuae-falcon-7b-instruct), a 7B parameters LLM based on Falcon-7B and fine-tuned on instructions and conversational data; they thus lend better to popular assistant-style tasks.</li><li> Published [**Hkunlp_Instructor-XL**](https://clarifai.com/clarifai/LLM-OpenSource-Models-Training-Inference-Test/models/hkunlp_instructor-xl), an embedding model that can generate text embeddings tailored to any task (e.g., classification, clustering, text evaluation, etc.) and domains (e.g., science, finance, etc.) by simply providing the task instruction, without any fine-tuning.</li> <li> Published [**Llama2-7B-Chat**](https://clarifai.com/meta/Llama-2/models/Llama2-7b-chat), a fine-tuned LLM from Meta that is optimized for dialogue use cases.</li><li>Published [**Llama2-13B-Chat**](https://clarifai.com/meta/Llama-2/models/llama2-13b-chat), a fine-tuned LLM from Meta that is optimized for dialogue use cases.</li><li> Published [**Text-Bison**](https://clarifai.com/gcp/generate/models/text-bison), a foundation model from GCP (Google Cloud Platform) that is optimized for a variety of natural language tasks such as sentiment analysis, entity extraction, content creation, document summaries, answers to questions, and labels that classify content.</li><li> Published [**Code-Gecko**](https://clarifai.com/gcp/generate/models/code-gecko), a foundation model from GCP that supports code completion. It generates new code based on the code that was recently typed by a user.</li><li>Published [**Code-Bison**](https://clarifai.com/gcp/generate/models/code-bison), a foundation model from GCP that supports code generation. It generates code based on a natural language description. For example, it can create functions, web pages, and unit tests.</li><li>Published [**Textembedding-Gecko**](https://clarifai.com/gcp/embeddings/models/textembedding-gecko), an embedding model from GCP that generates embeddings from the given text, which can be used for different language-related tasks.</li><li>Published [**Detr-Resnet-101**](https://clarifai.com/facebook/object-detection/models/detr-resnet-101), a DEtection TRansformer (DETR) object detection model that is trained end-to-end on COCO 2017 dataset (118k annotated images).</li><li>Published [**General-Image-Recognition-Deit-Base**](https://clarifai.com/facebook/image-classification/models/deit-base-distilled-patch16-224), a Data-Efficient Image Transformer (DeiT) image classification model that is pre-trained and fine-tuned on ImageNet-1k (1 million images, 1,000 classes).</li><li> Published [**Claude-v2**](https://clarifai.com/anthropic/completion/models/claude-v2), a chat completion model from Anthropic, driven by an LLM, for generating contextually relevant and coherent responses.</li><li> Published [**General-Image-Recognition-Deit-Base**](https://clarifai.com/facebook/image-classification/models/deit-base-distilled-patch16-224), a Data-Efficient Image Transformer (DeiT), state-of-the-art image classification model that is pre-trained and fine-tuned on ImageNet-1k (1 million images, 1,000 classes).</li><li> Published [**General-English-Image-Caption-Blip-2-6_7B**]( https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip-2-6_7B), a state-of-the-art image captioning model with 6.7B parameters.</li><li>Published [**Multimodal-Embedder-Blip-2 **]( https://clarifai.com/salesforce/blip/models/multimodal-embedder-blip-2), a scalable multimodal pre-training method that enables any LLMs to ingest and understand images. It unlocks the capabilities of zero-shot image-to-text generation. </li><li> Published [**XGen-7B-8K-Instruct**](https://clarifai.com/salesforce/xgen/models/xgen-7b-8k-instruct), a powerful 7-billion parameter LLM trained on up to 8K sequence length with fine-tuning on instructional data, enabling robust long sequence. </li> <li>Published [**MPT-Instruct-7B**]( https://clarifai.com/mosaicml/mpt/models/mpt-7b-instruct), a decoder-style transformer LLM, fine-tuned for efficient short-form instruction with 6.7B parameters.</li></ul> |
|![new-feature](/img/new_feature.jpg)| Added ability to customize Hugging Face and MMCV (OpenMMLab Computer Vision) deep training templates using the Python config file format|<ul><li> You can now add your own custom model configuration when creating a text classification model using the Hugging Face deep training template. </li><li> You can also add custom configurations to MMClassification, MMDetection, and MMSegmentation deep training templates. You can customize their loss functions, backbones, necks, heads, and more.</li></ul>|
|![bug](/img/bug.jpg)| Fixed an issue that caused the model evaluation process to break when numerous concepts were used | <ul><li>Model evaluation now works as desired. </li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue with the A21 Jurassic generative model that caused it to cache output prompts, resulting in repetitive responses upon subsequent usage | <ul><li> The A21 Jurassic model now generates new responses, providing different outputs each time the page is refreshed. </li></ul> |
| ![bug](/img/bug.jpg)| Fixed an issue where models and workflows ignored new app and user IDs  | <ul><li>Previously, any attempts to rename an app or a user ID, or to relocate the app to an organization (equivalent to altering the user ID), resulted in the models and workflows failing to recognize these updated values. We fixed the issue.</li></ul>  |  
|![bug](/img/bug.jpg)|Fixed an issue where it was not possible to update a model's visibility |<ul><li>Previously, if you edited a model's visibility and published the changes, trying to edit the model's visibility again could not work. We fixed the issue. </li></ul>|
|**Developer Preview with Request-Only Access**| Added ability to [import models](https://docs.clarifai.com/portal-guide/model/hf-model-importer) from Hugging Face | <ul><li>You can now import models with permissive licenses from Hugging Face and use them on the Clarifai platform.</li></ul> |
| **Developer Preview with Request-Only Access** | Added ability to fine-tune text-to-text models | <ul><li> Advanced model builders can now further customize the behavior and output of the text-to-text models for specific text generation tasks. They can train the models on specific datasets to adapt their behavior for particular tasks or domains.</li></ul> |

### Model Page Improvements

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Reduced the width of the PAT ID field | If you click the **Use Model** button on a model's page, a small window will pop up. Next, if you select the **Call by API** tab, you'll be able to see the PAT key injected in your code samples. You can also click the **Create a new token** button to generate a new PAT. <br /><br /><ul><li>We improved the layout of the PAT ID field and the **Create a new token** button to enable them to fit properly in the form.</li></ul> |
| ![improvement](/img/improvement.jpg)|Added app name to the model/workflow/modules tiles details|<ul><li>We have incorporated the app's name that corresponds to the displayed resource, offering improved clarity. Now, when you review the tile details on an individual page for a model, workflow, or module, you will notice the app's name specified in the following format: `User ID / App ID`.</li></ul>|
| ![improvement](/img/improvement.jpg) | Created optimized UX (User Experience) for the prompter models on the Model-Viewer | <ul><li>We refined the way users interact with and receive output from the prompter models, aiming to make the process more intuitive, efficient, and user-friendly. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the model page for any detection model crashed when swapping between the **Overview** and **Concepts** tabs, then back again—but only if the predicted bounding boxes were rendered previously | <ul><li>Previously, if you navigated to any detection model's page, waited for the model to render bounding box predictions on the **Overview** tab (default), and then switched to the **Concepts** tab, switching back to the **Overview** tab generated an error. We fixed the issue.  </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where the **Create new Model** page displayed a series of broken thumbnails  | <ul><li>The thumbnails on the page are now displayed properly. </li></ul>   |

### Sorting

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Added ability to sort by stars and adjusted "created/updated" behavior | This sorting change affects both individual and Community pages as well as all resources—apps, models, workflows, modules, and datasets. <br /><br /><ul><li> In addition to sorting by **Name** and **Last Updated**, we added two more options: **Star Count** (default option, henceforth) and **Date Created**.</li> <li> If a user selects **Date Created**, **Last Updated**, or **Star Count**, the sorting results will be displayed in **Descending** order (by default)—the newest, more popular items will appear first. </li> <li>If a user selects **Model Name**, the sorting results will be displayed in **Ascending** order (by default)—items will be displayed alphabetically.</li></ul> |

### Apps

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Exposed apps as a new resource in the Community listing  | <ul><li>Just like models and workflows, you can now share, sort, and search apps in the Community.</li></ul>  |

### Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Introduced the Smart Image Search by Caption feature on the Input-Manager | <ul><li> You can rank, sort, and retrieve images based on a predicted match to a query caption text. You just need to provide a caption text that best describes the images you want to search for, and the most relevant matches associated with that query will be displayed. </li></ul>|
|![new-feature](/img/new_feature.jpg)| Fixed an issue that caused infinite polling for inputs after uploading has been completed |<ul><li>You can now upload inputs successfully without experiencing any issues.</li></ul> |
|![new-feature](/img/new_feature.jpg)| Added ability to view estimated search result counts on the Input-Manager | <ul><li> You can now view an estimated number of inputs associated with your search results.</li></ul>  |
|![bug](/img/bug.jpg) | Fixed an issue where uploading a CSV file of text data into a newly created dataset did not work | <ul><li> You can now create a new dataset and upload CSV files with text data without encountering any issues.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue that prevented the unification of Input-Manager and Input-Viewer stores  | <ul><li> The Input-Manager and the Input-Viewer now have the same unified stores. They now display the same search results, and the list of inputs used in the inputs manager grid is the same as those used in the inputs gallery on the Input-Viewer page. </li></ul>  |

### Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Added ability to create annotations with AI assistance on the Input-Viewer | <ul><li>You can now request annotation suggestions from any model or workflow available to you on a particular input. You can then convert the suggestion into an annotation.</li></ul>  |
|![improvement](/img/improvement.jpg)| Added ability to use hotkeys to switch between annotation tools on the Input-Viewer |<ul><li>We significantly improved the accessibility and usability of the Input-Viewer by adding a new feature that enables the use of hotkeys on the annotation tools.</li></ul> |


### User Onboarding

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Previously, when you were using an org account, selecting “Explore on your own” on the onboarding modal created the default first app under your logged-in user's account, and not on your org user's account. |<ul><li> The onboarding modal now creates the default first app under the org user's account.</li><li> The user is also now able to see their full name displayed on the onboarding modal.</li></ul> |
|![bug](/img/bug.jpg) | Fixed an issue where a created PAT did not appear in the list of PATs | <ul><li> Previously, when you created a new PAT on the “Use in API” screen during the onboarding process, the PAT was not automatically populated and could not be used straight away, as compared to the standard "Use in API" flow on a model's page. We fixed the issue. </li></ul> |

### User Account Settings

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)| Added ability to make a user's profile public or private  |<ul><li> You can now update the visibility of your user profile to either public or private.</li><li>You will not be able to keep any resources public if you set your user profile visibility to private.</li></ul> |
|![improvement](/img/improvement.jpg)| Added new roles on the **Job Role** drop-down list |<ul><li> On the **Account Settings** page, you will find a form that enables you to update your contact information. We have made updates to the roles listed in the **Job Role** field within the form. </li><li>The new roles are also reflected in the sign-up form.</li></ul> |

### Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Added “AppAddCollaborators” featured flag for org admins and org members | <ul><li>Org admins and org members now have the “AppAddCollaborators” featured flag, which enables them to add collaborators to an app.</li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where an org contributor was not allowed to authorize or uninstall Installed Module Versions (IMV) |<ul><li> An org contributor role now has sufficient scopes to successfully authorize or uninstall IMVs. </li></ul> |
|![bug](/img/bug.jpg)| Fixed an issue where a team member was not allowed to view or use IMVs |<ul><li> A team contributor or member role now has sufficient scopes to successfully view or use IMVs. </li></ul> |

### Modules

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)| Improved the handling of GitHub repository URLs with trailing slashes |<ul><li>We enhanced the way we handle the importation of modules from Streamlit app repositories on GitHub with trailing slashes ("/") at the end of their URLs.  </li></ul> |
| ![improvement](/img/improvement.jpg) | Improved the design of the **Install Module** pop-up modal | If you click the **Install Module** button at the upper-right corner of an individual module page, a small modal will pop up. <br /> <br /> <ul><li>We've improved the design of the modal to allow you to select a destination organization where you want to install the module. Previously, you could solely select a user.</li></ul>|
|![improvement](/img/improvement.jpg) | Increased the deployment time for the module manager | <ul><li>Previously, when you created a new module, the deployment timed out after 5 minutes. If the module required a longer time to build, the module deployment failed after 5 minutes.</li><li>We increased the deployment time for the module manager from 5 minutes to 10 minutes.</li></ul> |
|![improvement](/img/improvement.jpg) | Updated the module manager to set secrets that modules can use | <ul><li>You can now set environment variables and secrets for  module versions as you create them. </li></ul>  |
|![improvement](/img/improvement.jpg) | Allowed anonymous usage of the [LLM Battleground](https://clarifai.com/anthropic/completion/installed_module_versions/LLMBattleground/compare) module | <ul><li>You can now anonymously use the module to compare the performance of large language models. You do not need to log in to the Clarifai platform before using it. </li></ul> |
|![improvement](/img/improvement.jpg) | Added a warning to be displayed before deleting a module version | <ul><li> We added a warning informing a user that deleting a module version will uninstall each of its install instances.</li></ul> |
| ![bug](/img/bug.jpg) | Added a directory to prevent modules from breaking libraries | <ul><li>Previously, we encountered a bug that was hindering modules from writing temporary files, leading to the disruption of certain Python packages during runtime. We fixed the issue.</li></ul> |
|![bug](/img/bug.jpg) | Fixed a bug that prevented getting commits from GitHub repository branches | <ul><li> We fixed a Module-Manager bug that caused errors when getting commits from GitHub repository branches. </li></ul> |

### Secure Data Hosting (SDH)

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![bug](/img/bug.jpg)| Previously, when SDH was enabled on the Portal, cross-user app copying did not work |<ul><li> Previously, when SDH was active, duplicating an app you are added as a collaborator resulted in the destination app having broken inputs. On the other hand, duplicating your own apps worked just fine. We fixed the issue.   </li></ul> |

### Labeler

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg)| Fixed an issue that prevented annotations from being created while working on a task |<ul><li> You can now successfully add annotations when labeling tasks.</li></ul> |

### Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg)| Fixed an issue where selecting concepts from the workflow visual graph builder resulted in an error  |<ul><li> Previously, selecting concepts for a model node in the workflow visual graph builder resulted in an empty list. We fixed the issue. </li></ul> |
