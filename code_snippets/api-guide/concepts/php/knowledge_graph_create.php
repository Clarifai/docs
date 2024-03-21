<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, subject concept ID, 
// object concept ID, and predicate. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to whatever relations you want to create
$SUBJECT_CONCEPT_ID = "honey";
$OBJECT_CONCEPT_ID = "food";
$PREDICATE = "hypernym"; // This can be hypernym, hyponym, or synonym

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostConceptRelationsRequest;
use Clarifai\Api\ConceptRelation;
use Clarifai\Api\Concept;
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
[$response, $status] = $client->PostConceptRelations(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostConceptRelationsRequest([
        "user_app_id" => $userDataObject, 
        "concept_id" => $SUBJECT_CONCEPT_ID,
        "concept_relations" => [
            new ConceptRelation([
                "object_concept" => new Concept(["id" => $OBJECT_CONCEPT_ID ]),
                "predicate" => $PREDICATE
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

print $response->serializeToJsonString();

?>