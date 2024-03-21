//index.js file

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the
// concepts we want to create. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own concepts
const CONCEPT_ID_1 = 'peopleID';
const CONCEPT_NAME_1 = 'people';

const CONCEPT_ID_2 = 'manID';
const CONCEPT_NAME_2 = 'man';

const CONCEPT_ID_3 = 'adultID';
const CONCEPT_NAME_3 = 'adult';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostConcepts(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        concepts: [
            {
                id: CONCEPT_ID_1,
                name: CONCEPT_NAME_1
            },
            {
                id: CONCEPT_ID_2,
                name: CONCEPT_NAME_2
            },
            {
                id: CONCEPT_ID_3,
                name: CONCEPT_NAME_3
            },
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post concepts failed, status: " + response.status.description);
        }
    }
);
