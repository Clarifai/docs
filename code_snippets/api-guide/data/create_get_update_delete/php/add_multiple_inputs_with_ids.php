<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the URLs and IDs
// of the images we want as inputs. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to whatever inputs you want to add
$IMAGE_URL_1 = "https://samples.clarifai.com/metro-north.jpg";
$IMAGE_URL_2 = "https://samples.clarifai.com/puppy.jpeg";
$INPUT_ID_1 = "train1";
$INPUT_ID_2 = "puppy1";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Image;
use Clarifai\Api\Input;
use Clarifai\Api\PostInputsRequest;
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
[$response, $status] = $client->PostInputs(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PostInputsRequest([
            "user_app_id" => $userDataObject,
            "inputs" => [
                new Input([
                    // The Input object wraps the Data object in order to meet the API specification
                    "id" => $INPUT_ID_1,
                    "data" => new Data([
                        // The Data object is constructed around the Image object. It offers a container that has additional image independent
                        // metadata. In this particular use case, no other metadata is needed to be specified
                        "image" => new Image([
                            // In the Clarifai platform, an image is defined by a special Image object
                            "url" => $IMAGE_URL_1,
                            "allow_duplicate_url" => true
                        ])
                    ])
                ]),
                new Input([
                    "id" => $INPUT_ID_2,
                    "data" => new Data([
                        "image" => new Image([
                            "url" => $IMAGE_URL_2,
                            "allow_duplicate_url" => true
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
    print "There was an error with your request!" . "<br>";
    foreach ($response->getInputs() as $input_object) {
        print "Input " . $input_object->getId() . " status: ";
        print $input_object->getStatus()->getDetails() . "<br>";
    }
    throw new Exception("Post inputs failed, status: " . $response->getStatus()->getDescription());
}

?>
