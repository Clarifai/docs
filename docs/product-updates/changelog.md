# Changelog

## Changelog 6.8

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |


### Labeler
|Status     |Details                                                                                                                                        |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| ![](/img/improvement.jpg)|Use single LabelerToolbar for all labelers, make shared using Context                                                                          |
| ![](/img/improvement.jpg)|Remove all computation from components, move to selectors for perf                                                                             |
| ![](/img/bug.jpg)       |Fixed carousel scroll behavior                                                                                                                 |
| ![](/img/bug.jpg)       |Added button to add collaborator when adding reviewer                                                                                          |
| ![](/img/bug.jpg)       |Post incorrect bounding box. Fixed                                                                                                             |
| ![](/img/bug.jpg)       |Refreshing in Labeler Crashes Portal. Fixed                                                                                                    |
| ![](/img/new_feature.jpg)|Add Grid Review UI to Review Page                                                                                                              |
| ![](/img/bug.jpg)       |Panning while playing a video renders rects incorrectly. Fixed                                                                                 |
| ![](/img/bug.jpg)       |Navigation from the task creation page if task creation fails. Fixed                                                                           |
| ![](/img/improvement.jpg)|Konva: Image filters                                                                                                                           |
| ![](/img/improvement.jpg)|Konva: Drawing rects                                                                                                                           |
| ![](/img/improvement.jpg)|Konva: Drawing polygons                                                                                                                        |
| ![](/img/improvement.jpg)|Smaller shapes should supersede zIndex values if they are engulfed by larger ones                                                              |
| ![](/img/bug.jpg)       |Region selectors inefficient and running on each call, bypassing reselect memoization. Fixed                                                   |
| ![](/img/bug.jpg)       |v2 interpolation: app crash on reload. Fixed                                                                                                   |
| ![](/img/bug.jpg)       |CSS issue causing VideoControls to be inaccessible to mouse. Fixed                                                                             |
| ![](/img/bug.jpg)       |v2 video: no thumbails in carousel. Fixed                                                                                                      |
| ![](/img/bug.jpg)       |v2 keyboard hint showing weird characters. Fixed                                                                                               |
| ![](/img/bug.jpg)       |Selected Shape becomes unselected on playing video (make selection persist across track). Fixed                                                |
| ![](/img/bug.jpg)       |Ron is unable to create a task with AI assist in prod. Fixed                                                                                   |
| ![](/img/bug.jpg)       |Write and Preview Tab style. Fixed                                                                                                             |
| ![](/img/bug.jpg)       |Task create form shows name as "undefined undefined" when a user has not filled in profile details. Fixed                                      |
| ![](/img/bug.jpg)       |Input source that was selected should be shown when task selected. Fixed                                                                       |
| ![](/img/bug.jpg)       |Create order fails if I'm a clarifai user. Fixed                                                                                               |
| ![](/img/bug.jpg)       |Layout in order admin form has some issues. Fixed                                                                                              |
| ![](/img/bug.jpg)       |Multiple errors when creating bounding boxes. Fixed                                                                                            |
| ![](/img/bug.jpg)       |Cannot see annotations from a collaborator in v2 linear review. Fixed                                                                          |
| ![](/img/bug.jpg)       |Keyboard shortcuts dont work in labeler v2. Fixed                                                                                              |
| ![](/img/bug.jpg)       |When a worker opens labeler, display the instructions by default. Fixed                                                                        |
| ![](/img/bug.jpg)       |Non-clarifai users should have v2 only, clarifai accounts should have v2 by default with option to switch to v1. Fixed                         |
| ![](/img/bug.jpg)       |Cursor should change to a crosshair when drawing a bounding box. Fixed                                                                         |
| ![](/img/bug.jpg)       |Cursor should change to an open hand when panning is selected and closed hand when grabbing/panning. Fixed                                     |
| ![](/img/bug.jpg)       |Reviewer cannot see annotations by collaborators. Fixed                                                                                        |
| ![](/img/bug.jpg)       |If the reviewer is NOT the app owner, clicking review takes them to explorer. Fixed                                                            |
| ![](/img/bug.jpg)       |Tooltip for labeler nav icon should be uppercase. Fixed                                                                                        |
| ![](/img/bug.jpg)       |As a worker, if I return to Labeler, I should be able to continue from where I was previously. Fixed                                           |
| ![](/img/bug.jpg)       |LaaS orders can't assign inputs which block the workers. Fixed                                                                                 |
| ![](/img/bug.jpg)       |Community users should have LaaS option grayed out with an explanation. Fixed                                                                  |
| ![](/img/bug.jpg)       |Make the "order admin view" text larger and prominent as a section header. Fixed                                                               |
| ![](/img/bug.jpg)       |In labeler UI (worker), submit button should say "Submit Input for Review" to make it clear what the button does. Fixed                        |
| ![](/img/bug.jpg)       |[P3] In all tasks view, only app owner should see edit/delete icons                                                                            |
| ![](/img/bug.jpg)       |Carousel blocks input visibility (not just video controls). Fixed                                                                              |
| ![](/img/bug.jpg)       |In labeler UI carousel, show a check for any input that was submitted, and gray it out slightly. Fixed                                         |
| ![](/img/improvement.jpg)|Separate annotation sagas + standardise request batching code (for v2 store)                                                                   |
| ![](/img/bug.jpg)       |When creating a task in an app w/ no concepts, “Select all concepts” should not be checked by default. There are no concepts created yet. Fixed|
| ![](/img/new_feature.jpg)|Update task status on task list                                                                                                                |
| ![](/img/bug.jpg)       |Deleting an annotation in reviewer deletes all annotations. Fixed                                                                              |
| ![](/img/bug.jpg)       |Too many scrollbars in sidebar. Fixed                                                                                                          |
| ![](/img/bug.jpg)       |Partition worker strategy Error. Fixed                                                                                                         |
| ![](/img/improvement.jpg)|Integrate feature gating with LaaS.                                                                                                            |
| ![](/img/bug.jpg)       |Panning state not in sync with drawing/moving. Fixed                                                                                           |
| ![](/img/bug.jpg)       |Have to click the + button 2 times to make it work. Fixed                                                                                      |
| ![](/img/bug.jpg)       |Dragging mouse outside of the canvas while drawing leaves the drawing in inconsistent state. Fixed                                             |
| ![](/img/bug.jpg)       |Delete icon on v2 sidebar deletes all annotations on the input. Fixed                                                                          |
| ![](/img/bug.jpg)       |Resizing shapes near the right edge of the frame causes weird resize behavior. Fixed                                                           |
| ![](/img/bug.jpg)       |Entering date manually in Order control modal fixed                                                                                            |
| ![](/img/bug.jpg)       |Carousel Thumbnail animation not working; images looking weird in aspect-ratio due to incorrect CSS                                            |
| ![](/img/bug.jpg)       |Task Form console errors. Fixed                                                                                                                |
| ![](/img/bug.jpg)       |Add video icon to carousel for video inputs. Fixed                                                                                             |
| ![](/img/bug.jpg)       |When we use keyboard shortcuts to activate a concept for bounding boxes, show visual feedback                                                  |
| ![](/img/bug.jpg)       |Cannot read property '0' of undefined. Fixed                                                                                                   |
| ![](/img/bug.jpg)       |Review tab shows new tasks that have no work ready to review. Fixed                                                                            |
| ![](/img/bug.jpg)       |Video Interpolation doesn't work. Fixed                                                                                                        |
| ![](/img/bug.jpg)       |Labeler UI sees last input even after submitting everything. Fixed                                                                             |
| ![](/img/bug.jpg)       |Box disappears for a second while drawing on video. Fixed                                                                                      |
| ![](/img/bug.jpg)       |Disable worker input when editing a task. Fixed                                                                                                |
| ![](/img/bug.jpg)       |Input data stops being fetched if labeler is exited once and revisited. Fixed                                                                  |
| ![](/img/bug.jpg)       |Make v2 annotations state flatter. Fixed                                                                                                       |
| ![](/img/bug.jpg)       |Darker colors poorly visible in sidebar region items. Fixed                                                                                    |
| ![](/img/bug.jpg)       |Mysterious Phantom Boxes Appearing. Fixed                                                                                                      |
| ![](/img/bug.jpg)       |Video not loading. Fixed                                                                                                                       |
| ![](/img/bug.jpg)       |Multiple boxes appearing. Fixed                                                                                                                |
| ![](/img/bug.jpg)       |Misaligned Boxes. Fixed                                                                                                                        |
| ![](/img/bug.jpg)       |Bounding Boxes and Concepts inconsistent during video playback {Usability}. Fixed                                                              |
| ![](/img/bug.jpg)       |Change Labeler to use getHostedAssetUrl. Fixed                                                                                                 |
| ![](/img/bug.jpg)       |Enable drawing even if annotations haven't loaded. Fixed                                                                                       |
| ![](/img/improvement.jpg)|Use new feature flags at frontend & Labeler for all                                                                                            |
| ![](/img/bug.jpg)       |Can't add Iris workers to LaaS order. Fixed                                                                                                    |
| ![](/img/bug.jpg)       |Instructions shouldn't be false while editing. Fixed                                                                                           |
| ![](/img/bug.jpg)       |Labelers/Reviewers should not see "--" when the task does not have AI Assist enabled. Fixed                                                    |
| ![](/img/improvement.jpg)|Carousel should show some visual feedback when an input has been rejected                                                                      |
| ![](/img/bug.jpg)       |Carousel flickers and re-renders images when submitting annotations. Fixed                                                                     |
| ![](/img/improvement.jpg)|Add loading indicator to labeler view when fetching data                                                                                       |
| ![](/img/bug.jpg)       |Moving a polygon to the edge of the input causes it to patch outside the allowed range. Fixed                                                  |
| ![](/img/bug.jpg)       |Wrong worker_per_input field. Fixed                                                                                                            |
| ![](/img/bug.jpg)       |Hide other regions during interpolation. Fixed                                                                                                 |
| ![](/img/bug.jpg)       |Concepts Tasks: Cannot read property 'id' of undefined. Fixed                                                                                  |
| ![](/img/improvement.jpg)|Carousel should show some visual feedback when an input has been skipped                                                                       |
| ![](/img/bug.jpg)       |Polygon points are sometimes too small to click. fixed                                                                                         |
| ![](/img/bug.jpg)       |Send embed model id for image annotations. Fixed                                                                                               |
| ![](/img/bug.jpg)       |Skipping/Submitting annotations causes unnecessary rerenders of the entire carousel (all thumbs). Fixed                                        |
| ![](/img/bug.jpg)       |Get an error when submitting an input in a classification task. Fixed                                                                          |
| ![](/img/improvement.jpg)|Improve concept creation process for new apps that you want to label                                                                           |
| ![](/img/bug.jpg)       |Labeler Reviewer No longer renders assets. Fixed                                                                                               |
| ![](/img/new_feature.jpg)|Add "Orders" section to task list admin view                                                                                                   |
| ![](/img/new_feature.jpg)|Add checkbox to task creation for LaaS Orders                                                                                                  |
| ![](/img/bug.jpg)       |List name field instead of id fields in task lists. Fixed                                                                                      |
| ![](/img/improvement.jpg)|Set task error code and error description if task annotations pipeline fails                                                                   |
| ![](/img/bug.jpg)       |Label task submit error: Malformed or invalid request. Fixed                                                                                   |
| ![](/img/bug.jpg)       |Label video - playback control issue fixed                                                                                                     |
| ![](/img/improvement.jpg)|Hovering annotations in sidebar of Labeler, should highlight the region in the image.                                                          |
| ![](/img/bug.jpg)       |Jumping Boxes during video interpolation. Fixed                                                                                                |
| ![](/img/improvement.jpg)|Polygon rendering in Labeler v2                                                                                                                |
| ![](/img/improvement.jpg)|Virtual scrolling input carousel                                                                                                               |
| ![](/img/bug.jpg)       |LabelOrders not fetched when refresh at /labeler page. Fixed                                                                                   |
| ![](/img/improvement.jpg)|Lock Edit feature for LaasOrders other than pending orders                                                                                     |
| ![](/img/improvement.jpg)|Account for system states (inputId, taskID) between heartbeats and account for them in canvas interaction manager                              |
| ![](/img/improvement.jpg)|Cleanup labelerv2 state on unmount                                                                                                             |
| ![](/img/improvement.jpg)|V2 Rendering Video Regions                                                                                                                     |
| ![](/img/improvement.jpg)|V2 Video Interpolation                                                                                                                         |
| ![](/img/improvement.jpg)|Labeler saga to process all remaining actions on input change & before user exits                                                              |
| ![](/img/bug.jpg)       |Sometimes, bounding box values on Transformer go in the negative, Fixed                                                                        |
| ![](/img/bug.jpg)       |Task Form: Convert fps -> sample_ms                                                                                                            |
| ![](/img/improvement.jpg)|Let Clarifai user permissions for status & ETA change                                                                                          |
| ![](/img/improvement.jpg)|Implement clarifai user journey for LaaS                                                                                                       |
| ![](/img/improvement.jpg)|Seperate LaaS order tasks from simple labeling tasks.                                                                                          |
| ![](/img/improvement.jpg)|Edit task functionality for clarifai user                                                                                                      |
| ![](/img/improvement.jpg)|Include Order Task in "assigned to me" and "for review"                                                                                        |
| ![](/img/bug.jpg)       |Regions disappeared in sidebar. Fixed                                                                                                          |
| ![](/img/improvement.jpg)|Implement a way for Clarifai users to review Order tasks                                                                                       |
| ![](/img/improvement.jpg)|Video Rendering Sync with FPS                                                                                                                  |
| ![](/img/improvement.jpg)|Reconcile V1 and V2 video frame index                                                                                                          |
| ![](/img/improvement.jpg)|Convert incorrectly created fps to sampleMs                                                                                                    |
| ![](/img/improvement.jpg)|Better signposting of task instruction preview panel                                                                                           |
| ![](/img/bug.jpg)       |Reset Button doesn't work. Fixed                                                                                                               |
| ![](/img/bug.jpg)       |Can't go back from Labeler UI. Fixed                                                                                                           |
| ![](/img/bug.jpg)       |Collaborators can not add collaborators. Fixed                                                                                                 |
| ![](/img/improvement.jpg)|Labeler: Add both index and time to all video annotations                                                                                      |
| ![](/img/new_feature.jpg)|Implement polygon drawing                                                                                                                      |
| ![](/img/bug.jpg)       |Toolbar Next & Previous button issue fixed                                                                                                     |
| ![](/img/bug.jpg)       |Worker filters don't work in review grid sidebar. Fixed                                                                                        |
| ![](/img/bug.jpg)       |Fixed styling/layout of progress bar in the grid review page                                                                                   |
| ![](/img/improvement.jpg)|Add "select all" link next to each concept heading in the grid                                                                                 |
| ![](/img/new_feature.jpg)|Integrate order task with current implementation for reviewer and worker                                                                       |
| ![](/img/bug.jpg)       |Modify Labelerv2 sagas to be compatible with listening to polygon events                                                                       |
| ![](/img/bug.jpg)       |Instructions editor should not show toolbar toggle, when in preview mode. Fixed                                                                |
| ![](/img/bug.jpg)       |Worker strategy should be included while adding workers. Fixed                                                                                 |
| ![](/img/bug.jpg)       |Task creation form concept field should correctly handle paginated response. Fixed                                                             |
| ![](/img/bug.jpg)       |Partition worker strategy should only be selectable if you have more than 1 worker. Fixed                                                      |
| ![](/img/new_feature.jpg)|Labeler v2 submit functionality                                                                                                                |
| ![](/img/bug.jpg)       |GridReview: app crash due to code for getting reviewer name. Fixed                                                                             |



