//index.js file

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and input ID and concept IDs
// we want to update. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the update you want to make
const INPUT_ID = '7c5f489bcafe43fe8a71c68091cb64ce';
const CONCEPT_ID_1 = 'tree';
const CONCEPT_ID_2 = 'water';

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
        action: "merge",  // Supported actions: overwrite, merge, remove
        inputs: [
            {
                id: INPUT_ID,
                // 1 means true, this concept is present
                // 0 means false, this concept is not present
                data: { concepts: [{ id: CONCEPT_ID_1, value: 1 }, { id: CONCEPT_ID_2, value: 0 }] }
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