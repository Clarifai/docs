---
description: Changelog for Clarifai Release 9.2
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -41
pagination_next: product-updates/changelog/release93
pagination_prev: product-updates/changelog/release91
---

# Release 9.2

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Added the single sign-on (SSO) registration option|<ul><li>You can now use the SSO feature to sign up on the Clarifai platform using your Google account.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published v2 form for creating deep-trained models|<ul><li>You can now use the new form to create your deep-trained models.</li></ul>|
|![improvement](/img/improvement.jpg)|Adjusted the titles for resources to enhance user-friendliness and consistency in structure.|<ul><li>Titles for various resources, such as pages for models, workflows, apps, and datasets, are now generated properly and consistently.</li></ul>|
|![improvement](/img/improvement.jpg)|Improved the design of the pending verification page|<ul><li>Once a new user signs up for an account, they're redirected to a pending verification page that informs them to verify their email address before they can access our platform.</li><li>We've improved the design of the page. </li></ul>|
|![improvement](/img/improvement.jpg)| Added infinite scroll for displaying concepts, instead of displaying all concepts at once|<ul><li>The concepts tab that lists the concepts available in each model is now paginated. This allows you to easily view the concepts available in each model, especially for models with a lot of concepts. </li></ul>|
|![improvement](/img/improvement.jpg)|Added pagination to the collaborations page|<ul><li>A list of collaborations is now paginated.</li></ul>|
|![improvement](/img/improvement.jpg)|Added a message to the **Unassigned** datasets filter option tooltip in the Input-Manager|<ul><li>Previously, the tooltip for the  **Unassigned** datasets filter option was empty. It now has a message that appears when a cursor is positioned over it.</li></ul>|
|![improvement](/img/improvement.jpg)|Renamed some UI fields for creating deep-trained models|<ul><li>We've renamed and re-ordered some UI fields for creating deep-trained models to make them easier to understand. </li></ul>|
|![improvement](/img/improvement.jpg)|Made improvements to the model viewer video interface|<ul><li>When you upload a video in the model viewer after clicking the **Try your own image or video** button, you will get a new and updated interface for the video controls, including an option to view the video on a full screen.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where some app names appeared instead of app IDs in the **Use in a Workflow** pop-up window|<ul><li>The **Use in a Workflow** pop-up window appears if you want to use a model in a workflow.</li><li>Previously, the drop-down list that lets you select a destination app for your workflow could populate app names, instead of app IDs. The issue has now been fixed, and there are only app IDs to choose from.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where searching for any string executed too quickly|<ul><li>Previously, search results could appear after each character typed in the search box. The unnecessary search results could not disappear, making it difficult to go back and perform a new search after searching for anything.</li><li>Currently, a search is only executed after a user completes typing the search term.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where an empty section appeared on a model's viewer page during prediction|<ul><li>Previously, an empty box would appear on the prediction load after 0.5 seconds. The model viewer page now loads properly.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where paginating a page overwrites the initial search results|<ul><li>Pagination no longer overwrites the initial results after performing a search.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where text from one column overflowed into another on the models' listing page|<ul><li>Texts on the models' listing page no longer run into multiple columns.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where a user did not receive any feedback after adding a new concept label in Input-Viewer|<ul><li>Previously, a user did not get any notification after successfully adding a new concept to an input in the explorer view—only until they tried to add it for the second time, in which case they'd receive an alert that it has a duplicate ID.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where deep train configuration resets to default|<ul><li>Previously, when creating a new deep-trained visual detector model, the image size parameter for configuring a template kept resetting to the default value of 512.</li></ul>|

## API  

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Added ability to overwrite a model's `output_info` in a workflow graph|<ul><li>You can now override the outputs from given nodes in your workflow by passing the `WorkflowNode.OutputInfoOverride` parameter within the definition of each  `api.WorkflowNode`. This modifies the `ModelVersion` you specified, and tells us to use the modified `ModelVersion` when you use the workflow for inference. <li>If provided, any `output_info` in the graph would take precedence over the `output_info` of the stored `model_version` at predict time of the workflow. This way, if you don't own the model version, you can change the output settings to fit your specific use cases.</li></li><li>This change affects the **PostWorkflow** endpoint (for adding workflows to apps), the **PatchWorkflow** endpoint (for editing workflows), and the **PostWorkflowResultsRequest** endpoint (for predicting with workflows).</li></ul>|