### API
|Status     |Details                                                                              |
|-----------|-------------------------------------------------------------------------------------|
| ![](/img/bug.jpg)       |Patch annotation req failed. Fixed                                                   |
| ![](/img/new_feature.jpg)|Allow any type of task when the app default workflow is empty workflow               |
| ![](/img/new_feature.jpg)|LaaS billing                                                                         |
| ![](/img/bug.jpg)       |Undo the delete of cvat persistent volumes                                           |
| ![](/img/bug.jpg)       |Copier failed in workflow prediction and causing 99009. Fixed                        |
| ![](/img/new_feature.jpg)|Make gRPC C# client                                                                  |
| ![](/img/new_feature.jpg)|Make gRPC PHP client                                                                 |
| ![](/img/bug.jpg)       |Feedback for malinformend CSV formats                                                |
| ![](/img/improvement.jpg)|Make PostKeys and PatchKeys support apps->user_id set to "me"                        |
| ![](/img/new_feature.jpg)|Add automated testing of documentation code examples                                 |
| ![](/img/improvement.jpg)|change to getHostedAssetUrl to support returning both video thumbnails and video urls|
| ![](/img/improvement.jpg)|Prepare clients for the secure gRPC channel                                          |
| ![](/img/improvement.jpg)|Update the gRPC copying code with C#, PHP                                            |
| ![](/img/improvement.jpg)|Use sendgrid template for email                                                      |


### Model
|Status     |Details                                                                              |
|-----------|-------------------------------------------------------------------------------------|
| ![](/img/new_feature.jpg)|Add AWS Lambda to model mode                                                         |
| ![](/img/new_feature.jpg)|Add AWS Lambda model type to API                                                     |
| ![](/img/new_feature.jpg)|Put Fairface model in production                                                     |
| ![](/img/improvement.jpg)|Append landmark and pose annotations to Fairface dataset                             |
| ![](/img/bug.jpg)       |Fix empty status response                                                            |
| ![](/img/bug.jpg)       |Miscellaneous Fixes on Object Counter and KNN                                        |
| ![](/img/improvement.jpg)|Allow empty statusCallbackURL and entityStatusCallbackURL                            |
| ![](/img/new_feature.jpg)|Smart Reply                                                                          |
| ![](/img/new_feature.jpg)|Remove isInternalUser Selector from Text Features                                    |


### Workflow
|Status     |Details                                                                              |
|-----------|-------------------------------------------------------------------------------------|
| ![](/img/bug.jpg)       |Editing the Empty workflow throws an error in portal. Fixed                          |
| ![](/img/improvement.jpg)|Add Filtering By Concepts for Text workflows                                         |
| ![](/img/improvement.jpg)|Add supress_output field option to each workflow node in create workflow view        |
| ![](/img/improvement.jpg)|Add workflows tab to model gallery                                                   |
| ![](/img/bug.jpg)       |Allow reindexing to different workflow without having a shared workflow node (with the old one)|
| ![](/img/bug.jpg)       |No response when "Update workflow" button is pressed. Fixed                          |


### Portal
|Status     |Details                                                                              |
|-----------|-------------------------------------------------------------------------------------|
| ![](/img/improvement.jpg)|Refactor Sidebar ✅/❌ functionality to sagas                                          |
| ![](/img/improvement.jpg)|Combine Tool components                                                              |
| ![](/img/bug.jpg)       |Cannot add card. Something went wrong. Fixed                                         |
| ![](/img/bug.jpg)       |DOMEX face app using face detect. Clicking on any image causes portal to crash. Fixed|
| ![](/img/bug.jpg)       |App in staging, crashing when using pause/play with video. Fixed                     |
| ![](/img/improvement.jpg)|Improve algorithm for grouping annotations and predictions in explorer.              |
| ![](/img/bug.jpg)       |N "Predicted Bounding Boxes" toggle button only works after clicking twice           |
| ![](/img/improvement.jpg)|Show track ID for videos in explorer                                                 |
| ![](/img/improvement.jpg)|Use ModelType to validate args and persist default values with model versions.       |
| ![](/img/improvement.jpg)|Update create workflows page design                                                  |
| ![](/img/improvement.jpg)|Add sortable columns when in list view of model mode. Fixed                          |
| ![](/img/improvement.jpg)|Add pagination to the list of collaborations on app list page of Portal.             |
| ![](/img/improvement.jpg)|Adopt same tabs everywhere in portal                                                 |
| ![](/img/improvement.jpg)|Display user_id in user's profile page of portal.                                    |
| ![](/img/improvement.jpg)|Use fully qualified urls throughout portal                                           |
| ![](/img/improvement.jpg)|Expose the delete button in explorer single input view                               |
| ![](/img/bug.jpg)       |Adding new concepts to classification apps disappear from Single Image View until refresh. Fixed|
| ![](/img/improvement.jpg)|Fix CSS styling of Text Assets for Single Image View                                 |
| ![](/img/improvement.jpg)|Image terminology in eval page                                                       |
| ![](/img/bug.jpg)       |Empty workflow breaks explorer workflow dropdown. Fixed                              |
| ![](/img/bug.jpg)       |Fix create model range selector min/max values                                       |
| ![](/img/bug.jpg)       |Model gallery in model mode fails when you click on any concept model with a concept not found message. Fixed|
| ![](/img/bug.jpg)       |Classification Prediction Scores still disappear for previously created apps. Fixed  |
| ![](/img/bug.jpg)       |Disable "Train" button on pre-trained models                                         |
| ![](/img/bug.jpg)       |Video times offset by 50ms                                                           |
| ![](/img/bug.jpg)       |Detection Tab of Image Details Sidebar does not always display in Face apps.  Sometimes it shows classification equivalent. Fixed|
| ![](/img/bug.jpg)       |Model details page crashes while displaying concepts. Fixed                          |
| ![](/img/bug.jpg)       |Video thumbnails not displaying in search results. Fixed                             |
| ![](/img/bug.jpg)       |Listing collaborators models in collector view doesn't work. Fixed                   |
| ![](/img/bug.jpg)       |Fix API error while listing collaborators' models in collectors UI. Fixed            |
| ![](/img/bug.jpg)       |Remove unnecessary field from model details page. Fixed                              |
| ![](/img/bug.jpg)       |Slider for Explorer prediction confidence doesn't apply to all the workflow nodes. Fixed|
| ![](/img/bug.jpg)       |Sending embed_model_version_id on all model types but that's not valid. Fixed        |
| ![](/img/improvement.jpg)|Memoize sorted detection annotations and custom model predictions to prevent UI lag  |
| ![](/img/improvement.jpg)|Modify the way users navigate to the model details page                              |
| ![](/img/improvement.jpg)|Fix collector mode to filter by user, then app, then models, then model versions.    |
| ![](/img/bug.jpg)       |Image carousel does not scroll to the currently selected text input being viewed     |




