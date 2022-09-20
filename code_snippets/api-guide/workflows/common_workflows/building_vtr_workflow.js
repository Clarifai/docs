//index.js file

/////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the 
// VTR Workflow we want to build. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to build your own VTR Workflow
const WORKFLOW_ID = 'visual-text-recognition-id';

const WORKFLOWNODE_ID_1 = 'detect-concept';
const MODEL_ID_1 = '2419e2eae04d04f820e5cf3aba42d0c7';
const MODEL_VERSION_ID_1 = '75a5b92a0dec436a891b5ad224ac9170';

const WORKFLOWNODE_ID_2 = 'image-crop';
const MODEL_ID_2 = 'ce3f5832af7a4e56ae310d696cbbefd8';
const MODEL_VERSION_ID_2 = 'a78efb13f7774433aa2fd4864f41f0e6';

const WORKFLOWNODE_ID_3 = 'image-to-text';
const MODEL_ID_3 = '9fe78b4150a52794f86f237770141b33';
const MODEL_VERSION_ID_3 = 'd94413e582f341f68884cac72dbd2c7b';

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
            user_id: USER_ID,
            app_id: APP_ID
        },
        workflows: [
            {
                id: WORKFLOW_ID,
                nodes: [
                    {
                        id: WORKFLOWNODE_ID_1,
                        model: {
                            id: MODEL_ID_1,
                            model_version: {
                                id: MODEL_VERSION_ID_1
                            }
                        }
                    },
                    {
                        id: WORKFLOWNODE_ID_2,
                        model: {
                            id: MODEL_ID_2,
                            model_version: {
                                id: MODEL_VERSION_ID_2
                            }
                        },
                        node_inputs: [
                            {
                                node_id: WORKFLOWNODE_ID_1
                            }
                        ]
                    },
                    {
                        id: WORKFLOWNODE_ID_3,
                        model: {
                            id: MODEL_ID_3,
                            model_version: {
                                id: MODEL_VERSION_ID_3
                            }
                        },
                        node_inputs: [
                            {
                                node_id: WORKFLOWNODE_ID_2
                            }
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