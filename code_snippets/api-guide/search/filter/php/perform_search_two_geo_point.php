<?php

require __DIR__ . "/vendor/autoload.php";

/////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details of the points 
// we want to perform a search with. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to perform your own search
$LONGITUDE_1 = -31.0;
$LATITUDE_1 = 42.0;
$LONGITUDE_2 = -29.0;
$LATITUDE_2 = 39.0;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostAnnotationsSearchesRequest;
use Clarifai\Api\Annotation;
use Clarifai\Api\Data;
use Clarifai\Api\Filter;
use Clarifai\Api\Geo;
use Clarifai\Api\GeoLimit;
use Clarifai\Api\GeoPoint;
use Clarifai\Api\GeoBoxedPoint;
use Clarifai\Api\Query;
use Clarifai\Api\Search;
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
[$response, $status] = $client->PostAnnotationsSearches(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostAnnotationsSearchesRequest([
        "user_app_id" => $userDataObject,
        "searches" => [
            new Search([
                "query" => new Query([
                    "filters" => [
                        new Filter([
                            "annotation" => new Annotation([
                                "data" => new Data([
                                    "geo" => new Geo([
                                        "geo_box" => [
                                            new GeoBoxedPoint([
                                                "geo_point" => new GeoPoint([
                                                    "longitude" => $LONGITUDE_1,
                                                    "latitude" => $LATITUDE_1                                                
                                                ])
                                            ]),
                                            new GeoBoxedPoint([
                                                "geo_point" => new GeoPoint([
                                                    "longitude" => $LONGITUDE_2,
                                                    "latitude" => $LATITUDE_2
                                                ])
                                            ])

                                        ]

                                    ])

                                ])
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

echo "Search result:\n";
foreach ($response->getHits() as $hit) {
    printf("\tScore %.2f for annotation: %s off input: %s\n", $hit->getScore(), $hit->getAnnotation()->getId(), $hit->getInput()->getId());
}

?>