## Changelog 6.7

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### API
|Status     |Details                                                                                                                                                       |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](/img/improvement.jpg) |Don't allow updating task workers                                                                                                                             |
| ![](/img/improvement.jpg) |Don't create duplicated task annotations                                                                                                                      |
| ![](/img/improvement.jpg) |Fix detection evals showing and too many metrics calls                                                                                                        |
| ![](/img/improvement.jpg) |Fix pillow installs for webp                                                                                                                                  |
| ![](/img/improvement.jpg) |Add enum for embed model version id field type.                                                                                                               |
| ![](/img/improvement.jpg) |Don't show model types for backends that aren't responding.                                                                                                   |
| ![](/img/improvement.jpg) |Clean up output_info.data path                                                                                                                                |
| ![](/img/improvement.jpg) |Add model_type_id to Model protos.                                                                                                                            |
| ![](/img/improvement.jpg) |Add /models/types/{model_type_id} endpoint                                                                                                                    |
| ![](/img/improvement.jpg) |Prevent models_versions.is_public from every being null.                                                                                                      |
| ![](/img/bug.jpg) |model mode types that are internal only are being returned.                                                                                                   |
| ![](/img/improvement.jpg) |Create Labeling Order Object and send email to datalabeling@clarifai.com each time backend receives an Labeling Order Object & makes datalabeling a super user|
| ![](/img/improvement.jpg) |App reindex                                                                                                                                                   |
| ![](/img/improvement.jpg) |Patchable multi-embed workflows with re-index                                                                                                                 |

### Model

|Status     |Details                                                                                                                                                       |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](/img/bug.jpg) |Demographics model is now broken in model gallery.                                                                                                            |
| ![](/img/improvement.jpg) |Deprecate model.type from model mode                                                                                                                          |
| ![](/img/improvement.jpg) |Update model gallery design                                                                                                                                   |
| ![](/img/improvement.jpg) |embed_model_version_id should be a dropdown                                                                                                                   |


### Portal

|Status     |Details                                                                                                                                                       |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](/img/improvement.jpg) |Add versioning to repo, redux, on screen                                                                                                                      |
| ![](/img/improvement.jpg) |Allow reviewer to modify annotations during review process.                                                                                                   |
| ![](/img/new_feature.jpg) |Store entire canvas state in redux/context, and drive canvas updates by central store                                                                         |
| ![](/img/improvement.jpg) |batch v2 shape events by only 1 PATCH/DELETE request                                                                                                          |
| ![](/img/improvement.jpg) |Delete functionality v2                                                                                                                                       |
| ![](/img/improvement.jpg) |Completely detach labeler rendering from server syncing process to enable background syncing                                                                  |
| ![](/img/improvement.jpg) |Input navigating functionality in v2                                                                                                                          |
| ![](/img/improvement.jpg) |Set new regionId as "selected" shape if user has selected a transient shape during async updates                                                              |
| ![](/img/improvement.jpg) |Region edit + delete API sync                                                                                                                                 |
| ![](/img/improvement.jpg) |Fix annotation denormalizer to rehydrate actual concept value                                                                                                 |
| ![](/img/improvement.jpg) |Create new region in labeler v2                                                                                                                               |
| ![](/img/improvement.jpg) |Logic to reduce batched drawing events to least number of API operations                                                                                      |
| ![](/img/improvement.jpg) |Implement new selectors for regions in v2                                                                                                                     |
| ![](/img/improvement.jpg) |Normalize Annotations & Regions data for redux storage                                                                                                        |
| ![](/img/improvement.jpg) |Nest labelerTasks reducer inside labeler reducer                                                                                                              |
| ![](/img/improvement.jpg) |Konva: Concept Region drawing implementation                                                                                                                  |
| ![](/img/improvement.jpg) |Konva: Implement Rect Transformation                                                                                                                          |
| ![](/img/improvement.jpg) |Implement a futureproof schema for labeler interaction events                                                                                                 |
| ![](/img/improvement.jpg) |Move to event-driven design & have the ability to batch updates using custom logic                                                                            |
| ![](/img/improvement.jpg) |Create a single Sidebar component for all Labeling types, make children configurable                                                                          |
| ![](/img/improvement.jpg) |Remove all props unnecessarily passed from LabelerPage to deep children and make components get props from Redux only                                         |
| ![](/img/improvement.jpg) |Remove all logic from components to sagas for higher level orchestration of features                                                                          |
| ![](/img/bug.jpg) |Video selector improvements & test updation                                                                                                                   |
| ![](/img/bug.jpg) |Can only save 50 annotations on an image {Usability}                                                                                                          |
| ![](/img/bug.jpg) |Konva: resizing BBox below minimum size and "crossing over" makes things awry                                                                                 |
| ![](/img/bug.jpg) |LabelerPage complete re-render of all components on mouseHover, mousMove (img attached)                                                                       |
| ![](/img/bug.jpg) |Cypress script doesn't terminate webpack-dev-server child process                                                                                             |
| ![](/img/bug.jpg) |Cypress pre-run script doesn't check if dev server is already running                                                                                         |
| ![](/img/bug.jpg) |Create Unit+Integration testing framework                                                                                                                     |
| ![](/img/bug.jpg) |Integrate headless Cypress with build testing                                                                                                                 |
| ![](/img/new_feature.jpg) |Switch to react-konva for performant canvas rendering                                                                                                         |
| ![](/img/improvement.jpg) |Add task id to task list                                                                                                                                      |
| ![](/img/improvement.jpg) |Panning functionality improvements                                                                                                                            |
| ![](/img/bug.jpg) |Lock video playback and interpolation to fps                                                                                                                  |
| ![](/img/bug.jpg) |Annotations created with interpolation seem to have incorrect frame indices                                                                                   |
| ![](/img/bug.jpg) |Bounding Boxes and Concepts inconsistent during video playback {Usability}                                                                                    |
| ![](/img/bug.jpg) |While annotating video, interpolation freezes and all annotations disappear                                                                                   |
| ![](/img/bug.jpg) |Boxes/Interpolation objects are not saving after task submission                                                                                              |
| ![](/img/improvement.jpg) |Display task instructions to workers in labeler mode                                                                                                          |
| ![](/img/improvement.jpg) |Add infinite scroll loading to labeler carousel                                                                                                               |
| ![](/img/bug.jpg) |Not incrementing onNext and onPrev pages in Labeler Carousel                                                                                                  |
| ![](/img/improvement.jpg) |Display only minimal log in Portal react app                                                                                                                  |
| ![](/img/improvement.jpg) |Update Model mode to use the GET /models/types endpoint                                                                                                       |
| ![](/img/improvement.jpg) |Add list/grid toggle in model mode on all view                                                                                                                |
| ![](/img/improvement.jpg) |Collectors UI should use the layout similar to ModellingMode/LabellerMode                                                                                     |
| ![](/img/bug.jpg) |Bulk add concepts to region annotations in app with multi-embed base workflow                                                                                 |
| ![](/img/bug.jpg) |Profile page crashes on load                                                                                                                                  |
| ![](/img/bug.jpg) |Model mode array of concepts should be unique                                                                                                                 |
| ![](/img/bug.jpg) |Model creation/edit bugs                                                                                                                                      |
| ![](/img/bug.jpg) |New Collector page not scrollable                                                                                                                             |
| ![](/img/bug.jpg) |App Workflows - Unable to update model version for custom models                                                                                              |
| ![](/img/new_feature.jpg) |Display Created At Date in App Grid View                                                                                                                      |
| ![](/img/new_feature.jpg) |Support .txt files from local file browser                                                                                                                    |
| ![](/img/new_feature.jpg) |Support uploading of multiple video assets as well as image and video assets within the same CSV file                                                         |
| ![](/img/new_feature.jpg) |Add better user feedback for uploading text assets                                                                                                            |
| ![](/img/new_feature.jpg) |Upload Text by CSV for NLP                                                                                                                                    |
| ![](/img/improvement.jpg) |Final NLP MVP Feature Changes                                                                                                                                 |
| ![](/img/improvement.jpg) |Remove 0 area detection filtering from frontend code                                                                                                          |
| ![](/img/improvement.jpg) |Modify accepted CSV upload format so every column corresponds to a network request field                                                                      |
| ![](/img/improvement.jpg) |Resolve final bugs with bounding box indexes                                                                                                                  |
| ![](/img/improvement.jpg) |Prevent uploading image and video asset types to Text apps                                                                                                    |
| ![](/img/improvement.jpg) |No Visual Feedback for Text input Upload                                                                                                                      |
| ![](/img/improvement.jpg) |Support Uploading Files through the OS File Browser for NLP                                                                                                   |
| ![](/img/bug.jpg) |Custom Model Prediction Bounding Boxes are misaligned from the Detections Bar                                                                                 |
| ![](/img/bug.jpg) |Workflow Tab should display and load on initial view for text apps                                                                                            |
| ![](/img/bug.jpg) |Unable to navigate between text assets within explorer's asset detail view                                                                                    |
| ![](/img/bug.jpg) |CSV uploads not parsing metadata and concepts                                                                                                                 |
| ![](/img/bug.jpg) |Explorer's Advanced Search does not support searching by concepts                                                                                             |
| ![](/img/bug.jpg) |Training a classification model no longer display anything within the Custom Model Predictions tab                                                            |
| ![](/img/improvement.jpg) |create annotation CUD sagas for labeler v2                                                                                                                    |
| ![](/img/improvement.jpg) |Don't create task annotations in frontend                                                                                                                     |
| ![](/img/bug.jpg) |Form: Input Source showing auto complete options from other apps                                                                                              |
| ![](/img/bug.jpg) |Rich text instructions icon bugs                                                                                                                              |
| ![](/img/bug.jpg) |Task create form doesnt force you to set a reviewer if you specify manual review                                                                              |
| ![](/img/bug.jpg) |TypeError: val.add is not a function                                                                                                                          |
| ![](/img/bug.jpg) |Fix autocomplete when user selects "All inputs" for selecting inputs in task creation                                                                         |
| ![](/img/bug.jpg) |Error pops up when collaborator tries to edit task                                                                                                            |
| ![](/img/bug.jpg) |When I attempt to edit an existing labeling task t...                                                                                                         |
| ![](/img/bug.jpg) |Page not responding [Usability]                                                                                                                               |
| ![](/img/bug.jpg) |[Explorer] concept thumbnails aren't displaying from model details view                                                                                       |
| ![](/img/bug.jpg) |Concept Detail View displays incorrect assets                                                                                                                 |
| ![](/img/improvement.jpg) |Add all concepts button to model mode forms                                                                                                                   |
| ![](/img/bug.jpg) |Concept Autocomplete in Model Mode doesn't always display                                                                                                     |


