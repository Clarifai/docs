<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input IDs, and
// annotation IDs. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to list your own annotations
$INPUT_ID_1 = 'c9cbb1c90cf24bc98bfd2e529e744ca9';
$INPUT_ID_2 = '1be923b967f148dbb4e588cf4a723da1';
$ANNOTATION_ID_1 = '55ccf4250ba34592ac48fd2b839652fe';
$ANNOTATION_ID_2 = '5a6dafa3864a4d768a4c32e514dd8da1';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\ListAnnotationsRequest;
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
[$response, $status] = $client->ListAnnotations(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new ListAnnotationsRequest([
        "user_app_id" => $userDataObject, 
        "input_ids"  => [$INPUT_ID_1, $INPUT_ID_2],
        "ids"  => [$ANNOTATION_ID_1, $ANNOTATION_ID_2],
        "per_page" => 10
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

foreach ($response->getAnnotations() as $annotation_object) {
    echo $annotation_object->SerializeToJSONString() . "</br>";
}

?>