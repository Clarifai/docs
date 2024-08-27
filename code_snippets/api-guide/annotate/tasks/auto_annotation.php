<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and auto-annotation details.
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own auto-annotation task 
$MODEL_ID = "MODEL_ID_HERE";
$MODEL_VERSION_ID = "MODEL_VERSION_ID_HERE";
$CONCEPT_ID = "CONCEPT_ID_HERE";
$DATASET_ID = "DATASET_ID_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostTasksRequest;
use Clarifai\Api\TASK;
use Clarifai\Api\TaskWorker;
use Clarifai\Api\Worker;
use Clarifai\Api\TaskConcept;
use Clarifai\Api\TaskConceptAutoAnnotationConfig;
use Clarifai\Api\Concept;
use Clarifai\Api\ThresholdRange;
use Clarifai\Api\Model;
use Clarifai\Api\ModelVersion;
use Clarifai\Api\TaskInputSource;
use Clarifai\Api\TaskReview;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID
]);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostTasks(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostTasksRequest([
        "user_app_id" => $userDataObject,
        "tasks" => [
            new Task([
                "type" => 0, // integer value 0 for "TYPE_NOT_SET" type. Refer here https://github.com/Clarifai/clarifai-go-grpc/blob/master/proto/clarifai/api/resources.pb.go
                "name" => "Auto-Annotate " . $CONCEPT_ID,
                "worker" => new TaskWorker([
                    "strategy" => 3, // integer value 3 for "FULL" strategy
                    "workers" => [
                        new Worker([
                            "model" => new Model([
                                "id" => $MODEL_ID,
                                "model_version" => new ModelVersion([
                                    "id" => $MODEL_VERSION_ID
                                ])
                            ])
                        ])
                    ]
                ]),
                "concepts" => [
                    new TaskConcept([
                        "concept" => new Concept([
                            "id" => $CONCEPT_ID
                        ]),

                        "auto_annotation_config" => new TaskConceptAutoAnnotationConfig([
                            "annotation_data_types" => 1,
                            "threshold_range" => new ThresholdRange([
                                "is_lower_inclusive" => true,
                                "is_upper_inclusive" => true,
                                "lower" => 0.7,
                                "upper" => 0.999
                            ]),

                            "status_code" => 24150

                        ])
                    ])
                ],
                "input_source" => new TaskInputSource([
                    "type" => 3, // integer value 1 for "DATASET" strategy
                    "id" => $DATASET_ID
                ]),
                "sample_ms" => 1000,
                "review" => new TaskReview([
                    "strategy" => 1 // integer value 1 for "NONE" strategy                       
                ]),
            ]),
        ],
    ]),
    $metadata
)
->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) {
    throw new Exception("Error: {$status->details}");
}

// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception(
        "Failure response: " .
        $response->getStatus()->getDescription() .
        " " .
        $response->getStatus()->getDetails()
    );
}

?>
