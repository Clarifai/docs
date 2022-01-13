---
description: Changelog for Clarifai Release 6.8
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -11
pagination_next: product-updates/changelog/release69
pagination_prev: product-updates/changelog/release67
---

# Release 6.8

## Changelog 6.8

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Labeler

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Use single LabelerToolbar for all labelers, make shared using Context |
| ![](/img/improvement.jpg) | Remove all computation from components, move to selectors for perf |
| ![](/img/bug.jpg) | Fixed carousel scroll behavior |
| ![](/img/bug.jpg) | Added button to add collaborator when adding reviewer |
| ![](/img/bug.jpg) | Post incorrect bounding box. Fixed |
| ![](/img/bug.jpg) | Refreshing in Labeler Crashes Portal. Fixed |
| ![](/img/new_feature.jpg) | Add Grid Review UI to Review Page |
| ![](/img/bug.jpg) | Panning while playing a video renders rects incorrectly. Fixed |
| ![](/img/bug.jpg) | Navigation from the task creation page if task creation fails. Fixed |
| ![](/img/improvement.jpg) | Konva: Image filters |
| ![](/img/improvement.jpg) | Konva: Drawing rects |
| ![](/img/improvement.jpg) | Konva: Drawing polygons |
| ![](/img/improvement.jpg) | Smaller shapes should supersede zIndex values if they are engulfed by larger ones |
| ![](/img/bug.jpg) | Region selectors inefficient and running on each call, bypassing reselect memoization. Fixed |
| ![](/img/bug.jpg) | v2 interpolation: app crash on reload. Fixed |
| ![](/img/bug.jpg) | CSS issue causing VideoControls to be inaccessible to mouse. Fixed |
| ![](/img/bug.jpg) | v2 video: no thumbails in carousel. Fixed |
| ![](/img/bug.jpg) | v2 keyboard hint showing weird characters. Fixed |
| ![](/img/bug.jpg) | Selected Shape becomes unselected on playing video \(make selection persist across track\). Fixed |
| ![](/img/bug.jpg) | Ron is unable to create a task with AI assist in prod. Fixed |
| ![](/img/bug.jpg) | Write and Preview Tab style. Fixed |
| ![](/img/bug.jpg) | Task create form shows name as "undefined undefined" when a user has not filled in profile details. Fixed |
| ![](/img/bug.jpg) | Input source that was selected should be shown when task selected. Fixed |
| ![](/img/bug.jpg) | Create order fails if I'm a clarifai user. Fixed |
| ![](/img/bug.jpg) | Layout in order admin form has some issues. Fixed |
| ![](/img/bug.jpg) | Multiple errors when creating bounding boxes. Fixed |
| ![](/img/bug.jpg) | Cannot see annotations from a collaborator in v2 linear review. Fixed |
| ![](/img/bug.jpg) | Keyboard shortcuts dont work in labeler v2. Fixed |
| ![](/img/bug.jpg) | When a worker opens labeler, display the instructions by default. Fixed |
| ![](/img/bug.jpg) | Non-clarifai users should have v2 only, clarifai accounts should have v2 by default with option to switch to v1. Fixed |
| ![](/img/bug.jpg) | Cursor should change to a crosshair when drawing a bounding box. Fixed |
| ![](/img/bug.jpg) | Cursor should change to an open hand when panning is selected and closed hand when grabbing/panning. Fixed |
| ![](/img/bug.jpg) | Reviewer cannot see annotations by collaborators. Fixed |
| ![](/img/bug.jpg) | If the reviewer is NOT the app owner, clicking review takes them to explorer. Fixed |
| ![](/img/bug.jpg) | Tooltip for labeler nav icon should be uppercase. Fixed |
| ![](/img/bug.jpg) | As a worker, if I return to Labeler, I should be able to continue from where I was previously. Fixed |
| ![](/img/bug.jpg) | LaaS orders can't assign inputs which block the workers. Fixed |
| ![](/img/bug.jpg) | Community users should have LaaS option grayed out with an explanation. Fixed |
| ![](/img/bug.jpg) | Make the "order admin view" text larger and prominent as a section header. Fixed |
| ![](/img/bug.jpg) | In labeler UI \(worker\), submit button should say "Submit Input for Review" to make it clear what the button does. Fixed |
| ![](/img/bug.jpg) | \[P3\] In all tasks view, only app owner should see edit/delete icons |
| ![](/img/bug.jpg) | Carousel blocks input visibility \(not just video controls\). Fixed |
| ![](/img/bug.jpg) | In labeler UI carousel, show a check for any input that was submitted, and gray it out slightly. Fixed |
| ![](/img/improvement.jpg) | Separate annotation sagas + standardise request batching code \(for v2 store\) |
| ![](/img/bug.jpg) | When creating a task in an app w/ no concepts, “Select all concepts” should not be checked by default. There are no concepts created yet. Fixed |
| ![](/img/new_feature.jpg) | Update task status on task list |
| ![](/img/bug.jpg) | Deleting an annotation in reviewer deletes all annotations. Fixed |
| ![](/img/bug.jpg) | Too many scrollbars in sidebar. Fixed |
| ![](/img/bug.jpg) | Partition worker strategy Error. Fixed |
| ![](/img/improvement.jpg) | Integrate feature gating with LaaS. |
| ![](/img/bug.jpg) | Panning state not in sync with drawing/moving. Fixed |
| ![](/img/bug.jpg) | Have to click the + button 2 times to make it work. Fixed |
| ![](/img/bug.jpg) | Dragging mouse outside of the canvas while drawing leaves the drawing in inconsistent state. Fixed |
| ![](/img/bug.jpg) | Delete icon on v2 sidebar deletes all annotations on the input. Fixed |
| ![](/img/bug.jpg) | Resizing shapes near the right edge of the frame causes weird resize behavior. Fixed |
| ![](/img/bug.jpg) | Entering date manually in Order control modal fixed |
| ![](/img/bug.jpg) | Carousel Thumbnail animation not working; images looking weird in aspect-ratio due to incorrect CSS |
| ![](/img/bug.jpg) | Task Form console errors. Fixed |
| ![](/img/bug.jpg) | Add video icon to carousel for video inputs. Fixed |
| ![](/img/bug.jpg) | When we use keyboard shortcuts to activate a concept for bounding boxes, show visual feedback |
| ![](/img/bug.jpg) | Cannot read property '0' of undefined. Fixed |
| ![](/img/bug.jpg) | Review tab shows new tasks that have no work ready to review. Fixed |
| ![](/img/bug.jpg) | Video Interpolation doesn't work. Fixed |
| ![](/img/bug.jpg) | Labeler UI sees last input even after submitting everything. Fixed |
| ![](/img/bug.jpg) | Box disappears for a second while drawing on video. Fixed |
| ![](/img/bug.jpg) | Disable worker input when editing a task. Fixed |
| ![](/img/bug.jpg) | Input data stops being fetched if labeler is exited once and revisited. Fixed |
| ![](/img/bug.jpg) | Make v2 annotations state flatter. Fixed |
| ![](/img/bug.jpg) | Darker colors poorly visible in sidebar region items. Fixed |
| ![](/img/bug.jpg) | Mysterious Phantom Boxes Appearing. Fixed |
| ![](/img/bug.jpg) | Video not loading. Fixed |
| ![](/img/bug.jpg) | Multiple boxes appearing. Fixed |
| ![](/img/bug.jpg) | Misaligned Boxes. Fixed |
| ![](/img/bug.jpg) | Bounding Boxes and Concepts inconsistent during video playback {Usability}. Fixed |
| ![](/img/bug.jpg) | Change Labeler to use getHostedAssetUrl. Fixed |
| ![](/img/bug.jpg) | Enable drawing even if annotations haven't loaded. Fixed |
| ![](/img/improvement.jpg) | Use new feature flags at frontend & Labeler for all |
| ![](/img/bug.jpg) | Can't add Iris workers to LaaS order. Fixed |
| ![](/img/bug.jpg) | Instructions shouldn't be false while editing. Fixed |
| ![](/img/bug.jpg) | Labelers/Reviewers should not see "--" when the task does not have AI Assist enabled. Fixed |
| ![](/img/improvement.jpg) | Carousel should show some visual feedback when an input has been rejected |
| ![](/img/bug.jpg) | Carousel flickers and re-renders images when submitting annotations. Fixed |
| ![](/img/improvement.jpg) | Add loading indicator to labeler view when fetching data |
| ![](/img/bug.jpg) | Moving a polygon to the edge of the input causes it to patch outside the allowed range. Fixed |
| ![](/img/bug.jpg) | Wrong worker\_per\_input field. Fixed |
| ![](/img/bug.jpg) | Hide other regions during interpolation. Fixed |
| ![](/img/bug.jpg) | Concepts Tasks: Cannot read property 'id' of undefined. Fixed |
| ![](/img/improvement.jpg) | Carousel should show some visual feedback when an input has been skipped |
| ![](/img/bug.jpg) | Polygon points are sometimes too small to click. fixed |
| ![](/img/bug.jpg) | Send embed model id for image annotations. Fixed |
| ![](/img/bug.jpg) | Skipping/Submitting annotations causes unnecessary rerenders of the entire carousel \(all thumbs\). Fixed |
| ![](/img/bug.jpg) | Get an error when submitting an input in a classification task. Fixed |
| ![](/img/improvement.jpg) | Improve concept creation process for new apps that you want to label |
| ![](/img/bug.jpg) | Labeler Reviewer No longer renders assets. Fixed |
| ![](/img/new_feature.jpg) | Add "Orders" section to task list admin view |
| ![](/img/new_feature.jpg) | Add checkbox to task creation for LaaS Orders |
| ![](/img/bug.jpg) | List name field instead of id fields in task lists. Fixed |
| ![](/img/improvement.jpg) | Set task error code and error description if task annotations pipeline fails |
| ![](/img/bug.jpg) | Label task submit error: Malformed or invalid request. Fixed |
| ![](/img/bug.jpg) | Label video - playback control issue fixed |
| ![](/img/improvement.jpg) | Hovering annotations in sidebar of Labeler, should highlight the region in the image. |
| ![](/img/bug.jpg) | Jumping Boxes during video interpolation. Fixed |
| ![](/img/improvement.jpg) | Polygon rendering in Labeler v2 |
| ![](/img/improvement.jpg) | Virtual scrolling input carousel |
| ![](/img/bug.jpg) | LabelOrders not fetched when refresh at /labeler page. Fixed |
| ![](/img/improvement.jpg) | Lock Edit feature for LaasOrders other than pending orders |
| ![](/img/improvement.jpg) | Account for system states \(inputId, taskID\) between heartbeats and account for them in canvas interaction manager |
| ![](/img/improvement.jpg) | Cleanup labelerv2 state on unmount |
| ![](/img/improvement.jpg) | V2 Rendering Video Regions |
| ![](/img/improvement.jpg) | V2 Video Interpolation |
| ![](/img/improvement.jpg) | Labeler saga to process all remaining actions on input change & before user exits |
| ![](/img/bug.jpg) | Sometimes, bounding box values on Transformer go in the negative, Fixed |
| ![](/img/bug.jpg) | Task Form: Convert fps -&gt; sample\_ms |
| ![](/img/improvement.jpg) | Let Clarifai user permissions for status & ETA change |
| ![](/img/improvement.jpg) | Implement clarifai user journey for LaaS |
| ![](/img/improvement.jpg) | Seperate LaaS order tasks from simple labeling tasks. |
| ![](/img/improvement.jpg) | Edit task functionality for clarifai user |
| ![](/img/improvement.jpg) | Include Order Task in "assigned to me" and "for review" |
| ![](/img/bug.jpg) | Regions disappeared in sidebar. Fixed |
| ![](/img/improvement.jpg) | Implement a way for Clarifai users to review Order tasks |
| ![](/img/improvement.jpg) | Video Rendering Sync with FPS |
| ![](/img/improvement.jpg) | Reconcile V1 and V2 video frame index |
| ![](/img/improvement.jpg) | Convert incorrectly created fps to sampleMs |
| ![](/img/improvement.jpg) | Better signposting of task instruction preview panel |
| ![](/img/bug.jpg) | Reset Button doesn't work. Fixed |
| ![](/img/bug.jpg) | Can't go back from Labeler UI. Fixed |
| ![](/img/bug.jpg) | Collaborators can not add collaborators. Fixed |
| ![](/img/improvement.jpg) | Labeler: Add both index and time to all video annotations |
| ![](/img/new_feature.jpg) | Implement polygon drawing |
| ![](/img/bug.jpg) | Toolbar Next & Previous button issue fixed |
| ![](/img/bug.jpg) | Worker filters don't work in review grid sidebar. Fixed |
| ![](/img/bug.jpg) | Fixed styling/layout of progress bar in the grid review page |
| ![](/img/improvement.jpg) | Add "select all" link next to each concept heading in the grid |
| ![](/img/new_feature.jpg) | Integrate order task with current implementation for reviewer and worker |
| ![](/img/bug.jpg) | Modify Labelerv2 sagas to be compatible with listening to polygon events |
| ![](/img/bug.jpg) | Instructions editor should not show toolbar toggle, when in preview mode. Fixed |
| ![](/img/bug.jpg) | Worker strategy should be included while adding workers. Fixed |
| ![](/img/bug.jpg) | Task creation form concept field should correctly handle paginated response. Fixed |
| ![](/img/bug.jpg) | Partition worker strategy should only be selectable if you have more than 1 worker. Fixed |
| ![](/img/new_feature.jpg) | Labeler v2 submit functionality |
| ![](/img/bug.jpg) | GridReview: app crash due to code for getting reviewer name. Fixed |

