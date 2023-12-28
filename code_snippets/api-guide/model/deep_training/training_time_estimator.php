<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model ID, and estimated input count.
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to get your training time estimate
$MODEL_ID = "YOUR_CUSTOM_MODEL_ID_HERE";
$ESTIMATED_INPUT_COUNT = 100;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostModelVersionsTrainingTimeEstimateRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Clarifai\Api\ModelVersion;
use Clarifai\Api\TrainInfo;
use Google\Protobuf\Struct;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// create Struct instance
$params = new Struct();
$params->template = "MMDetection_FasterRCNN";

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostModelVersionsTrainingTimeEstimate(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostModelVersionsTrainingTimeEstimateRequest([
        "user_app_id" => $userDataObject,
        "model_id" => $MODEL_ID,
        "model_versions" => [
            new ModelVersion([
                "train_info" => new TrainInfo(
                    [
                        "params" => $params
                    ]
                )
            ])
        ],
        "estimated_input_count" => $ESTIMATED_INPUT_COUNT
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