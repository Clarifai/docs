<?php

require __DIR__ . "/vendor/autoload.php";

/////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details for
// assigning a task. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to assign your own task
$CONCEPT_ID = "water";
$WORKER_USER_ID = "WORKER_USER_ID_HERE";
$REVIEWER_USER_ID = "REVIEWER_USER_ID_HERE"; // User who will review this task
$DATASET_ID = "DATASET_ID_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostTasksRequest;
use Clarifai\Api\TASK;
use Clarifai\Api\User;
use Clarifai\Api\TaskWorker;
use Clarifai\Api\TaskConcept;
use Clarifai\Api\Concept;
use Clarifai\Api\Worker;
use Clarifai\Api\TaskInputSource;
use Clarifai\Api\TaskReviewManualStrategyInfo;
use Clarifai\Api\TaskReview;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostTasks(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PostTasksRequest([
            "user_app_id" => $userDataObject,
            "tasks" => [
                new Task([
                    "type" => 1, // integer value 1 for "CONCEPTS_CLASSIFICATION" type. Refer here https://github.com/Clarifai/clarifai-go-grpc/blob/master/proto/clarifai/api/resources.pb.go
                    "name" => "Annotate " . $CONCEPT_ID,
                    "worker" => new TaskWorker([
                        "strategy" => 4, // integer value 4 for "DYNAMIC" strategy
                        "workers" => [
                            new Worker([
                                "user" => new User([
                                    "id" => $WORKER_USER_ID                                    
                                ])                                
                            ]),
                        ],
                    ]),
                    "concepts" => [
                        new TaskConcept([
                            "concept" => new Concept([
                                "id" => $CONCEPT_ID,
                            ]),
                        ]),
                    ],
                    "input_source" => new TaskInputSource([
                        "type" => 3, // integer value 1 for "DATASET" strategy
                        "id" => $DATASET_ID
                    ]),
                    "sample_ms" => 1000,
                    "review" => new TaskReview([
                        "strategy" => 2, // integer value 2 for "MANUAL" strategy
                        "manual_strategy_info" => new TaskReviewManualStrategyInfo(
                            [
                                "sample_percentage" => 0.5,
                            ]
                        ),
                        "users" => [
                            new User([
                                "id" => $REVIEWER_USER_ID,
                            ]),
                        ],
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
