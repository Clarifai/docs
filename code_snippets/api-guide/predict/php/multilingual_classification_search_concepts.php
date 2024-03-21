<?php

require __DIR__ . '/vendor/autoload.php';

///////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and concept name and language.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to whatever you want to process
$CONCEPT_NAME = '人';
$CONCEPT_LANGUAGE = "zh"; // Chinese

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\ConceptQuery;
use Clarifai\Api\PostConceptsSearchesRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ['Authorization' => ['Key ' . $PAT ]];

$userDataObject = new UserAppIDSet([
    'user_id' => $USER_ID, 
    'app_id' => $APP_ID 
]);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostConceptsSearches(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostConceptsSearchesRequest([
        'user_app_id' => $userDataObject,
        // The ConceptQuery object contains the concept restrictions for the search
        'concept_query' => new ConceptQuery([
            'name' => $CONCEPT_NAME,
            'language' => $CONCEPT_LANGUAGE
        ])          
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

// The output of a successful call can be used in many ways. In this example, we loop through all of the predicted concepts 
// and print them out along with their numerical prediction value (confidence)
echo "Found concepts: </br>";
foreach ($response->getConcepts() as $concept) {
    echo $concept->getName() . ": " . number_format($concept->getValue(), 2) . "</br>";
}

?>