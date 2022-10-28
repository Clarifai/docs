---
description: Changelog for Clarifai Release 8.9
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -36
pagination_next: product-updates/changelog/release810
pagination_prev: product-updates/changelog/release88
---

# Release 8.9

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community  
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
|![new-feature](/img/new_feature.jpg)  | Created a tab that lists the concepts for each model|<ul><li>Alongside the *Overview* and *Versions* tabs, each model page now has a *Concepts* tab that lists the concepts it contains. The tab also allows you to search for concepts and sort them by ascending or descending order.</li></ul>|
|![improvement](/img/improvement.jpg)|Added ability to embed YouTube videos in model notes |<ul><li>You can now easily embed YouTube videos in your model notes. This allows you to include more instructional content on how to use your models.</li></ul>|
|![improvement](/img/improvement.jpg)|Added additional use cases for models|<ul><li>You can now select the use cases for the models you own from a wide variety of options.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where updating a password resulted in a user being logged out|<ul><li>Previously, if a user tried updating to a new password, and entered the wrong old password, they got logged out. There is now a descriptive error message stating that the old password does not match the one available in the records.</li></ul>|
|![bug](/img/bug.jpg)|Fixed a rare issue where a model failed to get enough training data|<ul><li>In rare cases, the system retrieved inputs with very few annotations, which resulted in a "Failed to get data" error—though the data associated with the concept selected had been labeled for classification operations and concepts had been added in the model details. </li></ul>|


## Portal-Screen
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
| ![improvement](/img/improvement.jpg)|Added ability to pin apps, models, and workflows|<ul><li>You can now pin the apps, models, and workflows you own. After clicking the pin icon within any of your listed apps, models, or workflows, the selected entity will rise to the top of the page, allowing you to access it easily.</li></ul>| 
|![bug](/img/bug.jpg)|Fixed an issue where the *Create Model* page kept showing *LOADING*|<ul><li>The *Create Model* page now works without any issues.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where a user could not create a new workflow|<ul><li>A user can now create a new workflow without experiencing errors.</li></ul>|
|![bug](/img/bug.jpg)|Aligned the carousel correctly on  the model viewer page|<ul><li>The carousel on the model viewer page is now aligned properly alongside the other buttons.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where a user lost all their already added inputs when the Inputs Loader encountered an error|<ul><li>Previously, when the Inputs Loader experienced a problem when uploading new inputs to an application, the user lost all the inputs they had already added. They could also be stuck on the Input Error screen, which made it impossible to carry out any other input management tasks.</li></ul>|
|![bug](/img/bug.jpg)|Fixed an issue where the Dataset-Viewer failed to report the correct number of annotations|<ul><li>The Dataset-Viewer now reports the correct number of annotations.</li></ul>|

## Old Portal
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|---------------------------------------------------|
|![bug](/img/bug.jpg)|Fixed an issue where [evaluating](https://docs.clarifai.com/portal-guide/evaluate/) a trained model's performance produced incorrect results|<ul><li>The metrics generated when evaluating a detection model's performance now work as desired.</li></ul>|