### API

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Patch annotation req failed. Fixed |
| ![](/img/new_feature.jpg) | Allow any type of task when the app default workflow is empty workflow |
| ![](/img/new_feature.jpg) | LaaS billing |
| ![](/img/bug.jpg) | Undo the delete of cvat persistent volumes |
| ![](/img/bug.jpg) | Copier failed in workflow prediction and causing 99009. Fixed |
| ![](/img/new_feature.jpg) | Make gRPC C\# client |
| ![](/img/new_feature.jpg) | Make gRPC PHP client |
| ![](/img/bug.jpg) | Feedback for malinformend CSV formats |
| ![](/img/improvement.jpg) | Make PostKeys and PatchKeys support apps-&gt;user\_id set to "me" |
| ![](/img/new_feature.jpg) | Add automated testing of documentation code examples |
| ![](/img/improvement.jpg) | change to getHostedAssetUrl to support returning both video thumbnails and video urls |
| ![](/img/improvement.jpg) | Prepare clients for the secure gRPC channel |
| ![](/img/improvement.jpg) | Update the gRPC copying code with C\#, PHP |
| ![](/img/improvement.jpg) | Use sendgrid template for email |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Add AWS Lambda to model mode |
| ![](/img/new_feature.jpg) | Add AWS Lambda model type to API |
| ![](/img/new_feature.jpg) | Put Fairface model in production |
| ![](/img/improvement.jpg) | Append landmark and pose annotations to Fairface dataset |
| ![](/img/bug.jpg) | Fix empty status response |
| ![](/img/bug.jpg) | Miscellaneous Fixes on Object Counter and KNN |
| ![](/img/improvement.jpg) | Allow empty statusCallbackURL and entityStatusCallbackURL |
| ![](/img/new_feature.jpg) | Smart Reply |
| ![](/img/new_feature.jpg) | Remove isInternalUser Selector from Text Features |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Editing the Empty workflow throws an error in portal. Fixed |
| ![](/img/improvement.jpg) | Add Filtering By Concepts for Text workflows |
| ![](/img/improvement.jpg) | Add supress\_output field option to each workflow node in create workflow view |
| ![](/img/improvement.jpg) | Add workflows tab to model gallery |
| ![](/img/bug.jpg) | Allow reindexing to different workflow without having a shared workflow node \(with the old one\) |
| ![](/img/bug.jpg) | No response when "Update workflow" button is pressed. Fixed |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Refactor Sidebar ✅/❌ functionality to sagas |
| ![](/img/improvement.jpg) | Combine Tool components |
| ![](/img/bug.jpg) | Cannot add card. Something went wrong. Fixed |
| ![](/img/bug.jpg) | DOMEX face app using face detect. Clicking on any image causes portal to crash. Fixed |
| ![](/img/bug.jpg) | App in staging, crashing when using pause/play with video. Fixed |
| ![](/img/improvement.jpg) | Improve algorithm for grouping annotations and predictions in explorer. |
| ![](/img/bug.jpg) | N "Predicted Bounding Boxes" toggle button only works after clicking twice |
| ![](/img/improvement.jpg) | Show track ID for videos in explorer |
| ![](/img/improvement.jpg) | Use ModelType to validate args and persist default values with model versions. |
| ![](/img/improvement.jpg) | Update create workflows page design |
| ![](/img/improvement.jpg) | Add sortable columns when in list view of model mode. Fixed |
| ![](/img/improvement.jpg) | Add pagination to the list of collaborations on app list page of Portal. |
| ![](/img/improvement.jpg) | Adopt same tabs everywhere in portal |
| ![](/img/improvement.jpg) | Display user\_id in user's profile page of portal. |
| ![](/img/improvement.jpg) | Use fully qualified urls throughout portal |
| ![](/img/improvement.jpg) | Expose the delete button in explorer single input view |
| ![](/img/bug.jpg) | Adding new concepts to classification apps disappear from Single Image View until refresh. Fixed |
| ![](/img/improvement.jpg) | Fix CSS styling of Text Assets for Single Image View |
| ![](/img/improvement.jpg) | Image terminology in eval page |
| ![](/img/bug.jpg) | Empty workflow breaks explorer workflow dropdown. Fixed |
| ![](/img/bug.jpg) | Fix create model range selector min/max values |
| ![](/img/bug.jpg) | Model gallery in model mode fails when you click on any concept model with a concept not found message. Fixed |
| ![](/img/bug.jpg) | Classification Prediction Scores still disappear for previously created apps. Fixed |
| ![](/img/bug.jpg) | Disable "Train" button on pre-trained models |
| ![](/img/bug.jpg) | Video times offset by 50ms |
| ![](/img/bug.jpg) | Detection Tab of Image Details Sidebar does not always display in Face apps.  Sometimes it shows classification equivalent. Fixed |
| ![](/img/bug.jpg) | Model details page crashes while displaying concepts. Fixed |
| ![](/img/bug.jpg) | Video thumbnails not displaying in search results. Fixed |
| ![](/img/bug.jpg) | Listing collaborators models in collector view doesn't work. Fixed |
| ![](/img/bug.jpg) | Fix API error while listing collaborators' models in collectors UI. Fixed |
| ![](/img/bug.jpg) | Remove unnecessary field from model details page. Fixed |
| ![](/img/bug.jpg) | Slider for Explorer prediction confidence doesn't apply to all the workflow nodes. Fixed |
| ![](/img/bug.jpg) | Sending embed\_model\_version\_id on all model types but that's not valid. Fixed |
| ![](/img/improvement.jpg) | Memoize sorted detection annotations and custom model predictions to prevent UI lag |
| ![](/img/improvement.jpg) | Modify the way users navigate to the model details page |
| ![](/img/improvement.jpg) | Fix collector mode to filter by user, then app, then models, then model versions. |
| ![](/img/bug.jpg) | Image carousel does not scroll to the currently selected text input being viewed |
