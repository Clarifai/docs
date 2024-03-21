<?php

require __DIR__ . '/vendor/autoload.php';

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the extraction job.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = 'YOUR_PAT_HERE';
$APP_ID = 'YOUR_APP_ID_HERE';
// Change these to make your own extraction
$INPUTS_JOB_ID = '';
$CLOUD_STORAGE_URL = 's3://samples.clarifai.com/storage/';
$CUSTOM_METADATA = '{"id": "id001"}';
$DATASET_ID_1 = 'dataset-1';
$CONCEPT_ID_1 = 'lamborghini23_A';
$CONCEPT_ID_2 = 'spiderman_a';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostInputsDataSourcesRequest;
use Clarifai\Api\InputsDataSource;
use Clarifai\Api\DataSourceURL;
use Clarifai\Api\Concept;
use Clarifai\Api\Data;
use Clarifai\Api\Input;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ['Authorization' => ['Key ' . $PAT]];

$userDataObject = new UserAppIDSet([
    'user_id' => $USER_ID,
    'app_id' => $APP_ID
]);

// Decode the JSON object into a PHP object
$CUSTOM_METADATA_DECODE = var_dump(json_decode($CUSTOM_METADATA));

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostInputsDataSources(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostInputsDataSourcesRequest([
        'user_app_id' => $userDataObject,
        'app_pat' => $PAT,
        'data_sources' => [
            new InputsDataSource([
                'inputs_add_job_id' => $INPUTS_JOB_ID,
                'url' => new DataSourceURL([
                    'url' => $CLOUD_STORAGE_URL,

                ]),
                'input_template' => new Input([
                    'dataset_ids' => [$DATASET_ID_1],
                    'data' => new Data([
                        'metadata' => $CUSTOM_METADATA_DECODE,
                        'concepts' => [
                            new Concept([
                                'id' => $CONCEPT_ID_1,
                                'value' => 1
                            ]),
                            new Concept([
                                'id' => $CONCEPT_ID_2,
                                'value' => 1
                            ])
                        ]
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

echo $response->serializeToJsonString();

?>
