<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and model evaluation details.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to make your own evaluations
$MODEL_APP_ID = "YOUR_MODEL_APP_ID_HERE";
$MODEL_USER_ID = "YOUR_MODEL_USER_ID_HERE";
$MODEL_ID = "YOUR_MODEL_ID_HERE";
$MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";
$DATASET_USER_ID = "YOUR_DATASET_USER_ID_HERE";
$DATASET_APP_ID = "YOUR_DATASET_APP_ID_HERE";
$DATASET_ID = "YOUR_DATASET_ID_HERE";
$DATASET_VERSION_ID = "YOUR_DATASET_VERSION_ID_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostEvaluationsRequest;
use Clarifai\Api\Model;
use Clarifai\Api\ModelVersion;
use Clarifai\Api\EvalMetrics;
use Clarifai\Api\Dataset;
use Clarifai\Api\DatasetVersion;
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
[$response, $status] = $client->PostEvaluations(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostEvaluationsRequest([
        "user_app_id" => $userDataObject,
        "eval_metrics" => [
            new EvalMetrics([
                "model" => new Model([
                    "app_id" => $MODEL_APP_ID,
                    "user_id" => $MODEL_USER_ID,
                    "id" => $MODEL_ID,
                    "model_version" => new ModelVersion([
                        "id" => $MODEL_VERSION_ID
                    ])

                ]),
                "ground_truth_dataset" => new Dataset([
                    "user_id" => $DATASET_USER_ID,
                    "app_id" => $DATASET_APP_ID,
                    "id" => $DATASET_ID,
                    "version" => new DatasetVersion([
                        "id" => $DATASET_VERSION_ID
                    ])
                ])
            ])
        ]
    ]),
    $metadata
)->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) {
    throw new Exception("Error: {$status->details}");
}
// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " . $response->getStatus()->getDetails());
}

?>