### Workflows

|Status     |Details                                                                                                                                                       |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](/img/new_feature.jpg) |Allow run workflow and search embedding from embed model in workflow                                                                                          |

### Applications

|Status     |Details                                                                                                                                                       |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](/img/improvement.jpg) |Metadata Namespacing for Clarifai Apps                                                                                                                        |
| ![](/img/bug.jpg) |App details page should send a user to models page to create models rather than using modal                                                                   |



# Changelog

## Changelog 6.6

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |


### API
|Status     |Details                                    |
|-----------|-------------------------------------------|
| ![](/img/improvement.jpg)|Integrate Python functions service with API|
| ![](/img/improvement.jpg)|List available model types through API     |

### Model
|Status     |Details                                    |
|-----------|-------------------------------------------|
| ![](/img/bug.jpg)|Fix video error from new face cluster model in staging env|
| ![](/img/bug.jpg)|21312 Ground truth data caseids must be nonempty and unique. Fixed|
| ![](/img/improvement.jpg)|Update deep training to list the ModelTypes|
| ![](/img/improvement.jpg)|Move model_metadata to better place in protos. |
| ![](/img/improvement.jpg)|Generalize the domex-visual-searcher model type|
| ![](/img/improvement.jpg)|List available model types from backend services that provide models.

### Portal

|Status     |Details                                    |
|-----------|-------------------------------------------|
| ![](/img/bug.jpg)|Fixed bug in submitting finished Labeler Task|
| ![](/img/bug.jpg)|Select all concepts checkbox can be de-synced from actual concepts badges. Fixed|
| ![](/img/bug.jpg)|Disable Create Task button if not app owner|
| ![](/img/bug.jpg)|Search by task_id returns incorrect data   |
| ![](/img/bug.jpg)|Removed model creation from concept creation action in portal|
| ![](/img/bug.jpg)|Video scrubber cannot be moved. Fixed      |
| ![](/img/bug.jpg)|Fixed ability to delete interpolation tracks (you can only delete frames at this time).|
| ![](/img/bug.jpg)|Worker ids used instead of names in report overview in stats view. Fixed|
| ![](/img/bug.jpg)|Y-axis on labels created stats page is wrong. Fixed|
| ![](/img/bug.jpg)|In task creation, adding concepts should be simple to click all the options right away. Fixed|
| ![](/img/bug.jpg)|Toggling concept visibility doesn't affect previously hidden child region. Fixed|
| ![](/img/bug.jpg)|Leftover                                   |
| ![](/img/bug.jpg)|If reviewer is not a collaborator, UI sends empty reviewer id back instead of raising error. Fixed|
| ![](/img/bug.jpg)|Bounding box disappears on resizing. Fixed |
| ![](/img/bug.jpg)|While adjusting bounding box, it creates an additional bounding box over no object. Fixed|
| ![](/img/bug.jpg)|Using Play button brings up "Oops" page. Fixed|
| ![](/img/bug.jpg)|Error on opening Video Labeler. Fixed      |
| ![](/img/bug.jpg)|Labeler sidebar interaction bugs and unresponsiveness (due to lack of optimistic UI). Fixed|
| ![](/img/bug.jpg)|Newly drawn object disappears from canvas after drawing, and reappears after API response. Fixed|
| ![](/img/bug.jpg)|Infinite loading in Labeler Mode for app without any inputs. Fixed|
| ![](/img/bug.jpg)|Use name field for tasks in Labeler admin. Fixed|
| ![](/img/bug.jpg)|Clicking labeler icon crashes. Fixed       |
| ![](/img/bug.jpg)|Moving bounding box around repeatedly creates a race condition, shows error notification and duplicate box. Fixed|
| ![](/img/bug.jpg)|Explorer inputs stale state. Fixed         |
| ![](/img/bug.jpg)|Diagnose issues affecting overall hanging/speed/performance of Labeler|
| ![](/img/bug.jpg)|Carousel thumbnails not showing up in Labeler. Fixed|
| ![](/img/bug.jpg)|Not able to create overlapping bounding boxes. Fixed|
| ![](/img/bug.jpg)|When user adds mass metadata in Explorer, the UI says success but metadata does not persist. Fixed|
| ![](/img/bug.jpg)|Create annotations while creating task. Fixed|
| ![](/img/bug.jpg)|Labeler board showing wrong task type. Fixed|
| ![](/img/bug.jpg)|Polygon annotations break Explorer. Fixed  |
| ![](/img/bug.jpg)|Concept autocomplete in Labeler task creation is showing clarifai/main concepts. Fixed|
| ![](/img/bug.jpg)|Should not be allowed to create a task with no concepts if my app has no concepts. Fixed|
| ![](/img/bug.jpg)|Fixed image tools state                    |
| ![](/img/bug.jpg)|Restricted tasks to only the assigned users|
| ![](/img/bug.jpg)|Add validation to TaskForm’s concept field |
| ![](/img/bug.jpg)|Removed all instances of worker_id from Explorer|
| ![](/img/bug.jpg)|Create one annotation for each bbox        |
| ![](/img/bug.jpg)|98011 panic on ListTasks. Fixed            |
| ![](/img/bug.jpg)|App names no longer display in Explorer. Fixed|
| ![](/img/bug.jpg)|Empty Annotations are not displaying after drawing a new bounding box until after refreshing the page. Fixed|
| ![](/img/bug.jpg)|Drawing a new bounding box in Explorer after previously labeling a region display an error. Fixed|
| ![](/img/bug.jpg)|Video search results do not play at the most relevant video time. Fixed|
| ![](/img/bug.jpg)|Change text upload UI to support moderation workflow|
| ![](/img/bug.jpg)|Change object key lookup in boundingBoxContainer to use lodash/get|
| ![](/img/bug.jpg)|Submitting Task for Review break Portal. Fixed|
| ![](/img/bug.jpg)|Labeling a region on an asset with multiple detected regions will put the child annotation in the wrong group in Explorer's sidebar. Fixed|
| ![](/img/bug.jpg)|ConvertToBoundingBoxRegion function breaks Explorer when annotation information has not loaded at time of render. Fixed|
| ![](/img/bug.jpg)|Video Frame Annotating in Explorer throws errors. Fixed|
| ![](/img/bug.jpg)|When drawing a new bounding box, Base64 string for video annotations shows the wrong regions. Fixed|
| ![](/img/bug.jpg)|Fixe 10MB issue with video uploads         |
| ![](/img/bug.jpg)|Detection Regions and Indexes are thrown off on video assets. Fixed|
| ![](/img/bug.jpg)|Video Search Results still on showing Inputs. Fixed|
| ![](/img/bug.jpg)|DetailsPageHeader adds 2.25rem margin to the DetailsPageBody. Fixed|
| ![](/img/bug.jpg)|Video Interpolation in Labeler breaks dev. Fixed|
| ![](/img/bug.jpg)|Redux is no longer calculating the sample_ms rate, preventing bounding boxes from rendering. Fixed|
| ![](/img/bug.jpg)|Fixed video pause error when navigating between videos|
| ![](/img/bug.jpg)|ImagePile in Labeler Task View does not display image thumbs due to extraneous object nesting. Fixed|
| ![](/img/bug.jpg)|Remove warning error from console for immutable passed in props to SearchGrid.js|
| ![](/img/bug.jpg)|Post annotation to detection region should use region id in portal. Fixed|
| ![](/img/bug.jpg)|Delete app button in app details takes you to blank page. Fixed|
| ![](/img/bug.jpg)|Incorrect bbox/label numbers displayed in image. Fixed|
| ![](/img/bug.jpg)|Multiple video thumbs selected in search results when selecting one thumb. Fixed|
| ![](/img/improvement.jpg)|Improve Labeler mode window resizing.      |
| ![](/img/improvement.jpg)|W and E hotkeys for image labelling to go left/right. |
| ![](/img/bug.jpg)|Polygon annotations break Explorer. Fixed. |
| ![](/img/bug.jpg)|Polygons regions don’t appear when panning and zooming. Fixed. |
| ![](/img/improvement.jpg)|Allow users to create concepts on task create view.|
| ![](/img/bug.jpg)|Fixed task list item count query.          |
| ![](/img/improvement.jpg)|Utilising new task endpoints to Create tasks and integrate to show tasks in Portal.|
| ![](/img/bug.jpg)|LabelerPage refresh error. Fixed.          |
| ![](/img/bug.jpg)|Should not be allowed to create a task with no concepts if my app has no concepts. Fixed.|
| ![](/img/bug.jpg)|Unknown page Error. Complete interpolation of an object doesn't show bbox. Complete tracking of a box will disappear from the video. Fixed.|
| ![](/img/bug.jpg)|Fixed carousel padding.                    |
| ![](/img/bug.jpg)|Labeler board showing wrong task type. Fixed.|
| ![](/img/improvement.jpg)|Integrate worker/reviewer side of Labeler. |
| ![](/img/improvement.jpg)|Add 'name' field to new Tasks.             |
| ![](/img/bug.jpg)|Create annotations while creating task.    |
| ![](/img/bug.jpg)|Carousel thumbnails not showing up in Labeler. Fixed.|
| ![](/img/improvement.jpg)|No image clearing/loading indicator in Labeler. Fixed.|
| ![](/img/bug.jpg)|Use name field for tasks in Labeler administration.|
| ![](/img/bug.jpg)|Bulk labeling value does not update in store upon labeling. Fixed.|
| ![](/img/improvement.jpg)|Record time per annotation and per input to /stats/values in Labeler mode of Portal. |
| ![](/img/improvement.jpg)|Query and display stats across workers per task for time and count of annotations. |
| ![](/img/bug.jpg)|Concept autocomplete in Labeler task creation is showing clarifai/main concepts. Fixed.|
| ![](/img/new_feature.jpg)|Implement polygon task type in Labeler.    |
| ![](/img/bug.jpg)|Applying filters in Portal breaks bulk labeling / unlabeling. Fixed.|
| ![](/img/bug.jpg)|Unable to bulk-label annotations. Fixed.   |
| ![](/img/improvement.jpg)|Change submit to "Complete Task" in Labeler page and add progress bar as it's working.|
| ![](/img/improvement.jpg)|Allow Patching region annotations in Labeler mode. |
| ![](/img/improvement.jpg)|Add AI assist thresholding.                |
| ![](/img/improvement.jpg)|Add ability to set annotation_info in the annotation writer|
| ![](/img/bug.jpg)|`annotation_info` should be a valid JSON in Model Mode. Fixed.|
| ![](/img/improvement.jpg)|Upgrade gulp and node to latest version for testing-library support|
| ![](/img/improvement.jpg)|Write PropType declarations for componens/ConceptListTable|
| ![](/img/improvement.jpg)|Enable collapse behavior in sidebar concepts|
| ![](/img/improvement.jpg)|Create atomic reusable  sidebar components |
| ![](/img/improvement.jpg)|Integrate React Testing Library            |
| ![](/img/improvement.jpg)|Konva: Image centering, zooming, panning   |
| ![](/img/improvement.jpg)|Move toolbar logic to react context        |
| ![](/img/improvement.jpg)|Refactor TaskForm related thunks to sagas  |
| ![](/img/improvement.jpg)|[Rearch]Scaffold Labeler Redux in a new nested state slice & Implement Sagas|
| ![](/img/improvement.jpg)|[P2] Task id is used in dropdown of stats tasks rather than task.name|
| ![](/img/improvement.jpg)|[P0]Show taskId at task list               |
| ![](/img/improvement.jpg)|Move region visibility state to its own React Context|
| ![](/img/improvement.jpg)|Get sidebar list data directly from redux  |
| ![](/img/improvement.jpg)|[P1] Don't hide task form if error occurs  |
| ![](/img/improvement.jpg)|Remove delay of annotation request         |
| ![](/img/improvement.jpg)|Remove animation for showing concepts on right side|
| ![](/img/improvement.jpg)|Perf: only fetch input predictions/annotations if user stays on image, not while navigating|
| ![](/img/improvement.jpg)|Get Labeler internal features ready for internal users|
| ![](/img/improvement.jpg)|Offload annotation creation to backend     |
| ![](/img/improvement.jpg)|allow reviewers update annotations         |
| ![](/img/improvement.jpg)|No image clearing/loading indicator in Labeler|
| ![](/img/improvement.jpg)|Controls for resizing bounding boxes need to be more visible|
| ![](/img/improvement.jpg)|Fabric rendering to be real-time; sync from API in background|
| ![](/img/improvement.jpg)|make tasks endpoint public                 |
| ![](/img/improvement.jpg)|list task by worker id/reviewer id         |
| ![](/img/improvement.jpg)|Add 'name' field to new Tasks              |
| ![](/img/improvement.jpg)|Integrate worker/reviewer side of labeller |
| ![](/img/improvement.jpg)|Integrate and Implement task deletion using new endpoints|
| ![](/img/improvement.jpg)|Utilising new task endpoints to Create tasks and integrate to show tasks at portal|
| ![](/img/improvement.jpg)|Integrate and utilise new CRUD endpoints in portal|
| ![](/img/improvement.jpg)|Allow users to create concepts on task create view|
| ![](/img/improvement.jpg)|Add empty CRUD endpoints for tasks         |
| ![](/img/improvement.jpg)|Make polygons a separate task type         |
| ![](/img/improvement.jpg)|Add AI assist thresholding                 |
| ![](/img/improvement.jpg)|W and E hotkeys for image labelling to go left/right. |
| ![](/img/improvement.jpg)|Improve labeler mode window resizing.      |
| ![](/img/improvement.jpg)|Allow Patching region annotations in labeler mode. |
| ![](/img/improvement.jpg)|crank up internal message size to handle larger videos with more outputs|
| ![](/img/improvement.jpg)|Introduce stats collection APIs for worker stats. |
| ![](/img/improvement.jpg)|Implement /tasks CRUD in API.              |
| ![](/img/improvement.jpg)|Add frame.id to API as well as track id.   |
| ![](/img/improvement.jpg)|Remove ‘alt’ from hotkeys, just use letters and arrows straight up|
| ![](/img/improvement.jpg)|Update image tool icons                    |
| ![](/img/improvement.jpg)|Add support for fields under ENUM values during model creation|
| ![](/img/improvement.jpg)|Implement Dynamic model types              |
| ![](/img/improvement.jpg)|Ungrouped Annotations/New Annotation Regions should display at the top of Explorer's Detections List|
| ![](/img/improvement.jpg)|Change explorer to use sample_ms instead from network response instead of deducing the value|
| ![](/img/improvement.jpg)|Hide Workflow List Elements if below Range Slider value|
| ![](/img/improvement.jpg)|Modify Annotating from Custom Model Predictions to post new annotations.|
| ![](/img/improvement.jpg)|Update model mode with new designs         |
| ![](/img/improvement.jpg)|Refactor ImageUtils.js file to individual functions instead of one object|
| ![](/img/improvement.jpg)|Added threshold search result in Portal    |
| ![](/img/improvement.jpg)|Update media player icons                  |
| ![](/img/improvement.jpg)|Display timestamp bar in Explorer grid view for video results|
| ![](/img/improvement.jpg)|Concept relation should autocomplete concept name|
| ![](/img/new_feature.jpg)|Send email to workers when they are added to task|
| ![](/img/new_feature.jpg)|Assigning a worker or reviewer to a task sends an email|
| ![](/img/new_feature.jpg)|Apps with empty workflow should allow all task types (concepts, bounding box, polygon) during task creation|
| ![](/img/new_feature.jpg)|Edit Task feature                          |
| ![](/img/new_feature.jpg)|Support consensus review settings          |
| ![](/img/new_feature.jpg)|Support detection tasks                    |
| ![](/img/new_feature.jpg)|Create new Single Image View and Image Tools|
| ![](/img/new_feature.jpg)|Task view UI for workers                   |
| ![](/img/new_feature.jpg)|Introduce AWAITING_REVIEW status for annotations|
| ![](/img/new_feature.jpg)|Split tasks admin view into tabs           |
| ![](/img/new_feature.jpg)|Test out idea behind tasks as saved searches and POST /annotations iterations|
| ![](/img/new_feature.jpg)|Implement search by annotation.status in backend|
| ![](/img/new_feature.jpg)|Search by images or video type in the right hand side bar of explorer's grid view|
| ![](/img/new_feature.jpg)|Video Crop Region Search                   |
| ![](/img/new_feature.jpg)|video thumbs display relevant frame in search|


