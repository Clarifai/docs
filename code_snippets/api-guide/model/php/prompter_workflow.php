<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the new
// custom workflow. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own custom workflow
$WORKFLOW_ID = "my-custom-prompter-workflow";

$NODE_ID_1 = "prompter-model";
$PROMPTER_MODEL_ID = "my-prompter-model";
$PROMPTER_MODEL_USER_ID = "YOUR_USER_ID_HERE";
$PROMPTER_MODEL_APP_ID = "my-custom-app";
$PROMPTER_MODEL_VERSION_ID = "e851fb99a3b14df788ce11accee45c19";

$NODE_ID_2 = "text-to-text";
$LLM_MODEL_ID = "GPT-4";
$LLM_MODEL_USER_ID = "openai";
$LLM_MODEL_APP_ID = "chat-completion";
$LLM_MODEL_VERSION = "5d7a50b44aec4a01a9c492c5a5fcf387";

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
                    "id"=> $WORKFLOW_ID,
                    "nodes" => [
                        new WorkflowNode([
                            "id" => $NODE_ID_1,                            
                            "model" => new Model([
                                "id" => $PROMPTER_MODEL_ID,
                                "user_id" => $PROMPTER_MODEL_USER_ID,
                                "app_id" => $PROMPTER_MODEL_APP_ID,
                                "model_version" => new ModelVersion([
                                    "id" => $PROMPTER_MODEL_VERSION_ID
                                ])
                            ])

                        ]),
                        new WorkflowNode([
                            "id" => $NODE_ID_2,
                            "model"=> new Model([
                                "id" => $LLM_MODEL_ID,
                                "user_id" => $LLM_MODEL_ID,
                                "app_id" => $LLM_MODEL_APP_ID,
                                "model_version" => new ModelVersion([
                                    "id" => $LLM_MODEL_VERSION
                                ])
                            ]),
                            "node_inputs" => [
                                new NodeInput([
                                    "node_id"=> $NODE_ID_1
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