<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, workflow ID, and
// audio URL. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$USER_ID = "clarifai";
$APP_ID = "main";
// Change these to make your own predictions
$WORKFLOW_ID = "asr-sentiment";
$AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav";
# Or, to use a local audio file, assign the location variable
# $AUDIO_FILE_LOCATION = "YOUR_AUDIO_FILE_LOCATION_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Audio;
use Clarifai\Api\Input;
use Clarifai\Api\PostWorkflowResultsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// To use a local text file, uncomment the following lines
//$audioData = file_get_contents($AUDIO_FILE_LOCATION);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client
    ->PostWorkflowResults(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PostWorkflowResultsRequest([
            "user_app_id" => $userDataObject,
            "workflow_id" => $WORKFLOW_ID,
            "inputs" => [
                new Input([
                    // The Input object wraps the Data object in order to meet the API specification
                    "data" => new Data([
                        // The Data object is constructed around the Audio object. It offers a container that has additional independent
                        // metadata. In this particular use case, no other metadata is needed to be specified
                        "audio" => new Audio([
                            // In the Clarifai platform, a audio is defined by a special Audio object
                            "url" => $AUDIO_URL,
                            //"base64" => $audioData
                        ]),
                    ]),
                ]),
            ],
        ]),
        $metadata
    )
    ->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) {
    throw new Exception("Error: {$status->details}");
}
// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception(
        "Failure response: " .
            $response->getStatus()->getDescription() .
            " " .
            $response->getStatus()->getDetails()
    );
}

// We'll get one WorkflowResult for each input we used above. Because of one input, we have here one WorkflowResult
$results = $response->getResults()[0];

// Each model we have in the workflow will produce its output
foreach ($results->getOutputs() as $output) {
    $model = $output->getModel();
    echo "Output for the model: `" . $model->getId() . "`" . "<br>";
    foreach ($output->getData()->getConcepts() as $concept) {
        echo $concept->getName() .
            " " .
            number_format($concept->getValue(), 2) .
            "<br>";
    }
    $textData = $output->getData()->getText();

    if ($textData !== null) {
        echo $textData->getRaw() . "<br>";
    }
}

// Uncomment this line to print the raw output
// echo $results->serializeToJsonString();
