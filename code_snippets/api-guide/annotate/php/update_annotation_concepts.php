<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input ID, annotation ID, 
// and concept ID. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these based on the annotation you want to update
$INPUT_ID = "c9cbb1c90cf24bc98bfd2e529e744ca9";
$ANNOTATION_ID = "08d3b9b81432477fb5522d3fb1d1a6f4";
$CONCEPT_ID = "apple";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PatchAnnotationsRequest;
use Clarifai\Api\Annotation;
use Clarifai\Api\Concept;
use Clarifai\Api\Data;
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
[$response, $status] = $client->PatchAnnotations(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PatchAnnotationsRequest([
        "user_app_id" => $userDataObject, 
        "action" => "merge",  // Supported actions: overwrite, merge, remove
        "annotations" => [
             new Annotation([
                "input_id" => $INPUT_ID,
                "id" => $ANNOTATION_ID,
                "data" => new Data([
                    "concepts" => [
                        new Concept(["id" => $CONCEPT_ID, "value" => 1.]) //  1 means true, this concept is present
                    ]
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
    print $response->getStatus()->getDetails();
    throw new Exception("Failure response: " . $response->getStatus()->getDescription());
}

?>