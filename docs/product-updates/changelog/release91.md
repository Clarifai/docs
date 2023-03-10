---
description: Changelog for Clarifai Release 9.1
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -40
pagination_next: product-updates/changelog/release92
pagination_prev: product-updates/changelog/release90
---

# Release 9.1

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Introduced the Clarifai Organizations feature within the Community|<ul><li>You can now use the powerful feature to consolidate multiple Clarifai accounts into an organization and make the most out of your teams.<li>It enhances collaboration, allows you to centralize the management of your Clarifai operations, and more.</li></li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the "Recommended" Resnet template|<ul><li>You can now use the template to yield optimal results with your visual classification models.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the [moderation-all-resnext-2](https://clarifai.com/datastrategy/MAIN-image-moderation/models/moderation-all-resnext-2) model|<ul><li>You can now use the image classification model to identify inappropriate content—such as nudity, drugs, suggestive, gore, etc.—in images and video.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the [moderation-abuse-japanese](https://clarifai.com/ptaszynski/text-moderation/models/moderation-abuse-japanese) model|<ul><li>You can now use the text classification/moderation model to detect cyberbullying in Japanese texts. </li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the [moderation-abuse-korean](https://clarifai.com/beomi/text-moderation/models/moderation-abuse-korean) model|<ul><li>You can now use the text classification/moderation model to classify Korean text into four concepts: hate speech, offensive language, gender bias, or other bias. </li></ul>|
|![improvement](/img/improvement.jpg)|Made "My Apps" text dynamic  |<ul><li>The top left menu item, "My Apps", now leads to either own apps (on a user's profile) or org apps (if the user has switched to an organization profile). In the latter case, the text now reads "Org Apps."</li></ul>|
|![improvement](/img/improvement.jpg)|Made improvements to the model version table|<ul><li>Added spinning wheel to model version table. It appears during training and shows the progress of the model evaluation.</li><li>Fixed a slight issue with model version table padding.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with duplicating apps|<ul><li>Previously, when copying an app’s resources, the drop-down list to select a destination app  contained app names, which had already been deprecated.</li><li>The issue has now been fixed and a user cannot choose an app name in the drop-down list; there is only an app id to choose from. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the model list page loaded excess models other than the ones owned by the user.|<ul><li>The model list page now fetches the correct number of models owned by the user within that app. This greatly improves the loading speed of the models' page. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the sorting drop-down box could be hidden when applying the listing view on apps, models, or workflows|<ul><li>The **Sort by** functionality is now fully visible and sorts apps, models, and workflows correctly when using the list view or the grid view.</li></ul>| 
|![bug](/img/bug.jpg)|Fixed an issue where Python code snippets for some models failed to work |<ul><li>The Python code snippets now work as desired when used for calling the models via an API request.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where when a member clicked an invite link to join an organization, they got redirected automatically.|<ul><li>Previously, when either an existing Clarifai user or an unregistered user clicked an invite link to join an organization, the page with options to accept the invite or register for an account before accepting the invite could appear—but it could redirect to the organization's account or sign up page within a second without a chance for the user to read the message and react accordingly.</li><li>The redirect no longer happens automatically.</li></ul>|
|![bug](/img/bug.jpg)|Fixed incorrect values displayed in the Usage dashboard for average stored inputs|<ul><li>Previously, there was a discrepancy between the value of the average stored inputs displayed in the Usage highlights section and that displayed in the Average Stored Inputs chart.</li><li>The value of the average stored inputs is now displayed correctly in both places.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with adding a secondary email in the account settings page|<ul><li>Previously, if you added a new email to your account, and clicked the sent verification link in your inbox, you could get an error—although the additional email was correctly verified.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with the job monitor not showing when uploading text inputs|<ul><li>The input upload job monitor is now visible for text inputs. It correctly shows the progress status of the uploads.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where adding metadata to image inputs was impossible|<ul><li>Adding metadata information to image inputs now works as expected.</li></ul>|
|![bug](/img/bug.jpg)|Fixed some issues with displaying polygon points|<ul><li>Polygons labeled in the Input Viewer page are now displayed as desired.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with configuring a model template using pre-trained weights|<ul><li>Previously, it was not possible to select a pre-trained weight out of the provided list of options when undertaking a deep train model configuration.</li><li>You can now select any of the options out of the drop-down list. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue with loading some models|<ul><li>Previously, there was an application-type error when trying to load some models from the Community. The issue has been fixed.</li></ul>|

## Old Portal
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|![new-feature](/img/new_feature.jpg)|Added a **SWITCH TO NEW PORTAL** button to allow users to switch to the new portal|<ul><li>You can now simply click the button on the legacy portal to be redirected to the new portal and try out its features.</li></ul>|


## API
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|![improvement](/img/improvement.jpg)|Improved the error codes generated when a request fails|<ul><li>Users now get more specific error codes that tell them why a particular request failed. The codes reflect specific parameter-related errors, which make debugging issues easy and fast.</li></ul>|
|![improvement](/img/improvement.jpg)|Improved the handling of retries for throttle and unconnected errors|<ul><li>Added better handling for the throttle error codes returned from API requests and unconnected error codes raised from the gRPC clients.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where using the **PostDatasetInputs** endpoint to add existing inputs with ids > 32 characters to a dataset resulted in an error|<ul><li>Input ids length is no longer validated for the **PostDatasetInputs** endpoint. So, the character limit is no longer applied. </li></ul> |

