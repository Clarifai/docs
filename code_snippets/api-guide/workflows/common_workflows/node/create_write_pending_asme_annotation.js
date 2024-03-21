//index.js file

///////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the model
// we want to create. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own annotation writer model
const ANNOTATION_USER_ID = 'ANNOTATION_USER_ID_HERE';
const MODEL_ID = 'write-pending-model-id';
const MODEL_TYPE_ID = 'annotation-writer';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const params = {
    annotation_status: "ANNOTATION_SUCCESS",
    annotation_user_id: ANNOTATION_USER_ID
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