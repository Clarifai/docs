---
description: Changelog for Clarifai Release 8.8
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -35
pagination_next: product-updates/changelog/release89
pagination_prev: product-updates/changelog/release87
---

# Release 8.8

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Community Model
|Status                                |Change                  |Details                    |
|--------------------------------------|------------------------|---------------------------|
| ![improvement](/img/improvement.jpg) |Improved the prediction output UI of visual segmentation models | <ul><li>Changed the default preview image samples for the [image-general-segmentation](https://clarifai.com/clarifai/main/models/image-general-segmentation) model and added model notes.</li><li>Improved the working of the [image-subject-segmentation](https://clarifai.com/clarifai/main/models/image-subject-segmentation) model.</li></ul> |
|![improvement](/img/improvement.jpg)|Hidden unselected tags in the model detail page|<ul><li>Disallowed tags that the model owner did not select to be displayed to all users. Previously, all tags were shown to all users, including the ones that the model owner did not select, which were not relevant to the particular model.</li><li>Added an edit button to allow model owners to select the tags they need. If the edit button is clicked, a checkbox list is displayed having all the tags; that is, the selected tags and the previously invisible unselected tags.</li></ul>|
|![new-feature](/img/new_feature.jpg)|Published the xlm-roberta-base-language-detection model |<ul><li>You can now use the published [xlm-roberta-base-language-detection](https://clarifai.com/erfan/text-classification/models/xlm-roberta-base-language-detection) model to detect the language of a text.</li></ul>|

## Portal-Screen
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|----------------------------------------------------|
| ![improvement](/img/improvement.jpg) |Added ability to create workflows with models from the different apps you own|<ul><li>You can now use your models from different apps to create workflows in the Portal. Previously, you had to make the models from your different apps public before stringing them together in a workflow.</li></ul> |
|![improvement](/img/improvement.jpg)|User disallowed from adding an untrained model version to a workflow graph|<ul><li>When selecting a version for a model, untrained versions now have distinct styling, which makes it clear that they cannot be selected.</li></ul>|
|![improvement](/img/improvement.jpg)|Improved the allowed file sizes for prediction inputs|<ul><li>You can now upload your own video inputs of up to 100MB while image, audio, and text inputs are limited to 20MB.</li></ul>|
|![improvement](/img/improvement.jpg)|Fixed the absence of video controls on video inputs|<ul><li>Video inputs now have various buttons that a user can interact with and control the video.</li></ul>|
|![bug](/img/bug.jpg)|Made it possible to use the text field to adjust a model’s Test_Split_Percent params correctly and set the value to a number|<ul><li>Using the slider to adjust the Test_Split_Percent, Train_Info params when editing a model correctly sets the value to a number. However, previously, typing the value of the Test_Split_Percent in the text field adjusted the corresponding value to a string containing a number. This resulted in failed requests.</li></ul>|
|![bug](/img/bug.jpg)|Fixed the invisibility of the “Edit Workflow” button after creating a workflow|<ul><li>Previously, it could take several seconds before the “Edit Workflow” button appeared after creating a workflow. Or, it could appear after refreshing the page.</li></ul> |
|![bug](/img/bug.jpg)|Fixed the disappearance of the “Edit Workflow” button when adding or removing examples|<ul><li>The “Edit Workflow” button no longer disappears when adding or removing examples.</li></ul>|
|![bug](/img/bug.jpg)|Fixed inability to edit the model ID on the “Edit Model Page” |<ul><li>You can now edit the model ID on the “Edit Model Page”. Previously, editing the model ID was only possible on the “Model Viewer Page”.</li></ul>|
|![bug](/img/bug.jpg)|Fixed sample prediction image not showing upon initially opening some models|<ul><li>The default sample images for some models (such as [logos-yolov5](https://clarifai.com/clarifai/main/models/logos-yolov5) and [ocr-scene-english-paddleocr](https://clarifai.com/clarifai/main/models/ocr-scene-english-paddleocr)) were not displayed initially when their model pages were opened—although thumbnails were highlighted and predictions appeared.</li></ul>|
|![bug](/img/bug.jpg)|Fixed issues with the update status button on the dataset viewer|<ul><li>The update status button on the dataset viewer now works as expected.</li></ul> |
|![bug](/img/bug.jpg)|Fixed crashing of prediction canvas when incorrect data is sent|<ul><li>Prediction canvas no longer crashes. Previously, canvas could go blank due to non-region items sent to it.</li></ul> |
|![bug](/img/bug.jpg)|Fixed possibility of a user creating datasets on another app without the required scopes|<ul><li>The “Create Dataset” button is now hidden  when a user misses the required “Datasets_Add” scope. This prevents a non-app owner from creating datasets in an app they do not have the necessary permissions.</li></ul> |
|![bug](/img/bug.jpg)|Fixed the malfunctioning reloading after searching by input ID|<ul><li>If you now reload a page after clicking on the search icon of an input to search by input ID, the page will reload as desired. Previously, after refreshing the page, the input ID was still in the URL, but it was not showing on the search results.</li></ul>|

## Platform-Object
|Status     |Change                                             |Details                                            |
|-----------|---------------------------------------------------|---------------------------------------------------|
|![improvement](/img/improvement.jpg)|Improved the MMSegmentation_SegFormer  pre-configured model template|<ul><li>Training two different models on the same dataset using the MMSegmentation_SegFormer now gives consistent results. Previously, if one of the models had a fewer number of concepts, it would not behave as expected.</li></ul>|
|![bug](/img/bug.jpg)|Fixed inability to patch non-trainable model|<ul><li>You can now patch a non-trainable model on the platform.</li></ul>|

