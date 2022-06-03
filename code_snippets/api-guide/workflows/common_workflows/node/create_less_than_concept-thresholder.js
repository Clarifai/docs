//index.js file

///////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the model
// we want to create. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own concept thresholder model
const MODEL_ID = 'less-than-model-id';
const MODEL_TYPE_ID = 'concept-thresholder';
const CONCEPT_ID_1 = 'peopleID';
const CONCEPT_ID_2 = 'manID';
const CONCEPT_ID_3 = 'adultID';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const params = {
    concept_threshold_type: "LESS_THAN"
}

stub.PostModels(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        models: [
            {
                id: MODEL_ID,
                model_type_id: MODEL_TYPE_ID,
                output_info: {
                    data: {
                        concepts: [
                            { id: CONCEPT_ID_1, value: 0.5 },
                            { id: CONCEPT_ID_2, value: 0.5 },
                            { id: CONCEPT_ID_3, value: 0.95 }
                        ]
                    },
                    params: params
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post models failed, status: " + response.status.description);
        }
    }
);