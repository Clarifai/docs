<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model ID, and
// audio URL. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
$USER_ID = "facebook";
$APP_ID = "asr";
// Change these to make your own predictions
$MODEL_ID = "asr-wav2vec2-base-960h-english";
$AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\Api\Audio;
use Clarifai\ClarifaiClient;
use Clarifai\Api\PostModelOutputsRequest;
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
[$response, $status] = $client->PostModelOutputs(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostModelOutputsRequest([
        "user_app_id" => $userDataObject,
        "model_id" => $MODEL_ID,
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

// We'll get one output for each input we used above. Because of one input, we have here one output
$output = $response->getOutputs()[0];

// Print the output
echo $output->getData()->getText()->getRaw();

?>