### Workflows

|Status     |Details                                    |
|-----------|-------------------------------------------|
| ![](/img/new_feature.jpg)|Display workflow detection predictions on the main/large image in Portal|



# Changelog

## Changelog 6.5

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Can't Access Main Apps Page with invalid collaborators. Fixed. |
| ![](/img/bug.jpg) | Unable to create new Application \(General Detection\). Fixed. |
| ![](/img/bug.jpg) | `application_sharing` scopes field should be `json` instead of `jsonb`. Fixed. |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Pasting long text makes Uploader unusable due to lack of scrolling. Fixed. |
| ![](/img/improvement.jpg) | Support uploading text containing emojis. |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Integrate and Implement task deletion using new endpoints. |
| ![](/img/improvement.jpg) | Implement /tasks CRUD in API. |
| ![](/img/improvement.jpg) | Allow annotation writer model to set the `task_id` in `annotation_info`. |
| ![](/img/improvement.jpg) | Make polygons a separate task type. |
| ![](/img/improvement.jpg) | Add empty CRUD endpoints for tasks. |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | `vocab_id` doesn't appear in the returned object for demographics model. Fixed. |
| ![](/img/bug.jpg) | `segment-concept` model types are no longer returning the segmentation mask. Fixed. |
| ![](/img/bug.jpg) | NLP text input does not scroll when longer than viewport height. Fixed. |
| ![](/img/bug.jpg) | Clear text inputs after upload. |
| ![](/img/improvement.jpg) | Improve the "TextFile" React Component for NLP. |
| ![](/img/improvement.jpg) | Make existing model details view configurable by model type. |
| ![](/img/bug.jpg) | Edit model should only contain the fields related to the selected model. Fixed |
| ![](/img/bug.jpg) | NLP frontend text input is covered entirely blue when selected. Fixed. |
| ![](/img/bug.jpg) | Enforce fields in post/patch models to adhere to model types. Fixed. |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fixed fps issue for video predictions. |
| ![](/img/bug.jpg) | Validate `stat_value_agg_type`. |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Dropdown Search Help Menu no longer displays in the search bar. Fixed. |
| ![](/img/new_feature.jpg) | Video thumbs have relevant timestamp in search. |
| ![](/img/improvement.jpg) | Added adjustable search results threshold. |
| ![](/img/new_feature.jpg) | Search over multi-embed workflows. |
| ![](/img/new_feature.jpg) | Added search on input level. |
| ![](/img/improvement.jpg) | Improved search query by using multi join. |
| ![](/img/bug.jpg) | Fixed panic in list saved searches endpoint. |
| ![](/img/bug.jpg) | Input metadata search from table not working. Fixed. |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | "Return to Log in " doesn't redirect to login page. Fixed. |
| ![](/img/bug.jpg) | Clicking on image, or Explorer Mode with images that contain geo coordinates crashed the app. |
| ![](/img/improvement.jpg) | Portal model predicts use hosted URL when available instead of normal URL. |
| ![](/img/bug.jpg) | When selecting a concept and going to the next image the concept checkbox won't stay selected. Fixed |
| ![](/img/improvement.jpg) | Allow multi-select from explorer grid view and add metadata. |
| ![](/img/improvement.jpg) | Integrate and utilize new CRUD endpoints in Portal. |
| ![](/img/new_feature.jpg) | Allow for pasted text to keep formatting in the text box. |
| ![](/img/bug.jpg) | Prediction threshold slider custom model predicts without base workflow annotations. Fixed |
| ![](/img/improvement.jpg) | Strings without spacing format properly in Explorer's Asset Grid View |
| ![](/img/bug.jpg) | `annotation_info` should be a valid JSON in Model Mode. Fixed. |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Hide the "add text" section of the add inputs modal for non text workflows. |
| ![](/img/improvement.jpg) | Validate that all nodes in workflows list their inputs based on type. |
| ![](/img/new_feature.jpg) | Add NLP to Workflows List |
| ![](/img/improvement.jpg) | Generalize the iterations over regions/frames in workflow code. |
| ![](/img/new_feature.jpg) | Add ability to "make a copy" of public\_workflows. |
| ![](/img/improvement.jpg) | Allow indexing embedding from detect -&gt; crop -&gt; embed style workflows. |
| ![](/img/improvement.jpg) | Allow setting input nodes for all users, not just @clarifai.com users. |
| ![](/img/improvement.jpg) | Allow non-internal users setting input node when creating workflows. |
| ![](/img/bug.jpg) | Create/Patch workflow uncaught exception. |

### Clients

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Update docs.clarifai.com to reflect our current API clients including grpc clients. |

