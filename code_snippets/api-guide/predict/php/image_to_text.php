<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
$USER_ID = "salesforce";
$APP_ID = "blip";
// Change these to whatever model and image URL you want to use
$MODEL_ID = "general-english-image-caption-blip";
$MODEL_VERSION_ID = "cdb690f13e62470ea6723642044f95e4";
$IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
// To use a local file, assign the location variable
// $IMAGE_FILE_LOCATION = "YOUR_IMAGE_FILE_LOCATION_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Image;
use Clarifai\Api\Input;
use Clarifai\Api\PostModelOutputsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// To use a local text file, uncomment the following lines
// $imageData = file_get_contents($IMAGE_FILE_LOCATION);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client
    ->PostModelOutputs(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PostModelOutputsRequest([
            "user_app_id" => $userDataObject,
            "model_id" => $MODEL_ID,
            "version_id" => $MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
            "inputs" => [
                new Input([
                    // The Input object wraps the Data object in order to meet the API specification
                    "data" => new Data([
                        // The Data object is constructed around the Image object. It offers a container that has additional image independent
                        // metadata. In this particular use case, no other metadata is needed to be specified
                        "image" => new Image([
                            // In the Clarifai platform, an image is defined by a special Image object
                            "url" => $IMAGE_URL,
                            // "base64" => $imageData,
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

// Since we have one input, one output will exist here
$output = $response->getOutputs()[0];

echo "Image caption:" . "\n";
echo $output->getData()->getText()->getRaw() . "\n";

// Uncomment this line to print the full Response JSON
// echo json_encode($output->serializeToJsonString()) . "\n";

?>
