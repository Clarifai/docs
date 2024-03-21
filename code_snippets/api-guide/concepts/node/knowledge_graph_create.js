//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, subject concept ID,
// object concept ID, and predicate. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever relations you want to create
const SUBJECT_CONCEPT_ID = 'honey';
const OBJECT_CONCEPT_ID = 'food';
const PREDICATE = "hypernym"; // This can be hypernym, hyponym, or synonym.

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostConceptRelations(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        concept_id: SUBJECT_CONCEPT_ID,
        concept_relations: [
            {
                object_concept: {
                    id: OBJECT_CONCEPT_ID,
                },
                predicate: PREDICATE
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Create concept relations failed, status: " + response.status.description);
        }
    }
);