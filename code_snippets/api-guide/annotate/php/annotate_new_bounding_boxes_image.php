<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and how we want to annotate
// new bounding boxes. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these based on the new bounding boxes you want to annotate
$INPUT_ID = "a8748df4938447e4844b2f505c8eaaef";
$CONCEPT_ID_1 = "tree";
$CONCEPT_ID_2 = "water";
$CONCEPT_ID_3 = "bike";  

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostAnnotationsRequest;
use Clarifai\Api\Annotation;
use Clarifai\Api\BoundingBox;
use Clarifai\Api\Concept;
use Clarifai\Api\Data;
use Clarifai\Api\Region;
use Clarifai\Api\RegionInfo;
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
[$response, $status] = $client->PostAnnotations(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostAnnotationsRequest([
        "user_app_id" => $userDataObject, 
        "annotations" => [
             new Annotation([
                "input_id" => $INPUT_ID,
                "data" => new Data([
                    "regions" => [
                        new Region([
                            "region_info" => new RegionInfo([
                                "bounding_box" => new BoundingBox([  // draw a bounding box
                                    "top_row" => 0,
                                    "left_col" => 0,
                                    "bottom_row" => 0.5,
                                    "right_col" => 0.5
                                ])                                
                            ]),
                            "data" => new Data([
                                "concepts" => [
                                    new Concept([ "id" => $CONCEPT_ID_1, "value" => 1. ]), // 1 means true, this concept is present
                                    new Concept([ "id" => $CONCEPT_ID_2, "value" => 0. ]), // 0 means false, this concept is not present
                                ]
                            ])
                        ])
                    ]
                ])
            ]),
            new Annotation([
                "input_id" => $INPUT_ID,
                "data" => new Data([
                    "regions" => [
                        new Region([
                            "region_info" => new RegionInfo([
                                "bounding_box" => new BoundingBox([  // draw another bounding box
                                    "top_row" => 0.6,
                                    "left_col" => 0.6,
                                    "bottom_row" => 0.8,
                                    "right_col" => 0.8
                                ])                                
                            ]),
                            "data" => new Data([
                                "concepts" => [
                                    new Concept([ "id" => $CONCEPT_ID_3, "value" => 1. ]), // 1 means true, this concept is present                                    
                                ]
                            ])
                        ])
                    ]
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

?>