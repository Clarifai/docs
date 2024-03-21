<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the 
// nodes to suppress their outputs. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to suppress the outputs of your own nodes
$WORKFLOW_ID = "predict-cluster-only";
$NODE_ID_1 = "general-embed";
$MODEL_ID_1 = "bbb5f41425b8468d9b7a554ff10f8581";
$MODEL_VERSION_ID_1 = "bb186755eda04f9cbb6fe32e816be104";

$NODE_ID_2 = "general-cluster";
$MODEL_ID_2 = "cccbe437d6e54e2bb911c6aa292fb072";
$MODEL_VERSION_ID_2 = "cc2074cff6dc4c02b6f4e1b8606dcb54";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostWorkflowsRequest;
use Clarifai\Api\Workflow;
use Clarifai\Api\WorkflowNode;
use Clarifai\Api\NodeInput;
use Clarifai\Api\Model;
use Clarifai\Api\ModelVersion;
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
[$response, $status] = $client->PostWorkflows(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostWorkflowsRequest([
        "user_app_id" => $userDataObject,
        "workflows" => [
            new Workflow([
                "id" => $WORKFLOW_ID,
                "nodes" => [
                    new WorkflowNode([
                        "id" => $NODE_ID_1,
                        "model" => new Model([
                            "id" => $MODEL_ID_1,
                            "model_version" => new ModelVersion([
                                "id" => $MODEL_VERSION_ID_1
                            ])
                        ]),

                        "suppress_output" => true

                    ]),
                    new WorkflowNode([
                        "id" => $NODE_ID_2,
                        "model" => new Model([
                            "id" => $MODEL_ID_2,
                            "model_version" => new ModelVersion([
                                "id" => $MODEL_VERSION_ID_2
                            ])
                        ]),
                        "node_inputs" => [
                            new NodeInput([
                                "node_id" => $NODE_ID_1
                            ])
                        ]
                    ])
                ]
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