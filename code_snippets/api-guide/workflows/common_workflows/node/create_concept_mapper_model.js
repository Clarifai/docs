//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the concept
// mapper model we want to create. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own concept mapper model
const SYNONYM_MODEL_ID = 'synonym-model-id';
const MODEL_TYPE_ID = 'concept-synonym-mapper';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const params = {
    knowledge_graph_id: ""
}

stub.PostModels(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        models: [
            {
                id: SYNONYM_MODEL_ID,
                model_type_id: MODEL_TYPE_ID,
                output_info: {
                    params: params,
                }
            },
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
