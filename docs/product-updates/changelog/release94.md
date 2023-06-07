---
description: Changelog for Clarifai Release 9.4
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -43
pagination_next: product-updates/changelog/release95
pagination_prev: product-updates/changelog/release93
---

# Release 9.4

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  

### Model-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![new-feature](/img/new_feature.jpg) | Added the **Use Workflow** feature in an app pop-up modal | <ul><li>You can now navigate to a workflow viewer page and click the **Use Workflow** button at the upper-right corner of the page. A small window will pop up that lets you use the workflow either in an app or use it programmatically via an API. It works just like the **Use Model** feature for models. </li></ul> |
| ![new-feature](/img/new_feature.jpg)| Added a model versions drop-down and **See versions table** button | <ul><li>Model version selection is now more prominent than the previous semi-hidden view in the predict pane.</li><li>If you now select a model version, and make predictions with it, the predict pane will render the predictions for the specific version.</li><li>If you click the **See versions table** button, a table that lists the different versions of your model will appear.</li></ul> |
| ![improvement](/img/improvement.jpg) | Added the possibility to view the concepts of public models without having to log in | <ul><li>You can now view a public model’s concepts without logging in.</li></ul> |
| ![improvement](/img/improvement.jpg) | Improved the **Call by API** feature in an app pop-up modal | When you want to get the code snippets for using a model programmatically, you click the **Use Model** button, and on the small window that pops up, select the **Call by API** option.<br /><br /><ul><li>Previously, if you used the **Create a new token** button to create a new PAT token with partial scopes, it could not show up. Creating a new PAT under the **Call by API** tab now works as expected.</li><li>We've also improved the styling for the placeholders in the code snippets.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that made it impossible to edit a model's visibility| <ul><li>You can now edit a model's visibility from private to public.</li></ul>|

### Model Evaluation

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Added a concept selector for handling a confusion matrix with a large concept list| <ul><li>Previously, confusion matrix items appeared clogged when evaluating models with many concepts in their datasets, which made it impossible for viewing and interpretation. The issue has been fixed.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed a "No Page Found" error when the evaluation button was clicked after a model was evaluated | <ul><li>You can now see the results after clicking the evaluation button. You won't encounter any errors.</li></ul> |

### Model Prediction

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue where the prediction sidebar showed an "oops ..." error for non-logged in users | <ul><li>For a non-logged in user, a "Log In To Predict" button now appears when they open a model or a workflow. After clicking the button, they get directed to a log in page.</li></ul>|
| ![bug](/img/bug.jpg) | Fixed an issue where the [image-general-segmentation](https://clarifai.com/clarifai/main/models/image-general-segmentation) model showed only masks without any predicted concepts | <ul><li>The model now outputs both masks and concepts.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue where incorrect tags showed for classifications in the [Demographics](https://clarifai.com/clarifai/main/workflows/Demographics) workflow  | <ul><li>The correct tags are now shown for canvas vs. prediction panel for the workflow.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue where the first prediction for text models did not render results | <ul><li>Text models are now working as expected.</li></ul> |

### Model-Editor

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue where it was not possible to edit a model's template name | <ul><li>You can now change the template while updating a model.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed some misaligned fields in the model version edit form versus the original model creation form | <ul><li>The text fields are now properly aligned in the model version edit form as in the original model creation form.</li></ul> |

### Organization Settings and Management

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Improved the listing of the organization settings items on the navigation bar | If you click your user profile icon at the upper-right section of the navigation bar, and switch to an organization, you'll notice that we've made the following improvements to the drop-down list that follows:<br /><br /><ul><li>"Personal Settings" has been replaced by "Organization Settings."</li><li>The "Billing" item has been removed.</li><li>"My Apps" has been replaced by "Org Apps."</li><li>"Usage" link has been added.</li><li>"Members" and "Teams" have been added for admin users.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue where team contributors could not see the models and workflows of apps that they have access to. | <ul><li>Previously, a team contributor could not access models and workflows in the "Org Apps" listing, even if some apps were assigned to their team.</li><li>Team contributors now have sufficient scopes to see the models and workflows of apps that they have access to.</li></ul> |

### Resources Listing Views

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue that prevented the **My Apps** page from showing a newly created app | <ul><li>Previously, if you created a new app, the **My Apps** page did not show it until you refreshed the page.</li><li>You can now create a new app, and it will be automatically listed on the **My Apps** page without the need to refresh the page first.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue where it was not possible to copy the ID of an app on the Overview page | If you want to copy the ID of an app, you go to the App Overview page, and click the three little dots at the upper-right corner of the page. Then, click the **Copy ID** option on the list that drops down.<br /><br /><ul><li>You can now copy the ID of an app on the Overview page without any issues.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue where the workflow page did not load all workflows | <ul><li>The workflow page now loads all workflows.</li></ul> |

### App Overview Page

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Added the possibility of a collaborator to update or upload an app image   | <ul><li>Previously, only the owner could upload or update an app image. Instead of limiting the privilege to the app owner only, we've made it possible for collaborators to make the change. It now depends on the user’s scope. </li></ul> |
| ![bug](/img/bug.jpg)  | Fixed an issue where a black background persisted when adding an app's notes | <ul><li>Previously, if you enabled the dark theme on some systems, such as on macOS, the form on the app overview page persistently had a black background—both when editing notes and after publishing notes. </li></ul> |

### Sidebar Revamp

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) | Renamed some elements on the collapsible left sidebar | <ul><li>"App Resources" has been renamed to "AI Lake."</li><li>"Scribe" has been renamed to "Tasks."</li></ul> |