## Changelog 6.4

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Improved responsiveness of collaborations tab in /apps |
| ![](/img/improvement.jpg) | Enabled list collaborators to list deleted collaborators |
| ![](/img/bug.jpg) | Login Form breaks app. Fixed |
| ![](/img/bug.jpg) | Deleting an app no longer redirects to /apps |
| ![](/img/bug.jpg) | Can’t create models in new app. Fixed |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fixed .webp files not working when sent as base64 |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | MVP of labeler single image view functionality |
| ![](/img/new_feature.jpg) | Support detection tasks |
| ![](/img/improvement.jpg) | Detection Labeler: Color Coded Concepts |
| ![](/img/improvement.jpg) | Add workflow\_id to task creation and show AI predictions to verify in labeler mode |
| ![](/img/new_feature.jpg) | Split tasks admin view into tabs |
| ![](/img/improvement.jpg) | Add visual sections to task form |
| ![](/img/improvement.jpg) | Add default queries for "all inputs" and "all unlabelled inputs" in task create view |
| ![](/img/improvement.jpg) | Autocomplete annotation user |
| ![](/img/new_feature.jpg) | Implement Classification Task Review Logic |
| ![](/img/new_feature.jpg) | Implement Review Process into tasks |
| ![](/img/improvement.jpg) | Introduce stats collection APIs for worker stats |
| ![](/img/new_feature.jpg) | Implement APIs for polygon region support |
| ![](/img/new_feature.jpg) | Incorporate image filters for labelling |
| ![](/img/improvement.jpg) | Update image tool icons |
| ![](/img/new_feature.jpg) | Ability to zoom in on images |
| ![](/img/improvement.jpg) | Remove ‘alt’ from hotkeys, just use letters and arrows |
| ![](/img/new_feature.jpg) | Label to draw box in video frame using frame bytes |
| ![](/img/improvement.jpg) | Display videos in labeler |
| ![](/img/improvement.jpg) | Add video fps field for tasks |
| ![](/img/improvement.jpg) | Draw Bounding Boxes in Labeler Detection Videos |
| ![](/img/improvement.jpg) | Add video controls for video in labeler |
| ![](/img/bug.jpg) | Fix Classification Annotation |
| ![](/img/bug.jpg) | Video annotation deletion. Fixed |
| ![](/img/bug.jpg) | AI Assist Predictions did not show for General workflow classification task. Fixed |
| ![](/img/bug.jpg) | Fix Classification video annotation |
| ![](/img/bug.jpg) | Display video in classification tasks |
| ![](/img/bug.jpg) | Fix Labeler input urls |
| ![](/img/bug.jpg) | Fix Annotation creation for video |
| ![](/img/bug.jpg) | Fix Labeler post calls |
| ![](/img/bug.jpg) | Detection Labeler: fix zoom |
| ![](/img/bug.jpg) | Fixed image cropper task description |
| ![](/img/bug.jpg) | Fix concept threshold creation |
| ![](/img/bug.jpg) | Set annotation status ‘success’ |
| ![](/img/bug.jpg) | Restrict tasks to only the assigned users |
| ![](/img/bug.jpg) | Add validation to TaskForm’s concept field |
| ![](/img/bug.jpg) | Display human tags for human box as child |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Convert Deep Trained Model to Embedding Model for Use as "Base Workflow" |
| ![](/img/new_feature.jpg) | Classification predictions for AI assistance |
| ![](/img/new_feature.jpg) | Merge this detection and custom model prediction sections for detection models |
| ![](/img/improvement.jpg) | Video labelling UI for classification. |
| ![](/img/improvement.jpg) | Remove the non-creatable types from model mode |
| ![](/img/improvement.jpg) | Improve the create classifier / detector view options in model mode |
| ![](/img/improvement.jpg) | Add deep training options in model mode |
| ![](/img/improvement.jpg) | Update random sampling model to have a slider |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fixed public concept rank |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Support detection evaluations in PostAnnotationSearchMetrics |
| ![](/img/new_feature.jpg) | Support nlp search \(only filtering\) |
| ![](/img/new_feature.jpg) | Add evaluations between two saved search label sets |
| ![](/img/improvement.jpg) | Fix labeler search amount |
| ![](/img/bug.jpg) | Error:  "Cannot search over `annotations`" when clicking a general app. Fixed |
| ![](/img/bug.jpg) | Model name and details is not populated upon model creation in model mode |
| ![](/img/bug.jpg) | Fix annotation search when accessing the LabelerPage |
| ![](/img/bug.jpg) | Search by annotation\_info should not return the embed annotation. Fixed |
| ![](/img/bug.jpg) | Search for metadata in detection apps doesn't work. Fixed |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Create Dual Range Slider |
| ![](/img/new_feature.jpg) | Enable patching the default workflow from Portal and error if needs reindex |
| ![](/img/new_feature.jpg) | Allow drawing bounding boxes on paused video frames |
| ![](/img/improvement.jpg) | Add scopes for collaborators and metrics to Portal |
| ![](/img/improvement.jpg) | Allow up to 15-20x zoom level for really large images. |
| ![](/img/improvement.jpg) | Allow selection the embed\_model\_version\_id from Portal when creating a model |
| ![](/img/bug.jpg) | Fix inconsistent fps between uploading video and predicting video |
| ![](/img/bug.jpg) | Missing frame time. Fixed |
| ![](/img/bug.jpg) | Model annotations not appearing in Explorer. Fixed |
| ![](/img/bug.jpg) | When creating the auto annotation workflow editing the workflow crashes Portal |
| ![](/img/bug.jpg) | Fix image tools state |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | CreateWorkflow model improvements |
| ![](/img/improvement.jpg) | Allow custom concept models in the default app workflows |
| ![](/img/improvement.jpg) | Add a "Make a Copy" or "Copy to New Workflow" button for each workflow |
| ![](/img/improvement.jpg) | Allow patching the default workflow in Portal |
| ![](/img/improvement.jpg) | Show the default workflow in the list of workflows for the app |
| ![](/img/improvement.jpg) | Validate patching of default workflow is compatible in backend |
| ![](/img/bug.jpg) | Large workflow name causes overlap in app details view. Fixed |
| ![](/img/bug.jpg) | Portal crashes if page reloads during workflow add/edit. Fixed |
| ![](/img/bug.jpg) | Detection workflow recompute also predict detect-concept |
| ![](/img/bug.jpg) | Allow detect-concept models to be added to workflows |
| ![](/img/bug.jpg) | Patch workflow create worker |
| ![](/img/bug.jpg) | Fix validation of inputs in workflows |
| ![](/img/bug.jpg) | Fix workflow embed\_join\_annotation\_id issue |

### Clients

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Clean up private API client repos |
| ![](/img/bug.jpg) | Remove public workflows from Python client |

## Changelog 6.3

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Send collaborator emails asynchronously |
| ![](/img/bug.jpg) | NLP bug fixes for non-text apps |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Consolidated input related status codes |
| ![](/img/improvement.jpg) | Add frame.id to API as well as region.track\_id |
| ![](/img/bug.jpg) | Granted select permission to clarifairead |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added list annotations filter status |
| ![](/img/improvement.jpg) | Added concept selection for tasks |
| ![](/img/improvement.jpg) | Post/Patch annotations request now allow setting status |
| ![](/img/improvement.jpg) | Changed task form options |
| ![](/img/improvement.jpg) | Set annotation status to awaiting for review if the authorized user is not app owner |
| ![](/img/improvement.jpg) | Return only input\_level annotation in input.data |
| ![](/img/bug.jpg) | Drawing annotations: wrong embed model version id. Fixed |
| ![](/img/bug.jpg) | Eliminated error if no annotation to be deleted |
| ![](/img/bug.jpg) | Create one annotation for each bbox |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added support for adding and training on text in the platform |
| ![](/img/new_feature.jpg) | Created a NLP mock prediction endpoint |
| ![](/img/improvement.jpg) | Created test set to evaluate quick trained models or k-fold if no test search is specified |
| ![](/img/improvement.jpg) | Added vocab\_id for demographics model concepts |
| ![](/img/improvement.jpg) | Fixed sorting of A.G.E. concepts in golang for demographics model so we don't chop off sets of them |
| ![](/img/improvement.jpg) | Deprecated Face from javascript Client |
| ![](/img/improvement.jpg) | Deprecated Face from Java Client |
| ![](/img/bug.jpg) | Confusion matrix predicted/true are swapped in evaluation results. Fixed |
| ![](/img/bug.jpg) | Explorer Image/Text Joint embedding |
| ![](/img/bug.jpg) | Fixed selectEmbedModelVersionId in detection apps |
| ![](/img/bug.jpg) | Fixed generalModel imports and optimized video click handlers with useCallback hooks |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Persisted the saved search used in train a model version |
| ![](/img/bug.jpg) | Created log for annotation/search request/response |
| ![](/img/bug.jpg) | Region Searches within Search Bar still use crop coordinates instead of base64 bytes. Fixed |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Created new Single Image View and Image Tools |
| ![](/img/new_feature.jpg) | Enabled Display Text Thumbnails in App Grid View and App Details View |
| ![](/img/new_feature.jpg) | Text Thumbnails display in Portal/Search Bar disabled |
| ![](/img/new_feature.jpg) | Enabled View Text Assets in Portal's Image View |
| ![](/img/new_feature.jpg) | Added Text Inputs To Explorer Apps |
| ![](/img/new_feature.jpg) | Imported new icons for Labeler Image Tools into the style guide |
| ![](/img/improvement.jpg) | Added login tracking to analytics package in Portal |
| ![](/img/improvement.jpg) | Allowed pasting into the add inputs text area and clear the text box after clicking submit |
| ![](/img/bug.jpg) | Search bar not visible. Fixed |
| ![](/img/bug.jpg) | Removed all instances of worker\_id from Explorer |
| ![](/img/bug.jpg) | Fixed popover left/right overflow |
| ![](/img/bug.jpg) | Disabled all search by click handlers in Portal for Text Apps |
| ![](/img/bug.jpg) | Click Search button icons on Thumbs not working for localized search. Fixed |
| ![](/img/bug.jpg) | Fixed details page header missing description |
| ![](/img/bug.jpg) | Fixed demo font syntax |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added a Range Slider to filter Workflow Predictions by Value |
| ![](/img/improvement.jpg) | Updated Face workflow to include the detect faces as concepts for search |

## Changelog 6.2

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Updated Privacy Policy URL |
| ![](/img/bug.jpg) | Fixed panic error in Signup |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Ensured collectors are deleted when apps are deleted |
| ![](/img/bug.jpg) | View In Explorer button missing in app details. Fixed |
| ![](/img/bug.jpg) | Fixed failed to generate thumbnail |
| ![](/img/bug.jpg) | Fixed app duplication error when getting worker |
| ![](/img/bug.jpg) | Deleted collaborator should also mark application\_worker to deleted. Fixed |

### Inputs

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Inputs count stuck at &gt; 0 after delete all, with all inputs seemingly deleted |

