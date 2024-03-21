//index.js file

///////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and concept ID.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever concepts you want to process
const CONCEPT_ID = 'cat';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.GetConcept(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        concept_id: CONCEPT_ID
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Get concepts failed, status: " + response.status.description);
        }

        const concept = response.concept;
        console.log(JSON.stringify(concept, null, 2));
    }
);