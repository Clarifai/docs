//index.js file

//////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the input and 
// concept ID. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the concept you want to remove
const INPUT_ID = 'c99f1b557d1d43d1916b46f8ce4a0487';
const CONCEPT_ID = 'tree';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PatchInputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        action: "remove",  // Supported actions: overwrite, merge, remove
        inputs: [
            {
                id: INPUT_ID,
                // We're removing the concept, so there's no need to specify
                // the concept value
                data: { concepts: [{ id: CONCEPT_ID }] }
            },
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Patch inputs failed, status: " + response.status.description);
        }
    }
);