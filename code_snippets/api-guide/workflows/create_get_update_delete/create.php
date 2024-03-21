<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the new
// custom workflow we want to create. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own custom workflow
$WORKFLOW_ID = "my-custom-workflow";
$NODE_ID_1 = "optical-character-recognizer";
$MODEL_ID_1 = "ocr-scene-english-paddleocr";
$MODEL_VERSION_ID_1 = "40dbb2c9cde44a27af226782e7157006";

$NODE_ID_2 = "text-to-text";
$MODEL_ID_2 = "text-translation-english-spanish";
$MODEL_VERSION_ID_2 = "643f30558de34013aff72b0e21f244f5";

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
                                "id" => $MODEL_ID_1,
                                "model_version" => new ModelVersion([
                                    "id" => $MODEL_VERSION_ID_1
                                ])
                            ])

                        ]),
                        new WorkflowNode([
                            "id" => $NODE_ID_2,
                            "model"=> new Model([
                                "id" => $MODEL_ID_2,
                                "model_version" => new ModelVersion([
                                    "id" => $MODEL_VERSION_ID_2
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
