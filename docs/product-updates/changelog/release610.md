---
description: Changelog for Clarifai Release 6.10
# For versioning, we use negative position so that the oldest versions are displayed at the bottom. Any time you add a new version, increase the position by -1.
sidebar_position: -13
pagination_next: product-updates/changelog/release611
pagination_prev: product-updates/changelog/release69
---

# Release 6.10

| New Feature | Improvement | Bug Fix | Enterprise Only |
| :---: | :---: | :---: | :---: |
| ![new-feature](/img/new_feature.jpg) | ![improvement](/img/improvement.jpg) | ![bug](/img/bug.jpg) | ![enterprise](/img/enterprise.jpg) |

## Scribe

| Status | Details |
| :--- | :--- |
| ![bug](/img/bug.jpg) | When a reviewer opens the "For Review" tab, determine whether there is work to be reviewed |
| ![improvement](/img/improvement.jpg) | Remove Labeler V1 |
| ![bug](/img/bug.jpg) | Keybindings not working when buttons are clicked |
| ![bug](/img/bug.jpg) | Interpolation transforms not working |
| ![bug](/img/bug.jpg) | Update Search API Endpoint |
| ![bug](/img/bug.jpg) | Prediction bounding box shows for concepts not included in task |
| ![bug](/img/bug.jpg) | Image filters don’t work |
| ![bug](/img/bug.jpg) | AI Assist should not create predictions with 0% confidence |
| ![bug](/img/bug.jpg) | AI Assist is creating annotation but is not auto marking the green check box or the red "X" |
| ![bug](/img/bug.jpg) | AI Assist sends incorrect app ID when fetching workflows |
| ![bug](/img/bug.jpg) | Full assignment strategy results in error during review |
| ![improvement](/img/improvement.jpg) | Tests: Labeler Interpolation Sagas |
| ![improvement](/img/improvement.jpg) | Tests: Labeler Inputs Sagas |
| ![improvement](/img/improvement.jpg) | Tests: Labeler Canvas Sagas |
| ![improvement](/img/improvement.jpg) | Show Sentry Event Id for Saga Errors |
| ![bug](/img/bug.jpg) | Labeler AI Assist Breaking for custom User ID |
| ![bug](/img/bug.jpg) | Unable to load/access "Assigned to me" labeler tasks |
| ![bug](/img/bug.jpg) | Only able to draw one bounding box while using interpolation |
| ![bug](/img/bug.jpg) | Brightness, Saturation and Invert doesn't change |
| ![bug](/img/bug.jpg) | Task Edit form doesn't show the correct FPS value from the task object |
| ![bug](/img/bug.jpg) | Task Form shows warning when creating a new task |
| ![bug](/img/bug.jpg) | Place Order button remains on page when switching back from LaaS option to self-labeling |
| ![improvement](/img/improvement.jpg) | Tests: Labeler UI Sagas |
| ![improvement](/img/improvement.jpg) | When "My own Labelers" is clicked. All fields are not shown back |
| ![improvement](/img/improvement.jpg) | Testing LabelOrder reducer - user journey |
| ![improvement](/img/improvement.jpg) | Change cancel order copy |
| ![improvement](/img/improvement.jpg) | Unit test LabelOrder reducer. |
| ![improvement](/img/improvement.jpg) | Testing LabelOrder reducer |
| ![improvement](/img/improvement.jpg) | Feature gate Labelling suggestions |
| ![bug](/img/bug.jpg) | Pinning apps breaking search app functionality |
| ![bug](/img/bug.jpg) | Unable to create a new Task in Labeler |
| ![new-feature](/img/new_feature.jpg) | Better Video Features |
| ![improvement](/img/improvement.jpg) | Opening a task should ONLY fetch annotations for the task that was opened |
| ![bug](/img/bug.jpg) | Task Edit form doesn't pre-populate worker strategy selection |
| ![bug](/img/bug.jpg) | Submit for Review logic incorrectly assumes the last input is last |
| ![new-feature](/img/new_feature.jpg) | On the Task creation form Add section to Review strategy block for Consensus type |
| ![bug](/img/bug.jpg) | Fix key issue in ExplorerAnnotationStatusList component in Explorer |
| ![new-feature](/img/new_feature.jpg) | Handle Noisy Labels |
| ![bug](/img/bug.jpg) | Optimistically update "don't show again" in onboarding modal of Task Form |
| ![bug](/img/bug.jpg) | Flipkart would like better formatting of markdown for instructions |
| ![bug](/img/bug.jpg) | Show onboarding modals for each persona: Task creator, Reviewer, Worker |
| ![bug](/img/bug.jpg) | Onboarding tooltips for /apps doesn't go away when I click "awesome" |
| ![bug](/img/bug.jpg) | Pressing ESC patches my metadata 4 times in a row |
| ![bug](/img/bug.jpg) | Move Hubspot chat icon into the navbar |
| ![bug](/img/bug.jpg) | Task Form Inputs and Buttons are Misaligned |
| ![bug](/img/bug.jpg) | Task Creation submit not redirecting |
| ![bug](/img/bug.jpg) | In Labeler, “Skip” and "Reject" buttons are hidden by the questions bot blob |
| ![bug](/img/bug.jpg) | Toggling panning makes the image blurry |
| ![bug](/img/bug.jpg) | Clicking "Create Task" doesn't force you to exit the task creation screen. |
| ![new-feature](/img/new_feature.jpg) | App Details - Tool Tip only shows 1/3 \(there doesn't seem to be a 2/3 or 3/3\) |
| ![improvement](/img/improvement.jpg) | Display onboarding modal for Reviewer |
| ![improvement](/img/improvement.jpg) | Display onboarding modal for Task Creator |
| ![improvement](/img/improvement.jpg) | Review Strategy for TaskForm |
| ![improvement](/img/improvement.jpg) | AI Assist for TaskForm |
| ![improvement](/img/improvement.jpg) | Manual reviewers for TaskForm |
| ![improvement](/img/improvement.jpg) | Worker strategy input for TaskForm |
| ![improvement](/img/improvement.jpg) | Worker input for TaskForm |
| ![improvement](/img/improvement.jpg) | Create ProposerWorkflow input for TaskForm |
| ![improvement](/img/improvement.jpg) | Create VideoFps input for TaskForm |
| ![improvement](/img/improvement.jpg) | Create Concepts input for TaskForm |
| ![improvement](/img/improvement.jpg) | Create InputSource input for TaskForm |
| ![improvement](/img/improvement.jpg) | Create TaskType input for TaskForm |
| ![improvement](/img/improvement.jpg) | Create separate styled component file for FormTypeSection |
| ![bug](/img/bug.jpg) | Onboarding modal points to 2 videos and they link deeper into the same video. |

## Enlight

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Implement track association module |
| ![improvement](/img/improvement.jpg) | implement log probability using kalman state as input |
| ![bug](/img/bug.jpg) | cannot save model details in portal with lrate &lt; 0.001 |
| ![improvement](/img/improvement.jpg) | \[OCR\] Scene Text Reco & Text Classify Integration |
| ![new-feature](/img/new_feature.jpg) | Splice Concepts Together |
| ![new-feature](/img/new_feature.jpg) | New Layers / Arch |
| ![new-feature](/img/new_feature.jpg) | Models on New Data Types |
| ![new-feature](/img/new_feature.jpg) | Neural Net Toolkit |
| ![new-feature](/img/new_feature.jpg) | Recurrent Nets Up and Running |
| ![improvement](/img/improvement.jpg) | YOLO dataset script |
| ![improvement](/img/improvement.jpg) | deploy landmark model |
| ![improvement](/img/improvement.jpg) | Update roll up for task\_input\_counts table to have worker\_id information |
| ![improvement](/img/improvement.jpg) | Implement annotation count |
| ![improvement](/img/improvement.jpg) | Integrate filter, status, association into a single tracker model |
| ![improvement](/img/improvement.jpg) | Implement aggregator |
| ![improvement](/img/improvement.jpg) | Design simulated data that mimic low confidence / high recall detections |
| ![improvement](/img/improvement.jpg) | Design training losses |
| ![improvement](/img/improvement.jpg) | Try box in x y a r format \(SORT format\) |
| ![improvement](/img/improvement.jpg) | Try box in x y w h format |
| ![bug](/img/bug.jpg) | Checkpoint for test eval can be deleted before eval is started |
| ![improvement](/img/improvement.jpg) | Improve face orientation bucketing of LandmarkAlignTransform in DataProvider |
| ![improvement](/img/improvement.jpg) | Use tracker state in TrackerPredict calls |
| ![improvement](/img/improvement.jpg) | Make Text Aggregator Operator public |
| ![improvement](/img/improvement.jpg) | Remove transformers dependency |
| ![improvement](/img/improvement.jpg) | Simple visual tracker example |
| ![improvement](/img/improvement.jpg) | Ingest VGGFACE2 |
| ![improvement](/img/improvement.jpg) | Explore multi-language support |
| ![improvement](/img/improvement.jpg) | Rewrite Export Scripts |
| ![new-feature](/img/new_feature.jpg) | Introduce region threshold model |
| ![improvement](/img/improvement.jpg) | Add filter\_other\_concepts param to concept threshold model |
| ![improvement](/img/improvement.jpg) | Remove the unnecessary requires\_sequential\_frames field of ModelType |
| ![improvement](/img/improvement.jpg) | Add support for image crop model to work on video |
| ![bug](/img/bug.jpg) | Fix duplicate\_app.go restriction on number of annotations |
| ![improvement](/img/improvement.jpg) | Notebook to demo tracker evals |
| ![improvement](/img/improvement.jpg) | RNN vs Model-based tracking: Real data |

## Armada

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Triton GRPC Client Upgrade |
| ![improvement](/img/improvement.jpg) | Migrate Spire to use TextTokenizer Transform |
| ![improvement](/img/improvement.jpg) | Implement TextTokenizer Transform |
| ![improvement](/img/improvement.jpg) | Export model to TorchScript |
| ![improvement](/img/improvement.jpg) | HDFS for EID storage |
| ![improvement](/img/improvement.jpg) | Experiment tracking improvements |
| ![improvement](/img/improvement.jpg) | Trace from EID |
| ![improvement](/img/improvement.jpg) | EID management |
| ![improvement](/img/improvement.jpg) | Ingest A Video dataset |
| ![improvement](/img/improvement.jpg) | Resolve TRT saved model Issues Across GPU compute Capabilities |
| ![improvement](/img/improvement.jpg) | People/Vehicle Detector TRT conversion and inference benchmarking |

## Portal

| Status | Details |
| :--- | :--- |
| ![bug](/img/bug.jpg) | CSS on toggles within model mode was cutting off the toggle |
| ![bug](/img/bug.jpg) | Model creation broken |
| ![new-feature](/img/new_feature.jpg) | Create Hubspot dashboard with funnels and charts |
| ![new-feature](/img/new_feature.jpg) | Capture customer behavior analytics |
| ![bug](/img/bug.jpg) | CORS error prevents uploaded images from rendering |
| ![bug](/img/bug.jpg) | Properly configure S3 bucket for inputs to allow portal \(prod and dev\) |
| ![bug](/img/bug.jpg) | Investigate why the vendors bundle is 12MB |
| ![new-feature](/img/new_feature.jpg) | Render relation-based parent-child relationship in Proposals |
| ![new-feature](/img/new_feature.jpg) | Proposers UI with a new annotations reducer |
| ![new-feature](/img/new_feature.jpg) | Create annotations module in store/explorer for Proposers UI |
| ![improvement](/img/improvement.jpg) | Move Proposers data transformation to a saga+web worker |
| ![improvement](/img/improvement.jpg) | Integrate Proposers with Classification apps |
| ![improvement](/img/improvement.jpg) | Show App Concepts alongside model concepts in Proposers UI |
| ![bug](/img/bug.jpg) | Explorer does exponentially increasing duplicate calls to GET inputs endpoint |
| ![new-feature](/img/new_feature.jpg) | Introduce knowledge graph link creation when check/X is clicked on clarifai/main models |
| ![improvement](/img/improvement.jpg) | update created-at timestamp format to: hours/minutes/seconds for model-input |
| ![bug](/img/bug.jpg) | data-mode - uploaded-images multiple elements get re-rendered |
| ![improvement](/img/improvement.jpg) | Zoom-in & zoom-out controls for explorer geo |
| ![improvement](/img/improvement.jpg) | Allow users to upload the same url twice from data mode |
| ![improvement](/img/improvement.jpg) | Set app-id instead of the app-name on new app-creation for readable urls |
| ![improvement](/img/improvement.jpg) | Fully qualified url for app-listing |
| ![bug](/img/bug.jpg) | NaN being displayed in model-versions |
| ![bug](/img/bug.jpg) | Portal does not parse links properly |
| ![bug](/img/bug.jpg) | Unable to view versions or eval metrics page as a collaborator |
| ![improvement](/img/improvement.jpg) | Data Ingestions |
| ![improvement](/img/improvement.jpg) | Create initial eval script to test cascade approach |
| ![improvement](/img/improvement.jpg) | Work with BE to nurse input uploads |
| ![improvement](/img/improvement.jpg) | Get Input Embeddings and Cluster over All |
| ![improvement](/img/improvement.jpg) | Get Input Embeddings and Cluster over Concepts |
| ![bug](/img/bug.jpg) | Data Mode page performance issues when pasting 60 inputs in production |
| ![bug](/img/bug.jpg) | Bulk unlabeling doesn't work |
| ![new-feature](/img/new_feature.jpg) | Change model type to model type ID everywhere |
| ![improvement](/img/improvement.jpg) | Slider for concept threshold should allow for full precision floats with box to set the value |
| ![improvement](/img/improvement.jpg) | Upload third party models through Portal |
| ![improvement](/img/improvement.jpg) | Develop the model predict view for portal for existing models. |
| ![new-feature](/img/new_feature.jpg) | Add dropdown for model\_type\_id |
| ![new-feature](/img/new_feature.jpg) | Allow users to upload pre-trained models |
| ![improvement](/img/improvement.jpg) | Make versions tab as default in model details page |
| ![improvement](/img/improvement.jpg) | Update `ModelPredictions` component to make use of `reselect` & sagas |
| ![bug](/img/bug.jpg) | Create collectors always selects user as clarifai |
| ![bug](/img/bug.jpg) | AnimatedList caches the children nodes causing improper renders |
| ![bug](/img/bug.jpg) | Sending invalid fields during model creation |
| ![bug](/img/bug.jpg) | Workflow page crashes |
| ![bug](/img/bug.jpg) | Improve performance of explorer |
| ![bug](/img/bug.jpg) | Remove console errors in various parts of portal |
| ![bug](/img/bug.jpg) | GetInputCount\(\) is called on loop after exiting data mode |
| ![bug](/img/bug.jpg) | Create new Collector redirects to apps page |
| ![bug](/img/bug.jpg) | Collectors Adding app model bug |
| ![bug](/img/bug.jpg) | copy public workflow do not populate workflow model |
| ![bug](/img/bug.jpg) | In eval metrics page, "Concept by Concept" section shows counts that are incorrect |
| ![bug](/img/bug.jpg) | In eval metrics page, "1 split" section is incorrect |
| ![bug](/img/bug.jpg) | Prevent patching model annotations |
| ![bug](/img/bug.jpg) | Deprecate old search endpoint from FE |
| ![bug](/img/bug.jpg) | Add Embed Model Version Id to Bulk Labeler Classification Annotations |
| ![bug](/img/bug.jpg) | Range Slider on Eval Metrics Page causes app crash when moving |
| ![improvement](/img/improvement.jpg) | Allow copying public workflows into existing workflows |

## API

| Status | Details |
| :--- | :--- |
| ![improvement](/img/improvement.jpg) | Overwrite user annotation info with annotation writer model info |
| ![bug](/img/bug.jpg) | Unable to add polygon annotation with embed\_model\_version\_id |
| ![improvement](/img/improvement.jpg) | Experiment with docs.clarifai.com using API versions |
| ![new-feature](/img/new_feature.jpg) | Make gRPC Swift client |
| ![bug](/img/bug.jpg) | Can't assign a task to myself if I have a custom user\_id |
| ![bug](/img/bug.jpg) | Annotation writer model & concept thresholder create incorrect additional annotations |
| ![bug](/img/bug.jpg) | App copy doesn't stop after timeout |
| ![new-feature](/img/new_feature.jpg) | Asset search by status |
| ![improvement](/img/improvement.jpg) | Monitor media processor predict err rate |
| ![improvement](/img/improvement.jpg) | Log spire name |
| ![bug](/img/bug.jpg) | Clean idle/pending asset publish video asset to pipeline separately |
