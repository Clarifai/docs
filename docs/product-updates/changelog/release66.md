---
description: Changelog for Clarifai Release 6.6
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -9
pagination_next: product-updates/changelog/release67
pagination_prev: product-updates/changelog/release65
---


# Release 6.6

## Changelog 6.6

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### API

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Integrate Python functions service with API |
| ![](/img/improvement.jpg) | List available model types through API |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fix video error from new face cluster model in staging env |
| ![](/img/bug.jpg) | 21312 Ground truth data caseids must be nonempty and unique. Fixed |
| ![](/img/improvement.jpg) | Update deep training to list the ModelTypes |
| ![](/img/improvement.jpg) | Move model\_metadata to better place in protos. |
| ![](/img/improvement.jpg) | Generalize the domex-visual-searcher model type |
| ![](/img/improvement.jpg) | List available model types from backend services that provide models. |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Fixed bug in submitting finished Labeler Task |
| ![](/img/bug.jpg) | Select all concepts checkbox can be de-synced from actual concepts badges. Fixed |
| ![](/img/bug.jpg) | Disable Create Task button if not app owner |
| ![](/img/bug.jpg) | Search by task\_id returns incorrect data |
| ![](/img/bug.jpg) | Removed model creation from concept creation action in portal |
| ![](/img/bug.jpg) | Video scrubber cannot be moved. Fixed |
| ![](/img/bug.jpg) | Fixed ability to delete interpolation tracks \(you can only delete frames at this time\). |
| ![](/img/bug.jpg) | Worker ids used instead of names in report overview in stats view. Fixed |
| ![](/img/bug.jpg) | Y-axis on labels created stats page is wrong. Fixed |
| ![](/img/bug.jpg) | In task creation, adding concepts should be simple to click all the options right away. Fixed |
| ![](/img/bug.jpg) | Toggling concept visibility doesn't affect previously hidden child region. Fixed |
| ![](/img/bug.jpg) | Leftover |
| ![](/img/bug.jpg) | If reviewer is not a collaborator, UI sends empty reviewer id back instead of raising error. Fixed |
| ![](/img/bug.jpg) | Bounding box disappears on resizing. Fixed |
| ![](/img/bug.jpg) | While adjusting bounding box, it creates an additional bounding box over no object. Fixed |
| ![](/img/bug.jpg) | Using Play button brings up "Oops" page. Fixed |
| ![](/img/bug.jpg) | Error on opening Video Labeler. Fixed |
| ![](/img/bug.jpg) | Labeler sidebar interaction bugs and unresponsiveness \(due to lack of optimistic UI\). Fixed |
| ![](/img/bug.jpg) | Newly drawn object disappears from canvas after drawing, and reappears after API response. Fixed |
| ![](/img/bug.jpg) | Infinite loading in Labeler Mode for app without any inputs. Fixed |
| ![](/img/bug.jpg) | Use name field for tasks in Labeler admin. Fixed |
| ![](/img/bug.jpg) | Clicking labeler icon crashes. Fixed |
| ![](/img/bug.jpg) | Moving bounding box around repeatedly creates a race condition, shows error notification and duplicate box. Fixed |
| ![](/img/bug.jpg) | Explorer inputs stale state. Fixed |
| ![](/img/bug.jpg) | Diagnose issues affecting overall hanging/speed/performance of Labeler |
| ![](/img/bug.jpg) | Carousel thumbnails not showing up in Labeler. Fixed |
| ![](/img/bug.jpg) | Not able to create overlapping bounding boxes. Fixed |
| ![](/img/bug.jpg) | When user adds mass metadata in Explorer, the UI says success but metadata does not persist. Fixed |
| ![](/img/bug.jpg) | Create annotations while creating task. Fixed |
| ![](/img/bug.jpg) | Labeler board showing wrong task type. Fixed |
| ![](/img/bug.jpg) | Polygon annotations break Explorer. Fixed |
| ![](/img/bug.jpg) | Concept autocomplete in Labeler task creation is showing clarifai/main concepts. Fixed |
| ![](/img/bug.jpg) | Should not be allowed to create a task with no concepts if my app has no concepts. Fixed |
| ![](/img/bug.jpg) | Fixed image tools state |
| ![](/img/bug.jpg) | Restricted tasks to only the assigned users |
| ![](/img/bug.jpg) | Add validation to TaskForm’s concept field |
| ![](/img/bug.jpg) | Removed all instances of worker\_id from Explorer |
| ![](/img/bug.jpg) | Create one annotation for each bbox |
| ![](/img/bug.jpg) | 98011 panic on ListTasks. Fixed |
| ![](/img/bug.jpg) | App names no longer display in Explorer. Fixed |
| ![](/img/bug.jpg) | Empty Annotations are not displaying after drawing a new bounding box until after refreshing the page. Fixed |
| ![](/img/bug.jpg) | Drawing a new bounding box in Explorer after previously labeling a region display an error. Fixed |
| ![](/img/bug.jpg) | Video search results do not play at the most relevant video time. Fixed |
| ![](/img/bug.jpg) | Change text upload UI to support moderation workflow |
| ![](/img/bug.jpg) | Change object key lookup in boundingBoxContainer to use lodash/get |
| ![](/img/bug.jpg) | Submitting Task for Review break Portal. Fixed |
| ![](/img/bug.jpg) | Labeling a region on an asset with multiple detected regions will put the child annotation in the wrong group in Explorer's sidebar. Fixed |
| ![](/img/bug.jpg) | ConvertToBoundingBoxRegion function breaks Explorer when annotation information has not loaded at time of render. Fixed |
| ![](/img/bug.jpg) | Video Frame Annotating in Explorer throws errors. Fixed |
| ![](/img/bug.jpg) | When drawing a new bounding box, Base64 string for video annotations shows the wrong regions. Fixed |
| ![](/img/bug.jpg) | Fixe 10MB issue with video uploads |
| ![](/img/bug.jpg) | Detection Regions and Indexes are thrown off on video assets. Fixed |
| ![](/img/bug.jpg) | Video Search Results still on showing Inputs. Fixed |
| ![](/img/bug.jpg) | DetailsPageHeader adds 2.25rem margin to the DetailsPageBody. Fixed |
| ![](/img/bug.jpg) | Video Interpolation in Labeler breaks dev. Fixed |
| ![](/img/bug.jpg) | Redux is no longer calculating the sample\_ms rate, preventing bounding boxes from rendering. Fixed |
| ![](/img/bug.jpg) | Fixed video pause error when navigating between videos |
| ![](/img/bug.jpg) | ImagePile in Labeler Task View does not display image thumbs due to extraneous object nesting. Fixed |
| ![](/img/bug.jpg) | Remove warning error from console for immutable passed in props to SearchGrid.js |
| ![](/img/bug.jpg) | Post annotation to detection region should use region id in portal. Fixed |
| ![](/img/bug.jpg) | Delete app button in app details takes you to blank page. Fixed |
| ![](/img/bug.jpg) | Incorrect bbox/label numbers displayed in image. Fixed |
| ![](/img/bug.jpg) | Multiple video thumbs selected in search results when selecting one thumb. Fixed |
| ![](/img/improvement.jpg) | Improve Labeler mode window resizing. |
| ![](/img/improvement.jpg) | W and E hotkeys for image labelling to go left/right. |
| ![](/img/bug.jpg) | Polygon annotations break Explorer. Fixed. |
| ![](/img/bug.jpg) | Polygons regions don’t appear when panning and zooming. Fixed. |
| ![](/img/improvement.jpg) | Allow users to create concepts on task create view. |
| ![](/img/bug.jpg) | Fixed task list item count query. |
| ![](/img/improvement.jpg) | Utilising new task endpoints to Create tasks and integrate to show tasks in Portal. |
| ![](/img/bug.jpg) | LabelerPage refresh error. Fixed. |
| ![](/img/bug.jpg) | Should not be allowed to create a task with no concepts if my app has no concepts. Fixed. |
| ![](/img/bug.jpg) | Unknown page Error. Complete interpolation of an object doesn't show bbox. Complete tracking of a box will disappear from the video. Fixed. |
| ![](/img/bug.jpg) | Fixed carousel padding. |
| ![](/img/bug.jpg) | Labeler board showing wrong task type. Fixed. |
| ![](/img/improvement.jpg) | Integrate worker/reviewer side of Labeler. |
| ![](/img/improvement.jpg) | Add 'name' field to new Tasks. |
| ![](/img/bug.jpg) | Create annotations while creating task. |
| ![](/img/bug.jpg) | Carousel thumbnails not showing up in Labeler. Fixed. |
| ![](/img/improvement.jpg) | No image clearing/loading indicator in Labeler. Fixed. |
| ![](/img/bug.jpg) | Use name field for tasks in Labeler administration. |
| ![](/img/bug.jpg) | Bulk labeling value does not update in store upon labeling. Fixed. |
| ![](/img/improvement.jpg) | Record time per annotation and per input to /stats/values in Labeler mode of Portal. |
| ![](/img/improvement.jpg) | Query and display stats across workers per task for time and count of annotations. |
| ![](/img/bug.jpg) | Concept autocomplete in Labeler task creation is showing clarifai/main concepts. Fixed. |
| ![](/img/new_feature.jpg) | Implement polygon task type in Labeler. |
| ![](/img/bug.jpg) | Applying filters in Portal breaks bulk labeling / unlabeling. Fixed. |
| ![](/img/bug.jpg) | Unable to bulk-label annotations. Fixed. |
| ![](/img/improvement.jpg) | Change submit to "Complete Task" in Labeler page and add progress bar as it's working. |
| ![](/img/improvement.jpg) | Allow Patching region annotations in Labeler mode. |
| ![](/img/improvement.jpg) | Add AI assist thresholding. |
| ![](/img/improvement.jpg) | Add ability to set annotation\_info in the annotation writer |
| ![](/img/bug.jpg) | `annotation_info` should be a valid JSON in Model Mode. Fixed. |
| ![](/img/improvement.jpg) | Upgrade gulp and node to latest version for testing-library support |
| ![](/img/improvement.jpg) | Write PropType declarations for componens/ConceptListTable |
| ![](/img/improvement.jpg) | Enable collapse behavior in sidebar concepts |
| ![](/img/improvement.jpg) | Create atomic reusable  sidebar components |
| ![](/img/improvement.jpg) | Integrate React Testing Library |
| ![](/img/improvement.jpg) | Konva: Image centering, zooming, panning |
| ![](/img/improvement.jpg) | Move toolbar logic to react context |
| ![](/img/improvement.jpg) | Refactor TaskForm related thunks to sagas |
| ![](/img/improvement.jpg) | \[Rearch\]Scaffold Labeler Redux in a new nested state slice & Implement Sagas |
| ![](/img/improvement.jpg) | \[P2\] Task id is used in dropdown of stats tasks rather than task.name |
| ![](/img/improvement.jpg) | \[P0\]Show taskId at task list |
| ![](/img/improvement.jpg) | Move region visibility state to its own React Context |
| ![](/img/improvement.jpg) | Get sidebar list data directly from redux |
| ![](/img/improvement.jpg) | \[P1\] Don't hide task form if error occurs |
| ![](/img/improvement.jpg) | Remove delay of annotation request |
| ![](/img/improvement.jpg) | Remove animation for showing concepts on right side |
| ![](/img/improvement.jpg) | Perf: only fetch input predictions/annotations if user stays on image, not while navigating |
| ![](/img/improvement.jpg) | Get Labeler internal features ready for internal users |
| ![](/img/improvement.jpg) | Offload annotation creation to backend |
| ![](/img/improvement.jpg) | allow reviewers update annotations |
| ![](/img/improvement.jpg) | No image clearing/loading indicator in Labeler |
| ![](/img/improvement.jpg) | Controls for resizing bounding boxes need to be more visible |
| ![](/img/improvement.jpg) | Fabric rendering to be real-time; sync from API in background |
| ![](/img/improvement.jpg) | make tasks endpoint public |
| ![](/img/improvement.jpg) | list task by worker id/reviewer id |
| ![](/img/improvement.jpg) | Add 'name' field to new Tasks |
| ![](/img/improvement.jpg) | Integrate worker/reviewer side of labeller |
| ![](/img/improvement.jpg) | Integrate and Implement task deletion using new endpoints |
| ![](/img/improvement.jpg) | Utilising new task endpoints to Create tasks and integrate to show tasks at portal |
| ![](/img/improvement.jpg) | Integrate and utilise new CRUD endpoints in portal |
| ![](/img/improvement.jpg) | Allow users to create concepts on task create view |
| ![](/img/improvement.jpg) | Add empty CRUD endpoints for tasks |
| ![](/img/improvement.jpg) | Make polygons a separate task type |
| ![](/img/improvement.jpg) | Add AI assist thresholding |
| ![](/img/improvement.jpg) | W and E hotkeys for image labelling to go left/right. |
| ![](/img/improvement.jpg) | Improve labeler mode window resizing. |
| ![](/img/improvement.jpg) | Allow Patching region annotations in labeler mode. |
| ![](/img/improvement.jpg) | crank up internal message size to handle larger videos with more outputs |
| ![](/img/improvement.jpg) | Introduce stats collection APIs for worker stats. |
| ![](/img/improvement.jpg) | Implement /tasks CRUD in API. |
| ![](/img/improvement.jpg) | Add frame.id to API as well as track id. |
| ![](/img/improvement.jpg) | Remove ‘alt’ from hotkeys, just use letters and arrows straight up |
| ![](/img/improvement.jpg) | Update image tool icons |
| ![](/img/improvement.jpg) | Add support for fields under ENUM values during model creation |
| ![](/img/improvement.jpg) | Implement Dynamic model types |
| ![](/img/improvement.jpg) | Ungrouped Annotations/New Annotation Regions should display at the top of Explorer's Detections List |
| ![](/img/improvement.jpg) | Change explorer to use sample\_ms instead from network response instead of deducing the value |
| ![](/img/improvement.jpg) | Hide Workflow List Elements if below Range Slider value |
| ![](/img/improvement.jpg) | Modify Annotating from Custom Model Predictions to post new annotations. |
| ![](/img/improvement.jpg) | Update model mode with new designs |
| ![](/img/improvement.jpg) | Refactor ImageUtils.js file to individual functions instead of one object |
| ![](/img/improvement.jpg) | Added threshold search result in Portal |
| ![](/img/improvement.jpg) | Update media player icons |
| ![](/img/improvement.jpg) | Display timestamp bar in Explorer grid view for video results |
| ![](/img/improvement.jpg) | Concept relation should autocomplete concept name |
| ![](/img/new_feature.jpg) | Send email to workers when they are added to task |
| ![](/img/new_feature.jpg) | Assigning a worker or reviewer to a task sends an email |
| ![](/img/new_feature.jpg) | Apps with empty workflow should allow all task types \(concepts, bounding box, polygon\) during task creation |
| ![](/img/new_feature.jpg) | Edit Task feature |
| ![](/img/new_feature.jpg) | Support consensus review settings |
| ![](/img/new_feature.jpg) | Support detection tasks |
| ![](/img/new_feature.jpg) | Create new Single Image View and Image Tools |
| ![](/img/new_feature.jpg) | Task view UI for workers |
| ![](/img/new_feature.jpg) | Introduce AWAITING\_REVIEW status for annotations |
| ![](/img/new_feature.jpg) | Split tasks admin view into tabs |
| ![](/img/new_feature.jpg) | Test out idea behind tasks as saved searches and POST /annotations iterations |
| ![](/img/new_feature.jpg) | Implement search by annotation.status in backend |
| ![](/img/new_feature.jpg) | Search by images or video type in the right hand side bar of explorer's grid view |
| ![](/img/new_feature.jpg) | Video Crop Region Search |
| ![](/img/new_feature.jpg) | video thumbs display relevant frame in search |

### Workflows

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Display workflow detection predictions on the main/large image in Portal |
