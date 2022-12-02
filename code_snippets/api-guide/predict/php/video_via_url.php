<?php

require __DIR__ . '/vendor/autoload.php';

//////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model details, URL of the video
// we want as an input, and sample_ms. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = 'YOUR_PAT_HERE';
$APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever model and video URL you want to use
$MODEL_ID = 'general-image-recognition';
$MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';
$VIDEO_URL = 'https://samples.clarifai.com/beer.mp4';
// Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS)
$SAMPLE_MS = 500;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Video;
use Clarifai\Api\Input;
use Clarifai\Api\PostModelOutputsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Clarifai\Api\Model;
use Clarifai\Api\OutputInfo;
use Clarifai\Api\OutputConfig;

$client = ClarifaiClient::grpc();

$metadata = ['Authorization' => ['Key ' . $PAT ]];

$userDataObject = new UserAppIDSet([
    'user_id' => $USER_ID, 
    'app_id' => $APP_ID 
]);

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
                'data' => new Data([ // The Data object is constructed around the Video object. It offers a container that has additional video independent
                                    // metadata. In this particular use case, no other metadata is needed to be specified
                    'video' => new Video([ // In the Clarifai platform, a video is defined by a special Video object
                        'url' => $VIDEO_URL 
                    ])
                ])
            ])
        ],
        'model' => new Model([
            'output_info' => new OutputInfo([
                'output_config'=> new OutputConfig([
                    'sample_ms'=> $SAMPLE_MS
            ])
            ])
        ])
    ]),
    $metadata
)->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) throw new Exception("Error: {$status->details}");

// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure 
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " .
        $response->getStatus()->getDetails());
}

// The output of a successful call can be used in many ways. In this example, we loop through all of the frames of the video and print out the predicted 
// concepts for each along with their numerical prediction value (confidence). 
echo "Predicted concepts:\n";
foreach ($response->getOutputs()[0]->getData()->getFrames() as $frame) {
    echo "Predicted concepts on frame " . $frame->getFrameInfo()->getTime() . ":";
    foreach ($frame->getData()->getConcepts() as $concept) {
        echo "   " . $concept->getName() . ": " . number_format($concept->getValue(), 2) . "\n";
    }
}

?>