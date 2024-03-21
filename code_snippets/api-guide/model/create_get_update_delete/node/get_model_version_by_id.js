//index.js file

////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the ID and version
// of the model we want to get its details. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to your own model ID and version
const MODEL_ID = 'petsID';
const MODEL_VERSION_ID = '7625a111b626438bb81a34c3b84d732f';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.GetModelVersion(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        model_id: MODEL_ID,
        version_id: MODEL_VERSION_ID
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Get model version failed, status: " + response.status.description);
        }

        const model_version = response.model_version;
        console.log(JSON.stringify(model_version, null, 2));
    }
);