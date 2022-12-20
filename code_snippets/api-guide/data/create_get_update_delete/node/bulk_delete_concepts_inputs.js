//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the inputs and 
// concepts IDs. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the concepts you want to remove
const INPUT_ID_1 = 'ff79664eefe94db1878f51931f9d6fd9';
const INPUT_ID_2 = 'f54b89ef64874888a64f7016cf6f33ad';
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
        action: "remove",  // Supported actions: overwrite, merge, remove
        inputs: [
            {
                id: INPUT_ID_1,
                // We're removing the concepts, so there's no need to specify
                // the concept value
                data: { concepts: [{ id: CONCEPT_ID_1 }, { id: CONCEPT_ID_2 }] }
            },
            {
                id: INPUT_ID_2,
                data: { concepts: [{ id: CONCEPT_ID_3 }, { id: CONCEPT_ID_4 }] }
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