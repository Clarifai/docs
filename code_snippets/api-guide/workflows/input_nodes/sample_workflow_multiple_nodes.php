<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the 
// workflow we want to build. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
# Change these to build your own workflow with multiple connected nodes
# Note that we've also added as comments the values of most of these variables against their names in the code below

$WORKFLOW_ID = "auto-annotation-workflow-id";
$NODE_ID_1 = "general-embed";
$MODEL_ID_1 = "bbb5f41425b8468d9b7a554ff10f8581";
$MODEL_VERSION_ID_1 = "bb186755eda04f9cbb6fe32e816be104";

$NODE_ID_2 = "general-concept";
$MODEL_ID_2 = "aaa03c23b3724a16a56b629203edc62c";
$MODEL_VERSION_ID_2 = "aa7f35c01e0642fda5cf400f543e7c40";

$NODE_ID_3 = "general-cluster";
$MODEL_ID_3 = "cccbe437d6e54e2bb911c6aa292fb072";
$MODEL_VERSION_ID_3 = "cc2074cff6dc4c02b6f4e1b8606dcb54";

$NODE_ID_4 = "mapper";
$SYNONYM_MODEL_ID = "YOUR_SYNONYM_MODEL_ID";
$SYNONYM_MODEL_VERSION_ID = "YOUR_SYNONYM_MODEL_VERSION_ID";

$NODE_ID_5 = "greater-than";
$GREATER_THAN_MODEL_ID = "YOUR_GREATER_THAN_MODEL_ID";
$GREATER_THAN_MODEL_VERSION_ID = "YOUR_GREATER_THAN_MODEL_VERSION_ID";

$NODE_ID_6 = "less-than";
$LESS_THAN_MODEL_ID = "YOUR_LESS_THAN_MODEL_ID";
$LESS_THAN_MODEL_VERSION_ID = "YOUR_LESS_THAN_MODEL_VERSION_ID";

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
                "id" => $WORKFLOW_ID, // auto-annotation-workflow-id
                "nodes" => [
                    new WorkflowNode([
                        "id" => $NODE_ID_1, // general-embed
                        "model" => new Model([
                            "id" => $MODEL_ID_1, // bbb5f41425b8468d9b7a554ff10f8581
                            "model_version" => new ModelVersion([
                                "id" => $MODEL_VERSION_ID_1 // bb186755eda04f9cbb6fe32e816be104
                            ])
                        ])

                    ]),
                    new WorkflowNode([
                        "id" => $NODE_ID_2, // general-concept
                        "model" => new Model([
                            "id" => $MODEL_ID_2, // aaa03c23b3724a16a56b629203edc62c
                            "model_version" => new ModelVersion([
                                "id" => $MODEL_VERSION_ID_2 // aa7f35c01e0642fda5cf400f543e7c40
                            ])
                        ])
                    ]),
                    new WorkflowNode([
                        "id" => $NODE_ID_3, // general-cluster
                        "model" => new Model([
                            "id" => $MODEL_ID_3, // cccbe437d6e54e2bb911c6aa292fb072
                            "model_version" => new ModelVersion([
                                "id" => $MODEL_VERSION_ID_3 // cc2074cff6dc4c02b6f4e1b8606dcb54
                            ])
                        ]),
                        "node_inputs" => [
                            new NodeInput([
                                "node_id" => $NODE_ID_1 // general-embed
                            ])
                        ]
                    ]),
                    new WorkflowNode([
                        "id" => $NODE_ID_4, // mapper
                        "model" => new Model([
                            "id" => $SYNONYM_MODEL_ID,
                            "model_version" => new ModelVersion([
                                "id" => $SYNONYM_MODEL_VERSION_ID
                            ])
                        ]),
                        "node_inputs" => [
                            new NodeInput([
                                "node_id" => $NODE_ID_2 // general-concept
                            ])
                        ]
                    ]),
                    new WorkflowNode([
                        "id" => $NODE_ID_5, // greater-than
                        "model" => new Model([
                            "id" => $GREATER_THAN_MODEL_ID,
                            "model_version" => new ModelVersion([
                                "id" => $GREATER_THAN_MODEL_VERSION_ID
                            ])
                        ]),
                        "node_inputs" => [
                            new NodeInput([
                                "node_id" => $NODE_ID_4 // mapper
                            ])
                        ]
                    ]),
                    new WorkflowNode([
                        "id" => $NODE_ID_6, // less-than
                        "model" => new Model([
                            "id" => $LESS_THAN_MODEL_ID,
                            "model_version" => new ModelVersion([
                                "id" => $LESS_THAN_MODEL_VERSION_ID
                            ])
                        ]),
                        "node_inputs" => [
                            new NodeInput([
                                "node_id" => $NODE_ID_4 // mapper
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