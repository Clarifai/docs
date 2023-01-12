<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, workflow ID, and
// audio URL. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to make your own predictions
$WORKFLOW_ID = "my-custom-workflow";
$AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\Api\Audio;
use Clarifai\ClarifaiClient;
use Clarifai\Api\PostWorkflowResultsRequest;
use Clarifai\Api\Input;
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
[$response, $status] = $client->PostWorkflowResults(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PostWorkflowResultsRequest([
            "user_app_id" => $userDataObject,
            "workflow_id" => $WORKFLOW_ID,
            "inputs" => [
                new Input([
                    "data" => new Data([
                        "audio" => new Audio([
                            "url" => $AUDIO_URL
                        ])
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

// We'll get one WorkflowResult for each input we used above. Because of one input, we have here one WorkflowResult
$results = $response->getResults()[0];

// Each model we have in the workflow will produce its output
foreach ($results->getOutputs() as $output){
    $model = $output->getModel();
    print "Output for the model: `" . $model->getId() . "`" . "<br>";
    foreach ($output->getData()->getConcepts() as $concept){
        print $concept->getName() . " " . number_format($concept->getValue(),2) . "<br>";
    }
    print $output->getData()->getText()->getRaw() . "<br>";
}

?>
