<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and how we want to update the model. 
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to update your own model
$MODEL_ID = "petsID";
$MODEL_VERSION_ID = "b0b89c973e5d4b6d9599ce13da04b894";
$MINIMUM_VALUE = 0.95;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PatchModelVersionsRequest;
use Clarifai\Api\ModelVersion;
use Clarifai\Api\OutputInfo;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Google\Protobuf\Struct;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// create Struct instance
$params = new Struct();
$params->min_value = $MINIMUM_VALUE;

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PatchModelVersions(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PatchModelVersionsRequest([
        "user_app_id" => $userDataObject,
        "action" => "overwrite",
        "model_id" => $MODEL_ID,
        "model_versions" => [
            new ModelVersion([
                "id" => $MODEL_VERSION_ID,
                "output_info" => new OutputInfo([
                    "params" => $params
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