### Input-Manager

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue that caused the concept drop-down to appear behind the **Label as...** modal | The **Label as…** button appears at the bottom of the page when a user selects an input. And if a user clicks the button, the label modal appears. <br /><br /> <ul><li>Previously, if you typed a concept in the **Concepts** field within the label modal, the concept results search or add new concept drop-down did not appear. It now works as expected.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed some issues that prevented using the **X** icon to clear the Smart Search bar  | Previously, the **X** icon sometimes failed to appear when a user selected one or more smart concepts.<br /> <br /><ul><li>The **X** icon now appears when a user selects more than one concept.</li><li>The **X** icon also appears when a user writes an incomplete tag or concept.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that prevented searching by clicking a concept in the auto-complete list | Previously, if you used the Smart Search bar, clicking a concept in the auto-complete list could not trigger an automatic search. <br /><br /><ul><li>You can now click a suggestion from the list of the auto-completed concepts, and it will fill in the concept name and trigger a search automatically. </li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that caused confusing auto-complete concept suggestions | <ul><li>The Smart Search functionality now works correctly when special characters are used in the search query.</li><li>The Smart Search functionality now works correctly when searching for a term with uppercase or lowercase letters.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that prevented scrolling through the auto-completed list of concepts | <ul><li>When performing a Smart Search, only five results now show in the suggestion list, while the other suggestions are scrollable.</li></ul> |

### Task-Labeler

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg)| Fixed an issue that prevented applying AI Assist suggestions within a labeling task | <ul><li>The AI Assist tool now works as expected in giving concept suggestions, which a user can apply when labeling inputs.</li></ul> |

### Task-Manager and Task-Editor

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue that caused incorrect results in the concept list on the Task-Editor |If you want to edit a task, and you click on the **Concepts** field, a drop-down list of the created concepts appears.<br /> <br /> <ul><li>The correct results are now showing in the concepts list on the Task-Editor page.</li></ul>|
| ![bug](/img/bug.jpg) | Fixed an issue that caused the label and review buttons to change state incorrectly on the Task-Manager | <ul><li> The enable and disable behavior of the review and label buttons now work as expected.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that prevented displaying some error texts explaining why the **Submit** button was disabled on the Task-Editor | <ul><li>If you try to create a task, it now shows some error texts regarding the fields required to be filed before the **Submit** button is enabled.</li></ul> |

### Input-Uploader

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue that caused input import jobs containing large images to fail | <ul><li>Uploading large images now works without issues.</li></ul>|
| ![bug](/img/bug.jpg) | Fixed an issue that caused the import job "Uploading..." status to appear to stop at 50% | <ul><li>Input uploading status now goes to 100%</li><li>During uploading, input processing now shows the progress in %.</li></ul> |
|![bug](/img/bug.jpg)  | Fixed an issue that caused the import monitor to suddenly disappear after all jobs became inactive | <ul><li>After jobs are finished, the window is now kept open so that you can see that the import has been successful.</li></ul>|

### Input-Viewer

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![bug](/img/bug.jpg) | Fixed an issue that caused failed predictions on the Input-Viewer | <ul><li>Previously, some public models were broken because of incorrectly sending `concepts` and `metadata` data alongside the image. The issue has been fixed.</li></ul> | 
| ![bug](/img/bug.jpg) | Fixed an issue that prevented viewing videos in full-screen on the Input-Viewer | <ul><li>You can now upload a video and view it in full-screen on the Input-Viewer.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that caused the dragging of the entire canvas while editing polygons on the Input-Viewer| <ul><li>Dragging action is now disabled when editing polygons in cursor mode.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that caused video inputs to appear as images on the Input-Viewer | <ul><li>Video inputs are now processed and handled as expected.</li></ul> |
| ![bug](/img/bug.jpg) | Fixed an issue that prevented viewing inputs when secure data hosting was enabled | <ul><li>Images are now loading properly on the Input-Viewer when secure data hosting is enabled in an account.</li></ul> |

### Usage Dashboard

|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![improvement](/img/improvement.jpg) | Updated the start date for the 6-month billing cycle | You can find the date range selection at the top-right corner of the Usage Dashboard page. You can define the output of the billing cycle by selecting your preferred date range.<br /> <br /> <ul><li>We've updated the start date for the **Last 6 months** selection for better accuracy.</li></ul> |

