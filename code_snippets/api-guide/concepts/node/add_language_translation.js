//index.js file

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, concept ID, and language ID and name.
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever concept you want to add its language translation
const CONCEPT_ID = 'charlie';
const LANGUAGE_ID = "ja";
const LANGUAGE_NAME = "ボスコ";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostConceptLanguages(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        concept_id: CONCEPT_ID,
        concept_languages: [
            {
                id: LANGUAGE_ID,
                name: LANGUAGE_NAME
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Get concepts failed, status: " + response.status.description);
        }
    }
);