<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details for 
// performing task annotations. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to perform your own task annotations
$INPUT_ID = "62bb672ccbdd4e5da55b41209d1a0e9f";
$CONCEPT_ID_1 = "tree";
$CONCEPT_ID_2 = "water";
$TASK_ID = "d0f2fa2b61234d1cb6b66983ea021b5b";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostAnnotationsRequest;
use Clarifai\Api\Annotation;
use Clarifai\Api\Concept;
use Clarifai\Api\Data;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Google\Protobuf\Struct;
use Google\Protobuf\Value;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID
]);

// create Struct instance
$params = new Struct();
$params->getFields()->offsetSet("task_id", (new Value())->setStringValue($TASK_ID));

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostAnnotations(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostAnnotationsRequest([
        "user_app_id" => $userDataObject, 
        "annotations" => [
             new Annotation([
                "input_id" => $INPUT_ID,
                "data" => new Data([
                    "concepts" => [
                        new Concept(["id" => $CONCEPT_ID_1, "value" => 1.]),
                        new Concept(["id" => $CONCEPT_ID_2, "value" => 0.])
                    ]
                    ]),
                "annotation_info" => $params
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
    print $response->getStatus()->getDetails();
    throw new Exception("Failure response: " . $response->getStatus()->getDescription());
}

?>
