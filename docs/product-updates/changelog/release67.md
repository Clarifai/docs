---
description: Changelog for Clarifai Release 6.7
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -10
pagination_next: product-updates/changelog/release68
pagination_prev: product-updates/changelog/release66
---


# Release 6.7

## Changelog 6.7

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![](/img/new_feature.jpg) | ![](/img/improvement.jpg) | ![](/img/bug.jpg) | ![](/img/enterprise.jpg) |

### API

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Don't allow updating task workers |
| ![](/img/improvement.jpg) | Don't create duplicated task annotations |
| ![](/img/improvement.jpg) | Fix detection evals showing and too many metrics calls |
| ![](/img/improvement.jpg) | Fix pillow installs for webp |
| ![](/img/improvement.jpg) | Add enum for embed model version id field type. |
| ![](/img/improvement.jpg) | Don't show model types for backends that aren't responding. |
| ![](/img/improvement.jpg) | Clean up output\_info.data path |
| ![](/img/improvement.jpg) | Add model\_type\_id to Model protos. |
| ![](/img/improvement.jpg) | Add /models/types/{model\_type\_id} endpoint |
| ![](/img/improvement.jpg) | Prevent models\_versions.is\_public from every being null. |
| ![](/img/bug.jpg) | model mode types that are internal only are being returned. |
| ![](/img/improvement.jpg) | Create Labeling Order Object and send email to datalabeling@clarifai.com each time backend receives an Labeling Order Object & makes datalabeling a super user |
| ![](/img/improvement.jpg) | App reindex |
| ![](/img/improvement.jpg) | Patchable multi-embed workflows with re-index |

### Model

| Status | Details |
| :--- | :--- |
| ![](/img/bug.jpg) | Demographics model is now broken in model gallery. |
| ![](/img/improvement.jpg) | Deprecate model.type from model mode |
| ![](/img/improvement.jpg) | Update model gallery design |
| ![](/img/improvement.jpg) | embed\_model\_version\_id should be a dropdown |

