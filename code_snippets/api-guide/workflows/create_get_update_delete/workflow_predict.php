<?php

require __DIR__ . '/vendor/autoload.php';

/////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, workflow ID, and  
// image URL. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////

$USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = 'YOUR_PAT_HERE';
$APP_ID = 'YOUR_APP_ID_HERE';
// Change these to make your own predictions
$WORKFLOW_ID = 'my-custom-workflow';
$IMAGE_URL = 'https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Image;
use Clarifai\Api\Input;
use Clarifai\Api\PostWorkflowResultsRequest;
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
[$response, $status] = $client->PostWorkflowResults(
    // The request object carries the request along with the request status and other metadata related to the request itself
    new PostWorkflowResultsRequest([
        'user_app_id' => $userDataObject,
        'workflow_id' => $WORKFLOW_ID,          
        'inputs' => [
            new Input([ // The Input object wraps the Data object in order to meet the API specification                
                'data' => new Data([ // The Data object is constructed around the Image object. It offers a container that has additional image independent
                                    // metadata. In this particular use case, no other metadata is needed to be specified
                    'image' => new Image([ // In the Clarifai platform, an image is defined by a special Image object
                        'url' => $IMAGE_URL
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

// We'll get one WorkflowResult for each input we used above. Because of one input, we have here one WorkflowResult
$results = $response->getResults()[0];

// Each model we have in the workflow will produce its output
foreach ($results->getOutputs() as $output) {
    $model = $output->getModel();
    echo "Output for the model: '" . $model->getId() . "'" . "`<br>";
    $i = 0;
    while ($i < count($output->getData()->getRegions())) {
        echo $output->getData()->getRegions()[$i]->getData()->getText()->getRaw() . "`<br>";
        $i++;
    }
}

?>