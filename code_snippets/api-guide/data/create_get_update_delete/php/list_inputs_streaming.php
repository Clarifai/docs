<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////
// In this section, we set the user authentication and app ID. 
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\StreamInputsRequest;
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
[$response, $status] = $client->StreamInputs(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new StreamInputsRequest([
            "user_app_id" => $userDataObject,            
            "per_page" => 5
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

print "First response (starting from the first input): <br>";
foreach ($response->getInputs() as $input_object){
    print $input_object->getId() . "<br>";
}

$last_id = $response->getInputs()[count($response->getInputs())-1]->getId();

// Set last_id to get the next set of inputs. The returned inputs will not include the last_id input
[$response, $status] = $client->StreamInputs(   
    new StreamInputsRequest([
        "user_app_id" => $userDataObject,            
        "per_page" => 5,
        "last_id" => $last_id
    ]),
    $metadata
)->wait();

print "<br>";
print "Second response (first input is the one following input ID $last_id): <br>";
foreach ($response->getInputs() as $input_object){
    print $input_object->getId() . "<br>";
}

?>
