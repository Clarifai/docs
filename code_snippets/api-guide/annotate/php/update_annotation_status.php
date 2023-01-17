<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input ID, and  
// annotation ID. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these based on the annotation status you want to update
$INPUT_ID = "3232a6fd32544c6a902c2cb0103034ff";
$ANNOTATION_ID = "3377446a88714ba78654f2cf811c2211";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PatchAnnotationsRequest;
use Clarifai\Api\Annotation;
use Clarifai\Api\Status\Status;
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
                "status" => new Status([
                    "code" => StatusCode::ANNOTATION_SUCCESS
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