### Portal

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Add versioning to repo, redux, on screen |
| ![](/img/improvement.jpg) | Allow reviewer to modify annotations during review process. |
| ![](/img/new_feature.jpg) | Store entire canvas state in redux/context, and drive canvas updates by central store |
| ![](/img/improvement.jpg) | batch v2 shape events by only 1 PATCH/DELETE request |
| ![](/img/improvement.jpg) | Delete functionality v2 |
| ![](/img/improvement.jpg) | Completely detach labeler rendering from server syncing process to enable background syncing |
| ![](/img/improvement.jpg) | Input navigating functionality in v2 |
| ![](/img/improvement.jpg) | Set new regionId as "selected" shape if user has selected a transient shape during async updates |
| ![](/img/improvement.jpg) | Region edit + delete API sync |
| ![](/img/improvement.jpg) | Fix annotation denormalizer to rehydrate actual concept value |
| ![](/img/improvement.jpg) | Create new region in labeler v2 |
| ![](/img/improvement.jpg) | Logic to reduce batched drawing events to least number of API operations |
| ![](/img/improvement.jpg) | Implement new selectors for regions in v2 |
| ![](/img/improvement.jpg) | Normalize Annotations & Regions data for redux storage |
| ![](/img/improvement.jpg) | Nest labelerTasks reducer inside labeler reducer |
| ![](/img/improvement.jpg) | Konva: Concept Region drawing implementation |
| ![](/img/improvement.jpg) | Konva: Implement Rect Transformation |
| ![](/img/improvement.jpg) | Implement a futureproof schema for labeler interaction events |
| ![](/img/improvement.jpg) | Move to event-driven design & have the ability to batch updates using custom logic |
| ![](/img/improvement.jpg) | Create a single Sidebar component for all Labeling types, make children configurable |
| ![](/img/improvement.jpg) | Remove all props unnecessarily passed from LabelerPage to deep children and make components get props from Redux only |
| ![](/img/improvement.jpg) | Remove all logic from components to sagas for higher level orchestration of features |
| ![](/img/bug.jpg) | Video selector improvements & test updation |
| ![](/img/bug.jpg) | Can only save 50 annotations on an image {Usability} |
| ![](/img/bug.jpg) | Konva: resizing BBox below minimum size and "crossing over" makes things awry |
| ![](/img/bug.jpg) | LabelerPage complete re-render of all components on mouseHover, mousMove \(img attached\) |
| ![](/img/bug.jpg) | Cypress script doesn't terminate webpack-dev-server child process |
| ![](/img/bug.jpg) | Cypress pre-run script doesn't check if dev server is already running |
| ![](/img/bug.jpg) | Create Unit+Integration testing framework |
| ![](/img/bug.jpg) | Integrate headless Cypress with build testing |
| ![](/img/new_feature.jpg) | Switch to react-konva for performant canvas rendering |
| ![](/img/improvement.jpg) | Add task id to task list |
| ![](/img/improvement.jpg) | Panning functionality improvements |
| ![](/img/bug.jpg) | Lock video playback and interpolation to fps |
| ![](/img/bug.jpg) | Annotations created with interpolation seem to have incorrect frame indices |
| ![](/img/bug.jpg) | Bounding Boxes and Concepts inconsistent during video playback {Usability} |
| ![](/img/bug.jpg) | While annotating video, interpolation freezes and all annotations disappear |
| ![](/img/bug.jpg) | Boxes/Interpolation objects are not saving after task submission |
| ![](/img/improvement.jpg) | Display task instructions to workers in labeler mode |
| ![](/img/improvement.jpg) | Add infinite scroll loading to labeler carousel |
| ![](/img/bug.jpg) | Not incrementing onNext and onPrev pages in Labeler Carousel |
| ![](/img/improvement.jpg) | Display only minimal log in Portal react app |
| ![](/img/improvement.jpg) | Update Model mode to use the GET /models/types endpoint |
| ![](/img/improvement.jpg) | Add list/grid toggle in model mode on all view |
| ![](/img/improvement.jpg) | Collectors UI should use the layout similar to ModellingMode/LabellerMode |
| ![](/img/bug.jpg) | Bulk add concepts to region annotations in app with multi-embed base workflow |
| ![](/img/bug.jpg) | Profile page crashes on load |
| ![](/img/bug.jpg) | Model mode array of concepts should be unique |
| ![](/img/bug.jpg) | Model creation/edit bugs |
| ![](/img/bug.jpg) | New Collector page not scrollable |
| ![](/img/bug.jpg) | App Workflows - Unable to update model version for custom models |
| ![](/img/new_feature.jpg) | Display Created At Date in App Grid View |
| ![](/img/new_feature.jpg) | Support .txt files from local file browser |
| ![](/img/new_feature.jpg) | Support uploading of multiple video assets as well as image and video assets within the same CSV file |
| ![](/img/new_feature.jpg) | Add better user feedback for uploading text assets |
| ![](/img/new_feature.jpg) | Upload Text by CSV for NLP |
| ![](/img/improvement.jpg) | Final NLP MVP Feature Changes |
| ![](/img/improvement.jpg) | Remove 0 area detection filtering from frontend code |
| ![](/img/improvement.jpg) | Modify accepted CSV upload format so every column corresponds to a network request field |
| ![](/img/improvement.jpg) | Resolve final bugs with bounding box indexes |
| ![](/img/improvement.jpg) | Prevent uploading image and video asset types to Text apps |
| ![](/img/improvement.jpg) | No Visual Feedback for Text input Upload |
| ![](/img/improvement.jpg) | Support Uploading Files through the OS File Browser for NLP |
| ![](/img/bug.jpg) | Custom Model Prediction Bounding Boxes are misaligned from the Detections Bar |
| ![](/img/bug.jpg) | Workflow Tab should display and load on initial view for text apps |
| ![](/img/bug.jpg) | Unable to navigate between text assets within explorer's asset detail view |
| ![](/img/bug.jpg) | CSV uploads not parsing metadata and concepts |
| ![](/img/bug.jpg) | Explorer's Advanced Search does not support searching by concepts |
| ![](/img/bug.jpg) | Training a classification model no longer display anything within the Custom Model Predictions tab |
| ![](/img/improvement.jpg) | create annotation CUD sagas for labeler v2 |
| ![](/img/improvement.jpg) | Don't create task annotations in frontend |
| ![](/img/bug.jpg) | Form: Input Source showing auto complete options from other apps |
| ![](/img/bug.jpg) | Rich text instructions icon bugs |
| ![](/img/bug.jpg) | Task create form doesnt force you to set a reviewer if you specify manual review |
| ![](/img/bug.jpg) | TypeError: val.add is not a function |
| ![](/img/bug.jpg) | Fix autocomplete when user selects "All inputs" for selecting inputs in task creation |
| ![](/img/bug.jpg) | Error pops up when collaborator tries to edit task |
| ![](/img/bug.jpg) | When I attempt to edit an existing labeling task t... |
| ![](/img/bug.jpg) | Page not responding \[Usability\] |
| ![](/img/bug.jpg) | \[Explorer\] concept thumbnails aren't displaying from model details view |
| ![](/img/bug.jpg) | Concept Detail View displays incorrect assets |
| ![](/img/improvement.jpg) | Add all concepts button to model mode forms |
| ![](/img/bug.jpg) | Concept Autocomplete in Model Mode doesn't always display |

### Workflows

| Status | Details |
| :--- | :--- |
| ![](/img/new_feature.jpg) | Allow run workflow and search embedding from embed model in workflow |

### Applications

| Status | Details |
| :--- | :--- |
| ![](/img/improvement.jpg) | Metadata Namespacing for Clarifai Apps |
| ![](/img/bug.jpg) | App details page should send a user to models page to create models rather than using modal |
