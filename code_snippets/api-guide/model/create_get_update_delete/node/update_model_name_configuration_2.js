//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and how we want to update the model. 
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to update your own model 
const MODEL_ID = 'petsID';
const MODEL_VERSION_ID = 'b0b89c973e5d4b6d9599ce13da04b894';
const MINIMUM_VALUE = 0.95;

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PatchModelVersions(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        action: "overwrite",
        model_id: MODEL_ID,
        model_versions:[{
            "id": MODEL_VERSION_ID, 
            "output_info": {
                "params": {
                    "min_value": MINIMUM_VALUE
                } 
            }
        }],
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch models failed, status: " + response.status.description);
        }
    }
);