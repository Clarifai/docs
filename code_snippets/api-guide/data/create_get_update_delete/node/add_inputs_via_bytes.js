//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the location
// of the image we want as an input. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE';
APP_ID = 'YOUR_APP_ID_HERE';
// Change this to whatever image input you want to add
IMAGE_FILE_LOCATION = 'YOUR_IMAGE_FILE_LOCATION';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const fs = require("fs");
const imageBytes = fs.readFileSync(IMAGE_FILE_LOCATION);

stub.PostInputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },

        inputs: [
            { data: { image: { base64: imageBytes } } }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.log(response.status)
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);