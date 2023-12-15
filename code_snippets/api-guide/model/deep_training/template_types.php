<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and model type ID. 
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change this to list the template types of your preferred model 
$MODEL_TYPE = "visual-classifier";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\ListModelTypesRequest;
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
[$response, $status] = $client->ListModelTypes(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new ListModelTypesRequest([
        "user_app_id" => $userDataObject
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

foreach ($response->getModelTypes() as $modelType) {
    if ($modelType->getId() === $MODEL_TYPE) {
        foreach ($modelType->getModelTypeFields() as $modelTypeField) {
            $pathComponents = explode('.', $modelTypeField->getPath());
            if (end($pathComponents) === 'template') {
                foreach ($modelTypeField->getModelTypeEnumOptions() as $template) {
                    echo $template->serializeToJsonString() . "\n";
                }
            }
        }
    }
}
