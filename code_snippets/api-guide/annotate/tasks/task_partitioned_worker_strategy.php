<?php

require __DIR__ . "/vendor/autoload.php";

/////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details for
// creating a task. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own task with partitioned worker strategy 
$CONCEPT_ID = "water";
$USER_ID_1 = "USER_ID_1_HERE";
$USER_ID_2 = "USER_ID_2_HERE";

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
use Clarifai\Api\TaskInputSource;
use Clarifai\Api\TaskWorkerPartitionedStrategyInfo;
use Clarifai\Api\TaskReview;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Google\Protobuf\Struct;
use Google\Protobuf\Value;


$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// create Struct instance
$params = new Struct();
$params->getFields()[$USER_ID_1] = (new Value())->setNumberValue(90);
$params->getFields()[$USER_ID_2] = (new Value())->setNumberValue(10);

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
                        "strategy" => 2, // integer value 2 for "PARTITIONED" strategy
                        "users" => [
                            new User([
                                "id" => $USER_ID_1
                            ]),
                            new User([
                                "id" => $USER_ID_2
                            ])
                            ],
                        "partitioned_strategy_info" => new TaskWorkerPartitionedStrategyInfo([
                            "type" => 2,  // integer value 2 for "WEIGHTED" strategy
                            "workers_per_input" => 1,
                            "weights" => $params

                        ])
                    ]),
                    "concepts" => [
                        new TaskConcept([
                            "concept" => new Concept([
                                "id" => $CONCEPT_ID
                            ]),
                        ]),
                    ],
                    "input_source" => new TaskInputSource([
                        "type" => 1, // integer value 1 for "ALL_INPUTS" strategy
                    ]),
                    "sample_ms" => 1000,
                    "review" => new TaskReview([
                        "strategy" => 1, // integer value 1 for "NONE" strategy 
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
