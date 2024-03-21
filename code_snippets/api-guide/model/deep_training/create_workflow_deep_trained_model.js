//index.js file

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details we want
// to use to create a workflow. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own workflow
const WORKFLOW_ID = 'my-new-workflow-id';
const EMBED_MODEL_ID = 'YOUR_EMBED_MODEL_ID';
const EMBED_MODEL_VERSION_ID = 'YOUR_EMBED_MODEL_VERSION_ID';
const WORKFLOWNODE_ID = 'my-custom-model';
const CUSTOM_MODEL_ID = 'YOUR_CUSTOM_MODEL_ID';
const CUSTOM_MODEL_VERSION_ID = 'YOUR_CUSTOM_MODEL_VERSION_ID';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostWorkflows(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        workflows: [
            {
                id: WORKFLOW_ID,
                nodes: [
                    {
                        id: "embed",
                        model: {
                            id: EMBED_MODEL_ID,
                            model_version: {
                                id: EMBED_MODEL_VERSION_ID
                            }
                        }
                    },
                    {
                        id: WORKFLOWNODE_ID,
                        model: {
                            id: CUSTOM_MODEL_ID,
                            model_version: {
                                id: CUSTOM_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            { node_id: "embed" }
                        ]
                    }
                ]
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
            throw new Error("Post workflows failed, status: " + response.status.description);
        }
    }
);