<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the IDs of the
// inputs we want to delete. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these based on the inputs you want to delete
$INPUT_ID_1 = 'd4319bb362d9487e812970a3ed9ba028';
$INPUT_ID_2 = 'fc449e98ce3847c788954e3fec871d02';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\DeleteInputsRequest;
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
[$response, $status] = $client->DeleteInputs(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new DeleteInputsRequest([
            "user_app_id" => $userDataObject,
            'ids' => [$INPUT_ID_1, $INPUT_ID_2]
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
