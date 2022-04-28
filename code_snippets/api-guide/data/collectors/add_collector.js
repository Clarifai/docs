//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details of the
// collector we want to add. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to add your own collector
const COLLECTOR_ID = 'YOUR_COLLECTOR_ID_HERE';
const COLLECTOR_DESCRIPTION = 'YOUR_COLLECTOR_DESCRIPTION_HERE';
const PRE_QUEUE_WORKFLOW_ID = 'YOUR_PRE_WORKFLOW_ID_HERE';
const POST_QUEUE_WORKFLOW_ID = 'YOUR_POST_WORKFLOW_ID_HERE';
const MODEL_ID = 'YOUR_MODEL_ID_HERE';
const MODEL_VERSION_ID = 'YOUR_MODEL_VERSION_ID_HERE';
const POST_INPUTS_KEY_ID = 'YOUR_API_KEY_HERE';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostCollectors(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        collectors: [
            {
                id: COLLECTOR_ID,
                description: COLLECTOR_DESCRIPTION,
                pre_queue_workflow_id: PRE_QUEUE_WORKFLOW_ID,
                post_queue_workflow_id: POST_QUEUE_WORKFLOW_ID,
                collector_source: {
                    api_post_model_outputs_collector_source: {
                        model_user_id: USER_ID,
                        model_app_id: APP_ID,
                        model_id: MODEL_ID,
                        model_version_id: MODEL_VERSION_ID,
                        post_inputs_key_id: POST_INPUTS_KEY_ID
                    }
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
            console.log(response.status);
            throw new Error("Post collectors failed, status: " + response.status.description);
        }
    }
);