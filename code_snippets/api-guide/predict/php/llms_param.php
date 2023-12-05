<?php

require __DIR__ . "/vendor/autoload.php";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and raw text we want as a prompt.
// Change these values to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
$USER_ID = "meta";
$APP_ID = "Llama-2";
// Change these to whatever model and image URL you want to use
$MODEL_ID = "llama2-7b-chat";
$MODEL_VERSION_ID = "e52af5d6bc22445aa7a6761f327f7129";
$RAW_TEXT = "I love your product very much!";
// To use a hosted text file, assign the URL variable
// $TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt";
// Or, to use a local text file, assign the location variable
// $TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Text;
use Clarifai\Api\Input;
use Clarifai\Api\Model;
use Clarifai\Api\ModelVersion;
use Clarifai\Api\OutputInfo;
use Clarifai\Api\PostModelOutputsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Google\Protobuf\Struct;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// Create Struct instance
$params = new Struct();
$params->temperature = 0.5;
$params->max_tokens = 2048;
$params->top_k = 0.95;

// $textData = file_get_contents($TEXT_FILE_LOCATION); // Get the text bytes data from the location

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostModelOutputs(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostModelOutputsRequest([
        "user_app_id" => $userDataObject,
        "model_id" => $MODEL_ID,
        "version_id" => $MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
        "inputs" => [
            new Input([
                // The Input object wraps the Data object in order to meet the API specification
                "data" => new Data([
                    // The Data object is constructed around the Text object. It offers a container that has additional text independent
                    // metadata. In this particular use case, no other metadata is needed to be specified
                    "text" => new Text([
                        // In the Clarifai platform, a text is defined by a special Text object
                        "raw" => $RAW_TEXT,
                        // "url" => $TEXT_FILE_URL
                        // "raw" => $textData
                    ]),
                ]),
            ]),
        ],
        "model" => new Model([
            "model_version" => new ModelVersion([
                "output_info" => new OutputInfo(["params" => $params]),
            ]),
        ]),
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
        "Failure response: " . $response->getStatus()->getDescription() . " " .
            $response->getStatus()->getDetails()
    );
}

echo "Completion: </br>";
# Since we have one input, one output will exist here
echo $response->getOutputs()[0]->getData()->getText()->getRaw()

?>