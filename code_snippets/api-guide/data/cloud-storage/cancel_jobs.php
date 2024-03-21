<?php

require __DIR__ . '/vendor/autoload.php';

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the inputs extraction job ID.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = 'YOUR_PAT_HERE';
$APP_ID = 'YOUR_APP_ID_HERE';
// Change this ID to whatever inputs you want to cancel their upload process
$INPUTS_EXTRACTION_JOB_ID = "2a6f1f69cced42029986a72009e7d4da";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\CancelInputsExtractionJobsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ['Authorization' => ['Key ' . $PAT]];

$userDataObject = new UserAppIDSet([
    'user_id' => $USER_ID,
    'app_id' => $APP_ID
]);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->CancelInputsExtractionJobs(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new CancelInputsExtractionJobsRequest([
        'user_app_id' => $userDataObject,
        'ids' => [$INPUTS_EXTRACTION_JOB_ID]
    ]),
    $metadata
)->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) {
    throw new Exception('Error: {$status->details}');
}

// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure 
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception('Failure response: ' . $response->getStatus()->getDescription() . ' ' .
        $response->getStatus()->getDetails());
}

echo $response->serializeToJsonString();

?>
