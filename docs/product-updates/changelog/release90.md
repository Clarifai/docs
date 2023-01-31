---
description: Changelog for Clarifai Release 9.0
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -39
pagination_next: product-updates/changelog/release91
pagination_prev: product-updates/changelog/release811
---

# Release 9.0

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)|Published the HuggingFace text classification template|<ul><li>The HuggingFace text classification template is now available to users. You can use the pre-configured text classifier model template to train with your data and improve the accuracy of your results.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the silent-face-anti-spoofing model.|<ul><li>You can now use the silent face anti-spoofing detection model to determine if a face in an image is a spoofing attempt or not. It is designed to prevent people from tricking facial identification systems, such as those used for unlocking phones or accessing secure locations.</li></ul>|
|![improvement](/img/improvement.jpg)|Made major redesign changes on listing pages|<ul><li>Improved the user experience when navigating the listing pages for models and workflows.</li><li>Added a new design and colors for models and workflows icons.</li><li>Added ability to list models and workflows by either grid view or list view.</li><li>Added mobile-responsive support.</li></ul>|
| ![improvement](/img/improvement.jpg)|Made improvements to the Usage Dashboard|<ul><li>Replaced “Stored Inputs” with “Average Stored Inputs.” We now compute it as an average, not as the total.</li><li>Added the word “Total” to “Training Hours” and “Ops Count.” They are now referred to as “Total Training Hours” and “Total Ops Count” respectively.</li></ul>|
|![improvement](/img/improvement.jpg)|Added ability to hover over collapsible sidebar icons|<ul><li>In the collapsed view on the left sidebar, the menu items are hidden and only the icons are left. We have now added a hover pop-up of the same text we hide to help users understand what each menu item is about.</li></ul>|
|![improvement](/img/improvement.jpg)|Stopped showing name and surname on public profiles|<ul><li>Public profiles show a user's name if it's their own account, they are a collaborator of your app, or they are part of your organization.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where collaborators' names showed as "undefined" in several places|<ul><li>Names of app collaborators are now displayed as desired without any issues.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the collapsible left sidebar sometimes did not display all the menu items unless the page was reloaded|<ul><li>All the items of the sidebar are now displayed as desired.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the header items did not display properly on mobile devices|<ul><li>The top navigation bar items are now displayed properly on small screens.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where editing a model's params did not show the proper original params|<ul><li>Previously, if you tried editing a model to see or change its parameters, you could find that some of them were set to default values, even if you set them differently during model creation. This is not the case currently as the proper original params are reflected.</li></ul>|


## Workflow-Editor
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|![improvement](/img/improvement.jpg)|Made improvements to dynamically render layouts of workflows|<ul><li>The workflow editor is now able to interpret an entire workflow graph definition and dynamically calculate the proper 2-dimensional coordinates for each of the nodes in the graph.</li></ul>|


## API
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|![new-feature](/img/new_feature.jpg)|Introduced the Python Utils package|<ul><li>You can now use the collection of small Python functions and classes to make common patterns shorter and easier when interacting with our API.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue when the API received Base64 decoded masks|<ul><li>Previously, if you provided a Base64 mask via an HTTP request, it failed to be created. It now works as expected.</li></ul>|


