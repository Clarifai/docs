<?php

require __DIR__ . "/vendor/autoload.php";

/////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, workflow ID, video input,
// and sample_ms. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$USER_ID = "YOUR_USER_ID_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to make your own predictions
$WORKFLOW_ID = "YOUR_WORKFLOW_ID_HERE";
$VIDEO_URL = "https://samples.clarifai.com/beer.mp4";
# Or, to use a local video file, assign the location variable
# $VIDEO_FILE_LOCATION = "YOUR_VIDEO_FILE_LOCATION_HERE";
# Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS) 
$SAMPLE_MS = 500;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Video;
use Clarifai\Api\Input;
use Clarifai\Api\PostWorkflowResultsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Clarifai\Api\OutputConfig;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// To use a local text file, uncomment the following lines
// $videoData = file_get_contents($VIDEO_FILE_LOCATION); 

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
                        // The Data object is constructed around the Video object. It offers a container that has additional independent
                        // metadata. In this particular use case, no other metadata is needed to be specified
                        "video" => new Video([
                            // In the Clarifai platform, a Video is defined by a special Video object                            
                            "url" => $VIDEO_URL
                            // "base64" => $videoData 
                        ]),
                    ]),
                ]),
            ],
            "output_config" => new OutputConfig([
                "sample_ms" => $SAMPLE_MS
            ])
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

// Uncomment this line to print the raw output
print_r($results);

?>