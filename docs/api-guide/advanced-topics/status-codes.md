---
description: Understand Clarifai error codes
sidebar_position: 1
---

# Status Codes

**Understand Clarifai's error codes**
<hr />

All our API endpoints return a status code and a description that gives details of the status. A full list of those status codes is shown below. 

If a status comes back that you do not see below, please reach out to support@clarifai.com.

| CODE | ERROR | DESCRIPTION |
| :--- | :--- |:---  |
| | **Generic** | |
| 10000 | SUCCESS | Ok |
| 10001 | SUCCESS_WARNING_API_DEPRECATED |  |
| 10002 | SUCCESS_WARNING_CLIENT_DEPRECATED |  |
| 10010 | MIXED_STATUS | Mixed Success |
| 10020 | FAILURE | Failure |
| 10030 | TRY_AGAIN | Try the request again |
| 10040 | NOT_IMPLEMENTED | |
| 10050 | MOVED | Resource moved |
|  | **Clarifai Connection Codes: 11xxx** |   |
| 11000 | CONN_ACCOUNT_ISSUES | Account or plan issue, such as expired credentials, account still in trial, or feature not supported in your tier |
| 11001 | CONN_TOKEN_INVALID | Invalid authentication token used |
| 11002 | CONN_CREDENTIALS_INVALID | Invalid authentication credentials |
| 11003 | CONN_EXCEED_HOURLY_LIMIT | Throttle hourly request limit exceeded |
| 11004 | CONN_EXCEED_MONTHLY_LIMIT | Throttle monthly request limit exceeded |
| 11005 | CONN_THROTTLED | Throttler and billing stuff; making too many requests | 
| 11006 | CONN_EXCEEDS_LIMITS | Throttler and billing stuff; account limits exceeded | 
| 11007 | CONN_INSUFFICIENT_SCOPES | API key has insufficient permissions | 
| 11008 | CONN_KEY_INVALID | Invalid API key or Invalid API key/application pair | 
| 11009 | CONN_KEY_NOT_FOUND | API key not found | 
| 11100 | CONN_BAD_REQUEST_FORMAT | Bad request format; multipart form parsing, broken JSON, etc | 
| 11101 | CONN_DOES_NOT_EXIST | Resource does not exist; when path is bad | 
| 11102 | CONN_INVALID_REQUEST | Invalid request; something wrong with a header | 
| 11103 | CONN_METHOD_NOT_ALLOWED | Request method not allowed | 
| 11104 | CONN_NO_GDPR_CONSENT | No GDPR consent | 
| 11200 | CONN_AUTH_METHOD_DISABLED | Authentication method is disabled | 
|  | **Model/Custom Training Related Codes: 21xxx** |  | 
| 21100 | MODEL_TRAINED | Custom model has been already trained | 
| 21101 | MODEL_TRAINING | Custom model is currently training | 
| 21102 | MODEL_UNTRAINED | Custom model has not yet been trained | 
| 21103 | MODEL_QUEUED_FOR_TRAINING | Custom model is currently in queue for training, waiting on inputs to process. | 
| 21104 | MODEL_UPLOADING | Model uploading inputs  |
| 21105 | MODEL_UPLOADING_FAILED | Model uploading inputs failed  |
| 21106 | MODEL_TRAINING_FAILED | Generic error message for any type of model training error |
| 21110 | MODEL_TRAINING_NO_DATA | Custom model training had no data | 
| 21111 | MODEL_TRAINING_NO_POSITIVES | Custom model training had no positive examples| 
| 21112 | MODEL_TRAINING_ONE_VS_N_SINGLE_CLASS | Custom model training was ONE_VS_N but with a single class | 
| 21113 | MODEL_TRAINING_TIMED_OUT | Training took longer than hard coded timeouts; contact support@clarifai.com if this continues to happen when creating new versions of your model | 
| 21114 | MODEL_TRAINING_WAITING_ERROR | Training got error waiting on your inputs to process, please contact support@clarifai.com | 
| 21115 | MODEL_TRAINING_UNKNOWN_ERROR | Training threw an unknown exception, please contact support@clarifai.com. | 
| 21116 | MODEL_TRAINING_MSG_REDELIVER | Training request was unexpectedly redelivered, contact support@clarifai.com if this continues to happen. | 
| 21117 | MODEL_TRAINING_INSUFFICIENT_DATA | Training got error due to insufficient labelled data |
| 21118 | MODEL_TRAINING_INVALID_PARAMS | Invalid parameters during model training | 
| 21119 | MODEL_TRAINING_INVALID_DATA_TOLERANCE_EXCEEDED | Training is stopped because too much data was dropped |
| 21150 | MODEL_MODIFY_SUCCESS | Model modification success | 
| 21151 | MODEL_MODIFY_PENDING | Model modification pending | 
| 21152 | MODEL_MODIFY_FAILED | Model modification failed | 
| 21200 | MODEL_DOES_NOT_EXIST | Model does not exist | 
| 21201 | MODEL_PERMISSION_DENIED | Model permission denied | 
| 21202 | MODEL_INVALID_ARGUMENT | Invalid model argument | 
| 21203 | MODEL_INVALID_REQUEST | Invalid model request | 
|  |  **Model Evaluation Codes: 213xx**  |      |
| 21300 | MODEL_EVALUATED | Model was successfully evaluated | 
| 21301 |MODEL_EVALUATING | Model is evaluating | 
| 21302 |MODEL_NOT_EVALUATED | Model is not yet evaluated | 
| 21303 | MODEL_QUEUED_FOR_EVALUATION | Model is queued for evaluation | 
| 21310 | MODEL_EVALUATION_TIMED_OUT | Model evaluation timed out; evaluation took longer than hard coded timeouts | 
| 21311 | MODEL_EVALUATION_WAITING_ERROR | Model evaluation timed out waiting on inputs to process | 
| 21312 | MODEL_EVALUATION_UNKNOWN_ERROR | Model evaluation unknown internal error | 
| 21313 | MODEL_PREDICTION_FAILED | Model prediction failed | 
| 21314 | MODEL_EVALUATION_MSG_REDELIVER | Evaluation message was redelivered  |
| 21315 | MODEL_EVALUATION_NEED_LABELS | Model evaluation failed because there are not enough annotated inputs. Please ensure there are at least 2 concepts in your model before evaluating | 
| 21316 | MODEL_EVALUATION_NEED_INPUTS | Model evaluation failed because there are not enough labeled inputs. Please ensure there are at least 5 labeled inputs per concept before evaluating | 
| 21317 | MODEL_EVALUATION_FAILED | Generic error code for evaluation failure |
| - | -| Status codes through 21319 (inclusive) reserved for model evaluation *errors* (per logic in clients)|
|  | **Model Deployment Codes: 2135x**  | |
| 21350 | MODEL_DEPLOYMENT_FAILED | Used when inference coordinator failed to deploy spire and throws an error |
| 21351 | MODEL_DEPLOYING | Used when calling the inference coordinator to deploy a spire |
| 21352 | MODEL_QUEUED_FOR_DEPLOYMENT | Used when training is completed |
| 21353 | MODEL_NOT_DEPLOYED | Used when model spire deployment is manually taken down or due to inactivity |
|  | **Model Reference Codes: 214xx**  | |
| 21400 | MODEL_REFERENCE_INVALID_ARGUMENT | Used when a model reference field is not set properly |
| 21420 | MODEL_EXAMPLE_INPUT_INVALID_ARGUMENT | Used when a model example input field is not set properly |
|  | **Workflow Related Codes: 22xxx** | |
| 22001 | WORKFLOW_NO_MATCHING_INPUT | Workflow does not have specified input model | 
| 22002 | WORKFLOW_REQUIRE_TRAINED_MODEL | New model in workflow needs to be trained | 
| 22100 | WORKFLOW_DUPLICATE | Duplicate URL in your application. Check the documentation to allow duplications | 
| 22101 | WORKFLOW_UNSUPPORTED_FORMAT | Workflow format unsupported | 
| 22102 | WORKFLOW_DOES_NOT_EXIST | Workflow does not exist | 
| 22103 | WORKFLOW_PERMISSION_DENIED | Workflow permission denied | 
| 22104 | WORKFLOW_INVALID_ARGUMENT | Workflow invalid argument; error in the request somewhere | 
| 22105 | WORKFLOW_INVALID_RECIPE | |
| 22106 | WORKFLOW_INVALID_TEMPLATE | Template workflow is invalid | 
| 22107 | WORKFLOW_INVALID_GRAPH | Workflow graph is invalid | 
| 22108 | WORKFLOW_INTERNAL_FAILURE | |
| 22150 | WORKFLOW_MODIFY_SUCCESS | Workflow modification success | 
| 22151 | WORKFLOW_MODIFY_PENDING | Workflow modification pending | 
| 22152 | WORKFLOW_MODIFY_FAILED | Workflow modification failed | 
| 22153 | WORKFLOW_REINDEX_FAILED  | Workflow reindexing failed |
| 22999 | WORKFLOW_INVALID_REQUEST | Invalid request; error in the request somewhere | 
| | **Concept Related Codes: 23xxx** | |
| 23150 | CONCEPT_MODIFY_SUCCESS | Concept modification success |
| 23151 | CONCEPT_MODIFY_PENDING | Concept modification pending |
| 23152 | CONCEPT_MODIFY_FAILED | Concept modification failed |
| | **Annotation Related Codes: 24xxx** | |
| 24150 | ANNOTATION_SUCCESS | Annotation success | 
| 24151 | ANNOTATION_PENDING | Annotation pending | 
| 24152 | ANNOTATION_FAILED | Annotation failed; check URL | 
| 24153 | | Annotation in progress | 
| 24154 |ANNOTATION_UNKNOWN_STATUS | Annotation unknown status |
| 24155 | ANNOTATION_INVALID_ARGUMENT | Annotation invalid argument | 
| 24156 | ANNOTATION_PERMISSION_DENIED | Permission to annotation denied | 
| 24157 | ANNOTATION_AWAITING_REVIEW | Annotation still waiting for review |
| 24158 | ANNOTATION_REVIEW_DENIED | Annotation review denied |
| 24159 | ANNOTATION_AWAITING_CONSENSUS_REVIEW | Annotation still waiting for consensus review |
| 24250 | ANNOTATION_MODIFY_SUCCESS | Annotation modification success | 
| 24251 | ANNOTATION_MODIFY_PENDING | Annotation modification pending | 
| 24252 | ANNOTATION_MODIFY_FAILED | Annotation modification failed | 
| | **Metadata Related Codes: 249xx** | |
| 24900 | METADATA_INVALID_PATCH_ARGUMENTS | |
| 24901 | METADATA_PARSING_ISSUE | |
| 24902 | METADATA_MANIPULATION_ISSUE | |
| | **Training Service Related Codes: 25xxx** | |
| 25000 | TRAINER_JOB_STATE_NONE | Custom Trainer unknown internal error | 
| 25001 | TRAINER_JOB_STATE_QUEUED |  |
| 25002 | TRAINER_JOB_STATE_RUNNING  |  |
| 25003 | TRAINER_JOB_STATE_COMPLETE  |  |
| 25004 | TRAINER_JOB_STATE_ERROR | Custom Trainer failed to retrieve data or train | 
|  | **Data Dump Related Codes: 251xx** |  |
| 25150 | DATA_DUMP_SUCCESS |  |
| 25151 | DATA_DUMP_PENDING |  |
| 25152 | DATA_DUMP_FAILED  |  |
| 25153 | DATA_DUMP_IN_PROGRESS  |  |
| 25154 | DATA_DUMP_NO_DATA  |  |
| 25155 | DATA_DUMP_UNEXPECTED_ERROR |  |
| 25170 | DATA_DUMP_EXPORT_SUCCESS |  |
| 25171 | DATA_DUMP_EXPORT_PENDING |  |
| 25172 | DATA_DUMP_EXPORT_FAILED |  |
| 25173 | DATA_DUMP_EXPORT_IN_PROGRESS |  |
| 25174 | DATA_DUMP_EXPORT_UNEXPECTED_ERROR |  |
|  | **Duplicate Related Codes: 252xx**  |  |
| 25200 | APP_DUPLICATION_SUCCESS |  |
| 25201 | APP_DUPLICATION_FAILED |  |
| 25202 | APP_DUPLICATION_PENDING |  |
| 25203 | APP_DUPLICATION_IN_PROGRESS |  |
| 25204 | APP_DUPLICATION_INVALID_REQUEST  |  |
|  | **Module Related Codes: 253xx**  |  |
| 25300 | MODULE_DOES_NOT_EXIST |  |
| 25301 | MODULE_PERMISSION_DENIED |  |
| 25302 | MODULE_INVALID_ARGUMENT  |  |
| 25303 | MODULE_INVALID_REQUEST  |  |
| | **Bulk Operation Related Codes: 254xx** | |
| 25400 | BULK_OPERATION_SUCCESS | |
| 25401 | BULK_OPERATION_FAILED | |
| 25402 | BULK_OPERATION_PENDING | |
| 25403 | BULK_OPERATION_IN_PROGRESS | |
| 25404 | BULK_OPERATION_INVALID_REQUEST | |
| 25405 | BULK_OPERATION_CANCELLED | |
| 25406 | BULK_OPERATION_UNEXPECTED_ERROR | |
| 25407 | BULK_OPERATION_DELETED | |
| | **Input: Image Related Codes: 30xxx** | |
| 30000 | INPUT_DOWNLOAD_SUCCESS | Download complete | 
| 30001 | INPUT_DOWNLOAD_PENDING | Download pending; when things are async, this is the default status | 
| 30002 | INPUT_DOWNLOAD_FAILED | Any type of error downloading and processing; download failed or we could not process it. Check URL or bytes you send in the request | 
| 30003 | INPUT_DOWNLOAD_IN_PROGRESS | Download in progress | 
| 30004 | INPUT_STATUS_UPDATE_FAILED  |   |
| 30005 | INPUT_DELETE_FAILED | |
| 30100 | INPUT_DUPLICATE | Duplicate URL in your application. Check the documentation to allow duplications. | 
| 30101 | INPUT_UNSUPPORTED_FORMAT | Input image format unsupported | 
| 30102 | INPUT_DOES_NOT_EXIST | Input does not exist | 
| 30103 | INPUT_PERMISSION_DENIED | Input permission denied | 
| 30104 | INPUT_INVALID_ARGUMENT | Input invalid argument | 
| 30105 | INPUT_OVER_LIMIT | Input image is larger than the allowed limit | 
| 30106 | INPUT_INVALID_URL | Input image URL invalid | 
| 30200 | INPUT_MODIFY_SUCCESS | Input image modification success | 
| 30201 | INPUT_MODIFY_PENDING | Input image modification pending | 
| 30203 | INPUT_MODIFY_FAILED | Input image modification failed |
| 30210 | INPUT_STORAGE_HOST_FAILED | | 
| 30300 | ALL_INPUT_INVALID_BYTES | Input image decoding failed. Check URLs and bytes sent | 
| 30400 | INPUT_CLUSTER_SUCCESS | | 
| 30401 | INPUT_CLUSTER_PENDING | | 
| 30402 | INPUT_CLUSTER_FAILED | | 
| 30403 | INPUT_CLUSTER_IN_PROGRESS | | 
| 30500 | INPUT_REINDEX_SUCCESS | |
| 30501 | INPUT_REINDEX_PENDING | |
| 30502 | INPUT_REINDEX_FAILED | |
| 30503 | INPUT_REINDEX_IN_PROGRESS | |
| | **Input: Video Related Codes: 31xxx** | |
| 31000 | INPUT_VIDEO_DOWNLOAD_SUCCESS | Download complete | 
| 31001 | INPUT_VIDEO_DOWNLOAD_PENDING | Download pending | 
| 31002 | INPUT_VIDEO_DOWNLOAD_FAILED | Download failed or we could not process it. Check URL or bytes you sent in the request. | 
| 31100 | INPUT_VIDEO_DUPLICATE | Duplicate URL in your application. Check the documentation to allow duplications. | 
| 31101 | INPUT_VIDEO_UNSUPPORTED_FORMAT | Input video format unsupported | 
| 31102 | INPUT_VIDEO_DOES_NOT_EXIST | Input does not exist | 
| 31103 | INPUT_VIDEO_PERMISSION_DENIED | Input permission denied | 
| 31104 | INPUT_VIDEO_INVALID_ARGUMENT | Input invalid argument | 
| 31105 | INPUT_VIDEO_OVER_LIMIT | Input video is larger the allowed limit | 
| 31106 | INPUT_VIDEO_INVALID_URL | Input video URL invalid | 
| 31200 | INPUT_VIDEO_MODIFY_SUCCESS | Input video modification success | 
| 31201 | INPUT_VIDEO_MODIFY_PENDING | Input video modification pending | 
| 31203 | INPUT_VIDEO_MODIFY_FAILED | Input video modification failed |
| 31210 | INPUT_VIDEO_STORAGE_HOST_FAILED | | 
| 31300 | ALL_INPUT_VIDEOS_INVALID_BYTES | Input video decoding failed. Check URLs and bytes sent | 
| | **Input Request Codes: 39xxx** | |
| 39996 | INPUT_CONNECTION_FAILED | Connection attempts to the input URL failed | 
| 39997 | REQUEST_DISABLED_FOR_MAINTENANCE | Sorry, this type of request has been disabled for maintenance. Please try again in a few hours. | 
| 39998 | INPUT_WRITES_DISABLED_FOR_MAINTENANCE | Input writes are disabled for maintenance. Please try again in a few hours. | 
| 39999 | INPUT_INVALID_REQUEST | Invalid input request | 
| | **API Formatting Codes: 4000x** | |
| 40001 | PREDICT_INVALID_REQUEST | Invalid request | 
| 40002 | SEARCH_INVALID_REQUEST | Invalid search request | 
| 40003 | CONCEPTS_INVALID_REQUEST | Invalid request | 
| 40004 | STATS_INVALID_REQUEST | |
| | **Other Related: 400xx** | |
| 40010 | DATABASE_DUPLICATE_KEY | Object has a duplicate ID; another object with same ID already exist | 
| 40011 | DATABASE_STATEMENT_TIMEOUT | |
| 40012 | DATABASE_INVALID_ROWS_AFFECTED | |
| 40013 | DATABASE_DEADLOCK_DETECTED | |
| 40014 | DATABASE_FAIL_TASK | |
| 40015 | DATABASE_FAIL_TO_GET_CONNECTIONS | | 
| 40016 | DATABASE_TOO_MANY_CLIENTS | |
| 40017 | DATABASE_CONSTRAINT_VIOLATED | Object violates a constraint. Try again with different values for the fields | 
| 40019 | | The requested operation is currently processing for this app | 
| 40020 | ASYNC_WORKER_MULTI_ERRORS | |
| 40030 | RPC_REQUEST_QUEUE_FULL | Sorry, the server is too busy at the moment. Please try again later | 
| 40031 | RPC_SERVER_UNAVAILABLE | Sorry, the server is unavailable at the moment. Please try again later | 
| 40032 | RPC_REQUEST_TIMEOUT | Sorry, your request has timed out. Please try your request again | 
| 40033 | RPC_MAX_MESSAGE_SIZE_EXCEEDED | Sorry, the request sent is larger than the allowed limit. Please contact support@clarifai.com | 
| 40034 | EXTERNAL_CONNECTION_ERROR | Could not connect to external services |
| 40035 | RPC_CANCELED | |
| 40036 | RPC_UNKNOWN_METHOD | |
| 40037 | REQUEST_CANCELED_BY_USER | |
| | **Queue Related Error Codes: 41xxx** | |
| 41000 | QUEUE_CONN_ERROR | Servers are busy. Please try again later | 
| 41002 | QUEUE_CLOSE_REQUEST_TIMEOUT | |
| 41003 | QUEUE_CONN_CLOSED | |
| 41004 | QUEUE_PUBLISH_ACK_TIMEOUT | |
| 41005 | QUEUE_PUBLISH_ERROR | |
| 41006 | QUEUE_SUBSCRIPTION_TIMEOUT | |
| 41007 | QUEUE_SUBSCRIPTION_ERROR | |
| 41008 | QUEUE_MARSHALLING_FAILED | |
| 41009 | QUEUE_UNMARSHALLING_FAILED | |
| 41010 | QUEUE_MAX_MSG_REDELIVERY_EXCEEDED | |
| 41011 | QUEUE_ACK_FAILURE | |
| | **SQS Related Error Codes: 411xx** | |
| 41100 | SQS_OVERLIMIT | |
| 41101 | SQS_INVALID_RECEIPT_HANDLE | |
| 41102 | SQS_UNKNOWN | |
| | **Visualization Error Codes: 42xxx** | |
| 42000 | | Visualization succeeded | 
| 42001 | | Visualization is pending | 
| 42002 | | Visualization failed | 
| 42003 | | Visualization invalid request | 
| 42004 | | Missing application visualization | 
| 42005 | | Too many URLs to visualize | 
| 42006 | | There is not inputs in app | 
| | **Search Related Error Codes: 430xx** | |
| 43001 | SEARCH_INTERNAL_FAILURE | Search internal issue | 
| 43002 | SEARCH_PROJECTION_FAILURE | Search projection failure | 
| 43003 | SEARCH_PREDICTION_FAILURE | Search prediction failure | 
| 43004 | SEARCH_BY_NOT_FULLY_INDEXED_INPUT | Can only search by a fully indexed input | 
| 43005 | SAVED_SEARCH_MODIFY_FAILED | |
| | | |
| 43040 | CLUSTER_INTERNAL_FAILURE | |
| | | |
| | **Workflow Evaluation Error Codes: 431xx** | |
| 43100 | EVALUATION_QUEUED | |
| 43101 | EVALUATION_IN_PROGRESS | |
| 43102 | EVALUATION_SUCCESS | |
| 43103 | EVALUATION_FAILED_TO_RETRIEVE_DATA | |
| 43104 | EVALUATION_INVALID_ARGUMENT | |
| 43105 | EVALUATION_FAILED | |
| 43106 | EVALUATION_PENDING | |
| 43107 | EVALUATION_TIMED_OUT | |
| 43108 | EVALUATION_UNEXPECTED_ERROR | |
| 43109 | EVALUATION_MIXED | |
| | **Stripe Error Code: 44xxx** | |
| 44001 | STRIPE_EVENT_ERROR | |
| | **Redis/Cache Error Codes: 45xxx** | |
| 45001 | CACHE_MISS | |
| 45002 | REDIS_SCRIPT_EXITED_WITH_FAILURE | |
| 45003 | REDIS_STREAM_ERR | |
| 45004 | REDIS_NO_CONSUMERS | |
| 45005 | REDIS_STREAM_BACKOFF | |
| | **Sift Science Error Codes: 46xxx** | |
| 46001 | SIGNUP_EVENT_ERROR | |
| 46002 | SIGNUP_FLAGGED | Signup not permitted |
| 46003 | FILETYPE_UNSUPPORTED | Filetype not supported |
| | **Application Counts Related Error Codes: 470xx** | |
| 47001 | APP_COUNT_INVALID_MESSAGE | |
| 47002 | APP_COUNT_UPDATE_INCREMENT_FAILED | |
| 47003 | APP_COUNT_REBUILD_FAILED | |
| 47004 | APP_COUNT_INTERNAL_FAILURE | |
| | **Media Processor Related Error Codes: 471xx** | |
| 47101 | MP_DOWNLOAD_ERROR | |
| 47102 | MP_RESOLVE_DNS_ERROR | |
| 47103 | MP_DOWNLOAD_MAX_SIZE_EXCEEDED_ERROR | |
| 47104 | MP_IMAGE_DECODE_ERROR | |
| 47105 | MP_INVALID_ARGUMENT | | 
| 47106 | MP_IMAGE_PROCESSING_ERROR | | 
| | **DataTier Related Error Code: 472xx** | |
| 47201 | DATATIER_CONN_ERROR | |
| | **User Legal Consent Status Related Code: 50xxx** | |
| 50001 | USER_CONSENT_FACE | |
| | **Workers Codes: 51xxx** | |
| 51000 | WORKER_MISSING | |
| 51001 | WORKER_ACTIVE | |
| 51002 | WORKER_INACTIVE | |
| | **Collectors Codes: 52xxx** | |
| 52000 | COLLECTOR_MISSING | |
| 52001 | COLLECTOR_ACTIVE | |
| 52002 | COLLECTOR_INACTIVE | |
| 52003 | COLLECTOR_POST_INPUT_FAILED | |
| | **SSO Code: 53xxx** | |
| 53001 | SSO_IDENTITY_PROVIDER_DOES_NOT_EXIST | |
| | **Tasks Codes: 54xxx** | |
| 54001 | TASK_IN_PROGRESS | The task was created |
| 54002 | TASK_DONE | The task is completed |
| 54003 | TASK_WONT_DO | The task is marked as abandoned |
| 54005 | TASK_ADD_ANNOTATIONS_FAILURE | An error occurred during add-task-annotations pipeline |
| 54100 | TASK_CONFLICT | The task operation is in conflict with the current state of the server |
| 54101 | TASK_NOT_IMPLEMENTED | Certain task-related scenarios are not implemented |
| 54102 | TASK_MISSING | Task was not found |
| | **Label Order Related Status Code: 55xxx** | |
| 55001 | LABEL_ORDER_PENDING | |
| 55002 | LABEL_ORDER_IN_PROGRESS | |
| 55003 | LABEL_ORDER_SUCCESS | |
| 55004 | LABEL_ORDER_CANCELED | |
| | **License Related Status Codes: 600xx** | |
| 60000 | LICENSE_ACTIVE | License is active | 
| 60001 | LICENSE_DOES_NOT_EXIST | License does not exist | 
| 60002 | LICENSE_NEED_UPDATE | License needs update | 
| 60003 | LICENSE_EXPIRED | License has expired | 
| 60004 | LICENSE_REVOKED | License has been revoked | 
| 60005 | LICENSE_DELETED | Hidden state not reflected to users |
| 60006 | LICENSE_VOLUME_EXCEEDED | Exceeded volume limit on license | 
| | **Password Related Status Codes: 610xx** | |
| 61000 | PASSWORD_VALIDATION_SUCCESS | |
| 61001 | PASSWORD_VALIDATION_FAILED | |
| 61002 | PASSWORDPOLICY_INVALID_ARGUMENT | |
| | **Feature Flags Status Codes: 620xx** | |
| 62000 | FEATUREFLAG_CONFIG_NOT_FOUND | |
| 62001 | FEATUREFLAG_INVALID_ARGUMENT | |
| 62002 | FEATUREFLAG_BLOCKED | |
| | **Maintenance Status Codes: 630xx** | |
| 63000 | MAINTENANCE_SUCCESS | |
| 63001 | MAINTENANCE_FAILED | |
| | **Datasets Status Codes: 64xxx** | |
| 64005 | DATASET_VERSION_PENDING | The dataset version is pending to be processed |
| 64010 | DATASET_VERSION_IN_PROGRESS | The dataset version is currently being processed |
| 64015 | DATASET_VERSION_READY | The dataset version is ready to be used |
| 64020 | DATASET_VERSION_FAILURE | An error occurred during the dataset version processing |
| 64025 | DATASET_VERSION_UNEXPECTED_ERROR | An unexpected error occurred during the dataset version processing |
| 64030 | DATASET_VERSION_CONFLICT | An alteration to dataset version would create a conflict |
| 64100 | DATASET_INPUT_SUCCESS | The dataset input was successfully added |
| 64101 | DATASET_INPUT_DUPLICATE | The dataset input is a duplicate |
| | **Generic Job Status Codes: 640xx** | |
| 64000 | JOB_QUEUED | |
| 64001 | JOB_RUNNING | |
| 64002 | JOB_COMPLETED | |
| 64003 | JOB_FAILED | |
| 64004 | JOB_CANCELLED | |
| 64006 | JOB_UNEXPECTED_ERROR | |
| | **Auth Issues Codes** | |
| 65000 | AUTH_MISSING_IDP_ASSOC | |
| | | |
| 66000 | LIST_OBJECTS_FAILED | |
| | | |
| 67000 | ARCHIVE_EXTRACT_FAILED | |
| | | |
| | **Multipart Uploading Status Codes: 680xx** | |
| 68000 | UPLOAD_IN_PROGRESS | |
| 68001 | UPLOAD_DONE | |
| 68002 | UPLOAD_FAILED  | |
| 68003 | UPLOAD_UNEXPECTED_ERROR | |
| 68004 | UPLOAD_EXPIRED | |
| | **Billing Related Issues: 69xxx** | |
| 69000 | BILLING_INVALID_INFO | |
| | | |
| 90400 | BAD_REQUEST | |
| 90500 | SERVER_ERROR | |
| | | |
| | **Internal Issues Codes: 98xxx** | |
| 98004 | INTERNAL_SERVER_ISSUE | |
| 98005 | INTERNAL_FETCHING_ISSUE | |
| 98006 | INTERNAL_DATABASE_ISSUE | |
| 98009 | INTERNAL_UNEXPECTED_TIMEOUT | |
| 98010 | INTERNAL_UNEXPECTED_V1 | |
| 98011 | INTERNAL_UNEXPECTED_PANIC | |
| 98012 | INTERNAL_UNEXPECTED_SPIRE | |
| 98013 | INTERNAL_REDIS_UNAVAILABLE | |
| 98014 | INTERNAL_RESOURCE_EXHAUSTED | |
| 98015 | INTERNAL_REDIS_UNCATEGORIZED | |
| 98016 | INTERNAL_AWS_UNCATEGORIZED | |
| 98017 | INTERNAL_AZURE_UNCATEGORIZED | |
| | **Uncategorized Codes: 99xxx** | |
| 99001 | CONN_UNCATEGORIZED | |
| 99002 | MODEL_UNCATEGORIZED | |
| 99003 | INPUT_UNCATEGORIZED | |
| 99004 | ANNOTATION_UNCATEGORIZED | |
| 99005 | BILLING_UNCATEGORIZED | |
| 99009 | INTERNAL_UNCATEGORIZED | |

