<?php

require __DIR__ . "/vendor/autoload.php";

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the
// workflow we want to update. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to update your own workflow
$WORKFLOW_ID = "my-custom-workflow";
$NODE_ID_1 = "audio-to-text";
$MODEL_ID_1 = "asr-wav2vec2-base-960h-english";
$MODEL_VERSION_ID_1 = "f4deae70a473492a8e2f9b7bb1dbee85";

$NODE_ID_2 = "text-summarization";
$MODEL_ID_2 = "text-summarization-english-distilbart-cnn-12-6";
$MODEL_VERSION_ID_2 = "8279cec2221a4b1d9db774470940aebd";

$NODE_ID_3 = "english-to-french";
$MODEL_ID_3 = "translation-english-to-french-text";
$MODEL_VERSION_ID_3 = "c65a4a51c2b646fca5f0e4bf1ff200d7";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PatchWorkflowsRequest;
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
    "app_id" => $APP_ID,
]);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client
    ->PatchWorkflows(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PatchWorkflowsRequest([
            "user_app_id" => $userDataObject,
            "action" => "overwrite",
            "workflows" => [
                new Workflow([
                    "id" => $WORKFLOW_ID,
                    "nodes" => [
                        new WorkflowNode([
                            "id" => $NODE_ID_1,
                            "model" => new Model([
                                "id" => $MODEL_ID_1,
                                "model_version" => new ModelVersion([
                                    "id" => $MODEL_VERSION_ID_1,
                                ]),
                            ]),
                        ]),
                        new WorkflowNode([
                            "id" => $NODE_ID_2,
                            "model" => new Model([
                                "id" => $MODEL_ID_2,
                                "model_version" => new ModelVersion([
                                    "id" => $MODEL_VERSION_ID_2,
                                ]),
                            ]),
                            "node_inputs" => [
                                new NodeInput([
                                    "node_id" => $NODE_ID_1,
                                ]),
                            ],
                        ]),
                        new WorkflowNode([
                            "id" => $NODE_ID_3,
                            "model" => new Model([
                                "id" => $MODEL_ID_3,
                                "model_version" => new ModelVersion([
                                    "id" => $MODEL_VERSION_ID_3,
                                ]),
                            ]),
                            "node_inputs" => [
                                new NodeInput([
                                    "node_id" => $NODE_ID_2,
                                ]),
                            ],
                        ]),
                    ],
                ]),
            ],
        ]),
        $metadata
    )
    ->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) {
    throw new Exception("Error: {$status->details}");
}
// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    print $response->getStatus()->getDetails();
    throw new Exception(
        "Failure response: " . $response->getStatus()->getDescription()
    );
}

?>
