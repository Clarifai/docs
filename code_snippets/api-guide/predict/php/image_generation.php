<?php

require __DIR__ . '/vendor/autoload.php';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the prompt text we want
// to provide as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = 'YOUR_PAT_HERE';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
$USER_ID = 'stability-ai';
$APP_ID = 'stable-diffusion-2';
// Change these to whatever model and image URL you want to use
$MODEL_ID = 'stable-diffusion-xl';
$MODEL_VERSION_ID = '0c919cc1edfc455dbc96207753f178d7';
$RAW_TEXT = 'A penguin watching the sunset.';
# To use a hosted text file, assign the URL variable
# $TEXT_FILE_URL = 'https://samples.clarifai.com/negative_sentence_12.txt';
# Or, to use a local text file, assign the location variable
# $TEXT_FILE_LOCATION = 'YOUR_TEXT_FILE_LOCATION_HERE';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Text;
use Clarifai\Api\Input;
use Clarifai\Api\PostModelOutputsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ['Authorization' => ['Key ' . $PAT]];

$userDataObject = new UserAppIDSet([
    'user_id' => $USER_ID,
    'app_id' => $APP_ID
]);

//$textData = file_get_contents($TEXT_FILE_LOCATION); // Get the text bytes data from the location

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostModelOutputs(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostModelOutputsRequest([
        'user_app_id' => $userDataObject,
        'model_id' => $MODEL_ID,
        'version_id' => $MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
        'inputs' => [
            new Input([ // The Input object wraps the Data object in order to meet the API specification                
                'data' => new Data([ // The Data object is constructed around the Text object. It offers a container that has additional text independent
                    // metadata. In this particular use case, no other metadata is needed to be specified
                    'text' => new Text([ // In the Clarifai platform, a text is defined by a special Text object
                        'raw' => $RAW_TEXT
                        // 'url' => $TEXT_FILE_URL 
                        // 'raw' => $textData 
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
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " .
        $response->getStatus()->getDetails());
}

// Save the output image
$output = $response->getOutputs()[0]->getData()->getImage()->getBase64();

$imageFilename = "gen-image.jpg";
file_put_contents($imageFilename, base64_decode($output));
