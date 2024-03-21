<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the text we want
// to provide as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
$USER_ID = "eleven-labs";
$APP_ID = "audio-generation";
// Change these to whatever model and image URL you want to use
$MODEL_ID = "speech-synthesis";
$MODEL_VERSION_ID = "f588d92c044d4487a38c8f3d7a3b0eb2";
$RAW_TEXT = "I love your product very much!";
# To use a hosted text file, assign the URL variable
# $TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt";
# Or, to use a local text file, assign the location variable
# $TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE";

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

// create Struct instance
$params = new Struct();
$params->model_id = "eleven_multilingual_v1";
$params->voice_id = "pNInz6obpgDQGcFmaJgB";
$params->stability = 0.4;
$params->similarity_boost = 0.7;

//$textData = file_get_contents($TEXT_FILE_LOCATION); // Get the text bytes data from the location

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

// Save the output file
$output = $response->getOutputs()[0]->getData()->getAudio()->getBase64();

$audioFilename = "audio_file.wav";
file_put_contents($audioFilename, base64_decode($output));

?>