### Label

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Task view UI for workers |
| ![](/img/new_feature.jpg) | Create task manager page and task creation page |
| ![](/img/new_feature.jpg) | New Icon for Task Manager/Task Viewer |
| ![](/img/bug.jpg) | Fixed POST annotations call on frontend to use correct embed model |
| ![](/img/bug.jpg) | Post annotations should include embed\_model\_version\_id. Fixed |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added Apparel Detection to Demo App |
| ![](/img/new_feature.jpg) | Created UI for creating knowledge graph concept relations relations |
| ![](/img/new_feature.jpg) | Create annotation writer model to write annotations to DB |
| ![](/img/improvement.jpg) | Pass and use test and train data queries to trainer |
| ![](/img/improvement.jpg) | Added migration to upgrade old model\_type in DB |
| ![](/img/improvement.jpg) | Depredated Face from Python client |
| ![](/img/improvement.jpg) | Unified the TypeExt and Type fields in model object. |
| ![](/img/improvement.jpg) | Deprecated facedetect\* model types. |
| ![](/img/improvement.jpg) | Unified FaceEmbedModel and DetectEmbedModel |
| ![](/img/improvement.jpg) | Converted face.Identity responses to concepts like other detection models to be consistent |
| ![](/img/bug.jpg) | Fixed demo font syntax |
| ![](/img/bug.jpg) | Video Timeline does not display on the demo app |
| ![](/img/bug.jpg) | Fixed Range Slider Value/Text in Apparel Detection Demo |
| ![](/img/bug.jpg) | Fixed demographics model to return embeddings and work with auto-annotate |
| ![](/img/bug.jpg) | Adding collaborator model counter-intuitively requires ENTER in order to enable the submit button. Fixed |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Validated that concept relation doesn't already exist on POST relations |
| ![](/img/bug.jpg) | Prediction requests are being fired too frequently instead of using cache. Fixed |
| ![](/img/bug.jpg) | postModelOutputs is not called for newly labeled assets without a manual refresh |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Return annotations posted by user in search results |
| ![](/img/bug.jpg) | Search by region not working for face detection. Fixed |
| ![](/img/bug.jpg) | Make “save” search button internal only |
| ![](/img/bug.jpg) | Saved Searches in Portal use the incorrect user ID |
| ![](/img/bug.jpg) | Fix crop search from single image view for faces/detections |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | UI for collector crud |
| ![](/img/improvement.jpg) | Deprecate Face from Portal |
| ![](/img/improvement.jpg) | Improve tabs UI |
| ![](/img/bug.jpg) | Video Predictions are failing in Portal |
| ![](/img/bug.jpg) | Fixed broken font syntax |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Video detection workflow prediction support |
| ![](/img/new_feature.jpg) | Public general v1.5 workflow |
| ![](/img/bug.jpg) | Allow Patching to existing public workflow |
| ![](/img/bug.jpg) | Can not train LOPQ if app base workflow is face. Fixed |

## Changelog 6.1

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Clients

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Python client |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Java client |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Javascript client |
| ![](/img/improvement.jpg) | Remove Feedback endpoints from Portal/demo |
| ![](/img/improvement.jpg) | Remove image.crop field from Python API client |
| ![](/img/improvement.jpg) | Remove image.crop field from Java API client |
| ![](/img/improvement.jpg) | Remove image.crop field from Javascript API client |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Added detection evaluation in platform |
| ![](/img/new_feature.jpg) | Introduce concept mapping model that uses the knowledge graph relations, creating a path for users to eventually benefit from pool of networked data |
| ![](/img/bug.jpg) | Fix a bug that caused the new face predictions to have a huge performance drop |
| ![](/img/bug.jpg) | Train and eval worker didn't invalidate model related cache. Fixed |
| ![](/img/bug.jpg) | Fix bug in deleting a concept relation by ID |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Bulk labelling can now be done from Explorer mode grid view. |
| ![](/img/improvement.jpg) | Show Check/X on custom detection model predictions in Portal |
| ![](/img/improvement.jpg) | Allow multi concepts per bbox |
| ![](/img/bug.jpg) | Negative tags not visible in Portal. Fixed |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove extra round trip to storage in predict pathway |
| ![](/img/improvement.jpg) | Remove the image.crop argument during predict and POST /inputs calls to simplify the API |
| ![](/img/improvement.jpg) | Add region predictions from custom models to detections in videos |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Implement search by annotation.status in backend |
| ![](/img/improvement.jpg) | Connect saved searches and annotation status |

## Changelog 6.0

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove country field from signup form, simplifying new customer signups |
| ![](/img/bug.jpg) | Essential Plan User can't add collaborators. Fixed |

