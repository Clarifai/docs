<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details of the
// collector we want to update. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to update your own collector
$COLLECTOR_ID = 'YOUR_COLLECTOR_ID_HERE';
$COLLECTOR_DESCRIPTION = 'YOUR_NEW_COLLECTOR_DESCRIPTION_HERE';
$PRE_QUEUE_WORKFLOW_ID = 'YOUR_NEW_PRE_WORKFLOW_ID';
$POST_QUEUE_WORKFLOW_ID = 'YOUR_NEW_POST_WORKFLOW_ID';
$MODEL_ID = 'YOUR_NEW_MODEL_ID_HERE';
$MODEL_VERSION_ID = 'YOUR_NEW_MODEL_VERSION_ID_HERE';
$POST_INPUTS_KEY_ID = 'YOUR_API_KEY_HERE';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\Api\Collector;
use Clarifai\ClarifaiClient;
use Clarifai\Api\PatchCollectorsRequest;
use Clarifai\Api\CollectorSource;
use Clarifai\Api\APIPostModelOutputsCollectorSource;
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
[$response, $status] = $client->PatchCollectors(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PatchCollectorsRequest([
            "user_app_id" => $userDataObject,
            "action" => "overwrite",
            "collectors" => [
                new Collector([                    
                    "id" => $COLLECTOR_ID,
                    "description" => $COLLECTOR_DESCRIPTION,
                    "pre_queue_workflow_id" => $PRE_QUEUE_WORKFLOW_ID,
                    "post_queue_workflow_id" => $POST_QUEUE_WORKFLOW_ID,
                    "collector_source" => 
                        new CollectorSource([
                            "api_post_model_outputs_collector_source" => 
                                new APIPostModelOutputsCollectorSource([
                                    "model_user_id" => $USER_ID,
                                    "model_app_id" => $APP_ID,
                                    "model_id" => $MODEL_ID,
                                    "model_version_id" => $MODEL_VERSION_ID,
                                    "post_inputs_key_id" => $POST_INPUTS_KEY_ID
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
    print $response->getStatus()->getDetails();
    throw new Exception("Failure response: " . $response->getStatus()->getDescription());
}

?>
