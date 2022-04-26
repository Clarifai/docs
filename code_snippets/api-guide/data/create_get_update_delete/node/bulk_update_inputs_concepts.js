//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the inputs and 
// concepts IDs we want to update. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the updates you want to make
const INPUT_ID_1 = 'c99f1b557d1d43d1916b46f8ce4a0487';
const INPUT_ID_2 = '1be923b967f148dbb4e588cf4a723da1';
const CONCEPT_ID_1 = 'tree';
const CONCEPT_ID_2 = 'water';
const CONCEPT_ID_3 = 'animal';
const CONCEPT_ID_4 = 'fruit';

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
        action: "merge",  // Supported actions: overwrite, merge, remove.
        inputs: [
            {
                id: INPUT_ID_1,
                data: { concepts: [{ id: CONCEPT_ID_1, value: 1 }, { id: CONCEPT_ID_2, value: 0 }] }
            },
            {
                id: INPUT_ID_2,
                data: { concepts: [{ id: CONCEPT_ID_3, value: 1 }, { id: CONCEPT_ID_4, value: 0 }] }
            }
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