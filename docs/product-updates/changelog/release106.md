---
description: Changelog for Clarifai Release 10.6
# For versioning, we use a negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1. 
sidebar_position: -57
pagination_next: product-updates/changelog/release107
pagination_prev: product-updates/changelog/release105
draft: false
---

# Release 10.6

**Release Date:** July 2nd, 2024

<hr/>

<br />

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) |![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Data Labeling​

:::warning GA

These data labeling features have been released as [**Generally Available (GA)**](https://docs.clarifai.com/product-updates/changelog/release-types). 

:::

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) |Introduced a new [auto-annotation](https://docs.clarifai.com/portal-guide/annotate/auto-annotation) experience for labeling already existing inputs in datasets| <ul><li>You can now set up a labeling task and enable automatic annotation, streamlining the process of annotating your text and image inputs quickly and efficiently. </li><li>You can select a model or workflow you own or choose one published in the Community for the auto-annotation task.</li><li>You can also review and edit the annotations from auto-annotation tasks. </li></ul> |
| ![new-feature](/img/new_feature.jpg) |Introduced the ability to manually [review](https://docs.clarifai.com/portal-guide/annotate/review) labeled inputs by partitioning them | <ul><li>You can now distribute inputs to be reviewed across multiple reviewers in the Labeling Tasks tool. This lets you automatically distribute labeled assets across multiple reviewers to improve the speed of review mode and reduce chances for a single point of dependence. </li></ul>   |

## Base Workflow

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Changed the default [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) to Universal <br/><br/> **(Breaking Change)** | <ul><li>Previously, when an application was created via the API without specifying a base workflow, the [General](https://clarifai.com/clarifai/main/workflows/General) workflow was used by default. Now, the default has been updated to the [Universal](https://clarifai.com/clarifai/main/workflows/Universal) workflow, ensuring consistency with applications created via the UI.</li><li> If you prefer not to use the default behavior, you can manually specify your desired workflow using an [API parameter](https://docs.clarifai.com/api-guide/workflows/base-workflows#update-your-base-workflow) or through the UI drop-down menu.</li> </ul>  |

## Devtools Integrations​

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg) | Integrated the Embedchain framework with Clarifai  |<ul><li> [Embedchain](https://embedchain.ai/) is an open-source framework that makes it easy to develop and deploy personalized AI-powered applications. We’ve integrated it with the Clarifai platform to streamline the creation of personalized LLM applications and offer a seamless process for managing various types of unstructured data.</li><li>You can check the integration documentation [here](https://docs.clarifai.com/integrations/embedchain/). </li></ul>|


## New Published Models

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Published new models <br/><br/>_(Clarifai-hosted models are the ones we host within our Clarifai Cloud. Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys)_  | <ul><li>Clarifai-hosted [Florence-2-large](https://clarifai.com/microsoft/florence/models/florence-2-large), a lightweight, versatile vision-language model by Microsoft, excelling in multiple tasks using a unified representation and the extensive FLD-5B dataset. </li><li>Wrapped [Claude 3.5 Sonnet](https://clarifai.com/anthropic/completion/models/claude-3_5-sonnet ), a high-speed, advanced AI model excelling in reasoning, knowledge, coding, and visual tasks; ideal for complex applications.</li></ul> |


## Community

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) |Extended Organization functionality for non-Enterprise Plans| <ul><li> Previously exclusive to Enterprise subscribers, the [Organization](https://docs.clarifai.com/portal-guide/clarifai-organizations/) functionality is now available for Community and PAYG billing plans. This provides more options for collaboration. However, advanced Org management features, such as roles and teams,  will still be available to Enterprise plan users only. </li></ul> |
|![improvement](/img/improvement.jpg)| Improved the form validation process on the "Create Your Profile" screen  | <ul><li>  We improved it by ensuring that all fields are validated before moving to the next screen, turning off the "Create Profile" button if the form is not valid, and greying out placeholder values in select fields, just like in input fields.</li></ul> |
| ![improvement](/img/improvement.jpg)  |Updated the UI design of several organization pages and tables|<ul> <li> We improved the design of several pages, such as added a new notification method for invitees to an organization, redesigned tables for members, and introduced new tables for teams and their members or apps. </li> </ul> |
| ![improvement](/img/improvement.jpg) |  Fixed issues with pre-defined role scopes to enhance the functionality and management of Collaborators and Org/Teams members  | <ul><li>These improvements ensure more accurate and flexible role assignments, leading to better access control, collaboration, and productivity within the organization.</li></ul>    |
| ![bug](/img/bug.jpg)  | Fixed license type filtering on **Models** listing page  | <ul><li>We fixed an issue where sorting models by their license type on the **Models** listing page was not functioning correctly. You can now accurately filter models according to their license type.</li></ul>  |
| ![bug](/img/bug.jpg)  |  Fixed an issue with Python (SDK) and NodeJS (SDK) code samples | If you want to use a model or a workflow for making API calls, you need to click the **Use Model / Workflow** button at the upper right corner of the individual page of a model or workflow. The modal that pops up has snippets in various programming languages, which you can copy and use. <br/> <br/>  <ul><li> Previously, the Python (SDK) and NodeJS (SDK) code samples for image classification models displayed incorrect snippets. We fixed this issue, and they now show the correct code samples. </li></ul>|


## Workflows

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Added ability to edit a workflow name|<ul><li>Previously, the workflow builder only allowed you to set workflow names when creating a workflow. The styling was also outdated, and you could not edit the workflow name while in edit mode. We improved this experience. Now, when in edit mode, the workflow name will be highlighted, allowing you to easily start typing a new name.</li></ul>|
|![bug](/img/bug.jpg) | Fixed an issue with the visual-detector node for creating workflows | <ul><li>Previously, the slider for configuring the threshold for detected concepts on the visual-detector node was not working. We fixed the issue, and the slider now works as intended.</li></ul> |

## Python SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)|Made some improvements. Learn more about them [here](https://github.com/Clarifai/clarifai-python/blob/master/CHANGELOG.md). | <ul><li> To prevent disk writes in environments where the file system might be protected, certain convenience features have been moved exclusively to the CLI. These features are only necessary for CLI usage and have been relocated to that section of the package. </li> <li> Added the ability to generate a random ID for uploaded text inputs if an input ID is not provided in the Dataloader. Previously, uploading text data to a dataset that already contained inputs would fail. Generating a random ID for new inputs resolves this issue. </li> <li> Introduced `BaseClient.from_env()` and added some new endpoints.</li><li> Upgraded to the latest version of the Clarifai-gRPC package (version 10.5.0) to leverage the newer gRPC functionality. </li></ul>|

## Node SDK

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg)| Released Node.js SDK v0.0.3. Learn more about it [here](https://github.com/Clarifai/clarifai-nodejs/blob/main/CHANGELOG.md). | <ul><li> Added custom certificate support to enable the use of root SSL certificates for secure gRPC connections.</li><li> Added new RAG capabilities.</li><li> Introduced unified documentation for Python and Node.js SDKs.</li></ul>|
