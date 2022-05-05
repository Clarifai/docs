//index.js file

////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model ID, 
// and concept ID. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to remove your own concept from a model
const MODEL_ID = 'petsID';
const CONCEPT_ID = 'charlie';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PatchModels(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        action: "remove",  // Supported actions: overwrite, merge, remove
        models: [
            {
                id: MODEL_ID,
                output_info: { data: { concepts: [{ id: CONCEPT_ID }] } }
            }
        ]
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