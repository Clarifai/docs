<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and concept ID.
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change this to rank the filtered results by your own concept
$CONCEPT_ID = "cat";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostAnnotationsSearchesRequest;
use Clarifai\Api\Annotation;
use Clarifai\Api\Data;
use Clarifai\Api\Filter;
use Clarifai\Api\Query;
use Clarifai\Api\Search;
use Clarifai\Api\Concept;
use Clarifai\Api\Rank;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Google\Protobuf\Struct;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID
]);

// create Struct instance
$params = new Struct();
$params->type = "animal";

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
                                    "metadata" => $params
                                ])
                            ])
                        ])
                    ],
                    "ranks" => [
                        new Rank([
                            "annotation" => new Annotation([
                                "data" => new Data([
                                    "concepts" => [  // You can search by multiple concepts
                                        new Concept([
                                            "id" => $CONCEPT_ID, // You could search by concept name as well
                                            "value" => 1 // Value of 0 will search for images that don't have the concept
                                        ])
                                    ]
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
