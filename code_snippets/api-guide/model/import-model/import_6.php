<?php

require __DIR__ . "/vendor/autoload.php";

/////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model ID, and model ZIP URL.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to import your own model
$MODEL_ID = "embedding-model";
$MODEL_ZIP_URL = "s3://clarifai-testing-persistent-data/test_triton_upload/jina-embeddings-v2-base-en.zip";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\PostModelVersionsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;
use Clarifai\Api\ModelVersion;
use Clarifai\Api\PretrainedModelConfig;
use Google\Protobuf\Struct;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// create Struct instances
$input__fields_params = new Struct();
$input__fields_params->text = "text";

$output__fields_params = new Struct();
$output__fields_params->embeddings = "embeddings";

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PostModelVersions(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostModelVersionsRequest([
        "user_app_id" => $userDataObject,
        "model_id" => $MODEL_ID,
        "model_versions" => [
            new ModelVersion([
                "pretrained_model_config" => new PretrainedModelConfig([
                    "input_fields_map" => $input__fields_params,
                    "output_fields_map" => $output__fields_params,
                    "model_zip_url" => $MODEL_ZIP_URL
                ])
            ]),
        ],
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
    throw new Exception("Failure response: " . $response->getStatus()->getDescription() . " " . $response->getStatus()->getDetails());
}

?>
