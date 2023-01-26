---
description: Changelog for Clarifai Release 9.1
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -40
pagination_next: product-updates/upcoming-api-changes
pagination_prev: product-updates/changelog/release90
---

# Release 9.1

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg)|Made "My Apps" text dynamic  |<ul><li>The top left menu item, "My Apps", now leads to either own apps (on a user's profile) or org apps (if the user has switched to an organization profile). In the latter case, the text now reads "Org Apps."</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the model list page loads excess models other than the ones owned by the user.|<ul><li>The model list page now fetches the correct number of models owned by the user within that app. </li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the sorting drop-down box could be hidden when applying the listing view on apps, models, or workflows|<ul><li>The **Sort by** functionality is now fully visible and sorts apps, models, and workflows correctly when using the list view or the grid view.</li></ul>| 
|![bug](/img/bug.jpg)|Fixed an issue where Python code snippets for some models failed to work |<ul><li>The Python code snippets now work as desired when calling the models via an API request.</li></ul>|


## Workflow-Editor
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|||


## Old Portal
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
|![new-feature](/img/new_feature.jpg)|Added a **SWITCH TO NEW PORTAL** button to allow users to switch to the new portal|<ul><li>You can now simply click the button on the legacy portal to be redirected to the new portal and try out its features.</li></ul>|
|| |