### API

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Introduce new [Python gRPC API client](https://docs.clarifai.com/api-guide/api-overview), enabling new features and performance enhancements across API |
| ![](/img/new_feature.jpg) | Introduce new [Java gRPC API client](https://docs.clarifai.com/api-guide/api-overview), enabling new features and performance enhancements across API |
| ![](/img/improvement.jpg) | Update API key type for "app\_specific" for app-specific keys to be more clear to users |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Allow Personal Access Tokens when calling /users/me \(GetUsers\) |
| ![](/img/new_feature.jpg) | \[Frontend\] Enable "Copy Application" from collaborated apps, making it easy to duplicate and build upon existing applications |
| ![](/img/bug.jpg) | Program to clean internal apps crashing. Fixed |

### Data Management

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Added the ability to accept b64 Gifs |
| ![](/img/bug.jpg) | Functionality to upload pre-tagged images missing. Fixed |
| ![](/img/bug.jpg) | Images pre-tagged with concepts do not successfully upload into Clarifai UI On doing bulk uploads \(&gt;20-30 urls\). Fixed |
| ![](/img/bug.jpg) | Bulk image upload issue. Fixed |
| ![](/img/bug.jpg) | "Download Failed" error when uploading images. Fixed |
| ![](/img/bug.jpg) | Issue with post inputs key being a PAT in a collector. Fixed |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Skip aligning landmarks if landmark points are out of range to avoid errors and unexpected behavior |
| ![](/img/bug.jpg) | Bounding Boxes and Cropped Regions aren't displaying on Videos with default runtime config. Fixed |
| ![](/img/bug.jpg) | Insert annotations and related data in batch to improve performance |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Evaluate new face embedding model workflow end to end for optimal performance |
| ![](/img/improvement.jpg) | Validate that concept.app\_id shouldn't be set when creating/patching models |
| ![](/img/improvement.jpg) | Add new predicate to knowledge graph for "relates\_to" to represent synonyms |
| ![](/img/bug.jpg) | Model training lag. Fixed |
| ![](/img/bug.jpg) | Model has missing inputs. Fixed |
| ![](/img/bug.jpg) | Submitted models becoming stuck in queue. Fixed |
| ![](/img/bug.jpg) | Custom training models when uploaded images are not fully pre-processed. Fixed |
| ![](/img/bug.jpg) | Custom facial recognition bboxes do not correspond with detection boxes/ Custom facial recognition prediction interval for video is still 1000ms for apps supporting 100ms runtime config. Fixed |
| ![](/img/bug.jpg) | frame\_info time off by a factor of 10 for general detection model. Fixed |
| ![](/img/bug.jpg) | Detection Models throw error at end of video due to invalid index lookup. Fixed |

### Workflow

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Deleting a workflow should clear or update localStorage. Fixed |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Clean up app overflow UI, improving user experience |
| ![](/img/improvement.jpg) | Improve Error boundary screen, improving user experience |
| ![](/img/improvement.jpg) | Add sentry error Id to Error Screen |
| ![](/img/bug.jpg) | Images not loading. Fixed |
| ![](/img/bug.jpg) | Label and prediction on the right side under Custom Model Predictions section no longer shows up automatically. Fixed |
| ![](/img/bug.jpg) | Provide a way for user.metadata to be updated from portal when there are failing apps stuck in there. Fixed |
| ![](/img/bug.jpg) | Predictions for a detection model don't show properly in portal. Fixed |
| ![](/img/bug.jpg) | Custom facial recognition Predict Boxes not displaying. Fixed |
| ![](/img/bug.jpg) | Adding inputs in explorer redirects to explorer view with flashing images. Fixed |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Run prediction by ID in small batch, improving performance |
| ![](/img/bug.jpg) | Custom model predictions not displaying. Fixed |
| ![](/img/bug.jpg) | Custom model detections not displaying. Fixed |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Add file upload input button to explorer search bar, simplifying the UX for file uploads |
| ![](/img/new_feature.jpg) | Filter custom facial recognition bboxes using a sliding bar, adding easy thresholding to custom facial recognition models |
| ![](/img/improvement.jpg) | Search Bar allows file upload |
| ![](/img/improvement.jpg) | Remove Explorer App Overflow Menu for improved UX |

## Changelog 5.11

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Create a UI for personal access tokens making it easier for users to access their own apps and any apps where they have been added as collaborators |
| ![](/img/new_feature.jpg) | Updated /keys to work with PATs so that app-specific keys can be created programmatically. |
| ![](/img/bug.jpg) | Login \(user/PW\) has no rate limit/max attempts. Fixed |
| ![](/img/bug.jpg) | Remove all instances of worker\_id from explorer |
| ![](/img/bug.jpg) | When email link to verify my email address clicked, still see "verify your email" banner. Fixed |
| ![](/img/bug.jpg) ![](/img/enterprise.jpg) | API services do not function once Queue goes down and comes back up. Fixed. This makes on premise deployments more resilient to power failures. |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Add apps and keys scopes so they can be created with personal access tokens |
| ![](/img/improvement.jpg) ![](/img/enterprise.jpg) | Copy app count and last\_inputs added in app duplication |
| ![](/img/bug.jpg) | Fixed demo font syntax |
| ![](/img/bug.jpg) | Fixed details page header missing description |
| ![](/img/bug.jpg) | Added favicon for Portal |
| ![](/img/bug.jpg) | Unable to copy an app that has been shared via Collaborators. Fixed |
| ![](/img/bug.jpg) | Setting useCustomConfig isn't checked at login. Fixed |
| ![](/img/bug.jpg) | Collaboration apps have race condition where wrong user id is used |
| ![](/img/bug.jpg) | Stopped loading of collaborations for search demo/logged-out users |
| ![](/img/bug.jpg) | Return “All” scopes when listing available scopes so that you have that option when creating new keys. |
| ![](/img/bug.jpg) | Collaborators can not see workers. Fixed |
| ![](/img/bug.jpg) | Missing `Apps_Get` scope in session token auth caused creation of keys to fail temporarily. Fixed |
| ![](/img/bug.jpg) | List of missing scopes is not correct in error messages. Fixed |

### Data Management

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Optimize video detection frame rate on Front end |
| ![](/img/improvement.jpg) | Improve JSON serialization performance in our servers by using an optimized third party library |
| ![](/img/improvement.jpg) | Able to overwrite default max conn for Citus |
| ![](/img/improvement.jpg) | Rewrite input counting in the API to be more scalable and robust |
| ![](/img/bug.jpg) | Allow RegionInfo from SpireDetectEmbedResponse to contain Point when saving to DB |
| ![](/img/bug.jpg) | Unable to upload same file\(s\) through browse files. Fixed |
| ![](/img/bug.jpg) | ffmpeg can produce no frames for very short videos |
| ![](/img/bug.jpg) | Add Inputs/View Explorer does not display in new app anymore. Fixed |
| ![](/img/bug.jpg) | Clicking video thumbs in detail view does not reload a video. Fixed |
| ![](/img/bug.jpg) | Keyboard navigation in image details view highlights incorrect thumb |
| ![](/img/bug.jpg) | No Prompt when uploading an image to Explorer through URL. Fixed |
| ![](/img/bug.jpg) | Properly return error if `AddAssets` failed to insert into database |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Remove classification/detection toggle in image details view |
| ![](/img/bug.jpg) | Improved adding negatives to regions |
| ![](/img/bug.jpg) | Create one annotation for each bbox |
| ![](/img/bug.jpg) | Log capability added for annotation/search request/response |
| ![](/img/bug.jpg) | Eliminated error if no annotation to be deleted |
| ![](/img/bug.jpg) | Last concept used for bounding boxes is retained between apps. Fixed |
| ![](/img/bug.jpg) | The Add Positives / Add Negatives buttons on a Concept details view breaks portal |
| ![](/img/bug.jpg) | Custom facial recognition bboxes on grid view do not correlate. Fixed |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Ability to keep concepts sorted by alpha in Portal |
| ![](/img/new_feature.jpg) | Implement image crop model to make it possible to work in subregions of an image |
| ![](/img/new_feature.jpg) | Implement random sample model type, adding to fixed function feature set |
| ![](/img/improvement.jpg) | Update training templates to have more straightforward names and more friendly defaults |
| ![](/img/improvement.jpg) | Fix the WorkflowInput field name in proto to workflow\_input |
| ![](/img/improvement.jpg) | Allow models that need outputs from previous nodes in a workflow to have access to those outputs to support chaining complex graphs of models |
| ![](/img/bug.jpg) | Confusion matrix predicted/true are swapped in evaluation results. Fixed |
| ![](/img/bug.jpg) | Fixed generalModel imports and optimize video click handlers with useCallback hooks |
| ![](/img/bug.jpg) | Fix for selectEmbedModelVersionId in detection apps |
| ![](/img/bug.jpg) | Drawing annotations: wrong embed model version id |
| ![](/img/bug.jpg) | Made custom training evaluations for large models stable. |
| ![](/img/bug.jpg) | Training progress is saved too frequently, causing very slow training |
| ![](/img/bug.jpg) | Return friendlier errors for incorrect parameters passed to templates |
| ![](/img/bug.jpg) | Fixed a bug in tracing setup for custom trainer and evaluator |
| ![](/img/bug.jpg) | Some models were operating slowly because of lack of resources. Fixed |
| ![](/img/bug.jpg) | Training System failed to train some layers. Fixed |
| ![](/img/bug.jpg) | Prevent users from evaluating models that are not trainable |
| ![](/img/bug.jpg) | Fixed node ID validation logic in Bug in workflows |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Add colors to differentiate region results |
| ![](/img/bug.jpg) | Cannot view workflow results in a face app. Fixed |
| ![](/img/bug.jpg) | Video spire tests are not running correctly. Fixed |
| ![](/img/bug.jpg) | Video processing fails with 'caseids' error. fixed |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Add click to search metadata attributes in image details sidebar |
| ![](/img/new_feature.jpg) | Implement visual search in another app as a model type you can add to a workflow |
| ![](/img/bug.jpg) | Search bar missing in some cases. Fixed |
| ![](/img/bug.jpg) | Region Searches within Search Bar still use crop coordinates instead of base64 bytes. Fixed |
| ![](/img/bug.jpg) | Click Search button icons on Thumbs not working for localized search. Fixed |
| ![](/img/bug.jpg) | Disable all search by click handlers in Portal for Text Apps |
| ![](/img/bug.jpg) | Disable "hide all positively labeled" inputs button for NLP until search works |
| ![](/img/bug.jpg) | Scroll active thumb into view in image details carousel |
| ![](/img/bug.jpg) | Render Video Assets in Search Bar |
| ![](/img/bug.jpg) | Editing geo/json search items no longer work after adding the search bar tooltip. Fixed |
| ![](/img/bug.jpg) | TypeError: Cannot read 'get' of undefined when clicking image thumbnails in Explorer search bar. Fixed |
| ![](/img/bug.jpg) | Explorer Visibility in small resolution screen improved |

## Changelog 5.10

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### Accounts

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Create delete email endpoints in v2 to finally get off old internal endpoints to streamline operations |
| ![](/img/new_feature.jpg) | Create Patch, Delete, Get CreditCards endpoint in v2 APIs to finally get off old internal endpoints to streamline operations |
| ![](/img/improvement.jpg) | Improved billing for collaborators |
| ![](/img/bug.jpg) | PostVerifyEmail error causing some issues not being able to verify their email addresses upon sign-up. Fixed |
| ![](/img/bug.jpg) | Fixed flaky email verification integration test to provide more stability to sign-up process |
| ![](/img/bug.jpg) | Fixed a link to a non-public version of our API used for development purposes which led to a lot of login issues for users who landed there |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Created display for scopes on collaborator invitations, allowing users to easily understand and control the scope of access allowed for app collaborators |
| ![](/img/new_feature.jpg) | Introduced Collaborators and Collaborations endpoints in API and UIs in Portal |
| ![](/img/new_feature.jpg) | Add ability to upload inputs from App Details screen in Portal |
| ![](/img/improvement.jpg) | Created collaboration tab in Portal, making it easy to add collaborators to apps |
| ![](/img/improvement.jpg) | Created display to show the user who invited you to collaborate on an app |
| ![](/img/improvement.jpg) | Update email phrases for collaborator invitations. After successful sign-up, the user is now redirected to the app's dashboard in Portal |
| ![](/img/bug.jpg) | Fixed issue with concept counts in some apps |
| ![](/img/bug.jpg) | Clicking pencil icon to edit an API Key in Portal crashed apps. Fixed |

### Data Management

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | PATCH /inputs needs to check status of asset before patching |
| ![](/img/improvement.jpg) | Removed sync DELETE /inputs after runtime config tested |
| ![](/img/improvement.jpg) | Changed POST /inputs to be async always to simplify processing of workflows after API client tests updated |
| ![](/img/improvement.jpg) | Added pagination to clusters making for easier data management |
| ![](/img/bug.jpg) | Sporadic inability to delete any inputs via Portal or in bulk via the API |
| ![](/img/bug.jpg) | Numerous third party security fixes under the hood during ongoing upgrades |
| ![](/img/bug.jpg) | Fix 40012 status caused by parallel deletes and adds having a race condition |
| ![](/img/bug.jpg) | Update status\_changed\_at when deleting inputs so we can better track changes |
| ![](/img/bug.jpg) | Cache the input counts so that apps can display them in Portal efficiently |
| ![](/img/bug.jpg) | Handle killing URL downloading if it is processing for more than 60s. This will make URL processing much more reliable |
| ![](/img/bug.jpg) | Return an error if a user sends YouTube video URL as that is not a valid URL to a video we can download |
| ![](/img/bug.jpg) | Prevent PostInputs from creating inputs with a user-provided Input.ID that contains a colon |
| ![](/img/bug.jpg) | Video calls failed if URLs contain parameters after the file type. Fixed |
| ![](/img/bug.jpg) | Failed to resolve DNS MX record in URL down-loader which effected some downloads. Fixed |
| ![](/img/bug.jpg) | Investigate why some re-hosted s3 links are no longer working |
| ![](/img/bug.jpg) | Getting input counts was broken in some apps, reporting zero, which caused Portal to add an input view to display always |
| ![](/img/bug.jpg) | Debug UnicodeErrors in URL downloading to fix URLs with Unicode characters |
| ![](/img/bug.jpg) | Fix the poor handling of video too large error message |
| ![](/img/bug.jpg) | Unable to batch delete inputs from time to time has been fixed |
| ![](/img/bug.jpg) | Media processor video handling was having errors with decoding some videos |
| ![](/img/bug.jpg) | Delete Image Button doesn't work in some scenarios |
| ![](/img/bug.jpg) | Fixed support for webp image format so it is available again |

### Annotate

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Deploy General Detection Beta Model to recognize multiple objects with bounding boxes. |
| ![](/img/new_feature.jpg) | Deployed new face detector for improved face detection performance over images and video |
| ![](/img/new_feature.jpg) | Created custom training enhancements that handle negatives better for improved model performance |
| ![](/img/new_feature.jpg) | Created evaluation metrics for custom facial recognition in backend for improved facial recognition performance |
| ![](/img/improvement.jpg) | Topological sort for workflows for scheduling a sequence based on dependencies |
| ![](/img/improvement.jpg) | Cleaned up duplicate models in workflow model list |
| ![](/img/improvement.jpg) | Deployed clarifai/main general v1.5 in concept model |
| ![](/img/improvement.jpg) | Create Pixel Training Hyperparameter Help Guide |
| ![](/img/improvement.jpg) | Improved accuracy of annotation counts, improving the user experience when annotating inputs |
| ![](/img/bug.jpg) | If an image is tagged with a concept that is not in the model, training fails due to KeyError, this is fixed |
| ![](/img/bug.jpg) | Fix detection labeling bug where previous images image ratio is used which would cause display issues |
| ![](/img/bug.jpg) | We have updated Portal to scale to a large number of concepts with much lower resource usage |
| ![](/img/bug.jpg) | Investigate face bounding box probabilities consistency to improve user experience |
| ![](/img/bug.jpg) | Bounding box creation canvas in Portal was breaking on resize of the window |
| ![](/img/bug.jpg) | Model |
| ![](/img/bug.jpg) | Cleaned up duplicate models in the workflow model list, so that you no longer see two General models |
| ![](/img/bug.jpg) | Unintended behavior for private model version IDs for certain customers has been fixed |
| ![](/img/bug.jpg) | Models referencing deleted backends should be marked as deleted |
| ![](/img/bug.jpg) | The latest version of our general model wasn't always default, now it is |
| ![](/img/bug.jpg) | Fixed a bug with face recognition evaluations. |
| ![](/img/bug.jpg) | Deleted Concepts Persisted in face recognition models. Not anymore! |
| ![](/img/bug.jpg) | Inability to see whether a large model is training and making progress, or hung has been addressed to better support our customers |
| ![](/img/bug.jpg) | Model won't train in some apps with no positive examples issue has been resolved |
| ![](/img/bug.jpg) | Fixed issues with color models failing for a short period of time |
| ![](/img/bug.jpg) | Fixed list of models available to workflows to only show a single General model |

### Predict

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Return custom detection evaluations through the GO API |
| ![](/img/improvement.jpg) | Improved cluster page performance |
| ![](/img/bug.jpg) | Investigate health checks killing a prediction backend service, which could affect some predictions in the API |
| ![](/img/bug.jpg) | Workflow predict sometimes was failing with 98012 status code. Many fixes here should reduce that |
| ![](/img/bug.jpg) | Workflow Predict called the wrong model sometimes. Not any more! |
| ![](/img/bug.jpg) | Video playback out of sync with detections in our demos |
| ![](/img/bug.jpg) | Fixed issues with regions predicted on inputs would be carried over between inputs in Portal |
| ![](/img/bug.jpg) | Fixed the flaky face recognition tests to ensure stability of our face recognition product |
| ![](/img/bug.jpg) | Face Detection backends were running out of memory for some predictions, this has been resolved |
| ![](/img/bug.jpg) | Return more descriptive error msg for post metric endpoint |

### Search

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Added helper text/suggestions to improve Portal user experience |
| ![](/img/improvement.jpg) | Header Search return app\_owner's user info in collaboration endpoints |
| ![](/img/bug.jpg) | Explorer Search Bar - Clicking the green/red circle icons didn't reliably detect click, now it does! |
| ![](/img/bug.jpg) | Portal not showing the correct number of results in concept search. Fixed. |
| ![](/img/bug.jpg) | Left/right arrows in single image view don't switch between images with regions. Fixed |
| ![](/img/bug.jpg) | Fixed carousel thumbnail clicks wiping query params / trigger new search |
